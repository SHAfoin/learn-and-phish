// TODO: Remplacer par un vrai appel API vers le backend
export interface Formation {
  id: number;
  titre: string;
  type: "Quiz" | "Monde";
  difficulte: "Facile" | "Moyen" | "Difficile";
  categorie: string;
  description: string;
  dateCreation: string;
  nombreQuestions: number;
}

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

// Simule un appel API avec un délai
export async function getFormations(): Promise<Formation[]> {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/formations').then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formations);
    }, 800); // Simule un délai de 800ms
  });
}
