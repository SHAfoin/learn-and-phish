import ModelesPagesTable from "@/app/app/phishing/template-internet/ModelesPagesTable";
import Link from "next/link";
import React from "react";

// Données placeholder pour les modèles de pages internet
const modelesPageInternetData = [
  {
    id: 1,
    nom: "Page de connexion bancaire - Authentification sécurisée en ligne",
    url: "https://phishing-test.example.com/banque-authentification",
  },
  {
    id: 2,
    nom: "Portail Microsoft 365",
    url: "https://phishing-test.example.com/microsoft-365-login",
  },
  {
    id: 3,
    nom: "Page de vérification de compte PayPal - Sécurité renforcée",
    url: "https://phishing-test.example.com/paypal-verification",
  },
  {
    id: 4,
    nom: "Interface de réinitialisation Google",
    url: "https://phishing-test.example.com/google-reset",
  },
  {
    id: 5,
    nom: "Connexion Amazon - Vérification de compte",
    url: "https://phishing-test.example.com/amazon-verify",
  },
  {
    id: 6,
    nom: "Page de connexion LinkedIn professionnelle",
    url: "https://phishing-test.example.com/linkedin-login",
  },
  {
    id: 7,
    nom: "Portail Orange - Espace client sécurisé",
    url: "https://phishing-test.example.com/orange-client",
  },
  {
    id: 8,
    nom: "Interface Free Mobile - Authentification",
    url: "https://phishing-test.example.com/free-mobile-auth",
  },
  {
    id: 9,
    nom: "Page de connexion La Poste - Services en ligne",
    url: "https://phishing-test.example.com/laposte-services",
  },
  {
    id: 10,
    nom: "Portail Impots.gouv.fr - Accès sécurisé",
    url: "https://phishing-test.example.com/impots-gouv",
  },
  {
    id: 11,
    nom: "Interface Ameli - Compte assuré",
    url: "https://phishing-test.example.com/ameli-compte",
  },
  {
    id: 12,
    nom: "Page de vérification Netflix - Mise à jour paiement",
    url: "https://phishing-test.example.com/netflix-payment",
  },
  {
    id: 13,
    nom: "Connexion Apple ID - Sécurité du compte",
    url: "https://phishing-test.example.com/apple-id-security",
  },
  {
    id: 14,
    nom: "Portail Crédit Agricole - Banque en ligne",
    url: "https://phishing-test.example.com/credit-agricole",
  },
  {
    id: 15,
    nom: "Interface Société Générale - Espace personnel",
    url: "https://phishing-test.example.com/societe-generale",
  },
];

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-3 items-center">
        <Link href="/app/phishing">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12  rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de pages
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModelesPagesTable modeles={modelesPageInternetData} />
      </div>
    </div>
  );
}
