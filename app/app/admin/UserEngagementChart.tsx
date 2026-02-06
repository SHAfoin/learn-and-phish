"use client";

import { useEffect, useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

// Interface pour les données d'engagement utilisateur
interface UserEngagementData {
  date: string;
  activeUsers: number;
}

const getUserEngagement = async (): Promise<UserEngagementData[]> => {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/user-engagement').then(res => res.json());

  const mockedData: UserEngagementData[] = [
    { date: "2025-06-17", activeUsers: 18 },
    { date: "2025-06-18", activeUsers: 22 },
    { date: "2025-06-19", activeUsers: 21 },
    { date: "2025-06-20", activeUsers: 26 },
    { date: "2025-06-21", activeUsers: 24 },
    { date: "2025-06-22", activeUsers: 28 },
    { date: "2025-06-23", activeUsers: 25 },
    { date: "2025-06-24", activeUsers: 29 },
    { date: "2025-06-25", activeUsers: 27 },
    { date: "2025-06-26", activeUsers: 31 },
    { date: "2025-06-27", activeUsers: 30 },
    { date: "2025-06-28", activeUsers: 34 },
    { date: "2025-06-29", activeUsers: 32 },
    { date: "2025-06-30", activeUsers: 36 },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 600); // Simule un délai de 600ms
  });
};

const chartConfig = {
  activeUsers: {
    label: "Utilisateurs actifs",
    color: "var(--color-ocean-600)",
  },
} satisfies ChartConfig;

export default function UserEngagementChart() {
  const [data, setData] = useState<UserEngagementData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // TODO: Implémenter l'appel API réel
    const fetchEngagement = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await getUserEngagement();
        setData(fetchedData);

        // Calcule le nombre total d'utilisateurs (dernière entrée)
        if (fetchedData.length > 0) {
          const lastEntry = fetchedData[fetchedData.length - 1];
          setTotalUsers(lastEntry.activeUsers);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'engagement:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEngagement();
  }, []);

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="border-b border-neutral-300 flex items-center mb-5 h-18">
        <p className="text-neutral-500 text-sm flex-1 p-5">
          Nombre d'utilisateurs actifs durants les 2 derniers mois
        </p>

        <div className="bg-neutral-100 border-l h-full border-neutral-300 py-4 px-8 flex justify-center items-end gap-4">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-neutral-500 text-sm">Chargement...</span>
            </div>
          ) : (
            <>
              <p className="text-ocean-950 font-bold text-4xl">{totalUsers}</p>
              <p className="text-neutral-500 text-md">inscrits au total</p>
            </>
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
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="fillActiveUsers"
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
                fill="url(#fillActiveUsers)"
                stroke="var(--color-activeUsers)"
              />
            </AreaChart>
          </ChartContainer>
        )}
      </div>
    </div>
  );
}
