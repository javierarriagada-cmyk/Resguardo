import { mostrarProvisorio } from "@/content/empresa";

/** Etiqueta de trabajo interno para datos o claims sin respaldo todavía. */
export function Prov({ children = "por confirmar" }: { children?: string }) {
  if (!mostrarProvisorio) return null;
  return <span className="prov">{children}</span>;
}
