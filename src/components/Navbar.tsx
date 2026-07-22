"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { nav } from "@/lib/content";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/learn/levels", key: "learn" },
  { href: "/kits", key: "kits" },
  { href: "/free", key: "free" },
  { href: "/families", key: "families" },
  { href: "/teachers", key: "teachers" },
  { href: "/about", key: "about" },
] as const;

export function Navbar() {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = nav[lang];

  const linkClass = (href: string) => {
    const on = href === "/learn/chinese" ? pathname.startsWith("/learn") : pathname === href;
    return on ? "text-teal font-semibold" : "text-ink hover:text-teal transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold font-nunito" aria-label="Loong Kits home">
            <Logo size={30} />
            <span><span className="text-teal">Loong</span><span className="text-orange"> Kits</span></span>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {t[l.key]}
              </Link>
            ))}
            <button
              onClick={toggle}
              className="ml-4 px-3 py-1 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/20 transition-colors"
              aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>

          {/* 移动端：语言切换 + 汉堡按钮 */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="px-3 py-1 rounded-lg bg-teal/10 text-teal text-sm font-medium"
              aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-ink"
              aria-expanded={open}
              aria-label={t.menu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {open && (
        <div className="md:hidden border-t border-teal/10 bg-cream px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 border-b border-teal/5 ${linkClass(l.href)}`}
            >
              {t[l.key]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
