import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className=" z-10 fixed h-screen p-8">
      <div className="bg-white rounded-xl w-20 h-full flex flex-col justify-between items-center py-4">
        <img src="/svg/phishy_icon.svg" alt="" />
        <div className="flex flex-col gap-6 p-4">
          <Link
            href="/app/dashboard"
            className="group relative flex h-12 w-12 items-center justify-center overflow-visible rounded-lg transition-all hover:bg-ocean-700"
          >
            <img
              src="/svg/icons/dashboard.svg"
              alt="Tableau de bord"
              className="m-auto transition filter group-hover:invert group-hover:brightness-0"
            />
            <span className="pointer-events-none absolute left-full h-full ml-2 whitespace-nowrap rounded-lg bg-ocean-700 px-6 text-md content-center font-bold text-white opacity-0 transition-all duration-200 ease-out -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
              Tableau de bord
            </span>
          </Link>
          <Link
            href="/app/learn"
            className="group relative flex h-12 w-12 items-center justify-center overflow-visible rounded-lg transition-all hover:bg-ocean-700"
          >
            <img
              src="/svg/icons/learn.svg"
              alt="Formation"
              className="m-auto transition filter group-hover:invert group-hover:brightness-0"
            />
            <span className="pointer-events-none absolute left-full h-full ml-2 whitespace-nowrap rounded-lg bg-ocean-700 px-6 text-md content-center font-bold text-white opacity-0 transition-all duration-200 ease-out -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
              Formation
            </span>
          </Link>
          <Link
            href="/app/osint"
            className="group relative flex h-12 w-12 items-center justify-center overflow-visible rounded-lg transition-all hover:bg-ocean-700"
          >
            <img
              src="/svg/icons/osint.svg"
              alt="OSINT"
              className="m-auto transition filter group-hover:invert group-hover:brightness-0"
            />
            <span className="pointer-events-none absolute left-full h-full ml-2 whitespace-nowrap rounded-lg bg-ocean-700 px-6 text-md content-center font-bold text-white opacity-0 transition-all duration-200 ease-out -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
              OSINT
            </span>
          </Link>
          <Link
            href="/app/phishing"
            className="group relative flex h-12 w-12 items-center justify-center overflow-visible rounded-lg transition-all hover:bg-ocean-700"
          >
            <img
              src="/svg/icons/phishing.svg"
              alt="Campagnes de phishing"
              className="m-auto transition filter group-hover:invert group-hover:brightness-0"
            />
            <span className="pointer-events-none absolute left-full h-full ml-2 whitespace-nowrap rounded-lg bg-ocean-700 px-6 text-md content-center font-bold text-white opacity-0 transition-all duration-200 ease-out -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
              Campagnes de phishing
            </span>
          </Link>
          <Link
            href="/app/admin"
            className="group relative flex h-12 w-12 items-center justify-center overflow-visible rounded-lg transition-all hover:bg-ocean-700"
          >
            <img
              src="/svg/icons/admin.svg"
              alt="Admin"
              className="m-auto transition filter group-hover:invert group-hover:brightness-0"
            />
            <span className="pointer-events-none absolute left-full h-full ml-2 whitespace-nowrap rounded-lg bg-ocean-700 px-6 text-md content-center font-bold text-white opacity-0 transition-all duration-200 ease-out -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
              Admin
            </span>
          </Link>
        </div>
        <img src="" alt="Mon profile" className="w-12 h-12" />
      </div>
    </div>
  );
}
