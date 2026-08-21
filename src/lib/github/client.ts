type RequestOptions = {
  method?: "GET" | "PUT";
  token: string;
  url: string;
  body?: unknown;
};

export async function githubRequest<T>({
  method = "GET",
  token,
  url,
  body,
}: RequestOptions): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : null),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    return {
      ok: false,
      error: `GitHub API error: ${response.status} ${response.statusText}${text ? ` - ${text}` : ""}`,
    };
  }

  const data = (await response.json()) as T;
  return { ok: true, data };
}

export function base64EncodeUtf8(input: string) {
  // Node runtime: Buffer is fine.
  return Buffer.from(input, "utf8").toString("base64");
}

export function base64DecodeUtf8(inputBase64: string) {
  return Buffer.from(inputBase64, "base64").toString("utf8");
}
