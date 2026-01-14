import ProfileHeader from "@/components/ProfileHeader";
import QuestTile from "@/components/QuestTile";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <ProfileHeader />
      <div className="flex w-full gap-6">
        <div className="flex flex-col gap-3 flex-2">
          <h2 className="text-2xl text-ocean-950 font-bold">Mon parcours</h2>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-2xl text-ocean-950 font-bold">Quêtes</h2>
          <div className="flex flex-col gap-2 w-full">
            <QuestTile />
            <QuestTile />
            <QuestTile />
          </div>
        </div>
      </div>
    </div>
  );
}
