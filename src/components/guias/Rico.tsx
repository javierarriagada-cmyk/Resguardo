import Link from "next/link";
import { Fragment } from "react";

const ENLACE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Texto con enlaces `[texto](href)`. Internos con <Link>, externos en pestaña segura. */
export function Rico({ texto }: { texto: string }) {
  const partes: React.ReactNode[] = [];
  let ultimo = 0;
  for (const m of texto.matchAll(ENLACE)) {
    const [entero, etiqueta, href] = m;
    const i = m.index ?? 0;
    if (i > ultimo) partes.push(texto.slice(ultimo, i));
    partes.push(
      href?.startsWith("/") ? (
        <Link key={i} href={href}>
          {etiqueta}
        </Link>
      ) : (
        <a key={i} href={href} rel="noopener noreferrer">
          {etiqueta}
        </a>
      ),
    );
    ultimo = i + entero.length;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return (
    <>
      {partes.map((p, k) => (
        <Fragment key={k}>{p}</Fragment>
      ))}
    </>
  );
}
