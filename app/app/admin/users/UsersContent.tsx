"use client";

import { useState } from "react";
import UsersTable from "@/app/app/admin/users/UsersTable";
import { UserCreateDialog } from "@/app/app/admin/users/UserCreateDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AppUser } from "@/lib/placeholder";

export default function UsersContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);

  const handleEdit = (user: AppUser) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleDelete = (user: AppUser) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedUser) return;
    // TODO: Implémenter l'appel API pour supprimer l'utilisateur
    // await fetch(`/api/users/${selectedUser.id}`, { method: 'DELETE' });
    console.log("Suppression de l'utilisateur:", selectedUser);
    setIsDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  const handleCreate = () => {
    setSelectedUser(null);
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
          Créer un utilisateur
        </Button>
      </div>

      {/* Table des utilisateurs */}
      <UsersTable onEdit={handleEdit} onDelete={handleDelete} />

      {/* Dialogue de création/édition */}
      <UserCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedUser ?? undefined}
      />

      {/* Dialogue de suppression */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer l'utilisateur</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer l'utilisateur "
              {selectedUser?.prenom} {selectedUser?.nom}" ? Cette action est
              irréversible.
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
