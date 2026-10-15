import { faq } from "@/content/home";
import { Icon } from "./ui/Icons";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-t">
      <div className="wrap faq-grid">
        <div>
          <p className="kicker">Preguntas frecuentes</p>
          <h2 id="faq-t" className="mt-14">
            Lo que conviene saber antes de firmar.
          </h2>
        </div>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q} open={f.open}>
              <summary>
                {f.q}
                <Icon name="plus" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
