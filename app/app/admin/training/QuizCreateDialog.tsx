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
import { Quiz } from "@/lib/placeholder";

interface QuizCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Quiz;
}

export function QuizCreateDialog({
  open,
  onOpenChange,
  initialData,
}: QuizCreateDialogProps) {
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
    // TODO: Implémenter l'appel API pour créer/modifier le quiz
    // if (isEdit) {
    //   await fetch(`/api/quizs/${initialData?.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ titre, type: 'Quiz', difficulte, categorie })
    //   });
    // } else {
    //   await fetch('/api/quizs', {
    //     method: 'POST',
    //     body: JSON.stringify({ titre, type: 'Quiz', difficulte, categorie })
    //   });
    // }
    console.log("Enregistrement du quiz:", {
      titre,
      type: "Quiz",
      difficulte,
      categorie,
    });

    if (isEdit) {
      console.log("Modification du quiz ID:", initialData?.id);
    } else {
      console.log("Création d'un nouveau quiz");
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
            {isEdit ? "Modifier le quiz" : "Créer un quiz"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Modifiez les informations du quiz"
              : "Remplissez les informations pour créer un nouveau quiz"}
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
