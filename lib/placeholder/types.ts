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

export interface Groupe {
  id: number;
  nom: string;
  date: string;
  nombreUtilisateurs: number;
}
