"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { Activity, getRecentActivities } from "@/lib/placeholder";

export default function RecentActivityTable() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implémenter l'appel API réel
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

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Utilisateur</TableHead>
            <TableHead className="font-bold">Activité</TableHead>
            <TableHead className="font-bold">Titre</TableHead>
            <TableHead className="font-bold">Résultat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center p-8">
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
              <TableCell colSpan={5} className="text-center p-8">
                <p className="text-neutral-400">Aucune activité récente</p>
              </TableCell>
            </TableRow>
          ) : (
            activities.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-sm">{item.date}</TableCell>
                <TableCell className="text-sm">{item.user}</TableCell>
                <TableCell>
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
                <TableCell className="text-sm max-w-xs truncate">
                  {item.title}
                </TableCell>
                <TableCell>
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
  );
}
