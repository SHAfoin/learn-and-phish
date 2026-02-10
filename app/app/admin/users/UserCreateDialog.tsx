"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppUser } from "@/lib/placeholder";

interface UserCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: AppUser;
}

export function UserCreateDialog({
  open,
  onOpenChange,
  initialData,
}: UserCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [niveau, setNiveau] = useState<number>(1);

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (open && initialData) {
      setNom(initialData.nom);
      setPrenom(initialData.prenom);
      setEmail(initialData.email);
      setNiveau(initialData.niveau);
    } else if (open) {
      // Réinitialiser les champs lors de la création
      setNom("");
      setPrenom("");
      setEmail("");
      setNiveau(1);
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    // TODO: Implémenter l'appel API pour créer/modifier l'utilisateur
    // if (isEdit) {
    //   await fetch(`/api/users/${initialData?.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ nom, prenom, email, niveau })
    //   });
    // } else {
    //   await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ nom, prenom, email, niveau })
    //   });
    // }
    console.log("Enregistrement de l'utilisateur:", {
      nom,
      prenom,
      email,
      niveau,
    });

    if (isEdit) {
      console.log("Modification de l'utilisateur ID:", initialData?.id);
    } else {
      console.log("Création d'un nouvel utilisateur");
    }

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Modifier l'utilisateur" : "Créer un utilisateur"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Modifiez les informations de l'utilisateur"
              : "Remplissez les informations pour créer un nouvel utilisateur"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Nom */}
          <div className="grid gap-2">
            <Label htmlFor="nom">Nom</Label>
            <Input
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Dupont"
            />
          </div>

          {/* Prénom */}
          <div className="grid gap-2">
            <Label htmlFor="prenom">Prénom</Label>
            <Input
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Marie"
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="marie.dupont@example.com"
            />
          </div>

          {/* Niveau */}
          <div className="grid gap-2">
            <Label htmlFor="niveau">Niveau</Label>
            <Input
              id="niveau"
              type="number"
              min="1"
              max="10"
              value={niveau}
              onChange={(e) => setNiveau(parseInt(e.target.value) || 1)}
              placeholder="1"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button onClick={handleSubmit}>
            {isEdit ? "Enregistrer" : "Créer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
