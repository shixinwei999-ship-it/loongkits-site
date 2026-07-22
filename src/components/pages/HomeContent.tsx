"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { KitCard } from "@/components/KitCard";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { dragonAssets } from "@/lib/brandAssets";
import { AgePathGrid } from "@/components/AgePathGrid";
import {
  DecoCloud,
  DecoSeal,
} from "@/components/Illustration";
import {
  IconDownload,
  IconPrint,
  IconHeartHands,
  IconCheck,
  IconArrowRight,
} from "@/components/icons";

const stepIcons = [IconDownload, IconPrint, IconHeartHands];

// 竖排书法回声已撤：单字符水印（如承诺段的「印」）够用，多字竖排在窄视口会换行裁切，
// 看起来像坏掉的东西——不冒这个险。

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];
  const featured = featuredKitIds
    .map((id) => kits.find((k) => k.id === id))
    .filter((k): k is NonNullable<typeof k> => Boolean(k));

  return (
    <>
      {/* ============ HERO：电影感全出血首屏 ============ */}
      <section className="group/hero relative isolate flex min-h-[90vh] items-center overflow-hidden bg-paper pt-24 pb-24 lg:pt-28 lg:pb-28">
        {/* 右出血主视觉：双龙放大成主角，缓慢呼吸 */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src={dragonAssets.hero.src}
            alt={t.hero.mascotAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="hero-kenburns object-cover object-[50%_28%] lg:object-[72%_center]"
          />
          {/* 防龙顶撞导航 + 移动端底部融回纸色 */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper to-transparent lg:hidden" />
        </div>

        {/* 文字背板：桌面左实色纸 + 短 feather，标题永不叠龙；移动顶实色 feather */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-transparent to-paper lg:hidden" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-paper via-paper to-transparent lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-[54%] bg-paper lg:block" />
        <div className="absolute inset-y-0 left-[54%] hidden w-[18%] bg-gradient-to-r from-paper to-transparent lg:block" />

        {/* ambient 氛围层：柔光 + 竖排水印 + 龙身曲线 */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-float absolute right-[6%] top-12 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
          <div className="hero-float-slow absolute left-[6%] top-1/3 h-80 w-80 rounded-full bg-teal/[0.06] blur-3xl" />
          <span className="vert-calligraphy absolute bottom-8 right-8 hidden text-[12rem] leading-none text-teal/[0.045] lg:block">
            龙
          </span>
          <svg
            className="absolute left-0 top-[58%] hidden w-[55%] text-teal/[0.08] lg:block"
            viewBox="0 0 600 200"
            fill="none"
            aria-hidden
          >
            <path d="M0 120 C120 40 220 160 340 90 S520 40 600 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* 内容：左对齐，强字号对比 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-teal sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-orange" />
                {lang === "en" ? "Bilingual · Printable · Ages 3–18" : "中英双语 · 可打印 · 3–18 岁"}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-zh text-ink !text-[clamp(2.9rem,8.5vw,6.25rem)] !leading-[0.96]">{t.hero.title}</h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-light sm:text-xl">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link href="/free" className="btn-primary text-base">
                  {t.hero.ctaSecondary} <IconArrowRight size={18} />
                </Link>
                <Link href="/kits" className="arrow-link text-base font-bold text-teal transition-colors hover:text-teal-dark">
                  {t.hero.cta} <IconArrowRight size={18} className="arrow" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <dl className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-teal/15 pt-6 text-xs font-medium text-ink-light sm:text-sm">
                {(lang === "en"
                  ? ["Bilingual EN / 中文", "Print at home", "4 age paths", "Real PDFs"]
                  : ["中英双语对照", "在家即可打印", "4 条年龄路径", "真实可下载"]
                ).map((label, i) => (
                  <div key={label} className="flex items-center gap-5">
                    {i > 0 && <span aria-hidden className="h-3 w-px bg-teal/20" />}
                    <span>{label}</span>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#learn-paths"
          aria-label={lang === "en" ? "Scroll to explore" : "向下浏览"}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-teal/50 transition-colors hover:text-teal lg:flex"
        >
          <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.22em]">
            {lang === "en" ? "Explore" : "浏览"}
          </span>
          <svg className="hero-bounce h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      <AgePathGrid heading={t.agePath.title} description={t.agePath.desc} cta={t.agePath.cta} />

      {/* ============ HOW IT WORKS（深色翻页） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="chip !bg-white/10 !text-white !border-white/20 mb-5">
                {lang === "en" ? "Three steps" : "三步上手"}
              </span>
              <h2 className="display !text-white !text-4xl sm:!text-5xl mb-4">{t.howItWorks.title}</h2>
              <div className="w-16 h-1.5 bg-orange rounded-full mx-auto" aria-hidden />
            </div>
          </Reveal>

          <div className="relative grid md:grid-cols-3 gap-12">
            <div aria-hidden className="hidden md:block absolute top-12 left-[18%] right-[18%] border-t-2 border-dashed border-white/25" />
            {t.howItWorks.steps.map((step, index) => {
              const Ic = stepIcons[index];
              return (
                <Reveal key={index} delay={index * 130} className="group/step relative text-center">
                  <div className="icon-stage w-24 h-24 mx-auto mb-7 bg-white text-teal relative z-10 shadow-[0_16px_30px_-12px_rgb(0_0_0/0.5)]">
                    <Ic size={44} />
                  </div>
                  <span className="block text-sm font-extrabold text-orange tracking-[0.3em] mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-2 font-nunito">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED KITS ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-14">
              <div>
                <span className="chip mb-4">
                  <DecoSeal char="精" className="w-5 h-5" />
                  {lang === "en" ? "Most loved" : "最受欢迎"}
                </span>
                <h2 className="display text-ink !text-4xl sm:!text-5xl">{t.featuredKits.title}</h2>
              </div>
              <Link href="/kits" className="arrow-link text-teal font-bold hover:underline text-lg">
                {t.featuredKits.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((kit, i) => (
              <Reveal key={kit.id} delay={i * 120}>
                <KitCard kit={kit} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROMISE（暖色翻页） ============ */}
      <section className="section-warm py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
                {lang === "en" ? "Made for real tables" : "为真实的学习桌而做"}
              </p>
              <h2 className="display-zh text-ink !text-3xl sm:!text-4xl mb-6">{t.promise.title}</h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-9 max-w-xl">{t.promise.text}</p>
              <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-4 border-t border-teal/15 pt-6">
                {t.promise.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal shrink-0 mt-0.5"><IconCheck size={18} /></span>
                    <span className="text-ink text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AUDIENCE：两条清晰入口，不做营销色块卡片 ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
            {lang === "en" ? "Made for real learning contexts" : "为真实的学习场景而做"}
          </p>
          <div className="grid md:grid-cols-2 border-y border-teal/20">
            <Reveal>
              <Link href="/families" className="group block py-10 md:pr-12 md:border-r border-teal/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                <p className="text-sm font-semibold text-teal mb-4">01</p>
                <h3 className="font-nunito text-3xl font-extrabold text-ink">{t.audience.families.title}</h3>
                <p className="text-ink-light mt-4 max-w-md leading-relaxed">{t.audience.families.desc}</p>
                <span className="arrow-link text-teal font-bold mt-7">
                  {t.audience.families.cta} <IconArrowRight size={18} className="arrow" />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/teachers" className="group block py-10 md:pl-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                <p className="text-sm font-semibold text-orange mb-4">02</p>
                <h3 className="font-nunito text-3xl font-extrabold text-ink">{t.audience.teachers.title}</h3>
                <p className="text-ink-light mt-4 max-w-md leading-relaxed">{t.audience.teachers.desc}</p>
                <span className="arrow-link text-teal font-bold mt-7">
                  {t.audience.teachers.cta} <IconArrowRight size={18} className="arrow" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FREE / SUBSCRIBE ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DecoCloud className="absolute top-12 left-8 w-24 opacity-70 float-2" />
        <Reveal>
          <div className="max-w-3xl mx-auto text-center relative">
            <DecoSeal char="赠" className="w-14 h-14 mx-auto mb-7 float-1" />
            <h2 className="display text-ink !text-4xl sm:!text-5xl mb-5">{t.freeSample.title}</h2>
            <p className="text-lg text-ink-light mb-7 max-w-xl mx-auto">{t.freeSample.desc}</p>
            <Link href="/free/zodiac-animals" className="btn-primary text-base">
              {t.freeSample.cta} <IconArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
