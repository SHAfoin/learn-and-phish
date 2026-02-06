"use client";

import { useState } from "react";
import ModelesPagesTable from "@/app/app/phishing/template-internet/ModelesPagesTable";
import Link from "next/link";
import { ModelePage, modelesPages } from "@/lib/placeholder";
import { ModelePageCreateDialog } from "@/app/app/phishing/template-internet/ModelePageCreateDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<ModelePage | null>(null);

  const handleEdit = (modele: ModelePage) => {
    setSelectedPage(modele);
    setIsDialogOpen(true);
  };

  const handleDelete = (modele: ModelePage) => {
    setSelectedPage(modele);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedPage) return;
    //TODO: Appeler l'API DELETE /api/modeles-pages/{id} pour supprimer le modèle de page
    console.log(selectedPage);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
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
        <ModelesPagesTable
          modeles={modelesPages}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <ModelePageCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedPage ?? undefined}
      />
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
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
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
