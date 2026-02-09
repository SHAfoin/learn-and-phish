import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { getUserById, getUserStatsById } from "@/lib/placeholder";
import UserInfoCard from "./UserInfoCard";
import UserProgressChart from "./UserProgressChart";
import UserActivityTable from "./UserActivityTable";
import UserExposureScore from "../../../osint/UserExposureScore";
import QuizResultsByCategory from "../../QuizResultsByCategory";
import QuizResultsByDifficulty from "../../QuizResultsByDifficulty";
import UserActivityChart from "./UserActivityChart";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const userId = Number(id);

  // Validate ID
  if (Number.isNaN(userId)) {
    notFound();
  }

  // TODO: Ajouter le changement de période de temps avec les paramètres de recherche
  const timePeriod = "Ce mois-ci";

  // Fetch user data
  const user = await getUserById(userId);
  if (!user) {
    notFound();
  }

  // Fetch user statistics
  const stats = await getUserStatsById(userId);

  // Prepare data for charts
  // Transform activiteData to match UserEngagementData interface
  const activityChartData =
    stats?.activiteData?.map((item) => ({
      date: `2025-09-${item.date.split("/")[0]}`,
      activeUsers: item.userCount,
    })) || [];

  // Transform categorie data to match QuizCategoryData interface
  const categoryData =
    stats?.quizResultsByCategory?.map((item) => ({
      category: item.name,
      success: item.correct,
      failure: item.incorrect,
    })) || [];

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4 py-8">
      {/* Page Header with Back Button and Time Period Selector */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/app/admin">
            <img
              src="/svg/icons/arrow-blue.svg"
              alt="Flèche"
              className="w-12 h-12 rotate-180"
            />
          </Link>
          <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
            {user.prenom} {user.nom}
          </h1>
        </div>

        {/* Time Period Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-neutral-200 bg-neutral-50 text-ocean-950 hover:bg-neutral-100 gap-2"
            >
              {timePeriod}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem disabled>Ce mois-ci</DropdownMenuItem>
            <DropdownMenuItem disabled>Ce trimestre</DropdownMenuItem>
            <DropdownMenuItem disabled>Cette année</DropdownMenuItem>
            <DropdownMenuItem disabled>Tous les temps</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content - Full Width Sections */}
      <div className="flex flex-col gap-6">
        {/* User Info Card */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-ocean-950 font-bold">Informations</h2>
          <UserInfoCard user={user} />
        </div>
        {/* Activity Chart */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Graphique d'activité
          </h2>
          <UserActivityChart
            data={activityChartData}
            title="Activité de l'utilisateur par période"
          />
        </div>
        {/* Progress and Quiz by Difficulty Row */}
        {stats && (
          <div className="flex gap-6">
            <div className="flex-1 gap-2 flex flex-col">
              <h2 className="text-2xl text-ocean-950 font-bold">Progression</h2>
              <UserProgressChart />
            </div>
            <div className="flex-2 gap-2 flex flex-col">
              <h2 className="text-2xl text-ocean-950 font-bold">
                Quiz par difficulté
              </h2>
              <QuizResultsByDifficulty data={stats.quizResultsByDifficulty} />
            </div>
          </div>
        )}

        {/* Exposure Score and Quiz by Category Row */}
        {stats && (
          <div className="flex gap-6">
            <div className="flex-1 gap-2 flex flex-col">
              <h2 className="text-2xl text-ocean-950 font-bold">
                Score d'exposition
              </h2>
              <UserExposureScore score={stats.scoreExposition} />
            </div>
            <div className="flex-2 gap-2 flex flex-col">
              <h2 className="text-2xl text-ocean-950 font-bold">
                Quiz par catégorie
              </h2>
              <QuizResultsByCategory data={categoryData} />
            </div>
          </div>
        )}

        {/* Activity Table */}
        {stats && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-ocean-950 font-bold">
              Activité récente
            </h2>
            <UserActivityTable activities={stats.recentActivities} />
          </div>
        )}
      </div>
    </div>
  );
}
