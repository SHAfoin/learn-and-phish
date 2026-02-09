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
import { Quiz, QuizDifficulte } from "@/lib/placeholder";

interface QuizEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quiz: Quiz;
}

const categories: string[] = [
  "Phishing",
  "Sécurité des données",
  "Protection des accès",
  "Web",
  "Vishing",
  "Mots de passe",
  "Email",
  "RGPD",
  "Social Engineering",
  "Réseau",
  "Authentification",
  "Malware",
  "Mobile",
  "Autre",
];

const difficultes: QuizDifficulte[] = ["Facile", "Moyen", "Difficile"];

export function QuizEditDialog({
  open,
  onOpenChange,
  quiz,
}: QuizEditDialogProps) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [difficulte, setDifficulte] = useState<QuizDifficulte>("Facile");
  const [categorie, setCategorie] = useState<string>("Phishing");

  useEffect(() => {
    if (open && quiz) {
      setTitre(quiz.titre);
      setDescription(quiz.description);
      setDifficulte(quiz.difficulte);
      setCategorie(quiz.categorie);
    }
  }, [open, quiz]);

  const handleSubmit = async () => {
    // TODO: Implémenter l'appel API réel pour modifier le quiz
    console.log("Modification du quiz ID:", quiz.id, {
      titre,
      description,
      difficulte,
      categorie,
    });

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Modifier le quiz</DialogTitle>
          <DialogDescription>
            Modifiez les informations du quiz
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
              placeholder="Titre du quiz"
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description du quiz"
              className="min-h-[100px] w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Difficulté */}
          <div className="grid gap-2">
            <Label htmlFor="difficulte">Difficulté</Label>
            <Select
              value={difficulte}
              onValueChange={(value) => setDifficulte(value as QuizDifficulte)}
            >
              <SelectTrigger id="difficulte">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {difficultes.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Catégorie */}
          <div className="grid gap-2">
            <Label htmlFor="categorie">Catégorie</Label>
            <Select
              value={categorie}
              onValueChange={(value) => setCategorie(value)}
            >
              <SelectTrigger id="categorie">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button onClick={handleSubmit}>Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
