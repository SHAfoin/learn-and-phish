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
import { ModelePage } from "@/lib/placeholder";

interface ModelePageCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: ModelePage & { contenuHtml?: string };
}

export function ModelePageCreateDialog({
  open,
  onOpenChange,
  initialData,
}: ModelePageCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [urlRedirection, setUrlRedirection] = useState("");
  const [contenuHtml, setContenuHtml] = useState("");

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!open || !initialData) return;

    setNom(initialData.nom ?? "");
    setUrlRedirection(initialData.url ?? "");
    setContenuHtml(initialData.contenuHtml ?? "");
  }, [open, initialData]);

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleCreate = () => {
    // Fonction vide pour future intégration API (création)
    console.log({ nom, urlRedirection, contenuHtml });
  };

  const handleUpdate = () => {
    // Fonction vide pour future intégration API (modification)
    console.log({
      id: initialData?.id,
      nom,
      urlRedirection,
      contenuHtml,
    });
  };

  const handleSave = () => {
    if (!nom || !urlRedirection || !contenuHtml) {
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
      <DialogContent className="w-full max-w-[1520px] sm:!max-w-[1520px] bg-ocean-50 rounded-[10px] p-[30px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit
              ? "Modifier un modèle de page web"
              : "Créer un modèle de page web"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-7">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-page-nom"
              className="text-[14px] text-ocean-950"
            >
              Nom du modèle <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modele-page-nom"
              placeholder="Nom du modèle"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-page-url"
              className="text-[14px] text-ocean-950"
            >
              URL de redirection <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modele-page-url"
              placeholder="https://exemple.com/redirection"
              value={urlRedirection}
              onChange={(e) => setUrlRedirection(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-page-html"
              className="text-[14px] text-ocean-950"
            >
              Contenu HTML <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="modele-page-html"
              placeholder="<html>..."
              value={contenuHtml}
              onChange={(e) => setContenuHtml(e.target.value)}
              className="min-h-[180px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="modele-mail-html"
              className="text-[14px] text-ocean-950"
            >
              Aperçu
            </Label>
            <iframe
              srcDoc={contenuHtml}
              sandbox="allow-same-origin"
              className="h-[560px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm"
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
