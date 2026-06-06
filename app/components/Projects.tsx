"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./icons";

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        tag={t.projects.tag}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.client} delay={(i % 4) * 0.07}>
            <article className="card-hover group flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-white/[0.03] p-6">
              <div>
                <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold leading-snug tracking-tight">
                  {p.client}
                </h3>
                <p className="mt-2.5 text-[13px] leading-6 text-muted">
                  {p.scope}
                </p>
              </div>
              <ArrowIcon className="mt-6 h-4 w-4 text-muted transition-all group-hover:text-accent rtl:rotate-180" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
