import {
  LINE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faqs";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: LINE_URL,
      availableLanguage: ["Japanese"],
    },
  };
}

export function getFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getStructuredDataScripts() {
  return [getOrganizationJsonLd(), getFaqPageJsonLd()];
}
