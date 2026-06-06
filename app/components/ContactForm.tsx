"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import { ArrowIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

export default function ContactForm() {
  const { lang } = useLanguage();
  const f = content[lang].contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    if (!payload.name.trim() || !payload.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-3 text-[14px] text-fg placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <h3 className="text-[15px] font-semibold text-fg/90">{f.title}</h3>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" placeholder={f.name} className={inputBase} autoComplete="name" />
        <input name="email" type="email" placeholder={f.email} className={inputBase} dir="ltr" autoComplete="email" />
      </div>
      <input name="phone" placeholder={f.phone} className={inputBase} dir="ltr" inputMode="tel" autoComplete="tel" />
      <textarea name="message" placeholder={f.message} rows={4} className={`${inputBase} resize-none`} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-black transition-all hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? f.sending : f.send}
        {status !== "sending" && (
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
        )}
      </button>

      {status === "success" && (
        <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-[13px] text-accent">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
          {f.error}
        </p>
      )}
      {status === "invalid" && (
        <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-[13px] text-amber-300">
          {f.invalid}
        </p>
      )}
    </form>
  );
}
