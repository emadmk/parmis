"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ShieldIcon } from "./icons";

export default function Clients() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-white/[0.015] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.clients.tag}
          title={t.clients.title}
          subtitle={t.clients.subtitle}
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.clients.industries.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 0.06}>
              <div className="card-hover flex h-full items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.03] px-5 py-6">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-[14.5px] font-medium leading-6 text-fg/85">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <div id="certs" className="mt-28 scroll-mt-24">
          <SectionHeading
            tag={t.certs.tag}
            title={t.certs.title}
            subtitle={t.certs.subtitle}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.certs.items.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.08}>
                <div className="card-hover flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white/[0.03] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ShieldIcon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    {c.issuer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
