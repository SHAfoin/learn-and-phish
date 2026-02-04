import { Groupe, User } from "./types";

const createUsers = (baseId: number, users: Omit<User, "id">[]): User[] =>
  users.map((user, index) => ({
    ...user,
    id: baseId + index,
  }));

export const groupes: Groupe[] = [
  {
    id: 1,
    nom: "Groupe alpha",
    date: "02/10/2025",
    utilisateurs: createUsers(100, [
      {
        prenom: "Lucas",
        nom: "Martin",
        email: "lucas.martin@exemple.com",
        role: "Chef de projet",
      },
      {
        prenom: "Emma",
        nom: "Durand",
        email: "emma.durand@exemple.com",
        role: "Analyste",
      },
      {
        prenom: "Noah",
        nom: "Petit",
        email: "noah.petit@exemple.com",
        role: "Développeur",
      },
    ]),
  },
  {
    id: 2,
    nom: "Groupe beta",
    date: "12/04/2025",
    utilisateurs: createUsers(200, [
      {
        prenom: "Chloé",
        nom: "Moreau",
        email: "chloe.moreau@exemple.com",
        role: "RH",
      },
      {
        prenom: "Liam",
        nom: "Simon",
        email: "liam.simon@exemple.com",
        role: "Chargé marketing",
      },
    ]),
  },
  {
    id: 3,
    nom: "Groupe gamma",
    date: "18/06/2025",
    utilisateurs: createUsers(300, [
      {
        prenom: "Zoé",
        nom: "Roux",
        email: "zoe.roux@exemple.com",
        role: "Assistante",
      },
      {
        prenom: "Ethan",
        nom: "Fontaine",
        email: "ethan.fontaine@exemple.com",
        role: "DevOps",
      },
    ]),
  },
  {
    id: 4,
    nom: "Département IT",
    date: "05/01/2025",
    utilisateurs: createUsers(400, [
      {
        prenom: "Sarah",
        nom: "Leroy",
        email: "sarah.leroy@exemple.com",
        role: "DSI",
      },
      {
        prenom: "Hugo",
        nom: "Blanc",
        email: "hugo.blanc@exemple.com",
        role: "Tech lead",
      },
      {
        prenom: "Inès",
        nom: "Dubois",
        email: "ines.dubois@exemple.com",
        role: "Support",
      },
    ]),
  },
  {
    id: 5,
    nom: "Équipe Marketing",
    date: "22/03/2025",
    utilisateurs: createUsers(500, [
      {
        prenom: "Jade",
        nom: "Perrin",
        email: "jade.perrin@exemple.com",
        role: "Chef de produit",
      },
      {
        prenom: "Gabriel",
        nom: "Garnier",
        email: "gabriel.garnier@exemple.com",
        role: "Content manager",
      },
    ]),
  },
  {
    id: 6,
    nom: "Groupe delta",
    date: "15/02/2025",
    utilisateurs: createUsers(600, [
      {
        prenom: "Léna",
        nom: "Bonnet",
        email: "lena.bonnet@exemple.com",
        role: "Analyste",
      },
    ]),
  },
  {
    id: 7,
    nom: "Service Comptabilité",
    date: "28/01/2025",
    utilisateurs: createUsers(700, [
      {
        prenom: "Adam",
        nom: "Chevalier",
        email: "adam.chevalier@exemple.com",
        role: "Comptable",
      },
      {
        prenom: "Mila",
        nom: "Dupont",
        email: "mila.dupont@exemple.com",
        role: "Contrôle de gestion",
      },
    ]),
  },
  {
    id: 8,
    nom: "Équipe Développement",
    date: "10/03/2025",
    utilisateurs: createUsers(800, [
      {
        prenom: "Théo",
        nom: "Marchand",
        email: "theo.marchand@exemple.com",
        role: "Frontend",
      },
      {
        prenom: "Camille",
        nom: "Renaud",
        email: "camille.renaud@exemple.com",
        role: "Backend",
      },
      {
        prenom: "Nina",
        nom: "Caron",
        email: "nina.caron@exemple.com",
        role: "QA",
      },
    ]),
  },
  {
    id: 9,
    nom: "Groupe epsilon",
    date: "08/04/2025",
    utilisateurs: createUsers(900, [
      {
        prenom: "Louis",
        nom: "Fernandez",
        email: "louis.fernandez@exemple.com",
        role: "Consultant",
      },
    ]),
  },
  {
    id: 10,
    nom: "Service Client",
    date: "19/02/2025",
    utilisateurs: createUsers(1000, [
      {
        prenom: "Maël",
        nom: "Gauthier",
        email: "mael.gauthier@exemple.com",
        role: "Support",
      },
      {
        prenom: "Aya",
        nom: "Boucher",
        email: "aya.boucher@exemple.com",
        role: "Conseillère",
      },
    ]),
  },
  {
    id: 11,
    nom: "Groupe zeta",
    date: "25/03/2025",
    utilisateurs: createUsers(1100, [
      {
        prenom: "Paul",
        nom: "Brun",
        email: "paul.brun@exemple.com",
        role: "Chargé qualité",
      },
    ]),
  },
  {
    id: 12,
    nom: "Direction Générale",
    date: "03/01/2025",
    utilisateurs: createUsers(1200, [
      {
        prenom: "Claire",
        nom: "Meunier",
        email: "claire.meunier@exemple.com",
        role: "Directrice",
      },
      {
        prenom: "Arthur",
        nom: "Lopez",
        email: "arthur.lopez@exemple.com",
        role: "Assistant",
      },
    ]),
  },
  {
    id: 13,
    nom: "Équipe Support",
    date: "17/04/2025",
    utilisateurs: createUsers(1300, [
      {
        prenom: "Lola",
        nom: "Colin",
        email: "lola.colin@exemple.com",
        role: "Support",
      },
      {
        prenom: "Rayan",
        nom: "Bouvier",
        email: "rayan.bouvier@exemple.com",
        role: "Support",
      },
    ]),
  },
  {
    id: 14,
    nom: "Service Logistique",
    date: "11/02/2025",
    utilisateurs: createUsers(1400, [
      {
        prenom: "Manon",
        nom: "Guerin",
        email: "manon.guerin@exemple.com",
        role: "Logistique",
      },
      {
        prenom: "Yanis",
        nom: "Leclerc",
        email: "yanis.leclerc@exemple.com",
        role: "Planificateur",
      },
    ]),
  },
  {
    id: 15,
    nom: "Groupe eta",
    date: "29/03/2025",
    utilisateurs: createUsers(1500, [
      {
        prenom: "Eva",
        nom: "Muller",
        email: "eva.muller@exemple.com",
        role: "Assistante",
      },
    ]),
  },
];
