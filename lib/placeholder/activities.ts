// TODO: Remplacer par un vrai appel API vers le backend

import { Activity } from "./types";

const activities: Activity[] = [
  {
    id: 1,
    date: "02/10/2025 13:51",
    user: "John Doe",
    activity: "Quiz",
    title: "Comment gérer correctement ses mots de passes ?",
    result: { status: "Échec", type: "failure" },
  },
  {
    id: 2,
    date: "02/10/2025 13:42",
    user: "Dimitri Gindel",
    activity: "Chemin",
    title: "En route pour la pêche !",
    result: { status: "Réussite", type: "success" },
  },
  {
    id: 3,
    date: "12/04/2025 12:08",
    user: "Milie Nails",
    activity: "Quiz",
    title: "L'art du Vishing",
    result: { status: "Échec", type: "failure" },
  },
  {
    id: 4,
    date: "02/10/2025 14:16",
    user: "Zenitsu Karan",
    activity: "Question",
    title:
      "Parmi ces mots de passe, lequel est le plus efficace en situation...",
    result: { status: "Réussite", type: "success" },
  },
  {
    id: 5,
    date: "02/10/2025 14:16",
    user: "Zenitsu Karan",
    activity: "Question",
    title:
      "Parmi ces mots de passe, lequel est le plus efficace en situation...",
    result: { status: "Réussite", type: "success" },
  },
  {
    id: 6,
    date: "02/10/2025 14:16",
    user: "Zenitsu Karan",
    activity: "Question",
    title:
      "Parmi ces mots de passe, lequel est le plus efficace en situation...",
    result: { status: "Réussite", type: "success" },
  },
];

// Simule un appel API avec un délai
export async function getRecentActivities(): Promise<Activity[]> {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/activities').then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(activities);
    }, 800); // Simule un délai de 800ms
  });
}
