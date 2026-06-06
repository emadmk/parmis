import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tanin Ertebat Parmis — Telecom & SCADA Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/logo-circle.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 50% -10%, #123a63 0%, #050608 60%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2e9bff, #38e1ff)",
              fontSize: 34,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={40} height={40} alt="Parmis" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>Parmis</span>
            <span
              style={{
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#9aa3b2",
              }}
            >
              Tanin Ertebat
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Telecom Infrastructure
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              background: "linear-gradient(120deg, #2e9bff, #38e1ff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            at industrial scale.
          </div>
          <div style={{ fontSize: 28, color: "#9aa3b2", marginTop: 10 }}>
            Consulting · Design · SCADA · Automation — teparmis.ir
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
