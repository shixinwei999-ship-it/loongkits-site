"use client";

import Image from "next/image";
import Link from "next/link";
import { agePaths } from "@/lib/agePaths";
import { useLang } from "@/lib/i18n";
import { IconArrowRight } from "@/components/icons";

interface AgePathGridProps {
  heading: string;
  description: string;
  cta: string;
}

export function AgePathGrid({ heading, description, cta }: AgePathGridProps) {
  const { lang } = useLang();

  return (
    <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
            {lang === "en" ? "A path that grows with them" : "陪孩子一起长大的学习路径"}
          </p>
          <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">{heading}</h2>
          <p className="text-lg text-ink-light leading-relaxed mt-5">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-7 gap-y-12">
          {agePaths.map((path) => (
            <article key={path.id} className="group border-t border-teal/20 pt-4">
              <Link href={`/kits?age=${path.id}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                <div className="overflow-hidden bg-teal/5 aspect-[3/2]">
                  <Image
                    src={path.image.src}
                    alt={path.alt[lang]}
                    width={path.image.width}
                    height={path.image.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                    style={{ objectPosition: path.focalPoint }}
                  />
                </div>
                <div className="grid sm:grid-cols-[8.5rem_1fr] gap-4 pt-5">
                  <p className="font-inter text-sm font-semibold text-teal">{path.label[lang]}</p>
                  <div>
                    <h3 className="font-nunito text-2xl font-extrabold text-ink">{path.title[lang]}</h3>
                    <p className="text-ink-light leading-relaxed mt-2">{path.description[lang]}</p>
                    <span className="arrow-link text-teal font-bold mt-5">
                      {cta} <IconArrowRight size={18} className="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
