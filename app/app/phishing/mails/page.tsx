"use client";

import { useState } from "react";
import ModeleMailsTable from "@/app/app/phishing/mails/ModeleMailsTable";
import Link from "next/link";
import { ModeleMail, modelesMails } from "@/lib/placeholder";
import { ModeleMailCreateDialog } from "@/app/app/phishing/mails/ModeleMailCreateDialog";
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
  const [selectedMail, setSelectedMail] = useState<ModeleMail | null>(null);

  const handleEdit = (modele: ModeleMail) => {
    setSelectedMail(modele);
    setIsDialogOpen(true);
  };

  const handleDelete = (modele: ModeleMail) => {
    setSelectedMail(modele);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedMail) return;
    //TODO: Appeler l'API DELETE /api/modeles-mails/{id} pour supprimer le modèle de mail
    console.log(selectedMail);
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
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de mails
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModeleMailsTable
          modeles={modelesMails}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <ModeleMailCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedMail ?? undefined}
      />
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
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
