import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Instagram, MapPin } from "lucide-react";
import { dict, langs, type Lang } from "@/lib/i18n";
import { images, contact, isOpenAt } from "@/lib/site-config";
import { Leaf } from "@/components/site/Leaf";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Walls Decore — Artificial green walls in Sulaymaniyah" },
      { name: "description", content: "Design and installation of artificial green walls, trees, indoor gardens and flower decor in Sulaymaniyah." },
      { property: "og:title", content: "Green Walls Decore — Sulaymaniyah" },
      { property: "og:description", content: "Artificial green walls, trees, indoor gardens and flower decor for homes, shops and offices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useLang() {
  const [lang, setLang] = useState<Lang>("ckb");
  useEffect(() => {
    const s = localStorage.getItem("gw-lang") as Lang | null;
    if (s && dict[s]) setLang(s);
  }, []);
  useEffect(() => {
    const l = langs.find((x) => x.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = l.dir;
    localStorage.setItem("gw-lang", lang);
  }, [lang]);
  return [lang, setLang] as const;
}

function useReveal(dep: unknown) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Index() {
  const [lang, setLang] = useLang();
  const t = dict[lang];
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useReveal(lang);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 1900);
    const onS = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onS, { passive: true });
    return () => { clearTimeout(id); window.removeEventListener("scroll", onS); };
  }, []);

  return (
    <div className="overflow-x-clip">
      {/* Loader */}
      <div className={`fixed inset-0 z-[80] flex items-center justify-center bg-forest transition-all duration-700 ${loaded ? "pointer-events-none -translate-y-full" : ""}`}>
        <Leaf draw className="h-28 w-20 text-accent" />
      </div>

      <Nav lang={lang} setLang={setLang} />

      <main key={lang} className="lang-fade">
        <Hero lang={lang} scrollY={scrollY} />
        <About lang={lang} />
        <Services lang={lang} />
        <Gallery lang={lang} />
        <Steps lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={`fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-500 ${scrollY > 600 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = dict[lang].nav;
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-12">
      <a href="#top" className="flex items-center gap-2">
        <img src={images.logo} alt="Greenwalls_suli" className="h-16 w-auto" />
      </a>
      <nav className="hidden gap-8 text-sm md:flex">
        {(["about", "services", "work", "process", "contact"] as const).map((k) => (
          <a key={k} href={`#${k}`} className="hover:text-primary">{t[k]}</a>
        ))}
      </nav>
      <div className="flex border border-foreground/30 text-sm">
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1.5 transition-colors ${lang === l.code ? "bg-foreground text-background" : "hover:bg-muted"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
}

