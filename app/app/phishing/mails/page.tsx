import ModeleMailsTable from "@/app/app/phishing/mails/ModeleMailsTable";
import Link from "next/link";
import React from "react";
import { modelesMails } from "@/lib/placeholder";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex gap-4 items-center">
        <Link href="/app/phishing">
          <img
            src="/svg/icons/arrow-blue.svg"
            alt="Flèche"
            className="w-12 h-12 rotate-180"
          />
        </Link>
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Modèles de mails
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <ModeleMailsTable modeles={modelesMails} />
      </div>
    </div>
  );
}
