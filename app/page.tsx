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
import { LINE_URL, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: "https://oitoma.jp",
  areaServed: "JP",
  serviceType: "退職代行",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: LINE_URL,
    servicePhone: "",
    availableLanguage: "Japanese",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
