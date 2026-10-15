import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

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

const REGIONES = [
  { slug: "metropolitana", articulo: "la Región Metropolitana", verificado: "conservador.cl" },
  { slug: "valparaiso", articulo: "la Región de Valparaíso", verificado: "cbrvalpo.cl" },
  {
    slug: "la-araucania",
    articulo: "la Región de La Araucanía",
    verificado: "segundoconservadortemuco.cl",
  },
  { slug: "aysen", articulo: "la Región de Aysén", verificado: null },
];

test("índice /cobertura: 16 regiones, sin desborde y sin violaciones axe", async ({ page }) => {
  await page.goto("/cobertura");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("main .regions li")).toHaveCount(16);
  await sinDesborde(page);
  await axe(page);
});

for (const r of REGIONES) {
  test(`región ${r.slug}: contenido, fuentes, JSON-LD, sin desborde y axe`, async ({ page }) => {
    await page.goto(`/cobertura/${r.slug}`);

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: `Conservadores de Bienes Raíces en ${r.articulo}`,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: `Preguntas frecuentes en ${r.articulo}` }),
    ).toBeVisible();

    // Lo verificado enlaza a su fuente; lo no verificado muestra un aviso visible (no depende del flag de provisorios).
    if (r.verificado) {
      await expect(
        page.getByRole("link", { name: new RegExp(`Fuente: ${r.verificado}`) }),
      ).toBeVisible();
    }
    const cards = page.locator(".cbr");
    const total = await cards.count();
    const conFuente = await page.locator(".cbr .cbr-src").count();
    await expect(page.locator(".cbr .tbd")).toHaveCount(total - conFuente);
    await expect(page.locator(".tbd").first()).toHaveText("Territorio por confirmar");

    const nav = page.getByRole("navigation", { name: "Ruta de navegación" });
    await expect(nav.getByRole("link", { name: "Cobertura" })).toHaveAttribute(
      "href",
      "/cobertura",
    );

    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(
      (t) => JSON.parse(t),
    );
    const migas = ld.find((j) => j["@type"] === "BreadcrumbList");
    expect(migas.itemListElement).toHaveLength(3);
    expect(migas.itemListElement[2].item).toContain(`/cobertura/${r.slug}`);

    await expect(page.getByRole("link", { name: "Iniciar diagnóstico" })).toHaveAttribute(
      "href",
      "/#diagnostico",
    );
    await sinDesborde(page);
    await axe(page);
  });
}

test("ninguna región repite descripción ni preguntas de otra", async ({ request }) => {
  const vistos = new Map<string, string>();
  const html = await (await request.get("/sitemap.xml")).text();
  const slugs = [...html.matchAll(/\/cobertura\/([a-z-]+)<\/loc>/g)].map((m) => m[1] as string);
  expect(slugs).toHaveLength(16);
  for (const slug of slugs) {
    const pagina = await (await request.get(`/cobertura/${slug}`)).text();
    const textos = [...pagina.matchAll(/<summary><span>([^<]+)<\/span>/g)].map(
      (m) => m[1] as string,
    );
    const lead = pagina.match(/<p class="lead mt-18">([^<]+)<\/p>/)?.[1];
    for (const t of [...textos, lead ?? ""]) {
      expect(vistos.get(t), `texto repetido en ${slug}: ${t}`).toBeUndefined();
      vistos.set(t, slug);
    }
  }
});

test("la portada enlaza al índice y a cada región", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Ver cobertura por región" }).click();
  await expect(page).toHaveURL("/cobertura");
  await page
    .locator("main .regions")
    .getByRole("link", { name: /Metropolitana/ })
    .click();
  await expect(page).toHaveURL("/cobertura/metropolitana");
});
