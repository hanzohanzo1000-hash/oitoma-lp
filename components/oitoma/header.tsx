"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/oitoma/icons";
import { LineButton } from "@/components/oitoma/line-button";
import { Logo } from "@/components/oitoma/logo";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="flex shrink-0 items-center">
          <Logo
            width={140}
            height={100}
            priority
            variant="header"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <LineButton size="default" />
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-brand-orange md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-brand-orange/10 bg-brand-cream px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-base font-medium text-muted transition-colors hover:text-brand-orange"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <LineButton className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
