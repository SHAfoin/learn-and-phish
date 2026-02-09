"use client";

import { useState } from "react";
import FormationsTable from "@/app/app/admin/training/FormationsTable";
import { FormationCreateDialog } from "@/app/app/admin/training/FormationCreateDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Formation } from "@/lib/placeholder";

export default function TrainingContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(
    null,
  );

  const handleEdit = (formation: Formation) => {
    setSelectedFormation(formation);
    setIsDialogOpen(true);
  };

  const handleDelete = (formation: Formation) => {
    setSelectedFormation(formation);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedFormation) return;
    // TODO: Implémenter l'appel API pour supprimer la formation
    // await fetch(`/api/formations/${selectedFormation.id}`, { method: 'DELETE' });
    console.log("Suppression de la formation:", selectedFormation);
    setIsDeleteDialogOpen(false);
    setSelectedFormation(null);
  };

  const handleCreate = () => {
    setSelectedFormation(null);
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* Bouton Créer */}
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleCreate}
          className="bg-ocean-600 hover:bg-ocean-700 text-white"
        >
          Créer une formation
        </Button>
      </div>

      {/* Table des formations */}
      <FormationsTable onEdit={handleEdit} onDelete={handleDelete} />

      {/* Dialogue de création/édition */}
      <FormationCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedFormation ?? undefined}
      />

      {/* Dialogue de suppression */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la formation</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la formation "
              {selectedFormation?.titre}" ? Cette action est irréversible.
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
    </>
  );
}
