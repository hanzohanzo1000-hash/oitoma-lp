"use client";

import type { MouseEvent } from "react";
import LineButton from "./LineButton";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "サービスについて", href: "#about" },
  { label: "選ばれる理由", href: "#recommend" },
  { label: "お悩み", href: "#problems" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "よくある質問", href: "#faq" },
];

function scrollToSection(e: MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/80 bg-brand-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          className="flex shrink-0 items-center"
        >
          <BrandLogo size="sm" />
        </a>

        <nav
          aria-label="ページ内ナビゲーション"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LineButton
          size="sm"
          label="LINEで無料相談する"
          className="!w-auto shrink-0"
        />
      </div>
    </header>
  );
}
