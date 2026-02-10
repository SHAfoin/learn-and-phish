import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-full justify-center items-center relative">
      <div className="w-md bg-white w-30% max-w-md p-6 rounded-3xl flex flex-col gap-10">
        <h1 className="text-center text-4xl font-bold">Bienvenue !</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Mot de passe</label>
            <Input id="password" type="password" placeholder="************" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Confirmation du mot de passe</label>
            <Input id="password" type="password" placeholder="************" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <Link
                className="underline text-ocean-700"
                href="/home/conditions-d-utilisation"
              >
                conditions d'utilisation
              </Link>
            </label>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Link className="flex-1" href="/home">
            <Button className="w-full">Continuer</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
