import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isVercelPreview = process.env.VERCEL_ENV === "preview";

// Barra de Vercel solo en vistas previas: https://vercel.com/docs/vercel-toolbar/managing-toolbar
const toolbar = isVercelPreview
  ? {
      script: ["https://vercel.live"],
      connect: ["https://vercel.live", "wss://ws-us3.pusher.com"],
      img: ["https://vercel.live", "https://vercel.com"],
      style: ["https://vercel.live"],
      font: ["https://vercel.live", "https://assets.vercel.com"],
      frame: ["https://vercel.live"],
    }
  : { script: [], connect: [], img: [], style: [], font: [], frame: [] };

const src = (...values: string[]) => values.join(" ");

const cspDirectives = [
  "default-src 'self'",
  `script-src ${src("'self'", "'unsafe-inline'", ...(isProd ? [] : ["'unsafe-eval'"]), ...toolbar.script)}`,
  `style-src ${src("'self'", "'unsafe-inline'", ...toolbar.style)}`,
  `img-src ${src("'self'", "data:", "blob:", ...toolbar.img)}`,
  `font-src ${src("'self'", "data:", ...toolbar.font)}`,
  `connect-src ${src("'self'", ...toolbar.connect)}`,
  `frame-src ${src("'self'", ...toolbar.frame)}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
];

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives.join("; ") },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), display-capture=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
