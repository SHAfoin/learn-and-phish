"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PageType } from "./types";

interface TutorialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pageType: PageType;
}

export default function TutorialDialog({
  open,
  onOpenChange,
  pageType,
}: TutorialDialogProps) {
  const getTutorialContent = () => {
    switch (pageType) {
      case "phishing":
        return {
          title: "Guide de la page Phishing",
          sections: [
            {
              title: "Utilité de cette page",
              content:
                "Cette page est le tableau de bord principal pour gérer vos campagnes de phishing de sensibilisation. Elle vous permet de créer et superviser toutes vos activités de formation à la sécurité.",
            },
            {
              title: "Campagnes",
              content:
                "Les campagnes sont des simulations d'attaques de phishing destinées à former vos utilisateurs. Vous pouvez créer une nouvelle campagne, la configurer avec un modèle d'email et une page de destination, puis suivre les résultats en temps réel.",
            },
            {
              title: "Modèles de mails",
              content:
                "Les modèles d'emails sont les messages que vos utilisateurs recevront. Créez des emails réalistes simulant des tentatives de phishing courantes (fausses factures, notifications de sécurité, etc.) pour former efficacement votre équipe.",
            },
            {
              title: "Modèles de pages internet",
              content:
                "Les pages de destination sont les sites web factices où les utilisateurs arrivent après avoir cliqué sur un lien de phishing. Ces pages permettent de capturer les interactions et d'informer l'utilisateur sur les dangers du phishing.",
            },
            {
              title: "Profils d'envoi",
              content:
                "Les profils d'envoi configurent les paramètres de l'expéditeur (adresse email, serveur SMTP) utilisés pour envoyer vos emails de test. Configurez-les pour que vos emails de simulation paraissent authentiques.",
            },
            {
              title: "Groupes",
              content:
                "Les groupes vous permettent d'organiser vos utilisateurs cibles. Créez des groupes par département, localisation ou tout autre critère pour cibler précisément vos campagnes de formation.",
            },
          ],
        };
      case "campagnes":
        return {
          title: "Guide des Campagnes",
          sections: [
            {
              title: "Qu'est-ce qu'une campagne ?",
              content:
                "Une campagne est une simulation complète d'attaque de phishing. Elle combine un modèle d'email, une page de destination, un groupe cible et un profil d'envoi pour créer un exercice de formation réaliste.",
            },
            {
              title: "Créer une campagne",
              content:
                "Cliquez sur 'Créer une campagne' pour démarrer. Vous devrez sélectionner un modèle d'email (le message que les utilisateurs recevront), une page de destination (où ils arrivent s'ils cliquent), un groupe cible (qui recevra l'email) et un profil d'envoi (les paramètres d'expédition).",
            },
            {
              title: "Suivi des résultats",
              content:
                "Après le lancement, vous pouvez suivre en temps réel combien d'utilisateurs ont ouvert l'email, cliqué sur le lien, ou saisi des informations sur la page de phishing. Ces statistiques vous aident à identifier les besoins de formation.",
            },
            {
              title: "Actions disponibles",
              content:
                "Pour chaque campagne, vous pouvez consulter les détails complets en cliquant sur son nom, modifier ses paramètres ou la supprimer si elle n'est plus nécessaire.",
            },
          ],
        };
      case "mails":
        return {
          title: "Guide des Modèles de mails",
          sections: [
            {
              title: "Utilité des modèles d'emails",
              content:
                "Les modèles d'emails sont le cœur de vos campagnes de sensibilisation. Ils simulent des emails de phishing réels que vos utilisateurs pourraient rencontrer dans leur vie quotidienne.",
            },
            {
              title: "Créer un modèle efficace",
              content:
                "Concevez des emails réalistes en vous inspirant de tentatives de phishing courantes : fausses factures, notifications de livraison, alertes de sécurité, demandes urgentes de la direction, etc. Plus le modèle est réaliste, plus la formation sera efficace.",
            },
            {
              title: "Éléments clés",
              content:
                "Votre modèle doit inclure un objet accrocheur, un contenu convaincant, et un lien vers votre page de destination. Vous pouvez personnaliser l'email avec des variables (nom, prénom, etc.) pour le rendre plus crédible.",
            },
            {
              title: "Gestion des modèles",
              content:
                "Vous pouvez créer plusieurs modèles pour différents types de scénarios de phishing, les modifier pour les améliorer, ou les supprimer s'ils ne sont plus pertinents. Réutilisez vos meilleurs modèles dans plusieurs campagnes.",
            },
          ],
        };
      case "pages":
        return {
          title: "Guide des Modèles de pages internet",
          sections: [
            {
              title: "Rôle des pages de destination",
              content:
                "Les pages de destination sont les sites web factices où arrivent les utilisateurs après avoir cliqué sur un lien de phishing. Elles simulent des pages de connexion, des formulaires, ou d'autres sites légitimes.",
            },
            {
              title: "Créer une page réaliste",
              content:
                "Concevez des pages qui imitent des sites réels (pages de connexion Microsoft, portails internes, sites bancaires, etc.) pour créer une expérience de formation authentique. Vous pouvez importer du HTML ou utiliser des templates prédéfinis.",
            },
            {
              title: "Capture et sensibilisation",
              content:
                "Ces pages peuvent capturer les informations que les utilisateurs saisiraient (identifiants, mots de passe) à des fins de mesure uniquement. Après la saisie, affichez un message éducatif expliquant les dangers du phishing et comment le reconnaître.",
            },
            {
              title: "Gestion des modèles",
              content:
                "Créez différents types de pages pour simuler divers scénarios d'attaque, modifiez-les pour les améliorer, ou supprimez celles qui ne sont plus utilisées. Variez les pages pour former vos utilisateurs à différents types de menaces.",
            },
          ],
        };
      case "osint":
        return {
          title: "Guide de l'OSINT",
          sections: [
            {
              title: "Qu'est-ce que l'OSINT ?",
              content:
                "OSINT (Open Source Intelligence) est la recherche et l'analyse d'informations publiquement accessibles sur internet. Cette page vous permet d'identifier les empreintes numériques de votre organisation sur diverses plateformes et d'évaluer votre exposition en ligne.",
            },
            {
              title: "Score d'exposition",
              content:
                "Le score d'exposition mesure le niveau de visibilité et d'informations sensibles accessibles publiquement sur votre organisation. Un score faible (vert) indique une bonne hygiène numérique, tandis qu'un score élevé (rouge) suggère une exposition importante qui pourrait être exploitée par des attaquants.",
            },
            {
              title: "Sites exposés",
              content:
                "Cette métrique indique le nombre de plateformes et sites web sur lesquels des informations relatives à votre organisation ont été détectées. Ces données peuvent inclure des profils sociaux, des documents publics, des configurations de serveurs, ou d'autres traces numériques.",
            },
            {
              title: "Recherche et filtrage",
              content:
                "Utilisez le champ de recherche pour filtrer les résultats par domaine ou plateforme spécifique. Cela vous permet de concentrer votre analyse sur des sources particulières et d'identifier rapidement les zones à risque.",
            },
            {
              title: "Lancer un nouveau scan",
              content:
                "Cliquez sur 'Nouveau scan' pour lancer une analyse actualisée de votre empreinte numérique. Les scans réguliers vous permettent de suivre l'évolution de votre exposition et de détecter rapidement l'apparition de nouvelles informations sensibles en ligne.",
            },
            {
              title: "Utilité pour la sécurité",
              content:
                "En comprenant quelles informations sur votre organisation sont publiquement disponibles, vous pouvez mieux vous protéger contre les attaques de type ingénierie sociale et phishing. Les attaquants utilisent souvent l'OSINT pour collecter des informations et rendre leurs attaques plus crédibles.",
            },
          ],
        };
      default:
        return {
          title: "Tutoriel",
          sections: [
            {
              title: "Bienvenue",
              content:
                "Utilisez les pages de phishing pour créer et gérer vos campagnes de sensibilisation à la sécurité.",
            },
          ],
        };
    }
  };

  const content = getTutorialContent();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-ocean-950">
            {content.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Guide d'utilisation de la page
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {content.sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-ocean-900">
                {section.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
