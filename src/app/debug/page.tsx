"use client";

import { useEffect, useMemo, useState } from "react";

type GetResponse =
  | {
      ok: true;
      payload: unknown;
      sha?: string;
      path: string;
      branch: string;
      repo: string;
    }
  | { ok: false; error: string };

type PutResponse =
  | {
      ok: true;
      path: string;
      branch: string;
      repo: string;
      commitSha?: string;
      commitUrl?: string;
      newSha?: string;
    }
  | { ok: false; error: string };

export default function DebugProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GetResponse | null>(null);
  const [rawJson, setRawJson] = useState<string>("{");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const hint = useMemo(() => {
    return "This route is protected by Basic Auth (DEBUG_BASIC_AUTH).";
  }, []);

  async function load() {
    setLoading(true);
    setError(null);
    setSaveMessage(null);

    try {
      const res = await fetch("/api/admin/projects", { cache: "no-store" });
      const json = (await res.json()) as GetResponse;
      setResult(json);

      if (!json.ok) {
        setError(json.error);
        return;
      }

      setRawJson(JSON.stringify(json.payload, null, 2));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }

  async function save() {
    setSaving(true);
    setError(null);
    setSaveMessage(null);

    try {
      const parsed = JSON.parse(rawJson) as unknown;
      const res = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });

      const json = (await res.json()) as PutResponse;
      if (!json.ok) {
        setError(json.error);
        return;
      }

      setSaveMessage(
        json.commitUrl
          ? `Saved. Commit: ${json.commitUrl}`
          : "Saved to GitHub.",
      );

      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="kicker">Admin</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Debug: Projects
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted">
          {hint}
        </p>
      </header>

      <div className="rounded-xl border border-border bg-panel/40 p-4 text-sm">
        {loading ? (
          <p className="text-muted">Loading…</p>
        ) : error ? (
          <p className="text-red-700 dark:text-red-400" role="status">
            {error}
          </p>
        ) : result?.ok ? (
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-muted">
            <span>
              Repo:{" "}
              <span className="text-foreground">{result.repo}</span>
            </span>
            <span>
              Branch:{" "}
              <span className="text-foreground">{result.branch}</span>
            </span>
            <span>
              Path:{" "}
              <span className="text-foreground">{result.path}</span>
            </span>
            {result.sha ? (
              <span>
                SHA:{" "}
                <span className="font-mono text-xs text-foreground">
                  {result.sha}
                </span>
              </span>
            ) : null}
          </div>
        ) : null}
      </div>

      <section className="space-y-3" aria-label="Payload JSON">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-foreground">
            Payload JSON
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void load()}
              disabled={loading || saving}
              className="inline-flex min-h-10 items-center rounded-md border border-border bg-transparent px-3 py-2 text-sm font-medium text-foreground hover:border-accent disabled:opacity-50"
            >
              Reload
            </button>
            <button
              type="button"
              onClick={() => void save()}
              disabled={loading || saving}
              className="inline-flex min-h-10 items-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-ink hover:bg-accent/90 disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save to GitHub"}
            </button>
          </div>
        </div>

        <textarea
          value={rawJson}
          onChange={(e) => setRawJson(e.target.value)}
          spellCheck={false}
          aria-label="Projects payload JSON"
          className="min-h-[420px] w-full rounded-xl border border-border bg-panel/40 p-3 font-mono text-xs leading-5 text-foreground shadow-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {saveMessage ? (
          <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">
            {saveMessage}
          </p>
        ) : null}
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-foreground">
          Concept reference
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Inspired by brittanychiang.com in terms of structure: crisp hierarchy,
          content-first sections, and fast navigation — without copying visuals
          or text.
        </p>
      </section>
    </div>
  );
}
