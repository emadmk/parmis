"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Logo from "./Logo";

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass-strong border-b" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Parmis">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {t.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-[13px] font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              aria-label="Toggle language"
            >
              {t.langLabel}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-90 sm:inline-flex"
            >
              {t.cta.secondary}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-fg lg:hidden"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`h-[1.5px] w-4 bg-current transition-transform ${
                    open ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-4 bg-current transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-4 bg-current transition-transform ${
                    open ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed inset-x-0 top-16 z-40 border-b lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-5 py-4">
              {t.nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[var(--border)] py-3.5 text-[15px] text-fg/90 last:border-0"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
