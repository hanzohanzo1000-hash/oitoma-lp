"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/oitoma/icons";
import { SectionHeading } from "@/components/oitoma/section-heading";

const faqs = [
  {
    question: "本当に会社へ行かなくていいですか？",
    answer:
      "はい、原則としてお客様が会社へ出社する必要はありません。キリカエが代わりに会社へ退職の意思をお伝えし、退職手続きを進めます。ただし、会社の方針や状況によっては、書類の郵送などが必要になる場合があります。",
  },
  {
    question: "即日対応は可能ですか？",
    answer:
      "はい、即日対応も可能です。お急ぎの場合は、LINEでご相談いただく際にお伝えください。状況を確認のうえ、スピーディーに対応いたします。",
  },
  {
    question: "有給休暇は消化できますか？",
    answer:
      "有給休暇の取得については、会社の就業規則や状況によって異なります。ご相談時に状況をお伺いし、可能な範囲で対応方法をご提案いたします。",
  },
  {
    question: "家族に連絡されますか？",
    answer:
      "いいえ、お客様のご家族への連絡は行いません。個人情報は厳重に管理し、お客様のプライバシーを尊重いたします。",
  },
  {
    question: "会社から連絡が来たらどうなりますか？",
    answer:
      "会社からの連絡は、原則としてキリカエが対応いたします。お客様が直接対応する必要が生じる場合も、事前にご説明し、サポートいたします。",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="FAQ" title="よくある質問" />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border-2 bg-white transition-colors ${isOpen ? "border-brand-orange pop-shadow-sm" : "border-border"}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-peach/50"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-foreground">
                    Q. {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-brand-orange transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
