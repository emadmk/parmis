# طنین ارتباط پارمیس — وب‌سایت معرفی شرکت

وب‌سایت تک‌صفحه‌ای و دوزبانه (فارسی/انگلیسی) برای معرفی شرکت **طنین ارتباط پارمیس**،
با طراحی مدرن و مینیمال در سبک اپل و تم تیره با اکسنت آبی مخابراتی.

A bilingual (Persian/English) single-page company website for **Tanin Ertebat Parmis**,
built with an Apple-inspired, minimal dark design.

## تکنولوژی‌ها / Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** (انیمیشن‌های اسکرول)
- فونت‌های **Vazirmatn** (فارسی) و **Inter** (انگلیسی)

## اجرا / Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # ساخت نسخه production
npm run start    # اجرای نسخه production
```

> **نکته:** اگر متغیر محیطی `NODE_ENV` روی `development` تنظیم شده باشد،
> برای ساخت نسخه‌ی production از دستور `NODE_ENV=production npm run build` استفاده کنید.

## امکانات / Features

- 🌐 دوزبانه فارسی/انگلیسی با تغییر خودکار جهت RTL/LTR
- 🎨 طراحی تیره مینیمال سبک اپل با اکسنت آبی مخابراتی و انیمیشن اسکرول
- 🏷️ لوگوی واقعی شرکت (مونوگرام T.E.P) استخراج‌شده از پروفایل
- 🤝 دیوار لوگوی ۲۵ سازمان مشتری (واقعی، از پروفایل)
- 📜 گالری گواهینامه‌های واقعی با لایت‌باکس قابل بزرگ‌نمایی
- ✉️ فرم تماس فعال با ارسال ایمیل (API + nodemailer + ضد اسپم honeypot)
- 🗺️ نقشه موقعیت دفتر (OpenStreetMap، بدون نیاز به کلید)
- 🔗 لینک شبکه‌های اجتماعی در فوتر
- 🔍 SEO کامل: canonical، OpenGraph + تصویر، sitemap، robots، JSON-LD، PWA manifest

## فرم تماس / Contact Form

فرم تماس پیام‌ها را از طریق `app/api/contact/route.ts` با **nodemailer** ارسال می‌کند.
برای فعال‌سازی، متغیرهای محیطی SMTP را تنظیم کنید (نمونه در `.env.example`):

```bash
cp .env.example .env.local   # سپس مقادیر SMTP را پر کنید
```

اگر SMTP تنظیم نشده باشد، فرم به‌صورت ایمن پیام «تماس مستقیم با info@teparmis.ir»
را نمایش می‌دهد. (توجه: فرم تماس به سرور Node نیاز دارد — روش استقرار ۱.)

> لینک‌های شبکه‌های اجتماعی در آرایه‌ی `social` در `lib/content.ts` تعریف می‌شوند.
> موردهایی که آدرسشان `#` است (پرنشده) در فوتر نمایش داده نمی‌شوند؛ به‌محض جایگزینی
> با آدرس واقعی، آیکونشان ظاهر می‌شود.

## ساختار / Structure

```
app/
  layout.tsx          # ریشه + فونت‌ها + Provider زبان
  page.tsx            # چینش بخش‌ها
  globals.css         # تم، رنگ‌ها و یوتیلیتی‌ها
  components/         # Nav, Hero, About, Services, Expertise, Projects, Clients, Contact ...
lib/
  i18n.tsx            # مدیریت زبان (fa/en) و جهت RTL/LTR
  content.ts          # کل محتوای دوزبانه‌ی سایت
```

## ویرایش محتوا / Editing Content

تمام متن‌های سایت (هر دو زبان) در فایل `lib/content.ts` متمرکز شده‌اند.
برای تغییر اطلاعات شرکت، پروژه‌ها، اطلاعات تماس و... کافیست همین فایل را ویرایش کنید.

## سفارشی‌سازی / Customization

- **رنگ برند:** متغیرهای `--accent` و `--accent-2` در `app/globals.css`
- **لوگو:** کامپوننت `app/components/Logo.tsx` (در حال حاضر لوگوتایپ متنی است)
- **اطلاعات تماس / دامنه:** ایمیل و آدرس در `lib/content.ts` و دامنه‌ی `teparmis.ir`
  در `app/layout.tsx`، `app/robots.ts`، `app/sitemap.ts` و `app/page.tsx`

## استقرار / Deployment

سایت پشت **ابرآروان (ArvanCloud)** قرار می‌گیرد؛ SSL در لبه (edge) توسط ابرآروان
ترمینیت می‌شود و origin روی **HTTP** سرویس می‌دهد. آدرس‌های canonical و OpenGraph
روی `https://teparmis.ir` تنظیم شده‌اند تا پیش‌نمایش‌ها و سئو درست باشند.

دو روش برای origin:

**۱) اجرای سرور Node (پیشنهادی):**

```bash
NODE_ENV=production npm run build
NODE_ENV=production npm run start   # روی پورت 3000 و HTTP
```

سپس در پنل ابرآروان، رکورد دامنه را به IP/پورت این سرور اشاره دهید و گزینه‌ی
HTTPS/SSL لبه را فعال کنید (origin روی HTTP باقی می‌ماند).

**۲) خروجی کاملاً استاتیک (سرو با nginx روی لبه):**

چون تمام صفحات استاتیک‌اند، می‌توان با افزودن `output: "export"` به `next.config.ts`
یک پوشه‌ی `out/` تولید کرد و آن را مستقیماً با nginx/Apache سرو نمود.

> توجه: این محیط `NODE_ENV` را روی `development` تنظیم کرده است؛ به همین دلیل در
> دستورهای بالا `NODE_ENV=production` به‌صورت صریح آمده. روی سرور واقعی نیازی به آن نیست.
