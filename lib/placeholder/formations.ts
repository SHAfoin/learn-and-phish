// TODO: Remplacer par un vrai appel API vers le backend
export interface Formation {
  id: number;
  titre: string;
  type: "Quiz" | "Monde";
  difficulte: "Facile" | "Moyen" | "Difficile";
  categorie: string;
}

export const formations: Formation[] = [
  {
    id: 1,
    titre: "Comment gérer correctement ses mots de passes ?",
    type: "Quiz",
    difficulte: "Facile",
    categorie: "Mots de passe",
  },
  {
    id: 2,
    titre: "En route pour la pêche !",
    type: "Monde",
    difficulte: "Facile",
    categorie: "Introduction",
  },
  {
    id: 3,
    titre: "L'art du Vishing",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Phishing",
  },
  {
    id: 4,
    titre: "Reconnaître les emails suspects",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Email",
  },
  {
    id: 5,
    titre: "Protection des données personnelles",
    type: "Monde",
    difficulte: "Moyen",
    categorie: "RGPD",
  },
  {
    id: 6,
    titre: "Les techniques de social engineering",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Social Engineering",
  },
  {
    id: 7,
    titre: "Sécurité des réseaux WiFi",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Réseau",
  },
  {
    id: 8,
    titre: "Le monde de la cybersécurité",
    type: "Monde",
    difficulte: "Facile",
    categorie: "Introduction",
  },
  {
    id: 9,
    titre: "Authentification à deux facteurs",
    type: "Quiz",
    difficulte: "Facile",
    categorie: "Authentification",
  },
  {
    id: 10,
    titre: "Ransomware et malwares",
    type: "Quiz",
    difficulte: "Difficile",
    categorie: "Malware",
  },
  {
    id: 11,
    titre: "Voyage dans les attaques web",
    type: "Monde",
    difficulte: "Difficile",
    categorie: "Web Security",
  },
  {
    id: 12,
    titre: "La sécurité mobile",
    type: "Quiz",
    difficulte: "Moyen",
    categorie: "Mobile",
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
