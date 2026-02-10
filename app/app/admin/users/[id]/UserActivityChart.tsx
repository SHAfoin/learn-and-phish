"use client";

import { useEffect, useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

interface UserActivityData {
  date: string;
  activeUsers: number;
}

const chartConfig = {
  activeUsers: {
    label: "Activité utilisateur",
    color: "var(--color-ocean-600)",
  },
} satisfies ChartConfig;

interface UserActivityChartProps {
  data?: UserActivityData[];
  title?: string;
}

export default function UserActivityChart({
  data: propData,
  title = "Activité de l'utilisateur par periode",
}: UserActivityChartProps = {}) {
  const [data, setData] = useState<UserActivityData[]>(propData || []);
  const [isLoading, setIsLoading] = useState(!propData);
  const [lastValue, setLastValue] = useState(0);
  const hasData = data.length > 0;

  useEffect(() => {
    if (propData) {
      setData(propData);
      setIsLoading(false);
      if (propData.length > 0) {
        const lastEntry = propData[propData.length - 1];
        setLastValue(lastEntry.activeUsers);
      }
      return;
    }

    setIsLoading(false);
  }, [propData]);

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="border-b border-neutral-300 flex items-center mb-5 h-18">
        <p className="text-neutral-500 text-sm flex-1 p-5">{title}</p>

        <div className="bg-neutral-100 border-l h-full border-neutral-300 py-4 px-8 flex justify-center items-end gap-4">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-neutral-500 text-sm">Chargement...</span>
            </div>
          ) : hasData ? (
            <>
              <p className="text-ocean-950 font-bold text-4xl">{lastValue}</p>
              <p className="text-neutral-500 text-md">activités</p>
            </>
          ) : (
            <p className="text-neutral-500 text-sm">Aucune statistique</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 items-center">
        {isLoading ? (
          <div className="h-[250px] w-full flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-neutral-500">
                Chargement du graphique...
              </span>
            </div>
          </div>
        ) : hasData ? (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="fillUserActivity"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--color-activeUsers)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-activeUsers)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("fr-FR", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                labelClassName="w-40"
                cursor={true}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("fr-FR", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="activeUsers"
                type="natural"
                fill="url(#fillUserActivity)"
                stroke="var(--color-activeUsers)"
              />
            </AreaChart>
          </ChartContainer>
        ) : (
          <div className="h-[250px] w-full flex items-center justify-center">
            <span className="text-neutral-500">
              Aucune statistique disponible.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
