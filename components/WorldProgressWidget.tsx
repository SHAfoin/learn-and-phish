import React from "react";

export default function WorldProgressWidget() {
  return (
    <div className="w-full rounded-2xl bg-ocean-900 h-full max-h-xl flex flex-col py-4 overflow-hidden">
      <div
        id="world-category"
        className="bg-white text-shadow-ocean-700 p-3 w-fit rounded-e-lg shadow-[2px_2px_0px_2px_#27AED3]"
      >
        <h2 className="font-bold text-xl text-ocean-800">
          Sécurité des mots de passe
        </h2>
      </div>
      <div id="world-progress" className="flex gap-4 p-4 h-full">
        <div className="flex-1 h-full">Niveau 1</div>
        <div
          id="world-progress-details"
          className="bg-ocean-50 rounded-xl h-full w-132 flex flex-col pb-2 px-6 gap-4 items-center justify-between pt-10 relative overflow-hidden"
        >
          <h1 className="font-bold text-4xl text-center">
            Créer et gérer des mots de passe sécurisés
          </h1>

          <div className="flex w-full justify-between z-20">
            <p>10 min</p>
            <p>Facile</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <path d="M100 40H0V10q17 13 34 0t33 1 33-1Z" fill="#27AED3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
