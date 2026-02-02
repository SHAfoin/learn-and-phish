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
import Link from "next/link";
import { ArrowUpDown, MoreHorizontalIcon } from "lucide-react";
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

interface Groupe {
  id: number;
  nom: string;
  date: string;
  nombreUtilisateurs: number;
}

interface GroupesTableProps {
  groupes: Groupe[];
}

export default function GroupesTable({ groupes }: GroupesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcul de la pagination pour les groupes
  const totalPages = Math.ceil(groupes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGroupes = groupes.slice(startIndex, endIndex);

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      <div className="min-h-[300px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%]">
                <div className="font-bold flex items-center gap-2">
                  Groupe
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="w-[20%]">
                <div className="font-bold flex items-center gap-2">
                  Date
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-bold text-right w-[25%]">
                Nombre d'utilisateurs
              </TableHead>
              <TableHead className="font-bold text-right w-[20%]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groupes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="p-8 text-center">
                  <p className="text-neutral-400">Aucun groupe disponible</p>
                </TableCell>
              </TableRow>
            ) : (
              currentGroupes.map((groupe) => (
                <TableRow key={groupe.id}>
                  <TableCell className="font-medium w-[35%]">
                    <div className="truncate max-w-full">{groupe.nom}</div>
                  </TableCell>
                  <TableCell className="w-[20%]">
                    <div className="truncate max-w-full">{groupe.date}</div>
                  </TableCell>
                  <TableCell className="text-right w-[25%]">
                    <div className="truncate max-w-full">
                      {groupe.nombreUtilisateurs}
                    </div>
                  </TableCell>
                  <TableCell className="text-right w-[20%]">
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
      <div className="pt-3 flex justify-between items-center relative">
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
        <Link className="absolute right-0" href="/todo">
          <Button>Ajouter un groupe</Button>
        </Link>
      </div>
    </div>
  );
}
