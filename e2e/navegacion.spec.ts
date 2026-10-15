import { expect, test, type Page } from "@playwright/test";

/**
 * Regresión: al navegar a /precios desde la portada la vista quedaba a media página
 * (scroll suave de html compitiendo con el scroll de la navegación de Next).
 * Cada enlace debe dejar la vista arriba (rutas) o en su sección (anclas), con contenido visible.
 */
const RUTAS = ["/precios", "/guias", "/cobertura", "/guias/vale-vista"];
const ANCLAS = ["/#faq", "/#diagnostico"];

async function verificarDestino(page: Page, href: string) {
  const [path, hash] = href.split("#");
  await expect(page).toHaveURL(new RegExp(`${path === "/" ? "/" : path}(#${hash ?? ""})?$`));
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(700); // deja terminar cualquier scroll suave
  if (!hash) {
    expect(await page.evaluate(() => window.scrollY), `${href} debe abrir arriba`).toBeLessThan(5);
    await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
  } else {
    const box = await page.locator(`#${hash}`).boundingBox();
    expect(box, `#${hash} existe`).not.toBeNull();
    expect(box!.y, `${href} queda en su sección`).toBeGreaterThan(-5);
    expect(box!.y, `${href} queda en su sección`).toBeLessThan(220);
    await expect(page.locator(`#${hash}`)).toBeInViewport();
  }
}

for (const zona of ["header", "footer", "main"] as const) {
  for (const href of [...RUTAS, ...ANCLAS]) {
    test(`desde la portada, ${zona} → ${href}`, async ({ page }) => {
      await page.goto("/");
      const enlace = page.locator(`${zona} a[href="${href}"]:visible`).first();
      test.skip((await enlace.count()) === 0, `sin enlace visible en ${zona}`);
      await enlace.scrollIntoViewIfNeeded();
      await enlace.click();
      await verificarDestino(page, href);
    });
  }
}

for (const desde of ["/precios", "/guias/instruccion-notarial", "/cobertura/metropolitana"]) {
  for (const href of ["/precios", "/guias", "/cobertura", "/#faq", "/#diagnostico"]) {
    if (href === desde) continue;
    test(`desde ${desde}, pie → ${href}`, async ({ page }) => {
      await page.goto(desde);
      const enlace = page
        .locator(`footer a[href="${href}"]:visible, header a[href="${href}"]:visible`)
        .last();
      test.skip((await enlace.count()) === 0, "sin enlace");
      await enlace.scrollIntoViewIfNeeded();
      await enlace.click();
      await verificarDestino(page, href);
    });
  }
}

test("el enlace de salto lleva al contenido principal", async ({ page }) => {
  for (const ruta of ["/", "/precios", "/guias", "/cobertura"]) {
    await page.goto(ruta);
    await expect(page.locator("main#main")).toHaveCount(1);
    await expect(page.locator('a.skip[href="#main"]')).toHaveCount(1);
  }
});

test("menú móvil: abre, lleva a /precios y la vista arranca arriba", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator(".m-menu summary").click();
  for (const href of ["/precios", "/guias", "/cobertura", "/#faq"]) {
    await expect(page.locator(`.m-menu-panel a[href="${href}"]`)).toBeVisible();
  }
  await page.locator('.m-menu-panel a[href="/precios"]').click();
  await verificarDestino(page, "/precios");
  await expect(page.locator(".m-menu")).not.toHaveAttribute("open", "");
});

test("en escritorio el menú móvil no se muestra", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator(".m-menu")).toBeHidden();
});
