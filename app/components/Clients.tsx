"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CloseIcon, ShieldIcon } from "./icons";

const CLIENT_COUNT = 25;
const clientLogos = Array.from(
  { length: CLIENT_COUNT },
  (_, i) => `/brand/clients/client-${String(i).padStart(2, "0")}.png`
);

export default function Clients() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [active, setActive] = useState<number | null>(null);

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

        {/* Client logo wall */}
        <Reveal delay={0.05}>
          <p className="mt-16 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
            {t.clients.logosTitle}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {clientLogos.map((src, i) => (
              <div
                key={src}
                className="group flex h-20 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-3 transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={src}
                  alt={`client ${i + 1}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>

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
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="card-hover group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.03] text-start"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-white">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/70 to-transparent py-2 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {t.certs.viewLabel}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <ShieldIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-semibold leading-snug">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-5 text-muted">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label={t.certs.closeLabel}
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative h-[80vh] w-full">
                <Image
                  src={t.certs.items[active].image}
                  alt={t.certs.items[active].title}
                  fill
                  sizes="100vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="border-t border-black/10 bg-white px-5 py-3 text-center">
                <p className="text-[14px] font-semibold text-black">
                  {t.certs.items[active].title}
                </p>
                <p className="text-[12px] text-black/55">
                  {t.certs.items[active].issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
