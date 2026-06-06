import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  // honeypot — must stay empty
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Spam honeypot: silently accept but do nothing.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !emailRe.test(email) || message.length < 5) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? "info@teparmis.ir";
  const from = process.env.CONTACT_FROM ?? user ?? "no-reply@teparmis.ir";

  // SMTP not configured — fail gracefully so the UI can show a fallback.
  if (!host || !user || !pass) {
    console.warn("[contact] SMTP not configured; message not sent:", {
      name,
      email,
      phone,
    });
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const text = [
      `نام: ${name}`,
      `ایمیل: ${email}`,
      phone ? `تلفن: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"وب‌سایت پارمیس" <${from}>`,
      to,
      replyTo: email,
      subject: `پیام جدید از فرم تماس — ${name}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
