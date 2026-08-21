export function KickerList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
          />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}
