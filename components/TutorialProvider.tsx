"use client";

import React, { createContext, useContext, useState } from "react";
import { PageType } from "./types";

interface TutorialContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  isTutorialOpen: boolean;
  setIsTutorialOpen: (open: boolean) => void;
}

const TutorialContext = createContext<TutorialContextType | undefined>(
  undefined,
);

export function TutorialProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageType>(null);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  return (
    <TutorialContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isTutorialOpen,
        setIsTutorialOpen,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
}

export function useTutorial() {
  const context = useContext(TutorialContext);
  if (context === undefined) {
    throw new Error("useTutorial must be used within a TutorialProvider");
  }
  return context;
}
