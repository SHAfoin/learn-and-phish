import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GroupesTable from "@/components/GroupesTable";

// Données placeholder pour les campagnes
const campagnesData = [
  {
    id: 1,
    nom: "Campagne de sensibilisation Q1 2025 - Sécurité des mots de passe",
    dateLancement: "15/01/2025",
    url: "https://phishing-test.example.com/campagne-q1-securite-mdp",
  },
  {
    id: 2,
    nom: "Test phishing département RH",
    dateLancement: "22/02/2025",
    url: "https://phishing-test.example.com/rh-test",
  },
  {
    id: 3,
    nom: "Formation anti-phishing pour nouveaux employés",
    dateLancement: "10/03/2025",
    url: "https://phishing-test.example.com/formation-nouveaux",
  },
  {
    id: 4,
    nom: "Simulation d'attaque ciblée - Département Finance",
    dateLancement: "05/04/2025",
    url: "https://phishing-test.example.com/simulation-finance",
  },
];

// Données placeholder pour les modèles de mails
const modelesMailsData = [
  {
    id: 1,
    nom: "Notification de sécurité - Mise à jour urgente de votre mot de passe",
  },
  {
    id: 2,
    nom: "Confirmation de livraison",
  },
  {
    id: 3,
    nom: "Réinitialisation de compte bancaire - Action requise immédiatement",
  },
  {
    id: 4,
    nom: "Invitation à un événement d'entreprise",
  },
];

// Données placeholder pour les modèles de pages internet
const modelesPageInternetData = [
  {
    id: 1,
    nom: "Page de connexion bancaire - Authentification sécurisée en ligne",
  },
  {
    id: 2,
    nom: "Portail Microsoft 365",
  },
  {
    id: 3,
    nom: "Page de vérification de compte PayPal - Sécurité renforcée",
  },
  {
    id: 4,
    nom: "Interface de réinitialisation Google",
  },
];

// Données placeholder pour les groupes
const groupesData = [
  {
    id: 1,
    nom: "Groupe alpha",
    date: "02/10/2025",
    nombreUtilisateurs: 10,
  },
  {
    id: 2,
    nom: "Groupe beta",
    date: "12/04/2025",
    nombreUtilisateurs: 25,
  },
  {
    id: 3,
    nom: "Groupe gamma",
    date: "18/06/2025",
    nombreUtilisateurs: 15,
  },
  {
    id: 4,
    nom: "Département IT",
    date: "05/01/2025",
    nombreUtilisateurs: 42,
  },
  {
    id: 5,
    nom: "Équipe Marketing",
    date: "22/03/2025",
    nombreUtilisateurs: 18,
  },
  {
    id: 6,
    nom: "Groupe delta",
    date: "15/02/2025",
    nombreUtilisateurs: 8,
  },
  {
    id: 7,
    nom: "Service Comptabilité",
    date: "28/01/2025",
    nombreUtilisateurs: 12,
  },
  {
    id: 8,
    nom: "Équipe Développement",
    date: "10/03/2025",
    nombreUtilisateurs: 35,
  },
  {
    id: 9,
    nom: "Groupe epsilon",
    date: "08/04/2025",
    nombreUtilisateurs: 20,
  },
  {
    id: 10,
    nom: "Service Client",
    date: "19/02/2025",
    nombreUtilisateurs: 22,
  },
  {
    id: 11,
    nom: "Groupe zeta",
    date: "25/03/2025",
    nombreUtilisateurs: 14,
  },
  {
    id: 12,
    nom: "Direction Générale",
    date: "03/01/2025",
    nombreUtilisateurs: 6,
  },
  {
    id: 13,
    nom: "Équipe Support",
    date: "17/04/2025",
    nombreUtilisateurs: 16,
  },
  {
    id: 14,
    nom: "Service Logistique",
    date: "11/02/2025",
    nombreUtilisateurs: 28,
  },
  {
    id: 15,
    nom: "Groupe eta",
    date: "29/03/2025",
    nombreUtilisateurs: 11,
  },
];

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Phishing
        </h1>
      </div>
      {/* Campagnes Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl text-ocean-950 font-bold">Campagnes</h2>
        <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Nom</TableHead>
                <TableHead className="font-bold">Date de lancement</TableHead>
                <TableHead className="font-bold">URL</TableHead>
                <TableHead className="font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campagnesData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="p-8 text-center">
                    <p className="text-neutral-400">Aucune campagne</p>
                  </TableCell>
                </TableRow>
              ) : (
                campagnesData.slice(0, 3).map((campagne) => (
                  <TableRow key={campagne.id}>
                    <TableCell className="font-medium">
                      <div className="truncate max-w-[250px]">
                        {campagne.nom}
                      </div>
                    </TableCell>
                    <TableCell>{campagne.dateLancement}</TableCell>
                    <TableCell>
                      <div className="truncate max-w-[200px] text-ocean-700">
                        {campagne.url}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <MoreHorizontalIcon />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Modifier</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <div className="pt-3 flex justify-end gap-3">
            <Link href="/todo">
              <Button variant="outline" className="border-ocean-850">
                Voir toutes les campagnes
              </Button>
            </Link>
            <Link href="/todo">
              <Button>Créer une campagne</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="flex w-full flex-col xl:flex-row gap-6">
        {/* Modèles de mails */}
        <div className="flex flex-col flex-1 gap-3">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Modèles de mails
          </h2>
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Nom</TableHead>
                  <TableHead className="font-bold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelesMailsData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucun modèle de mail</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesMailsData.slice(0, 3).map((modele) => (
                    <TableRow key={modele.id}>
                      <TableCell className="font-medium">
                        <div className="truncate max-w-[300px]">
                          {modele.nom}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            >
                              <MoreHorizontalIcon />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="pt-3 flex justify-end gap-3">
              <Link href="/todo">
                <Button variant="outline" className="border-ocean-850">
                  Voir tous les modèles
                </Button>
              </Link>
              <Link href="/todo">
                <Button>Créer un modèle</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Modèles de page internet */}
        <div className="flex flex-col flex-1 gap-3">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Modèles de page internet
          </h2>
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Nom</TableHead>
                  <TableHead className="font-bold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelesPageInternetData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucune campagne</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesPageInternetData.slice(0, 3).map((modele) => (
                    <TableRow key={modele.id}>
                      <TableCell className="font-medium">
                        <div className="truncate max-w-[300px]">
                          {modele.nom}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            >
                              <MoreHorizontalIcon />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="pt-3 flex justify-end gap-3">
              <Link href="/todo">
                <Button variant="outline" className="border-ocean-850">
                  Voir toutes les pages
                </Button>
              </Link>
              <Link href="/todo">
                <Button>Créer une page</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Groupes Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-ocean-950 font-bold">Groupes</h2>
        <GroupesTable groupes={groupesData} />
      </div>
    </div>
  );
}
