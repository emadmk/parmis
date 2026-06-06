"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-start";
  return (
    <div className={`flex flex-col ${alignment}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-bold leading-[1.1] tracking-tightest sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-[16.5px] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
