import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const SLUGS = ["documentos-antes-de-comprar", "instruccion-notarial", "vale-vista"];

async function axe(page: Page) {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(r.violations, JSON.stringify(r.violations, null, 2)).toEqual([]);
}

async function sinDesborde(page: Page) {
  const { scroll, ancho } = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    ancho: window.innerWidth,
  }));
  expect(scroll, "desborde horizontal").toBeLessThanOrEqual(ancho);
}

test("índice /guias: 3 guías enlazadas, sin desborde y axe", async ({ page }) => {
  await page.goto("/guias");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const s of SLUGS) {
    await expect(page.locator(`main a[href="/guias/${s}"]`).first()).toBeVisible();
  }
  await sinDesborde(page);
  await axe(page);
});

for (const slug of SLUGS) {
  test(`guía ${slug}: estructura, JSON-LD, lectura, enlaces y axe`, async ({ page, request }) => {
    const res = await page.goto(`/guias/${slug}`);
    expect(res?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("navigation", { name: "En esta guía" })).toBeVisible();
    await expect(page.locator(".g-cta")).toHaveCount(2);
    await expect(page.getByRole("heading", { name: "Normas citadas" })).toBeVisible();
    await expect(page.locator(".g-fuentes li").first()).toBeVisible();

    // JSON-LD Article con autor y editor organización, nunca una persona.
    const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
    const article = ld.map((t) => JSON.parse(t)).find((d) => d["@type"] === "Article");
    expect(article).toBeTruthy();
    expect(article.author["@type"]).toBe("Organization");
    expect(article.publisher["@type"]).toBe("Organization");
    expect(JSON.stringify(ld)).not.toContain('"Person"');

    // Ancho de lectura: el cuerpo no supera ~75 caracteres por línea.
    const { ancho, ch } = await page.evaluate(() => {
      const p = document.querySelector(".g-body .g-sec p") as HTMLElement;
      const probe = document.createElement("span");
      probe.textContent = "0".repeat(100);
      probe.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap";
      p.appendChild(probe);
      const r = {
        ancho: p.getBoundingClientRect().width,
        ch: probe.getBoundingClientRect().width / 100,
      };
      probe.remove();
      return r;
    });
    expect(ancho / ch).toBeLessThanOrEqual(75);

    // El índice lleva a anclas existentes.
    for (const href of await page
      .locator(".g-toc a")
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
      await expect(page.locator(href!)).toHaveCount(1);
    }

    // Todos los enlaces internos del cuerpo responden 200.
    const internos = await page
      .locator(".g-body a[href^='/']")
      .evaluateAll((as) => [...new Set(as.map((a) => a.getAttribute("href")!.split("#")[0]!))]);
    for (const href of internos) {
      expect((await request.get(href)).status(), href).toBe(200);
    }

    await sinDesborde(page);
    await axe(page);
  });
}

test("los avisos “por confirmar” son visibles", async ({ page }) => {
  await page.goto("/guias/vale-vista");
  await expect(page.locator(".g-pend .tbd").first()).toBeVisible();
});

test("el pie y la cabecera enlazan a las guías", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('footer a[href="/guias"]')).toBeVisible();
  await expect(page.locator('footer a[href="/guias/vale-vista"]')).toBeVisible();
});
