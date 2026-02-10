import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-full justify-center items-center relative">
      <div className="w-md bg-white w-30% max-w-md p-6 rounded-3xl flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-4xl font-bold">
            Mot de passe oublié
          </h1>
          <p className="text-center">
            Nous allons vous envoyer un e-mail pour que vous puissiez
            réinitialiser votre mot de passe.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="exemple@gmail.com" />
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
