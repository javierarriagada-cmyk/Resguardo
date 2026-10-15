import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Newsreader } from "next/font/google";
import { IconSprite } from "@/components/ui/Icons";
import { JsonLd, organizacionJsonLd } from "@/components/JsonLd";
import { empresa } from "@/content/empresa";
import "@/styles/globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
  variable: "--font-instrument-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

const titulo =
  "Resguardo · Compra o vende tu propiedad con la plata en custodia y los títulos revisados";
const descripcion =
  "Estudio de títulos con informe semáforo, escritura, instrucción notarial con vale vista en custodia y seguimiento hasta la inscripción en el Conservador. En todo Chile. Si la operación no se concreta, no pagas honorarios.";

export const metadata: Metadata = {
  metadataBase: new URL(empresa.url),
  title: { default: titulo, template: "%s · Resguardo" },
  description: descripcion,
  applicationName: "Resguardo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Resguardo",
    title: titulo,
    description: descripcion,
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#F4F1EA", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-CL"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${instrumentSans.variable} ${plexMono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Saltar al contenido
        </a>
        <IconSprite />
        {children}
        <JsonLd data={organizacionJsonLd()} />
      </body>
    </html>
  );
}
