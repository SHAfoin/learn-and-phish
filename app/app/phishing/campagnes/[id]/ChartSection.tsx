"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, Label } from "recharts";
import {
  CampagneUtilisateur,
  CampagneUtilisateurStatut,
} from "@/lib/placeholder";

const chartConfig = {
  "email envoyé": {
    label: "Email envoyé",
    color: "var(--chart-1)",
  },
  "email ouvert": {
    label: "Email ouvert",
    color: "var(--chart-2)",
  },
  "lien cliquée": {
    label: "Lien cliqué",
    color: "var(--chart-3)",
  },
  "données envoyées": {
    label: "Données envoyées",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const getStatutColor = (statut: CampagneUtilisateurStatut): string => {
  switch (statut) {
    case "email envoyé":
      return "#6fb68f";
    case "email ouvert":
      return "#0066cc";
    case "lien cliquée":
      return "#d97706";
    case "données envoyées":
      return "#dc2626";
    default:
      return "#999999";
  }
};

interface ChartSectionProps {
  utilisateurs: CampagneUtilisateur[];
}

export default function ChartSection({ utilisateurs }: ChartSectionProps) {
  const statutCounts: Record<CampagneUtilisateurStatut, number> = {
    "email envoyé": 0,
    "email ouvert": 0,
    "lien cliquée": 0,
    "données envoyées": 0,
  };

  utilisateurs.forEach((user) => {
    statutCounts[user.statut]++;
  });

  const chartData = Object.entries(statutCounts)
    .filter(([_, count]) => count > 0)
    .map(([statut, count]) => ({
      name: statut,
      value: count,
      fill: getStatutColor(statut as CampagneUtilisateurStatut),
    }));

  const totalUtilisateurs = utilisateurs.length;

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-ocean-950">
          Distribution des statuts
        </h2>
      </div>
      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-[250px] text-neutral-400">
          <p>Aucune donnée disponible</p>
        </div>
      ) : (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalUtilisateurs.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {totalUtilisateurs === 1
                            ? "Utilisateur"
                            : "Utilisateurs"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      )}
    </div>
  );
}
