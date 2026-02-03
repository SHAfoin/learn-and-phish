"use client";

import { useState } from "react";
import CampagnesTable from "@/app/app/phishing/campagnes/CampagnesTable";
import Link from "next/link";
import { Campagne, campagnes } from "@/lib/placeholder";
import { CampaignCreateDialog } from "@/app/app/phishing/campagnes/CampaignCreateDialog";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCampagne, setSelectedCampagne] = useState<Campagne | null>(
    null,
  );

  const handleEdit = (campagne: Campagne) => {
    setSelectedCampagne(campagne);
    setIsDialogOpen(true);
  };

  const handleDelete = (campagne: Campagne) => {
    if (!window.confirm("Vous êtes sûr ?")) return;
    console.log(campagne);
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
          Campagnes
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <CampagnesTable
          campagnes={campagnes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <CampaignCreateDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={selectedCampagne ?? undefined}
      />
    </div>
  );
}
