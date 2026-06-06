"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();

  return (
    <div className="flex items-center gap-2.5 select-none" dir="ltr">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <Image
          src="/brand/logo-circle-white.png"
          alt="Parmis"
          width={36}
          height={36}
          className="h-8 w-8 object-contain"
          priority
        />
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
