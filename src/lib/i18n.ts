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
      kicker: "سلێمانی · دیزاین و دانانی سەوزایی",
      title: ["هەر دیوارێک", "دەتوانێت", "سەوز بێت."],
      sub: "دیواری سەوز، دار و گوڵی دەستکرد بۆ ماڵ، دوکان، کافێ و ئۆفیس. بێ ئاودان، هەمیشە جوان.",
      cta: "نرخ لە واتسئاپ وەربگرە",
      secondary: "کارەکانمان ببینە",
      alt: "دیواری سەوزی دەستکرد لە بالکۆنێکی سلێمانی",
    },
    about: {
      label: "دەربارەی ئێمە",
      title: "دوکانێکی بچووک، بە دەستێکی گەورە بۆ سەوزایی.",
      body: [
        "ئێمە لە سلێمانین و هەموو ڕۆژێک خەریکی ئەوەین شوێنەکان زیندوو بکەینەوە، بێ ئەوەی ئاو و چاودێری ڕۆژانە بوێت.",
        "هەر پڕۆژەیەک بە دەست دیزاین دەکەین و خۆمان دایدەنێین. وەرە بۆ دوکانەکەمان، سەیری بکە و دەستی لێ بدە.",
      ],
      alt: "پێشەوەی دوکانی گرین وۆڵز لەگەڵ دوو داری دەستکردی بەرز",
      visit: "دوکانەکەمان",
    },
    services: {
      label: "چی دەکەین",
      title: "لە دیوارێکەوە تا باخچەیەکی تەواو.",
      items: [
        { t: "دیواری سەوز", d: "دیزاین و دانانی دیواری سەوزی دەستکرد، بۆ ناوەوە و دەرەوە." },
        { t: "دار و ڕووەک", d: "داری بەرز، پاڵم و ڕووەکی دەستکرد کە ڕەنگیان ناچێت." },
        { t: "باخچەی ناوماڵ", d: "باخچەی بچووک لە ژێر پەیژە، لە هۆڵ و لە گۆشەکانی ماڵدا." },
        { t: "گوڵ و ڕازاندنەوەی بۆنە", d: "دیواری گوڵ و داری چرۆ بۆ دوکان، سالۆن و بۆنەکان." },
        { t: "دیزاینی تایبەت", d: "شوێنەکەت پێمان بڵێ، بە پێی قەبارە و ستایلی تۆ دروستی دەکەین." },
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
        { t: "نامەمان بۆ بنێرە", d: "وێنەی شوێنەکە لە واتسئاپ بنێرە و بیرۆکەکەت بڵێ." },
        { t: "دێین و دەپێوین", d: "دێینە شوێنەکەت و قەبارە و ڕووناکی دەبینین." },
        { t: "دیزاینی دەکەین", d: "ڕەنگ و جۆری ڕووەکەکان پێکەوە هەڵدەبژێرین." },
        { t: "دایدەنێین", d: "خۆمان دایدەنێین و شوێنەکە پاک بەجێ دەهێڵین." },
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
      kicker: "السليمانية · تصميم وتركيب المساحات الخضراء",
      title: ["كل جدار", "يستحق", "أن يكون أخضر."],
      sub: "جدران خضراء وأشجار وزهور صناعية للبيوت والمحلات والمقاهي والمكاتب. بلا سقاية، وجميلة دائماً.",
      cta: "اطلب السعر على واتساب",
      secondary: "شاهد أعمالنا",
      alt: "جدار أخضر صناعي في شرفة بالسليمانية",
    },
    about: {
      label: "من نحن",
      title: "محل صغير، وحب كبير للخضرة.",
      body: [
        "نحن من السليمانية، وعملنا كل يوم أن نعيد الحياة للأماكن من دون ماء أو عناية يومية.",
        "نصمم كل مشروع بأيدينا ونركّبه بأنفسنا. زورونا في المحل، شاهدوا والمسوا بأنفسكم.",
      ],
      alt: "واجهة محل غرين وولز مع شجرتين صناعيتين طويلتين",
      visit: "محلنا",
    },
    services: {
      label: "ماذا نقدّم",
      title: "من جدار واحد إلى حديقة كاملة.",
      items: [
        { t: "الجدران الخضراء", d: "تصميم وتركيب جدران خضراء صناعية للداخل والخارج." },
        { t: "أشجار ونباتات", d: "أشجار طويلة ونخيل ونباتات صناعية لا يبهت لونها." },
        { t: "حدائق داخلية", d: "حدائق صغيرة تحت الدرج وفي الصالات وزوايا البيت." },
        { t: "زهور وديكور المناسبات", d: "جدران زهور وأشجار مزهرة للمحلات والصالونات والمناسبات." },
        { t: "تصاميم خاصة", d: "أخبرنا عن مكانك، ونصنعه حسب المقاس والذوق." },
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
        { t: "راسلنا", d: "أرسل صورة المكان على واتساب وأخبرنا بفكرتك." },
        { t: "نزور ونقيس", d: "نأتي إلى مكانك ونرى المقاسات والإضاءة." },
        { t: "نصمم", d: "نختار الألوان وأنواع النباتات معاً." },
        { t: "نركّب", d: "نركّب بأنفسنا ونترك المكان نظيفاً." },
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
      kicker: "Sulaymaniyah · Artificial greenery, designed & installed",
      title: ["Any wall", "can grow", "green."],
      sub: "Green walls, trees and flowers for homes, shops, cafés and offices. No watering, always in season.",
      cta: "Get a quote on WhatsApp",
      secondary: "See our work",
      alt: "Artificial green wall on a balcony in Sulaymaniyah",
    },
    about: {
      label: "About us",
      title: "A small shop with a big soft spot for green.",
      body: [
        "We're based in Sulaymaniyah, and every day we bring rooms back to life — without the watering or the daily care.",
        "Every project is designed by hand and installed by us. Drop by the shop, have a look, touch the leaves.",
      ],
      alt: "Green Walls shop front with two tall artificial trees",
      visit: "Our shop",
    },
    services: {
      label: "What we do",
      title: "From a single wall to a whole garden.",
      items: [
        { t: "Green walls", d: "Design and installation of artificial green walls, inside and out." },
        { t: "Trees & plants", d: "Tall trees, palms and plants that never fade." },
        { t: "Indoor gardens", d: "Small gardens under stairs, in halls and quiet corners." },
        { t: "Flowers & event decor", d: "Flower walls and blossom trees for shops, salons and occasions." },
        { t: "Custom designs", d: "Tell us about your space — we build it to size and to taste." },
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
        { t: "Message us", d: "Send a photo of your space on WhatsApp and tell us the idea." },
        { t: "We visit & measure", d: "We come by and check the size and the light." },
        { t: "We design", d: "We pick colours and plant types together." },
        { t: "We install", d: "We install it ourselves and leave the place clean." },
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
