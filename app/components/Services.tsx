"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckIcon, CompassIcon, RocketIcon, WrenchIcon } from "./icons";

const icons = [CompassIcon, WrenchIcon, RocketIcon];

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        tag={t.services.tag}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {t.services.items.map((item, i) => {
          const Icon = icons[i] ?? CompassIcon;
          return (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-hover group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white/[0.03] p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[13px] font-semibold tabular-nums text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-muted">
                  {item.desc}
                </p>
                <ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-[13.5px] leading-6 text-fg/80">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
