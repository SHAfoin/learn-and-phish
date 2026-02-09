"use client";

import TutorielButton from "@/components/TutorielButton";
import { useTutorial } from "@/components/TutorialProvider";
import TutorialDialog from "@/components/TutorialDialog";

export default function TutorialManager() {
  const { currentPage, isTutorialOpen, setIsTutorialOpen } = useTutorial();

  return (
    <>
      <TutorielButton onClick={() => setIsTutorialOpen(true)} />
      <TutorialDialog
        open={isTutorialOpen}
        onOpenChange={setIsTutorialOpen}
        pageType={currentPage}
      />
    </>
  );
}
