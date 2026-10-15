import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function axe(page: Page) {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(r.violations, JSON.stringify(r.violations, null, 2)).toEqual([]);
}

test("índice /cobertura renderiza regiones y no tiene violaciones axe", async ({ page }) => {
  await page.goto("/cobertura");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Estudio de títulos e instrucciones notariales",
  );
  const regionesList = page.locator(".regions li");
  await expect(regionesList).toHaveCount(16);
  await axe(page);
});

test.describe("páginas regionales /cobertura/[region] con axe y contenido único", () => {
  const regionesAProbar = [
    {
      slug: "metropolitana",
      nombre: "Metropolitana",
      nombreConArticulo: "la Región Metropolitana",
      titular: "Estudio de títulos y cierre legal en la Región Metropolitana",
      cbrPrueba: "Conservador de Bienes Raíces de Santiago",
      fuenteTexto: "Fuente: conservador.cl",
    },
    {
      slug: "valparaiso",
      nombre: "Valparaíso",
      nombreConArticulo: "la Región de Valparaíso",
      titular: "Estudio de títulos y custodia notarial en la Región de Valparaíso",
      cbrPrueba: "Conservador de Bienes Raíces de Viña del Mar",
      fuenteTexto: "Fuente: cbrvina.cl",
    },
    {
      slug: "biobio",
      nombre: "Biobío",
      nombreConArticulo: "la Región del Biobío",
      titular: "Servicios legales inmobiliarios en la Región del Biobío",
      cbrPrueba: "Conservador de Bienes Raíces de Concepción",
      fuenteTexto: "Fuente: cbrconcepcion.cl",
    },
  ];

  for (const reg of regionesAProbar) {
    test(`región ${reg.slug} sin violaciones axe y con datos específicos`, async ({ page }) => {
      await page.goto(`/cobertura/${reg.slug}`);

      // Verificar H1 específico
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(reg.titular);

      // Verificar presencia del CBR representativo y texto de la fuente
      await expect(page.getByRole("heading", { name: reg.cbrPrueba })).toBeVisible();
      await expect(page.getByText(reg.fuenteTexto)).toBeVisible();

      // Verificar Breadcrumb semántico
      const breadcrumb = page.getByRole("navigation", { name: "Breadcrumb" });
      await expect(breadcrumb).toBeVisible();
      await expect(breadcrumb).toContainText("Inicio");
      await expect(breadcrumb).toContainText("Cobertura");
      await expect(breadcrumb).toContainText(reg.nombre);

      // Verificar JSON-LD BreadcrumbList y Service
      const ldTexts = await page.locator('script[type="application/ld+json"]').allTextContents();
      const ldParsed = ldTexts.map((t) => JSON.parse(t));
      const breadcrumbLd = ldParsed.find((item) => item["@type"] === "BreadcrumbList");
      expect(breadcrumbLd).toBeDefined();
      expect(breadcrumbLd.itemListElement.length).toBe(3);

      const serviceLd = ldParsed.find((item) => item["@type"] === "Service");
      expect(serviceLd).toBeDefined();
      expect(serviceLd.name).toBe(reg.titular);

      // Verificar CTA al diagnóstico con el artículo
      const cta = page.getByRole("link", {
        name: new RegExp(`Iniciar diagnóstico en ${reg.nombreConArticulo}`, "i"),
      });
      await expect(cta).toBeVisible();
      await expect(cta).toHaveAttribute("href", "/#diagnostico");

      // Verificar cero violaciones axe
      await axe(page);
    });
  }
});

test("navegación desde la portada hacia /cobertura y hacia /cobertura/metropolitana", async ({
  page,
}) => {
  await page.goto("/");
  const linkCobertura = page.getByRole("link", { name: /Ver cobertura detallada/i });
  await linkCobertura.click();
  await expect(page).toHaveURL("/cobertura");

  const linkMetropolitana = page.getByRole("link", { name: /Metropolitana RM/i });
  await linkMetropolitana.click();
  await expect(page).toHaveURL("/cobertura/metropolitana");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Región Metropolitana");
});
