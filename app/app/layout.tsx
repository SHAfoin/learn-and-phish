"use client";

import TutorielButton from "@/components/TutorielButton";
import Sidebar from "@/components/ui/sidebar";
import { TutorialProvider, useTutorial } from "@/components/TutorialProvider";
import TutorialDialog from "@/components/TutorialDialog";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { currentPage, isTutorialOpen, setIsTutorialOpen } = useTutorial();

  return (
    <>
      <div className="relative w-screen overflow-clip">
        <img
          src="/svg/vagues.svg"
          alt="Rotated Image"
          className="fixed -left-[300px] -top-[100px] -z-10 pointer-events-none"
        />
        <Sidebar></Sidebar>
        <div className="pl-[15%] py-8 flex gap-20 pr-8">
          {children}
          <TutorielButton onClick={() => setIsTutorialOpen(true)} />
        </div>
      </div>
      <TutorialDialog
        open={isTutorialOpen}
        onOpenChange={setIsTutorialOpen}
        pageType={currentPage}
      />
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TutorialProvider>
      <LayoutContent>{children}</LayoutContent>
    </TutorialProvider>
  );
}
