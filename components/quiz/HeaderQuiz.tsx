import React from "react";
import QuestionIcon from "./QuestionIcon";

interface HeaderQuizProps {
  type:
    | "double_choix"
    | "video"
    | "qcm"
    | "qcm_images"
    | "reponse_libre"
    | "phrase_completer";

  // optionnel si tu veux rendre le header réutilisable avec tes quizzes.ts
  title?: string;
  subtitle?: string;
}

const quizData = {
  double_choix: { text: "Question à choix multiple" },
  video: { text: "Vidéo" },
  qcm: { text: "QCM" },
  qcm_images: { text: "QCM avec images" },
  reponse_libre: { text: "Réponse libre" },
  phrase_completer: { text: "Phrase à compléter" },
};

export default function HeaderQuiz({ type, title, subtitle }: HeaderQuizProps) {
  const fallback = quizData[type];

  return (
    <div className="text-center px-2 sm:px-4">
      <div className="bg-[var(--color-ocean-900)] rounded-[15px] w-full max-w-4xl mx-auto p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
        <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mb-2 sm:mb-0">
          <QuestionIcon type={type} className="w-12 h-12 sm:w-14 sm:h-14" />
        </div>
        <div className="flex flex-col text-center sm:text-left w-full">
          {/* GROS TITRE */}
          <h2 className="text-Display-Normal text-white text-lg sm:text-2xl break-words">
            {title ?? fallback.text}
          </h2>
          {/* PETIT TEXTE */}
          <p className="text-Text-Normal text-white mt-2 text-sm sm:text-base">
            {subtitle ??
              "Apprenez à reconnaître les tentatives de phishing grâce à nos quiz interactifs."}
          </p>
        </div>
      </div>
    </div>
  );
}
