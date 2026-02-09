"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppUser } from "@/lib/placeholder";
import { UserEditDialog } from "./UserEditDialog";
import { UserDeleteDialog } from "./UserDeleteDialog";
import { UserResetPasswordDialog } from "./UserResetPasswordDialog";

interface UserInfoCardProps {
  user: AppUser;
}

export default function UserInfoCard({ user }: UserInfoCardProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [resetPasswordDialogOpen, setResetPasswordDialogOpen] = useState(false);

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "-";
    return dateString;
  };

  return (
    <>
      <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6">
        <div className="space-y-4">
          {/* Rôle */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">Rôle</p>
            <p className="text-base text-ocean-950">{user.role}</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">Email</p>
            <p className="text-base text-ocean-950">{user.email}</p>
          </div>

          {/* Date d'inscription */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">
              Date d&apos;inscription
            </p>
            <p className="text-base text-ocean-950">
              {formatDate(user.dateInscription)}
            </p>
          </div>

          {/* Dernière connexion */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">
              Dernière connexion
            </p>
            <p className="text-base text-ocean-950">{user.derniereConnexion}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-neutral-200">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setEditDialogOpen(true)}
          >
            Modifier
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setResetPasswordDialogOpen(true)}
          >
            Réinitialiser mot de passe
          </Button>
          <Button
            variant="destructive"
            className="flex-1"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Supprimer
          </Button>
        </div>
      </div>

      {/* Dialogs */}
      <UserEditDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        user={user}
      />
      <UserDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        userName={`${user.prenom} ${user.nom}`}
      />
      <UserResetPasswordDialog
        open={resetPasswordDialogOpen}
        onOpenChange={setResetPasswordDialogOpen}
        userEmail={user.email}
      />
    </>
  );
}
