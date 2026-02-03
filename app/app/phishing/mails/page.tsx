"use client";

import { useState } from "react";
import ModeleMailsTable from "@/app/app/phishing/mails/ModeleMailsTable";
import Link from "next/link";
import { ModeleMail, modelesMails } from "@/lib/placeholder";
import { ModeleMailCreateDialog } from "@/app/app/phishing/mails/ModeleMailCreateDialog";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMail, setSelectedMail] = useState<ModeleMail | null>(null);

  const handleEdit = (modele: ModeleMail) => {
    setSelectedMail(modele);
    setIsDialogOpen(true);
  };

  const handleDelete = (modele: ModeleMail) => {
    if (!window.confirm("Vous êtes sûr ?")) return;
    console.log(modele);
  };

  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
        <Link href="/app/phishing">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de mails
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModeleMailsTable
          modeles={modelesMails}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <ModeleMailCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedMail ?? undefined}
      />
    </div>
  );
}
