import type { Lang } from "./i18n";

export type SectionContent = {
  nav: { id: string; label: string }[];
  langLabel: string;
  cta: { primary: string; secondary: string };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    subtitle: string;
    scroll: string;
  };
  stats: { value: string; label: string }[];
  about: {
    tag: string;
    title: string;
    lead: string;
    body: string[];
  };
  pillars: {
    tag: string;
    title: string;
    items: { key: string; title: string; body: string }[];
  };
  values: {
    title: string;
    list: string[];
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; points: string[] }[];
  };
  expertise: {
    tag: string;
    title: string;
    subtitle: string;
    domains: { title: string; desc: string; tags: string[] }[];
    softwareTitle: string;
    software: string[];
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    items: { client: string; scope: string; category: string }[];
  };
  clients: {
    tag: string;
    title: string;
    subtitle: string;
    industries: string[];
    logosTitle: string;
  };
  certs: {
    tag: string;
    title: string;
    subtitle: string;
    items: { title: string; issuer: string; image: string }[];
    viewLabel: string;
    closeLabel: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    faxLabel: string;
    fax: string;
    emailLabel: string;
    email: string;
    registry: { label: string; value: string }[];
    mapLabel: string;
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      invalid: string;
    };
  };
  social: { label: string; href: string; icon: "linkedin" | "instagram" | "telegram" | "mail" }[];
  footer: {
    tagline: string;
    rights: string;
  };
};

