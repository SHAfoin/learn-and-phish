// TODO: Remplacer par un vrai appel API vers le backend

export type MondeDifficulte = "Facile" | "Moyen" | "Difficile";

// Interface pour les Mondes (ensembles de quiz)
export interface Monde {
  id: number;
  titre: string;
  difficulte: MondeDifficulte;
  categorie: string;
  description: string;
  dateCreation: string;
  nombreQuestions: number;
}

// Données mock - Mondes
export const mondes: Monde[] = [
  {
    id: 2,
    titre: "En route pour la pêche !",
    difficulte: "Facile",
    categorie: "Introduction",
    description:
      "Découvrez le monde du phishing à travers une aventure interactive. Apprenez les bases de la sécurité en ligne tout en progressant dans un univers ludique.",
    dateCreation: "10/01/2025",
    nombreQuestions: 5,
  },
  {
    id: 5,
    titre: "Protection des données personnelles",
    difficulte: "Moyen",
    categorie: "RGPD",
    description:
      "Explorez le monde du RGPD et de la protection des données à travers des scénarios interactifs. Maîtrisez les concepts clés de la confidentialité et de la sécurité des données.",
    dateCreation: "25/01/2025",
    nombreQuestions: 7,
  },
  {
    id: 8,
    titre: "Le monde de la cybersécurité",
    difficulte: "Facile",
    categorie: "Introduction",
    description:
      "Partez à l'aventure dans l'univers de la cybersécurité. Découvrez les concepts fondamentaux à travers des missions interactives et progressives.",
    dateCreation: "08/01/2025",
    nombreQuestions: 6,
  },
  {
    id: 11,
    titre: "Voyage dans les attaques web",
    difficulte: "Difficile",
    categorie: "Web Security",
    description:
      "Explorez les différentes techniques d'attaques web à travers des challenges interactifs. Apprenez à vous défendre contre XSS, SQL injection et plus encore.",
    dateCreation: "22/02/2025",
    nombreQuestions: 10,
  },
];

// Simule un appel API avec un délai
export async function getMondes(): Promise<Monde[]> {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/mondes').then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mondes);
    }, 800); // Simule un délai de 800ms
  });
}
