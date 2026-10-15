import type { MetadataRoute } from "next";
import { empresa } from "@/content/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${empresa.url}/sitemap.xml`,
    host: empresa.url,
  };
}
