// TODO: Remplacer par un vrai appel API vers le backend

export type QuizDifficulte = "Facile" | "Moyen" | "Difficile";

export type QuestionType =
  | "QCM"
  | "Vrai/Faux"
  | "Phrase à compléter"
  | "QCM d'images";

// Interface principale pour Quiz et Mondes
export interface Formation {
  id: number;
  titre: string;
  type: "Quiz" | "Monde";
  difficulte: QuizDifficulte;
  categorie: string;
  description: string;
  dateCreation: string;
  nombreQuestions: number;
}

// Type Quiz pour compatibilité (sans le champ type car toujours "Quiz")
export interface Quiz {
  id: number;
  titre: string;
  description: string;
  difficulte: QuizDifficulte;
  categorie: string;
  dateCreation: string;
  nombreQuestions: number;
}

export interface Question {
  id: number;
  quizId: number;
  titre: string;
  type: QuestionType;
  ordre: number;
}

export interface QuizAttemptData {
  date: string;
  tentatives: number;
  reussites: number;
}

export interface QuizStats {
  quizId: number;
  totalTentatives: number;
  tentativesReussies: number;
  tentativesTerminees: number;
  tauxReussite: number;
  tauxCompletion: number;
  attemptsOverTime: QuizAttemptData[];
}

// Données mock - Formations (Quiz et Mondes)
export const formations: Formation[] = [
  {
    id: 1,
    titre: "Comment gérer correctement ses mots de passes ?",
    type: "Quiz",
    difficulte: "Facile",
    categorie: "Mots de passe",
    description:
      "Ce quiz vous permettra de tester vos connaissances sur les bonnes pratiques de gestion des mots de passe et de comprendre comment créer et maintenir des mots de passe sécurisés.",
    dateCreation: "15/01/2025",
    nombreQuestions: 8,
  },
  {
    id: 2,
    titre: "En route pour la pêche !",
    type: "Monde",
    difficulte: "Facile",
    categorie: "Introduction",
    description:
      "Découvrez le monde du phishing à travers une aventure interactive. Apprenez les bases de la sécurité en ligne tout en progressant dans un univers ludique.",
    dateCreation: "10/01/2025",
    nombreQuestions: 5,
  },
  {
    id: 3,
    titre: "L'art du Vishing",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Phishing",
    description:
      "Évaluez votre capacité à identifier et vous protéger contre les attaques de vishing (phishing vocal). Comprenez les techniques utilisées par les attaquants et apprenez à les reconnaître.",
    dateCreation: "20/01/2025",
    nombreQuestions: 12,
  },
  {
    id: 4,
    titre: "Reconnaître les emails suspects",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Email",
    description:
      "Développez vos compétences pour identifier les emails de phishing et apprenez les signaux d'alerte à surveiller dans vos communications électroniques.",
    dateCreation: "10/02/2025",
    nombreQuestions: 10,
  },
  {
    id: 5,
    titre: "Protection des données personnelles",
    type: "Monde",
    difficulte: "Moyen",
    categorie: "RGPD",
    description:
      "Explorez le monde du RGPD et de la protection des données à travers des scénarios interactifs. Maîtrisez les concepts clés de la confidentialité et de la sécurité des données.",
    dateCreation: "25/01/2025",
    nombreQuestions: 7,
  },
  {
    id: 6,
    titre: "Les techniques de social engineering",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Social Engineering",
    description:
      "Testez votre capacité à détecter et contrer les techniques d'ingénierie sociale. Apprenez comment les attaquants manipulent psychologiquement leurs victimes.",
    dateCreation: "30/01/2025",
    nombreQuestions: 15,
  },
  {
    id: 7,
    titre: "Sécurité des réseaux WiFi",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Réseau",
    description:
      "Apprenez à sécuriser vos connexions WiFi et à identifier les réseaux dangereux. Comprenez les protocoles de sécurité et les bonnes pratiques.",
    dateCreation: "05/02/2025",
    nombreQuestions: 9,
  },
  {
    id: 8,
    titre: "Le monde de la cybersécurité",
    type: "Monde",
    difficulte: "Facile",
    categorie: "Introduction",
    description:
      "Partez à l'aventure dans l'univers de la cybersécurité. Découvrez les concepts fondamentaux à travers des missions interactives et progressives.",
    dateCreation: "08/01/2025",
    nombreQuestions: 6,
  },
  {
    id: 9,
    titre: "Authentification à deux facteurs",
    type: "Quiz",
    difficulte: "Facile",
    categorie: "Authentification",
    description:
      "Comprenez l'importance de l'authentification à deux facteurs et apprenez à l'utiliser efficacement pour protéger vos comptes en ligne.",
    dateCreation: "12/02/2025",
    nombreQuestions: 7,
  },
  {
    id: 10,
    titre: "Ransomware et malwares",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Malware",
    description:
      "Évaluez vos connaissances sur les ransomwares, malwares et autres logiciels malveillants. Apprenez à les identifier et à vous en protéger.",
    dateCreation: "18/02/2025",
    nombreQuestions: 13,
  },
  {
    id: 11,
    titre: "Voyage dans les attaques web",
    type: "Monde",
    difficulte: "Difficile",
    categorie: "Web Security",
    description:
      "Explorez les différentes techniques d'attaques web à travers des challenges interactifs. Apprenez à vous défendre contre XSS, SQL injection et plus encore.",
    dateCreation: "22/02/2025",
    nombreQuestions: 10,
  },
  {
    id: 12,
    titre: "La sécurité mobile",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Mobile",
    description:
      "Testez vos connaissances sur la sécurité des appareils mobiles. Apprenez à protéger vos smartphones et tablettes contre les menaces actuelles.",
    dateCreation: "28/02/2025",
    nombreQuestions: 11,
  },
];

