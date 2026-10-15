import Link from "next/link";
import { empresa } from "@/content/empresa";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${empresa.url}${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Breadcrumb" className="wrap mt-24 mb-16">
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "14px",
            color: "var(--ink-2)",
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" style={{ color: "var(--ink)", fontWeight: 500 }}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    style={{ color: "var(--seal)", textDecoration: "underline" }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
