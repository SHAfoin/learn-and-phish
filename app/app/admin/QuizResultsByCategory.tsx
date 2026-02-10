"use client";

import { useEffect, useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface QuizCategoryData {
  category: string;
  success: number;
  failure: number;
}

interface QuizResultsByCategoryProps {
  data?: QuizCategoryData[];
}

// Simule un appel API pour récupérer les résultats par catégorie
const getQuizResultsByCategory = async (): Promise<QuizCategoryData[]> => {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/quiz-results-by-category').then(res => res.json());

  const mockedData: QuizCategoryData[] = [
    { category: "Phishing", success: 145, failure: 32 },
    { category: "Mots de passe", success: 132, failure: 45 },
    { category: "Vishing", success: 98, failure: 28 },
    { category: "Ingénierie sociale", success: 87, failure: 41 },
    { category: "Sécurité réseau", success: 76, failure: 19 },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 500);
  });
};

const chartConfig = {
  success: {
    label: "Réussis",
    color: "var(--color-ocean-600)",
  },
  failure: {
    label: "Ratés",
    color: "var(--color-sand-500)",
  },
} satisfies ChartConfig;

export default function QuizResultsByCategory({
  data: propData,
}: QuizResultsByCategoryProps = {}) {
  const [data, setData] = useState<QuizCategoryData[]>(propData || []);
  const [isLoading, setIsLoading] = useState(!propData);
  const hasData = data.length > 0;

  useEffect(() => {
    // Si les données sont fournies en props, les utiliser directement
    if (propData) {
      setData(propData);
      setIsLoading(false);
      return;
    }

    // Sinon, récupérer les données par défaut
    // TODO: Implémenter l'appel API réel
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await getQuizResultsByCategory();
        setData(fetchedData);
      } catch (error) {
        console.error("Erreur lors du chargement des résultats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [propData]);

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden flex flex-col gap-4">
      {isLoading ? (
        <div className="h-64 w-full flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-neutral-500">Chargement...</span>
          </div>
        </div>
      ) : hasData ? (
        <ChartContainer config={chartConfig} className="h-64">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 12)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="success"
              stackId="a"
              fill="var(--color-success)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="failure"
              stackId="a"
              fill="var(--color-failure)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      ) : (
        <div className="h-64 w-full flex items-center justify-center">
          <span className="text-neutral-500">
            Aucune statistique disponible.
          </span>
        </div>
      )}
    </div>
  );
}