// Données mock pour les questions
const mockQuestions: Question[] = [
  // Questions pour Quiz 1
  {
    id: 1,
    quizId: 1,
    titre:
      "Quelle est la longueur minimale recommandée pour un mot de passe sécurisé ?",
    type: "QCM",
    ordre: 1,
  },
  {
    id: 2,
    quizId: 1,
    titre: "Faut-il utiliser le même mot de passe pour plusieurs comptes ?",
    type: "Vrai/Faux",
    ordre: 2,
  },
  {
    id: 3,
    quizId: 1,
    titre:
      "Compléter : Un bon mot de passe doit contenir des ___, des chiffres et des caractères spéciaux.",
    type: "Phrase à compléter",
    ordre: 3,
  },
  {
    id: 4,
    quizId: 1,
    titre: "Parmi ces mots de passe, lequel est le plus sécurisé ?",
    type: "QCM",
    ordre: 4,
  },
  {
    id: 5,
    quizId: 1,
    titre: "L'authentification à deux facteurs améliore-t-elle la sécurité ?",
    type: "Vrai/Faux",
    ordre: 5,
  },
  {
    id: 6,
    quizId: 1,
    titre:
      "À quelle fréquence devez-vous changer vos mots de passe critiques ?",
    type: "QCM",
    ordre: 6,
  },
  {
    id: 7,
    quizId: 1,
    titre: "Les gestionnaires de mots de passe sont-ils recommandés ?",
    type: "Vrai/Faux",
    ordre: 7,
  },
  {
    id: 8,
    quizId: 1,
    titre: "Identifiez les éléments d'un mot de passe fort",
    type: "QCM d'images",
    ordre: 8,
  },

  // Questions pour Quiz 2
  {
    id: 9,
    quizId: 2,
    titre: "Qu'est-ce que le vishing ?",
    type: "QCM",
    ordre: 1,
  },
  {
    id: 10,
    quizId: 2,
    titre: "Le vishing utilise-t-il uniquement le téléphone fixe ?",
    type: "Vrai/Faux",
    ordre: 2,
  },
  {
    id: 11,
    quizId: 2,
    titre:
      "Quelle technique est couramment utilisée dans les attaques de vishing ?",
    type: "QCM",
    ordre: 3,
  },
  {
    id: 12,
    quizId: 2,
    titre: "Compléter : Le vishing exploite la ___ des victimes.",
    type: "Phrase à compléter",
    ordre: 4,
  },
  {
    id: 13,
    quizId: 2,
    titre: "Un appel d'un numéro connu est-il toujours sûr ?",
    type: "Vrai/Faux",
    ordre: 5,
  },
  {
    id: 14,
    quizId: 2,
    titre: "Identifiez les signaux d'alerte d'un appel de vishing",
    type: "QCM d'images",
    ordre: 6,
  },
  {
    id: 15,
    quizId: 2,
    titre: "Comment réagir face à une suspicion de vishing ?",
    type: "QCM",
    ordre: 7,
  },
  {
    id: 16,
    quizId: 2,
    titre: "Le vishing peut-il être combiné avec d'autres techniques ?",
    type: "Vrai/Faux",
    ordre: 8,
  },
  {
    id: 17,
    quizId: 2,
    titre: "Quelles informations ne pas divulguer au téléphone ?",
    type: "QCM",
    ordre: 9,
  },
  {
    id: 18,
    quizId: 2,
    titre: "Compléter : Toujours ___ l'identité de votre interlocuteur.",
    type: "Phrase à compléter",
    ordre: 10,
  },
  {
    id: 19,
    quizId: 2,
    titre: "Les attaquants peuvent-ils usurper des numéros de téléphone ?",
    type: "Vrai/Faux",
    ordre: 11,
  },
  {
    id: 20,
    quizId: 2,
    titre: "Reconnaissez les scénarios de vishing",
    type: "QCM d'images",
    ordre: 12,
  },

  // Questions pour Quiz 3
  {
    id: 21,
    quizId: 3,
    titre: "Quels sont les signes d'un email de phishing ?",
    type: "QCM",
    ordre: 1,
  },
  {
    id: 22,
    quizId: 3,
    titre: "Un email avec des fautes d'orthographe est-il suspect ?",
    type: "Vrai/Faux",
    ordre: 2,
  },
  {
    id: 23,
    quizId: 3,
    titre: "Identifiez l'email de phishing",
    type: "QCM d'images",
    ordre: 3,
  },
  {
    id: 24,
    quizId: 3,
    titre: "Compléter : Vérifiez toujours l'adresse ___ de l'expéditeur.",
    type: "Phrase à compléter",
    ordre: 4,
  },
  {
    id: 25,
    quizId: 3,
    titre: "Comment vérifier un lien suspect ?",
    type: "QCM",
    ordre: 5,
  },
  {
    id: 26,
    quizId: 3,
    titre: "Doit-on cliquer sur les liens d'emails inconnus ?",
    type: "Vrai/Faux",
    ordre: 6,
  },
  {
    id: 27,
    quizId: 3,
    titre: "Que faire avec un email suspect ?",
    type: "QCM",
    ordre: 7,
  },
  {
    id: 28,
    quizId: 3,
    titre: "Les pièces jointes peuvent-elles contenir des virus ?",
    type: "Vrai/Faux",
    ordre: 8,
  },
  {
    id: 29,
    quizId: 3,
    titre: "Analysez ces captures d'emails",
    type: "QCM d'images",
    ordre: 9,
  },
  {
    id: 30,
    quizId: 3,
    titre: "Compléter : En cas de doute, ___ l'email à votre service IT.",
    type: "Phrase à compléter",
    ordre: 10,
  },

  // Questions pour Quiz 4
  {
    id: 31,
    quizId: 4,
    titre: "Qu'est-ce que le RGPD ?",
    type: "QCM",
    ordre: 1,
  },
  {
    id: 32,
    quizId: 4,
    titre: "Le RGPD s'applique-t-il uniquement en France ?",
    type: "Vrai/Faux",
    ordre: 2,
  },
  {
    id: 33,
    quizId: 4,
    titre: "Quels sont les droits des utilisateurs selon le RGPD ?",
    type: "QCM",
    ordre: 3,
  },
  {
    id: 34,
    quizId: 4,
    titre:
      "Compléter : Les données personnelles doivent être ___ et sécurisées.",
    type: "Phrase à compléter",
    ordre: 4,
  },
  {
    id: 35,
    quizId: 4,
    titre: "Une entreprise peut-elle vendre vos données sans consentement ?",
    type: "Vrai/Faux",
    ordre: 5,
  },
  {
    id: 36,
    quizId: 4,
    titre: "Qu'est-ce qu'une donnée personnelle ?",
    type: "QCM",
    ordre: 6,
  },
  {
    id: 37,
    quizId: 4,
    titre: "Identifiez les données personnelles",
    type: "QCM d'images",
    ordre: 7,
  },
  {
    id: 38,
    quizId: 4,
    titre: "Le droit à l'oubli existe-t-il dans le RGPD ?",
    type: "Vrai/Faux",
    ordre: 8,
  },
  {
    id: 39,
    quizId: 4,
    titre: "Quel est le délai pour notifier une violation de données ?",
    type: "QCM",
    ordre: 9,
  },
  {
    id: 40,
    quizId: 4,
    titre: "Compléter : Le DPO est le Délégué à la Protection des ___.",
    type: "Phrase à compléter",
    ordre: 10,
  },
  {
    id: 41,
    quizId: 4,
    titre: "Les cookies nécessitent-ils le consentement ?",
    type: "Vrai/Faux",
    ordre: 11,
  },
  {
    id: 42,
    quizId: 4,
    titre: "Comment gérer une demande d'accès aux données ?",
    type: "QCM",
    ordre: 12,
  },
  {
    id: 43,
    quizId: 4,
    titre: "Le RGPD impose-t-il des amendes en cas de non-conformité ?",
    type: "Vrai/Faux",
    ordre: 13,
  },
  {
    id: 44,
    quizId: 4,
    titre: "Reconnaissez les violations du RGPD",
    type: "QCM d'images",
    ordre: 14,
  },
  {
    id: 45,
    quizId: 4,
    titre:
      "Compléter : Le principe de minimisation des données signifie collecter uniquement les données ___.",
    type: "Phrase à compléter",
    ordre: 15,
  },

  // Questions pour Quiz 5
  {
    id: 46,
    quizId: 5,
    titre: "Qu'est-ce que le HTTPS ?",
    type: "QCM",
    ordre: 1,
  },
  {
    id: 47,
    quizId: 5,
    titre: "Un site sans HTTPS est-il forcément dangereux ?",
    type: "Vrai/Faux",
    ordre: 2,
  },
  {
    id: 48,
    quizId: 5,
    titre: "Identifiez le site web sécurisé",
    type: "QCM d'images",
    ordre: 3,
  },
  {
    id: 49,
    quizId: 5,
    titre:
      "Compléter : Le cadenas dans la barre d'adresse indique une connexion ___.",
    type: "Phrase à compléter",
    ordre: 4,
  },
  { id: 50, quizId: 5, titre: "Que sont les cookies ?", type: "QCM", ordre: 5 },
  {
    id: 51,
    quizId: 5,
    titre: "Doit-on accepter tous les cookies ?",
    type: "Vrai/Faux",
    ordre: 6,
  },
  {
    id: 52,
    quizId: 5,
    titre: "Comment repérer une URL suspecte ?",
    type: "QCM",
    ordre: 7,
  },
];

