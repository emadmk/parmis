"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import { ArrowIcon } from "./icons";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 35%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 35%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 text-center sm:px-8">
        <div
          className="anim-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-1.5 text-[12.5px] font-medium text-muted backdrop-blur"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {t.hero.eyebrow}
        </div>

        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-[2.6rem] font-bold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[5rem]">
          <span className="anim-fade-up block" style={{ animationDelay: "80ms" }}>
            {t.hero.titleTop}
          </span>
          <span
            className="anim-fade-up gradient-text block"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.titleAccent}
          </span>
        </h1>

        <p
          className="anim-fade-up mx-auto mt-7 max-w-2xl text-pretty text-[15px] leading-7 text-muted sm:text-[17px] sm:leading-8"
          style={{ animationDelay: "260ms" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="anim-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            {t.cta.primary}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-6 py-3 text-[14px] font-semibold text-fg transition-colors hover:border-accent"
          >
            {t.cta.secondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[11px] uppercase tracking-[0.2em]">
            {t.hero.scroll}
          </span>
          <span className="flex h-8 w-5 justify-center rounded-full border border-[var(--border)] pt-1.5">
            <span className="anim-scroll-dot h-1.5 w-1 rounded-full bg-accent" />
          </span>
        </div>
      </div>
    </section>
  );
}
