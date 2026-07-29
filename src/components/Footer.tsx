"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { footer, nav } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  const { lang } = useLang();
  const t = footer[lang];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif-sc text-3xl font-bold text-white sm:text-4xl">Loong Kits</p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">{t.tagline}</p>
          </div>

          <div>
            <p className="mb-6 font-inter text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/25">
              {t.explore}
            </p>
            <nav className="space-y-3">
              {[
                { href: "/learn/levels", label: nav[lang].learn },
                { href: "/members", label: nav[lang].members },
                { href: "/shop", label: nav[lang].shop },
                { href: "/free", label: lang === "en" ? "Free Resources" : "免费资源" },
                { href: "/about", label: nav[lang].about },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block font-serif-sc text-lg font-bold text-white/60 transition-colors duration-300 hover:text-white sm:text-xl">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 font-inter text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/25">
              {t.follow}
            </p>
            <nav className="space-y-3">
              {site.socials.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="block font-serif-sc text-lg font-bold text-white/60 transition-colors duration-300 hover:text-white sm:text-xl">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 font-inter text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/25">
              {t.contact}
            </p>
            <a href={`mailto:${site.contactEmail}`} className="font-serif-sc text-lg font-bold text-white/60 transition-colors duration-300 hover:text-white sm:text-xl">
              {site.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-24">
          <p className="font-inter text-xs text-white/25">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
