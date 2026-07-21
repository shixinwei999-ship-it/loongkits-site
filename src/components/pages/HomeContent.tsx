"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { KitCard } from "@/components/KitCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Reveal } from "@/components/Reveal";
import {
  DragonPair,
  DecoLantern,
  DecoCloud,
  DecoEnvelope,
  DecoSeal,
} from "@/components/Illustration";
import {
  IconDownload,
  IconPrint,
  IconHeartHands,
  IconStack,
  IconFamily,
  IconBook,
  IconSparkle,
  IconTeacher,
  IconCheck,
  IconArrowRight,
} from "@/components/icons";

const stepIcons = [IconDownload, IconPrint, IconHeartHands];
const statIcons = [IconStack, IconFamily, IconBook, IconSparkle];

const stats = {
  en: [
    { value: "3", label: "Themes" },
    { value: "4", label: "Age bands" },
    { value: "12", label: "Printable kits" },
    { value: "3–18", label: "Years old" },
  ],
  zh: [
    { value: "3", label: "文化主题" },
    { value: "4", label: "年龄段" },
    { value: "12", label: "可打印学习包" },
    { value: "3–18", label: "岁全覆盖" },
  ],
};

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];
  const featured = featuredKitIds
    .map((id) => kits.find((k) => k.id === id))
    .filter((k): k is NonNullable<typeof k> => Boolean(k));

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-paper relative overflow-hidden pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        {/* 书法水印 */}
        <span aria-hidden className="watermark hidden xl:block absolute right-6 top-24 text-[7rem]">
          让中国文化活起来
        </span>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
            {/* 左：文案 */}
            <Reveal>
              <div className="relative z-10">
                <span className="chip mb-7">
                  <span className="seal w-6 h-6 text-[0.7rem]" aria-hidden>龙</span>
                  {lang === "en" ? "Bilingual · EN / 中文 · Printable" : "中英双语 · 可打印 · 3–18 岁"}
                </span>
                <h1 className={lang === "en" ? "display text-ink mb-6" : "display-zh text-ink mb-6"}>
                  {t.hero.title}
                </h1>
                <p className="text-lg sm:text-xl text-ink-light mb-9 max-w-md leading-relaxed">
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

            {/* 右：双龙舞台 + 漂浮元素 */}
            <Reveal delay={150}>
              <div className="relative h-[22rem] sm:h-[26rem] flex items-center justify-center">
                {/* 柔光盘 */}
                <div aria-hidden className="absolute w-[20rem] h-[20rem] rounded-full bg-white/70 shadow-[0_30px_60px_-20px_rgb(45_106_79/0.25)]" />
                <div aria-hidden className="absolute w-[20rem] h-[20rem] rounded-full border-2 border-dashed border-teal/20 spin-slow" />
                <DragonPair className="relative w-[24rem] max-w-full drop-shadow-sm float-1" />
                {/* 漂浮装饰 */}
                <DecoLantern className="absolute top-2 right-6 w-12 sway" />
                <DecoCloud className="absolute top-10 left-0 w-20 float-2 opacity-90" />
                <DecoEnvelope className="absolute bottom-4 left-8 w-12 float-3" />
                <DecoSeal char="福" className="absolute bottom-8 right-10 w-12 float-2" />
              </div>
            </Reveal>
          </div>

          {/* 数据条：大尺度数字 + 品牌色图标舞台 */}
          <Reveal delay={250}>
            <dl className="relative z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-teal/10 rounded-3xl shadow-[0_20px_45px_-22px_rgb(45_106_79/0.4)] overflow-hidden">
              {stats[lang].map((s, i) => {
                const Ic = statIcons[i];
                return (
                  <div
                    key={s.label}
                    className="flex flex-col items-center text-center px-4 py-7 bg-white"
                  >
                    <span className="icon-stage w-11 h-11 mb-3 bg-teal/10 text-teal">
                      <Ic size={22} />
                    </span>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="display !text-3xl sm:!text-4xl text-teal">{s.value}</dd>
                    <dd className="text-sm text-ink-light mt-1 font-medium">{s.label}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW IT WORKS（深色翻页） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DecoCloud className="absolute top-10 right-10 w-28 opacity-20 float-2" />
        <div className="max-w-5xl mx-auto relative">
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
      <section className="section-warm py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <span aria-hidden className="watermark absolute left-4 top-16 text-[6rem] !opacity-[0.05]">印</span>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <Reveal>
            <div>
              <h2 className="display-zh text-ink !text-3xl sm:!text-4xl mb-6">{t.promise.title}</h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-8 max-w-lg">{t.promise.text}</p>
              <ul className="space-y-4">
                {t.promise.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="icon-stage w-9 h-9 bg-teal text-white shrink-0">
                      <IconCheck size={18} />
                    </span>
                    <span className="text-ink font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative flex items-center justify-center h-72">
              <div aria-hidden className="absolute w-60 h-60 rounded-full bg-white/60" />
              <DragonPair className="relative w-80 max-w-full float-1" />
              <DecoLantern className="absolute top-0 right-8 w-10 sway" />
              <DecoEnvelope className="absolute bottom-2 left-6 w-10 float-3" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AUDIENCE（深色翻页，非对称双面板） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7">
          <Reveal>
            <Link href="/families" className="group block h-full">
              <div className="bg-white rounded-3xl p-10 h-full transition-transform duration-300 group-hover:-translate-y-1.5">
                <span className="icon-stage w-16 h-16 bg-teal/10 text-teal mb-6 group-hover:rotate-[-6deg] transition-transform">
                  <IconFamily size={34} />
                </span>
                <h3 className="text-3xl font-extrabold text-ink mb-3 font-nunito">{t.audience.families.title}</h3>
                <p className="text-ink-light mb-7 text-lg">{t.audience.families.desc}</p>
                <span className="arrow-link text-teal font-bold text-lg">
                  {t.audience.families.cta} <IconArrowRight size={20} className="arrow" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={130}>
            <Link href="/teachers" className="group block h-full">
              <div className="bg-orange rounded-3xl p-10 h-full text-white transition-transform duration-300 group-hover:-translate-y-1.5 shadow-[0_24px_45px_-18px_rgb(244_162_97/0.7)]">
                <span className="icon-stage w-16 h-16 bg-white/20 text-white mb-6 group-hover:rotate-[6deg] transition-transform">
                  <IconTeacher size={34} />
                </span>
                <h3 className="text-3xl font-extrabold mb-3 font-nunito">{t.audience.teachers.title}</h3>
                <p className="text-white/85 mb-7 text-lg">{t.audience.teachers.desc}</p>
                <span className="arrow-link font-bold text-lg">
                  {t.audience.teachers.cta} <IconArrowRight size={20} className="arrow" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FREE / SUBSCRIBE ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DecoCloud className="absolute top-12 left-8 w-24 opacity-70 float-2" />
        <Reveal>
          <div className="max-w-3xl mx-auto text-center relative">
            <DecoSeal char="赠" className="w-14 h-14 mx-auto mb-7 float-1" />
            <h2 className="display text-ink !text-4xl sm:!text-5xl mb-5">{t.freeSample.title}</h2>
            <p className="text-lg text-ink-light mb-9 max-w-xl mx-auto">{t.freeSample.desc}</p>
            <SubscribeForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
