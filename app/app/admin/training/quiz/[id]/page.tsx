import { notFound } from "next/navigation";
import Link from "next/link";
import { getQuizById, getQuizQuestions, getQuizStats } from "@/lib/placeholder";
import QuizInfoCard from "./QuizInfoCard";
import QuizActivityChart from "./QuizActivityChart";
import QuizStatsRadialCharts from "./QuizStatsRadialCharts";
import QuestionsTable from "./QuestionsTable";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const quizId = Number(id);

  // Validate ID
  if (Number.isNaN(quizId)) {
    notFound();
  }

  // Fetch quiz data, stats and questions in parallel
  const [quiz, stats, questions] = await Promise.all([
    getQuizById(quizId),
    getQuizStats(quizId),
    getQuizQuestions(quizId),
  ]);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4 py-8">
      {/* Page Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/app/admin?tab=training">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
          {quiz.titre}
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 w-full">
        {/* Quiz Info Card */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-ocean-950 font-bold">Informations</h2>
          <QuizInfoCard quiz={quiz} />
        </div>

        {/* Activity Chart and Stats Charts in flex row */}
        <div className="flex gap-6 w-full">
          <div className="flex flex-col flex-1 gap-2">
            <h2 className="text-2xl text-ocean-950 font-bold">
              Activité du quiz
            </h2>
            <QuizActivityChart data={stats.attemptsOverTime} />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <h2 className="text-2xl text-ocean-950 font-bold">Réussite</h2>
            <QuizStatsRadialCharts stats={stats} />
          </div>
        </div>

        {/* Questions Table */}
        <div className="flex flex-col flex-1 gap-2">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Questions du quiz
          </h2>
          <QuestionsTable questions={questions} />
        </div>
      </div>
    </div>
  );
}
