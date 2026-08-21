import Link from "next/link";

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="link-editorial text-sm font-medium text-foreground"
    >
      {children}
    </Link>
  );
}
