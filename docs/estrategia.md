# Resguardo · Estrategia, marca, arquitectura, diseño y plan técnico

> Documento de estudio para Javier Arriagada · 14 de octubre de 2026 · v1 para aprobación
> Entregables relacionados: `boceto-portada.html`, `boceto-desktop.png` (1440 px), `boceto-mobile.png` (390 px).
> Convención: **[POR CONFIRMAR]** = dato o claim que no se publica hasta que Javier lo respalde con evidencia.

---

## 0. Resumen en una página

1. **El semáforo no es el diferenciador.** Lesly.cl ya vende un estudio de títulos "con veredicto tipo semáforo" a $29.900 en la Región Metropolitana. Si Resguardo compite por el informe, compite por precio y pierde. Lo que nadie empaqueta bien es **el cierre completo**: estudio + escritura + **instrucción notarial con vale vista en custodia** + seguimiento hasta la **inscripción**, con **un solo equipo y una pauta de revisión escrita** y un precio fijo.
2. **Mensaje central propuesto:** *"Tu plata no se mueve hasta que la propiedad es tuya."* (comprador) / *"Firmas sabiendo que la plata ya existe."* (vendedor). Es concreto, verificable y describe el mecanismo real (instrucción notarial), no una promesa vaga de "sin estafas".
3. **Confianza = método + proceso + honestidad.** Pauta de revisión escrita, un mismo equipo de principio a fin, criterios bancarios explícitos (10 años de títulos, gravámenes de 30 años, certificados de no más de 90 días) y una franja que dice lo que **no** hacemos (no somos notaría ni Conservador). Fuera los números sin respaldo ("cientos de operaciones", "+15 notarías").
4. **Garantía "si la operación no se concreta, no pagas"** (decidida por Javier): la operación queda **concretada cuando la escritura se envía a la notaría**. El sitio lo define en una nota breve, siempre junto a la promesa (sección 3.4).
5. **Diseño:** sistema "papel notarial y timbre": Newsreader + Instrument Sans + IBM Plex Mono (todas OFL), azul timbre como color de marca para que nunca se confunda con el semáforo, semáforo con **forma + texto + color** (WCAG 1.4.1).
6. **Tecnología:** Next.js App Router en Vercel, Server Components por defecto, diagnóstico como isla cliente, `next/font` autoalojado, JSON-LD `LegalService`, CI en GitHub Actions con Playwright + axe + Lighthouse sobre cada vista previa de Vercel.
7. **SEO local:** 16 páginas regionales + páginas por Conservador con contenido propio. **No** fabricar 346 páginas de comuna con texto intercambiable (Google las trata como *doorway pages*).

---

## 1. Crítica honesta de las maquetas actuales

Se revisaron completas las dos maquetas. Nota: el archivo llamado "v1" (`ef1053…html`) dice "v3" en el pie; el "v2" (`2776c2…html`) es una versión más simple. Abajo las llamo **Maqueta A** (la más completa, Fraunces/Inter, verde petróleo) y **Maqueta B** (la simple, estilos en línea).

### 1.1 Lo que está bien y se conserva

- La intuición de producto es correcta: **selector Compro/Vendo**, **diagnóstico de 3 pasos**, **semáforo** y **WhatsApp con persona real** son las piezas adecuadas para este público.
- La sección "Protección para las dos partes" (A) entiende que el vendedor también tiene miedo (no cobrar). Es un insight valioso que el mercado casi no comunica.
- El FAQ de A ya explica bien la instrucción notarial; se reescribe, pero la idea se mantiene.

### 1.2 Problemas de estrategia y contenido

| # | Problema | Dónde | Por qué importa | Corrección |
|---|---|---|---|---|
| 1 | Claims no verificables: "Cientos de operaciones", "+15 notarías y bancos", "Muchos corredores confían en nosotros", "100% limpia" | A (franja de confianza, FAQ), B (métricas, hero) | Ley 19.496 art. 28 (publicidad engañosa). Con la Ley 21.772 el SERNAC ya fiscaliza a notarías: el sector está bajo la lupa del consumidor. Además, en servicios legales un número inflado destruye la credibilidad si alguien pregunta. | Reemplazar por hechos verificables (método, proceso). Cifras solo con respaldo **[POR CONFIRMAR]**. |
| 2 | La garantía no define "concretada" | A, hero y FAQ "¿Cuándo pago?" | El titular dice "si no se concreta, no pagas" y la regla real (se paga al enviar la escritura a la notaría) aparece recién en el FAQ. Leídas por separado, parecen contradecirse, y un cliente que lee solo el titular puede sentirse engañado. | Definir "concretada" en una nota breve **junto a cada mención** de la garantía y usar la misma frase en todo el sitio (sección 3.4). |
| 3 | "Sin comisiones abusivas" | B, perspectiva Vendo | Ataca a los corredores justo cuando la estrategia incluye aliarse con ellos. | "Precio fijo en vez de comisión porcentual": compara sin insultar. |
| 4 | El semáforo verde dice "Puedes avanzar tranquilo" | A | Lenguaje de garantía absoluta: responsabilidad profesional innecesaria. | "Los títulos están conformes. Puedes avanzar a la escritura." |
| 5 | Imprecisiones técnicas: "Hipoteca… se alza en la notaría", "Revisado por tu experto" | A (tarjeta del hero) | El alzamiento se pacta en la escritura con la cláusula textual del banco y se cancela en el Conservador (tu propio protocolo, 4.6). "Tu experto" es vago y promete una persona que no se muestra. | Copy registralmente correcto; respaldo de proceso: "revisado por el equipo con la pauta de estudio de títulos". |
| 6 | El diagnóstico promete y no entrega | A y B | El botón dice "Ver mi diagnóstico" y muestra solo "¡Listo!". Es una promesa rota en el momento de mayor intención. | Al enviar, mostrar una **orientación preliminar** según lo marcado (herencia, cónyuge, hipoteca, juicio…). Ya está en el boceto. |
| 7 | "Todo Chile" y el selector tiene 5 regiones + "Otra región" | A y B | Contradicción visible para alguien de Ñuble o Magallanes. | Las 16 regiones. |
| 8 | El valor real (custodia + inscripción) queda en la mitad de la página | A | La gente ve el semáforo primero, que es lo que ya ofrece la competencia barata. | Hero centrado en "dónde está tu plata" y el expediente que avanza hasta la inscripción. |
| 9 | Falta precio | A y B | En un servicio "a precio fijo", no mostrar el precio genera sospecha. Ayala & Cía. y LegalChile publican precio. | Sección de precios con 3 planes (montos **provisorios**). |
| 10 | Blog con íconos de relleno | A y B | Se ve inacabado y no aporta SEO real. | Guías con contenido propio (sección 4.5). |

