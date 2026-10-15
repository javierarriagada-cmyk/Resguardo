import Link from "next/link";
import { empresa } from "@/content/empresa";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Ruta de navegación visible + JSON-LD BreadcrumbList. El último elemento es la página actual. */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${empresa.url}${item.url}`,
          })),
        }}
      />
      <nav aria-label="Ruta de navegación" className="crumbs">
        <ol>
          {items.map((item, index) => {
            const actual = index === items.length - 1;
            return (
              <li key={item.url}>
                {actual ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.url}>{item.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
