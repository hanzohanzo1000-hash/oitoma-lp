import LineButton from "./LineButton";
import SectionImage from "./SectionImage";

const features = [
  {
    title: "20代のキャリア選択を専門サポート",
    description:
      "20代の方が「自分に合った仕事」「正社員としてのキャリア」を見つけるための支援サービスです。",
  },
  {
    title: "転職エージェントではありません",
    description:
      "求人紹介や書類添削を直接行う転職エージェントではありません。あなたの状況を伺い、キャリアの方向性を一緒に整理します。",
  },
  {
    title: "環境を変えたい・適職を知りたい方に",
    description:
      "今の環境を変えたい、自分に合った仕事が知りたい、フリーター・アルバイトから正社員になりたい——そんな方の第一歩をサポートします。",
  },
  {
    title: "LINE相談 → 無料面談",
    description:
      "まずはLINEで気軽にご相談ください。内容を確認のうえ、無料面談の日程調整までご案内します。",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <SectionImage
            src="/tenshoku/service.png"
            alt="キャリア支援サービスのイメージ"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            サービス<span className="text-sky-500">について</span>
          </h2>
          <p className="mt-4 text-slate-600">
            20代のキャリアに特化した、無料のキャリア支援サービスです。
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-xl border border-sky-100 bg-sky-50/50 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-300 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
          ※当サービスは転職エージェントではありません。具体的な求人条件や年収を保証するものではありません。
        </p>
        <div className="mt-8 text-center">
          <LineButton variant="outline" label="LINEで無料相談する" />
        </div>
      </div>
    </section>
  );
}
