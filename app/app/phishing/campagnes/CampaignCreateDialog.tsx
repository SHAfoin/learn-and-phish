"use client";

import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { groupes } from "@/lib/placeholder/groupes";
import { modelesMails } from "@/lib/placeholder/modeles-mails";
import { modelesPages } from "@/lib/placeholder/modeles-pages";

interface CampaignCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CampaignCreateDialog({
  open,
  onOpenChange,
}: CampaignCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [groupeId, setGroupeId] = useState("");
  const [url, setUrl] = useState("");
  const [templateMailId, setTemplateMailId] = useState("");
  const [templatePageId, setTemplatePageId] = useState("");
  const [dateDebut, setDateDebut] = useState<Date>();
  const [dateFin, setDateFin] = useState<Date>();
  const [envoyerMaintenant, setEnvoyerMaintenant] = useState(false);

  const formatDateToDisplay = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "dd/MM/yy", { locale: fr });
  };

  const handleSave = () => {
    // Validation des champs requis
    if (
      !nom ||
      !groupeId ||
      !url ||
      !templateMailId ||
      !templatePageId ||
      !dateDebut
    ) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Validation de cohérence des dates
    if (dateFin && dateDebut && dateFin < dateDebut) {
      alert("La date de fin doit être postérieure à la date de début");
      return;
    }

    // Fonction vide pour future intégration API
    console.log({
      nom,
      groupeId: Number(groupeId),
      url,
      templateMailId: Number(templateMailId),
      templatePageId: Number(templatePageId),
      dateDebut: formatDateToDisplay(dateDebut),
      dateFin: dateFin ? formatDateToDisplay(dateFin) : undefined,
      envoyerMaintenant,
    });

    // Réinitialiser le formulaire et fermer le dialog
    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setNom("");
    setGroupeId("");
    setUrl("");
    setTemplateMailId("");
    setTemplatePageId("");
    setDateDebut(undefined);
    setDateFin(undefined);
    setEnvoyerMaintenant(false);
  };

  const handleCancel = () => {
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-fit! bg-ocean-50 rounded-[10px] p-[30px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            Créer une nouvelle campagne
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-7">
          {/* Nom et Groupe */}
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-3 w-[417px]">
              <Label htmlFor="nom" className="text-[14px] text-ocean-950">
                Choisir un nom <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nom"
                placeholder="Nom de la campagne"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="bg-white border-neutral-300 rounded-[5px]"
              />
            </div>

            <div className="flex flex-col gap-3 w-[417px]">
              <Label htmlFor="groupe" className="text-[14px] text-ocean-950">
                Choisir un groupe <span className="text-red-500">*</span>
              </Label>
              <Select value={groupeId} onValueChange={setGroupeId}>
                <SelectTrigger className="bg-white border-neutral-300 rounded-[5px] w-full">
                  <SelectValue placeholder="Groupe : " />
                </SelectTrigger>
                <SelectContent>
                  {groupes.map((groupe) => (
                    <SelectItem key={groupe.id} value={groupe.id.toString()}>
                      {groupe.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* URL */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="url" className="text-[14px] text-ocean-950">
              Saisir l&apos;URL de la landing page{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="url"
              placeholder="http://exemple.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          {/* Mail et Template */}
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-3 w-[417px]">
              <Label htmlFor="mail" className="text-[14px] text-ocean-950">
                Choisir un mail <span className="text-red-500">*</span>
              </Label>
              <Select value={templateMailId} onValueChange={setTemplateMailId}>
                <SelectTrigger className="bg-white border-neutral-300 rounded-[5px] w-full">
                  <SelectValue placeholder="Mail : " />
                </SelectTrigger>
                <SelectContent>
                  {modelesMails.map((mail) => (
                    <SelectItem key={mail.id} value={mail.id.toString()}>
                      {mail.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3 w-[417px]">
              <Label htmlFor="template" className="text-[14px] text-ocean-950">
                Choisir un template <span className="text-red-500">*</span>
              </Label>
              <Select value={templatePageId} onValueChange={setTemplatePageId}>
                <SelectTrigger className="bg-white border-neutral-300 rounded-[5px] w-full">
                  <SelectValue placeholder="Template : " />
                </SelectTrigger>
                <SelectContent>
                  {modelesPages.map((page) => (
                    <SelectItem key={page.id} value={page.id.toString()}>
                      {page.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates */}
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-3 w-[417px]">
              <Label className="text-[14px] text-ocean-950">
                Choisir la date de lancement{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white border-neutral-300 rounded-[5px]"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateDebut ? (
                      formatDateToDisplay(dateDebut)
                    ) : (
                      <span className="text-neutral-300">
                        Sélectionner une date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateDebut}
                    onSelect={setDateDebut}
                    locale={fr}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 w-[417px]">
              <Label className="text-[14px] text-ocean-950">
                Choisir la date de fin des envois
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white border-neutral-300 rounded-[5px]"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFin ? (
                      formatDateToDisplay(dateFin)
                    ) : (
                      <span className="text-neutral-300">
                        Sélectionner une date (optionnel)
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFin}
                    onSelect={setDateFin}
                    locale={fr}
                    disabled={(date) => (dateDebut ? date < dateDebut : false)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="envoyer-maintenant"
              checked={envoyerMaintenant}
              onCheckedChange={(checked) =>
                setEnvoyerMaintenant(checked as boolean)
              }
            />
            <Label
              htmlFor="envoyer-maintenant"
              className="text-[12px] text-black leading-3.5 cursor-pointer"
            >
              Envoyer maintenant
            </Label>
          </div>

          {/* Boutons */}
          <div className="flex gap-2.5 justify-end mt-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="px-4 py-2 border-ocean-850 text-ocean-800 rounded-[5px]"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSave}
              className="px-4 py-2 bg-ocean-800 text-white rounded-[5px] hover:bg-ocean-900"
            >
              Lancer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
