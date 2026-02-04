"use client";

import { useState } from "react";
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
import GroupesTable from "@/app/app/phishing/GroupesTable";
import { GroupCreateDialog } from "@/app/app/phishing/GroupCreateDialog";
import {
  Campagne,
  Groupe,
  ModeleMail,
  ModelePage,
  campagnes,
  groupes,
  modelesMails,
  modelesPages,
} from "@/lib/placeholder";
import { CampaignCreateDialog } from "@/app/app/phishing/campagnes/CampaignCreateDialog";
import { ModeleMailCreateDialog } from "@/app/app/phishing/mails/ModeleMailCreateDialog";
import { ModelePageCreateDialog } from "@/app/app/phishing/template-internet/ModelePageCreateDialog";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMailDialogOpen, setIsMailDialogOpen] = useState(false);
  const [isPageDialogOpen, setIsPageDialogOpen] = useState(false);
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [selectedCampagne, setSelectedCampagne] = useState<Campagne | null>(
    null,
  );
  const [selectedMail, setSelectedMail] = useState<ModeleMail | null>(null);
  const [selectedPage, setSelectedPage] = useState<ModelePage | null>(null);
  const [selectedGroupe, setSelectedGroupe] = useState<Groupe | null>(null);

  const handleDeleteCampagne = (campagne: Campagne) => {
    if (!window.confirm("Vous êtes sûr ?")) return;
    console.log(campagne);
  };

  const handleDeleteMail = (modele: ModeleMail) => {
    if (!window.confirm("Vous êtes sûr ?")) return;
    console.log(modele);
  };

  const handleDeletePage = (modele: ModelePage) => {
    if (!window.confirm("Vous êtes sûr ?")) return;
    console.log(modele);
  };

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
              {campagnes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="p-8 text-center">
                    <p className="text-neutral-400">Aucune campagne</p>
                  </TableCell>
                </TableRow>
              ) : (
                campagnes.slice(0, 3).map((campagne) => (
                  <TableRow key={campagne.id}>
                    <TableCell className="font-medium">
                      <div className="truncate max-w-[250px]">
                        <Link
                          href={`/app/phishing/campagnes/${campagne.id}`}
                          className="truncate text-ocean-700 hover:underline"
                        >
                          {campagne.nom}
                        </Link>
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
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedCampagne(campagne);
                              setIsDialogOpen(true);
                            }}
                          >
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => handleDeleteCampagne(campagne)}
                          >
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
            <Link href="/app/phishing/campagnes">
              <Button variant="outline" className="border-ocean-850">
                Voir toutes les campagnes
              </Button>
            </Link>
            <Button
              onClick={() => {
                setSelectedCampagne(null);
                setIsDialogOpen(true);
              }}
            >
              Créer une campagne
            </Button>
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
                {modelesMails.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucun modèle de mail</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesMails.slice(0, 3).map((modele) => (
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
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedMail(modele);
                                setIsMailDialogOpen(true);
                              }}
                            >
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              variant="destructive"
                              onClick={() => handleDeleteMail(modele)}
                            >
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
              <Link href="/app/phishing/mails">
                <Button variant="outline" className="border-ocean-850">
                  Voir tous les modèles
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setSelectedMail(null);
                  setIsMailDialogOpen(true);
                }}
              >
                Créer un modèle
              </Button>
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
                {modelesPages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucune campagne</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesPages.slice(0, 3).map((modele) => (
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
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedPage(modele);
                                setIsPageDialogOpen(true);
                              }}
                            >
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              variant="destructive"
                              onClick={() => handleDeletePage(modele)}
                            >
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
              <Link href="/app/phishing/template-internet">
                <Button variant="outline" className="border-ocean-850">
                  Voir toutes les pages
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setSelectedPage(null);
                  setIsPageDialogOpen(true);
                }}
              >
                Créer une page
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Groupes Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-ocean-950 font-bold">Groupes</h2>
        <GroupesTable
          groupes={groupes}
          onCreate={() => {
            setSelectedGroupe(null);
            setIsGroupDialogOpen(true);
          }}
          onEdit={(groupe) => {
            setSelectedGroupe(groupe);
            setIsGroupDialogOpen(true);
          }}
        />
      </div>

      {/* Campaign Create Dialog */}
      <CampaignCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedCampagne ?? undefined}
      />
      <ModeleMailCreateDialog
        open={isMailDialogOpen}
        onOpenChange={setIsMailDialogOpen}
        initialData={selectedMail ?? undefined}
      />
      <ModelePageCreateDialog
        open={isPageDialogOpen}
        onOpenChange={setIsPageDialogOpen}
        initialData={selectedPage ?? undefined}
      />
      <GroupCreateDialog
        open={isGroupDialogOpen}
        onOpenChange={setIsGroupDialogOpen}
        initialData={selectedGroupe ?? undefined}
      />
    </div>
  );
}
