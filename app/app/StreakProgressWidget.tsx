import Image from "next/image";

interface StreakProgressWidgetProps {
  progression: number;
  objective: number;
  doneToday: boolean;
}

export default function StreakProgressWidget({
  progression,
  objective,
  doneToday,
}: StreakProgressWidgetProps) {
  return (
    <div className="w-full bg-neutral-100 flex rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-3 text-white font-bold bg-ocean-700 p-4">
        <span>{objective} jours</span>

        <div className="relative w-8 h-full bg-white rounded-full overflow-hidden">
          <div
            className="absolute bottom-0 w-full bg-ocean-400"
            style={{ height: `${(progression / 8) * 100}%` }}
          >
            <svg
              className="absolute top-0 left-0 w-full"
              viewBox="0 0 32 8"
              preserveAspectRatio="none"
            >
              <path d="M0,4 Q8,0 16,4 T32,4 L32,0 L0,0 Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-col p-4 items-center flex-1 flex-row justify-center">
        <div>
          <h2 className="font-bold text-2xl text-ocean-900">
            <span className="text-5xl text-sand-500">5</span> jours réalisés
          </h2>
          <p className="text-ocean-900">Prêt pour le prochain quiz ?</p>
        </div>

        <img
          src={doneToday ? "/png/coin.png" : "/png/coin_disabled.png"}
          alt="Coin Icon"
          className="mt-4 xl:w-44 xl:h-44 lg:w-32 lg:h-32 h-20 w-20"
        />
      </div>
    </div>
  );
}
