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

interface UserDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
}

export function UserDeleteDialog({
  open,
  onOpenChange,
  userName,
}: UserDeleteDialogProps) {
  const handleDelete = async () => {
    // TODO: Implémenter l'appel API réel pour supprimer l'utilisateur
    // const response = await fetch(`/api/users/${userId}`, {
    //   method: 'DELETE'
    // });
    console.log("Suppression de l'utilisateur:", userName);

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Supprimer l&apos;utilisateur</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer l&apos;utilisateur{" "}
            <span className="font-semibold">{userName}</span> ? Cette action est
            irréversible.
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
