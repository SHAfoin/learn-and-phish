import Sidebar from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-screen overflow-clip">
      <img
        src="/svg/vagues.svg"
        alt="Rotated Image"
        className="fixed -left-[300px] -top-[100px] -z-10 pointer-events-none"
      />
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
