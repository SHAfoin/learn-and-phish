"use client";

import { ChartContainer } from "@/components/ui/chart";
import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
  PolarGrid,
} from "recharts";

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

interface UserExposureScoreProps {
  score: number;
}

export default function UserExposureScore({ score }: UserExposureScoreProps) {
  const chartData = [
    {
      visitors: score,
      fill: getColorForScore(score),
    },
  ];

  return (
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
          endAngle={90 + score * 3.6}
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
          <RadialBar dataKey="visitors" background fill={chartData[0].fill} />
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
                        {score}
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
  );
}
