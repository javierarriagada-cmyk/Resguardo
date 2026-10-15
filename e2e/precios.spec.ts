import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function axe(page: Page) {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(r.violations, JSON.stringify(r.violations, null, 2)).toEqual([]);
}

test.describe("Página /precios", () => {
  test("carga la página de precios, muestra los 3 planes, la tabla y FAQ sin errores de accesibilidad axe", async ({
    page,
  }) => {
    await page.goto("/precios");

    // Verificar H1
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toContainText("Precios fijos");

    // Verificar los 3 planes
    await expect(page.getByRole("heading", { name: "Estudio de títulos" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Compra protegida" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Venta protegida" })).toBeVisible();

    // Verificar tags provisorios
    const provs = page.locator(".prov");
    await expect(provs.first()).toBeVisible();

    // Verificar tabla de costos de terceros
    await expect(page.getByRole("heading", { name: "Tabla de costos de terceros" })).toBeVisible();
    const tabla = page.getByRole("table");
    await expect(tabla).toContainText("Notaría pública");
    await expect(tabla).toContainText("POR CONFIRMAR");

    // Verificar FAQ de pagos y garantía
    await expect(
      page.getByRole("heading", { name: "Preguntas frecuentes sobre precios y garantía." }),
    ).toBeVisible();
    await expect(page.locator("#faq-pagos")).toContainText(
      "si la operación no se concreta, no pagas",
    );

    // Verificar JSON-LD OfferCatalog
    const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
    const jsonLds = ld.map((t) => JSON.parse(t));
    const offerCatalog = jsonLds.find((j) => j["@type"] === "OfferCatalog");
    expect(offerCatalog).toBeDefined();
    expect(offerCatalog?.itemListElement?.length).toBe(3);

    // Test de accesibilidad
    await axe(page);
  });

  test("degradación elegante cuando la API de la UF falla", async ({ page }) => {
    // Interceptamos la llamada a la API de UF para simular fallo 500
    await page.route("https://mindicador.cl/api/uf", (route) =>
      route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "API indisponible" }),
      }),
    );

    await page.goto("/precios");

    // Verificar H1
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // En la tarjeta de la UF debe mostrar "UF al día"
    await expect(page.locator(".money")).toContainText("UF al día");
    await expect(page.locator(".money")).toContainText(
      "Los planes en UF se convierten a pesos (CLP) según el valor oficial del Banco Central el día del cobro.",
    );

    // Los precios siguen mostrando las UF fijas sin romper la interfaz ni lanzar error en consola
    await expect(page.locator(".price", { hasText: "UF 14" })).toBeVisible();
    await expect(page.locator(".price", { hasText: "UF 18" })).toBeVisible();

    // Test de accesibilidad con fallo de API
    await axe(page);
  });
});
