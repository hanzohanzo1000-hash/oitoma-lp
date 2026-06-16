"use client";

import { useState } from "react";
import LineButton from "./LineButton";
import SectionImage from "./SectionImage";

type Answer = 0 | 1 | 2;

const questions = [
  "残業が多く、休日出勤を求められることがある",
  "有給休暇を取りにくい雰囲気がある",
  "「みんなで頑張ろう」と言われ、自己責任を押し付けられる",
  "パワハラや理不尽な叱責を見た・受けたことがある",
  "給与や残業代が労働時間と合っていない気がする",
];

const answerLabels: { value: Answer; label: string }[] = [
  { value: 2, label: "はい" },
  { value: 0, label: "いいえ" },
  { value: 1, label: "どちらでもない" },
];

type Result = {
  title: string;
  emoji: string;
  description: string;
  color: string;
  bg: string;
  border: string;
};

function getResult(score: number): Result {
  if (score <= 2) {
    return {
      title: "比較的ホワイト",
      emoji: "😊",
      description:
        "今の職場は比較的健全なようです。ただし、環境は変わることもあるので、定期的に自分の状態をチェックしてみましょう。",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    };
  }
  if (score <= 5) {
    return {
      title: "グレーゾーン",
      emoji: "🤔",
      description:
        "いくつか気になる点があります。環境を変えるタイミングかもしれません。一人で抱え込まず、キャリアについて相談してみませんか？",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    };
  }
  if (score <= 8) {
    return {
      title: "要注意",
      emoji: "😰",
      description:
        "職場環境に複数の注意点が見られます。環境を変えたいと感じたら、まずは気軽にキャリア相談してみませんか？",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
    };
  }
  return {
    title: "ブラック度高め",
    emoji: "🚨",
      description:
        "かなり危険信号が出ています。我慢し続ける必要はありません。LINEで状況を話して、これからの選択肢を一緒に整理しましょう。",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  };
}

export default function BlackCompanyDiagnosis() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<Answer | null>(null);

  const isStarted = step > 0;
  const isFinished = step > questions.length;
  const currentQuestion = step - 1;
  const score = answers.reduce<number>((sum, a) => sum + a, 0);
  const result = getResult(score);

  const handleStart = () => {
    setStep(1);
    setAnswers([]);
    setSelected(null);
  };

  const handleSelect = (value: Answer) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (selected === null) return;
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);
    setSelected(null);
    setStep(step + 1);
  };

  const handleRetry = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  };

  return (
    <section
      id="diagnosis"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <SectionImage
            src="/tenshoku/diagnosis.png"
            alt="ブラック企業診断のイメージ"
          />
        </div>

        <div className="text-center">
          <p className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            無料・1分で完了
          </p>
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            ブラック企業<span className="text-sky-500">診断</span>
          </h2>
          <p className="mt-4 text-slate-600">
            5つの質問に答えるだけ。今の職場の「ブラック度」をチェックできます。
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50/40 p-6 sm:p-8">
          {!isStarted && (
            <div className="text-center">
              <p className="text-sm leading-relaxed text-slate-600">
                当てはまる項目が多いほど、職場環境に注意が必要な可能性があります。
                <br className="hidden sm:inline" />
                結果は目安としてお楽しみください。
              </p>
              <button
                type="button"
                onClick={handleStart}
                className="mt-6 w-full rounded-full bg-sky-400 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-sky-500 sm:w-auto"
              >
                診断をはじめる
              </button>
            </div>
          )}

          {isStarted && !isFinished && (
            <div>
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                  <span>
                    質問 {step} / {questions.length}
                  </span>
                  <span>{Math.round((step / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-sky-100">
                  <div
                    className="h-full rounded-full bg-sky-400 transition-all duration-300"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <p className="text-lg font-bold text-slate-800">
                {questions[currentQuestion]}
              </p>

              <div className="mt-6 space-y-3">
                {answerLabels.map(({ value, label }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSelect(value)}
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-colors sm:text-base ${
                      selected === value
                        ? "border-sky-400 bg-sky-100 text-sky-700"
                        : "border-sky-100 bg-white text-slate-700 hover:border-sky-200 hover:bg-sky-50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={selected === null}
                className="mt-6 w-full rounded-full bg-sky-400 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-[160px]"
              >
                {step === questions.length ? "結果を見る" : "次へ"}
              </button>
            </div>
          )}

          {isFinished && (
            <div className="text-center">
              <p className="text-sm text-slate-500">診断結果</p>
              <p className="mt-2 text-4xl" aria-hidden="true">
                {result.emoji}
              </p>
              <p
                className={`mt-2 inline-block rounded-full border px-4 py-1 text-lg font-bold ${result.bg} ${result.color} ${result.border}`}
              >
                {result.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                スコア: {score} / {questions.length * 2}点
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {result.description}
              </p>

              {score >= 3 && (
                <div className="mt-6 rounded-xl border border-sky-100 bg-white p-4">
                  <p className="text-sm font-medium text-slate-700">
                    環境を変えたいと感じたら、一人で決めなくて大丈夫です
                  </p>
                  <div className="mt-4">
                    <LineButton label="LINEで無料相談する" />
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleRetry}
                className="mt-6 text-sm font-medium text-sky-500 underline-offset-2 hover:underline"
              >
                もう一度診断する
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          ※本診断は参考情報です。法的判断や専門的助言の代替にはなりません。
        </p>
      </div>
    </section>
  );
}
