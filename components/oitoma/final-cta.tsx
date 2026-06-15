import { PaperPlaneIcon } from "@/components/oitoma/icons";
import { LineButton } from "@/components/oitoma/line-button";

export function FinalCta() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border-2 border-brand-orange/30 bg-brand-peach px-6 py-14 text-center pop-shadow-lg sm:px-12 sm:py-20">
        <PaperPlaneIcon
          aria-hidden
          className="pointer-events-none absolute -right-2 top-6 h-12 w-12 rotate-12 opacity-70 sm:right-8 sm:h-14 sm:w-14"
        />

        <h2 className="text-2xl font-bold leading-snug text-brand-orange sm:text-3xl">
          一人で悩まず、
          <br className="sm:hidden" />
          まずはご相談ください。
        </h2>

        <div className="mx-auto mt-6 max-w-lg space-y-3 text-base leading-relaxed text-muted sm:text-lg">
          <p>退職を言い出せない不安やストレスを抱えている方へ。</p>
          <p className="font-medium text-foreground">
            オイトマがあなたの新しい一歩をサポートします。
          </p>
        </div>

        <div className="mt-10">
          <LineButton size="large" />
        </div>
      </div>
    </section>
  );
}