### 1.3 Problemas de diseño

- **A: combinación vista mil veces.** Fraunces + Inter + verde petróleo + dorado + tarjetas redondeadas con sombra, todo en grillas de 3, es el lenguaje de las plantillas SaaS 2022–2024. No dice "legal chileno", no dice "notaría", no se distingue de una fintech cualquiera.
- **A: monotonía estructural.** Riesgos, pasos, semáforo y blog usan el mismo patrón de tarjeta en 3 columnas. Sin cambios de ritmo, el ojo no sabe qué es lo importante.
- **A: el color de marca (verde) compite con el verde del semáforo.** Si la marca es verde, "verde = en regla" pierde fuerza y el botón principal parece un estado.
- **B: sin sistema.** Todo con estilos en línea, fuentes del sistema, h1 de 22 px (sin jerarquía), azul genérico, bordes de 0,5 px que en pantallas de densidad 1 desaparecen, y un marco de navegador falso que no corresponde a una portada real.
- **Ambas: íconos de Tabler por CDN** (una fuente de íconos completa para usar ~25): peso, petición externa, parpadeo al cargar y estética de íconos genéricos.

### 1.4 Problemas de accesibilidad y técnicos (WCAG 2.2 AA)

- Campos solo con *placeholder*, sin `<label>` (1.3.1, 3.3.2). Sin validación ni mensajes de error (3.3.1). WhatsApp sin formato ni prefijo +56.
- **Semáforo solo por color** en B (1.4.1). En A los puntos de color también van sin forma.
- Selector Compro/Vendo sin `aria-pressed` ni anuncio del cambio; el diagnóstico no mueve el foco ni anuncia el paso (4.1.3).
- A: animaciones `.reveal` con `opacity:0` hasta que corre JavaScript: si el script falla, la página queda en blanco; además no respeta `prefers-reduced-motion`.
- Botón flotante de WhatsApp que tapa contenido y el foco en móvil (2.4.11 *Focus Not Obscured*, nuevo en 2.2).
- Sin consentimiento para tratar datos personales en el formulario (Ley 19.628 hoy; Ley 21.719 con vigencia el 1 de diciembre de 2026 **[verificar fecha]**).

---

## 2. Mercado, competencia y alternativas

Referencias revisadas el 14-oct-2026 (pueden cambiar; validar antes de citar en el sitio):

