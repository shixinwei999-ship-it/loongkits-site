"use client";

// 中文课堂：教学是主轴，文化是练这些语言点的语境。
// 进去就能学、能听、能练——声调带调型图、笔画带书写动画、每个字/词点一下用浏览器中文语音朗读。
// 左侧 sticky 目录随滚动高亮当前模块，给“我正在一条学习路径上”的进度感。

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SpeakButton, WordChip } from "@/components/Speak";
import { ToneCards } from "@/components/ToneCards";
import { InitialGrid } from "@/components/InitialGrid";
import { FinalGrid } from "@/components/FinalGrid";
import { BlendRows } from "@/components/BlendRows";
import { ToneDemo } from "@/components/ToneDemo";
import { IconArrowRight } from "@/components/icons";
import { strokes, radicals, firstChars, firstWords } from "@/lib/chineseCurriculum";

const MODULES = [
  { id: "tones", en: "Tones", zh: "声调" },
  { id: "initials", en: "Initials", zh: "声母" },
  { id: "finals", en: "Finals", zh: "韵母" },
  { id: "blends", en: "Blend them", zh: "拼读" },
  { id: "strokes", en: "Strokes", zh: "笔画" },
  { id: "radicals", en: "Radicals", zh: "偏旁" },
  { id: "chars", en: "First characters", zh: "第一批字" },
  { id: "words", en: "First words", zh: "第一批词" },
] as const;

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function SectionHead({ index, en, zh, lead }: { index: string; en: string; zh: string; lead: Record<"en" | "zh", string> }) {
  const { lang } = useLang();
  return (
    <div className="mb-8 flex items-start gap-5">
      <span className="font-nunito text-5xl font-extrabold leading-none text-teal/15 sm:text-6xl">{index}</span>
      <div>
        <h2 className="font-nunito text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{lang === "en" ? en : zh}</h2>
        <p className="mt-2 max-w-2xl text-ink-light leading-relaxed">{lead[lang]}</p>
      </div>
    </div>
  );
}

