import React from "react";
import Image from "next/image";

export default function ProfileHeader() {
  const progress = (1500 / 2000) * 100; // 75%
  const pathLength = 800;
  const completedLength = (pathLength * progress) / 100;
  return (
    <div className="w-full bg-ocean-700 flex px-8 py-4 gap-8 text-white font-bold rounded-xl">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-10 border-white">
        <Image
          src="/test/fake_profile.png"
          fill
          alt="Photo de profil"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-4">
          <h1 className="text-5xl">Bonjour Abla !</h1>

          <div className="flex items-end gap-2">
            <span className="bg-white  text-ocean-900 rounded-md px-2 py-1 text-sm h-fit">
              Niveau 12
            </span>
            {/* <Image /> */}
            <div className="flex ">
              <Image
                src="/svg/icons/fire.svg"
                width={20}
                height={20}
                alt="Streak icone"
              />
              <span className="text-sm py-1 ">5 jours !</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span>1500 / 2000 points</span>
          <div className="relative w-full h-8">
            <svg
              viewBox="-10 0 820 40"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 20 Q 20 5, 40 20 T 80 20 T 120 20 T 160 20 T 200 20 T 240 20 T 280 20 T 320 20 T 360 20 T 400 20 T 440 20 T 480 20 T 520 20 T 560 20 T 600 20 T 640 20 T 680 20 T 720 20 T 760 20 T 800 20"
                stroke="white"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 0 20 Q 20 5, 40 20 T 80 20 T 120 20 T 160 20 T 200 20 T 240 20 T 280 20 T 320 20 T 360 20 T 400 20 T 440 20 T 480 20 T 520 20 T 560 20 T 600 20 T 640 20 T 680 20 T 720 20 T 760 20 T 800 20"
                stroke="#1fd6f9"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${completedLength} ${pathLength * 2}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
