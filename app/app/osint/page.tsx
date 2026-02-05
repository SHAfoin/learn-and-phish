"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Search } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
  PolarGrid,
} from "recharts";
import { groupesOSINT } from "@/lib/placeholder/osint";

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

export default function page() {
  const [searchDomain, setSearchDomain] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("tous");

  // Score d'exposition fixe entre 0 et 100
  const scoreExposition = 5;
  const nombreSitesExposés = 47;
  const chartData = [
    {
      visitors: scoreExposition,
      fill: getColorForScore(scoreExposition),
    },
  ];

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
            OSINT
          </h1>
          <p className="text-ocean-700 text-lg mt-2">
            Rechercher des empreintes numériques sur plusieurs plateformes
          </p>
        </div>
      </div>

      {/* Scan Status Banner */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-[15px] p-4 text-white flex items-center justify-between shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]">
        <div>
          <p className="font-bold">Statut : Terminé</p>
          <p className="text-sm text-blue-100">
            Dernier Scan réalisé : DD/MM/YYYY à HH:MM:SS
          </p>
        </div>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white">
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

            {/* Groupes List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {groupesOSINT.map((groupe) => (
                <div
                  key={groupe.id}
                  className="flex items-center gap-2 p-2 hover:bg-neutral-100 rounded"
                >
                  <span className="text-sm text-neutral-700">{groupe.nom}</span>
                </div>
              ))}
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
                  {nombreSitesExposés}
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
    </div>
  );
}
