import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GroupesTable from "@/app/app/phishing/GroupesTable";
import {
  campagnes,
  modelesMails,
  modelesPages,
  groupes,
} from "@/lib/placeholder";

export default function page() {
  return (
    <div className="flex flex-col flex-1 gap-6 max-w-7xl mx-auto w-full px-4">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <h1 className="text-[64px] font-bold text-ocean-950 leading-tight">
          Phishing
        </h1>
      </div>
      {/* Campagnes Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl text-ocean-950 font-bold">Campagnes</h2>
        <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Nom</TableHead>
                <TableHead className="font-bold">Date de lancement</TableHead>
                <TableHead className="font-bold">URL</TableHead>
                <TableHead className="font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campagnes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="p-8 text-center">
                    <p className="text-neutral-400">Aucune campagne</p>
                  </TableCell>
                </TableRow>
              ) : (
                campagnes.slice(0, 3).map((campagne) => (
                  <TableRow key={campagne.id}>
                    <TableCell className="font-medium">
                      <div className="truncate max-w-[250px]">
                        {campagne.nom}
                      </div>
                    </TableCell>
                    <TableCell>{campagne.dateLancement}</TableCell>
                    <TableCell>
                      <div className="truncate max-w-[200px] text-ocean-700">
                        {campagne.url}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <MoreHorizontalIcon />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Modifier</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <div className="pt-3 flex justify-end gap-3">
            <Link href="/app/phishing/campagnes">
              <Button variant="outline" className="border-ocean-850">
                Voir toutes les campagnes
              </Button>
            </Link>
            <Link href="/todo">
              <Button>Créer une campagne</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="flex w-full flex-col xl:flex-row gap-6">
        {/* Modèles de mails */}
        <div className="flex flex-col flex-1 gap-3">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Modèles de mails
          </h2>
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] p-5 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Nom</TableHead>
                  <TableHead className="font-bold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelesMails.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucun modèle de mail</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesMails.slice(0, 3).map((modele) => (
                    <TableRow key={modele.id}>
                      <TableCell className="font-medium">
                        <div className="truncate max-w-[300px]">
                          {modele.nom}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            >
                              <MoreHorizontalIcon />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="pt-3 flex justify-end gap-3">
              <Link href="/app/phishing/mails">
                <Button variant="outline" className="border-ocean-850">
                  Voir tous les modèles
                </Button>
              </Link>
              <Link href="/todo">
                <Button>Créer un modèle</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Modèles de page internet */}
        <div className="flex flex-col flex-1 gap-3">
          <h2 className="text-2xl text-ocean-950 font-bold">
            Modèles de page internet
          </h2>
          <div className="bg-neutral-50 rounded-[15px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden p-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Nom</TableHead>
                  <TableHead className="font-bold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelesPages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="p-8 text-center">
                      <p className="text-neutral-400">Aucune campagne</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  modelesPages.slice(0, 3).map((modele) => (
                    <TableRow key={modele.id}>
                      <TableCell className="font-medium">
                        <div className="truncate max-w-[300px]">
                          {modele.nom}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            >
                              <MoreHorizontalIcon />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="pt-3 flex justify-end gap-3">
              <Link href="/app/phishing/template-internet">
                <Button variant="outline" className="border-ocean-850">
                  Voir toutes les pages
                </Button>
              </Link>
              <Link href="/todo">
                <Button>Créer une page</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Groupes Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-ocean-950 font-bold">Groupes</h2>
        <GroupesTable groupes={groupes} />
      </div>
    </div>
  );
}
