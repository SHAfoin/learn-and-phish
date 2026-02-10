"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InfoTooltip from "@/components/ui/InfoTooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Groupe, User } from "@/lib/placeholder";

interface GroupCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Groupe;
}

const emptyUserForm = {
  prenom: "",
  nom: "",
  email: "",
  role: "",
};

export function GroupCreateDialog({
  open,
  onOpenChange,
  initialData,
}: GroupCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [utilisateurs, setUtilisateurs] = useState<User[]>([]);
  const [userForm, setUserForm] = useState(emptyUserForm);

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!open) return;

    if (initialData) {
      setNom(initialData.nom ?? "");
      setUtilisateurs(initialData.utilisateurs ?? []);
    } else {
      setNom("");
      setUtilisateurs([]);
    }

    setUserForm(emptyUserForm);
  }, [open, initialData]);

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleAddUser = () => {
    const { prenom, nom: lastName, email, role } = userForm;

    if (!prenom || !lastName || !email || !role) {
      alert("Veuillez remplir tous les champs utilisateur");
      return;
    }

    const newUser: User = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      prenom,
      nom: lastName,
      email,
      role,
    };

    setUtilisateurs((prev) => [...prev, newUser]);
    setUserForm(emptyUserForm);
  };

  const handleRemoveUser = (id: number) => {
    setUtilisateurs((prev) => prev.filter((user) => user.id !== id));
  };

  const handleSave = () => {
    if (!nom) {
      alert("Veuillez renseigner un nom de groupe");
      return;
    }

    if (utilisateurs.length === 0) {
      alert("Veuillez ajouter au moins un utilisateur");
      return;
    }

    const payload: Groupe = {
      id: initialData?.id ?? Date.now(),
      nom,
      date: initialData?.date ?? new Date().toLocaleDateString("fr-FR"),
      utilisateurs,
    };

    //TODO: Appeler l'API POST /api/groupes (création) ou PUT /api/groupes/{id} (modification) pour sauvegarder le groupe
    console.log(payload);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit min-w-[700px] bg-ocean-50 rounded-[10px] p-[30px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit ? "Modifier un groupe" : "Créer un groupe"}
          </DialogTitle>
          <p className="text-sm text-neutral-600 mt-2">
            Créer et gérer un groupe d'utilisateurs destinataires pour une
            campagne de phishing.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-6 mt-7">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="groupe-nom"
                className="text-[14px] text-ocean-950"
              >
                Nom du groupe <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Nom distinct du groupe utilisé pour cibler des destinataires." />
            </div>
            <Input
              id="groupe-nom"
              placeholder="Nom du groupe"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label className="text-[14px] text-ocean-950">
                Ajouter des utilisateurs <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Ajoutez des utilisateurs au groupe ; l'email est requis." />
            </div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 items-end">
                <Input
                  placeholder="Prénom"
                  value={userForm.prenom}
                  onChange={(e) =>
                    setUserForm((prev) => ({
                      ...prev,
                      prenom: e.target.value,
                    }))
                  }
                  className="bg-white border-neutral-300 rounded-[5px]"
                />
                <Input
                  placeholder="Nom"
                  value={userForm.nom}
                  onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, nom: e.target.value }))
                  }
                  className="bg-white border-neutral-300 rounded-[5px]"
                />
                <Input
                  placeholder="Email"
                  value={userForm.email}
                  onChange={(e) =>
                    setUserForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="bg-white border-neutral-300 rounded-[5px]"
                />
                <Input
                  placeholder="Rôle"
                  value={userForm.role}
                  onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="bg-white border-neutral-300 rounded-[5px]"
                />
                <Button onClick={handleAddUser} className="w-full">
                  +
                </Button>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Prénom</TableHead>
                      <TableHead className="font-bold">Nom</TableHead>
                      <TableHead className="font-bold">Email</TableHead>
                      <TableHead className="font-bold">Rôle</TableHead>
                      <TableHead className="font-bold text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {utilisateurs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="p-6 text-center">
                          <p className="text-neutral-400">
                            Aucun utilisateur ajouté
                          </p>
                        </TableCell>
                      </TableRow>
                    ) : (
                      utilisateurs.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.prenom}</TableCell>
                          <TableCell>{user.nom}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleRemoveUser(user.id)}
                            >
                              Supprimer
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 justify-end">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="px-4 py-2 border-ocean-850 text-ocean-800 rounded-[5px]"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSave}
              className="px-4 py-2 bg-ocean-800 text-white rounded-[5px] hover:bg-ocean-900"
            >
              {isEdit ? "Mettre à jour" : "Valider"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
