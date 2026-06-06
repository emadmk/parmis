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
      { src: "/brand/icon-256.png", sizes: "256x256", type: "image/png" },
      { src: "/brand/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
