import { NextResponse } from "next/server";

import { ProjectsPayloadSchema } from "@/lib/content/projects/schema";
import {
  base64DecodeUtf8,
  base64EncodeUtf8,
  githubRequest,
} from "@/lib/github/client";
import type {
  GitHubContentResponse,
  GitHubUpdateContentResponse,
} from "@/lib/github/types";

export const runtime = "nodejs";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

function githubContentsUrl(owner: string, repo: string, path: string) {
  const safePath = path.replace(/^\/+/, "");
  return `https://api.github.com/repos/${owner}/${repo}/contents/${safePath}`;
}

export async function GET() {
  try {
    const token = requiredEnv("GITHUB_TOKEN");
    const owner = requiredEnv("GITHUB_OWNER");
    const repo = requiredEnv("GITHUB_REPO");
    const branch = process.env.GITHUB_BRANCH ?? "main";
    const path = process.env.GITHUB_PROJECTS_PATH ?? "content/projects.json";

    const url = `${githubContentsUrl(owner, repo, path)}?ref=${encodeURIComponent(branch)}`;
    const result = await githubRequest<GitHubContentResponse>({
      token,
      url,
    });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 502 },
      );
    }

    if (result.data.type !== "file" || result.data.encoding !== "base64") {
      return NextResponse.json(
        { ok: false, error: "Expected a base64-encoded file response" },
        { status: 502 },
      );
    }

    const rawContent = base64DecodeUtf8((result.data.content ?? "").replace(/\n/g, ""));
    const json = JSON.parse(rawContent) as unknown;
    const parsed = ProjectsPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: `Remote JSON is invalid: ${parsed.error.message}`,
          sha: result.data.sha,
          path,
          branch,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      payload: parsed.data,
      sha: result.data.sha,
      path,
      branch,
      repo: `${owner}/${repo}`,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const token = requiredEnv("GITHUB_TOKEN");
    const owner = requiredEnv("GITHUB_OWNER");
    const repo = requiredEnv("GITHUB_REPO");
    const branch = process.env.GITHUB_BRANCH ?? "main";
    const path = process.env.GITHUB_PROJECTS_PATH ?? "content/projects.json";

    const body = (await request.json()) as unknown;

    // Accept either { projects: [...] } or { payload: { projects: [...] } }
    const candidate =
      typeof body === "object" && body && "payload" in body
        ? (body as { payload: unknown }).payload
        : body;

    const parsed = ProjectsPayloadSchema.safeParse(candidate);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: `Invalid payload: ${parsed.error.message}` },
        { status: 400 },
      );
    }

    // Fetch current SHA to update.
    const getUrl = `${githubContentsUrl(owner, repo, path)}?ref=${encodeURIComponent(branch)}`;
    const current = await githubRequest<GitHubContentResponse>({ token, url: getUrl });

    if (!current.ok) {
      return NextResponse.json(
        { ok: false, error: current.error },
        { status: 502 },
      );
    }

    const sha = current.data.sha;
    if (!sha) {
      return NextResponse.json(
        { ok: false, error: "Missing SHA for remote file" },
        { status: 502 },
      );
    }

    const nextContent = JSON.stringify(parsed.data, null, 2) + "\n";

    const putUrl = githubContentsUrl(owner, repo, path);
    const update = await githubRequest<GitHubUpdateContentResponse>({
      token,
      url: putUrl,
      method: "PUT",
      body: {
        message: "chore(portfolio): update projects content",
        content: base64EncodeUtf8(nextContent),
        sha,
        branch,
      },
    });

    if (!update.ok) {
      return NextResponse.json(
        { ok: false, error: update.error },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      path,
      branch,
      repo: `${owner}/${repo}`,
      commitSha: update.data.commit?.sha,
      commitUrl: update.data.commit?.html_url,
      newSha: update.data.content?.sha,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
