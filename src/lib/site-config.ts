// All image paths live here so they are easy to replace later.
import logo from "@/assets/images/logo.png.asset.json";
import balcony from "@/assets/images/balcony-green-wall.jpg.asset.json";
import storefront from "@/assets/images/storefront-trees.jpg.asset.json";
import stairWide from "@/assets/images/stair-garden-wide.jpg.asset.json";
import stairBonsai from "@/assets/images/stair-bonsai.jpg.asset.json";
import corridor from "@/assets/images/corridor-planter.jpg.asset.json";
import orchid from "@/assets/images/orchid-lobby.jpg.asset.json";
import pinkWall from "@/assets/images/pink-flower-wall.jpg.asset.json";
import pinkTree from "@/assets/images/pink-blossom-tree.jpg.asset.json";

export const images = {
  logo: logo.url,
  hero: balcony.url,
  storefront: storefront.url,
  stairWide: stairWide.url,
  stairBonsai: stairBonsai.url,
  corridor: corridor.url,
  orchid: orchid.url,
  pinkWall: pinkWall.url,
  pinkTree: pinkTree.url,
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
