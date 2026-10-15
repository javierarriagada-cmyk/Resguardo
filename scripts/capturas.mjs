// Capturas de página completa (1440 y 390 px) para comparar con docs/boceto-*.png.
// Uso: pnpm build && pnpm start -p 3100 & node scripts/capturas.mjs [baseURL] [carpeta]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:3100";
const out = process.argv[3] ?? ".";
const b = await chromium.launch();
for (const [name, w, h, m] of [
  ["desktop", 1440, 900, false],
  ["mobile", 390, 844, true],
]) {
  const pg = await b.newPage({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
    isMobile: m,
    hasTouch: m,
  });
  const errs = [];
  pg.on("pageerror", (e) => errs.push(String(e)));
  pg.on("console", (c) => c.type() === "error" && errs.push(c.text()));
  await pg.goto(base, { waitUntil: "networkidle" });
  await pg.evaluate(() => document.fonts.ready);
  if (m) await pg.addStyleTag({ content: ".mbar{display:none!important}" });
  await pg.waitForTimeout(400);
  const sw = await pg.evaluate(() => document.documentElement.scrollWidth);
  const sh = await pg.evaluate(() => document.documentElement.scrollHeight);
  console.log(name, "scrollWidth", sw, "height", sh, "errores", errs);
  await pg.screenshot({ path: `${out}/app-${name}.png`, fullPage: true });
}
await b.close();