// Fonction pour générer des données de tentatives sur 30 jours
function generateAttemptData(quizId: number): QuizAttemptData[] {
  const data: QuizAttemptData[] = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
    });

    // Générer des données aléatoires mais cohérentes
    const tentatives = Math.floor(Math.random() * 20) + 5;
    const reussites = Math.floor(tentatives * (0.6 + Math.random() * 0.3));

    data.push({
      date: dateStr,
      tentatives,
      reussites,
    });
  }

  return data;
}

// Mock functions
export async function getFormations(): Promise<Formation[]> {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/formations').then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formations);
    }, 800); // Simule un délai de 800ms
  });
}

export async function getQuizById(id: number): Promise<Quiz | null> {
  // TODO: Remplacer par un vrai appel API vers le backend
  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Récupérer la formation correspondante
  const formation = formations.find((f) => f.id === id && f.type === "Quiz");

  if (!formation) {
    return null;
  }

  // Transformer la Formation en Quiz (format sans le champ type)
  const quiz: Quiz = {
    id: formation.id,
    titre: formation.titre,
    description: formation.description,
    difficulte: formation.difficulte,
    categorie: formation.categorie,
    dateCreation: formation.dateCreation,
    nombreQuestions: formation.nombreQuestions,
  };

  return quiz;
}

export async function getQuizQuestions(quizId: number): Promise<Question[]> {
  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 700));

  return mockQuestions.filter((q) => q.quizId === quizId);
}

export async function getQuizStats(quizId: number): Promise<QuizStats> {
  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 800));

  const totalTentatives = Math.floor(Math.random() * 200) + 100;
  const tentativesReussies = Math.floor(
    totalTentatives * (0.65 + Math.random() * 0.2),
  );
  const tentativesTerminees = Math.floor(
    totalTentatives * (0.85 + Math.random() * 0.1),
  );

  return {
    quizId,
    totalTentatives,
    tentativesReussies,
    tentativesTerminees,
    tauxReussite: Math.round((tentativesReussies / totalTentatives) * 100),
    tauxCompletion: Math.round((tentativesTerminees / totalTentatives) * 100),
    attemptsOverTime: generateAttemptData(quizId),
  };
}
