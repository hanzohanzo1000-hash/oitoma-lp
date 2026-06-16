export const SITE_NAME = "退職代行キリカエ";
export const SITE_TAGLINE = "会社と話さず、次の一歩へ。";
export const SITE_TITLE = "退職代行キリカエ｜会社と話さず、次の一歩へ";
export const SITE_DESCRIPTION =
  "退職を言い出せない方のための退職代行サービス。LINEで無料相談受付中。全国対応。";
export const OGP_TITLE = "退職代行キリカエ";
export const OGP_DESCRIPTION = "会社と話さず、次の一歩へ。";
export const OGP_IMAGE = "/og-image.png";
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-N322D4N5JQ";
export const LINE_URL =
  process.env.NEXT_PUBLIC_LINE_URL ?? "https://lin.ee/TzzIF2Q";

export const PRICING_PLANS = [
  { type: "正社員", price: 15000 },
  { type: "派遣社員", price: 10000 },
  { type: "アルバイト・パート", price: 8000 },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "キリカエとは" },
  { href: "#features", label: "選ばれる理由" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#faq", label: "よくある質問" },
] as const;
