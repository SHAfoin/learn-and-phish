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
import ProfilsEnvoiTable from "@/app/app/phishing/ProfilsEnvoiTable";
import { GroupCreateDialog } from "@/app/app/phishing/GroupCreateDialog";
import {
  Campagne,
  Groupe,
  ModeleMail,
  ModelePage,
  ProfilEnvoi,
  campagnes,
  groupes,
  modelesMails,
  modelesPages,
  profilsEnvoi,
} from "@/lib/placeholder";
import { CampaignCreateDialog } from "@/app/app/phishing/campagnes/CampaignCreateDialog";
import { ModeleMailCreateDialog } from "@/app/app/phishing/mails/ModeleMailCreateDialog";
import { ModelePageCreateDialog } from "@/app/app/phishing/template-internet/ModelePageCreateDialog";
import { ProfilsEnvoiCreateDialog } from "@/app/app/phishing/ProfilsEnvoiCreateDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMailDialogOpen, setIsMailDialogOpen] = useState(false);
  const [isPageDialogOpen, setIsPageDialogOpen] = useState(false);
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [isProfilDialogOpen, setIsProfilDialogOpen] = useState(false);
  const [isDeleteCampagneOpen, setIsDeleteCampagneOpen] = useState(false);
  const [isDeleteMailOpen, setIsDeleteMailOpen] = useState(false);
  const [isDeletePageOpen, setIsDeletePageOpen] = useState(false);
  const [isDeleteGroupeOpen, setIsDeleteGroupeOpen] = useState(false);
  const [isDeleteProfilOpen, setIsDeleteProfilOpen] = useState(false);
  const [selectedCampagne, setSelectedCampagne] = useState<Campagne | null>(
    null,
  );
  const [selectedMail, setSelectedMail] = useState<ModeleMail | null>(null);
  const [selectedPage, setSelectedPage] = useState<ModelePage | null>(null);
  const [selectedGroupe, setSelectedGroupe] = useState<Groupe | null>(null);
  const [selectedProfil, setSelectedProfil] = useState<ProfilEnvoi | null>(
    null,
  );

  const handleDeleteCampagne = (campagne: Campagne) => {
    setSelectedCampagne(campagne);
    setIsDeleteCampagneOpen(true);
  };

  const handleDeleteMail = (modele: ModeleMail) => {
    setSelectedMail(modele);
    setIsDeleteMailOpen(true);
  };

  const handleDeletePage = (modele: ModelePage) => {
    setSelectedPage(modele);
    setIsDeletePageOpen(true);
  };

  const handleDeleteGroupe = (groupe: Groupe) => {
    setSelectedGroupe(groupe);
    setIsDeleteGroupeOpen(true);
  };

  const handleDeleteProfil = (profil: ProfilEnvoi) => {
    setSelectedProfil(profil);
    setIsDeleteProfilOpen(true);
  };

  const confirmDeleteCampagne = () => {
    if (!selectedCampagne) return;
    console.log(selectedCampagne);
    setIsDeleteCampagneOpen(false);
  };

  const confirmDeleteMail = () => {
    if (!selectedMail) return;
    console.log(selectedMail);
    setIsDeleteMailOpen(false);
  };

  const confirmDeletePage = () => {
    if (!selectedPage) return;
    console.log(selectedPage);
    setIsDeletePageOpen(false);
  };

  const confirmDeleteGroupe = () => {
    if (!selectedGroupe) return;
    console.log(selectedGroupe);
    setIsDeleteGroupeOpen(false);
  };

  const confirmDeleteProfil = () => {
    if (!selectedProfil) return;
    console.log(selectedProfil);
    setIsDeleteProfilOpen(false);
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

      {/* Profils d'envoi Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-ocean-950 font-bold">
          Profils d&apos;envoi
        </h2>
        <ProfilsEnvoiTable
          profils={profilsEnvoi}
          onCreate={() => {
            setSelectedProfil(null);
            setIsProfilDialogOpen(true);
          }}
          onEdit={(profil) => {
            setSelectedProfil(profil);
            setIsProfilDialogOpen(true);
          }}
          onDelete={handleDeleteProfil}
        />
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
          onDelete={handleDeleteGroupe}
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
      <ProfilsEnvoiCreateDialog
        open={isProfilDialogOpen}
        onOpenChange={setIsProfilDialogOpen}
        initialData={selectedProfil ?? undefined}
      />
      <Dialog
        open={isDeleteCampagneOpen}
        onOpenChange={setIsDeleteCampagneOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la campagne</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la campagne "
              {selectedCampagne?.nom}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteCampagneOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeleteCampagne}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteMailOpen} onOpenChange={setIsDeleteMailOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le modèle</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le modèle "{selectedMail?.nom}"
              ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteMailOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeleteMail}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isDeletePageOpen} onOpenChange={setIsDeletePageOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la page</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la page "{selectedPage?.nom}" ?
              Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeletePageOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeletePage}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteGroupeOpen} onOpenChange={setIsDeleteGroupeOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le groupe</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le groupe "
              {selectedGroupe?.nom}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteGroupeOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeleteGroupe}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteProfilOpen} onOpenChange={setIsDeleteProfilOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le profil</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le profil "
              {selectedProfil?.nom}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteProfilOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeleteProfil}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
