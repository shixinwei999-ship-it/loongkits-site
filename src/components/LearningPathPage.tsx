"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { getResource, type LearningPath } from "@/lib/learningPaths";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconClock, IconDownload } from "@/components/icons";

export function LearningPathPage({ path }: { path: LearningPath }) {
  const { lang } = useLang();
  const hero = path.hero[lang];
  const featured = getResource(path.featuredResourceSlug);
  const dl =
    lang === "en"
      ? { a4: "Download A4 PDF", letter: "Download US Letter PDF" }
      : { a4: "下载 A4 PDF", letter: "下载 US Letter PDF" };

  const structuredData = featured
    ? {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: featured.title[lang],
        description: featured.summary[lang],
        educationalLevel: hero.eyebrow,
        learningResourceType: "Worksheet",
        isAccessibleForFree: true,
        inLanguage: ["en", "zh"],
      }
    : null;

  return (
    <div className="bg-paper">
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}

      {/* HERO：一张大图，左对齐大标题，一句话 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={path.image.src} alt={path.imageAlt[lang]} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/92 via-teal-dark/70 to-teal-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-36 sm:pb-32">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
            {lang === "en" ? "← Home" : "← 首页"}
          </Link>
          <p className="font-inter font-semibold uppercase tracking-[0.18em] text-orange text-xs sm:text-sm mt-10">{hero.eyebrow}</p>
          <h1 className="display-zh text-white max-w-3xl mt-4 !text-5xl sm:!text-7xl leading-[0.95]">{hero.title}</h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mt-7 max-w-xl">{hero.introduction}</p>
        </div>
      </section>

      {/* 主题大图墙：每个文化主题 = 一张全宽醒目横幅，标题压在图上，字极少 */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {path.topics.map((topic, i) => (
            <Reveal key={topic.image} delay={i * 70}>
              <article className="group relative overflow-hidden rounded-xl bg-ink aspect-[4/3] sm:aspect-[16/6]">
                <Image
                  src={topic.image}
                  alt={topic.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, 1100px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                <span className="absolute top-5 left-6 sm:top-7 sm:left-9 font-nunito font-extrabold text-white/25 text-5xl sm:text-7xl leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <h2 className="font-nunito font-extrabold text-white text-3xl sm:text-5xl tracking-tight">{topic.title[lang]}</h2>
                  <p className="text-white/80 text-base sm:text-lg mt-2 max-w-2xl leading-snug">{topic.blurb[lang]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 一行活动提示，不展开成长块 */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 border-t-2 border-teal pt-6">
              <IconClock size={20} className="text-orange shrink-0" />
              <p className="text-ink text-lg sm:text-xl font-medium leading-snug">{path.activityLine[lang]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 下载：一张真实预览 + 标题 + 双下载，极简 */}
      {featured && (
        <section className="section-teal px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[1/1.414] mx-auto max-w-xs bg-white rounded-lg shadow-[0_30px_70px_-30px_rgb(0_0_0/0.7)] overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
                <Image src={featured.previews[0].src} alt={featured.previews[0].alt[lang]} fill sizes="320px" className="object-contain p-3" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="font-inter font-semibold uppercase tracking-[0.14em] text-orange text-xs sm:text-sm mb-4">
                  {lang === "en" ? "Free · printable · take it home" : "免费 · 可打印 · 带回家"}
                </p>
                <h2 className="font-nunito font-extrabold text-white text-3xl sm:text-5xl tracking-tight">{featured.title[lang]}</h2>
                <p className="text-white/75 text-lg leading-relaxed mt-4 max-w-lg">{featured.summary[lang]}</p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href={featured.downloads.a4.href} download className="btn-accent text-base">
                    <IconDownload size={18} /> {dl.a4}
                  </a>
                  <a
                    href={featured.downloads.letter.href}
                    download
                    className="inline-flex items-center gap-2 font-bold text-white border-2 border-white/40 rounded-[0.85rem] px-6 py-3 hover:bg-white hover:text-teal-dark transition-colors"
                  >
                    <IconDownload size={18} /> {dl.letter}
                  </a>
                </div>
                <p className="text-white/50 text-sm mt-5">
                  {featured.format[lang]} · {featured.pageCount} {lang === "en" ? "pages" : "页"}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 相邻阶段 */}
      <section className="bg-paper px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            {path.nextSlug ? (
              <Link
                href={`/learn/${path.nextSlug}`}
                className="group flex items-center justify-between gap-6 border-t-2 border-teal pt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              >
                <span className="font-nunito font-extrabold text-2xl sm:text-4xl text-ink">{path.nextLabel[lang]}</span>
                <IconArrowRight size={30} className="text-teal shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            ) : (
              <div className="border-t-2 border-teal pt-8">
                <p className="font-nunito font-extrabold text-2xl sm:text-4xl text-ink max-w-2xl">{path.nextLabel[lang]}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
