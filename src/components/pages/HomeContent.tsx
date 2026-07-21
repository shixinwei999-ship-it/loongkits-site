"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { KitCard } from "@/components/KitCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Reveal } from "@/components/Reveal";

const stats = {
  en: [
    { value: "3", label: "Themes" },
    { value: "4", label: "Age bands" },
    { value: "12", label: "Printable kits" },
    { value: "3-18", label: "Years old" },
  ],
  zh: [
    { value: "3", label: "文化主题" },
    { value: "4", label: "年龄段" },
    { value: "12", label: "可打印学习包" },
    { value: "3-18", label: "岁全覆盖" },
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
      {/* Hero：纸感环境光 + 印章 + 浮动吉祥物 */}
      <section className="bg-paper relative overflow-hidden pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        {/* 竖排书法点缀 */}
        <p
          aria-hidden
          className="hidden xl:block absolute right-10 top-24 font-serif-sc text-teal/15 text-4xl leading-snug tracking-[0.5em] [writing-mode:vertical-rl] select-none"
        >
          让中国文化活起来
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="chip mb-6">
                  <span className="seal w-6 h-6 text-xs" aria-hidden>龙</span>
                  {lang === "en" ? "Bilingual · EN / 中文" : "中英双语 · 可打印"}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink mb-6 font-nunito leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-ink-light mb-8 max-w-md">{t.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/kits" className="btn-primary">
                    {t.hero.cta}
                  </Link>
                  <Link href="/free" className="btn-secondary">
                    {t.hero.ctaSecondary}
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative h-80 md:h-96 bg-teal/5 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* 同心装饰环 */}
                <div aria-hidden className="absolute w-64 h-64 rounded-full border-2 border-dashed border-teal/15" />
                <div aria-hidden className="absolute w-44 h-44 rounded-full border border-orange/25" />
                {/* D4 资产任务：替换为双龙形象真实图片（Hong + Qing） */}
                <div className="text-center relative">
                  <div
                    className="text-7xl mb-4 animate-float"
                    role="img"
                    aria-label={t.hero.mascotAlt}
                  >
                    🐉
                  </div>
                  <p className="text-ink-light text-sm font-medium tracking-wide">
                    Hong <span className="text-red">红</span> &amp; Qing{" "}
                    <span className="text-teal">青</span>
                  </p>
                </div>
                {/* 底部小灯笼装饰 */}
                <span aria-hidden className="absolute bottom-6 left-8 text-2xl animate-float-slow">🏮</span>
                <span aria-hidden className="absolute top-8 right-10 text-xl animate-float-slow [animation-delay:1.5s]">🧧</span>
              </div>
            </Reveal>
          </div>

          {/* 数据条 */}
          <Reveal delay={250}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/70 rounded-2xl px-6 py-6 shadow-sm">
              {stats[lang].map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-extrabold text-teal font-nunito">{s.value}</dd>
                  <dd className="text-sm text-ink-light mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* How It Works：时间轴式三步 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-4 font-nunito">
              {t.howItWorks.title}
            </h2>
            <div className="w-16 h-1 bg-orange rounded-full mx-auto mb-16" aria-hidden />
          </Reveal>
          <div className="relative grid md:grid-cols-3 gap-10">
            {/* 连接虚线 */}
            <div aria-hidden className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-2 border-dashed border-teal/20" />
            {t.howItWorks.steps.map((step, index) => (
              <Reveal key={index} delay={index * 130} className="group/step relative text-center">
                <div className="icon-lg mx-auto mb-6 text-4xl relative z-10 bg-white ring-1 ring-teal/10">
                  {step.icon}
                </div>
                <span className="inline-block text-xs font-bold text-orange tracking-widest mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-ink mb-2 font-nunito">{step.title}</h3>
                <p className="text-ink-light">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
              <div>
                <span className="chip mb-3">{lang === "en" ? "Most loved" : "最受欢迎"}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-ink font-nunito">
                  {t.featuredKits.title}
                </h2>
              </div>
              <Link href="/kits" className="arrow-link text-teal font-semibold hover:underline">
                {t.featuredKits.viewAll} <span className="arrow">→</span>
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

      {/* Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <Link href="/families" className="group block h-full">
                <div className="bg-teal/5 rounded-3xl p-12 text-center hover:bg-teal/10 transition-colors duration-300 h-full">
                  <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">👨‍👩‍👧</div>
                  <h3 className="text-2xl font-bold text-ink mb-3 font-nunito">
                    {t.audience.families.title}
                  </h3>
                  <p className="text-ink-light mb-6">{t.audience.families.desc}</p>
                  <span className="btn-primary inline-block">
                    {t.audience.families.cta} <span className="arrow inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={130}>
              <Link href="/teachers" className="group block h-full">
                <div className="bg-orange/5 rounded-3xl p-12 text-center hover:bg-orange/10 transition-colors duration-300 h-full">
                  <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">👩‍🏫</div>
                  <h3 className="text-2xl font-bold text-ink mb-3 font-nunito">
                    {t.audience.teachers.title}
                  </h3>
                  <p className="text-ink-light mb-6">{t.audience.teachers.desc}</p>
                  <span className="btn-accent inline-block">
                    {t.audience.teachers.cta} <span className="arrow inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Free Sample（原版的虚构家长评价已移除——上线前不放假证言） */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-paper">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="seal w-10 h-10 text-lg mb-6" aria-hidden>赠</span>
            <h2 className="text-3xl font-bold text-ink mb-4 font-nunito">{t.freeSample.title}</h2>
            <p className="text-ink-light mb-8">{t.freeSample.desc}</p>
            <SubscribeForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
