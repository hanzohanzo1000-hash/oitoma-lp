"use client";

import { useState } from "react";
import LineButton from "./LineButton";

const faqs = [
  {
    question: "転職エージェントですか？",
    answer:
      "いいえ、転職エージェントではありません。20代の方のキャリア選択を支援するサービスで、あなたの状況を伺い、キャリアの方向性を一緒に整理します。",
  },
  {
    question: "本当に無料ですか？",
    answer:
      "はい、LINE相談・無料面談ともに費用は一切かかりません。お気軽にご利用ください。",
  },
  {
    question: "どんな方が利用できますか？",
    answer:
      "主に20代の方を対象としています。在職中の方はもちろん、第二新卒・フリーター・アルバイトから正社員を目指す方もご相談いただけます。",
  },
  {
    question: "転職が初めてでも大丈夫ですか？",
    answer:
      "もちろんです。転職経験がない方からのご相談も多くいただいています。わからないことを一つずつ整理していきましょう。",
  },
  {
    question: "相談したら必ず転職しなければいけませんか？",
    answer:
      "いいえ、転職を強制することは一切ありません。転職するか迷っている段階でのご相談も大歓迎です。",
  },
  {
    question: "地方在住でも利用できますか？",
    answer:
      "はい、全国対応しております。LINEでの相談・オンライン面談が中心のため、お住まいを問わずご利用いただけます。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sky-50/60 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            よくある<span className="text-sky-500">質問</span>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-sky-100 bg-white/90"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`shrink-0 text-sky-400 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-sky-50 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-slate-600">
            その他のご質問もLINEでお気軽にどうぞ
          </p>
          <LineButton label="LINEで無料相談する" />
        </div>
      </div>
    </section>
  );
}
