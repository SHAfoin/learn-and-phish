import Sidebar from "@/components/ui/sidebar";
import { TutorialProvider } from "@/components/TutorialProvider";
import TutorialManager from "@/components/TutorialManager";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TutorialProvider>
      <div className="relative w-screen overflow-clip">
        <img
          src="/svg/vagues.svg"
          alt="Rotated Image"
          className="fixed -left-[300px] -top-[100px] -z-10 pointer-events-none"
        />
        <Sidebar></Sidebar>
        <div className="pl-[15%] py-8 flex gap-20 pr-8">
          {children}
          <TutorialManager />
        </div>
      </div>
    </TutorialProvider>
  );
}