function Hero({ lang, scrollY }: { lang: Lang; scrollY: number }) {
  const t = dict[lang].hero;
  return (
    <section id="top" className="relative grid min-h-screen gap-10 px-5 pb-16 pt-28 md:grid-cols-12 md:px-12">
      <div className="relative z-10 flex flex-col justify-end md:col-span-6 md:pb-12">
        <p className="mb-8 text-sm tracking-wide text-muted-foreground">{t.kicker}</p>
        <h1 className="font-display text-[15vw] leading-[0.92] tracking-tight md:text-[7.5vw]">
          <span className="block">{t.title[0]}</span>
          <span className="block italic text-primary md:ps-[8vw]">{t.title[1]}</span>
          <span className="block">{t.title[2]}</span>
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted-foreground">{t.sub}</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-forest">
            <MessageCircle className="h-5 w-5" /> {t.cta}
          </a>
          <a href="#work" className="border-b border-foreground pb-1">{t.secondary}</a>
        </div>
      </div>
      <div className="relative md:col-span-5 md:col-start-8">
        <Leaf className="sway absolute -start-8 top-10 z-10 h-24 w-16 text-accent" />
        <Leaf className="sway-slow absolute -end-4 bottom-24 z-10 h-16 w-12 text-primary" />
        <div className="h-[70vh] overflow-hidden md:h-full md:rounded-t-full">
          <img
            src={images.hero}
            alt={t.alt}
            fetchPriority="high"
            className="h-[120%] w-full object-cover"
            style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
          />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="flex items-center gap-3 text-sm uppercase tracking-[.25em] text-muted-foreground"><span className="h-px w-10 bg-foreground/40" />{children}</p>;
}

function About({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  return (
    <section id="about" className="relative px-5 py-32 md:px-12">
      <div className="grid items-center md:grid-cols-12">
        <figure className="reveal relative md:col-span-5">
          <img src={images.storefront} alt={t.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <figcaption className="mt-3 font-display text-sm italic text-muted-foreground">— {t.visit}</figcaption>
        </figure>
        <div className="reveal relative z-10 -mt-20 bg-forest p-8 text-forest-foreground md:col-span-7 md:-ms-24 md:mt-40 md:p-14">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">{t.title}</h2>
          {t.body.map((p, i) => <p key={i} className="mt-6 max-w-xl text-lg leading-relaxed opacity-85">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const t = dict[lang].services;
  const offsets = ["md:ps-0", "md:ps-[14%]", "md:ps-[6%]", "md:ps-[22%]", "md:ps-[10%]"];
  return (
    <section id="services" className="px-5 py-28 md:px-12">
      <SectionLabel>{t.label}</SectionLabel>
      <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">{t.title}</h2>
      <ol className="mt-20 border-t border-foreground/20">
        {t.items.map((s, i) => (
          <li key={i} className={`reveal group grid gap-4 border-b border-foreground/20 py-10 md:grid-cols-12 ${offsets[i]}`}>
            <span className="font-display text-sm text-primary md:col-span-1">0{i + 1}</span>
            <h3 className="font-display text-3xl transition-colors group-hover:text-primary md:col-span-6 md:text-5xl">{s.t}</h3>
            <p className="max-w-sm text-muted-foreground md:col-span-4 md:self-end">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Steps({ lang }: { lang: Lang }) {
  const t = dict[lang].steps;
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const v = (window.innerHeight * 0.7 - r.top) / r.height;
      setP(Math.max(0, Math.min(1, v)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section id="process" className="bg-forest px-5 py-28 text-forest-foreground md:px-12">
      <SectionLabel>{t.label}</SectionLabel>
      <h2 className="mt-6 font-display text-5xl md:text-7xl">{t.title}</h2>
      <div ref={ref} className="relative mt-20 ps-14 md:ps-24">
        <svg className="absolute start-2 top-0 h-full w-10 md:start-8" viewBox="0 0 40 400" preserveAspectRatio="none" aria-hidden>
          <path d="M20 0 C35 50 5 100 20 150 C35 200 5 250 20 300 C35 350 5 380 20 400" stroke="currentColor" className="text-accent" strokeWidth="2" fill="none"
            pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} vectorEffect="non-scaling-stroke" />
        </svg>
        {t.items.map((s, i) => (
          <div key={i} className="reveal relative pb-16 md:grid md:grid-cols-12">
            <span className="font-display text-6xl italic text-accent md:col-span-2">{i + 1}</span>
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl">{s.t}</h3>
              <p className="mt-3 max-w-md opacity-80">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = dict[lang].contactS;
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const u = () => setOpen(isOpenAt(new Date()));
    u();
    const id = setInterval(u, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="contact" className="px-5 py-28 md:px-12">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-6 font-display text-6xl md:text-8xl">{t.title}</h2>
          <div className="mt-12 flex flex-col gap-4">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-accent px-8 py-6 text-2xl text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <span className="flex items-center gap-4"><MessageCircle className="h-7 w-7" />{t.whatsapp}</span>
              <span dir="ltr" className="text-base">{contact.phoneDisplay}</span>
            </a>
            <a href={contact.tel} className="flex items-center justify-between border border-foreground px-8 py-6 text-2xl transition-colors hover:bg-foreground hover:text-background">
              <span className="flex items-center gap-4"><Phone className="h-7 w-7" />{t.call}</span>
              <span dir="ltr" className="text-base">{contact.phoneDisplay}</span>
            </a>
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">{t.hours}</h3>
              {open !== null && (
                <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm ${open ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                  <span className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-forest" : "bg-muted-foreground"}`} />
                  {open ? t.open : t.closedNow}
                </span>
              )}
            </div>
            <table className="mt-4 w-full text-lg">
              <tbody>
                <tr className="border-b border-foreground/20"><td className="py-3">{t.days}</td><td className="py-3 text-end">{t.time}</td></tr>
                <tr className="border-b border-foreground/20"><td className="py-3">{t.friday}</td><td className="py-3 text-end text-muted-foreground">{t.closed}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:mt-32">
          <iframe title="map" src={contact.map} loading="lazy" className="aspect-square w-full border-0 grayscale-[40%]" />
          <p className="mt-5 flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{t.address} · <span dir="ltr">H9CX+55</span></p>
          <div className="mt-4 flex gap-6">
            <a href={contact.mapLink} target="_blank" rel="noreferrer" className="border-b border-foreground pb-0.5">{t.directions}</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-foreground pb-0.5"><Instagram className="h-4 w-4" />{t.insta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <footer className="border-t border-foreground/20 px-5 py-14 md:px-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <img src={images.logo} alt="Greenwalls_suli" loading="lazy" className="h-20 w-auto" />
          <p className="mt-4 flex items-center gap-2 font-display text-xl italic">
            <Leaf className="sway h-6 w-4 text-accent" /> {t.footer.line}
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm">
          {(["about", "services", "work", "process", "contact"] as const).map((k) => (
            <a key={k} href={`#${k}`} className="hover:text-primary">{t.nav[k]}</a>
          ))}
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">@greenwalls_suli</a>
        </nav>
      </div>
      <p className="mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} Green Walls Decore · {t.footer.rights}</p>
    </footer>
  );
}
