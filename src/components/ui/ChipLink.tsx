import Link from "next/link";

export function ChipLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "inline-flex min-h-9 items-center rounded-full border border-accent bg-accent px-3 py-1 text-xs font-semibold text-accent-ink"
          : "inline-flex min-h-9 items-center rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-muted hover:border-accent hover:text-foreground"
      }
    >
      {children}
    </Link>
  );
}
