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
import { ProfilEnvoi } from "@/lib/placeholder";

interface ProfilsEnvoiTableProps {
  profils: ProfilEnvoi[];
  onCreate: () => void;
  onEdit: (profil: ProfilEnvoi) => void;
  onDelete: (profil: ProfilEnvoi) => void;
}

export default function ProfilsEnvoiTable({
  profils,
  onCreate,
  onEdit,
  onDelete,
}: ProfilsEnvoiTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(profils.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProfils = profils.slice(startIndex, endIndex);

  return (
    <div className="bg-neutral-50 rounded-[15px] h-fit shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      <div className="min-h-[300px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[25%]">Nom</TableHead>
              <TableHead className="font-bold w-[25%]">From</TableHead>
              <TableHead className="font-bold w-[20%]">Hôte</TableHead>
              <TableHead className="font-bold w-[15%]">Type</TableHead>
              <TableHead className="font-bold text-right w-[15%]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {profils.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">Aucun profil d'envoi</p>
                </TableCell>
              </TableRow>
            ) : (
              currentProfils.map((profil) => (
                <TableRow key={profil.id}>
                  <TableCell className="font-medium w-[25%]">
                    <div className="truncate max-w-full">{profil.nom}</div>
                  </TableCell>
                  <TableCell className="w-[25%]">
                    <div className="truncate max-w-full text-ocean-700">
                      {profil.from}
                    </div>
                  </TableCell>
                  <TableCell className="w-[20%]">
                    <div className="truncate max-w-full">{profil.hote}</div>
                  </TableCell>
                  <TableCell className="w-[15%]">
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-ocean-700 bg-ocean-50">
                      {profil.type.toUpperCase()}
                    </span>
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
                        <DropdownMenuItem onClick={() => onEdit(profil)}>
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => onDelete(profil)}
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
      <div className="p-5 flex justify-between items-center relative">
        {totalPages > 1 && (
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
        )}
        <Button className="absolute right-0" onClick={onCreate}>
          Ajouter un profil
        </Button>
      </div>
    </div>
  );
}
