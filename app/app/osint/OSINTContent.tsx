"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartContainer } from "@/components/ui/chart";
import { Search } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
  PolarGrid,
} from "recharts";
import { osintScans } from "@/lib/placeholder/osint";
import { OSINTScan, SiteExpose } from "@/lib/placeholder/types";

const chartConfig = {
  visitors: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
};

// Fonction pour déterminer la couleur en fonction du score
const getColorForScore = (score: number): string => {
  if (score < 20) return "hsl(120, 70%, 50%)"; // Vert
  if (score < 40) return "hsl(60, 70%, 50%)"; // Jaune
  if (score < 60) return "hsl(45, 70%, 50%)"; // Orange
  if (score < 80) return "hsl(20, 70%, 50%)"; // Orange-Rouge
  return "hsl(0, 70%, 50%)"; // Rouge
};

// Fonction pour récupérer le dernier scan OSINT d'un utilisateur
// À l'avenir, cette fonction fera un appel API
async function fetchLastOSINTScan(userId: number): Promise<OSINTScan | null> {
  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Implémenter l'appel API au backend
  // const response = await fetch(`/api/osint/scans/latest?userId=${userId}`);
  // const data = await response.json();
  // return data;

  // Pour l'instant, retourner les données placeholder
  const userScans = osintScans.filter((scan) => scan.userId === userId);
  if (userScans.length === 0) return null;

  // Retourner le scan le plus récent
  return userScans.sort(
    (a, b) => b.dateScan.getTime() - a.dateScan.getTime(),
  )[0];
}

// Fonction pour lancer un nouveau scan OSINT
async function lancerNouveauScan(userId: number): Promise<void> {
  // TODO: Implémenter l'appel API pour lancer un nouveau scan
  // const response = await fetch('/api/osint/scans', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ userId })
  // });
  // const data = await response.json();
  // return data;

  console.log(
    `Lancement d'un nouveau scan OSINT pour l'utilisateur ${userId}...`,
  );
}

export default function OSINTContent() {
  const [searchDomain, setSearchDomain] = useState("");
  const [sitesExposés, setSitesExposés] = useState<SiteExpose[]>([]);
  const [scoreExposition, setScoreExposition] = useState(0);
  const [dateDernierScan, setDateDernierScan] = useState<Date | null>(null);
  const [statutScan, setStatutScan] = useState<
    "en cours" | "terminé" | "échoué"
  >("terminé");
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Récupérer l'ID utilisateur depuis le contexte d'authentification
  const currentUserId = 1;

  // Charger les données au montage du composant
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const scan = await fetchLastOSINTScan(currentUserId);

        if (scan) {
          setSitesExposés(scan.sitesExposés);
          setScoreExposition(scan.scoreExposition);
          setDateDernierScan(scan.dateScan);
          setStatutScan(scan.statut);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [currentUserId]);

  // Fonction pour lancer un nouveau scan
  const handleNouveauScan = async () => {
    try {
      await lancerNouveauScan(currentUserId);
      // Recharger les données après le scan
      const scan = await fetchLastOSINTScan(currentUserId);
      if (scan) {
        setSitesExposés(scan.sitesExposés);
        setScoreExposition(scan.scoreExposition);
        setDateDernierScan(scan.dateScan);
        setStatutScan(scan.statut);
      }
    } catch (error) {
      console.error("Erreur lors du lancement du scan:", error);
    }
  };

  const chartData = [
    {
      visitors: scoreExposition,
      fill: getColorForScore(scoreExposition),
    },
  ];

  // Filtrer les sites exposés selon la recherche
  const sitesFiltres = sitesExposés.filter((site) =>
    site.nom.toLowerCase().includes(searchDomain.toLowerCase()),
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <p className="text-neutral-500">Chargement des données...</p>
      </div>
    );
  }

  return (
    <>
      {/* Scan Status Banner */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-[15px] p-4 text-white flex items-center justify-between shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]">
        <div>
          <p className="font-bold">
            Statut :{" "}
            {statutScan === "terminé"
              ? "Terminé"
              : statutScan === "en cours"
                ? "En cours"
                : "Échoué"}
          </p>
          <p className="text-sm text-blue-100">
            Dernier Scan réalisé :{" "}
            {dateDernierScan
              ? dateDernierScan.toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }) +
                " à " +
                dateDernierScan.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              : "Aucun scan effectué"}
          </p>
        </div>
        <Button
          className="bg-blue-700 hover:bg-blue-800 text-white"
          onClick={handleNouveauScan}
        >
          Nouveau scan
        </Button>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Search and Groupes */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Search Domain */}
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="www.example.com"
                value={searchDomain}
                onChange={(e) => setSearchDomain(e.target.value)}
                className="border-ocean-700"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="size-4" />
              </Button>
            </div>

            {/* Sites Exposés List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {sitesFiltres.length === 0 ? (
                <div className="p-4 text-center text-neutral-500 text-sm">
                  Aucun site exposé trouvé
                </div>
              ) : (
                sitesFiltres.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center gap-2 p-2 hover:bg-neutral-100 rounded"
                  >
                    <span className="text-sm text-neutral-700">{site.nom}</span>
                    {site.urlExposition && (
                      <a
                        href={site.urlExposition}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        (voir)
                      </a>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Single Chart Column */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {/* Domaine d'exposition Chart */}
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
            <div className="h-32 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg">
              <div className="text-center">
                <p className="text-6xl font-bold text-ocean-950">
                  {sitesExposés.length}
                </p>
                <p className="text-sm text-neutral-600 mt-2">sites exposés</p>
              </div>
            </div>
          </div>

          {/* Score d'exposition Chart */}
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
            <h3 className="text-sm font-bold text-ocean-950 mb-4">
              Score d&apos;exposition
            </h3>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={chartData}
                startAngle={90}
                endAngle={90 + scoreExposition * 3.6}
                innerRadius={80}
                outerRadius={140}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[86, 74]}
                />
                <RadialBar
                  dataKey="visitors"
                  background
                  fill={chartData[0].fill}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              {scoreExposition}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              /100
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </>
  );
}
