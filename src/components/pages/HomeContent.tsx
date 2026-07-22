"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { KitCard } from "@/components/KitCard";
import { Reveal } from "@/components/Reveal";
import { DragonArtStage } from "@/components/DragonArtStage";
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
      {/* ============ HERO：字体主导的编辑式首屏 ============ */}
      <section className="bg-paper relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        {/* 主视觉只留给双龙资产；不再用泛用民俗符号填满留白。 */}

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-4 items-center">
            {/* 左：大字 */}
            <Reveal className="lg:col-span-7">
              <div className="relative z-10">
                <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
                  {lang === "en" ? "Bilingual printable culture kits" : "中英双语 · 可打印文化学习包"}
                </p>

                <h1 className="display-zh text-ink max-w-2xl">{t.hero.title}</h1>

                <p className="text-lg sm:text-xl text-ink-light mt-7 mb-9 max-w-md leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/kits" className="btn-primary text-base">
                    {t.hero.cta} <IconArrowRight size={18} />
                  </Link>
                  <Link href="/free" className="btn-secondary text-base">
                    {t.hero.ctaSecondary}
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 右：双龙是首屏唯一主视觉，背景保持安静。 */}
            <Reveal delay={150} className="lg:col-span-5">
              <div className="dragon-art-stage relative mx-auto w-full max-w-[34rem] aspect-[3/2]">
                <DragonArtStage className="h-full w-full" alt={t.hero.mascotAlt} />
              </div>
            </Reveal>
          </div>
        </div>
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
