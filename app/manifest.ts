import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "طنین ارتباط پارمیس | Tanin Ertebat Parmis",
    short_name: "پارمیس",
    description:
      "مشاوره، طراحی، نصب و راه‌اندازی شبکه‌های مخابراتی، اسکادا و اتوماسیون.",
    start_url: "/",
    display: "standalone",
    background_color: "#050608",
    theme_color: "#050608",
    dir: "rtl",
    lang: "fa",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
