import React from "react";

export default function TutorielButton() {
  return (
    <button
      className="rounded-lg border-2 border-ocean-700 bg-white p-3 h-fit text-ocean-700 font-bold transition-all duration-300 hover:bg-ocean-100 hover:shadow-lg"
      style={{
        boxShadow: "2px 2px 0px 0px var(--color-ocean-600)",
      }}
    >
      Tutoriel
    </button>
  );
}
