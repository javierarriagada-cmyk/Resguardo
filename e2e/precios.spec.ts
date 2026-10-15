import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function axe(page: Page) {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(r.violations, JSON.stringify(r.violations, null, 2)).toEqual([]);
}

test.describe("Página /precios", () => {
  test("planes, costos de terceros, FAQ y cero violaciones axe", async ({ page }) => {
    await page.goto("/precios");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Cuánto cuesta y cuándo se paga.",
    );

    for (const id of ["estudio-titulos", "compra-protegida", "venta-protegida"]) {
      await expect(page.locator(`article#${id}`)).toBeVisible();
    }

    // Los montos de terceros se ven siempre como "Por confirmar" (no dependen del flag de provisorios).
    const tabla = page.getByRole("table");
    await expect(tabla.getByText("Por confirmar")).toHaveCount(3);

    // Garantía con su definición de "concretada".
    await expect(page.locator("#faq-pagos")).toContainText("si la operación no se concreta");
    await expect(page.locator("#faq-pagos")).toContainText("Operación concretada =");

    // Sin claims sin respaldo.
    const texto = (await page.locator("main").innerText()).toLowerCase();
    for (const prohibido of [
      "más elegido",
      "garantizado",
      "de inmediato",
      "transparencia absoluta",
    ]) {
      expect(texto).not.toContain(prohibido);
    }

    await axe(page);
  });

  test("JSON-LD: un Service con Offer por plan, UF como CLF", async ({ page }) => {
    await page.goto("/precios");
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(
      (t) => JSON.parse(t),
    );
    const grafo = ld.find((j) => Array.isArray(j["@graph"]));
    const servicios = grafo["@graph"] as Array<{
      "@type": string;
      offers: Record<string, unknown>;
    }>;
    expect(servicios).toHaveLength(3);
    for (const s of servicios) expect(s["@type"]).toBe("Service");
    const monedas = servicios.map((s) => s.offers.priceCurrency).sort();
    expect(monedas).toEqual(["CLF", "CLF", "CLP"]);
    expect(JSON.stringify(grafo)).not.toContain("valueAddedTaxIncluded");
  });

  test("la UF de referencia muestra fecha o, si la API falla, solo UF", async ({ page }) => {
    await page.goto("/precios");
    const uf = page.getByRole("complementary", { name: "Valor de la UF" });
    await expect(uf).toBeVisible();
    const conFecha = await uf.locator("time").count();
    if (conFecha === 0) {
      await expect(uf).toContainText("Montos en UF");
      await expect(page.locator(".price-aprox")).toHaveCount(0);
    } else {
      await expect(page.locator(".price-aprox")).toHaveCount(2);
    }
  });

  test("header, footer y sitemap enlazan /precios y las anclas de planes", async ({
    page,
    request,
  }) => {
    await page.goto("/");
    await page.getByRole("contentinfo").getByRole("link", { name: "Compra protegida" }).click();
    await expect(page).toHaveURL(/\/precios#compra-protegida$/);
    await expect(page.locator("article#compra-protegida")).toBeInViewport();
    const sitemap = await (await request.get("/sitemap.xml")).text();
    expect(sitemap).toContain("/precios</loc>");
  });
});
