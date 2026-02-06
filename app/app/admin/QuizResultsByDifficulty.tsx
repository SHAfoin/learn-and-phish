"use client";

export default function QuizResultsByDifficulty() {
  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden flex flex-col gap-4">
      <div className="flex gap-6 items-center justify-center flex-1">
        {/* Facile */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 flex items-center justify-center">
              <p className="text-2xl font-bold text-ocean-950">87%</p>
            </div>
          </div>
          <p className="text-sm text-ocean-950 text-center">Facile</p>
        </div>

        {/* Moyen */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 flex items-center justify-center">
              <p className="text-2xl font-bold text-ocean-950">65%</p>
            </div>
          </div>
          <p className="text-sm text-ocean-950 text-center">Moyen</p>
        </div>

        {/* Difficile */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 flex items-center justify-center">
              <p className="text-2xl font-bold text-ocean-950">42%</p>
            </div>
          </div>
          <p className="text-sm text-ocean-950 text-center">Difficile</p>
        </div>
      </div>
    </div>
  );
}
