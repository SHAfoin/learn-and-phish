"use client";

import { useState, useEffect } from "react";
import CampagnesTable from "@/app/app/phishing/campagnes/CampagnesTable";
import Link from "next/link";
import { Campagne, campagnes } from "@/lib/placeholder";
import { CampaignCreateDialog } from "@/app/app/phishing/campagnes/CampaignCreateDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTutorial } from "@/components/TutorialProvider";

export default function page() {
  const { setCurrentPage } = useTutorial();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCampagne, setSelectedCampagne] = useState<Campagne | null>(
    null,
  );

  useEffect(() => {
    setCurrentPage("campagnes");
  }, [setCurrentPage]);

  const handleEdit = (campagne: Campagne) => {
    setSelectedCampagne(campagne);
    setIsDialogOpen(true);
  };

  const handleDelete = (campagne: Campagne) => {
    setSelectedCampagne(campagne);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedCampagne) return;
    //TODO: Appeler l'API DELETE /api/campagnes/{id} pour supprimer la campagne
    console.log(selectedCampagne);
    setIsDeleteDialogOpen(false);
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
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la campagne</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la campagne "
              {selectedCampagne?.nom}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
