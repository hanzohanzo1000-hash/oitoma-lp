import LineButton from "./LineButton";
import SectionImage from "./SectionImage";

const steps = [
  {
    step: "01",
    title: "LINEで友だち追加",
    description: "下のボタンからLINE公式アカウントを追加してください。",
  },
  {
    step: "02",
    title: "お悩み・ご質問を送信",
    description:
      "転職の迷いやキャリアの不安など、今のお気持ちをLINEでお送りください。",
  },
  {
    step: "03",
    title: "無料面談の日程調整",
    description:
      "担当者が内容を確認し、無料面談の日程をご案内します。オンライン面談にも対応しています。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-sky-50/60 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <SectionImage
            src="/tenshoku/flow.png"
            alt="LINE相談から無料面談までの流れ"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            ご利用の<span className="text-sky-500">流れ</span>
          </h2>
          <p className="mt-4 text-slate-600">
            LINEで相談するだけ。無料面談までスムーズに進められます。
          </p>
        </div>
        <ol className="mt-10 space-y-0">
          {steps.map((item, index) => (
            <li key={item.step} className="relative flex gap-4 pb-8 last:pb-0">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-5 top-10 h-full w-0.5 bg-sky-200"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-white">
                {item.step}
              </span>
              <div className="pt-1">
                <h3 className="font-bold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <LineButton label="LINEで無料相談する" />
        </div>
      </div>
    </section>
  );
}
