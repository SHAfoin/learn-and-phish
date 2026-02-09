import { OSINTScan, SiteExpose } from "./types";

// Sites exposés pour les scans OSINT
export const sitesExposesExemples: SiteExpose[] = [
  { id: "1", nom: "Deezer", urlExposition: "https://deezer.com/breach" },
  { id: "2", nom: "Wakanime", urlExposition: "https://wakanime.tv/leak" },
  { id: "3", nom: "Wattpad", urlExposition: "https://wattpad.com/breach" },
  { id: "4", nom: "Netflix", urlExposition: "https://netflix.com/leak" },
  { id: "5", nom: "Données françaises" },
];

// Scans OSINT placeholder
export const osintScans: OSINTScan[] = [
  {
    id: "scan-1",
    userId: 1,
    dateScan: new Date("2026-02-05T14:30:00"),
    scoreExposition: 5,
    sitesExposés: sitesExposesExemples,
    statut: "terminé",
  },
  {
    id: "scan-2",
    userId: 1,
    dateScan: new Date("2026-01-15T10:20:00"),
    scoreExposition: 12,
    sitesExposés: [
      sitesExposesExemples[0],
      sitesExposesExemples[1],
      sitesExposesExemples[4],
    ],
    statut: "terminé",
  },
];
