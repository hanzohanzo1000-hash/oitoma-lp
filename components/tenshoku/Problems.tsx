import LineButton from "./LineButton";
import SectionImage from "./SectionImage";

const problems = [
  "自分にとって、どんな仕事が向いているかわからない",
  "低収入から脱して、今よりも給与を上げたい",
  "転職が初めてで、何から始めればいいかわからない",
  "将来の生活に不安を感じている",
  "転職しようかどうか、まだ迷っている",
  "転職エージェントに、なんとなく良い印象が持てない",
];

export default function Problems() {
  return (
    <section id="problems" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <SectionImage
            src="/tenshoku/support.png"
            alt="キャリアのお悩み相談のイメージ"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            こんな<span className="text-sky-500">お悩み</span>ありませんか？
          </h2>
          <p className="mt-4 text-slate-600">
            20代の方から、よくこんな声をいただきます。
          </p>
        </div>
        <ul className="mt-10 space-y-3">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white/80 p-4 shadow-sm"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-500"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-slate-700">{problem}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm font-medium text-slate-700">
            今の職場が合わないかも…？ 1分でチェックできます
          </p>
          <a
            href="#diagnosis"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-sky-300 bg-white px-6 py-3 text-base font-bold text-sky-500 transition-colors hover:bg-sky-50 sm:w-auto"
          >
            ブラック企業診断を試す
          </a>
          <p className="mt-6 mb-4 text-sm font-medium text-slate-700">
            一人で抱え込まず、まずは気軽に相談してみませんか？
          </p>
          <LineButton label="LINEで無料相談する" />
        </div>
      </div>
    </section>
  );
}
