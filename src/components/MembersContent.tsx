"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconBook, IconUsers, IconTeacher } from "@/components/icons";
import { kidsTracks, selfStudyTracks, teacherTracks, type Unit, type LessonItem } from "@/lib/curriculum";
import { BookReader, type Book } from "@/components/BookReader";
import { grade1Book } from "@/lib/books/grade1";
import { grade2Book } from "@/lib/books/grade2";
import { grade3Book } from "@/lib/books/grade3";
import { grade4Book } from "@/lib/books/grade4";
import { grade5Book } from "@/lib/books/grade5";
import { grade6Book } from "@/lib/books/grade6";
import { grade7Book } from "@/lib/books/grade7";
import { grade8Book } from "@/lib/books/grade8";
import { grade9Book } from "@/lib/books/grade9";
import { grade10Book } from "@/lib/books/grade10";

type Tab = "kids" | "self" | "teachers";

// 已完成的完整书（一年级到十年级）。
const books: Record<string, Book> = {
  g1: grade1Book, g2: grade2Book, g3: grade3Book, g4: grade4Book, g5: grade5Book,
  g6: grade6Book, g7: grade7Book, g8: grade8Book, g9: grade9Book, g10: grade10Book,
};

function LessonRow({ lesson, lang }: { lesson: LessonItem; lang: "en" | "zh" }) {
  const [open, setOpen] = useState(false);
  const typeLabel: Record<string, Bi<string>> = {
    vocab: { en: "Vocab", zh: "词汇" },
    reading: { en: "Reading", zh: "阅读" },
    writing: { en: "Writing", zh: "写作" },
    grammar: { en: "Grammar", zh: "语法" },
    culture: { en: "Culture", zh: "文化" },
    listening: { en: "Listening", zh: "听力" },
  };
  return (
    <li className="rounded-lg border border-teal/8 bg-white/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm"
      >
        <span className="mt-0.5 shrink-0 font-inter text-[0.6rem] font-bold uppercase tracking-wider text-[#b3121f]">
          {typeLabel[lesson.type]?.[lang]}
        </span>
        <div className="flex-1">
          <span className="font-semibold text-ink">{lesson.title[lang]}</span>
          <span className="text-ink-light"> — {lesson.summary[lang]}</span>
        </div>
        <span className={`mt-1 shrink-0 text-ink-light transition-transform ${open ? "rotate-90" : ""}`}>›</span>
      </button>
      {open && (
        <p className="border-t border-teal/8 px-3 py-2.5 text-sm leading-relaxed text-ink-light">
          {lesson.content[lang]}
        </p>
      )}
    </li>
  );
}

