import { AppUser, UserStats } from "./types";

export const appUsers: AppUser[] = [
  {
    id: 1,
    nom: "Doe",
    prenom: "John",
    email: "john.doe@example.com",
    role: "Développeur",
    niveau: 2,
    derniereConnexion: "02/10/2025 13:51",
    dateInscription: "15/01/2024",
  },
  {
    id: 2,
    nom: "Gindel",
    prenom: "Dimitri",
    email: "dimitri.gindel@example.com",
    role: "Manager",
    niveau: 3,
    derniereConnexion: "02/10/2025 14:21",
    dateInscription: "20/02/2024",
  },
  {
    id: 3,
    nom: "Nails",
    prenom: "Milie",
    email: "milie.nails@example.com",
    role: "Analyste",
    niveau: 1,
    derniereConnexion: "12/04/2025 12:08",
    dateInscription: "10/03/2024",
  },
  {
    id: 4,
    nom: "Karan",
    prenom: "Zenitsu",
    email: "zenitsu.karan@example.com",
    role: "Développeur",
    niveau: 5,
    derniereConnexion: "02/10/2025 14:16",
    dateInscription: "05/01/2024",
  },
  {
    id: 5,
    nom: "Dupont",
    prenom: "Marie",
    email: "marie.dupont@example.com",
    role: "Testeur",
    niveau: 2,
    derniereConnexion: "01/10/2025 09:30",
    dateInscription: "25/02/2024",
  },
  {
    id: 6,
    nom: "Martin",
    prenom: "Lucas",
    email: "lucas.martin@example.com",
    role: "Développeur",
    niveau: 1,
    derniereConnexion: "01/10/2025 16:45",
    dateInscription: "12/04/2024",
  },
  {
    id: 7,
    nom: "Bernard",
    prenom: "Sophie",
    email: "sophie.bernard@example.com",
    role: "Manager",
    niveau: 4,
    derniereConnexion: "30/09/2025 11:22",
    dateInscription: "18/03/2024",
  },
  {
    id: 8,
    nom: "Petit",
    prenom: "Thomas",
    email: "thomas.petit@example.com",
    role: "Analyste",
    niveau: 5,
    derniereConnexion: "29/09/2025 15:10",
    dateInscription: "08/02/2024",
  },
  {
    id: 9,
    nom: "Robert",
    prenom: "Emma",
    email: "emma.robert@example.com",
    role: "Développeur",
    niveau: 3,
    derniereConnexion: "28/09/2025 10:05",
    dateInscription: "22/01/2024",
  },
  {
    id: 10,
    nom: "Richard",
    prenom: "Hugo",
    email: "hugo.richard@example.com",
    role: "Testeur",
    niveau: 1,
    derniereConnexion: "27/09/2025 14:55",
    dateInscription: "30/04/2024",
  },
  {
    id: 11,
    nom: "Moreau",
    prenom: "Léa",
    email: "lea.moreau@example.com",
    role: "Manager",
    niveau: 4,
    derniereConnexion: "26/09/2025 09:15",
    dateInscription: "11/03/2024",
  },
  {
    id: 12,
    nom: "Simon",
    prenom: "Alexandre",
    email: "alexandre.simon@example.com",
    role: "Analyste",
    niveau: 5,
    derniereConnexion: "25/09/2025 13:40",
    dateInscription: "16/05/2024",
  },
];

// Mock user statistics - linked by userId
export const mockUserStats: UserStats[] = [
  {
    userId: 1,
    activiteData: [
      { date: "26/09", userCount: 8 },
      { date: "27/09", userCount: 6 },
      { date: "28/09", userCount: 12 },
      { date: "29/09", userCount: 9 },
      { date: "30/09", userCount: 15 },
      { date: "01/10", userCount: 18 },
      { date: "02/10", userCount: 22 },
    ],
    progression: 65,
    scoreExposition: 35,
    quizResultsByDifficulty: {
      facile: { correct: 8, incorrect: 2 },
      moyen: { correct: 5, incorrect: 5 },
      difficile: { correct: 2, incorrect: 8 },
    },
    quizResultsByCategory: [
      { name: "Phishing", correct: 6, incorrect: 4 },
      { name: "Mot de passe", correct: 5, incorrect: 5 },
      { name: "Social Engineering", correct: 4, incorrect: 6 },
    ],
    recentActivities: [
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
        date: "01/10/2025 09:30",
        user: "John Doe",
        activity: "Chemin",
        title: "En route pour la pêche !",
        result: { status: "Réussite", type: "success" },
      },
    ],
  },
  {
    userId: 2,
    activiteData: [
      { date: "26/09", userCount: 5 },
      { date: "27/09", userCount: 8 },
      { date: "28/09", userCount: 10 },
      { date: "29/09", userCount: 7 },
      { date: "30/09", userCount: 12 },
      { date: "01/10", userCount: 14 },
      { date: "02/10", userCount: 16 },
    ],
    progression: 82,
    scoreExposition: 15,
    quizResultsByDifficulty: {
      facile: { correct: 10, incorrect: 0 },
      moyen: { correct: 8, incorrect: 2 },
      difficile: { correct: 6, incorrect: 4 },
    },
    quizResultsByCategory: [
      { name: "Phishing", correct: 10, incorrect: 0 },
      { name: "Mot de passe", correct: 9, incorrect: 1 },
      { name: "Social Engineering", correct: 5, incorrect: 5 },
    ],
    recentActivities: [
      {
        id: 1,
        date: "02/10/2025 14:21",
        user: "Dimitri Gindel",
        activity: "Quiz",
        title: "Phishing avancé",
        result: { status: "Réussite", type: "success" },
      },
    ],
  },
];

// Simule un appel API avec un délai
export async function getAppUsers(): Promise<AppUser[]> {
  // TODO: Implémenter l'appel API réel
  // return fetch('/api/users').then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appUsers);
    }, 800); // Simule un délai de 800ms
  });
}

// Gets a single user by ID
export async function getUserById(id: number): Promise<AppUser | null> {
  // TODO: Implémenter l'appel API réel
  // return fetch(`/api/users/${id}`).then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = appUsers.find((u) => u.id === id);
      resolve(user || null);
    }, 600); // Simule un délai de 600ms
  });
}

// Gets statistics for a user by ID
export async function getUserStatsById(
  userId: number,
): Promise<UserStats | null> {
  // TODO: Implémenter l'appel API réel
  // return fetch(`/api/users/${userId}/stats`).then(res => res.json());

  return new Promise((resolve) => {
    setTimeout(() => {
      const stats = mockUserStats.find((s) => s.userId === userId);
      resolve(stats || null);
    }, 700); // Simule un délai de 700ms
  });
}
