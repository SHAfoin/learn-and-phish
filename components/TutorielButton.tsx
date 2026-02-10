import React from "react";

interface TutorielButtonProps {
  onClick?: () => void;
}

export default function TutorielButton({ onClick }: TutorielButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border-2 border-ocean-700 bg-white p-3 h-fit text-ocean-700 font-bold transition-all duration-300 hover:bg-ocean-100 hover:shadow-lg"
      style={{
        boxShadow: "2px 2px 0px 0px var(--color-ocean-600)",
      }}
    >
      Tutoriel
    </button>
  );
}