function UnitCard({ unit, lang }: { unit: Unit; lang: "en" | "zh" }) {
  return (
    <div className="rounded-xl border border-teal/12 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_14px_30px_-20px_rgba(31,74,56,0.4)]">
      <h4 className="font-nunito text-lg font-extrabold text-ink mb-1">{unit.title[lang]}</h4>
      <p className="text-xs text-ink-light mb-3">{unit.theme[lang]}</p>
      <ul className="space-y-1.5">
        {unit.lessons.map((lesson, i) => (
          <LessonRow key={i} lesson={lesson} lang={lang} />
        ))}
      </ul>
      {unit.poem && (
        <div className="mt-3 rounded-lg bg-amber-50/60 border border-amber-200/40 p-3">
          <p className="text-xs font-bold text-amber-700 mb-1">📜 {unit.poem.title[lang]} — {unit.poem.author[lang]}</p>
          <p className="text-sm text-ink leading-relaxed font-serif-sc">{unit.poem.lines.zh.join(" ")}</p>
          {unit.poem.pinyin && (
            <p className="mt-1 text-xs text-amber-700/70 leading-relaxed">{unit.poem.pinyin.join(" ")}</p>
          )}
          <p className="mt-1.5 text-xs text-ink-light leading-relaxed">{unit.poem.note[lang]}</p>
        </div>
      )}
      {unit.test && (
        <div className="mt-3 rounded-lg bg-teal/5 border border-teal/15 p-3">
          <p className="text-xs font-bold text-teal mb-2">📝 {unit.test.title[lang]}</p>
          <ol className="space-y-1.5">
            {unit.test.questions.map((qst, i) => (
              <li key={i} className="text-xs text-ink-light">
                <span className="text-ink">{i + 1}. {qst.q[lang]}</span>
                <span className="ml-1 text-teal font-semibold">✓ {qst.options[lang][qst.answer]}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {unit.culture && (
        <div className="mt-3 rounded-lg bg-stone-50 border border-stone-200/60 p-3">
          <p className="text-xs font-bold text-stone-600 mb-1">🌏 {lang === "en" ? "Culture note" : "文化注"}</p>
          <p className="text-sm text-ink-light leading-relaxed">{unit.culture[lang]}</p>
        </div>
      )}
      {unit.vocab && (
        <div className="mt-3">
          <p className="text-xs font-bold text-stone-600 mb-1.5">字 {lang === "en" ? "Vocab list" : "识字表"}</p>
          <div className="flex flex-wrap gap-1.5">
            {unit.vocab[lang].map((v) => (
              <span key={v} className="rounded-md bg-teal/8 px-2 py-0.5 text-xs text-teal-dark font-medium">{v}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function MembersContent() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>("kids");
  const [openBook, setOpenBook] = useState<Book | null>(null);

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

          {/* Track content = 书架：每本只是一本书的封面，点封面翻开 */}
          {(() => {
            type Cover = { id: string; label: Bi<string>; sub: Bi<string>; book?: Book };
            let shelf: Cover[] = [];
            if (tab === "kids") {
              shelf = kidsTracks.map((t) => ({ id: t.id, label: t.label, sub: t.ageRange, book: books[t.id] }));
              shelf = shelf.concat([
                { id: "g7", label: { en: "Grade 7", zh: "七年级" }, sub: { en: "Ages 12-13", zh: "12-13 岁" }, book: books.g7 },
                { id: "g8", label: { en: "Grade 8", zh: "八年级" }, sub: { en: "Ages 13-14", zh: "13-14 岁" }, book: books.g8 },
                { id: "g9", label: { en: "Grade 9", zh: "九年级" }, sub: { en: "Ages 14-15", zh: "14-15 岁" }, book: books.g9 },
                { id: "g10", label: { en: "Grade 10", zh: "十年级" }, sub: { en: "Ages 15-16", zh: "15-16 岁" }, book: books.g10 },
              ]);
            }
            else if (tab === "self") shelf = selfStudyTracks.map((t) => ({ id: t.id, label: t.label, sub: { en: t.hskRange, zh: t.hskRange } }));
            else shelf = kidsTracks.map((t) => ({ id: t.id, label: { en: `${t.label.en} Teacher`, zh: `${t.label.zh} · 教师` }, sub: t.ageRange }));

            const palette = ["#b3121f", "#2d6a4f", "#c9a24a", "#1f4a38", "#7c3aed", "#92400e", "#334155", "#0f766e", "#9f1239", "#4c1d95", "#115e59", "#7c2d12"];
            return (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {shelf.map((c, i) => {
                  const color = palette[i % palette.length];
                  const ready = !!c.book;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => ready && setOpenBook(c.book!)}
                      disabled={!ready}
                      className="group relative aspect-[3/4] text-left disabled:cursor-default"
                      style={{ perspective: "800px" }}
                    >
                      {/* 书脊阴影 */}
                      <div className="absolute -inset-x-2 bottom-2 top-4 rounded-lg bg-black/10 blur-md transition-opacity group-hover:opacity-80" />
                      {/* 书面 */}
                      <div
                        className={`relative h-full w-full overflow-hidden rounded-r-md rounded-l-sm shadow-lg transition-all duration-300 ${ready ? "group-hover:-translate-y-2 group-hover:rotate-[-1deg]" : "opacity-60"}`}
                        style={{
                          background: `linear-gradient(135deg, ${color} 0%, ${color} 60%, rgba(0,0,0,0.25) 100%)`,
                          boxShadow: "inset 6px 0 10px -6px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)",
                        }}
                      >
                        {/* 书脊高光 */}
                        <div className="absolute inset-y-0 left-0 w-2 bg-white/15" />
                        <div className="absolute inset-y-0 left-2 w-px bg-black/30" />
                        {/* 内容 */}
                        <div className="flex h-full flex-col items-center justify-between p-4 pt-6 text-center text-white">
                          <p className="font-inter text-[0.55rem] font-bold uppercase tracking-[0.3em] text-white/70">Loong Kits</p>
                          <div className="flex flex-col items-center">
                            <span className="font-serif-sc text-5xl font-bold leading-none text-white/90">{c.label.zh}</span>
                            <span className="mt-2 font-inter text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/60">{c.label.en}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-serif-sc text-3xl font-bold text-white/20">龙</span>
                            <span className="text-[0.6rem] text-white/60">{c.sub[lang]}</span>
                            {ready ? (
                              <span className="mt-1 rounded-full bg-white/90 px-3 py-0.5 text-[0.6rem] font-bold text-[#1a1a1a]">{lang === "en" ? "Open" : "翻开"}</span>
                            ) : (
                              <span className="mt-1 rounded-full bg-black/30 px-3 py-0.5 text-[0.6rem] font-medium text-white/70">{lang === "en" ? "Soon" : "编写中"}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {openBook && <BookReader book={openBook} onClose={() => setOpenBook(null)} />}
    </div>
  );
}

type Bi<T> = Record<"en" | "zh", T>;
