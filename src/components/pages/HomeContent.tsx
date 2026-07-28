"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { levels, getBand } from "@/lib/levels";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <>
      {/* ═══════════ HERO：深墨底 + 金色书法龙字暗纹 ═══════════ */}
      <section className="group/hero relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#1c1917]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.06]" />
          <span className="absolute right-[2%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[28rem] sm:text-[36rem] leading-none text-amber-400/[0.06] lg:text-[42rem]">
            龙
          </span>
          <div className="absolute right-[10%] top-1/2 h-[80%] w-[50%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,169,90,0.12),transparent_70%)] blur-2xl" />
          <div className="absolute left-[5%] bottom-[10%] h-64 w-64 rounded-full bg-amber-500/[0.06] blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1c1917] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80 sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
                {lang === "en" ? "A real Chinese course · 10 levels" : "一门真正的中文课 · 十个等级"}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-zh text-white !text-[clamp(2.9rem,8vw,6rem)] !leading-[0.95]">
                {t.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-stone-300 sm:text-xl">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/learn/levels"
                  className="group/btn inline-flex items-center gap-2 rounded-[0.85rem] bg-amber-500 px-7 py-3.5 text-base font-bold text-stone-900 shadow-[0_16px_36px_-14px_rgba(217,169,90,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
                >
                  {t.hero.learnCta}
                  <IconArrowRight size={18} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/learn/chinese"
                  className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-stone-500/50 px-6 py-3 text-base font-semibold text-stone-200 transition-colors duration-200 hover:border-amber-400/60 hover:text-amber-300"
                >
                  {t.hero.earCta}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <dl className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-stone-600/40 pt-6 text-xs font-medium text-stone-400 sm:text-sm">
                {(lang === "en"
                  ? ["10 levels, not ages", "Lessons + homework", "Tap-to-hear Chinese", "Printable PDFs"]
                  : ["十个等级，不限年龄", "有课，有作业", "点一下就听中文", "可打印 PDF"]
                ).map((label, i) => (
                  <div key={label} className="flex items-center gap-5">
                    {i > 0 && <span aria-hidden className="h-3 w-px bg-stone-600/50" />}
                    <span>{label}</span>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <a
          href="#level-path"
          aria-label={lang === "en" ? "Scroll to explore" : "向下浏览"}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-500 transition-colors hover:text-amber-400 lg:flex"
        >
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.22em]">{lang === "en" ? "Explore" : "浏览"}</span>
          <svg className="hero-bounce h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ═══════════ 全部 10 级：这就是产品 ═══════════ */}
      <section id="level-path" className="scroll-mt-20 bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
            <Reveal className="max-w-2xl">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-5">{t.agePath.kicker}</p>
              <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">{t.agePath.title}</h2>
              <p className="text-lg text-ink-light leading-relaxed mt-5">{t.agePath.desc}</p>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/learn/levels" className="arrow-link text-[#b3121f] font-bold hover:underline text-base sm:text-lg">
                {t.agePath.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {levels.map((lv, i) => {
              const band = getBand(lv.band);
              return (
                <Reveal key={lv.n} delay={i * 50}>
                  <Link
                    href={`/learn/levels#lvl-${lv.n}`}
                    className="group block rounded-xl border border-teal/12 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b3121f]/30 hover:shadow-[0_14px_30px_-20px_rgba(157,15,27,0.4)] h-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-nunito text-2xl sm:text-3xl font-extrabold text-[#b3121f]/15 leading-none">
                        {String(lv.n).padStart(2, "0")}
                      </span>
                      {band && (
                        <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider ${band.accent} bg-teal/8`}>
                          {band.name[lang]}
                        </span>
                      )}
                    </div>
                    <h3 className="font-nunito text-base sm:text-lg font-extrabold text-ink leading-tight mb-1.5 group-hover:text-[#b3121f] transition-colors">
                      {lv.title[lang]}
                    </h3>
                    <p className="text-xs text-ink-light leading-relaxed line-clamp-2">{lv.tagline[lang]}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#b3121f] opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.agePath.cta} <IconArrowRight size={12} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 底部行动带：免费资源 + 开始学习，一段搞定 ═══════════ */}
      <section className="relative isolate overflow-hidden bg-[#1c1917] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.04]" />
          <span className="absolute left-[5%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[16rem] sm:text-[20rem] leading-none text-amber-400/[0.04]">
            学
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="display-zh text-white !text-3xl sm:!text-5xl !leading-[1.05]">
              {t.freeSample.title}
            </h2>
            <p className="mt-5 text-lg text-stone-300 leading-relaxed max-w-xl mx-auto">{t.freeSample.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/free/zodiac-animals"
                className="inline-flex items-center gap-2 rounded-[0.85rem] bg-amber-500 px-7 py-3.5 text-base font-bold text-stone-900 shadow-[0_12px_30px_-10px_rgba(217,169,90,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
              >
                {t.freeSample.cta} <IconArrowRight size={18} />
              </Link>
              <Link
                href="/learn/levels"
                className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-stone-500/50 px-6 py-3 text-base font-semibold text-stone-200 transition-colors duration-200 hover:border-amber-400/60 hover:text-amber-300"
              >
                {t.hero.learnCta} <IconArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
