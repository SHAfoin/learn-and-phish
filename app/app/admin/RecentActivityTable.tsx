"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const activityData = [
  {
    id: 1,
    date: "02/10/2025 13:51",
    user: "John Doe",
    activity: "Quiz",
    title: "Comment gérer correctement ses mots de passes ?",
    result: { status: "Échec", type: "failure" },
  },
  {
    id: 2,
    date: "02/10/2025 13:42",
    user: "Dimitri Gindel",
    activity: "Chemin",
    title: "En route pour la pêche !",
    result: { status: "Réussite", type: "success" },
  },
  {
    id: 3,
    date: "12/04/2025 12:08",
    user: "Milie Nails",
    activity: "Quiz",
    title: "L'art du Vishing",
    result: { status: "Échec", type: "failure" },
  },
  {
    id: 4,
    date: "02/10/2025 14:16",
    user: "Zenitsu Karan",
    activity: "Question",
    title:
      "Parmi ces mots de passe, lequel est le plus efficace en situation...",
    result: { status: "Réussite", type: "success" },
  },
];

export default function RecentActivityTable() {
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
          {activityData.map((item, idx) => (
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
