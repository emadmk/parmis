import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://teparmis.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
    template: "%s | طنین ارتباط پارمیس",
  },
  description:
    "مشاوره، طراحی، نصب و راه‌اندازی شبکه‌های مخابراتی، اسکادا و اتوماسیون برای صنایع نفت، گاز، انرژی و حمل‌ونقل. | Telecom, SCADA and automation engineering for industry.",
  applicationName: "Tanin Ertebat Parmis",
  keywords: [
    "مخابرات",
    "اسکادا",
    "تله‌متری",
    "اتوماسیون",
    "فیبر نوری",
    "مایکروویو",
    "پارمیس",
    "طنین ارتباط پارمیس",
    "teparmis",
    "telecom",
    "SCADA",
    "telemetry",
    "automation",
    "Parmis",
  ],
  authors: [{ name: "Tanin Ertebat Parmis" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
    description: "زیرساخت‌های مخابراتی در مقیاس صنعتی — مشاوره، طراحی و اجرا.",
    url: siteUrl,
    siteName: "طنین ارتباط پارمیس",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
    description: "زیرساخت‌های مخابراتی در مقیاس صنعتی — مشاوره، طراحی و اجرا.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
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
