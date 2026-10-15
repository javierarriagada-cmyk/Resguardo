import Link from "next/link";
import { empresa } from "@/content/empresa";
import { HeaderScroll } from "./HeaderScroll";
import { Prov } from "./ui/Prov";

const menu = [
  ["/#como", "Cómo funciona"],
  ["/#informe", "Informe semáforo"],
  ["/precios", "Precios"],
  ["/guias", "Guías"],
  ["/#vender", "Vendedores"],
  ["/#corredores", "Corredores"],
] as const;

export function BrandMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="14.5" fill="none" stroke="var(--seal)" strokeWidth="1.6" />
      <circle
        cx="16"
        cy="16"
        r="10.5"
        fill="none"
        stroke="var(--seal)"
        strokeWidth="1"
        strokeDasharray="1.6 1.6"
      />
      <path
        d="M11 16.5l3.4 3.4L21.5 12"
        fill="none"
        stroke="var(--seal)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  return (
    <HeaderScroll>
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="Resguardo, inicio">
          <BrandMark />
          <span className="brand-word">Resguardo</span>
          <Prov>provisorio</Prov>
        </Link>
        <nav aria-label="Principal">
          <ul className="menu">
            {menu.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="m-menu">
          <summary>Menú</summary>
          <nav aria-label="Principal (móvil)" className="m-menu-panel">
            <ul>
              {menu.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/cobertura">Cobertura</Link>
              </li>
              <li>
                <Link href="/#faq">Preguntas frecuentes</Link>
              </li>
            </ul>
          </nav>
        </details>
        <div className="nav-cta">
          <a
            className="tel"
            href={`tel:${empresa.telefono.valor}`}
            aria-label={`Llamar al ${empresa.telefono.visible}${empresa.telefono.porConfirmar ? " (número provisorio)" : ""}`}
          >
            {empresa.telefono.visible}
          </a>
          <Link className="btn btn-primary btn-sm" href="/#diagnostico">
            Diagnóstico gratis
          </Link>
        </div>
      </div>
    </HeaderScroll>
  );
}
