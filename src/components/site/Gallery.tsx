import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { images, contact } from "@/lib/site-config";
import type { Lang } from "@/lib/i18n";
import { dict } from "@/lib/i18n";

type Item = { key: keyof typeof images; span: string; aspect: string; flower?: boolean };
const items: Item[] = [
  { key: "stairWide", span: "md:col-span-7 md:row-span-2", aspect: "aspect-[4/5]" },
  { key: "corridor", span: "md:col-span-5", aspect: "aspect-[4/5]" },
  { key: "orchid", span: "md:col-span-3", aspect: "aspect-[3/4]" },
  { key: "stairBonsai", span: "md:col-span-2 md:mt-16", aspect: "aspect-[3/5]" },
];
const flowers: Item[] = [
  { key: "pinkWall", span: "md:col-span-5", aspect: "aspect-[4/5]", flower: true },
  { key: "pinkTree", span: "md:col-span-4 md:mt-24", aspect: "aspect-[3/4]", flower: true },
];
const all = [...items, ...flowers];

export function Gallery({ lang }: { lang: Lang }) {
  const t = dict[lang].gallery;
  const [open, setOpen] = useState<number | null>(null);
  const touch = useRef<number | null>(null);
  const rtl = lang !== "en";

  const go = (d: number) => setOpen((o) => (o === null ? o : (o + d + all.length) % all.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, rtl]);

  const Tile = ({ it, i }: { it: Item; i: number }) => (
    <button
      onClick={() => setOpen(i)}
      className={`group reveal relative block overflow-hidden text-start ${it.span}`}
      aria-label={t.alts[it.key]}
    >
      <div className={`mask-img overflow-hidden ${it.aspect} md:h-full`}>
        <img src={images[it.key]} alt={t.alts[it.key]} loading="lazy" className="zoom-img h-full w-full object-cover" />
      </div>
      <span className="pointer-events-none absolute bottom-3 start-3 text-xs tracking-wide text-forest-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {t.alts[it.key]}
      </span>
    </button>
  );

  return (
    <section id="work" className="px-5 py-28 md:px-12">
      <div className="mb-14 grid gap-6 md:grid-cols-12">
        <p className="text-sm uppercase tracking-[.25em] text-muted-foreground md:col-span-3">{t.label}</p>
        <h2 className="font-display text-5xl leading-[1.05] md:col-span-8 md:text-7xl">{t.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
        {items.map((it, i) => <Tile key={it.key} it={it} i={i} />)}
      </div>

      <div className="mt-24 bg-blush px-5 py-16 md:-mx-12 md:px-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
          <h3 className="col-span-2 font-display text-4xl italic text-blush-deep md:col-span-3 md:text-5xl">{t.flowers}</h3>
          {flowers.map((it, j) => <Tile key={it.key} it={it} i={items.length + j} />)}
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-b border-foreground pb-1 text-lg">
          <Instagram className="h-5 w-5" /> {t.insta} <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
        </a>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/95 p-4"
          onClick={() => setOpen(null)}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch.current === null) return;
            const dx = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(dx) > 50) go((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
            touch.current = null;
          }}
          role="dialog"
          aria-modal
        >
          <img
            src={images[all[open].key]}
            alt={t.alts[all[open].key]}
            className="max-h-[88vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute end-5 top-5 text-forest-foreground" onClick={() => setOpen(null)} aria-label="Close"><X className="h-8 w-8" /></button>
          <button className="absolute start-3 top-1/2 -translate-y-1/2 p-3 text-forest-foreground" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous">
            <ChevronLeft className="h-9 w-9 rtl:rotate-180" />
          </button>
          <button className="absolute end-3 top-1/2 -translate-y-1/2 p-3 text-forest-foreground" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next">
            <ChevronRight className="h-9 w-9 rtl:rotate-180" />
          </button>
          <p className="absolute bottom-5 text-sm text-forest-foreground">{open + 1} / {all.length}</p>
        </div>
      )}
    </section>
  );
}
