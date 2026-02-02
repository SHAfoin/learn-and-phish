import CampagnesTable from "@/app/app/phishing/campagnes/CampagnesTable";
import Link from "next/link";
import React from "react";

// Données placeholder pour les campagnes
const campagnesData = [
  {
    id: 1,
    nom: "Sensibilisation Q1 2026 - Phishing bancaire",
    dateLancement: "15/01/2026",
    statut: "Terminée",
    templateMail: "Alerte sécurité bancaire",
    templatePage: "Page de connexion bancaire",
  },
  {
    id: 2,
    nom: "Test Microsoft 365 - Département IT",
    dateLancement: "22/01/2026",
    statut: "En cours",
    templateMail: "Notification Microsoft",
    templatePage: "Portail Microsoft 365",
  },
  {
    id: 3,
    nom: "Formation PayPal - Comptabilité",
    dateLancement: "05/02/2026",
    statut: "Planifiée",
    templateMail: "PayPal - Confirmation de paiement",
    templatePage: "Page de vérification PayPal",
  },
  {
    id: 4,
    nom: "Campagne Google - Tous les employés",
    dateLancement: "28/01/2026",
    statut: "En cours",
    templateMail: "Google - Nouvelle connexion",
    templatePage: "Interface de réinitialisation Google",
  },
  {
    id: 5,
    nom: "Test Amazon - Service client",
    dateLancement: "10/01/2026",
    statut: "Terminée",
    templateMail: "Amazon - Problème de livraison",
    templatePage: "Connexion Amazon",
  },
  {
    id: 6,
    nom: "Formation LinkedIn - Recrutement RH",
    dateLancement: "18/02/2026",
    statut: "Planifiée",
    templateMail: "LinkedIn - Message recruteur",
    templatePage: "Page de connexion LinkedIn",
  },
  {
    id: 7,
    nom: "Sensibilisation Orange - Support technique",
    dateLancement: "03/02/2026",
    statut: "En cours",
    templateMail: "Orange - Facture impayée",
    templatePage: "Portail Orange",
  },
  {
    id: 8,
    nom: "Test Free Mobile - Direction",
    dateLancement: "12/01/2026",
    statut: "Terminée",
    templateMail: "Free Mobile - Mise à jour forfait",
    templatePage: "Interface Free Mobile",
  },
  {
    id: 9,
    nom: "Campagne La Poste - Logistique",
    dateLancement: "25/02/2026",
    statut: "Planifiée",
    templateMail: "La Poste - Colis en attente",
    templatePage: "Page de connexion La Poste",
  },
  {
    id: 10,
    nom: "Formation Impôts - Département finance",
    dateLancement: "08/02/2026",
    statut: "Planifiée",
    templateMail: "Impots.gouv - Remboursement",
    templatePage: "Portail Impots.gouv.fr",
  },
  {
    id: 11,
    nom: "Test Ameli - Ressources humaines",
    dateLancement: "01/02/2026",
    statut: "En cours",
    templateMail: "Ameli - Mise à jour carte vitale",
    templatePage: "Interface Ameli",
  },
  {
    id: 12,
    nom: "Sensibilisation Netflix - Tous les services",
    dateLancement: "20/01/2026",
    statut: "Terminée",
    templateMail: "Netflix - Problème de paiement",
    templatePage: "Page de vérification Netflix",
  },
  {
    id: 13,
    nom: "Campagne Apple - Département IT",
    dateLancement: "14/02/2026",
    statut: "Planifiée",
    templateMail: "Apple - Achat suspect",
    templatePage: "Connexion Apple ID",
  },
  {
    id: 14,
    nom: "Formation Crédit Agricole - Finance",
    dateLancement: "29/01/2026",
    statut: "En cours",
    templateMail: "Crédit Agricole - Sécurité renforcée",
    templatePage: "Portail Crédit Agricole",
  },
  {
    id: 15,
    nom: "Test Société Générale - Comptabilité",
    dateLancement: "06/01/2026",
    statut: "Terminée",
    templateMail: "Société Générale - Opération bloquée",
    templatePage: "Interface Société Générale",
  },
];

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
        <Link href="/app/phishing">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Campagnes
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <CampagnesTable campagnes={campagnesData} />
      </div>
    </div>
  );
}
