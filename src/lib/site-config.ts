// All image paths live here so they are easy to replace later.
// Files sit in /public/images so Cloudflare Pages serves them directly.
export const images = {
  logo: "/images/logo.png",
  hero: "/images/balcony-green-wall.jpg",
  storefront: "/images/storefront-trees.jpg",
  stairWide: "/images/stair-garden-wide.jpg",
  stairBonsai: "/images/stair-bonsai.jpg",
  corridor: "/images/corridor-planter.jpg",
  orchid: "/images/orchid-lobby.jpg",
  pinkWall: "/images/pink-flower-wall.jpg",
  pinkTree: "/images/pink-blossom-tree.jpg",
};

export const contact = {
  instagram: "https://www.instagram.com/greenwalls_suli/",
  whatsapp: "https://wa.me/9647709041050",
  phoneDisplay: "0770 904 1050",
  tel: "tel:+9647709041050",
  map: "https://www.google.com/maps?q=H9CX%2B55+Sulaymaniyah&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=H9CX%2B55+Sulaymaniyah",
};

/** Open Sat–Thu 13:00–22:00 Asia/Baghdad, Friday closed. */
export function isOpenAt(date: Date): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Baghdad",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const wd = parts.find((p) => p.type === "weekday")?.value;
  const h = Number(parts.find((p) => p.type === "hour")?.value);
  if (wd === "Fri") return false;
  return h >= 13 && h < 22;
}
