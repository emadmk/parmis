"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import { CheckIcon, CompassIcon, RocketIcon } from "./icons";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.about.tag}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-balance text-[1.85rem] font-bold leading-[1.12] tracking-tightest sm:text-4xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-[17px] font-medium leading-8 text-fg/90">
              {t.about.lead}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5">
            {t.about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-[15px] leading-8 text-muted sm:text-[16px]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.pillars.items.map((item, i) => (
              <Reveal key={item.key} delay={0.2 + i * 0.08}>
                <div className="card-hover h-full rounded-2xl border border-[var(--border)] bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      {item.key === "mission" ? (
                        <RocketIcon className="h-5 w-5" />
                      ) : (
                        <CompassIcon className="h-5 w-5" />
                      )}
                    </span>
                    <h3 className="text-[17px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[14px] leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <Reveal>
          <div className="hairline" />
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-12 text-center text-[14px] font-semibold uppercase tracking-[0.2em] text-muted">
            {t.values.title}
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.values.list.map((v, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white/[0.02] px-4 py-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[14px] leading-6 text-fg/85">{v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
