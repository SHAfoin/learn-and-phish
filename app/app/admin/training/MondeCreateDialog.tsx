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
import { Monde } from "@/lib/placeholder";

interface MondeCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Monde;
}

export function MondeCreateDialog({
  open,
  onOpenChange,
  initialData,
}: MondeCreateDialogProps) {
  const [titre, setTitre] = useState("");
  const [difficulte, setDifficulte] = useState<
    "Facile" | "Moyen" | "Difficile"
  >("Facile");
  const [categorie, setCategorie] = useState("");

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (open && initialData) {
      setTitre(initialData.titre);
      setDifficulte(initialData.difficulte);
      setCategorie(initialData.categorie);
    } else if (open) {
      // Réinitialiser les champs lors de la création
      setTitre("");
      setDifficulte("Facile");
      setCategorie("");
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    // TODO: Implémenter l'appel API pour créer/modifier le monde
    // if (isEdit) {
    //   await fetch(`/api/mondes/${initialData?.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ titre, type: 'Monde', difficulte, categorie })
    //   });
    // } else {
    //   await fetch('/api/mondes', {
    //     method: 'POST',
    //     body: JSON.stringify({ titre, type: 'Monde', difficulte, categorie })
    //   });
    // }
    console.log("Enregistrement du monde:", {
      titre,
      type: "Monde",
      difficulte,
      categorie,
    });

    if (isEdit) {
      console.log("Modification du monde ID:", initialData?.id);
    } else {
      console.log("Création d'un nouveau monde");
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
            {isEdit ? "Modifier le monde" : "Créer un monde"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Modifiez les informations du monde"
              : "Remplissez les informations pour créer un nouveau monde"}
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
              placeholder="Ex: En route pour la pêche !"
            />
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
              placeholder="Ex: Introduction, Phishing..."
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
