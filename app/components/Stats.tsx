"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";

export default function Stats() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div className="glass overflow-hidden rounded-3xl">
        <div className="grid grid-cols-2 divide-x divide-[var(--border)] rtl:divide-x-reverse lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center gap-2 px-4 py-9 text-center sm:py-12"
            >
              <span className="gradient-text text-4xl font-bold tracking-tightest sm:text-5xl">
                {s.value}
              </span>
              <span className="text-[13px] text-muted sm:text-[14px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
