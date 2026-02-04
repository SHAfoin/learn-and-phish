import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchCampagneById,
  type CampagneUtilisateurStatut,
} from "@/lib/placeholder";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CampagneActions from "./CampagneActions";
import ChartSection from "./ChartSection";

const getCampagneStatutColor = (statut: string) => {
  switch (statut) {
    case "En cours":
      return "text-seaweed-600 bg-seaweed-50";
    case "Terminée":
      return "text-neutral-600 bg-neutral-100";
    case "Planifiée":
      return "text-ocean-600 bg-ocean-50";
    default:
      return "text-neutral-600 bg-neutral-100";
  }
};

const getUtilisateurStatut = (statut: CampagneUtilisateurStatut) => {
  switch (statut) {
    case "email envoyé":
      return {
        label: "Email envoyé",
        className: "text-seaweed-700 bg-seaweed-50",
      };
    case "email ouvert":
      return {
        label: "Email ouvert",
        className: "text-ocean-700 bg-ocean-50",
      };
    case "lien cliquée":
      return {
        label: "Lien cliqué",
        className: "text-amber-700 bg-amber-100",
      };
    case "données envoyées":
      return {
        label: "Données envoyées",
        className: "text-red-700 bg-red-100",
      };
    default:
      return {
        label: statut,
        className: "text-neutral-600 bg-neutral-100",
      };
  }
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const campagneId = Number((await params).id);
  if (Number.isNaN(campagneId)) {
    notFound();
  }

  const campagne = await fetchCampagneById(campagneId);
  if (!campagne) {
    notFound();
  }

  const utilisateurs = campagne.utilisateurs ?? [];

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
        <Link href="/app/phishing/campagnes">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight line-clamp-2">
          {campagne.nom}
        </h1>
      </div>

      <CampagneActions campagneId={campagne.id} campagneNom={campagne.nom} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-neutral-500">Identifiant</p>
              <p className="font-semibold text-ocean-950">{campagne.id}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Statut</p>
              <span
                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getCampagneStatutColor(
                  campagne.statut,
                )}`}
              >
                {campagne.statut}
              </span>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Date de début</p>
              <p className="font-semibold text-ocean-950">
                {campagne.dateDebut}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Date de fin</p>
              <p className="font-semibold text-ocean-950">
                {campagne.dateFin ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">URL de la campagne</p>
              <p className="font-semibold text-ocean-700 break-all">
                {campagne.url ?? "—"}
              </p>
            </div>
          </div>
        </div>

        <ChartSection />
      </div>

      <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-ocean-950">Utilisateurs</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[160px] min-w-[160px] max-w-[160px]">
                Nom
              </TableHead>
              <TableHead className="font-bold w-[160px] min-w-[160px] max-w-[160px]">
                Prénom
              </TableHead>
              <TableHead className="font-bold w-[180px] min-w-[180px] max-w-[180px]">
                Rôle
              </TableHead>
              <TableHead className="font-bold w-[220px] min-w-[220px] max-w-[220px]">
                Email
              </TableHead>
              <TableHead className="font-bold w-[180px] min-w-[180px] max-w-[180px]">
                Statut
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {utilisateurs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">Aucun utilisateur</p>
                </TableCell>
              </TableRow>
            ) : (
              utilisateurs.map((utilisateur) => {
                const status = getUtilisateurStatut(utilisateur.statut);
                return (
                  <TableRow key={utilisateur.id}>
                    <TableCell className="font-medium w-[160px] min-w-[160px] max-w-[160px]">
                      <div className="truncate">{utilisateur.nom}</div>
                    </TableCell>
                    <TableCell className="w-[160px] min-w-[160px] max-w-[160px]">
                      <div className="truncate">{utilisateur.prenom}</div>
                    </TableCell>
                    <TableCell className="w-[180px] min-w-[180px] max-w-[180px]">
                      <div className="truncate text-ocean-700">
                        {utilisateur.role}
                      </div>
                    </TableCell>
                    <TableCell className="w-[220px] min-w-[220px] max-w-[220px]">
                      <div className="truncate">{utilisateur.email}</div>
                    </TableCell>
                    <TableCell className="w-[180px] min-w-[180px] max-w-[180px]">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