const fa: SectionContent = {
  nav: [
    { id: "about", label: "درباره ما" },
    { id: "services", label: "خدمات" },
    { id: "expertise", label: "تخصص‌ها" },
    { id: "projects", label: "پروژه‌ها" },
    { id: "clients", label: "مشتریان" },
    { id: "certs", label: "اعتبارنامه‌ها" },
    { id: "contact", label: "تماس" },
  ],
  langLabel: "EN",
  cta: { primary: "خدمات ما", secondary: "گفت‌وگو با ما" },
  hero: {
    eyebrow: "طنین ارتباط پارمیس · از سال ۱۳۸۹",
    titleTop: "زیرساخت‌های مخابراتی",
    titleAccent: "در مقیاس صنعتی.",
    subtitle:
      "مشاوره، طراحی، نصب و راه‌اندازی شبکه‌های مخابراتی، اسکادا و اتوماسیون برای صنایع نفت، گاز، انرژی و حمل‌ونقل — با بهره‌گیری از فناوری‌های روز دنیا.",
    scroll: "بیشتر بدانید",
  },
  stats: [
    { value: "۱۳۸۹", label: "سال تأسیس" },
    { value: "۱۵۰+", label: "پروژه اجراشده" },
    { value: "۱۹", label: "کارشناس متخصص" },
    { value: "۸+", label: "صنعت کلیدی" },
  ],
  about: {
    tag: "معرفی شرکت",
    title: "تجربه‌ای چندین‌ساله در مهندسی ارتباطات",
    lead:
      "شرکت طنین ارتباط پارمیس به پشتوانه تجربه چندین‌ساله مدیران خود در سال ۱۳۸۹ تأسیس شد.",
    body: [
      "ما با بهره‌گیری از کارشناسان و مشاوران مجرب، خدمات مهندسی، مشاوره، نصب و راه‌اندازی و نگهداری را در حوزه فناوری اطلاعات و ارتباطات ارائه می‌کنیم.",
      "زمینه فعالیت ما طراحی شبکه‌های مخابراتی و کامپیوتری بی‌سیم و باسیم، شبکه‌های مایکروویو و فیبر نوری، سیستم‌های اسکادا، تله‌متری و اتوماسیون، سیستم‌های حفاظتی و امنیتی، مراکز دیسپچینگ و سیگنالینگ راه‌آهن و مترو است.",
      "پارمیس مفتخر است به مشتریانی در بیشتر صنایع موجود از جمله نفت، گاز و پتروشیمی، انرژی، حمل‌ونقل ریلی، معادن، اورژانس و آتش‌نشانی، محیط‌زیست و بانک‌ها و مؤسسات مالی خدمت‌رسانی کند.",
    ],
  },
  pillars: {
    tag: "مأموریت و چشم‌انداز",
    title: "چرا پارمیس",
    items: [
      {
        key: "mission",
        title: "مأموریت",
        body:
          "ارائه خدمات مهندسی، مشاوره، نصب و راه‌اندازی و نگهداری در حوزه فناوری اطلاعات و ارتباطات، اسکادا و تله‌متری و اتوماسیون، با در نظر گرفتن فناوری‌های روز دنیا و بهره‌گیری از کارشناسان ارشد و مجرب.",
      },
      {
        key: "vision",
        title: "چشم‌انداز",
        body:
          "پیشرو بودن در ارائه خدمات مهندسی، مشاوره، نصب و راه‌اندازی و نگهداری در صنایع مخابرات، نفت، گاز و پتروشیمی، انرژی و معدن.",
      },
    ],
  },
  values: {
    title: "ارزش‌های ما",
    list: [
      "پاسخگو بودن به مشتریان و احترام به آنان",
      "ارج نهادن به تلاش سرمایه‌های انسانی",
      "تعهد به پرورش استعدادها و رعایت شایسته‌سالاری",
      "در نظر داشتن مصالح ذی‌نفعان و امانت‌داری",
      "توجه به کیفیت و فرهنگ پیشرو بودن",
      "رعایت اخلاق حرفه‌ای در کسب‌وکار",
    ],
  },
  services: {
    tag: "زمینه‌های فعالیت",
    title: "از مشاوره تا بهره‌برداری",
    subtitle:
      "یک تیم، تمام چرخه عمر پروژه‌های مخابراتی و اتوماسیون را پوشش می‌دهد.",
    items: [
      {
        title: "مهندسی و مشاوره",
        desc:
          "امکان‌سنجی، طراحی مفهومی، پایه و تفصیلی و ارائه طرح جامع مخابراتی، اسکادا و IT.",
        points: [
          "طراحی و بهینه‌سازی شبکه‌های مخابراتی",
          "اخذ پروانه بهره‌برداری از سازمان تنظیم مقررات",
          "آماده‌سازی اسناد مناقصه و انتخاب پیمانکار",
          "نظارت و مدیریت طرح پروژه",
        ],
      },
      {
        title: "نصب، راه‌اندازی و نگهداری",
        desc:
          "اجرای کامل شبکه‌های رادیویی، فیبر نوری، اسکادا و اتوماسیون در محل پروژه.",
        points: [
          "نصب و راه‌اندازی شبکه‌های رادیویی و مایکروویو",
          "اجرای شبکه‌های فیبر نوری اکتیو و پسیو",
          "نصب پایانه‌های راه‌دور (RTU) و اینترفیس",
          "تست‌های FAT و SAT و پشتیبانی دوران گارانتی",
        ],
      },
      {
        title: "بازارهای جدید",
        desc:
          "توسعه راهکارهای اسکادا و تله‌متری در سطوح فوق‌توزیع و انتقال.",
        points: [
          "طراحی مرکز کنترل و شبکه مخابراتی",
          "پایانه‌های راه‌دور و سیستم‌های اینترفیس",
          "اینترنت اشیاء و داده‌های حجیم",
          "ارتباطات یکپارچه مبتنی بر IP",
        ],
      },
    ],
  },
  expertise: {
    tag: "حوزه‌های تخصصی",
    title: "تخصص فنی عمیق",
    subtitle:
      "از باند E مایکروویو تا پروتکل‌های اسکادای صنعتی، در هر لایه از زیرساخت.",
    domains: [
      {
        title: "مخابرات و ICT",
        desc:
          "طراحی و بهینه‌سازی شبکه‌های رادیویی بی‌سیم، مایکروویو و زیرساخت ارتباطی.",
        tags: ["باند E (۷۰–۸۰ گیگاهرتز)", "باند Licensed", "باند ISM", "۲G/۳G/LTE"],
      },
      {
        title: "شبکه‌های رادیویی حرفه‌ای",
        desc:
          "شبکه‌های PMR کانونشنال و ترانک، آنالوگ و دیجیتال، به همراه درایو تست.",
        tags: ["DMR", "TETRA", "VHF / UHF", "Conventional / Trunk"],
      },
      {
        title: "فیبر نوری و انتقال",
        desc:
          "طراحی شبکه‌های فیبر نوری و لینک‌های انتقال با محاسبه بودجه لینک.",
        tags: ["Fiber Optic", "SDH / PDH", "OTN", "Microwave Link"],
      },
      {
        title: "اسکادا و تله‌متری",
        desc:
          "مرکز کنترل، پایانه‌های راه‌دور و سیستم‌های اینترفیس برای صنایع نفت و گاز و انرژی.",
        tags: ["RTU", "IEC 60870-5-104", "MODBUS", "Control Center"],
      },
    ],
    softwareTitle: "نرم‌افزارهای تخصصی طراحی",
    software: [
      "Aircom Enterprise",
      "Atoll (Forsk)",
      "Pathloss",
      "Mentum Ellipse",
      "ICS Telecom",
      "Actix",
      "CADNA",
      "CCTV CAD",
    ],
  },
  projects: {
    tag: "نمونه پروژه‌ها",
    title: "اعتماد صنایع بزرگ",
    subtitle:
      "گزیده‌ای از بیش از ۱۵۰ پروژه اجراشده در حوزه مخابرات، اسکادا و انتقال.",
    items: [
      {
        client: "پتروشیمی بوشهر",
        scope: "طراحی سیستم‌های مخابراتی شامل VOIP و زیرساخت فیبر نوری",
        category: "مخابرات",
      },
      {
        client: "نفت فلات قاره ایران",
        scope: "سیستم رادیویی DMR و VOIP در مناطق لاوان، سیری، خارک، بهرگان و کیش",
        category: "مخابرات",
      },
      {
        client: "صنایع نفت OICO",
        scope: "IP-Telephony، پیجینگ صنعتی و زیرساخت فیبر نوری فاز ۱۷/۱۸ و ۲۰/۲۱",
        category: "مخابرات",
      },
      {
        client: "خط لوله سراسری سوم گاز",
        scope: "نصب و راه‌اندازی اسکادا و تله‌متری با RTUهای Brodersen و IEC-104",
        category: "اسکادا",
      },
      {
        client: "اورژانس استان‌ها",
        scope: "طراحی شبکه رادیویی VHF در کرمان، سیستان و بلوچستان و تهران",
        category: "رادیویی",
      },
      {
        client: "فولاد زاگرس و خوزستان",
        scope: "دوربین مداربسته فرآیندی و حراستی به همراه پیجینگ یکپارچه",
        category: "حفاظتی",
      },
      {
        client: "شرکت‌های گاز استانی",
        scope: "طراحی و اخذ مجوز شبکه رادیویی در بیش از ۱۰ استان کشور",
        category: "رادیویی",
      },
      {
        client: "انتقال گاز تهران",
        scope: "طراحی و نظارت بر اجرای شبکه مایکروویو منطقه غرب کشور",
        category: "انتقال",
      },
    ],
  },
  clients: {
    tag: "صنایع تحت پوشش",
    title: "مشتریان کلیدی",
    subtitle: "خدمت‌رسانی به طیف گسترده‌ای از صنایع زیربنایی کشور.",
    industries: [
      "نفت، گاز و پتروشیمی",
      "انرژی و برق",
      "حمل‌ونقل ریلی و مترو",
      "معدن و فولاد",
      "اورژانس و آتش‌نشانی",
      "آب و فاضلاب",
      "بانک و مؤسسات مالی",
      "محیط‌زیست و منابع طبیعی",
    ],
    logosTitle: "بخشی از سازمان‌هایی که به ما اعتماد کرده‌اند",
  },
  certs: {
    tag: "گواهینامه‌ها و تقدیرنامه‌ها",
    title: "اعتبار اثبات‌شده",
    subtitle: "صلاحیت‌ها و استانداردهای رسمی که کیفیت کار ما را تضمین می‌کنند.",
    items: [
      {
        title: "پروانه خدمات مشاوره و طراحی",
        issuer: "سازمان تنظیم مقررات و ارتباطات رادیویی",
        image: "/brand/certs/cra-radio.jpg",
      },
      {
        title: "گواهی رتبه‌بندی",
        issuer: "سازمان مدیریت و برنامه‌ریزی کشور",
        image: "/brand/certs/grading.jpg",
      },
      {
        title: "ISO 9001 · 14001 · 18001",
        issuer: "سیستم مدیریت یکپارچه (IMS)",
        image: "/brand/certs/iso.jpg",
      },
      {
        title: "تقدیرنامه‌ها",
        issuer: "از کارفرمایان و صنایع همکار",
        image: "/brand/certs/appreciation.jpg",
      },
    ],
    viewLabel: "مشاهده گواهینامه",
    closeLabel: "بستن",
  },
  contact: {
    tag: "تماس با ما",
    title: "بیایید گفت‌وگو کنیم",
    subtitle: "برای مشاوره و همکاری در پروژه‌های مخابراتی و اتوماسیون با ما در ارتباط باشید.",
    addressLabel: "نشانی",
    address:
      "تهران، مجیدیه شمالی، خیابان منصوری، خیابان مهابادی‌پور، پلاک ۲۸، طبقه ۲",
    phoneLabel: "تلفن",
    phone: "۰۲۱-۲۴۸۷۱۰۰۰",
    faxLabel: "فکس",
    fax: "۰۲۱-۲۴۸۷۱۲۱۱",
    emailLabel: "ایمیل",
    email: "info@teparmis.ir",
    registry: [
      { label: "شناسه ملی", value: "۱۰۳۲۰۳۱۰۷۴۵" },
      { label: "شماره ثبت", value: "۳۸۲۷۱۰" },
      { label: "کد اقتصادی", value: "۴۱۱۳۸۱۵۸۴۸۱۳" },
    ],
    mapLabel: "موقعیت دفتر مرکزی",
    form: {
      title: "ارسال پیام",
      name: "نام و نام خانوادگی",
      email: "ایمیل",
      phone: "شماره تماس (اختیاری)",
      message: "پیام شما",
      send: "ارسال پیام",
      sending: "در حال ارسال…",
      success: "پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.",
      error: "ارسال پیام ناموفق بود. لطفاً مستقیم با ایمیل info@teparmis.ir در تماس باشید.",
      invalid: "لطفاً نام، ایمیل معتبر و متن پیام را وارد کنید.",
    },
  },
  social: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Telegram", href: "#", icon: "telegram" },
    { label: "Email", href: "mailto:info@teparmis.ir", icon: "mail" },
  ],
  footer: {
    tagline: "مهندسی ارتباطات صنعتی، فراتر از انتظار.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

const en: SectionContent = {
  nav: [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Clients" },
    { id: "certs", label: "Credentials" },
    { id: "contact", label: "Contact" },
  ],
  langLabel: "فا",
  cta: { primary: "Our Services", secondary: "Get in Touch" },
  hero: {
    eyebrow: "Tanin Ertebat Parmis · Since 2010",
    titleTop: "Telecom Infrastructure",
    titleAccent: "at industrial scale.",
    subtitle:
      "Consulting, design, installation and commissioning of telecom, SCADA and automation networks for the oil, gas, energy and transportation industries — powered by world-class technology.",
    scroll: "Discover more",
  },
  stats: [
    { value: "2010", label: "Established" },
    { value: "150+", label: "Projects delivered" },
    { value: "19", label: "Expert engineers" },
    { value: "8+", label: "Key industries" },
  ],
  about: {
    tag: "About Us",
    title: "Years of expertise in communications engineering",
    lead:
      "Tanin Ertebat Parmis was founded in 2010, backed by the long-standing experience of its directors.",
    body: [
      "Leveraging seasoned engineers and consultants, we deliver engineering, consulting, installation, commissioning and maintenance services across information and communication technology.",
      "Our work spans the design of wired and wireless telecom and computer networks, microwave and fiber-optic networks, SCADA, telemetry and automation systems, security and protection systems, dispatching centers, and railway and metro signaling.",
      "Parmis proudly serves clients across most major industries, including oil, gas and petrochemicals, energy, rail transport, mining, emergency and firefighting services, the environment, and banks and financial institutions.",
    ],
  },
  pillars: {
    tag: "Mission & Vision",
    title: "Why Parmis",
    items: [
      {
        key: "mission",
        title: "Mission",
        body:
          "To provide engineering, consulting, installation, commissioning and maintenance services in ICT, SCADA, telemetry and automation — embracing the latest technologies and the expertise of senior, experienced engineers.",
      },
      {
        key: "vision",
        title: "Vision",
        body:
          "To be a leader in engineering, consulting, installation, commissioning and maintenance services across the telecom, oil, gas, petrochemical, energy and mining industries.",
      },
    ],
  },
  values: {
    title: "Our Values",
    list: [
      "Responsiveness to and respect for our clients",
      "Valuing the efforts of our human capital",
      "Commitment to nurturing talent and meritocracy",
      "Safeguarding stakeholder interests with integrity",
      "Focus on quality and a culture of leadership",
      "Upholding professional ethics in business",
    ],
  },
  services: {
    tag: "What We Do",
    title: "From consulting to operation",
    subtitle:
      "One team covering the full lifecycle of telecom and automation projects.",
    items: [
      {
        title: "Engineering & Consulting",
        desc:
          "Feasibility, conceptual, basic and detailed design, plus master plans for telecom, SCADA and IT.",
        points: [
          "Telecom network design and optimization",
          "Operating licenses from the regulatory authority",
          "Tender documentation and contractor selection",
          "Project supervision and program management",
        ],
      },
      {
        title: "Installation & Maintenance",
        desc:
          "Full on-site delivery of radio, fiber-optic, SCADA and automation networks.",
        points: [
          "Radio and microwave network commissioning",
          "Active and passive fiber-optic deployment",
          "RTU and interface system installation",
          "FAT/SAT testing and warranty support",
        ],
      },
      {
        title: "Emerging Markets",
        desc:
          "Developing SCADA and telemetry solutions at sub-transmission and transmission levels.",
        points: [
          "Control center and telecom network design",
          "Remote terminal units and interface systems",
          "Internet of Things and big data",
          "IP-based unified communications",
        ],
      },
    ],
  },
  expertise: {
    tag: "Capabilities",
    title: "Deep technical expertise",
    subtitle:
      "From E-band microwave to industrial SCADA protocols — at every layer of the infrastructure.",
    domains: [
      {
        title: "Telecom & ICT",
        desc:
          "Design and optimization of wireless, microwave and communication infrastructure networks.",
        tags: ["E-band (70–80 GHz)", "Licensed band", "ISM band", "2G/3G/LTE"],
      },
      {
        title: "Professional Mobile Radio",
        desc:
          "Conventional and trunked PMR networks, analog and digital, with drive testing.",
        tags: ["DMR", "TETRA", "VHF / UHF", "Conventional / Trunk"],
      },
      {
        title: "Fiber & Transmission",
        desc:
          "Fiber-optic network and transmission link design with full link-budget analysis.",
        tags: ["Fiber Optic", "SDH / PDH", "OTN", "Microwave Link"],
      },
      {
        title: "SCADA & Telemetry",
        desc:
          "Control centers, remote terminal units and interface systems for oil, gas and energy.",
        tags: ["RTU", "IEC 60870-5-104", "MODBUS", "Control Center"],
      },
    ],
    softwareTitle: "Specialized design software",
    software: [
      "Aircom Enterprise",
      "Atoll (Forsk)",
      "Pathloss",
      "Mentum Ellipse",
      "ICS Telecom",
      "Actix",
      "CADNA",
      "CCTV CAD",
    ],
  },
  projects: {
    tag: "Selected Work",
    title: "Trusted by major industries",
    subtitle:
      "A selection from more than 150 delivered projects in telecom, SCADA and transmission.",
    items: [
      {
        client: "Bushehr Petrochemical",
        scope: "Telecom systems design including VOIP and fiber-optic infrastructure",
        category: "Telecom",
      },
      {
        client: "Iran Offshore Oil Co.",
        scope: "DMR radio and VOIP systems across Lavan, Siri, Khark, Bahregan and Kish",
        category: "Telecom",
      },
      {
        client: "OICO Oil Industries",
        scope: "IP-Telephony, industrial paging and fiber backbone for Phases 17/18 & 20/21",
        category: "Telecom",
      },
      {
        client: "3rd National Gas Pipeline",
        scope: "SCADA & telemetry commissioning with Brodersen RTUs over IEC-104",
        category: "SCADA",
      },
      {
        client: "Provincial Emergency Services",
        scope: "VHF radio network design in Kerman, Sistan-Baluchestan and Tehran",
        category: "Radio",
      },
      {
        client: "Zagros & Khuzestan Steel",
        scope: "Process and security CCTV combined with unified paging systems",
        category: "Security",
      },
      {
        client: "Provincial Gas Companies",
        scope: "Radio network design and licensing across 10+ provinces",
        category: "Radio",
      },
      {
        client: "Tehran Gas Transmission",
        scope: "Microwave network design and construction supervision, western region",
        category: "Transmission",
      },
    ],
  },
  clients: {
    tag: "Industries Served",
    title: "Key clients",
    subtitle: "Serving a broad range of the country's foundational industries.",
    industries: [
      "Oil, Gas & Petrochemicals",
      "Energy & Power",
      "Rail Transport & Metro",
      "Mining & Steel",
      "Emergency & Firefighting",
      "Water & Wastewater",
      "Banking & Finance",
      "Environment & Natural Resources",
    ],
    logosTitle: "Some of the organizations that trust us",
  },
  certs: {
    tag: "Certifications & Awards",
    title: "Proven credentials",
    subtitle: "Official qualifications and standards that guarantee the quality of our work.",
    items: [
      {
        title: "Consulting & Design License",
        issuer: "Communications Regulatory Authority (CRA)",
        image: "/brand/certs/cra-radio.jpg",
      },
      {
        title: "Grading Certificate",
        issuer: "Management & Planning Organization",
        image: "/brand/certs/grading.jpg",
      },
      {
        title: "ISO 9001 · 14001 · 18001",
        issuer: "Integrated Management System (IMS)",
        image: "/brand/certs/iso.jpg",
      },
      {
        title: "Letters of Appreciation",
        issuer: "From clients and partner industries",
        image: "/brand/certs/appreciation.jpg",
      },
    ],
    viewLabel: "View certificate",
    closeLabel: "Close",
  },
  contact: {
    tag: "Contact",
    title: "Let's talk",
    subtitle: "Reach out to collaborate on your telecom and automation projects.",
    addressLabel: "Address",
    address:
      "No. 28, Floor 2, Mahabadipour St., Mansouri St., North Majidieh, Tehran, Iran",
    phoneLabel: "Phone",
    phone: "+98 21 2487 1000",
    faxLabel: "Fax",
    fax: "+98 21 2487 1211",
    emailLabel: "Email",
    email: "info@teparmis.ir",
    registry: [
      { label: "National ID", value: "10320310745" },
      { label: "Registration No.", value: "382710" },
      { label: "Economic Code", value: "411381584813" },
    ],
    mapLabel: "Head office location",
    form: {
      title: "Send a message",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Your message",
      send: "Send message",
      sending: "Sending…",
      success: "Your message has been sent. We'll get back to you shortly.",
      error: "Could not send your message. Please email info@teparmis.ir directly.",
      invalid: "Please enter your name, a valid email and a message.",
    },
  },
  social: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Telegram", href: "#", icon: "telegram" },
    { label: "Email", href: "mailto:info@teparmis.ir", icon: "mail" },
  ],
  footer: {
    tagline: "Industrial communications engineering, beyond expectation.",
    rights: "All rights reserved.",
  },
};

export const content: Record<Lang, SectionContent> = { fa, en };
