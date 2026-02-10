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

interface UserResetPasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userEmail: string;
}

export function UserResetPasswordDialog({
  open,
  onOpenChange,
  userEmail,
}: UserResetPasswordDialogProps) {
  const handleResetPassword = async () => {
    // TODO: Implémenter l'appel API réel pour réinitialiser le mot de passe
    // const response = await fetch(`/api/users/${userId}/reset-password`, {
    //   method: 'POST'
    // });
    console.log("Réinitialisation du mot de passe pour:", userEmail);

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Réinitialiser le mot de passe</DialogTitle>
          <DialogDescription>
            Un email de réinitialisation du mot de passe sera envoyé à{" "}
            <span className="font-semibold">{userEmail}</span>.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button onClick={handleResetPassword}>
            Envoyer le lien de réinitialisation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
