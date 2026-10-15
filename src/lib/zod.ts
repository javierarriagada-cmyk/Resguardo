import { z } from "zod";

/**
 * Zod 4 detecta si puede compilar validadores con `Function("")`. Con la CSP sin
 * 'unsafe-eval' esa prueba dispara una violación de script-src en el navegador.
 * `jitless` desactiva la detección y la compilación dinámica. Importa Zod siempre desde aquí.
 */
z.config({ jitless: true });

export { z };
