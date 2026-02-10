"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MoreHorizontalIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Quiz, getQuizzes } from "@/lib/placeholder";

interface QuizsTableProps {
  onEdit?: (quiz: Quiz) => void;
  onDelete?: (quiz: Quiz) => void;
}

export default function QuizsTable({ onEdit, onDelete }: QuizsTableProps) {
  const [quizs, setQuizs] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchQuizs = async () => {
      setIsLoading(true);
      try {
        const data = await getQuizzes();
        setQuizs(data);
      } catch (error) {
        console.error("Erreur lors du chargement des quiz:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizs();
  }, []);

  // Réinitialiser la page lors du changement de recherche
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filtrer les quiz selon la recherche
  const quizsFiltres = quizs.filter((quiz) => {
    return (
      quiz.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.categorie.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.difficulte.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calcul de la pagination
  const totalPages = Math.ceil(quizsFiltres.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuizs = quizsFiltres.slice(startIndex, endIndex);

  // Fonction pour déterminer la couleur du badge de difficulté
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
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Rechercher un quiz..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-ocean-700"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Search className="size-4" />
        </Button>
      </div>

      <div className="min-h-[550px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[30%]">Titre</TableHead>
              <TableHead className="font-bold w-[15%]">Difficulté</TableHead>
              <TableHead className="font-bold w-[25%]">Catégorie</TableHead>
              <TableHead className="font-bold w-[15%]">Date création</TableHead>
              <TableHead className="font-bold text-right w-[15%]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-neutral-500">
                      Chargement des quiz...
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : quizs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">Aucun quiz</p>
                </TableCell>
              </TableRow>
            ) : quizsFiltres.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">
                    Aucun quiz trouvé pour cette recherche
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              currentQuizs.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="text-sm w-[30%]">
                    <Link
                      href={`/app/admin/training/quiz/${quiz.id}`}
                      className="text-ocean-700 hover:text-ocean-900 hover:underline font-medium"
                    >
                      {quiz.titre}
                    </Link>
                  </TableCell>
                  <TableCell className="w-[15%]">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getDifficulteColor(quiz.difficulte)}`}
                    >
                      {quiz.difficulte}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm w-[25%]">
                    {quiz.categorie}
                  </TableCell>
                  <TableCell className="text-sm w-[15%]">
                    {quiz.dateCreation}
                  </TableCell>
                  <TableCell className="text-right w-[15%]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit?.(quiz)}>
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => onDelete?.(quiz)}
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
      {totalPages > 1 && (
        <div className="pt-3 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
