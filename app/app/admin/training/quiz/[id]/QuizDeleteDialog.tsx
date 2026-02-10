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

interface QuizDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quizTitle: string;
}

export function QuizDeleteDialog({
  open,
  onOpenChange,
  quizTitle,
}: QuizDeleteDialogProps) {
  const handleDelete = async () => {
    // TODO: Implémenter l'appel API réel pour supprimer le quiz
    console.log("Suppression du quiz:", quizTitle);

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Supprimer le quiz</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer le quiz{" "}
            <span className="font-semibold">&quot;{quizTitle}&quot;</span> ?
            Cette action est irréversible et supprimera également toutes les
            questions associées.
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
