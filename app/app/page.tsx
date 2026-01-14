import ProfileHeader from "@/components/ProfileHeader";
import QuestTile from "@/components/QuestTile";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <ProfileHeader className="mb-2" />
      <div className="flex w-full gap-6">
        <div className="flex flex-col gap-3 flex-2">
          <h2 className="text-2xl text-ocean-950 font-bold">Mon parcours</h2>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-2xl text-ocean-950 font-bold">Quêtes</h2>
          <div className="flex flex-col gap-2 w-full">
            <QuestTile
              progression={3}
              maxValue={5}
              titre="Compléter 5 modules"
              frequence="Hebdomadaire"
              iconUrl="/svg/icons/admin.svg"
            />
            <QuestTile
              progression={7}
              maxValue={10}
              titre="Détecter les phishing"
              frequence="Quotidienne"
              iconUrl="/svg/icons/admin.svg"
            />
            <QuestTile
              progression={2}
              maxValue={3}
              titre="Maîtriser les mots de passe"
              frequence="Mensuelle"
              iconUrl="/svg/icons/admin.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
