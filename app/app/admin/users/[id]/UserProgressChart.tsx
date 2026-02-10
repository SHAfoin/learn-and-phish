"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "Autre", desktop: 56 },
  { month: "Protection des données", desktop: 12 },
  { month: "Sécurité des comptes", desktop: 3 },
  { month: "Phishing", desktop: 56 },
  { month: "Vishing", desktop: 87 },
  { month: "Web", desktop: 1 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-sand-500)",
  },
} satisfies ChartConfig;

export default function UserProgressChart() {
  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6">
      <div className="h-[300px] flex items-center justify-center rounded-lg">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideIndicator />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
