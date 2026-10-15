import type { MetadataRoute } from "next";
import { empresa } from "@/content/empresa";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    { path: "", priority: 1 },
    { path: "/precios", priority: 0.9 },
    { path: "/legal/privacidad", priority: 0.3 },
    { path: "/legal/terminos", priority: 0.3 },
  ];
  return rutas.map((r) => ({
    url: `${empresa.url}${r.path}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
