import styles from "./quiz.module.css";

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.quizBackground}>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </div>
  );
}
