import { ProfilEnvoi } from "./types";

export const profilsEnvoi: ProfilEnvoi[] = [
  {
    id: 1,
    nom: "SMTP principal",
    from: "no-reply@entreprise.com",
    hote: "smtp.entreprise.com",
    username: "smtp-user",
    password: "********",
    type: "smtp",
  },
  {
    id: 2,
    nom: "SMTP secondaire",
    from: "alerts@entreprise.com",
    hote: "smtp2.entreprise.com",
    username: "alerts",
    password: "********",
    type: "smtp",
  },
];
