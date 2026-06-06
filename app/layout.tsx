import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
  description:
    "مشاوره، طراحی، نصب و راه‌اندازی شبکه‌های مخابراتی، اسکادا و اتوماسیون برای صنایع نفت، گاز، انرژی و حمل‌ونقل. | Telecom, SCADA and automation engineering for industry.",
  keywords: [
    "مخابرات",
    "اسکادا",
    "تله‌متری",
    "اتوماسیون",
    "فیبر نوری",
    "مایکروویو",
    "پارمیس",
    "telecom",
    "SCADA",
    "automation",
    "Parmis",
  ],
  openGraph: {
    title: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
    description: "زیرساخت‌های مخابراتی در مقیاس صنعتی — مشاوره، طراحی و اجرا.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${inter.variable} ${vazir.variable}`}>
      <body>
        <div className="ambient" aria-hidden />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
