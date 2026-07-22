"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { getResource, type LearningPath } from "@/lib/learningPaths";
import { IconArrowRight, IconCheck, IconClock, IconDownload, IconStack } from "@/components/icons";

export function LearningPathPage({ path }: { path: LearningPath }) {
  const { lang } = useLang();

  const hero = path.hero[lang];
  const goals = path.goals[lang];
  const profile = path.profile[lang];
  const nextLabel = path.nextLabel[lang];
  const journey = path.journey.map((step) => ({
    order: step.order,
    title: step.title[lang],
    knowledge: step.knowledge[lang],
    inquiry: step.inquiry[lang],
    boundary: step.boundary[lang],
  }));
  const activity = {
    duration: path.activity.duration[lang],
    materials: path.activity.materials[lang],
    learnerAction: path.activity.learnerAction[lang],
    familyPrompt: path.activity.familyPrompt[lang],
    classroomAdaptation: path.activity.classroomAdaptation[lang],
  };

  const featured = getResource(path.featuredResourceSlug);
  const extras = path.extraResourceSlugs
    .map(getResource)
    .filter((resource): resource is NonNullable<typeof resource> => Boolean(resource));
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
        teaches: goals,
      }
    : null;

  return (
    <div className="bg-paper">
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}

      {/* HERO：左对齐大标题压在年龄图上，不做居中三件套 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={path.image.src}
            alt={path.imageAlt[lang]}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/92 via-teal-dark/72 to-teal-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/70 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-28">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
            {lang === "en" ? "← Home" : "← 首页"}
          </Link>
          <p className="font-inter font-semibold uppercase tracking-[0.16em] text-orange text-xs sm:text-sm mt-8">
            {hero.eyebrow}
          </p>
          <h1 className="display-zh text-white max-w-3xl mt-4 !text-4xl sm:!text-6xl">{hero.title}</h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mt-6 max-w-2xl">{hero.introduction}</p>
          <p className="text-base text-white/70 leading-relaxed mt-8 max-w-2xl border-t border-white/20 pt-6">{profile}</p>
        </div>
      </section>

      {/* 学习目标：编辑式横排，序号分隔，不做圆角卡片网格 */}
      <section className="bg-paper px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-8">
            {lang === "en" ? "What they will be able to do" : "学完这个阶段，孩子能做到"}
          </p>
          <div className="grid sm:grid-cols-3 border-t border-teal/20">
            {goals.map((goal, i) => (
              <div key={goal} className="py-6 pr-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-teal/10">
                <span className="font-nunito font-extrabold text-teal/30 text-3xl">0{i + 1}</span>
                <p className="text-ink leading-relaxed mt-2">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 知识旅程：交替非对称布局 + 高亮探究框 + 文化边界说明 + 竖排单字水印 */}
      <section className="section-warm relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <span
          aria-hidden
          className="vert-calligraphy hidden lg:block absolute right-6 top-24 text-[9rem] text-teal/[0.05] select-none pointer-events-none"
        >
          {path.watermark}
        </span>
        <div className="max-w-6xl mx-auto relative">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-4">
            {lang === "en" ? "The learning journey" : "学习旅程"}
          </p>
          <h2 className="display-zh text-ink !text-3xl sm:!text-5xl mb-14 max-w-2xl">
            {lang === "en" ? "Three ideas, in order" : "三个想法，按顺序来"}
          </h2>

          <div className="space-y-16 sm:space-y-24">
            {journey.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <article key={step.order} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className={`lg:col-span-4 ${flip ? "lg:order-2" : ""}`}>
                    <span className="font-nunito font-extrabold text-teal/15 text-7xl sm:text-8xl leading-none block">
                      {String(step.order).padStart(2, "0")}
                    </span>
                    <h3 className="font-nunito font-extrabold text-2xl sm:text-3xl text-ink mt-3">{step.title}</h3>
                  </div>
                  <div className={`lg:col-span-8 ${flip ? "lg:order-1" : ""}`}>
                    <p className="text-lg text-ink/90 leading-relaxed">{step.knowledge}</p>
                    <div className="mt-6 bg-white border-l-4 border-orange rounded-r-lg px-6 py-5 shadow-[0_14px_30px_-22px_rgb(31_74_56/0.5)] transition-transform duration-300 hover:-translate-y-0.5">
                      <p className="font-inter font-semibold uppercase tracking-[0.1em] text-orange text-[0.7rem] mb-2">
                        {lang === "en" ? "Ask together" : "一起问"}
                      </p>
                      <p className="text-ink font-medium leading-relaxed">{step.inquiry}</p>
                    </div>
                    <p className="mt-5 text-sm text-ink-light italic leading-relaxed flex gap-2">
                      <span className="not-italic font-semibold uppercase tracking-[0.08em] text-teal/70 text-[0.65rem] mt-0.5 shrink-0">
                        {lang === "en" ? "Note" : "说明"}
                      </span>
                      <span>{step.boundary}</span>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 活动：深色块强对比，家庭 / 课堂两栏 */}
      <section className="section-teal px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="font-inter font-semibold uppercase tracking-[0.12em] text-orange text-xs sm:text-sm mb-4">
              {lang === "en" ? "Do it together" : "一起动手"}
            </p>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-6">{activity.learnerAction}</h2>
            <div className="flex items-center gap-2 text-white/80 mb-8">
              <IconClock size={18} className="text-orange" />
              <span className="text-sm font-medium">{activity.duration}</span>
            </div>
            <p className="text-white/60 text-xs uppercase tracking-[0.1em] mb-3">
              {lang === "en" ? "You will need" : "需要准备"}
            </p>
            <ul className="space-y-2">
              {activity.materials.map((m) => (
                <li key={m} className="flex items-start gap-3 text-white/85">
                  <IconCheck size={16} className="text-orange mt-1 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            <div className="bg-white/8 rounded-xl p-7 border border-white/10">
              <p className="font-inter font-semibold uppercase tracking-[0.1em] text-orange text-[0.7rem] mb-3 flex items-center gap-2">
                <IconStack size={16} /> {lang === "en" ? "For families" : "给家庭"}
              </p>
              <p className="text-white/90 leading-relaxed">{activity.familyPrompt}</p>
            </div>
            <div className="bg-white/8 rounded-xl p-7 border border-white/10">
              <p className="font-inter font-semibold uppercase tracking-[0.1em] text-orange text-[0.7rem] mb-3 flex items-center gap-2">
                <IconStack size={16} /> {lang === "en" ? "For classrooms" : "给课堂"}
              </p>
              <p className="text-white/90 leading-relaxed">{activity.classroomAdaptation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 资源：真实 PDF 预览 + 下载，extra 做次级卡 */}
      <section className="bg-paper px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-4">
            {lang === "en" ? "Start here — free and printable" : "从这里开始 — 免费、可打印"}
          </p>
          {featured && (
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="relative aspect-[1/1.414] bg-white border border-teal/10 rounded-lg shadow-[0_24px_60px_-34px_rgb(31_74_56/0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <Image
                    src={featured.previews[0].src}
                    alt={featured.previews[0].alt[lang]}
                    fill
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-contain p-3"
                  />
                </div>
                {featured.previews.length > 1 && (
                  <div className="flex gap-3 mt-3">
                    {featured.previews.slice(1).map((preview) => (
                      <div key={preview.src} className="relative w-20 aspect-[1/1.414] bg-white border border-teal/10 rounded overflow-hidden">
                        <Image src={preview.src} alt={preview.alt[lang]} fill sizes="80px" className="object-contain p-1" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-teal">{featured.topic[lang]}</p>
                <h3 className="font-nunito font-extrabold text-3xl sm:text-4xl text-ink mt-2">{featured.title[lang]}</h3>
                <p className="text-ink-light leading-relaxed mt-4">{featured.summary[lang]}</p>
                <ul className="mt-6 space-y-2 border-t border-teal/15 pt-6">
                  {featured.learningGoals[lang].map((g) => (
                    <li key={g} className="flex items-start gap-3 text-ink">
                      <IconCheck size={16} className="text-teal mt-1 shrink-0" />
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href={featured.downloads.a4.href} download className="btn-primary text-base">
                    <IconDownload size={18} /> {dl.a4}
                  </a>
                  <a href={featured.downloads.letter.href} download className="btn-secondary text-base">
                    <IconDownload size={18} /> {dl.letter}
                  </a>
                </div>
                <p className="text-xs text-ink-light mt-4">
                  {featured.format[lang]} · {featured.pageCount} {lang === "en" ? "pages" : "页"} · {featured.duration[lang]}
                </p>
              </div>
            </div>
          )}

          {extras.length > 0 && (
            <div className="mt-14 grid sm:grid-cols-2 gap-6">
              {extras.map((resource) => (
                <div key={resource.slug} className="flex gap-5 border border-teal/12 rounded-lg p-5 bg-white">
                  <div className="relative w-20 shrink-0 aspect-[1/1.414] bg-cream border border-teal/10 rounded overflow-hidden">
                    <Image src={resource.previews[0].src} alt={resource.previews[0].alt[lang]} fill sizes="80px" className="object-contain p-1" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-nunito font-bold text-lg text-ink leading-tight">{resource.title[lang]}</h4>
                    <p className="text-sm text-ink-light mt-1 leading-relaxed">{resource.summary[lang]}</p>
                    <div className="flex gap-3 mt-3">
                      <a href={resource.downloads.a4.href} download className="text-sm font-semibold text-teal hover:underline">
                        A4
                      </a>
                      <a href={resource.downloads.letter.href} download className="text-sm font-semibold text-teal hover:underline">
                        US Letter
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 相邻路径 + 次级目录入口 */}
      <section className="bg-paper px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {path.nextSlug ? (
            <Link
              href={`/learn/${path.nextSlug}`}
              className="group block border-t-2 border-teal pt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-3">
                {lang === "en" ? "Keep going" : "继续往下"}
              </p>
              <span className="flex items-center justify-between gap-6">
                <span className="font-nunito font-extrabold text-2xl sm:text-4xl text-ink">{nextLabel}</span>
                <IconArrowRight size={28} className="text-teal shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          ) : (
            <div className="border-t-2 border-teal pt-8">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-3">
                {lang === "en" ? "You reached the top stage" : "你到了最高阶段"}
              </p>
              <p className="font-nunito font-extrabold text-2xl sm:text-4xl text-ink max-w-2xl">{nextLabel}</p>
            </div>
          )}
          <Link href={`/kits?age=${path.id}`} className="arrow-link text-ink-light hover:text-teal font-medium mt-8 inline-flex">
            {lang === "en" ? "See all kits for this age in the catalog" : "在目录里查看这个年龄的全部学习包"}{" "}
            <IconArrowRight size={16} className="arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
}
