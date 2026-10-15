"use client";

import { empresa } from "@/content/empresa";
import {
  PAGOS,
  PAGO_LABEL,
  REGIONES,
  SENALES,
  SENAL_LABEL,
  TIPOS,
  type Objetivo,
  type Pago,
  type Senal,
} from "@/lib/diagnostico/constantes";
import { orientacion, type PuntoOrientacion } from "@/lib/diagnostico/orientacion";
import { erroresPorCampo, pasoContactoSchema, pasoPropiedadSchema } from "@/lib/diagnostico/schema";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon, type IconName } from "./ui/Icons";
import { TrafficSymbol } from "./ui/TrafficSymbol";

type Paso = 1 | 2 | 3 | 4;

const OPCIONES: { value: Objetivo; icon: IconName; titulo: string; texto: string }[] = [
  {
    value: "comprar",
    icon: "buy",
    titulo: "Comprar sin riesgos",
    texto: "Ya encontré una propiedad y quiero revisarla antes de pagar.",
  },
  {
    value: "vender",
    icon: "sell",
    titulo: "Vender con todo resuelto",
    texto: "Publicación y toda la parte legal a precio fijo.",
  },
  {
    value: "estudio",
    icon: "doc",
    titulo: "Solo el estudio de títulos",
    texto: "Informe semáforo explicado punto por punto.",
  },
  {
    value: "corredor",
    icon: "brief",
    titulo: "Soy corredor",
    texto: "Quiero derivar la parte legal de mis operaciones.",
  },
];

const PROGRESO = ["1 · Tu objetivo", "2 · La propiedad", "3 · Contacto"];
const CTA: Record<1 | 2 | 3, string> = {
  1: "Continuar",
  2: "Continuar",
  3: "Enviar y ver mi orientación",
};

const INICIAL = {
  objetivo: "comprar" as Objetivo,
  region: "",
  comuna: "",
  tipo: TIPOS[0] as string,
  pago: "contado" as Pago,
  senales: [] as Senal[],
  nombre: "",
  whatsapp: "",
  email: "",
  consentimiento: false,
};

type Errores = Partial<Record<keyof typeof INICIAL, string>>;

/**
 * Diagnóstico de 3 pasos (isla cliente). Valida cada paso con los mismos esquemas Zod que usa
 * el servidor, mueve el foco al título de cada paso y anuncia el progreso con aria-live.
 */
