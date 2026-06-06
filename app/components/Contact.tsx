"use client";

import { useLanguage } from "@/lib/i18n";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  PrinterIcon,
  TelegramIcon,
} from "./icons";

const socialIcon = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  mail: MailIcon,
} as const;

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <>
      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(80% 120% at 50% -20%, rgba(46,155,255,0.22), transparent 60%)",
              }}
            />
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {t.contact.tag}
                </span>
                <h2 className="mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-tightest sm:text-5xl">
                  {t.contact.title}
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-7 text-muted sm:text-[16px]">
                  {t.contact.subtitle}
                </p>

                <div className="mt-8 space-y-3">
                  <ContactRow
                    icon={<PinIcon className="h-5 w-5" />}
                    label={t.contact.addressLabel}
                    value={t.contact.address}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a href={`mailto:${t.contact.email}`} className="block">
                      <ContactRow
                        icon={<MailIcon className="h-5 w-5" />}
                        label={t.contact.emailLabel}
                        value={t.contact.email}
                        interactive
                      />
                    </a>
                    <a href="tel:+982124871000" className="block">
                      <ContactRow
                        icon={<PhoneIcon className="h-5 w-5" />}
                        label={t.contact.phoneLabel}
                        value={t.contact.phone}
                        interactive
                      />
                    </a>
                  </div>
                  <ContactRow
                    icon={<PrinterIcon className="h-5 w-5" />}
                    label={t.contact.faxLabel}
                    value={t.contact.fax}
                  />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {t.contact.registry.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-3"
                    >
                      <div className="text-[11px] text-muted">{r.label}</div>
                      <div className="mt-1 text-[13px] font-semibold tabular-nums" dir="ltr">
                        {r.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-white/[0.02] p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="mt-10">
              <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-muted">
                <PinIcon className="h-4 w-4 text-accent" />
                {t.contact.mapLabel}
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                <iframe
                  title="map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=51.470%2C35.745%2C51.510%2C35.765&layer=mapnik&marker=35.755%2C51.490"
                  className="h-[320px] w-full [filter:invert(0.9)_hue-rotate(180deg)_grayscale(0.2)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo />
            <p className="text-[13px] text-muted">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-2.5">
              {t.social.map((s) => {
                const Icon = socialIcon[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
            <p className="text-[12.5px] text-muted">
              © {new Date().getFullYear()}{" "}
              {lang === "fa" ? "طنین ارتباط پارمیس" : "Tanin Ertebat Parmis"} —{" "}
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  interactive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-white/[0.03] p-5 transition-colors ${
        interactive ? "hover:border-accent" : ""
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </span>
      <div>
        <div className="text-[12px] uppercase tracking-wider text-muted">
          {label}
        </div>
        <div className="mt-1 text-[14.5px] leading-7 text-fg/90" dir="auto">
          {value}
        </div>
      </div>
    </div>
  );
}
