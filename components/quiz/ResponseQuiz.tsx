"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import AnswerCard, {
  AnswerCardWord,
  BlankSlot,
  AnswerStatus,
} from "@/components/quiz/AnswerCard";
import { Button } from "@/components/ui/button";
import CorrectionBanner from "@/components/quiz/CorrectionBanner";
import QuizCompleted from "@/components/quiz/QuizCompleted";
import type { Quiz } from "@/app/quiz/positionnement/quizzes";

// TODO : adapter avec les appels API !!

type Props = {
  quiz: Quiz;
  nextId?: number;
};

function useAutoComplete(trigger: boolean, enabled: boolean, delayMs: number, onDone: () => void) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    if (!trigger) return;
    if (startedRef.current) return;

    startedRef.current = true;
    const t = setTimeout(() => onDone(), delayMs);
    return () => clearTimeout(t);
  }, [trigger, enabled, delayMs, onDone]);
}

export default function ResponseQuiz({ quiz, nextId }: Props) {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  const isLast = !nextId;

  const goNext = () => {
    if (nextId) router.push(`/quiz/positionnement/${nextId}`);
  };

 if (completed) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--color-ocean-950)]">
      <div className="w-full max-w-5xl px-6">
        <QuizCompleted
          onRestart={() => router.push("/quiz/positionnement/1")}
          onHome={() => router.push("/")}
        />
      </div>
    </div>
  );
}


  if (quiz.type === "double_choix") {
    return (
      <DoubleChoixView
        quiz={quiz}
        isLast={isLast}
        goNext={goNext}
        onAutoDone={() => setCompleted(true)}
      />
    );
  }

  if (quiz.type === "qcm") {
    return (
      <QcmView
        quiz={quiz}
        isLast={isLast}
        goNext={goNext}
        onAutoDone={() => setCompleted(true)}
      />
    );
  }

  if (quiz.type === "qcm_images") {
    return (
      <QcmImagesView
        quiz={quiz}
        isLast={isLast}
        goNext={goNext}
        onAutoDone={() => setCompleted(true)}
      />
    );
  }

  if (quiz.type === "phrase_completer") {
    return (
      <PhraseView
        quiz={quiz}
        isLast={isLast}
        goNext={goNext}
        onAutoDone={() => setCompleted(true)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="text-white">Type de quiz non supporté pour l’instant.</div>
    </div>
  );
}

// =========================
// DOUBLE CHOIX
// =========================
function DoubleChoixView({
  quiz,
  isLast,
  goNext,
  onAutoDone,
}: {
  quiz: Quiz;
  isLast: boolean;
  goNext: () => void;
  onAutoDone: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const answered = selectedIndex !== null;

  // 5s puis page de fin si dernier quiz
  useAutoComplete(answered, isLast, 5000, onAutoDone);

  // 👉 adapte si tu as un champ genre quiz.correctIndex pour double_choix
  const isCorrect = selectedIndex === 1;
  const correctionText = `La bonne réponse était : ${isCorrect ? "Vrai" : "Vrai"}`; // tu peux mettre "Faux" si besoin

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-6">
      <AnswerCard
        type="double_choix"
        label={(quiz as any).question}
        onFalse={() => setSelectedIndex(0)}
        onTrue={() => setSelectedIndex(1)}
      />

      {answered && (
        <>
          <CorrectionBanner isCorrect={isCorrect} correctionText={correctionText} />
          {isLast && <div className="text-white/70 text-sm">Fin du quiz…</div>}
        </>
      )}

      {!isLast && (
        <div className="w-full flex justify-end">
          <Button
            className="bg-[var(--color-ocean-800)] hover:bg-[var(--color-ocean-800)]/80 text-white rounded-[5px]"
            onClick={goNext}
            disabled={!answered}
            style={{ visibility: answered ? "visible" : "hidden" }}
          >
            Continuer
          </Button>
        </div>
      )}
    </div>
  );
}

// =========================
// QCM
// =========================
function QcmView({
  quiz,
  isLast,
  goNext,
  onAutoDone,
}: {
  quiz: Quiz;
  isLast: boolean;
  goNext: () => void;
  onAutoDone: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const answered = selectedIndex !== null;

  useAutoComplete(answered, isLast, 5000, onAutoDone);

  const statusFor = useMemo(() => {
    return (i: number): AnswerStatus => {
      if (!answered) return "idle";
      if (i === (quiz as any).correctIndex) return "correct";
      if (i === selectedIndex) return "wrong";
      return "idle";
    };
  }, [answered, selectedIndex, quiz]);

  const correctIndex = (quiz as any).correctIndex as number;

  return (
    <div className="w-full flex flex-col gap-6">
      {(quiz as any).imageUrl && (
        <div className="w-full flex justify-center">
          <div className="bg-[var(--color-white)] rounded-[10px] p-4 max-w-[320px] w-full">
            <img src={(quiz as any).imageUrl} alt="" className="w-full h-auto object-contain" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(quiz as any).options.map((opt: string, i: number) => (
          <AnswerCard
            key={i}
            type="qcm"
            index={i}
            label={opt}
            status={statusFor(i)}
            disabled={answered}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {answered && (
        <>
          <CorrectionBanner
            isCorrect={selectedIndex === correctIndex}
            correctionText={`Bonne réponse : ${(quiz as any).options[correctIndex]}`}
          />
          {isLast && <div className="text-white/70 text-sm">Fin du quiz…</div>}
        </>
      )}

      {!isLast && (
        <div className="w-full flex justify-end">
          <Button
            className="bg-[var(--color-ocean-800)] hover:bg-[var(--color-ocean-800)]/80 text-white rounded-[5px]"
            onClick={goNext}
            disabled={!answered}
            style={{ visibility: answered ? "visible" : "hidden" }}
          >
            Continuer
          </Button>
        </div>
      )}
    </div>
  );
}

// =========================
// QCM IMAGES
// =========================
function QcmImagesView({
  quiz,
  isLast,
  goNext,
  onAutoDone,
}: {
  quiz: Quiz;
  isLast: boolean;
  goNext: () => void;
  onAutoDone: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const answered = selectedIndex !== null;

  useAutoComplete(answered, isLast, 5000, onAutoDone);

  const correctIndex = (quiz as any).correctIndex as number;

  const statusFor = (i: number): AnswerStatus => {
    if (!answered) return "idle";
    if (i === correctIndex) return "correct";
    if (i === selectedIndex) return "wrong";
    return "idle";
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center pt-2 pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-[620px] w-full justify-items-center">
        {(quiz as any).options.map((opt: string, i: number) => (
          <AnswerCard
            key={i}
            type="qcm_images"
            index={i}
            label={opt}
            imageUrl={(quiz as any).imageUrls?.[i]}
            status={statusFor(i)}
            disabled={answered}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {answered && (
        <>
          <CorrectionBanner
            isCorrect={selectedIndex === correctIndex}
            correctionText={`Bonne réponse : ${(quiz as any).options[correctIndex]}`}
          />
          {isLast && <div className="text-white/70 text-sm">Fin du quiz…</div>}
        </>
      )}

      {!isLast && (
        <div className="w-full max-w-[620px] flex justify-end">
          <Button
            className="bg-[var(--color-ocean-800)] hover:bg-[var(--color-ocean-800)]/80 text-white rounded-[5px]"
            onClick={goNext}
            disabled={!answered}
            style={{ visibility: answered ? "visible" : "hidden" }}
          >
            Continuer
          </Button>
        </div>
      )}
    </div>
  );
}

// =========================
// PHRASE À COMPLÉTER
// =========================
function PhraseView({
  quiz,
  isLast,
  goNext,
  onAutoDone,
}: {
  quiz: Quiz;
  isLast: boolean;
  goNext: () => void;
  onAutoDone: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);

  useAutoComplete(validated, isLast, 5000, onAutoDone);

  const reset = () => {
    setSelectedIndex(null);
    setValidated(false);
  };

  const validate = () => {
    if (selectedIndex === null) return;
    setValidated(true);
  };

  const correctAnswerIndex = (quiz as any).correctAnswerIndex as number;

  let blankState: "empty" | "filled" | "correct" | "wrong" = "empty";
  if (selectedIndex !== null && !validated) blankState = "filled";
  if (validated && selectedIndex !== null) {
    blankState = selectedIndex === correctAnswerIndex ? "correct" : "wrong";
  }

  const selectedWord =
    selectedIndex !== null ? (quiz as any).sentencesuggestion?.[selectedIndex] : undefined;

  const [before, after = ""] = (quiz as any).sentenceWithBlank.split("____");

  const statusFor = (i: number): AnswerStatus => {
    if (!validated) return i === selectedIndex ? "selected" : "idle";
    if (i === correctAnswerIndex) return "correct";
    if (i === selectedIndex && selectedIndex !== correctAnswerIndex) return "wrong";
    return "idle";
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-[980px] rounded-[18px] bg-[var(--color-ocean-900)]/60 shadow-[0_12px_24px_rgba(0,0,0,0.28)] px-8 py-10">
        <div className="text-center text-[var(--color-ocean-50)] text-Display-Normal leading-snug">
          <span>{before}</span>
          <span className="inline-flex align-middle mx-3">
            <BlankSlot text={selectedWord} state={blankState} />
          </span>
          <span>{after}</span>
        </div>
      </div>

      <div className="w-full max-w-[980px] mx-auto mt-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {(quiz as any).sentencesuggestion?.map((word: string, i: number) => (
            <AnswerCardWord
              key={i}
              label={word}
              status={statusFor(i)}
              disabled={validated}
              onClick={() => !validated && setSelectedIndex(i)}
            />
          ))}
        </div>
      </div>

      {validated && (
        <div className="w-full max-w-[980px] mt-6 px-4">
          <CorrectionBanner
            isCorrect={selectedIndex === correctAnswerIndex}
            correctionText={`Bonne réponse : ${(quiz as any).sentencesuggestion?.[correctAnswerIndex] ?? ""}`}
          />
          {isLast && <div className="text-white/70 text-sm mt-2">Fin du quiz…</div>}
        </div>
      )}

      <div className="w-full max-w-[980px] mt-8 flex justify-end gap-3 px-4">
        {!validated ? (
          <>
            <Button variant="secondary" onClick={reset} disabled={selectedIndex === null} className="bg-white hover:bg-white/80 text-[var(--color-ocean-850)] border-input rounded-[5px]">
              Réinitialiser
            </Button>
            <Button
              className="bg-[var(--color-ocean-800)] hover:bg-[var(--color-ocean-800)]/80 text-white rounded-[5px]"
              onClick={validate}
              disabled={selectedIndex === null}
            >
              Valider
            </Button>
          </>
        ) : (
          !isLast && (
            <Button
              className="bg-[var(--color-ocean-800)] hover:bg-[var(--color-ocean-800)]/80 text-white rounded-[5px]"
              onClick={goNext}
            >
              Continuer
            </Button>
          )
        )}
      </div>
    </div>
  );
}
