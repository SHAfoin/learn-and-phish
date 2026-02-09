"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartData = [
  { difficulty: "easy", successRate: 85, fill: "var(--color-emerald-600)" },
  { difficulty: "medium", successRate: 62, fill: "var(--color-amber-600)" },
  { difficulty: "hard", successRate: 41, fill: "var(--color-red-600)" },
];

const chartConfig = {
  successRate: {
    label: "% de réussite",
  },
  easy: {
    label: "Facile",
    color: "var(--color-emerald-600)",
  },
  medium: {
    label: "Moyen",
    color: "var(--color-amber-600)",
  },
  hard: {
    label: "Difficile",
    color: "var(--color-red-600)",
  },
} satisfies ChartConfig;

export default function QuizResultsByDifficulty() {
  return (
    <div className="bg-neutral-50 rounded-[15px] xl:min-h-[250px] min-h-[350px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden flex flex-col gap-4">
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col items-center gap-3">
          <h3 className="text-base font-semibold text-neutral-700">
            Quiz faciles
          </h3>
          <ChartContainer
            config={chartConfig}
            className="flex-1 min-w-0 w-full"
          >
            <RadialBarChart
              data={[chartData[0]]}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="successRate" background cornerRadius={10} />
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
                            {chartData[0].successRate}%
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
        <div className="flex-1 flex flex-col items-center gap-3">
          <h3 className="text-base font-semibold text-neutral-700">
            Quiz moyens
          </h3>
          <ChartContainer
            config={chartConfig}
            className="flex-1 min-w-0 w-full"
          >
            <RadialBarChart
              data={[chartData[1]]}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="successRate" background cornerRadius={10} />
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
                            {chartData[1].successRate}%
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
        <div className="flex-1 flex flex-col items-center gap-3">
          <h3 className="text-base font-semibold text-neutral-700">
            Quiz difficiles
          </h3>
          <ChartContainer
            config={chartConfig}
            className="flex-1 min-w-0 w-full"
          >
            <RadialBarChart
              data={[chartData[2]]}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="successRate" background cornerRadius={10} />
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
                            {chartData[2].successRate}%
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
  );
}
