import ModeleMailsTable from "@/app/app/phishing/mails/ModeleMailsTable";
import Link from "next/link";
import React from "react";

// Données placeholder pour les modèles de mails
const modelesMailsData = [
  {
    id: 1,
    nom: "Alerte sécurité bancaire - Vérification urgente requise",
    expediteur: "securite@banque-nationale.com",
    objet: "⚠️ Action urgente requise - Vérification de votre compte",
  },
  {
    id: 2,
    nom: "Notification Microsoft - Activité suspecte détectée",
    expediteur: "no-reply@account-microsoft.com",
    objet: "Activité inhabituelle sur votre compte Microsoft",
  },
  {
    id: 3,
    nom: "PayPal - Confirmation de paiement requise",
    expediteur: "service@paypal-secure.com",
    objet: "Confirmez votre paiement de 249,99€",
  },
  {
    id: 4,
    nom: "Google - Nouvelle connexion détectée",
    expediteur: "noreply@google-security.com",
    objet: "Nouvelle connexion depuis un appareil inconnu",
  },
  {
    id: 5,
    nom: "Amazon - Problème de livraison",
    expediteur: "commande@amazon-fr.com",
    objet: "Votre colis est bloqué - Action requise",
  },
  {
    id: 6,
    nom: "LinkedIn - Message important d'un recruteur",
    expediteur: "messages@linkedin-mail.com",
    objet: "Opportunité professionnelle exclusive pour vous",
  },
  {
    id: 7,
    nom: "Orange - Facture impayée",
    expediteur: "factures@orange-client.fr",
    objet: "Votre facture de 89,90€ est en attente de paiement",
  },
  {
    id: 8,
    nom: "Free Mobile - Mise à jour du forfait",
    expediteur: "service-client@free-mobile.fr",
    objet: "Nouvelle offre exclusive - Mise à niveau gratuite",
  },
  {
    id: 9,
    nom: "La Poste - Colis en attente",
    expediteur: "suivi@laposte-tracking.fr",
    objet: "Votre colis attend au centre de tri",
  },
  {
    id: 10,
    nom: "Impots.gouv - Remboursement en attente",
    expediteur: "noreply@impots-gouv.fr",
    objet: "Remboursement d'impôts de 487,50€ à récupérer",
  },
  {
    id: 11,
    nom: "Ameli - Mise à jour carte vitale",
    expediteur: "contact@ameli-assurance.fr",
    objet: "Votre carte Vitale expire bientôt",
  },
  {
    id: 12,
    nom: "Netflix - Problème de paiement",
    expediteur: "billing@netflix-account.com",
    objet: "Échec du paiement - Mettez à jour vos informations",
  },
  {
    id: 13,
    nom: "Apple - Achat suspect détecté",
    expediteur: "appleid@apple-security.com",
    objet: "Achat de 299€ sur l'App Store - Confirmez",
  },
  {
    id: 14,
    nom: "Crédit Agricole - Sécurité renforcée",
    expediteur: "securite@ca-enligne.fr",
    objet: "Activation obligatoire de la double authentification",
  },
  {
    id: 15,
    nom: "Société Générale - Opération bloquée",
    expediteur: "alerte@sg-banque.fr",
    objet: "Transaction de 1 250€ bloquée - Vérification nécessaire",
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
          Modèles de mails
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModeleMailsTable modeles={modelesMailsData} />
      </div>
    </div>
  );
}
