"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
  PolarGrid,
} from "recharts";
import { QuizStats } from "@/lib/placeholder";

interface QuizStatsRadialChartsProps {
  stats: QuizStats;
}

export default function QuizStatsRadialCharts({
  stats,
}: QuizStatsRadialChartsProps) {
  const successData = [
    {
      name: "success",
      value: stats.tauxReussite,
      fill: "var(--color-green-600)",
    },
  ];

  const completionData = [
    {
      name: "completion",
      value: stats.tauxCompletion,
      fill: "var(--color-ocean-600)",
    },
  ];

  const successChartConfig = {
    value: {
      label: "Taux de réussite",
    },
    success: {
      label: "Réussite",
      color: "var(--color-green-600)",
    },
  } satisfies ChartConfig;

  const completionChartConfig = {
    value: {
      label: "Taux de complétion",
    },
    completion: {
      label: "Complétion",
      color: "var(--color-ocean-600)",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex p-6 bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] h-full">
      {/* Taux de réussite */}
      <div className="flex-1 flex flex-col items-center gap-3">
        <h3 className="text-xl font-bold text-ocean-950">Taux de réussite</h3>
        <ChartContainer
          config={successChartConfig}
          className="w-full max-w-[250px] h-[300px]"
        >
          <RadialBarChart
            data={successData}
            startAngle={90}
            endAngle={90 + (stats.tauxReussite / 100) * 360}
            innerRadius={80}
            outerRadius={130}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
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
                          y={viewBox.cy || 0}
                          className="fill-foreground text-5xl font-bold"
                        >
                          {stats.tauxReussite}%
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

      {/* Taux de complétion */}
      <div className="flex-1 flex flex-col items-center gap-3">
        <h3 className="text-xl font-bold text-ocean-950">Taux de complétion</h3>

        <ChartContainer
          config={completionChartConfig}
          className="w-full max-w-[250px] h-[300px]"
        >
          <RadialBarChart
            data={completionData}
            startAngle={90}
            endAngle={90 + (stats.tauxCompletion / 100) * 360}
            innerRadius={80}
            outerRadius={130}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
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
                          y={(viewBox.cy || 0) - 10}
                          className="fill-foreground text-5xl font-bold"
                        >
                          {stats.tentativesTerminees}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 25}
                          className="fill-neutral-500 text-sm"
                        >
                          /{stats.totalTentatives}
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
  );
}
