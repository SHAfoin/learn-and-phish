"use client";

export default function QuizResultsByCategory() {
  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden flex flex-col gap-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-72 bg-linear-to-br from-neutral-100 to-neutral-50 rounded flex items-center justify-center">
          <p className="text-neutral-400 text-sm">
            Placeholder: Graphique par catégorie
          </p>
        </div>
      </div>
      <div className="flex gap-8 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-sand-500 rounded-sm"></div>
          <span className="text-ocean-950">Réussis</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-ocean-800 rounded-sm"></div>
          <span className="text-ocean-950">Ratés</span>
        </div>
      </div>
    </div>
  );
}