export function ChineseClassroom() {
  const { lang } = useLang();
  const active = useActiveSection(MODULES.map((m) => m.id));
  const heroRef = useRef<HTMLElement>(null);

  const t = {
    eyebrow: { en: "Chinese class · start from zero", zh: "中文课堂 · 从零开始" },
    title: { en: "Learn to hear it, then say it", zh: "先学会听，再学会说" },
    intro: {
      en: "This is where the teaching lives. No account, no app — tap any character to hear a native voice, watch how each tone moves, and see how a character is built stroke by stroke. Culture pages later give these sounds somewhere to live.",
      zh: "教学在这里发生。不用注册、不用 App——点任何一个字听母语发音，看每个声调怎么走，看一个字怎样一笔一笔写出来。后面的文化页，只是给这些声音一个使用的地方。",
    },
    startCta: { en: "Start with tones", zh: "从声调开始" },
    pathLabel: { en: "Your path", zh: "你的路径" },
    bridgeTitle: { en: "Now give these sounds a home", zh: "现在给这些声音一个家" },
    bridgeText: {
      en: "The sounds above become real inside stories, festivals and everyday life. Pick an age and practise the same characters in context.",
      zh: "上面的声音，放进故事、节日和日常生活里才真正活起来。选一个年龄，在语境里练同一批字。",
    },
    bridgeCta: { en: "Open the age paths", zh: "打开年龄路径" },
  };

  return (
    <div className="bg-paper">
      <div className="shot-hide fixed left-0 top-16 z-40 h-[3px] bg-gradient-to-r from-orange to-teal transition-[width] duration-150 ease-out" style={{ width: `${0}%` }} />

      {/* HERO */}
      <section ref={heroRef} className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-teal/[0.06] blur-3xl" />
          <span className="vert-calligraphy absolute bottom-2 right-6 hidden text-[14rem] leading-none text-teal/[0.04] lg:block">音</span>
          <div className="absolute inset-0 opacity-[0.5]" style={{ backgroundImage: "radial-gradient(rgb(45 106 79 / 0.06) 1px, transparent 1px)", backgroundSize: "26px 26px", maskImage: "radial-gradient(ellipse 80% 60% at 70% 30%, black, transparent)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 70% 30%, black, transparent)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-teal sm:text-sm">
                  <span className="hero-dot inline-block h-2 w-2 rounded-full bg-orange" />
                  {t.eyebrow[lang]}
                </p>
              </Reveal>
              <Reveal delay={80}><h1 className="display-zh text-ink !text-[clamp(2.6rem,7vw,5rem)] !leading-[0.98]">{t.title[lang]}</h1></Reveal>
              <Reveal delay={150}><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-light">{t.intro[lang]}</p></Reveal>
              <Reveal delay={220}>
                <a href="#tones" className="btn-primary mt-8 inline-flex text-base">{t.startCta[lang]} <IconArrowRight size={18} /></a>
              </Reveal>
            </div>
            <Reveal delay={160}><ToneDemo /></Reveal>
          </div>
        </div>
      </section>

      {/* 课堂主体 */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[15rem_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-4 font-inter text-xs font-semibold uppercase tracking-[0.14em] text-ink-light">{t.pathLabel[lang]}</p>
              <ol className="space-y-1 border-l border-teal/15">
                {MODULES.map((m, i) => {
                  const on = active === m.id;
                  return (
                    <li key={m.id}>
                      <a href={`#${m.id}`} className={`-ml-px flex items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors ${on ? "border-orange font-semibold text-ink" : "border-transparent text-ink-light hover:border-teal/40 hover:text-teal"}`}>
                        <span className={`font-nunito text-xs tabular-nums ${on ? "text-orange" : "text-ink-light/60"}`}>{String(i + 1).padStart(2, "0")}</span>
                        {lang === "en" ? m.en : m.zh}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 sm:space-y-24">
            <Reveal><section id="tones" className="scroll-mt-24">
              <SectionHead index="01" en="The four tones + neutral" zh="四个声调 + 轻声"
                lead={{ en: "Mandarin is tonal: the pitch shape changes the word. Learn the shape, the feel, and a hand gesture for each — then tap examples to hear them.", zh: "普通话是有声调的：音高怎么走，字就不同。先记住每个调的形状、感觉和一个手势，再点例字听。" }} />
              <ToneCards />
            </section></Reveal>

            <Reveal><section id="initials" className="scroll-mt-24">
              <SectionHead index="02" en="Initials — the consonant onsets" zh="声母——字音开头的辅音"
                lead={{ en: "21 onsets. The small character is how teachers say the letter aloud; tap it to hear the sound, then read the letter.", zh: "21 个声母。旁边的小字是老师念这个字母的音，点它听声，再认字母。" }} />
              <InitialGrid />
            </section></Reveal>

            <Reveal><section id="finals" className="scroll-mt-24">
              <SectionHead index="03" en="Finals — the vowel cores" zh="韵母——字音里的元音核心"
                lead={{ en: "24 finals carry the open sound of a syllable. Tap the example character to hear each one clearly.", zh: "24 个韵母，承载一个音节里敞开的声音。点代表字，听清每一个。" }} />
              <FinalGrid />
            </section></Reveal>

            <Reveal><section id="blends" className="scroll-mt-24">
              <SectionHead index="04" en="Blend them together" zh="把它们拼起来"
                lead={{ en: "An initial plus a final makes a syllable. Read the two parts, then tap the result to hear the real character.", zh: "声母加韵母，拼成一个音节。先读两部分，再点结果听真实的字。" }} />
              <BlendRows />
            </section></Reveal>

            <Reveal><section id="strokes" className="scroll-mt-24">
              <SectionHead index="05" en="Strokes — how a character is built" zh="笔画——一个字怎样写出来"
                lead={{ en: "Every character is a few strokes in order. Hover a card to watch the stroke write itself; tap the example to hear it.", zh: "每个字都是几笔、按顺序写成。把鼠标移到卡片上看它一笔写出来，点例字听音。" }} />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {strokes.map((s) => (
                  <div key={s.en} className="group/stroke rounded-2xl border border-teal/12 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_34px_-22px_rgb(31_74_56/0.5)]">
                    <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20" aria-hidden>
                      <rect x="6" y="6" width="88" height="88" rx="6" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-teal/10" />
                      <line x1="50" y1="6" x2="50" y2="94" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
                      <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
                      <path d={s.path} pathLength={1} className="stroke-path" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div><p className="font-nunito text-base font-bold text-ink">{s.name[lang]}</p><p className="text-xs text-teal">{s.pinyin}</p></div>
                      <SpeakButton text={s.example.char} size="sm" />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink-light">{s.tip[lang]}</p>
                    <p className="mt-2 font-serif-sc text-lg text-ink">{s.example.char} <span className="text-xs text-ink-light">{s.example.pinyin}</span></p>
                  </div>
                ))}
              </div>
            </section></Reveal>

            <Reveal><section id="radicals" className="scroll-mt-24">
              <SectionHead index="06" en="Radicals — the meaning clues" zh="偏旁——藏在字里的意思线索"
                lead={{ en: "A radical hints at what a character is about. See the clue, then tap the family of characters that share it.", zh: "偏旁提示一个字和什么有关。先看线索，再点同一偏旁的一族字。" }} />
              <div className="grid gap-4 sm:grid-cols-2">
                {radicals.map((r) => (
                  <div key={r.char} className="flex gap-4 rounded-2xl border border-teal/12 bg-white p-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-teal/8 font-serif-sc text-3xl text-teal">{r.char}</div>
                    <div className="min-w-0 flex-1">
                      <p className="font-nunito text-base font-bold text-ink">{r.name[lang]}</p>
                      <p className="text-xs text-ink-light">{r.meaning[lang]}</p>
                      <div className="mt-2.5 flex flex-wrap gap-2">{r.examples.map((w) => (<WordChip key={w.char} word={w} variant="inline" />))}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section></Reveal>

            <Reveal><section id="chars" className="scroll-mt-24">
              <SectionHead index="07" en="Your first characters" zh="你的第一批字"
                lead={{ en: "Sixteen high-frequency characters, ordered from one stroke up. Tap to hear, note the stroke count, recognise the shape.", zh: "16 个高频字，从一画排起。点一下听，记笔画数，认字形。" }} />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {firstChars.map((c) => (
                  <div key={c.char} className="flex items-center justify-between gap-2 rounded-xl border border-teal/12 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40">
                    <div className="min-w-0">
                      <span className="block font-serif-sc text-3xl leading-none text-ink">{c.char}</span>
                      <span className="mt-1.5 block text-xs font-medium text-teal">{c.pinyin}</span>
                      <span className="block text-[0.65rem] text-ink-light">{c.strokes} {lang === "en" ? "strokes" : "画"}</span>
                    </div>
                    <SpeakButton text={c.char} />
                  </div>
                ))}
              </div>
            </section></Reveal>

            <Reveal><section id="words" className="scroll-mt-24">
              <SectionHead index="08" en="Your first words — say them out loud" zh="你的第一批词——大声说出来"
                lead={{ en: "Twenty words you can use today. Hear each one, then say it back. This is the point of the whole page.", zh: "20 个今天就能用的词。听一个，跟一个。这才是整页的目的。" }} />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{firstWords.map((w) => (<WordChip key={w.char} word={w} showEn />))}</div>
            </section></Reveal>
          </div>
        </div>
      </section>

      {/* 桥接 */}
      <section className="section-teal px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-nunito text-3xl font-extrabold text-white sm:text-4xl">{t.bridgeTitle[lang]}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">{t.bridgeText[lang]}</p>
            </div>
            <Link href="/#learn-paths" className="btn-accent shrink-0 text-base">{t.bridgeCta[lang]} <IconArrowRight size={18} /></Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}