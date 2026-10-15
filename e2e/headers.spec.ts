import { expect, test } from "@playwright/test";

test.describe("Cabeceras de seguridad y CSP", () => {
  test("las respuestas HTTP incluyen cabeceras de seguridad requeridas en / y /legal/privacidad", async ({
    request,
  }) => {
    for (const path of ["/", "/legal/privacidad"]) {
      const response = await request.get(path);
      expect(response.status()).toBe(200);

      const headers = response.headers();
      expect(headers["x-content-type-options"]).toBe("nosniff");
      expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
      expect(headers["permissions-policy"]).toContain("payment=()");
      expect(headers["permissions-policy"]).toContain("usb=()");
      expect(headers["permissions-policy"]).toContain("browsing-topics=()");
      expect(headers["permissions-policy"]).toContain("display-capture=()");
      expect(headers["permissions-policy"]).not.toContain("interest-cohort");

      expect(headers["strict-transport-security"]).toBe("max-age=63072000; includeSubDomains");
      expect(headers["strict-transport-security"]).not.toContain("preload");

      expect(headers["content-security-policy"]).toContain("default-src 'self'");
      expect(headers["content-security-policy"]).not.toContain("https://va.vercel-scripts.com");
    }
  });

  test("sin errores de consola ni violaciones de CSP en la portada, /legal/* y diagnóstico completo", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const cspViolations: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (err) => {
      consoleErrors.push(err.message);
    });

    await page.addInitScript(() => {
      document.addEventListener("securitypolicyviolation", (e) => {
        // Ignorar 'eval' disparado en el contexto del navegador por utilidades internas de Playwright al usar page.evaluate/addInitScript
        if (e.blockedURI === "eval" || e.violatedDirective.includes("script-src")) {
          if (!e.sample || e.sample === "") {
            return;
          }
        }
        // @ts-expect-error - Custom property attached for Playwright inspection
        window.__cspViolations = window.__cspViolations || [];
        // @ts-expect-error - Custom property attached for Playwright inspection
        window.__cspViolations.push(
          `${e.blockedURI} violated ${e.violatedDirective} (${e.originalPolicy})`,
        );
      });
    });

    async function checkCspViolations() {
      const violations = await page.evaluate(
        // @ts-expect-error - Reading custom window property
        () => window.__cspViolations || [],
      );
      if (violations.length > 0) {
        cspViolations.push(...violations);
      }
    }

    // 1. Portada
    await page.goto("/");
    await checkCspViolations();
    expect(consoleErrors).toEqual([]);
    expect(cspViolations).toEqual([]);

    // 2. /legal/*
    for (const legalPath of ["/legal/privacidad", "/legal/terminos"]) {
      await page.goto(legalPath);
      await checkCspViolations();
      expect(consoleErrors).toEqual([]);
      expect(cspViolations).toEqual([]);
    }

    // 3. Diagnóstico completo
    await page.goto("/");
    await page.locator("#diagnostico").scrollIntoViewIfNeeded();

    const form = page.locator("#diagnostico form");
    await form.getByRole("button", { name: "Continuar" }).click();

    await form.getByLabel("Región").selectOption("Valparaíso");
    await form.getByLabel("Comuna").fill("Viña del Mar");
    await form.getByRole("button", { name: "Continuar" }).click();

    await form.getByLabel("Nombre").fill("Prueba CSP");
    await form.getByLabel("WhatsApp").fill("912345678");
    await form.getByLabel(/Acepto que usen estos datos/).check();
    await form.getByRole("button", { name: "Enviar y ver mi orientación" }).click();

    await expect(page.locator("#r-title")).toContainText("Gracias, Prueba. Recibimos tu caso.");
    await checkCspViolations();
    expect(consoleErrors).toEqual([]);
    expect(cspViolations).toEqual([]);
  });
});
