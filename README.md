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
