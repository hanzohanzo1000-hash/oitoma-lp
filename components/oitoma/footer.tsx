import { Logo } from "@/components/oitoma/logo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-cream px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo variant="footer" width={120} height={86} />
          <p className="text-sm text-muted">{SITE_TAGLINE}</p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
