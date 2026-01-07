import { Button } from "@/components/ui/button";
import styles from "./home.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div
      className={"relative h-screen overflow-clip " + styles["page-background"]}
    >
      {/* Div des backgrounds (nuages, vagues) */}
      <div className="absolute inset-0 z-0">
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

      {/* Div principale avec les boutons et le texte */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-2 text-center">
        <h1 className="text-9xl font-bold mt-20 ocean-gradient">
          LEARN & PHISH
        </h1>
        <div className="flex flex-col gap-5 items-center text-white ">
          <h2 className="text-5xl font-bold">
            Ne vous laissez pas attraper par le crochet !
          </h2>
          <div className="flex flex-col items-center justify-between gap-2">
            <p>
              Plongez dans le monde de la cybersécurité et apprenez à repérer le
              phishing comme un pro !
            </p>
            <p>
              Rejoignez Phishy dans une aventure sous-marine pour maîtriser la
              détection du phishing. <br /> C'est éducatif, c'est amusant et
              cela pourrait bien sauvegarder vos données !
            </p>
          </div>
          <Link href="/login">
            <Button className="text-2xl px-6 py-9 font-bold">
              Plongez et démarrez le phishing
            </Button>
          </Link>
        </div>
        <div className="flex gap-6 text-white">
          <Link
            href="/politique-de-confidentialite"
            className="hover:underline"
          >
            Politique de confidentialité
          </Link>
          <Link href="/traitement-des-donnees" className="hover:underline">
            Traitement des données
          </Link>
        </div>
      </div>
    </div>
  );
}
