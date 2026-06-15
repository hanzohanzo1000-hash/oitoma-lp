import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import {
  OGP_DESCRIPTION,
  OGP_IMAGE,
  OGP_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/constants";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oitoma.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "退職代行",
    "退職代行 オイトマ",
    "退職 相談",
    "退職 言い出せない",
    "即日退職",
    "LINE 退職代行",
    "退職代行 安い",
    "退職代行 全国対応",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: OGP_TITLE,
    description: OGP_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
    siteName: SITE_NAME,
    url: siteUrl,
    images: [
      {
        url: OGP_IMAGE,
        width: 1200,
        height: 630,
        alt: OGP_TITLE,
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
