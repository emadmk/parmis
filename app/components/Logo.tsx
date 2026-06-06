"use client";

import { useLanguage } from "@/lib/i18n";

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();

  return (
    <div className="flex items-center gap-2.5 select-none" dir="ltr">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 opacity-90" />
        <span className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 blur-md opacity-50" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-5 w-5 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13a9 9 0 0 1 14 0" />
          <path d="M8 15.5a5 5 0 0 1 8 0" />
          <circle cx="12" cy="18" r="1.3" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-tight text-fg">
          {lang === "fa" ? "پارمیس" : "Parmis"}
        </span>
        {!compact && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            {lang === "fa" ? "طنین ارتباط" : "Tanin Ertebat"}
          </span>
        )}
      </span>
    </div>
  );
}
