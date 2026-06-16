import { About } from "@/components/oitoma/about";
import { Faq } from "@/components/oitoma/faq";
import { Features } from "@/components/oitoma/features";
import { FinalCta } from "@/components/oitoma/final-cta";
import { Flow } from "@/components/oitoma/flow";
import { Footer } from "@/components/oitoma/footer";
import { Header } from "@/components/oitoma/header";
import { Hero } from "@/components/oitoma/hero";
import { MobileCta } from "@/components/oitoma/mobile-cta";
import { Pricing } from "@/components/oitoma/pricing";
import { Problem } from "@/components/oitoma/problem";
import { Promise } from "@/components/oitoma/promise";
import { getStructuredDataScripts } from "@/lib/json-ld";

export default function Home() {
  const structuredDataScripts = getStructuredDataScripts();

  return (
    <>
      {structuredDataScripts.map((jsonLd) => (
        <script
          key={jsonLd["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

      <div className="flex min-h-screen flex-col pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main>
          <Hero />
          <Problem />
          <About />
          <Features />
          <Pricing />
          <Flow />
          <Promise />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <MobileCta />
      </div>
    </>
  );
}
