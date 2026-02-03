import ModelesPagesTable from "@/app/app/phishing/template-internet/ModelesPagesTable";
import Link from "next/link";
import React from "react";
import { modelesPages } from "@/lib/placeholder";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
        <Link href="/app/phishing">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12  rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de pages
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModelesPagesTable modeles={modelesPages} />
      </div>
    </div>
  );
}
