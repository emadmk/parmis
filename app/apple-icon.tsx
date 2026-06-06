import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0c10, #050608)",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #2e9bff, #38e1ff)",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#050608"
            strokeWidth={2.2}
            strokeLinecap="round"
          >
            <path d="M5 13a9 9 0 0 1 14 0" />
            <path d="M8 15.5a5 5 0 0 1 8 0" />
            <circle cx="12" cy="18" r="1.3" fill="#050608" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
