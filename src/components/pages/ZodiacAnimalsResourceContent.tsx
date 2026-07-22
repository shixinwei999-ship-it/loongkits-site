"use client";

import Image from "next/image";
import Link from "next/link";
import { ResourceDownloads } from "@/components/ResourceDownloads";
import { Reveal } from "@/components/Reveal";
import { IconBook, IconCheck, IconClock, IconPrint } from "@/components/icons";
import { zodiacResourcePage } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { zodiacAnimalsResource } from "@/lib/resources";

const detailIcons = [IconBook, IconPrint, IconClock];

export function ZodiacAnimalsResourceContent() {
  const { lang } = useLang();
  const t = zodiacResourcePage[lang];

  return (
    <div className="bg-paper pt-12 pb-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <Link href="/free" className="text-sm font-semibold text-teal hover:underline">
              {t.back}
            </Link>
            <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mt-7 mb-5">
              {t.eyebrow}
            </p>
            <h1 className="display-zh text-ink max-w-xl">{t.title}</h1>
            <p className="text-lg sm:text-xl text-ink-light leading-relaxed mt-6 max-w-xl">{t.subtitle}</p>
            <dl className="grid grid-cols-3 border-y border-teal/15 mt-9 mb-8 max-w-xl">
              {t.facts.map((fact) => (
                <div key={fact.label} className="py-4 pr-3 border-r last:border-r-0 border-teal/10">
                  <dt className="text-xs text-ink-light">{fact.label}</dt>
                  <dd className="font-nunito font-extrabold text-xl text-teal mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <ResourceDownloads labels={t.downloads} />
            <p className="text-sm text-ink-light mt-4">{t.downloadNote}</p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <figure className="mx-auto max-w-[27rem] border border-teal/10 bg-white p-3 shadow-[0_20px_50px_-36px_rgb(31_74_56/0.45)]">
              <Image
                src={zodiacAnimalsResource.previews.cover}
                alt={t.coverAlt}
                width={745}
                height={1053}
                priority
                className="w-full h-auto"
              />
              <figcaption className="px-2 pt-3 text-xs text-ink-light">{t.previewCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section-warm mt-20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">{t.inside.eyebrow}</p>
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl">{t.inside.title}</h2>
            <p className="text-ink-light leading-relaxed mt-5 max-w-md">{t.inside.description}</p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
            {t.inside.items.map((item, index) => {
              const Icon = detailIcons[index];
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="border-t-2 border-teal pt-5 h-full">
                    <Icon size={27} className="text-teal mb-4" />
                    <h3 className="font-nunito font-extrabold text-lg text-ink">{item.title}</h3>
                    <p className="text-sm text-ink-light leading-relaxed mt-2">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <figure className="max-w-[24rem] border border-teal/10 bg-white p-3 mx-auto lg:mx-0">
              <Image
                src={zodiacAnimalsResource.previews.vocabulary}
                alt={t.vocabularyAlt}
                width={745}
                height={1053}
                className="w-full h-auto"
              />
            </figure>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 order-1 lg:order-2">
            <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">{t.guide.eyebrow}</p>
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl">{t.guide.title}</h2>
            <p className="text-ink-light leading-relaxed mt-5 max-w-xl">{t.guide.description}</p>
            <ol className="mt-8 border-t border-teal/15">
              {t.guide.steps.map((step, index) => (
                <li key={step} className="flex gap-5 py-5 border-b border-teal/10">
                  <span className="font-nunito font-extrabold text-teal text-lg">0{index + 1}</span>
                  <span className="text-ink leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-teal py-16 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div>
              <h2 className="font-nunito font-extrabold text-3xl text-white">{t.final.title}</h2>
              <p className="text-white/70 mt-2 max-w-xl">{t.final.description}</p>
            </div>
            <ResourceDownloads labels={t.downloads} compact />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
