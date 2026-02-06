"use client";

export default function QuizResultsChart() {
  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden flex flex-col gap-6">
      <div className="flex gap-6 items-center justify-center flex-1">
        {/* Pourcentage réussite */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 flex items-center justify-center">
              <p className="text-4xl font-bold text-ocean-950">92%</p>
            </div>
          </div>
          <p className="text-sm text-ocean-950 text-center">
            % de quizs réussis ce mois-ci
          </p>
        </div>

        {/* Nombre de quiz réussis */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 flex items-center justify-center">
              <p className="text-4xl font-bold text-ocean-950">200</p>
            </div>
          </div>
          <p className="text-sm text-ocean-950 text-center">
            Nombre de quiz réussis ce mois-ci
          </p>
        </div>
      </div>
    </div>
  );
}