export function DiagnosticWizard() {
  const [paso, setPaso] = useState<Paso>(1);
  const [v, setV] = useState(INICIAL);
  const [errores, setErrores] = useState<Errores>({});
  const [enviando, setEnviando] = useState(false);
  const [errorRed, setErrorRed] = useState<string | null>(null);
  const [resultado, setResultado] = useState<{ nombre: string; puntos: PuntoOrientacion[] } | null>(
    null,
  );
  const tituloRef = useRef<HTMLElement | null>(null);
  const moverFoco = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (moverFoco.current) {
      tituloRef.current?.focus();
      moverFoco.current = false;
    }
  }, [paso]);

  function ir(n: Paso) {
    moverFoco.current = true;
    setErrores({});
    setErrorRed(null);
    setPaso(n);
  }

  function set<K extends keyof typeof INICIAL>(k: K, val: (typeof INICIAL)[K]) {
    setV((prev) => ({ ...prev, [k]: val }));
    if (errores[k]) setErrores((e) => ({ ...e, [k]: undefined }));
  }

  function enfocarPrimerError(errs: Errores, orden: (keyof typeof INICIAL)[]) {
    const primero = orden.find((k) => errs[k]);
    if (!primero) return;
    const id = primero === "consentimiento" ? "ok" : primero === "whatsapp" ? "wa" : primero;
    requestAnimationFrame(() => document.getElementById(id)?.focus());
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (paso === 1) return ir(2);
    if (paso === 2) {
      const r = pasoPropiedadSchema.safeParse(v);
      if (!r.success) {
        const errs = erroresPorCampo(r.error) as Errores;
        setErrores(errs);
        return enfocarPrimerError(errs, ["region", "comuna"]);
      }
      return ir(3);
    }
    if (paso === 3) {
      const r = pasoContactoSchema.safeParse(v);
      if (!r.success) {
        const errs = erroresPorCampo(r.error) as Errores;
        setErrores(errs);
        return enfocarPrimerError(errs, ["nombre", "whatsapp", "email", "consentimiento"]);
      }
      setEnviando(true);
      setErrorRed(null);
      try {
        const res = await fetch("/api/diagnostico", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(v),
        });
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { errores?: Errores } | null;
          if (res.status === 400 && body?.errores) {
            setErrores(body.errores);
            return enfocarPrimerError(body.errores, [
              "nombre",
              "whatsapp",
              "email",
              "consentimiento",
            ]);
          }
          throw new Error(String(res.status));
        }
        setResultado({
          nombre: v.nombre.trim().split(/\s+/)[0] ?? "",
          puntos: orientacion(v.senales, v.pago),
        });
        ir(4);
      } catch {
        setErrorRed(
          "No pudimos enviar tu diagnóstico. Revisa tu conexión e inténtalo de nuevo; tus datos siguen aquí.",
        );
      } finally {
        setEnviando(false);
      }
    }
  }

  function reiniciar() {
    setV(INICIAL);
    setResultado(null);
    ir(1);
  }

  const ref = (el: HTMLElement | null) => {
    tituloRef.current = el;
  };
  const errId = (k: string) => (errores[k as keyof Errores] ? `${k}-err` : undefined);
  const campo = (k: keyof Errores) => (errores[k] ? "field invalid" : "field");
  const err = (k: keyof Errores, id?: string) =>
    errores[k] ? (
      <p className="err" id={id ?? `${k}-err`}>
        {errores[k]}
      </p>
    ) : null;

  return (
    <div className="panel">
      <ol className="progress" aria-hidden="true">
        {PROGRESO.map((l, i) => {
          const s = i + 1;
          const cls = s < paso || paso === 4 ? "ok" : s === paso ? "on" : undefined;
          return (
            <li key={l} className={cls}>
              {l}
            </li>
          );
        })}
      </ol>
      <p className="sr" role="status" aria-live="polite">
        {paso < 4 ? `Paso ${paso} de 3` : "Diagnóstico enviado"}
      </p>
      <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby="diag-t">
        {paso === 1 && (
          <div className="pane">
            <fieldset>
              <legend tabIndex={-1} ref={ref}>
                ¿Qué necesitas?
              </legend>
              <p className="hint">Elige la opción que más se parezca a tu situación.</p>
              <div className="choices">
                {OPCIONES.map((o) => (
                  <div className="choice" key={o.value}>
                    <input
                      type="radio"
                      name="objetivo"
                      id={`g-${o.value}`}
                      value={o.value}
                      checked={v.objetivo === o.value}
                      onChange={() => set("objetivo", o.value)}
                    />
                    <label htmlFor={`g-${o.value}`}>
                      <Icon name={o.icon} />
                      <span>
                        <b>{o.titulo}</b>
                        <span>{o.texto}</span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {paso === 2 && (
          <div className="pane">
            <fieldset>
              <legend tabIndex={-1} ref={ref}>
                Cuéntanos de la propiedad
              </legend>
              <p className="hint">
                Con esto sabemos qué Conservador y qué certificados corresponden.
              </p>
              <div className="fields">
                <div className={campo("region")}>
                  <label htmlFor="region">Región</label>
                  <select
                    id="region"
                    name="region"
                    required
                    value={v.region}
                    onChange={(e) => set("region", e.target.value)}
                    aria-invalid={!!errores.region}
                    aria-describedby={errId("region")}
                  >
                    <option value="">Elige una región</option>
                    {REGIONES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  {err("region")}
                </div>
                <div className={campo("comuna")}>
                  <label htmlFor="comuna">Comuna</label>
                  <input
                    id="comuna"
                    name="comuna"
                    autoComplete="address-level2"
                    placeholder="Ej.: Ñuñoa"
                    required
                    value={v.comuna}
                    onChange={(e) => set("comuna", e.target.value)}
                    aria-invalid={!!errores.comuna}
                    aria-describedby={errId("comuna")}
                  />
                  {err("comuna")}
                </div>
                <div className="field">
                  <label htmlFor="tipo">Tipo de propiedad</label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={v.tipo}
                    onChange={(e) => set("tipo", e.target.value)}
                  >
                    {TIPOS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="pago">¿Cómo se paga?</label>
                  <select
                    id="pago"
                    name="pago"
                    value={v.pago}
                    onChange={(e) => set("pago", e.target.value as Pago)}
                  >
                    {PAGOS.map((p) => (
                      <option key={p} value={p}>
                        {PAGO_LABEL[p]}
                      </option>
                    ))}
                  </select>
                </div>
                <fieldset className="flags">
                  <legend>
                    ¿Sabes si aplica algo de esto? <span>(opcional)</span>
                  </legend>
                  <div className="tags">
                    {SENALES.map((s) => (
                      <div className="tag" key={s}>
                        <input
                          type="checkbox"
                          id={`f-${s}`}
                          name="senales"
                          value={s}
                          checked={v.senales.includes(s)}
                          onChange={(e) =>
                            set(
                              "senales",
                              e.target.checked
                                ? [...v.senales, s]
                                : v.senales.filter((x) => x !== s),
                            )
                          }
                        />
                        <label htmlFor={`f-${s}`}>{SENAL_LABEL[s]}</label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>
        )}

        {paso === 3 && (
          <div className="pane">
            <fieldset>
              <legend tabIndex={-1} ref={ref}>
                ¿Cómo te contactamos?
              </legend>
              <p className="hint">Te escribiremos por WhatsApp para revisar tu caso. Nada más.</p>
              <div className="fields">
                <div className={campo("nombre")}>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    name="nombre"
                    autoComplete="given-name"
                    required
                    value={v.nombre}
                    onChange={(e) => set("nombre", e.target.value)}
                    aria-invalid={!!errores.nombre}
                    aria-describedby={errId("nombre")}
                  />
                  {err("nombre")}
                </div>
                <div className={campo("whatsapp")}>
                  <label htmlFor="wa">WhatsApp</label>
                  <div className="prefix">
                    <span aria-hidden="true">+56</span>
                    <input
                      id="wa"
                      name="whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="9 1234 5678"
                      required
                      value={v.whatsapp}
                      onChange={(e) => set("whatsapp", e.target.value)}
                      aria-invalid={!!errores.whatsapp}
                      aria-describedby={["wa-hint", errores.whatsapp ? "wa-err" : ""]
                        .join(" ")
                        .trim()}
                    />
                  </div>
                  <span id="wa-hint" className="sr">
                    Celular chileno con prefijo +56
                  </span>
                  {err("whatsapp", "wa-err")}
                </div>
                <div className={`${campo("email")} field-full`}>
                  <label htmlFor="email">
                    Correo <span className="opt">(opcional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={v.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errores.email}
                    aria-describedby={errId("email")}
                  />
                  {err("email")}
                </div>
                <div className={errores.consentimiento ? "consent invalid" : "consent"}>
                  <input
                    type="checkbox"
                    id="ok"
                    name="consentimiento"
                    required
                    checked={v.consentimiento}
                    onChange={(e) => set("consentimiento", e.target.checked)}
                    aria-invalid={!!errores.consentimiento}
                    aria-describedby={errId("consentimiento")}
                  />
                  <label htmlFor="ok">
                    Acepto que usen estos datos solo para contactarme sobre mi caso, según la{" "}
                    <a className="link" href="/legal/privacidad">
                      política de privacidad
                    </a>
                    .
                    {errores.consentimiento ? (
                      <span className="sr-only" id="consentimiento-err">
                        {" "}
                        {errores.consentimiento}
                      </span>
                    ) : null}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        )}

        {paso === 4 && resultado && (
          <div className="pane">
            <div className="result-head">
              <TrafficSymbol estado="g" style={{ width: 34, height: 34 }} />
              <div>
                <h3 tabIndex={-1} ref={ref} id="r-title">
                  {resultado.nombre ? `Gracias, ${resultado.nombre}. ` : ""}Recibimos tu caso.
                </h3>
                <p className="hint result-hint">
                  Te escribiremos por WhatsApp. Mientras, esto es lo que revisaríamos primero:
                </p>
              </div>
            </div>
            <ul className="result-list" aria-label="Lo que revisaríamos primero">
              {resultado.puntos.map((p) => (
                <li key={p.clave}>
                  <TrafficSymbol estado={p.estado} label />
                  <div>
                    <b>{p.titulo}</b>
                    <span>{p.detalle}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="note result-note">
              Es una orientación preliminar con lo que nos contaste, no un estudio de títulos. El
              semáforo definitivo sale de los certificados.
            </p>
            <div className="actions">
              <button type="button" className="back" onClick={reiniciar}>
                Empezar de nuevo
              </button>
              <a className="btn btn-quiet btn-wa" href={empresa.whatsapp.url} rel="noopener">
                <Icon name="wa" /> Escribir ahora por WhatsApp
              </a>
            </div>
          </div>
        )}

        {errorRed ? (
          <p className="form-error" role="alert">
            {errorRed}
          </p>
        ) : null}

        {paso < 4 && (
          <div className="actions">
            {paso > 1 ? (
              <button type="button" className="back" onClick={() => ir((paso - 1) as Paso)}>
                ← Volver
              </button>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={enviando}
              aria-busy={enviando}
            >
              <span>{enviando ? "Enviando…" : CTA[paso as 1 | 2 | 3]}</span> <Icon name="arrow" />
            </button>
          </div>
        )}
        <p className="privacy">
          <Icon name="lock" />
          Tus datos se tratan conforme a la ley chilena de protección de datos personales y no se
          comparten con terceros.
        </p>
      </form>
    </div>
  );
}
