"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { QuizAttemptData } from "@/lib/placeholder";

interface QuizActivityChartProps {
  data: QuizAttemptData[];
}

const chartConfig = {
  tentatives: {
    label: "Tentatives",
    color: "var(--color-ocean-600)",
  },
  reussites: {
    label: "Réussites",
    color: "var(--color-green-500)",
  },
} satisfies ChartConfig;

export default function QuizActivityChart({ data }: QuizActivityChartProps) {
  const hasData = data.length > 0;

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 h-full">
      {hasData ? (
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="tentatives"
              fill="var(--color-ocean-600)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="reussites"
              fill="var(--color-green-500)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      ) : (
        <div className="h-80 w-full flex items-center justify-center">
          <p className="text-neutral-400">
            Aucune donnée d&apos;activité disponible
          </p>
        </div>
      )}
    </div>
  );
}
