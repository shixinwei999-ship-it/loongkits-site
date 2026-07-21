"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { footer, nav } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  const { lang } = useLang();
  const t = footer[lang];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-ink text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-xl font-bold font-nunito mb-3">Loong Kits</p>
          <p className="text-white/60 text-sm leading-relaxed">{t.tagline}</p>
        </div>

        <div>
          <p className="font-semibold mb-3">{t.explore}</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/kits" className="hover:text-white transition-colors">{nav[lang].kits}</Link></li>
            <li><Link href="/free" className="hover:text-white transition-colors">{nav[lang].free}</Link></li>
            <li><Link href="/families" className="hover:text-white transition-colors">{nav[lang].families}</Link></li>
            <li><Link href="/teachers" className="hover:text-white transition-colors">{nav[lang].teachers}</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">{nav[lang].about}</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">{t.follow}</p>
          <ul className="space-y-2 text-sm text-white/60">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-semibold mt-6 mb-2">{t.contact}</p>
          <a href={`mailto:${site.contactEmail}`} className="text-sm text-white/60 hover:text-white transition-colors">
            {site.contactEmail}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
        {t.rights}
      </div>
    </footer>
  );
}
