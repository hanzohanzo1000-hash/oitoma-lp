import { FAQ_ITEMS } from "@/lib/faqs";
import { SectionHeading } from "@/components/oitoma/section-heading";
import { FaqAccordion } from "@/components/oitoma/faq-accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-brand-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="FAQ" title="よくある質問" />
        <FaqAccordion faqs={FAQ_ITEMS} />
      </div>
    </section>
  );
}
