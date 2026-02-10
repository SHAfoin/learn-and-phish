"use client";

import { useState } from "react";
import MondesTable from "@/app/app/admin/training/MondesTable";
import QuizsTable from "@/app/app/admin/training/QuizsTable";
import { MondeCreateDialog } from "@/app/app/admin/training/MondeCreateDialog";
import { QuizCreateDialog } from "@/app/app/admin/training/QuizCreateDialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Monde, Quiz } from "@/lib/placeholder";

export default function TrainingContent() {
  const [activeTab, setActiveTab] = useState<"mondes" | "quizs">("quizs");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedMonde, setSelectedMonde] = useState<Monde | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleEditMonde = (monde: Monde) => {
    setSelectedMonde(monde);
    setIsDialogOpen(true);
  };

  const handleDeleteMonde = (monde: Monde) => {
    setSelectedMonde(monde);
    setIsDeleteDialogOpen(true);
  };

  const handleEditQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsDialogOpen(true);
  };

  const handleDeleteQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (activeTab === "mondes" && !selectedMonde) return;
    if (activeTab === "quizs" && !selectedQuiz) return;

    const itemToDelete = activeTab === "mondes" ? selectedMonde : selectedQuiz;

    // TODO: Implémenter l'appel API pour supprimer le monde/quiz
    // await fetch(`/api/${activeTab}/${itemToDelete?.id}`, { method: 'DELETE' });
    console.log(
      `Suppression du ${activeTab === "mondes" ? "monde" : "quiz"}:`,
      itemToDelete,
    );
    setIsDeleteDialogOpen(false);
    setSelectedMonde(null);
    setSelectedQuiz(null);
  };

  const handleCreate = () => {
    if (activeTab === "mondes") {
      setSelectedMonde(null);
    } else {
      setSelectedQuiz(null);
    }
    setIsDialogOpen(true);
  };

  const itemTypeName = activeTab === "mondes" ? "monde" : "quiz";
  const displayedItem = activeTab === "mondes" ? selectedMonde : selectedQuiz;

  return (
    <>
      {/* Tabs pour Mondes et Quizs */}
      <div className="flex justify-between items-center mb-4">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "mondes" | "quizs")}
          className="bg-neutral-50 rounded-[5px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden"
        >
          <TabsList className="bg-transparent border-0 rounded-none flex gap-0">
            <TabsTrigger
              value="quizs"
              className="data-[state=active]:bg-ocean-800! data-[state=active]:text-white! text-ocean-950 border-0 rounded-none px-8 py-2 font-semibold text-sm"
            >
              Quizs
            </TabsTrigger>
            <TabsTrigger
              value="mondes"
              className="data-[state=active]:bg-ocean-800! data-[state=active]:text-white! text-ocean-950 border-0 rounded-none px-8 py-2 font-semibold text-sm"
            >
              Mondes
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Bouton Créer */}
        <Button
          onClick={handleCreate}
          className="bg-ocean-600 hover:bg-ocean-700 text-white"
        >
          Créer un {itemTypeName}
        </Button>
      </div>

      {/* Tables conditionnelles */}
      {activeTab === "mondes" && (
        <MondesTable onEdit={handleEditMonde} onDelete={handleDeleteMonde} />
      )}
      {activeTab === "quizs" && (
        <QuizsTable onEdit={handleEditQuiz} onDelete={handleDeleteQuiz} />
      )}

      {/* Dialogues de création/édition */}
      {activeTab === "mondes" && (
        <MondeCreateDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          initialData={selectedMonde ?? undefined}
        />
      )}
      {activeTab === "quizs" && (
        <QuizCreateDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          initialData={selectedQuiz ?? undefined}
        />
      )}

      {/* Dialogue de suppression */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le {itemTypeName}</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le {itemTypeName} "
              {displayedItem?.titre}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
