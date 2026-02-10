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
import { Question, QuestionType } from "@/lib/placeholder";

interface QuestionEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question: Question;
}

const questionTypes: QuestionType[] = [
  "QCM",
  "Vrai/Faux",
  "Phrase à compléter",
  "QCM d'images",
];

export function QuestionEditDialog({
  open,
  onOpenChange,
  question,
}: QuestionEditDialogProps) {
  const [titre, setTitre] = useState("");
  const [type, setType] = useState<QuestionType>("QCM");

  useEffect(() => {
    if (open && question) {
      setTitre(question.titre);
      setType(question.type);
    }
  }, [open, question]);

  const handleSubmit = async () => {
    // TODO: Implémenter l'appel API réel pour modifier la question
    console.log("Modification de la question ID:", question.id, {
      titre,
      type,
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
          <DialogTitle>Modifier la question</DialogTitle>
          <DialogDescription>
            Modifiez les informations de la question
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Titre */}
          <div className="grid gap-2">
            <Label htmlFor="titre">Titre de la question</Label>
            <Input
              id="titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Entrez la question"
            />
          </div>

          {/* Type */}
          <div className="grid gap-2">
            <Label htmlFor="type">Type de question</Label>
            <Select
              value={type}
              onValueChange={(value) => setType(value as QuestionType)}
            >
              <SelectTrigger id="type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {questionTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
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
