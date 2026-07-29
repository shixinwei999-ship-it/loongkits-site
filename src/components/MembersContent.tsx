"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconBook, IconUsers, IconTeacher } from "@/components/icons";
import { kidsTracks, selfStudyTracks, teacherTracks, type Unit } from "@/lib/curriculum";

type Tab = "kids" | "self" | "teachers";

function UnitCard({ unit, lang }: { unit: Unit; lang: "en" | "zh" }) {
  return (
    <div className="rounded-xl border border-teal/12 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_14px_30px_-20px_rgba(31,74,56,0.4)]">
      <h4 className="font-nunito text-lg font-extrabold text-ink mb-1">{unit.title[lang]}</h4>
      <p className="text-xs text-ink-light mb-3">{unit.theme[lang]}</p>
      <ul className="space-y-2">
        {unit.lessons.map((lesson, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 shrink-0 text-[#b3121f] text-xs font-bold">{i + 1}</span>
            <div>
              <span className="font-semibold text-ink">{lesson.title[lang]}</span>
              <span className="text-ink-light"> — {lesson.summary[lang]}</span>
            </div>
          </li>
        ))}
      </ul>
      {unit.poem && (
        <div className="mt-3 rounded-lg bg-amber-50/60 border border-amber-200/40 p-3">
          <p className="text-xs font-bold text-amber-700 mb-1">📜 {unit.poem.title[lang]} — {unit.poem.author[lang]}</p>
          <p className="text-sm text-ink leading-relaxed font-serif-sc">{unit.poem.lines[lang].join(" ")}</p>
        </div>
      )}
      {unit.test && (
        <div className="mt-3 rounded-lg bg-teal/5 border border-teal/15 p-3">
          <p className="text-xs font-bold text-teal mb-1">📝 {unit.test.title[lang]} — {unit.test.questions.length} {lang === "en" ? "questions" : "题"}</p>
        </div>
      )}
      {unit.culture && (
        <div className="mt-3 rounded-lg bg-stone-50 border border-stone-200/60 p-3">
          <p className="text-xs font-bold text-stone-600 mb-1">🌏 {lang === "en" ? "Culture note" : "文化注"}</p>
          <p className="text-sm text-ink-light leading-relaxed">{unit.culture[lang]}</p>
        </div>
      )}
    </div>
  );
}

export function MembersContent() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>("kids");

  const tabs: { id: Tab; label: Bi<string>; icon: typeof IconBook; desc: Bi<string> }[] = [
    { id: "kids", label: { en: "Kids", zh: "儿童" }, icon: IconBook, desc: { en: "By grade · Pre-K to Grade 6 · textbook-style units with poems & tests", zh: "按年级 · 学前到六年级 · 教材式单元，含古诗和试卷" } },
    { id: "self", label: { en: "Self-Study", zh: "自学" }, icon: IconUsers, desc: { en: "By level · Beginner to Advanced · HSK-aligned · for teens & adults", zh: "按级别 · 入门到高级 · 对标 HSK · 适合青少年和成人" } },
    { id: "teachers", label: { en: "Teachers", zh: "教师" }, icon: IconTeacher, desc: { en: "By grade · lesson plans · poems · printable tests · culture notes", zh: "按年级 · 教案 · 古诗 · 可打印试卷 · 文化注" } },
  ];

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1c1917]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.04]" />
          <span className="absolute right-[5%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[20rem] leading-none text-amber-400/[0.04]">课</span>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-amber-400/80 mb-5">
              {lang === "en" ? "Members · structured curriculum" : "会员 · 成套教材"}
            </p>
            <h1 className="display-zh text-white !text-[clamp(2.5rem,6vw,4.5rem)] !leading-[0.98]">
              {lang === "en" ? "Textbooks, not just lessons" : "是教材，不只是课"}
            </h1>
            <p className="mt-5 text-lg text-stone-300 leading-relaxed max-w-2xl">
              {lang === "en"
                ? "Grade-by-grade units with vocabulary, reading, writing, classical poems, culture notes, and printable tests. Three tracks: kids, self-study, and teachers."
                : "按年级编排的单元：词汇、阅读、写作、古诗、文化注、可打印试卷。三条轨道：儿童、自学、教师。"}
            </p>
          </Reveal>
        </div>
      </section>

      {/* TABS */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 mb-10">
            {tabs.map((t) => {
              const Ic = t.icon;
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 ${
                    active
                      ? "bg-[#b3121f] text-white shadow-[0_8px_20px_-8px_rgba(157,15,27,0.6)]"
                      : "bg-white border border-teal/15 text-ink hover:border-[#b3121f]/30 hover:text-[#b3121f]"
                  }`}
                >
                  <Ic size={18} />
                  {t.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Tab description */}
          <Reveal>
            <p className="text-ink-light mb-8 text-sm">
              {tabs.find((t) => t.id === tab)?.desc[lang]}
            </p>
          </Reveal>

          {/* Track content */}
          {tab === "kids" && (
            <div className="space-y-12">
              {kidsTracks.map((track) => (
                <Reveal key={track.id}>
                  <div className="mb-4 flex items-baseline gap-3">
                    <h3 className="font-nunito text-2xl font-extrabold text-ink">{track.label[lang]}</h3>
                    <span className="text-sm text-ink-light">{track.ageRange[lang]}</span>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {track.units.map((unit) => (
                      <UnitCard key={unit.id} unit={unit} lang={lang} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {tab === "self" && (
            <div className="space-y-12">
              {selfStudyTracks.map((track) => (
                <Reveal key={track.id}>
                  <div className="mb-4 flex items-baseline gap-3">
                    <h3 className="font-nunito text-2xl font-extrabold text-ink">{track.label[lang]}</h3>
                    <span className="text-sm text-ink-light">{track.hskRange}</span>
                  </div>
                  <p className="text-sm text-ink-light mb-4">{track.desc[lang]}</p>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {track.units.map((unit) => (
                      <UnitCard key={unit.id} unit={unit} lang={lang} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {tab === "teachers" && (
            <div className="space-y-12">
              {teacherTracks.map((track) => (
                <Reveal key={track.id}>
                  <div className="mb-4 flex items-baseline gap-3">
                    <h3 className="font-nunito text-2xl font-extrabold text-ink">{track.label[lang]}</h3>
                    <span className="text-sm text-ink-light">{track.ageRange[lang]}</span>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {track.units.map((unit) => (
                      <UnitCard key={unit.id} unit={unit} lang={lang} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

type Bi<T> = Record<"en" | "zh", T>;
