"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuestionDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  questionTitle: string;
}

export function QuestionDeleteDialog({
  open,
  onOpenChange,
  questionTitle,
}: QuestionDeleteDialogProps) {
  const handleDelete = async () => {
    // TODO: Implémenter l'appel API réel pour supprimer la question
    console.log("Suppression de la question:", questionTitle);

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Supprimer la question</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer la question{" "}
            <span className="font-semibold">&quot;{questionTitle}&quot;</span> ?
            Cette action est irréversible.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
