"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/lib/placeholder";
import { QuizEditDialog } from "./QuizEditDialog";
import { QuizDeleteDialog } from "./QuizDeleteDialog";

interface QuizInfoCardProps {
  quiz: Quiz;
}

export default function QuizInfoCard({ quiz }: QuizInfoCardProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const getDifficulteColor = (difficulte: string) => {
    switch (difficulte) {
      case "Facile":
        return "text-green-600 bg-green-50";
      case "Moyen":
        return "text-orange-600 bg-orange-50";
      case "Difficile":
        return "text-red-600 bg-red-50";
      default:
        return "text-neutral-600 bg-neutral-50";
    }
  };

  return (
    <>
      <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 w-full">
        <div className="space-y-4">
          {/* Titre */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">Titre</p>
            <p className="text-base text-ocean-950 font-medium">{quiz.titre}</p>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-neutral-600 font-semibold">
              Description
            </p>
            <p className="text-base text-ocean-950">{quiz.description}</p>
          </div>

          {/* Difficulté et Catégorie */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 font-semibold mb-2">
                Difficulté
              </p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${getDifficulteColor(
                  quiz.difficulte,
                )}`}
              >
                {quiz.difficulte}
              </span>
            </div>
            <div>
              <p className="text-sm text-neutral-600 font-semibold mb-2">
                Catégorie
              </p>
              <span className="px-3 py-1 rounded-full text-sm font-medium inline-block text-ocean-700 bg-ocean-50">
                {quiz.categorie}
              </span>
            </div>
          </div>

          {/* Date de création et Nombre de questions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 font-semibold">
                Date de création
              </p>
              <p className="text-base text-ocean-950">{quiz.dateCreation}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 font-semibold">
                Nombre de questions
              </p>
              <p className="text-base text-ocean-950">{quiz.nombreQuestions}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-neutral-200">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setEditDialogOpen(true)}
          >
            Modifier
          </Button>
          <Button
            variant="destructive"
            className="flex-1"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Supprimer
          </Button>
        </div>
      </div>

      {/* Dialogs */}
      <QuizEditDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        quiz={quiz}
      />
      <QuizDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        quizTitle={quiz.titre}
      />
    </>
  );
}
