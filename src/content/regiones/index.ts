import type { RegionData } from "./types";
import { aricaParinacota } from "./arica-y-parinacota";
import { tarapaca } from "./tarapaca";
import { antofagasta } from "./antofagasta";
import { atacama } from "./atacama";
import { coquimbo } from "./coquimbo";
import { valparaiso } from "./valparaiso";
import { metropolitana } from "./metropolitana";
import { ohiggins } from "./ohiggins";
import { maule } from "./maule";
import { nuble } from "./nuble";
import { biobio } from "./biobio";
import { laAraucania } from "./la-araucania";
import { losRios } from "./los-rios";
import { losLagos } from "./los-lagos";
import { aysen } from "./aysen";
import { magallanes } from "./magallanes";

export * from "./types";

export const todasLasRegiones: RegionData[] = [
  aricaParinacota,
  tarapaca,
  antofagasta,
  atacama,
  coquimbo,
  valparaiso,
  metropolitana,
  ohiggins,
  maule,
  nuble,
  biobio,
  laAraucania,
  losRios,
  losLagos,
  aysen,
  magallanes,
];

export function getAllRegiones(): RegionData[] {
  return todasLasRegiones;
}

export function getRegionBySlug(slug: string): RegionData | undefined {
  return todasLasRegiones.find((r) => r.slug === slug);
}
