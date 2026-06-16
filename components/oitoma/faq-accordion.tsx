"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/oitoma/icons";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: readonly FaqItem[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
  );
}
