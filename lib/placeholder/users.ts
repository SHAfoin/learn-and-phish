// TODO: Remplacer par un vrai appel API vers le backend
export interface AppUser {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  niveau: number;
  derniereConnexion: string;
}

export const appUsers: AppUser[] = [
  {
    id: 1,
    nom: "Doe",
    prenom: "John",
    email: "john.doe@example.com",
    niveau: 2,
    derniereConnexion: "02/10/2025 13:51",
  },
  {
    id: 2,
    nom: "Gindel",
    prenom: "Dimitri",
    email: "dimitri.gindel@example.com",
    niveau: 3,
    derniereConnexion: "02/10/2025 14:21",
  },
  {
    id: 3,
    nom: "Nails",
    prenom: "Milie",
    email: "milie.nails@example.com",
    niveau: 1,
    derniereConnexion: "12/04/2025 12:08",
  },
  {
    id: 4,
    nom: "Karan",
    prenom: "Zenitsu",
    email: "zenitsu.karan@example.com",
    niveau: 5,
    derniereConnexion: "02/10/2025 14:16",
  },
  {
    id: 5,
    nom: "Dupont",
    prenom: "Marie",
    email: "marie.dupont@example.com",
    niveau: 2,
    derniereConnexion: "01/10/2025 09:30",
  },
  {
    id: 6,
    nom: "Martin",
    prenom: "Lucas",
    email: "lucas.martin@example.com",
    niveau: 1,
    derniereConnexion: "01/10/2025 16:45",
  },
  {
    id: 7,
    nom: "Bernard",
    prenom: "Sophie",
    email: "sophie.bernard@example.com",
    niveau: 4,
    derniereConnexion: "30/09/2025 11:22",
  },
  {
    id: 8,
    nom: "Petit",
    prenom: "Thomas",
    email: "thomas.petit@example.com",
    niveau: 5,
    derniereConnexion: "29/09/2025 15:10",
  },
  {
    id: 9,
    nom: "Robert",
    prenom: "Emma",
    email: "emma.robert@example.com",
    niveau: 3,
    derniereConnexion: "28/09/2025 10:05",
  },
  {
    id: 10,
    nom: "Richard",
    prenom: "Hugo",
    email: "hugo.richard@example.com",
    niveau: 1,
    derniereConnexion: "27/09/2025 14:55",
  },
  {
    id: 11,
    nom: "Moreau",
    prenom: "Léa",
    email: "lea.moreau@example.com",
    niveau: 4,
    derniereConnexion: "26/09/2025 09:15",
  },
  {
    id: 12,
    nom: "Simon",
    prenom: "Alexandre",
    email: "alexandre.simon@example.com",
    niveau: 5,
    derniereConnexion: "25/09/2025 13:40",
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
