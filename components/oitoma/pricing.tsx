import { LineButton } from "@/components/oitoma/line-button";
import { SectionHeading } from "@/components/oitoma/section-heading";
import { PRICING_PLANS } from "@/lib/constants";

const cardStyles = [
  "border-brand-orange/30 bg-white",
  "border-brand-yellow/50 bg-brand-cream",
  "border-brand-pink/30 bg-white",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Pricing" title="料金プラン" />

        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-muted sm:text-base">
          雇用形態に応じたシンプルな料金設定。追加費用はかかりません。
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <article
              key={plan.type}
              className={`flex flex-col items-center rounded-3xl border-2 px-6 py-8 text-center pop-shadow-sm ${cardStyles[index]}`}
            >
              <h3 className="text-base font-bold text-foreground sm:text-lg">
                {plan.type}
              </h3>
              <p className="mt-4">
                <span className="text-3xl font-bold text-brand-orange sm:text-4xl">
                  {plan.price.toLocaleString("ja-JP")}
                </span>
                <span className="ml-1 text-sm font-medium text-muted">円</span>
              </p>
              <p className="mt-1 text-xs text-muted">（税込）</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border-2 border-brand-orange/20 bg-brand-cream px-6 py-8 text-center pop-shadow-sm sm:px-10 sm:py-10">
          <h3 className="text-lg font-bold text-brand-orange sm:text-xl">
            なぜ低価格なのか？
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base sm:leading-loose">
            オイトマは少人数体制で運営しており、
            <br className="hidden sm:block" />
            広告費や大規模な運営コストを抑えることで
            <br className="hidden sm:block" />
            利用しやすい料金設定を実現しています。
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          ※ ご相談は無料です。お見積もり後、ご納得いただいてからお手続きを進めます。
        </p>

        <div className="mt-10 flex justify-center">
          <LineButton size="large" />
        </div>
      </div>
    </section>
  );
}
