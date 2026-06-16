import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import {
  GA_MEASUREMENT_ID,
  OGP_DESCRIPTION,
  OGP_IMAGE,
  OGP_TITLE,
  SEO_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";

const isProduction = process.env.NODE_ENV === "production";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: OGP_TITLE,
    description: OGP_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: OGP_IMAGE,
        width: 1200,
        height: 630,
        alt: OGP_TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OGP_TITLE,
    description: OGP_DESCRIPTION,
    images: [OGP_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        {children}
        {isProduction && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
