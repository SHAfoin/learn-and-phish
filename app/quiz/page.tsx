

import { redirect } from "next/navigation";
import { positionnementQuizzes } from "./positionnement/quizzes";

export default function QuizPage() {
  const first = positionnementQuizzes[0];
  redirect(`/quiz/positionnement/${first.id}`);
  return null;
}
