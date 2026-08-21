export default function ProjectsLoading() {
  return (
    <div className="space-y-12" aria-busy="true" aria-label="Loading projects">
      <section className="space-y-4">
        <div className="h-4 w-24 animate-pulse rounded bg-border" />
        <div className="h-10 w-3/4 animate-pulse rounded bg-border" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-border" />
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-20 animate-pulse rounded-full bg-border"
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-40 animate-pulse rounded-xl border border-border bg-panel/40"
          />
        ))}
      </section>
    </div>
  );
}
