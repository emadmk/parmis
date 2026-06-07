# راهنمای استقرار روی سرور (teparmis.ir پشت ابرآروان)

این سند، استقرار سایت را روی سروری که **نرم‌افزارهای دیگری هم رویش در حال اجراست**
توضیح می‌دهد. معماری:

```
کاربر ──HTTPS──▶ ابرآروان (SSL لبه) ──HTTP/80──▶ nginx ──▶ 127.0.0.1:3000 (Next.js / PM2)
```

nginx بر اساس نام دامنه (Host) مسیردهی می‌کند، پس این سایت با بقیه‌ی برنامه‌های شما
تداخل ندارد. اپ فقط روی `127.0.0.1` گوش می‌دهد و از بیرون مستقیم در دسترس نیست.

---

## پیش‌نیازها

| نیازمندی | حداقل | توضیح |
|---|---|---|
| Node.js | **۲۰.۹+** (پیشنهاد: ۲۲) | برای Next.js 16 |
| npm | ۱۰+ | همراه Node |
| PM2 | آخرین | مدیریت پروسه و اجرای دائم |
| nginx | نصب‌شده | ریورس‌پروکسی (احتمالاً از قبل دارید) |
| git | — | برای clone و به‌روزرسانی |
| یک پورت آزاد TCP | مثلاً ۳۰۰۰ | پورت داخلی اپ |

---

## فاز ۱ — تشخیص محیط (اول این‌ها را اجرا کن)

```bash
cat /etc/os-release | head -2
node -v 2>/dev/null || echo "Node نصب نیست"
npm -v 2>/dev/null
pm2 -v 2>/dev/null || echo "PM2 نصب نیست"
nginx -v 2>&1 || echo "nginx نصب نیست"
git --version 2>/dev/null || echo "git نصب نیست"
# پورت‌های اشغال‌شده تا یک پورت آزاد انتخاب کنیم:
sudo ss -tlnp | grep -E ':(80|443|3000|3100)\b' || echo "پورت‌های 3000/3100 آزادند"
```

اگر Node نبود یا نسخه‌اش زیر ۲۰.۹ بود (Debian/Ubuntu):

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

PM2 (اگر نبود):

```bash
sudo npm install -g pm2
```

---

## فاز ۲ — استقرار

```bash
# 1) دریافت کد
sudo mkdir -p /var/www/teparmis
sudo chown -R $USER:$USER /var/www/teparmis
git clone https://github.com/emadmk/parmis.git /var/www/teparmis
cd /var/www/teparmis
git checkout claude/charming-allen-QabPW    # یا main بعد از merge

# 2) (اختیاری) تنظیم SMTP فرم تماس
cp .env.example .env.local
nano .env.local        # مقادیر SMTP_* را پر کن (بدون آن، فرم پیام «تماس مستقیم» می‌دهد)

# 3) نصب وابستگی‌ها و ساخت
npm ci
npm run build

# 4) اجرا با PM2 (پورت پیش‌فرض 3000؛ اگر اشغال است در ecosystem.config.cjs عوضش کن)
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup            # دستوری که چاپ می‌کند را اجرا کن تا بعد از ریبوت بالا بیاید

# تست محلی:
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000
```

### nginx

```bash
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/teparmis.ir
sudo ln -s /etc/nginx/sites-available/teparmis.ir /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

> RHEL/AlmaLinux/CentOS: به‌جای دو دستور بالا، فایل را در
> `/etc/nginx/conf.d/teparmis.ir.conf` کپی کن و `sudo nginx -t && sudo systemctl reload nginx`.

اگر فایروال داری، پورت ۸۰ را باز کن:

```bash
sudo ufw allow 80/tcp        # یا در firewalld:  sudo firewall-cmd --add-service=http --permanent && sudo firewall-cmd --reload
```

### ابرآروان (پنل، بدون دستور)

1. در **DNS**: رکورد `A` برای `teparmis.ir` (و `www`) به **IP عمومی سرور** اشاره کند و ابر (پروکسی) روشن باشد.
2. در بخش **HTTPS/SSL**: گواهی فعال شود و **مبدأ (origin) روی HTTP/پورت ۸۰** بماند.
3. (اختیاری) **Always HTTPS** را روشن کن تا کاربر همیشه به https هدایت شود.

---

## به‌روزرسانی (هر بار که کد تغییر کرد)

```bash
cd /var/www/teparmis
git pull
npm ci
npm run build
pm2 reload teparmis
```

---

## دستورهای مفید PM2

```bash
pm2 status              # وضعیت
pm2 logs teparmis       # لاگ زنده
pm2 restart teparmis    # ری‌استارت
pm2 stop teparmis       # توقف
```
