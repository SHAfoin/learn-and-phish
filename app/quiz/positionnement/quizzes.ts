export type QuizType =
  | "double_choix"
  | "video"
  | "qcm"
  | "qcm_images"
  | "reponse_libre"
  | "phrase_completer";

export type QuizBase = {
  id: number;
  type: QuizType;
  title: string;     
  subtitle: string;   
};

export type DoubleChoixQuiz = QuizBase & {
  type: "double_choix";
  question: string;
  imageUrl?: string;
  correctAnswer: number; // true = vrai 1, false = faux 0
};

export type QcmQuiz = QuizBase & {
  type: "qcm";
  options: string[];
  imageUrl: string;
  correctIndex: number;
};

export type PhraseCompleterQuiz = QuizBase & {
  type: "phrase_completer";
  sentenceWithBlank: string; 
  sentencesuggestion?: string[]; 
  correctAnswerIndex: number; 
};

export type VideoQuiz = QuizBase & {
  type: "video";
  videoUrl: string;
  question: string;
  correctIndex: number;
  options: string[];
};

export type Qcm_ImagesQuiz = QuizBase & {
  type: "qcm_images";
  options: string[];
  imageUrls: string[]; 
  correctIndex: number;
};

export type Quiz =
  | DoubleChoixQuiz
  | QcmQuiz
  | Qcm_ImagesQuiz
  | PhraseCompleterQuiz
  | VideoQuiz;

// TODO : subtitle a gerer aussi selon le type id de la 
export const positionnementQuizzes: Quiz[] = [
  {
    id: 1,
    type: "double_choix",
    title: "Swipe ou clique pour indiquer si la réponse est vrai ou faux",
    subtitle: "Double choix",
    question: "Un email peut être du phishing même s’il a un logo officiel.",
    correctAnswer: 1,
  },
  {
    id: 2,
    type: "qcm",
    title: "Quel indice est le plus suspect ?",
    subtitle: "QCM",
    imageUrl: "https://i.imgur.com/XipLRWM.jpg",
    options: ["Adresse expéditeur étrange", "Signature complète de l'utilisateur", "Bonjour", "test"],
    correctIndex: 0,
  },
  {
    id: 3,
    type: "qcm_images",
    subtitle: "QCM avec images",
    title: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
    options: ["Lien suspect", "Signature complète", "Bonjour", "test"],
    imageUrls: [
      "https://i.imgur.com/7X8f2cF.jpg",
      "https://i.imgur.com/7X8f2cF.jpg",
      "https://i.imgur.com/7X8f2cF.jpg",
      "https://i.imgur.com/7X8f2cF.jpg"
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    type: "phrase_completer",
    title: "Complétez la phrase",
    subtitle: "Phrase à compléter",
    sentenceWithBlank: "Un lien suspect contient souvent ____.",
    sentencesuggestion: ["une adresse étrange", "une signature complète", "baba", "bob"],
    correctAnswerIndex: 1,
  }
];
