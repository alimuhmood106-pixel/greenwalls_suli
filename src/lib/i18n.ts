export type Lang = "ckb" | "ar" | "en";
export const langs: { code: Lang; label: string; dir: "rtl" | "ltr" }[] = [
  { code: "ckb", label: "کوردی", dir: "rtl" },
  { code: "ar", label: "عربي", dir: "rtl" },
  { code: "en", label: "EN", dir: "ltr" },
];

type Dict = {
  nav: { about: string; services: string; work: string; process: string; contact: string };
  hero: { kicker: string; title: [string, string, string]; sub: string; cta: string; secondary: string; alt: string };
  about: { label: string; title: string; body: string[]; alt: string; visit: string };
  services: { label: string; title: string; items: { t: string; d: string }[] };
  gallery: { label: string; title: string; flowers: string; insta: string; alts: Record<string, string> };
  steps: { label: string; title: string; items: { t: string; d: string }[] };
  contactS: {
    label: string; title: string; whatsapp: string; call: string; hours: string;
    days: string; friday: string; closed: string; time: string; open: string; closedNow: string;
    address: string; insta: string; directions: string;
  };
  footer: { line: string; rights: string };
};

export const dict: Record<Lang, Dict> = {
  ckb: {
    nav: { about: "دەربارە", services: "خزمەتگوزاری", work: "کارەکانمان", process: "چۆن کار دەکەین", contact: "پەیوەندی" },
    hero: {
      kicker: "سلێمانی",
      title: ["هەر دیوارێک", "دەتوانێت", "سەوز بێت."],
      sub: "سەوزایی دەستکرد. بێ ئاودان.",
      cta: "نرخ لە واتسئاپ وەربگرە",
      secondary: "کارەکانمان ببینە",
      alt: "دیواری سەوزی دەستکرد لە بالکۆنێکی سلێمانی",
    },
    about: {
      label: "دەربارەی ئێمە",
      title: "دوکانێکی بچووک لە سلێمانی.",
      body: [
        "خۆمان دیزاین دەکەین و خۆمان دایدەنێین.",
      ],
      alt: "پێشەوەی دوکانی گرین وۆڵز لەگەڵ دوو داری دەستکردی بەرز",
      visit: "دوکانەکەمان",
    },
    services: {
      label: "چی دەکەین",
      title: "لە دیوارێکەوە تا باخچەیەکی تەواو.",
      items: [
        { t: "دیواری سەوز", d: "ناوەوە و دەرەوە." },
        { t: "دار و ڕووەک", d: "ڕەنگیان ناچێت." },
        { t: "باخچەی ناوماڵ", d: "ژێر پەیژە و گۆشەکان." },
        { t: "گوڵ و ڕازاندنەوەی بۆنە", d: "بۆ دوکان و بۆنەکان." },
        { t: "دیزاینی تایبەت", d: "بە پێی شوێنەکەت." },
      ],
    },
    gallery: {
      label: "کارەکانمان",
      title: "چەند شوێنێک کە سەوزمان کردن.",
      flowers: "گوڵ و بۆنە",
      insta: "زیاتر لە ئینستاگرام",
      alts: {
        stairWide: "باخچەی ناوماڵ لە ژێر پەیژە",
        stairBonsai: "داری بۆنسای و بەردی ڕەش لە ژێر پەیژە",
        corridor: "گوڵدانی درێژ بە پاڵم و سەرخس لە ڕاڕەو",
        orchid: "گوڵی ئۆرکیدی سپی لە گوڵدانێکی بەرز",
        pinkWall: "دیواری گوڵی پەمەیی لە سالۆنێک",
        pinkTree: "داری چرۆی پەمەیی",
        hero: "دیواری سەوز لە بالکۆن",
        storefront: "دوکانەکەمان",
      },
    },
    steps: {
      label: "چۆن کار دەکەین",
      title: "چوار هەنگاو، بێ سەرئێشە.",
      items: [
        { t: "نامەمان بۆ بنێرە", d: "لە واتسئاپ." },
        { t: "دێین و دەپێوین", d: "دێینە لات." },
        { t: "دیزاینی دەکەین", d: "پێکەوە." },
        { t: "دایدەنێین", d: "خێرا و پاک." },
      ],
    },
    contactS: {
      label: "پەیوەندی",
      title: "قسەمان لەگەڵ بکە.",
      whatsapp: "واتسئاپ", call: "پەیوەندی بکە", hours: "کاتەکانی کار",
      days: "شەممە تا پێنجشەممە", friday: "هەینی", closed: "داخراوە", time: "١:٠٠ی دوانیوەڕۆ – ١٠:٠٠ی شەو",
      open: "ئێستا کراوەیە", closedNow: "ئێستا داخراوە",
      address: "سلێمانی، پارێزگای سلێمانی، 46001", insta: "ئینستاگرام", directions: "ڕێگا لە نەخشە",
    },
    footer: { line: "سەوزایی بۆ هەر دیوارێک.", rights: "هەموو مافەکان پارێزراون." },
  },
  ar: {
    nav: { about: "من نحن", services: "خدماتنا", work: "أعمالنا", process: "طريقة العمل", contact: "تواصل" },
    hero: {
      kicker: "السليمانية",
      title: ["كل جدار", "يستحق", "أن يكون أخضر."],
      sub: "خضرة صناعية. بلا سقاية.",
      cta: "اطلب السعر على واتساب",
      secondary: "شاهد أعمالنا",
      alt: "جدار أخضر صناعي في شرفة بالسليمانية",
    },
    about: {
      label: "من نحن",
      title: "محل صغير في السليمانية.",
      body: [
        "نصمم ونركّب بأنفسنا.",
      ],
      alt: "واجهة محل غرين وولز مع شجرتين صناعيتين طويلتين",
      visit: "محلنا",
    },
    services: {
      label: "ماذا نقدّم",
      title: "من جدار واحد إلى حديقة كاملة.",
      items: [
        { t: "الجدران الخضراء", d: "للداخل والخارج." },
        { t: "أشجار ونباتات", d: "لا يبهت لونها." },
        { t: "حدائق داخلية", d: "تحت الدرج وفي الزوايا." },
        { t: "زهور وديكور المناسبات", d: "للمحلات والمناسبات." },
        { t: "تصاميم خاصة", d: "حسب مكانك." },
      ],
    },
    gallery: {
      label: "أعمالنا",
      title: "أماكن جعلناها خضراء.",
      flowers: "زهور ومناسبات",
      insta: "المزيد على إنستغرام",
      alts: {
        stairWide: "حديقة داخلية تحت الدرج",
        stairBonsai: "شجرة بونساي وحصى أسود تحت الدرج",
        corridor: "حوض طويل بالنخيل والسرخس في ممر",
        orchid: "زهور أوركيد بيضاء في مزهرية طويلة",
        pinkWall: "جدار زهور وردية في صالون",
        pinkTree: "شجرة أزهار وردية",
        hero: "جدار أخضر في شرفة",
        storefront: "محلنا",
      },
    },
    steps: {
      label: "طريقة العمل",
      title: "أربع خطوات، بلا تعب.",
      items: [
        { t: "راسلنا", d: "على واتساب." },
        { t: "نزور ونقيس", d: "نأتي إليك." },
        { t: "نصمم", d: "معاً." },
        { t: "نركّب", d: "بسرعة ونظافة." },
      ],
    },
    contactS: {
      label: "تواصل",
      title: "تحدّث معنا.",
      whatsapp: "واتساب", call: "اتصل بنا", hours: "أوقات العمل",
      days: "السبت إلى الخميس", friday: "الجمعة", closed: "مغلق", time: "١:٠٠ ظهراً – ١٠:٠٠ مساءً",
      open: "مفتوح الآن", closedNow: "مغلق الآن",
      address: "السليمانية، محافظة السليمانية، 46001", insta: "إنستغرام", directions: "الاتجاهات على الخريطة",
    },
    footer: { line: "خضرة لكل جدار.", rights: "جميع الحقوق محفوظة." },
  },
  en: {
    nav: { about: "About", services: "Services", work: "Work", process: "Process", contact: "Contact" },
    hero: {
      kicker: "Sulaymaniyah",
      title: ["Any wall", "can grow", "green."],
      sub: "Artificial greenery. No watering.",
      cta: "Get a quote on WhatsApp",
      secondary: "See our work",
      alt: "Artificial green wall on a balcony in Sulaymaniyah",
    },
    about: {
      label: "About us",
      title: "A small shop in Sulaymaniyah.",
      body: [
        "We design it. We install it.",
      ],
      alt: "Green Walls shop front with two tall artificial trees",
      visit: "Our shop",
    },
    services: {
      label: "What we do",
      title: "From a single wall to a whole garden.",
      items: [
        { t: "Green walls", d: "Inside and out." },
        { t: "Trees & plants", d: "They never fade." },
        { t: "Indoor gardens", d: "Under stairs, in corners." },
        { t: "Flowers & event decor", d: "For shops and occasions." },
        { t: "Custom designs", d: "Made for your space." },
      ],
    },
    gallery: {
      label: "Our work",
      title: "A few places we turned green.",
      flowers: "Flowers & events",
      insta: "More on Instagram",
      alts: {
        stairWide: "Indoor garden under a staircase",
        stairBonsai: "Bonsai tree with black pebbles under stairs",
        corridor: "Long planter with palms and ferns along a wall",
        orchid: "White orchids in a tall vase",
        pinkWall: "Pink flower wall in a salon",
        pinkTree: "Pink blossom tree",
        hero: "Green wall on a balcony",
        storefront: "Our shop",
      },
    },
    steps: {
      label: "How it works",
      title: "Four steps, no fuss.",
      items: [
        { t: "Message us", d: "On WhatsApp." },
        { t: "We visit & measure", d: "We come to you." },
        { t: "We design", d: "Together." },
        { t: "We install", d: "Quick and clean." },
      ],
    },
    contactS: {
      label: "Contact",
      title: "Come say hello.",
      whatsapp: "WhatsApp", call: "Call us", hours: "Opening hours",
      days: "Saturday – Thursday", friday: "Friday", closed: "Closed", time: "1:00 PM – 10:00 PM",
      open: "Open now", closedNow: "Closed now",
      address: "Sulaymaniyah, Sulaymaniyah Governorate, 46001", insta: "Instagram", directions: "Directions on map",
    },
    footer: { line: "Green, for every wall.", rights: "All rights reserved." },
  },
};
