"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { Question, QuestionType } from "@/lib/placeholder";
import { QuestionEditDialog } from "./QuestionEditDialog";
import { QuestionDeleteDialog } from "./QuestionDeleteDialog";

interface QuestionsTableProps {
  questions: Question[];
}

export default function QuestionsTable({ questions }: QuestionsTableProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null,
  );

  const handleEdit = (question: Question) => {
    setSelectedQuestion(question);
    setEditDialogOpen(true);
  };

  const handleDelete = (question: Question) => {
    setSelectedQuestion(question);
    setDeleteDialogOpen(true);
  };

  const getTypeColor = (type: QuestionType) => {
    switch (type) {
      case "QCM":
        return "text-ocean-700 bg-ocean-50";
      case "Vrai/Faux":
        return "text-green-700 bg-green-50";
      case "Phrase à compléter":
        return "text-amber-700 bg-amber-50";
      case "QCM d'images":
        return "text-purple-700 bg-purple-50";
      default:
        return "text-neutral-700 bg-neutral-50";
    }
  };

  return (
    <>
      <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-ocean-950">
            Questions du quiz
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            {questions.length} question{questions.length > 1 ? "s" : ""} au
            total
          </p>
        </div>

        <div className="min-h-[400px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold w-[10%]">#</TableHead>
                <TableHead className="font-bold w-[50%]">Titre</TableHead>
                <TableHead className="font-bold w-[20%]">Type</TableHead>
                <TableHead className="font-bold text-right w-[20%]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="p-8 text-center">
                    <p className="text-neutral-400">Aucune question</p>
                  </TableCell>
                </TableRow>
              ) : (
                questions.map((question) => (
                  <TableRow key={question.id}>
                    <TableCell className="text-sm font-medium text-neutral-600 w-[10%]">
                      {question.ordre}
                    </TableCell>
                    <TableCell className="text-sm w-[50%]">
                      {question.titre}
                    </TableCell>
                    <TableCell className="w-[20%]">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-block ${getTypeColor(
                          question.type,
                        )}`}
                      >
                        {question.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-right w-[20%]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <MoreHorizontalIcon className="size-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleEdit(question)}
                          >
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => handleDelete(question)}
                          >
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Dialogs */}
      {selectedQuestion && (
        <>
          <QuestionEditDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            question={selectedQuestion}
          />
          <QuestionDeleteDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            questionTitle={selectedQuestion.titre}
          />
        </>
      )}
    </>
  );
}
