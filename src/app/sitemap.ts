import type { MetadataRoute } from "next";
import { empresa } from "@/content/empresa";
import { getAllRegiones } from "@/content/regiones";

export default function sitemap(): MetadataRoute.Sitemap {
  const regiones = getAllRegiones();

  const rutas = [
    { path: "", priority: 1 },
    { path: "/cobertura", priority: 0.8 },
    ...regiones.map((r) => ({ path: `/cobertura/${r.slug}`, priority: 0.7 })),
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
