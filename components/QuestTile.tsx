import Image from "next/image";

interface QuestTileProps {
  progression: number;
  maxValue: number;
  titre: string;
  frequence: string;
  iconUrl: string;
}

export default function QuestTile({
  progression,
  maxValue,
  titre,
  frequence,
  iconUrl,
}: QuestTileProps) {
  const progressPercentage = (progression / maxValue) * 100;
  return (
    <div className="flex rounded-2xl px-4 py-3 flex-col w-full min-w-sm bg-neutral-100 gap-2">
      <div className="flex items-end justify-between gap-6">
        <h3 className="text-lg font-semibold">{titre}</h3>
        <span className="text-sm text-neutral-600">{frequence}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-ocean-300 rounded-full overflow-clip p-2">
          <Image src={iconUrl} width={24} height={24} alt="Icône de quête" />
        </div>

        <div className="flex-1 bg-white w-full rounded-full overflow-hidden items-center">
          <div
            className="h-6 bg-ocean-600 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <span className="font-bold text-ocean-700">
          {progression}/{maxValue}
        </span>
      </div>
    </div>
  );
}
