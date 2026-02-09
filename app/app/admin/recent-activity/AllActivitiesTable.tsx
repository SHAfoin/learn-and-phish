"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
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
import { Activity, getRecentActivities } from "@/lib/placeholder";

export default function AllActivitiesTable() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      try {
        const data = await getRecentActivities();
        setActivities(data);
      } catch (error) {
        console.error("Erreur lors du chargement des activités:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  // Calcul de la pagination
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
      <div className="min-h-[550px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold w-[20%]">Date</TableHead>
              <TableHead className="font-bold w-[25%]">Utilisateur</TableHead>
              <TableHead className="font-bold w-[20%]">Activité</TableHead>
              <TableHead className="font-bold w-[25%]">Titre</TableHead>
              <TableHead className="font-bold w-[10%]">Résultat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-ocean-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-neutral-500">
                      Chargement des activités...
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : activities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="p-8 text-center">
                  <p className="text-neutral-400">Aucune activité</p>
                </TableCell>
              </TableRow>
            ) : (
              currentActivities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-sm w-[20%]">{item.date}</TableCell>
                  <TableCell className="text-sm w-[25%]">{item.user}</TableCell>
                  <TableCell className="w-[20%]">
                    <span
                      className={`text-sm font-bold ${
                        item.activity === "Quiz"
                          ? "text-ocean-700"
                          : item.activity === "Chemin"
                            ? "text-sand-600"
                            : "text-neutral-600"
                      }`}
                    >
                      {item.activity}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm max-w-xs truncate w-[25%]">
                    {item.title}
                  </TableCell>
                  <TableCell className="w-[10%]">
                    <div className="flex items-center gap-2">
                      {item.result.type === "success" ? (
                        <>
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                          <span className="text-sm font-normal text-green-600">
                            {item.result.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-red-500" />
                          <span className="text-sm font-normal text-red-600">
                            {item.result.status}
                          </span>
                        </>
                      )}
                    </div>
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
