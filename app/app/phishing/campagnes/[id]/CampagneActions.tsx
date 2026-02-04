"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CampagneActionsProps {
  campagneId: number;
  campagneNom: string;
}

export default function CampagneActions({
  campagneId,
  campagneNom,
}: CampagneActionsProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isCompleteDialogOpen, setIsCompleteDialogOpen] = useState(false);

  const handleComplete = () => {
    // TODO: Implement API call to complete campaign
    console.log("Compléter la campagne:", campagneId);
    setIsCompleteDialogOpen(false);
  };

  const handleDelete = () => {
    // TODO: Implement API call to delete campaign
    console.log("Supprimer la campagne:", campagneId);
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => setIsCompleteDialogOpen(true)}>
          Compléter la campagne
        </Button>
        <Button
          variant="destructive"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          Supprimer
        </Button>
      </div>

      {/* Complete Confirmation Dialog */}
      <Dialog
        open={isCompleteDialogOpen}
        onOpenChange={setIsCompleteDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Compléter la campagne</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir marquer la campagne "{campagneNom}" comme
              terminée ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCompleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button onClick={handleComplete}>Confirmer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la campagne</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la campagne "{campagneNom}" ?
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
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
