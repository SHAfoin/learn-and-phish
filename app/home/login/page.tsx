import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-full justify-center items-center relative">
      <div className="w-md bg-white w-30% max-w-md p-6 rounded-3xl flex flex-col gap-10">
        <h1 className="text-center text-4xl font-bold">Connexion</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="exemple@gmail.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Mot de passe</label>
            <Input id="password" type="password" placeholder="************" />
            <Button className="w-fit self-end" variant={"link"}>
              Mot de passe oublié ?
            </Button>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Link className="flex-1" href="/home/signup">
            <Button className="w-full" variant={"outline"}>
              S'inscrire
            </Button>
          </Link>
          <Link className="flex-1" href="/app">
            <Button className="w-full">Continuer</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
