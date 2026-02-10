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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Formation } from "@/lib/placeholder";

interface FormationCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Formation;
}

export function FormationCreateDialog({
  open,
  onOpenChange,
  initialData,
}: FormationCreateDialogProps) {
  const [titre, setTitre] = useState("");
  const [type, setType] = useState<"Quiz" | "Monde">("Quiz");
  const [difficulte, setDifficulte] = useState<
    "Facile" | "Moyen" | "Difficile"
  >("Facile");
  const [categorie, setCategorie] = useState("");

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (open && initialData) {
      setTitre(initialData.titre);
      setType(initialData.type);
      setDifficulte(initialData.difficulte);
      setCategorie(initialData.categorie);
    } else if (open) {
      // Réinitialiser les champs lors de la création
      setTitre("");
      setType("Quiz");
      setDifficulte("Facile");
      setCategorie("");
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    // TODO: Implémenter l'appel API pour créer/modifier la formation
    // if (isEdit) {
    //   await fetch(`/api/formations/${initialData?.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ titre, type, difficulte, categorie })
    //   });
    // } else {
    //   await fetch('/api/formations', {
    //     method: 'POST',
    //     body: JSON.stringify({ titre, type, difficulte, categorie })
    //   });
    // }
    console.log("Enregistrement de la formation:", {
      titre,
      type,
      difficulte,
      categorie,
    });

    if (isEdit) {
      console.log("Modification de la formation ID:", initialData?.id);
    } else {
      console.log("Création d'une nouvelle formation");
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
            {isEdit ? "Modifier la formation" : "Créer une formation"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Modifiez les informations de la formation"
              : "Remplissez les informations pour créer une nouvelle formation"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Titre */}
          <div className="grid gap-2">
            <Label htmlFor="titre">Titre</Label>
            <Input
              id="titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Ex: Comment gérer ses mots de passes ?"
            />
          </div>

          {/* Type */}
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={type}
              onValueChange={(value) => setType(value as typeof type)}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Quiz">Quiz</SelectItem>
                <SelectItem value="Monde">Monde</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Difficulté */}
          <div className="grid gap-2">
            <Label htmlFor="difficulte">Difficulté</Label>
            <Select
              value={difficulte}
              onValueChange={(value) =>
                setDifficulte(value as typeof difficulte)
              }
            >
              <SelectTrigger id="difficulte">
                <SelectValue placeholder="Sélectionner une difficulté" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Facile">Facile</SelectItem>
                <SelectItem value="Moyen">Moyen</SelectItem>
                <SelectItem value="Difficile">Difficile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Catégorie */}
          <div className="grid gap-2">
            <Label htmlFor="categorie">Catégorie</Label>
            <Input
              id="categorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              placeholder="Ex: Mots de passe, Phishing..."
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
