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
import { Activity } from "@/lib/placeholder";

interface UserActivityTableProps {
  activities: Activity[];
}

export default function UserActivityTable({
  activities,
}: UserActivityTableProps) {
  if (activities.length === 0) {
    return (
      <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5">
        <h3 className="text-sm font-bold text-ocean-950 mb-4">
          Activité récente
        </h3>
        <p className="text-center text-neutral-400 py-8">
          Aucune activité récente
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
      <h3 className="text-sm font-bold text-ocean-950 mb-4">
        Activité récente
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Activité</TableHead>
            <TableHead className="font-bold">Titre</TableHead>
            <TableHead className="font-bold">Résultat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-sm">{item.date}</TableCell>
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
