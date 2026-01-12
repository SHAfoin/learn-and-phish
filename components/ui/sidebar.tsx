import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className=" z-10 fixed h-screen p-8">
      <div className="bg-white rounded-xl w-20 h-full flex flex-col justify-between items-center py-4">
        <img src="/svg/phishy_icon.svg" alt="" />
        <div className="flex flex-col gap-6 p-4">
          <Link href="/app/dashboard">
            <img
              src="/svg/icons/dashboard.svg"
              alt="Tableau de bord"
              className="m-auto"
            />
          </Link>
          <Link href="/app/learn">
            <img
              src="/svg/icons/learn.svg"
              alt="Formation"
              className="m-auto"
            />
          </Link>
          <Link href="/app/osint">
            <img src="/svg/icons/osint.svg" alt="OSINT" className="m-auto" />
          </Link>
          <Link href="/app/phishing">
            <img
              src="/svg/icons/phishing.svg"
              alt="Campagnes de phishing"
              className="m-auto"
            />
          </Link>
          <Link href="/app/admin">
            <img src="/svg/icons/admin.svg" alt="Admin" className="m-auto" />
          </Link>
        </div>
        <img src="" alt="Mon profile" className="w-12 h-12" />
      </div>
    </div>
  );
}
