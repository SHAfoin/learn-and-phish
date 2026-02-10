'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#006E99] to-[#061935]">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Bienvenue sur Learn & Phish
        </h1>
        <p className="text-lg md:text-xl text-[#9DECFB] mb-8">
          Apprenez à reconnaître les tentatives de phishing grâce à nos quiz interactifs.
        </p>
        <button
          onClick={() => router.push('/quiz')}
          className="bg-[#EAA937] hover:bg-[#d48b2e] text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Commencer le Quiz
        </button>
      </div>
      
    </div>
  );
}
