"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

interface Campagne {
  id: number;
  nom: string;
  dateLancement: string;
  statut: string;
  templateMail: string;
  templatePage: string;
}

interface CampagnesTableProps {
  campagnes: Campagne[];
}

export default function CampagnesTable({ campagnes }: CampagnesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcul de la pagination
  const totalPages = Math.ceil(campagnes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCampagnes = campagnes.slice(startIndex, endIndex);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "En cours":
        return "text-seaweed-600 bg-seaweed-50";
      case "Terminée":
        return "text-neutral-600 bg-neutral-100";
      case "Planifiée":
        return "text-ocean-600 bg-ocean-50";
      default:
        return "text-neutral-600 bg-neutral-100";
    }
  };

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      <div className="h-[550px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[250px] min-w-[250px] max-w-[250px]">
                Nom de la campagne
              </TableHead>
              <TableHead className="font-bold w-[140px] min-w-[140px] max-w-[140px]">
                Date de lancement
              </TableHead>
              <TableHead className="font-bold w-[120px] min-w-[120px] max-w-[120px]">
                Statut
              </TableHead>
              <TableHead className="font-bold w-[200px] min-w-[200px] max-w-[200px]">
                Template mail
              </TableHead>
              <TableHead className="font-bold w-[200px] min-w-[200px] max-w-[200px]">
                Template de page
              </TableHead>
              <TableHead className="font-bold text-right w-[100px] min-w-[100px] max-w-[100px]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campagnes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="p-8 text-center">
                  <p className="text-neutral-400">Aucune campagne</p>
                </TableCell>
              </TableRow>
            ) : (
              currentCampagnes.map((campagne) => (
                <TableRow key={campagne.id}>
                  <TableCell className="font-medium w-[250px] min-w-[250px] max-w-[250px]">
                    <div className="truncate">{campagne.nom}</div>
                  </TableCell>
                  <TableCell className="w-[140px] min-w-[140px] max-w-[140px]">
                    {campagne.dateLancement}
                  </TableCell>
                  <TableCell className="w-[120px] min-w-[120px] max-w-[120px]">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutColor(campagne.statut)}`}
                    >
                      {campagne.statut}
                    </span>
                  </TableCell>
                  <TableCell className="w-[200px] min-w-[200px] max-w-[200px]">
                    <div className="truncate text-ocean-700">
                      {campagne.templateMail}
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] min-w-[200px] max-w-[200px]">
                    <div className="truncate text-ocean-700">
                      {campagne.templatePage}
                    </div>
                  </TableCell>
                  <TableCell className="text-right w-[100px] min-w-[100px] max-w-[100px]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Modifier</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
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
