import { SectionHeading } from "@/components/oitoma/section-heading";

const steps = [
  {
    step: 1,
    title: "LINEで無料相談",
    description: "まずはLINEからお気軽にご連絡ください。",
  },
  {
    step: 2,
    title: "ヒアリング",
    description: "状況をお伺いし、最適な方法をご提案します。",
  },
  {
    step: 3,
    title: "ご入金",
    description: "料金をご確認のうえ、お手続きを進めます。",
  },
  {
    step: 4,
    title: "会社へご連絡",
    description: "オイトマが代わりに会社へ退職の意思をお伝えします。",
  },
  {
    step: 5,
    title: "退職完了",
    description: "退職手続きが完了し、新しい一歩を踏み出せます。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Flow" title="ご利用の流れ" />

        <ol className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-brand-yellow/50 sm:block"
          />

          {steps.map((item, index) => (
            <li
              key={item.step}
              className={`relative flex gap-6 ${index < steps.length - 1 ? "pb-10" : ""}`}
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white pop-shadow-sm">
                {item.step}
              </div>
              <div className="rounded-2xl border-2 border-border bg-brand-cream px-5 py-4 pt-3 flex-1">
                <h3 className="text-lg font-bold text-brand-orange">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
