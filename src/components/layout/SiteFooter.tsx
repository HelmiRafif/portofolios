import type { Dictionary } from "@/lib/i18n/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="space-y-4 border-t border-border pt-6">
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href={dict.home.contactEmailHref}
          className="text-muted hover:text-foreground"
        >
          {dict.home.contactEmailLabel}
        </a>
        {dict.home.contactLinkedInHref ? (
          <a
            href={dict.home.contactLinkedInHref}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground"
          >
            {dict.home.contactLinkedInLabel}
          </a>
        ) : null}
        {dict.home.contactGitHubHref ? (
          <a
            href={dict.home.contactGitHubHref}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground"
          >
            {dict.home.contactGitHubLabel}
          </a>
        ) : null}
      </div>

      <p className="text-xs leading-5 text-muted">
        © {year} {dict.meta.siteName}. Built with Next.js.
      </p>
    </footer>
  );
}
