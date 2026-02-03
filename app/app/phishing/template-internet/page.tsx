"use client";

import { useState } from "react";
import ModelesPagesTable from "@/app/app/phishing/template-internet/ModelesPagesTable";
import Link from "next/link";
import { ModelePage, modelesPages } from "@/lib/placeholder";
import { ModelePageCreateDialog } from "@/app/app/phishing/template-internet/ModelePageCreateDialog";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<ModelePage | null>(null);

  const handleEdit = (modele: ModelePage) => {
    setSelectedPage(modele);
    setIsDialogOpen(true);
  };

  const handleDelete = (modele: ModelePage) => {
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
            className="w-12 h-12  rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de pages
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModelesPagesTable
          modeles={modelesPages}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <ModelePageCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedPage ?? undefined}
      />
    </div>
  );
}