| Alternativa | Qué ofrece | Precio de referencia | Debilidad que Resguardo aprovecha |
|---|---|---|---|
| **Abogado tradicional** | Estudio de títulos, a veces escritura | Mercado: $150.000–$400.000 por estudio ([minotaria.cl](https://minotaria.cl/estudio-de-titulos/), [cuantomecuesta.com](https://cuantomecuesta.com/cl/gastos-notariales-compraventa/)); Ayala & Cía. "desde $170.000", hasta 50 UF en casos complejos ([ayalaycia.cl](https://www.ayalaycia.cl/estudio-de-titulos)) | Cotización caso a caso, poca transparencia, lenguaje técnico, rara vez gestiona la custodia y la inscripción como un servicio. |
| **Estudio de títulos online** | Informe rápido, a veces con IA | Lesly $29.900, 7 días hábiles, solo RM, **semáforo** ([lesly.cl](https://lesly.cl/)); LegalChile $299.990, 1 día, el cliente sube los documentos ([legalchile.cl](https://legalchile.cl/estudio-de-titulos/)) | Termina en el informe: no redacta, no custodia el pago, no sigue la inscripción. |
| **Corredor de propiedades** | Busca contraparte, negocia, coordina | Comisión porcentual habitual por cada parte **[referencia de mercado por validar]** | La parte legal suele subcontratarse o quedar en manos del banco. Es **canal**, no enemigo. |
| **Portales** (Portal Inmobiliario, Toctoc, Yapo) | Publicación | Planes de aviso | Cero acompañamiento legal; ahí empiezan muchas estafas (avisos falsos, arriendos/ventas fantasma). |
| **Banco (si hay crédito)** | Estudia títulos y redacta | Incluido en gastos operacionales | Protege su garantía, no al comprador (no mira gastos comunes, ampliaciones ni la negociación). En compras **al contado nadie revisa por el comprador**. |
| **Notaría** | Autoriza la escritura, custodia instrucciones | Arancel; tarifas máximas en régimen de la Ley 21.772 | No asesora a las partes ni redacta a favor de una. |

**Contexto regulatorio que importa (Ley 21.772, vigente desde el 2-abr-2026):** aplica la Ley del Consumidor a notarios y conservadores, ordena repositorios digitales, copias autorizadas electrónicas y que el notario remita al Conservador el título para inscripción. La firma de la escritura de compraventa sigue siendo presencial con huella. Implicancias: (a) el proceso se vuelve más digital y rastreable, lo que hace creíble un "seguimiento del expediente"; (b) habrá más transparencia de tarifas, así que el sitio debe separar con claridad **honorarios** de **costos de terceros**; (c) el consumidor tiene más herramientas para reclamar: más razón para no exagerar.

**Segmentos por prioridad**

1. **Comprador al contado, particular a particular**: el dolor es máximo y nadie lo protege. Ticket alto, decisión rápida si confía.
2. **Vendedor particular, sobre todo de herencias** (sucesiones que venden): títulos complejos (posesión efectiva, inscripción especial de herencia, impuesto a la herencia, varios firmantes). Es justo donde tus checklists muestran más reparos.
3. **Corredores independientes y pequeñas corredoras sin abogado propio**: canal B2B con volumen recurrente.
4. **Compradores con crédito**: valor menor (el banco hace parte), pero sirve vender promesa, pie y revisión de lo que el banco no mira.

---

## 3. Posicionamiento y propuesta de valor

### 3.1 Declaración de posicionamiento

> Para personas que compran o venden una propiedad sin intermediario de confianza, **Resguardo** es el servicio legal que se hace cargo de **toda** la compraventa: revisa los títulos con criterio bancario, redacta la escritura y deja la plata en custodia en la notaría hasta que la propiedad queda inscrita. A diferencia de un informe de títulos suelto o de un abogado que cotiza caso a caso, hay **un solo equipo con una pauta de revisión escrita**, un **precio fijo** conocido desde el inicio y **seguimiento hasta el Conservador**, en cualquier región de Chile.

### 3.2 Pilares (en orden de jerarquía en el sitio)

1. **Tu plata, en custodia**: vale vista bajo instrucción notarial; se libera al inscribir. *Prueba:* explicación del mecanismo + modelo de instrucción anonimizado.
2. **Un proceso escrito y un solo equipo**: la misma lista de control en cada caso; quien estudia los títulos prepara la escritura y sigue la inscripción. *Prueba:* informe de ejemplo donde cada punto cita el documento en que consta. (La presentación de personas queda pendiente; ver 3.5.)
3. **Criterio bancario explícito**: 10 años de títulos, gravámenes de 30 años, certificados vigentes (≤90 días), no expropiación municipal y SERVIU, estado civil y régimen patrimonial, personerías. Está en tus pautas BancoEstado y checklists: es un método **verificable**, no un adjetivo.
4. **Precio fijo y garantía clara**.
5. **Todo Chile**: Conservador de cada comuna, notaría a elección de las partes.

### 3.3 Política de claims (para el sitio, anuncios y redes)

| Permitido | Por confirmar antes de publicar | Prohibido |
|---|---|---|
| "Revisamos 10 años de títulos y 30 de gravámenes" | N.º de operaciones acompañadas | "Sin estafas garantizado", "100% seguro", "100% limpia" |
| "El pago queda en custodia en la notaría con instrucción notarial" | N.º de notarías/bancos con que se trabaja | "Cientos de operaciones" sin dato |
| "Cada estudio sigue la misma pauta de revisión escrita" | Plazos (1 día hábil diagnóstico; 3–5 días estudio) | "Mejor precio de Chile", "el más rápido" |
| "No reemplazamos a la notaría ni al Conservador" | Testimonios (solo reales, con consentimiento escrito) | Logos de bancos o notarías sin autorización |
| "Un mismo equipo de principio a fin" | Nombres, fotos, firmas o habilitación de personas (pendiente, 3.5) | Inventar personas, firmas o credenciales |

### 3.4 La garantía: "si la operación no se concreta, no pagas"

**Decisión de Javier:** la garantía se mantiene. La operación queda **concretada cuando la escritura se envía a la notaría** para su firma; ese día se cobran los honorarios.

Cómo comunicarla con claridad y honestidad:

- **Siempre con su definición al lado.** Donde aparezca la promesa (hero, planes, FAQ, términos), va una nota breve: *"Operación concretada = cuando enviamos la escritura a la notaría para su firma. Si se cae antes, no pagas honorarios; desde ese momento sí corresponden."*
- **Marcar el momento en el proceso.** En "Cómo funciona", el paso 3 dice "Al enviarla a la notaría, la operación queda concretada". El cliente sabe de antemano en qué punto se cobra.
- **Separar honorarios de costos de terceros.** Certificados del Conservador y del municipio, derechos notariales e inscripción no son honorarios y se pagan aunque la operación se caiga.
- **Misma frase en todo el sitio, en los términos del servicio y en la cotización escrita.**
- **Estudio de títulos suelto:** es un servicio independiente, no una operación. Se paga al encargarlo y se descuenta si después se contrata la compra protegida (precio y regla **[POR CONFIRMAR]**).

### 3.5 Presentación de personas (pendiente para después)

Por decisión de Javier, ni el sitio ni el informe mencionan por ahora a un abogado con nombre, firma o datos de habilitación. El respaldo se comunica como **equipo y proceso**: pauta de revisión escrita, un mismo equipo de principio a fin y fuentes citadas en cada punto del informe. No se inventan personas, firmas ni credenciales. Más adelante hay que decidir si se presenta a personas reales (nombre, foto, habilitación, firma en el informe) y cómo. Cuando se resuelva, habría que actualizar `/nosotros`, el pie del informe, el JSON-LD (`Person`) y la fotografía.

---

## 4. Arquitectura del sitio

### 4.1 Mapa del sitio (fase 1 en negrita)

```
/                                  **Portada**
/comprar                           **Compra protegida** (servicio)
/vender                            **Venta protegida** (publicación + parte legal)
/estudio-de-titulos                **Estudio de títulos** (servicio suelto)
/corredores                        **Alianza corredores** (+ formulario B2B)
/precios                           **Precios y qué incluye** (honorarios vs. costos de terceros)
/como-funciona                     **Proceso de 5 pasos + dónde está tu plata**
/informe-semaforo                  **Cómo leemos los títulos + informe de ejemplo**
/diagnostico                       **Diagnóstico** (también embebido en portada)
/diagnostico/gracias               Confirmación + orientación + WhatsApp
/guias/                            **Índice de guías**
/guias/[slug]                      Guía (MDX)
/cobertura/                        **16 regiones**
/cobertura/[region]                **Página regional**
/cobertura/[region]/[conservador]  Página por Conservador (fase 3)
/nosotros                          **Método y proceso** (presentación del equipo: pendiente, ver 3.5)
/preguntas-frecuentes              **FAQ completo**
/legal/privacidad | /legal/terminos | /legal/cookies   **Obligatorias**
/expediente/[token]                Seguimiento privado del cliente (fase 3)
```

### 4.2 Flujo del diagnóstico (3 pasos)

- **Paso 1 · Objetivo** (radio, una opción): comprar / vender / solo estudio / soy corredor. Determina el enrutamiento.
- **Paso 2 · Propiedad**: región (16), comuna, tipo, forma de pago (contado/crédito/subsidio/no sé) y señales opcionales: herencia, vendedor casado o divorciado, hipoteca, firma con poder, ampliaciones, juicio o embargo, promesa ya firmada.
- **Paso 3 · Contacto**: nombre, WhatsApp (+56, 9 dígitos que empiezan con 9), correo opcional, consentimiento explícito con enlace a privacidad.
- **Resultado inmediato**: lista "lo que revisaríamos primero" con símbolo de semáforo **orientativo** por señal (p. ej., juicio → rojo "no pagues todavía"; herencia → amarillo "posesión efectiva e inscripción especial de herencia"). Advertencia: no es un estudio de títulos.
- **Detrás**: `POST /api/diagnostico` → validación Zod → guardado en base de datos → notificación al equipo (correo + WhatsApp Business) → ficha en CRM con puntaje de prioridad (juicio, promesa firmada y plazo cercano suben la prioridad). Compromiso de respuesta **[POR CONFIRMAR]**.
- **Métricas**: inicio, paso 2, paso 3, envío, clic en WhatsApp; abandono por paso; tiempo a primer contacto.
- **Decisiones de diseño justificadas**: 3 pasos cortos y no un formulario largo (menos carga cognitiva y más avance percibido); el paso de contacto va **al final** (se pide el dato cuando ya se invirtió esfuerzo y se entiende el valor); señales opcionales como etiquetas (no bloquean el avance y dan contexto para el abogado).

### 4.3 Informe semáforo (especificación de producto)

Estructura de cada informe (web + PDF):

1. **Encabezado**: propiedad, rol de avalúo, Conservador, fecha de emisión, vigencia de los certificados usados.
2. **Resultado global**: verde / amarillo / rojo + una frase ("Se puede comprar, con 3 condiciones antes de firmar").
3. **Puntos**, cada uno con: estado, **qué encontramos**, **dónde consta** (fojas, número, año, registro; en tipografía mono) y **qué hacemos / quién lo resuelve**.
4. **Respaldo de proceso** ("Revisado por el equipo legal de Resguardo con la pauta de estudio de títulos") y alcance (qué no cubre el estudio).

Puntos estándar (salen de tus checklists y de las pautas BancoEstado):

| Área | Verde | Amarillo (ejemplos) | Rojo (ejemplos) |
|---|---|---|---|
| Dominio vigente y cadena de 10 años | Inscripción vigente ≤90 días, cadena completa | Falta un título intermedio; saldo de precio sin cancelación con acción no prescrita | Vendedor no es el poseedor inscrito |
| Capacidad y estado civil | Soltero/separado de bienes acreditado | Sociedad conyugal (art. 1749 CC), patrimonio reservado (art. 150) no acreditado, divorcio sin liquidación | Menor de edad sin autorización judicial |
| Herencias | Posesión efectiva, inscripción especial e impuesto acreditados | Falta inscripción especial o certificado del SII | Heredero no concurre y no hay forma de suplirlo |
| Gravámenes y prohibiciones (GP 30 años) | Sin anotaciones | Hipoteca bancaria (alzamiento con cláusula textual del banco), prohibición SERVIU caducada | Embargo de tercero no financiero, precautoria en juicio sobre el dominio (art. 1464 N°4 CC) |
| Municipal / urbanístico | Recepción final, sin expropiación | Ampliación sin regularizar, sin certificado de número | Afectación a utilidad pública que compromete la construcción |
| Deudas | Contribuciones, aseo y gastos comunes al día | Deuda menor que se paga en la firma | — |
| Personerías y mandatos | Vigentes y con facultades | Mandato con más de un año: pedir vigencia | Mandato revocado o sin facultad de vender |

Reglas: el resultado global es el peor estado de los puntos; un rojo siempre indica si tiene solución y el plazo estimado; ningún punto usa solo color.

### 4.4 Precios (página)

- Tres planes: **Estudio de títulos**, **Compra protegida** (destacado), **Venta protegida**. Montos del boceto ($190.000 / UF 14 / UF 18) son **hipótesis de trabajo** para validar con costos reales y disposición a pagar; están por debajo de la comisión de un corredor y por encima de un informe suelto, coherente con el posicionamiento.
- Tabla separada de **costos de terceros** (certificados del Conservador, derechos notariales, inscripción), con ejemplo de cálculo real y fecha.
- "Cuándo se paga" visible en cada plan.

### 4.5 Contenidos y SEO local

**Lo que sí:**
- **16 páginas regionales** con contenido propio: Conservadores de la región y qué comunas cubren, plazos observados de inscripción (datos propios cuando existan), particularidades (p. ej., certificados de deslindes del CBR de Santiago), notarías con que se ha trabajado **[solo si es verdad]**.
- **Páginas por Conservador** (fase 3), cuando haya experiencia real que contar.
- **Guías evergreen** (búsquedas con intención alta): estudio de títulos (qué revisa y cuánto cuesta), instrucción notarial y vale vista, comprar una casa sin corredor, vender una propiedad heredada (posesión efectiva, inscripción especial), alzamiento de hipoteca al vender, certificado de dominio vigente y de hipotecas y gravámenes, gastos de notaría y Conservador 2026, compraventa con vendedor casado en sociedad conyugal, señales de un aviso de venta fraudulento.
- Cada guía con autoría institucional ("Equipo Resguardo"), fecha de revisión, fuentes oficiales (BCN, SII, CBR) y CTA al diagnóstico.

**Lo que no:** generar cientos de páginas "Estudio de títulos en {comuna}" con el mismo texto. Las políticas de spam de Google tratan eso como *doorway pages* / contenido escalado y puede castigar todo el dominio.

**Datos estructurados (JSON-LD):** `LegalService` + `Organization` (nombre, `areaServed: Chile`, `priceRange`, contacto; sin `Person` hasta resolver el punto 3.5), `Service` + `Offer` por plan, `BreadcrumbList`, `Article` en guías, `FAQPage` en preguntas frecuentes (útil para comprensión semántica, pero desde 2023 Google muestra resultados enriquecidos de FAQ casi solo a sitios oficiales: no prometer esa mejora).

---

## 5. Sistema de diseño

### 5.1 Concepto: "Papel notarial y timbre"

El imaginario de una compraventa en Chile es papel, sello, fojas y firma. El sitio toma eso **sin caer en lo antiguo**: fondo de papel cálido, tinta casi negra, un **azul timbre** como único color de marca, datos registrales en tipografía de máquina y un **sello "En custodia"** como elemento gráfico propio. Resultado: se ve serio, legal y chileno, no fintech genérica.

### 5.2 Tipografías (todas con licencia SIL Open Font License, uso comercial libre)

| Uso | Familia | Por qué |
|---|---|---|
| Titulares, cifras grandes, preguntas | **Newsreader** (variable, eje de tamaño óptico 6–72) | Serif editorial con autoridad de documento; el tamaño óptico mantiene finura en titulares y legibilidad en tamaños medios. Menos visto que Fraunces o Playfair. |
| Texto e interfaz | **Instrument Sans** (variable 400–700) | Grotesca contemporánea, cálida, buena en formularios y móvil; evita el "look Inter" de toda plantilla. |
| Datos registrales, plazos, códigos | **IBM Plex Mono** (400/500) | Fojas, número, año y rol se leen como en un certificado. Señal de rigor. |

Producción: cargar con `next/font/google` (se autoalojan en el despliegue: sin petición a Google, mejor privacidad y LCP). Subconjunto `latin` + `latin-ext` (ñ, tildes, ’).

**Escala** (fluida con `clamp`): H1 42→76 px, H2 32→50 px, H3 18 px sans semibold / 20–28 px serif en tarjetas, cuerpo 17 px (16 px en móvil), interlínea 1,6; kicker 12,5 px versalitas con 0,14 em.

### 5.3 Paleta (tokens)

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--paper` | #F4F1EA | Fondo | — |
| `--card` | #FFFFFF | Superficies | — |
| `--ink` | #14171F | Texto principal | 16,6:1 sobre papel |
| `--ink-2` | #434957 | Texto secundario | ≈8:1 |
| `--ink-3` | #62677A | Notas, metadatos | ≈5:1 (AA) |
| `--seal` | #2E3C96 | Marca, CTA, foco | ≈9:1 con blanco |
| `--seal-soft` | #E7E9F6 | Fondos de estado "custodia" | — |
| `--g` / `--g-soft` | #1D6B45 / #E3F0E8 | Verde semáforo | texto AA |
| `--a` / `--a-fill` / `--a-soft` | #875700 / #BF820C / #FBF1DC | Amarillo: texto / símbolo / fondo | texto ≈5,5:1; símbolo ≥3:1 (1.4.11) |
| `--r` / `--r-soft` | #A8231B / #F8E4E1 | Rojo semáforo | texto AA |

Regla: **la marca nunca es verde, amarilla ni roja**. Así el semáforo conserva su significado y el CTA no parece un estado.

### 5.4 Grilla y espaciado

- Contenedor 1200 px; 12 columnas, medianil 24 px (escritorio), 20 px de margen en móvil; encabezados de sección en proporción 5/6 (titular / bajada) para generar asimetría editorial.
- Escala de espacio en base 4/8: 4, 8, 12, 16, 24, 32, 44, 64, 88, 128. Secciones 72–128 px según viewport.
- Puntos de quiebre: 640 / 900 / 1100 px.

### 5.5 Componentes (inventario para el repositorio)

Botón (primario, silencioso, WhatsApp, tamaño sm/md; altura mínima 48–52 px) · Selector de perspectiva (`aria-pressed`) · **Expediente** (línea de tiempo de 5 estados + bloque "Estado de tu plata" + sello) · **Símbolo de semáforo** (círculo con visto, triángulo con exclamación, octágono con equis, círculo punteado "por revisar") · **Fila de informe** (`<details>` con estado, fuente registral mono y "qué hacemos") · Veredicto · Lista editorial numerada (riesgos) · Pasos numerados + franja "dónde está tu plata" · Asistente de 3 pasos (radio-tarjetas, etiquetas, campos con error, consentimiento) · Tarjeta de plan · Bloque dúo (vendedor claro / corredor oscuro) · Lista de regiones · Acordeón FAQ · Etiqueta **Provisorio** (para trabajo interno; desaparece en producción) · Barra de acciones móvil · Pie legal.

### 5.6 Tono visual y verbal

- Frases cortas, segunda persona, español de Chile sin modismos de más ("plata", "pie", "vale vista"). Explicar el término técnico una vez y después usarlo.
- Nunca prometer absolutos; siempre decir **quién hace qué y cuándo**.
- Movimiento mínimo: transiciones de 150–200 ms, sin aparición de contenido por scroll; todo respeta `prefers-reduced-motion`.

### 5.7 Fotografía e ilustración

- **Nada de banco de imágenes** (apretones de manos, llaves doradas, familias sonriendo frente a casas de EE. UU.).
- Sesión propia (1 día, fotógrafo editorial): trabajo real con certificados y escrituras, sin rostros identificables mientras el punto 3.5 siga pendiente; manos firmando con huella en notaría (con permiso); fachadas reales de **regiones distintas** (Valparaíso, Temuco, Puerto Varas, Antofagasta, Ñuñoa); detalles de papel: timbres, fojas, vale vista anonimizado. Luz natural, tonos cálidos, poca saturación para dialogar con el papel.
- Ilustración: solo el sistema de símbolos y el sello; diagramas de proceso en línea fina.
- Técnica: `next/image` con AVIF/WebP, `sizes` correctos, imagen del hero con `priority` solo si es el elemento LCP (en el boceto el LCP es el H1, lo que favorece la velocidad).

---

## 6. Stack técnico

| Capa | Decisión | Fundamento |
|---|---|---|
| Framework | **Next.js (App Router, última versión estable), TypeScript estricto** | Server Components por defecto (poco JS), Metadata API, `sitemap.ts`/`robots.ts`, Route Handlers para el diagnóstico. |
| Hosting | **Vercel** (proyecto conectado a GitHub) | Vista previa por cada PR, rollbacks instantáneos, Analytics y Speed Insights integrados. |
| Estilos | CSS Modules + variables CSS (los tokens del boceto) | Cero dependencia de librería; los tokens se trasladan 1:1. (Tailwind es válido si el equipo lo prefiere; decidir una sola vez.) |
| Fuentes | `next/font/google` (Newsreader, Instrument Sans, IBM Plex Mono) | Autoalojadas, sin CLS por `size-adjust`. |
| Imágenes | `next/image` | AVIF/WebP, carga diferida, dimensiones fijas (CLS). |
| Contenido | MDX en el repo para guías y regiones (fase 1); CMS headless (Sanity u otro) si Javier necesita editar sin código (fase 3) | Empezar simple y versionado. |
| Formularios | Route Handler `POST /api/diagnostico`, validación **Zod** compartida cliente/servidor, protección antibots (Cloudflare Turnstile), rate limit | Datos personales: minimizar y validar en servidor. |
| Datos | Postgres administrado (Neon o Supabase, vía Marketplace de Vercel) | Diagnósticos, expedientes, eventos. |
| Mensajería | Correo transaccional (Resend o similar) + **WhatsApp Business Platform** para avisos | El cliente vive en WhatsApp. |
| CRM | HubSpot (plan gratis) o Pipedrive vía webhook | Seguimiento comercial de diagnósticos. |
| SEO | JSON-LD `LegalService`, `Service/Offer`, `BreadcrumbList`, `Article`, `FAQPage`; `es-CL`; canonical; Open Graph por página | Ver 4.5. |
| Analítica | Vercel Web Analytics + Speed Insights (sin cookies); GA4 o Plausible solo con consentimiento | Eventos: `diag_start`, `diag_step_2`, `diag_step_3`, `diag_submit`, `whatsapp_click`, `plan_cta_click`, `guide_read_75`. |
| Seguridad | Cabeceras (CSP, HSTS, Referrer-Policy, Permissions-Policy), secretos en Vercel, sin datos personales en logs | Ley 19.628 / 21.719. |

**Core Web Vitals (p75, móvil, objetivo):** LCP < 2,0 s · INP < 200 ms · CLS < 0,05. Presupuesto de JS en portada < 90 KB gzip; el diagnóstico es la única isla cliente (`"use client"`) y se carga cuando entra en pantalla.

**Accesibilidad WCAG 2.2 AA (criterios que más se rompen aquí):** 1.4.1 uso del color (semáforo con forma y texto), 1.4.3/1.4.11 contraste, 2.4.11 foco no oculto (header pegajoso y barra móvil: `scroll-padding-top` y margen inferior), 2.5.8 tamaño de objetivo ≥24 px (el boceto usa ≥40 px), 3.3.1/3.3.3 errores con texto y sugerencia, 3.3.7 entrada redundante (no repedir datos entre pasos), 4.1.3 mensajes de estado (`aria-live` del paso). Prueba manual con VoiceOver (iOS) y NVDA antes de cada lanzamiento.

**CI/CD en GitHub:**
- Rama `main` protegida; PR obligatorio con 1 revisión y checks en verde.
- GitHub Actions en cada PR: `pnpm lint` (ESLint + Prettier) → `pnpm typecheck` → `pnpm test` (Vitest: validaciones Zod, lógica de orientación del diagnóstico) → `pnpm build`.
- Integración de Vercel: despliegue de **vista previa** por PR; un workflow espera la URL (`deployment_status`) y corre **Playwright** (flujo del diagnóstico en 1440 y 390 px), **@axe-core/playwright** (0 violaciones serias/críticas) y **Lighthouse CI** con presupuestos (Performance ≥ 90 móvil, Accessibility = 100, SEO ≥ 95).
- Dependabot o Renovate semanal; *preview comments* de Vercel para revisión de Javier en el propio PR.

---

## 7. Hoja de ruta

| Fase | Plazo | Contenido | Sale cuando… |
|---|---|---|---|
| **0 · Decisiones** | Semana 1 | Aprobar boceto y sistema; decidir nombre (búsqueda INAPI clases 45 y 36 + NIC Chile), precios, razón social y datos públicos; redactar privacidad y términos; reunir cifras reales | Javier firma la lista de la sección 9 |
| **1 · Sitio mínimo que vende** | Semanas 2–5 | Repo + CI; portada; páginas de servicio; precios; cómo funciona; informe de ejemplo; diagnóstico con backend, CRM y WhatsApp; 16 regiones; 6 guías; legales; analítica | Lighthouse y axe en verde; 10 diagnósticos de prueba internos |
| **2 · Operación y confianza** | Mes 2–3 | Plantilla del informe semáforo (web + PDF), página de corredores con convenio, sesión de fotos, primeros casos reales anonimizados con permiso, testimonios verificados | Primeras 10 operaciones cerradas con el proceso |
| **3 · Escala** | Mes 3–6 | Seguimiento privado del expediente (`/expediente/[token]`), páginas por Conservador, más guías, pruebas A/B del hero y del precio, panel de corredores | Tasa diagnóstico→cliente medida y estable |
| **4 · Eficiencia** | Mes 6+ | Automatizar pedido de certificados donde los CBR lo permitan, plantillas de escritura según tu protocolo, integración con firma electrónica donde la ley la admita | Tiempo por operación medido y bajando |

**KPI iniciales:** conversión visita→diagnóstico (meta inicial 3–5 %), diagnóstico→llamada (≥60 %), llamada→contrato, tiempo a primer contacto (< 2 h hábiles), operaciones cerradas por mes, NPS al inscribir.

---

## 8. Tareas para Jules (agente de código de Google), listas para copiar

> Requisito previo: repo en GitHub creado por Javier (p. ej. `resguardo-web`), Jules conectado a ese repo, y `boceto-portada.html` + este documento copiados en `/docs/`. Darle **una tarea por vez**, revisar el PR y la vista previa de Vercel antes de la siguiente.

**T1 · Esqueleto del proyecto**
Contexto: sitio de Resguardo, ver `/docs/estrategia.md` sección 6. Tarea: crear app Next.js (App Router, TypeScript estricto, pnpm, ESLint + Prettier, `src/`), `lang="es-CL"`, layout raíz con `next/font/google` para Newsreader (opsz, 400–600, itálica 400), Instrument Sans (400–700) e IBM Plex Mono (400, 500), subconjuntos latin y latin-ext. Criterios: `pnpm build` sin advertencias; Lighthouse local sin peticiones a fonts.googleapis.com; README con comandos. Fuera de alcance: contenido.

**T2 · Tokens y estilos base**
Contexto: tokens en `/docs/boceto-portada.html` (`:root`). Tarea: `src/styles/tokens.css` con todas las variables (colores, radios, sombras, familias, ancho máximo, medianil), `globals.css` con reset, tipografía fluida, `:focus-visible`, enlace "Saltar al contenido" y `prefers-reduced-motion`. Criterios: valores idénticos al boceto; ningún color en duro fuera de tokens (agregar regla de Stylelint).

**T3 · Componentes de interfaz**
Tarea: crear en `src/components/ui/` Button (variantes primary/quiet/wa, tamaños sm/md, como `<a>` o `<button>`), PersonaToggle (`aria-pressed`), Kicker, SectionHead, ProvisionalTag (que no se renderice si `NEXT_PUBLIC_SHOW_PROVISIONAL !== "true"`), y TrafficSymbol (verde/amarillo/rojo/neutro en SVG con `role="img"` y `aria-label`). Criterios: historias o página `/dev/ui` (solo en desarrollo) que muestre todos; pruebas de Vitest para TrafficSymbol (etiquetas accesibles).

**T4 · Portada estática**
Tarea: implementar `/` replicando el boceto sección por sección (hero con expediente, franja de verdad, riesgos, proceso + "dónde está tu plata", informe de ejemplo, precios, vendedores/corredores, cobertura, FAQ, cierre, pie, barra móvil) como Server Components; textos en `src/content/home.ts`. Criterios: diferencia visual mínima con capturas `/docs/boceto-desktop.png` y `/docs/boceto-mobile.png`; sin desbordes horizontales a 320, 390, 768, 1024 y 1440 px; JS de la ruta < 90 KB gzip.

**T5 · Diagnóstico (cliente)**
Tarea: componente cliente `DiagnosticWizard` con los 3 pasos y el resultado del boceto; esquema Zod en `src/lib/diagnostico/schema.ts` (región entre las 16, comuna obligatoria, WhatsApp `^9\d{8}$`, consentimiento obligatorio); función pura `orientacion(flags, pago)` en `src/lib/diagnostico/orientacion.ts` que devuelve la lista de puntos. Criterios: foco se mueve al título de cada paso; `aria-live` anuncia "Paso N de 3"; errores con texto asociados por `aria-describedby`; pruebas unitarias de `orientacion` (todas las combinaciones de señales) y del esquema.

**T6 · Diagnóstico (servidor)**
Tarea: Route Handler `POST /api/diagnostico` que valide con el mismo esquema, verifique Cloudflare Turnstile, aplique rate limit por IP, guarde en Postgres (tabla `diagnosticos`, migración incluida) y envíe correo al equipo. Variables en `.env.example`. Criterios: responde 400 con errores por campo; nunca registra teléfono ni nombre en logs; prueba de integración con base de datos de prueba.

**T7 · Metadatos y datos estructurados**
Tarea: Metadata API por página (title, description, canonical, Open Graph, `es_CL`), `sitemap.ts`, `robots.ts`, y componente `JsonLd` con `LegalService` + `Organization` en el layout, `Service`/`Offer` en páginas de servicio, `FAQPage` en `/preguntas-frecuentes`, `BreadcrumbList` en páginas internas. Datos de empresa desde `src/content/empresa.ts` (con campos `porConfirmar`). Criterios: validación sin errores en el Rich Results Test y validator.schema.org (adjuntar capturas en el PR).

**T8 · CI en GitHub Actions**
Tarea: workflow `ci.yml` (lint, typecheck, Vitest, build) en cada PR; workflow `preview-e2e.yml` disparado por `deployment_status` de Vercel que corra Playwright contra la URL de vista previa en 1440×900 y 390×844, con @axe-core/playwright y Lighthouse CI (presupuestos: performance ≥ 90 móvil, accesibilidad 100, SEO ≥ 95, CLS ≤ 0,05). Criterios: el PR muestra los checks; un error de accesibilidad introducido a propósito hace fallar el check.

**T9 · Pruebas E2E del diagnóstico**
Tarea: Playwright: (1) flujo feliz comprador con herencia + juicio → resultado contiene "Posesión efectiva" y "Embargo o juicio vigente"; (2) validaciones de paso 2 y 3; (3) navegación solo con teclado de punta a punta; (4) selector Compro/Vendo cambia el H1. Criterios: estables 10 de 10 corridas.

**T10 · Páginas regionales**
Tarea: ruta `/cobertura/[region]` generada estáticamente desde `src/content/regiones/*.mdx` (16 archivos con frontmatter: nombre, número romano, conservadores, comunas). Plantilla con titular, Conservadores de la región, preguntas frecuentes locales y CTA. **No inventar datos**: si un campo no está, mostrar el componente `ProvisionalTag`. Criterios: 16 páginas en el sitemap; breadcrumb y JSON-LD correctos.

**T11 · Guías (MDX)**
Tarea: sistema de guías `/guias/[slug]` con frontmatter (título, descripción, autor, fecha de revisión, fuentes), índice con tabla de contenidos, tiempo de lectura, JSON-LD `Article`, CTA al diagnóstico al final y a mitad de texto. Cargar 6 guías con el contenido que entregue Javier (dejar archivos con `TODO` donde falte). Criterios: tipografía de lectura 65–75 caracteres por línea; enlaces internos entre guías.

**T12 · Página de precios**
Tarea: `/precios` con los 3 planes desde `src/content/precios.ts` (montos en UF o CLP, flag `provisorio`), tabla de costos de terceros y FAQ de pagos. Valor de la UF del día desde una API pública confiable con caché de 24 h y respaldo si falla. Criterios: la conversión UF→CLP muestra fecha; si la API falla, se muestra solo el valor en UF.

**T13 · Consentimiento y analítica**
Tarea: Vercel Analytics y Speed Insights; eventos personalizados (`diag_start`, `diag_step_2`, `diag_step_3`, `diag_submit`, `whatsapp_click`, `plan_cta_click`); banner de consentimiento accesible solo si se agrega una herramienta con cookies. Criterios: ningún evento contiene datos personales; documentación de eventos en `/docs/analitica.md`.

**T14 · Cabeceras de seguridad**
Tarea: en `next.config` agregar CSP (permitir solo lo necesario: Vercel, Turnstile), HSTS, Referrer-Policy `strict-origin-when-cross-origin`, Permissions-Policy restrictiva, `X-Content-Type-Options`. Criterios: securityheaders.com nota A en la vista previa; el sitio funciona sin errores de CSP en consola.

**T15 · Página 404 y estados de error**
Tarea: `not-found.tsx` y `error.tsx` con el sistema de diseño, enlace al diagnóstico y a WhatsApp; formulario muestra error de red con opción de reintento sin perder datos. Criterios: prueba E2E simulando caída de `/api/diagnostico`.

---

## 9. Lo que necesita aprobación de Javier

**Ya decidido:** (a) garantía "si la operación no se concreta, no pagas", con operación concretada = escritura enviada a la notaría; (b) el sitio no menciona a un abogado con nombre, firma ni habilitación: el respaldo es de equipo y proceso.

**Pendiente de aprobación ahora:**

1. **Dirección visual** del boceto (papel notarial, azul timbre, Newsreader/Instrument Sans/Plex Mono) y estructura de la portada.
2. **Mensaje central**: "Tu plata no se mueve hasta que la propiedad es tuya" / "Firmas sabiendo que la plata ya existe".
3. **Redacción de la nota que define "concretada"**, tal como aparece en el hero, los planes y el FAQ del boceto.
4. **Precios** y si se muestran en UF o pesos (boceto: $190.000 / UF 14 / UF 18, provisorios), y la regla del **estudio de títulos suelto** (se paga al encargarlo y se descuenta si se contrata la compra).
5. **Respaldo de proceso**: confirmar que se puede afirmar "pauta de revisión escrita" y "el mismo equipo en todos los pasos".
6. **Nombre**: mantener *Resguardo* (a favor: se entiende, evoca la "carta de resguardo" bancaria; en contra: palabra genérica, difícil de proteger y probablemente compartida con empresas de seguridad) tras búsqueda en INAPI (clases 36 y 45) y NIC Chile. Alternativas para chequear: **Fojas**, **Inscrita**, **Título Claro**. Recomendación: mantener *Resguardo* si el registro está libre, con descriptor "Compraventas protegidas".
7. **Cifras reales** para la franja de confianza (operaciones, años de experiencia, notarías) o confirmar que se publican sin cifras.
8. **Plazos** que se pueden prometer (respuesta al diagnóstico, estudio de títulos).
9. **Servicio de venta**: qué portales incluye la publicación y si hay visitas/fotos.
10. **Corredores**: condiciones del convenio (tarifa preferente, sin exclusividad).
11. **Datos legales** de la empresa (razón social, RUT, domicilio) y textos de privacidad y términos (revisión legal propia), incluida la definición de "concretada".
12. Autorizar que las **plantillas internas** (checklists de 2014 con membrete "Grupo Reval-Escrituras.cl") se usen solo como base metodológica y no se publiquen ni se citen con ese nombre.

**Pendiente para después (no bloquea la fase 1):**

13. **Presentación de personas** (sección 3.5): si se muestra a abogados reales con nombre, foto, habilitación y firma en el informe.
