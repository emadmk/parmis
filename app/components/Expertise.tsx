"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FiberIcon, RadioIcon, ScadaIcon, SignalIcon } from "./icons";

const icons = [SignalIcon, RadioIcon, FiberIcon, ScadaIcon];

export default function Expertise() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.expertise.tag}
          title={t.expertise.title}
          subtitle={t.expertise.subtitle}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {t.expertise.domains.map((d, i) => {
            const Icon = icons[i] ?? SignalIcon;
            return (
              <Reveal key={d.title} delay={(i % 2) * 0.1}>
                <div className="card-hover h-full rounded-3xl border border-[var(--border)] bg-white/[0.03] p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-[19px] font-semibold tracking-tight">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-7 text-muted">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2" dir="ltr">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-fg/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Software marquee */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-[var(--border)] bg-white/[0.02] p-8">
            <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              {t.expertise.softwareTitle}
            </h3>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-5" dir="ltr">
              {t.expertise.software.map((s) => (
                <span
                  key={s}
                  className="text-[15px] font-semibold tracking-tight text-fg/55 transition-colors hover:text-fg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
