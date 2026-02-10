import { notFound } from "next/navigation";
import Link from "next/link";
import { HeaderQuiz, ResponseQuiz } from "@/components/quiz";
import { positionnementQuizzes } from "../quizzes";
import { Button } from "@/components/ui/button";
import WavySegmentsByQuestion from "@/components/quiz/WavyProgress";

type PageProps = {
  params: Promise<{ id: number }> | { id: number };
};

export default async function QuizPositionnementPage({ params }: PageProps) {

  const { id } = await Promise.resolve(params);
  const idNum = typeof id === "string" ? parseInt(id, 10) : id;

  const quizIndex = positionnementQuizzes.findIndex((q) => q.id === idNum);
  if (quizIndex === -1) notFound();

  const quiz = positionnementQuizzes[quizIndex];
  const nextQuiz = positionnementQuizzes[quizIndex + 1];

  return (
    <div className="w-full">
      <HeaderQuiz type={quiz.type} title={quiz.title} subtitle={quiz.subtitle} />
      <div className=" px-4 mt-6 pb-6 flex flex-col items-center">
        <WavySegmentsByQuestion
          currentIndex={quizIndex}
          total={positionnementQuizzes.length}
          includeCurrent={false}
          step={120}
          className="mt-6 w-full max-w-4xl mx-auto px-4"
        />
      <span className="text-white text-sm font-semibold whitespace-nowrap">
    {quizIndex + 1} / {positionnementQuizzes.length}
  </span>

      </div>
      <div className="max-w-4xl mx-auto px-4">
        <ResponseQuiz key={quiz.id} quiz={quiz} nextId={nextQuiz?.id} />
      </div>
    </div>

  );
}
