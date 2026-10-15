import { Cierre, MobileBar } from "@/components/Cierre";
import { Cobertura } from "@/components/Cobertura";
import { Diagnostico } from "@/components/Diagnostico";
import { Duo } from "@/components/Duo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { faqJsonLd, JsonLd } from "@/components/JsonLd";
import { Precios } from "@/components/Precios";
import { Proceso } from "@/components/Proceso";
import { Riesgos } from "@/components/Riesgos";
import { Semaforo } from "@/components/Semaforo";
import { Verdad } from "@/components/Verdad";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Verdad />
        <Riesgos />
        <Proceso />
        <Diagnostico />
        <Semaforo />
        <Precios />
        <Duo />
        <Cobertura />
        <FAQ />
        <Cierre />
      </main>
      <Footer />
      <MobileBar />
      <JsonLd data={faqJsonLd()} />
    </>
  );
}
