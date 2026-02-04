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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProfilEnvoi, ProfilEnvoiType } from "@/lib/placeholder";

interface ProfilsEnvoiCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: ProfilEnvoi;
}

const TYPE_SMTP: ProfilEnvoiType = "smtp";

export function ProfilsEnvoiCreateDialog({
  open,
  onOpenChange,
  initialData,
}: ProfilsEnvoiCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [from, setFrom] = useState("");
  const [hote, setHote] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState<ProfilEnvoiType>(TYPE_SMTP);

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!open || !initialData) return;

    setNom(initialData.nom ?? "");
    setFrom(initialData.from ?? "");
    setHote(initialData.hote ?? "");
    setUsername(initialData.username ?? "");
    setPassword(initialData.password ?? "");
    setType(initialData.type ?? TYPE_SMTP);
  }, [open, initialData]);

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleCreate = () => {
    // Fonction vide pour future intégration API (création)
    console.log({ nom, from, hote, username, password, type });
  };

  const handleUpdate = () => {
    // Fonction vide pour future intégration API (modification)
    console.log({
      id: initialData?.id,
      nom,
      from,
      hote,
      username,
      password,
      type,
    });
  };

  const handleSave = () => {
    if (!nom || !from || !hote || !username || !password) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (isEdit) {
      handleUpdate();
    } else {
      handleCreate();
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[720px] sm:!max-w-[720px] bg-ocean-50 rounded-[10px] p-[30px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit ? "Modifier un profil d'envoi" : "Créer un profil d'envoi"}
          </DialogTitle>
          <p className="text-sm text-neutral-600 mt-2">
            Configurer les paramètres SMTP utilisés pour l'envoi des mails de
            campagne.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-7">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-nom"
                className="text-[14px] text-ocean-950"
              >
                Nom du profil <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Nom interne du profil d'envoi pour l'identifier facilement." />
            </div>
            <Input
              id="profil-nom"
              placeholder="Nom du profil"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-from"
                className="text-[14px] text-ocean-950"
              >
                From <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Adresse d'envoi affichée dans le champ 'From' des emails." />
            </div>
            <Input
              id="profil-from"
              placeholder="exemple@entreprise.com"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-hote"
                className="text-[14px] text-ocean-950"
              >
                Hôte SMTP <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Hôte SMTP (ex. smtp.exemple.com) pour l'envoi des messages." />
            </div>
            <Input
              id="profil-hote"
              placeholder="smtp.entreprise.com"
              value={hote}
              onChange={(e) => setHote(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-username"
                className="text-[14px] text-ocean-950"
              >
                Username <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Identifiant de connexion au serveur SMTP." />
            </div>
            <Input
              id="profil-username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-password"
                className="text-[14px] text-ocean-950"
              >
                Mot de passe <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Mot de passe SMTP. Conservez-le sécurisé." />
            </div>
            <Input
              id="profil-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-type"
                className="text-[14px] text-ocean-950"
              >
                Type <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Type de profil d'envoi (ex. SMTP)." />
            </div>
            <Select
              value={type}
              onValueChange={(value) => setType(value as ProfilEnvoiType)}
            >
              <SelectTrigger className="bg-white border-neutral-300 rounded-[5px] w-full">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={TYPE_SMTP}>SMTP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2.5 justify-end mt-4">
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
              {isEdit ? "Mettre à jour" : "Sauvegarder"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
