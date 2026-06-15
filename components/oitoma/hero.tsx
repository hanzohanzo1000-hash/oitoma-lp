import { PaperPlaneIcon } from "@/components/oitoma/icons";
import { LineButton } from "@/components/oitoma/line-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,208,53,0.2),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(240,122,7,0.08),transparent_50%)]"
      />
      <PaperPlaneIcon
        aria-hidden
        className="animate-float pointer-events-none absolute right-8 top-24 hidden h-14 w-14 opacity-70 sm:block lg:right-24 lg:top-28 lg:h-16 lg:w-16"
      />
      <PaperPlaneIcon
        aria-hidden
        className="animate-float-delay pointer-events-none absolute bottom-24 left-6 hidden h-10 w-10 rotate-12 opacity-50 sm:block lg:left-20"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          会社に行くのがつらい。
          <br />
          退職を言い出せない。
          <br />
          そんなあなたへ。
        </p>

        <h1 className="mt-8 text-3xl font-bold leading-tight sm:mt-10 sm:text-4xl lg:text-5xl">
          <span className="pop-text">会社と話さず、</span>
          <br />
          <span className="text-foreground">次の一歩へ。</span>
        </h1>

        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          退職に関するご相談を24時間受け付けています。
          <br className="hidden sm:block" />
          まずはお気軽にご相談ください。
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <LineButton size="large" />
          <p className="text-xs font-medium text-brand-orange/80">
            相談無料・24時間受付
          </p>
        </div>
      </div>
    </section>
  );
}
