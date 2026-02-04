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
