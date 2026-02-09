"use client";

import { useState, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formation, getFormations } from "@/lib/placeholder";

interface FormationsTableProps {
  onEdit?: (formation: Formation) => void;
  onDelete?: (formation: Formation) => void;
}

export default function FormationsTable({
  onEdit,
  onDelete,
}: FormationsTableProps) {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "Quiz" | "Monde">("all");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchFormations = async () => {
      setIsLoading(true);
      try {
        const data = await getFormations();
        setFormations(data);
      } catch (error) {
        console.error("Erreur lors du chargement des formations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFormations();
  }, []);

  // Réinitialiser la page lors du changement de recherche ou filtre
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, typeFilter]);

  // Filtrer les formations selon la recherche et le type
  const formationsFiltrees = formations.filter((formation) => {
    const matchesSearch =
      formation.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formation.categorie.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formation.difficulte.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === "all" || formation.type === typeFilter;

    return matchesSearch && matchesType;
  });

  // Calcul de la pagination
  const totalPages = Math.ceil(formationsFiltrees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFormations = formationsFiltrees.slice(startIndex, endIndex);

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

  // Fonction pour déterminer la couleur du type
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Quiz":
        return "text-ocean-700";
      case "Monde":
        return "text-sand-600";
      default:
        return "text-neutral-600";
    }
  };

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      {/* Search Bar and Filter */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Rechercher une formation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-ocean-700"
        />
        <Select
          value={typeFilter}
          onValueChange={(value) =>
            setTypeFilter(value as "all" | "Quiz" | "Monde")
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="Quiz">Quiz</SelectItem>
            <SelectItem value="Monde">Monde</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Search className="size-4" />
        </Button>
      </div>

      <div className="min-h-[550px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[30%]">Titre</TableHead>
              <TableHead className="font-bold w-[15%]">Type</TableHead>
              <TableHead className="font-bold w-[15%]">Difficulté</TableHead>
              <TableHead className="font-bold w-[25%]">Catégorie</TableHead>
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
                      Chargement des formations...
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : formations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">Aucune formation</p>
                </TableCell>
              </TableRow>
            ) : formationsFiltrees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">
                    Aucune formation trouvée pour cette recherche
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              currentFormations.map((formation) => (
                <TableRow key={formation.id}>
                  <TableCell className="text-sm w-[30%]">
                    {formation.titre}
                  </TableCell>
                  <TableCell className="w-[15%]">
                    <span
                      className={`text-sm font-bold ${getTypeColor(formation.type)}`}
                    >
                      {formation.type}
                    </span>
                  </TableCell>
                  <TableCell className="w-[15%]">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getDifficulteColor(formation.difficulte)}`}
                    >
                      {formation.difficulte}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm w-[25%]">
                    {formation.categorie}
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
                        <DropdownMenuItem onClick={() => onEdit?.(formation)}>
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => onDelete?.(formation)}
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
