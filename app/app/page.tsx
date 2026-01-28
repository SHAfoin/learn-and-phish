import ProfileHeader from "@/components/ProfileHeader";
import QuestTile from "@/components/QuestTile";
import QuizWidget from "@/components/QuizWidget";
import StreakProgressWidget from "@/components/StreakProgressWidget";
import { Button } from "@/components/ui/button";
import WorldProgressWidget from "@/components/WorldProgressWidget";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-3">
      <ProfileHeader
        imageUrl="/test/fake_profile.png"
        progression={1500}
        max={2000}
        nom="Abla"
        niveau={12}
        streak={5}
        className="mb-2"
      />
      <div className="flex w-full gap-6 h-fit">
        <div className="flex flex-col gap-3 flex-2">
          <h2 className="text-2xl text-ocean-950 font-bold">Mon parcours</h2>
          <WorldProgressWidget />
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
      <div className="flex w-full gap-6 h-fit">
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-2xl text-ocean-950 font-bold">Progression</h2>
          <StreakProgressWidget
            progression={6}
            objective={8}
            doneToday={true}
          />
        </div>
        <div className="flex flex-col gap-3 flex-2">
          <div className="flex justify-between">
            <h2 className="text-2xl text-ocean-950 font-bold">
              Quizs recommandés
            </h2>
            <Button variant={"link"}>Voir tous les quizs</Button>
          </div>

          <QuizWidget />
          <QuizWidget />
        </div>
      </div>
    </div>
  );
}
