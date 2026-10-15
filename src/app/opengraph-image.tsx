import { ImageResponse } from "next/og";

export const alt = "Resguardo · Tu plata no se mueve hasta que la propiedad es tuya.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#F4F1EA",
        color: "#14171F",
        borderTop: "16px solid #2E3C96",
      }}
    >
      <div style={{ fontSize: 36, color: "#2E3C96", letterSpacing: -1 }}>Resguardo</div>
      <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
        Tu plata no se mueve hasta que la propiedad es tuya.
      </div>
      <div style={{ fontSize: 28, color: "#434957" }}>
        Estudio de títulos · Escritura · Vale vista en custodia · Inscripción
      </div>
    </div>,
    size,
  );
}
