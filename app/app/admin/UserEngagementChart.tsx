"use client";

export default function UserEngagementChart() {
  return (
    <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
      <div className="border-b border-neutral-300 flex items-start pb-5 mb-5">
        <div className="flex-1">
          <p className="text-neutral-500 text-sm">
            Nombre d'utilisateurs actifs durants les 2 derniers mois
          </p>
        </div>
        <div className="bg-neutral-100 border-b border-l border-neutral-300 px-[31px] py-3 flex flex-col gap-1">
          <p className="text-neutral-500 text-xs">Inscrits</p>
          <p className="text-ocean-950 font-bold text-2xl">57</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full h-64 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded flex items-center justify-center">
          <p className="text-neutral-400 text-sm">
            Placeholder: Graphique d'engagement
          </p>
        </div>
        <div className="flex gap-2 text-xs text-neutral-500">
          <span>May 4</span>
          <span>May 9</span>
          <span>May 15</span>
          <span>May 21</span>
          <span>May 27</span>
          <span>Jun 2</span>
          <span>Jun 7</span>
          <span>Jun 12</span>
          <span>Jun 18</span>
          <span>Jun 24</span>
          <span>Jun 30</span>
        </div>
      </div>
    </div>
  );
}
