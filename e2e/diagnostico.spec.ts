import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function irAlDiagnostico(page: Page) {
  await page.goto("/");
  await page.locator("#diagnostico").scrollIntoViewIfNeeded();
}

async function axe(page: Page) {
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(r.violations, JSON.stringify(r.violations, null, 2)).toEqual([]);
}

test("portada sin violaciones axe", async ({ page }) => {
  await page.goto("/");
  await axe(page);
});

test("flujo feliz: comprador con herencia + juicio recibe la orientación", async ({ page }) => {
  let payload: Record<string, unknown> | null = null;
  page.on("request", (r) => {
    if (r.url().endsWith("/api/diagnostico")) payload = r.postDataJSON();
  });
  await irAlDiagnostico(page);
  const form = page.locator("#diagnostico form");
  await expect(form.getByRole("radio", { name: /Comprar sin riesgos/ })).toBeChecked();
  await form.getByRole("button", { name: "Continuar" }).click();

  await expect(page.getByRole("status")).toHaveText("Paso 2 de 3");
  await expect(page.locator("legend", { hasText: "Cuéntanos de la propiedad" })).toBeFocused();
  await form.getByLabel("Región").selectOption("Los Lagos");
  await form.getByLabel("Comuna").fill("Puerto Varas");
  await form.getByLabel("Viene de una herencia").check();
  await form.getByLabel("Hay un juicio o embargo").check();
  await axe(page);
  await form.getByRole("button", { name: "Continuar" }).click();

  await expect(page.getByRole("status")).toHaveText("Paso 3 de 3");
  await form.getByLabel("Nombre").fill("Ana Pérez");
  await form.getByLabel("WhatsApp").fill("9 1234 5678");
  await form.getByLabel(/Acepto que usen estos datos/).check();
  await form.getByRole("button", { name: "Enviar y ver mi orientación" }).click();

  const titulo = page.getByRole("heading", { name: "Gracias, Ana. Recibimos tu caso." });
  await expect(titulo).toBeFocused();
  const lista = page.getByRole("list", { name: "Lo que revisaríamos primero" });
  await expect(lista).toContainText("Posesión efectiva");
  await expect(lista).toContainText("Embargo o juicio vigente");
  await expect(lista.getByRole("img", { name: "Rojo" })).toHaveCount(1);
  expect(payload).toMatchObject({ region: "Los Lagos", senales: ["herencia", "juicio"] });
  await axe(page);
});

test("validaciones de los pasos 2 y 3 con mensajes asociados", async ({ page }) => {
  await irAlDiagnostico(page);
  const form = page.locator("#diagnostico form");
  await form.getByRole("button", { name: "Continuar" }).click();
  await form.getByRole("button", { name: "Continuar" }).click();
  const region = form.getByLabel("Región");
  await expect(region).toHaveAttribute("aria-invalid", "true");
  await expect(region).toHaveAccessibleDescription("Elige la región de la propiedad.");
  await expect(region).toBeFocused();
  await expect(form.getByLabel("Comuna")).toHaveAccessibleDescription("Escribe la comuna.");
  await axe(page);

  await region.selectOption("Ñuble");
  await form.getByLabel("Comuna").fill("Chillán");
  await form.getByRole("button", { name: "Continuar" }).click();
  await form.getByLabel("Nombre").fill("Luis");
  await form.getByLabel("WhatsApp").fill("812345678");
  await form.getByRole("button", { name: /Enviar/ }).click();
  const wa = form.getByLabel("WhatsApp");
  await expect(wa).toHaveAttribute("aria-invalid", "true");
  await expect(wa).toBeFocused();
  await expect(page.locator("#wa-err")).toHaveText(
    "Escribe un celular de 9 dígitos que empiece con 9.",
  );
  await wa.fill("912345678");
  await form.getByRole("button", { name: /Enviar/ }).click();
  await expect(page.locator("#ok")).toBeFocused();
  await expect(page.locator(".consent")).toHaveClass(/invalid/);
});

test("error de red: se puede reintentar sin perder datos", async ({ page }) => {
  let fallar = true;
  await page.route("**/api/diagnostico", (route) =>
    fallar ? route.fulfill({ status: 500, body: "{}" }) : route.continue(),
  );
  await irAlDiagnostico(page);
  const form = page.locator("#diagnostico form");
  await form.getByRole("button", { name: "Continuar" }).click();
  await form.getByLabel("Región").selectOption("Maule");
  await form.getByLabel("Comuna").fill("Talca");
  await form.getByRole("button", { name: "Continuar" }).click();
  await form.getByLabel("Nombre").fill("Rosa");
  await form.getByLabel("WhatsApp").fill("+56 9 8765 4321");
  await form.getByLabel(/Acepto/).check();
  await form.getByRole("button", { name: /Enviar/ }).click();
  await expect(form.getByRole("alert")).toContainText("No pudimos enviar");
  await expect(form.getByLabel("Nombre")).toHaveValue("Rosa");
  fallar = false;
  await form.getByRole("button", { name: /Enviar/ }).click();
  await expect(page.getByRole("heading", { name: /Gracias, Rosa/ })).toBeVisible();
});

test("navegación solo con teclado de punta a punta", async ({ page }) => {
  await irAlDiagnostico(page);
  const radio = page.getByRole("radio", { name: /Comprar sin riesgos/ });
  await radio.focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: /Vender con todo resuelto/ })).toBeChecked();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText("Paso 2 de 3");
  await page.keyboard.press("Tab");
  await expect(page.getByLabel("Región", { exact: true })).toBeFocused();
  await page.getByLabel("Región", { exact: true }).selectOption("Valparaíso");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Viña del Mar");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText("Paso 3 de 3");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Pedro");
  await page.keyboard.press("Tab");
  await page.keyboard.type("911112222");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Space");
  await expect(page.locator("#ok")).toBeChecked();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: /Gracias, Pedro/ })).toBeFocused();
});

test("selector Compro/Vendo cambia el H1", async ({ page }) => {
  await page.goto("/");
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveText("Tu plata no se mueve hasta que la propiedad es tuya.");
  const vendo = page.getByRole("button", { name: "Voy a vender" });
  await vendo.click();
  await expect(vendo).toHaveAttribute("aria-pressed", "true");
  await expect(h1).toHaveText("Firmas sabiendo que la plata ya existe.");
});

test("API rechaza datos inválidos con errores por campo", async ({ request }) => {
  const r = await request.post("/api/diagnostico", { data: { objetivo: "comprar" } });
  expect(r.status()).toBe(400);
  const body = await r.json();
  expect(body.errores.region).toBe("Elige la región de la propiedad.");
  expect(body.errores.whatsapp).toBeDefined();
});

test("sin desborde horizontal", async ({ page }) => {
  await page.goto("/");
  const w = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(w).toBeLessThanOrEqual(0);
});

test("páginas legales y 404 sin violaciones axe", async ({ page }) => {
  for (const url of ["/legal/privacidad", "/legal/terminos"]) {
    await page.goto(url);
    await axe(page);
  }
  const r = await page.goto("/no-existe");
  expect(r?.status()).toBe(404);
  await axe(page);
});

test("SEO: JSON-LD, robots y sitemap", async ({ page, request }) => {
  await page.goto("/");
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
  const tipos = ld.map((t) => JSON.parse(t)["@type"]).flat();
  expect(tipos).toEqual(expect.arrayContaining(["LegalService", "FAQPage"]));
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", "es_CL");
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect(await (await request.get("/sitemap.xml")).text()).toContain("<loc>");
});
