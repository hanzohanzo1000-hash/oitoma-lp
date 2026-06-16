import LineButton from "./LineButton";

const targets = [
  "自分に合った仕事・適職がわからない20代の方",
  "今より給与を上げたい、収入に不安を感じている方",
  "転職が初めてで、右も左もわからない方",
  "第二新卒・フリーター・アルバイトから正社員になりたい方",
  "環境を変えたい、でも転職するかまだ迷っている方",
  "転職エージェントに抵抗感がある方",
];

export default function Recommend() {
  return (
    <section id="recommend" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            こんな<span className="text-sky-500">20代の方</span>におすすめ
          </h2>
          <p className="mt-4 text-slate-600">
            20代のキャリア選択に特化した無料相談サービスです。
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {targets.map((target) => (
            <li
              key={target}
              className="flex items-start gap-2 rounded-lg border border-sky-100 bg-sky-50/50 p-4 text-sm text-slate-700 sm:text-base"
            >
              <span className="text-sky-400" aria-hidden="true">
                ●
              </span>
              {target}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <LineButton variant="outline" label="LINEで無料相談する" />
        </div>
      </div>
    </section>
  );
}
