export interface Campagne {
  id: number;
  nom: string;
  dateLancement: string;
  statut: string;
  templateMail: string;
  templatePage: string;
  url?: string;
  groupeId: number;
  dateDebut: string;
  dateFin?: string;
  utilisateurs?: CampagneUtilisateur[];
}

export type CampagneUtilisateurStatut =
  | "email envoyé"
  | "email ouvert"
  | "lien cliquée"
  | "données envoyées";

export interface CampagneUtilisateur {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  role: string;
  statut: CampagneUtilisateurStatut;
}

export interface ModeleMail {
  id: number;
  nom: string;
  expediteur: string;
  objet: string;
  contenuHtml?: string;
}

export type EmailCreationMode = "manuel" | "template" | "conversion-ia";

export interface ConversionResponse {
  jobId: string;
  status: "pending" | "completed" | "failed";
  contenuHtml?: string;
  error?: string;
}

export interface ModelePage {
  id: number;
  nom: string;
  url?: string;
}

export type ProfilEnvoiType = "smtp";

export interface ProfilEnvoi {
  id: number;
  nom: string;
  from: string;
  hote: string;
  username: string;
  password: string;
  type: ProfilEnvoiType;
}

export interface User {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  role: string;
}

export interface Groupe {
  id: number;
  nom: string;
  date: string;
  utilisateurs: User[];
}

// TODO: Remplacer par un vrai appel API vers le backend
export interface AppUser {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  niveau: number;
  derniereConnexion: string;
  dateInscription?: string;
}

export interface QuizResultData {
  name: string;
  correct: number;
  incorrect: number;
}

export interface ActivityChartData {
  date: string;
  userCount: number;
}

export interface Activity {
  id: number;
  date: string;
  user: string;
  activity: string;
  title: string;
  result: {
    status: string;
    type: "success" | "failure";
  };
}

export interface UserStats {
  userId: number;
  activiteData: ActivityChartData[];
  progression: number;
  scoreExposition: number;
  quizResultsByDifficulty: {
    facile: { correct: number; incorrect: number };
    moyen: { correct: number; incorrect: number };
    difficile: { correct: number; incorrect: number };
  };
  quizResultsByCategory: QuizResultData[];
  recentActivities: Activity[];
}

export interface SiteExpose {
  id: string;
  nom: string;
  urlExposition?: string;
}

export interface OSINTScan {
  id: string;
  userId: number;
  dateScan: Date;
  scoreExposition: number;
  sitesExposés: SiteExpose[];
  statut: "en cours" | "terminé" | "échoué";
}
