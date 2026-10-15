import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos del servicio",
  alternates: { canonical: "/legal/terminos" },
  robots: { index: false },
};

export default function Page() {
  return <LegalPage titulo="Términos del servicio" />;
}
