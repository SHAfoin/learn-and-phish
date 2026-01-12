import styles from "./app.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"relative w-screen overflow-clip"}>
      <img
        src="/svg/vagues.svg"
        alt="Rotated Image"
        style={{
          position: "fixed",
          left: "-300px",
          top: "-100px",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}
