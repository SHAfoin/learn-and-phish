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
import { ModeleMail } from "@/lib/placeholder";

interface ModeleMailCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: ModeleMail & { contenuHtml?: string };
}

export function ModeleMailCreateDialog({
  open,
  onOpenChange,
  initialData,
}: ModeleMailCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [objet, setObjet] = useState("");
  const [expediteur, setExpediteur] = useState("");
  const [contenuHtml, setContenuHtml] = useState("");

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!open || !initialData) return;

    setNom(initialData.nom ?? "");
    setObjet(initialData.objet ?? "");
    setExpediteur(initialData.expediteur ?? "");
    setContenuHtml(initialData.contenuHtml ?? "");
  }, [open, initialData]);

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleCreate = () => {
    // Fonction vide pour future intégration API (création)
    console.log({ nom, objet, expediteur, contenuHtml });
  };

  const handleUpdate = () => {
    // Fonction vide pour future intégration API (modification)
    console.log({
      id: initialData?.id,
      nom,
      objet,
      expediteur,
      contenuHtml,
    });
  };

  const handleSave = () => {
    if (!nom || !objet || !expediteur || !contenuHtml) {
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
      <DialogContent className="max-w-[920px] bg-ocean-50 rounded-[10px] p-[30px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit ? "Modifier un modèle de mail" : "Créer un modèle de mail"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-7">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-mail-nom"
              className="text-[14px] text-ocean-950"
            >
              Nom du modèle <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modele-mail-nom"
              placeholder="Nom du modèle"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-mail-objet"
              className="text-[14px] text-ocean-950"
            >
              Objet du mail <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modele-mail-objet"
              placeholder="Objet du mail"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-mail-expediteur"
              className="text-[14px] text-ocean-950"
            >
              Adresse de l&apos;expéditeur (spoofing){" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modele-mail-expediteur"
              placeholder="exemple@entreprise.com"
              value={expediteur}
              onChange={(e) => setExpediteur(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-mail-html"
              className="text-[14px] text-ocean-950"
            >
              Contenu HTML <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="modele-mail-html"
              placeholder="<html>..."
              value={contenuHtml}
              onChange={(e) => setContenuHtml(e.target.value)}
              className="min-h-[180px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400"
            />
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
