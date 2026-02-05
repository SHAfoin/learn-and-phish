import React from "react";
import OSINTContent from "./OSINTContent";

export default function OSINTPage() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Header */}
      <div className="flex flex-col items-start mb-2">
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          OSINT
        </h1>
        <p className="text-ocean-700 text-lg mt-2">
          Rechercher des empreintes numériques sur plusieurs plateformes
        </p>
      </div>

      <OSINTContent />
    </div>
  );
}
