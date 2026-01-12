import Link from "next/link";
import styles from "./home.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.home}>
      <div
        className={
          "relative h-screen overflow-clip " + styles["page-background"]
        }
      >
        {/* Div des backgrounds (nuages, vagues) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            className={
              "absolute z-50 left-1/8 top-1/3 " + styles["animate-float-1"]
            }
            src="/svg/tortue.svg"
            alt=""
          />
          <img
            className={
              "absolute z-50 right-2/8 top-1/3 rotate-180 " +
              styles["animate-float-2"]
            }
            src="/svg/poisson-light.svg"
            alt=""
          />
          <img
            className={
              "absolute z-50 left-2/8 top-2/3 " + styles["animate-float-3"]
            }
            src="/svg/poisson-dark.svg"
            alt=""
          />
          <img
            className={
              "absolute z-50 left-6/8 top-3/4 rotate-180 " +
              styles["animate-float-4"]
            }
            src="/svg/poisson-dark.svg"
            alt=""
          />
        </div>
        <div className="relative z-10 h-full flex flex-col">
          {children}
          <div className="flex gap-6 justify-center mb-2 text-white">
            <Link
              href="/home/politique-de-confidentialite"
              className="hover:underline"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/home/conditions-d-utilisation"
              className="hover:underline"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
