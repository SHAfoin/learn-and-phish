"use client";

import { useEffect, useState } from "react";
import { format, isValid, parse } from "date-fns";
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
import InfoTooltip from "@/components/ui/InfoTooltip";
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
import {
  Campagne,
  groupes,
  modelesMails,
  modelesPages,
  profilsEnvoi,
} from "@/lib/placeholder";

interface CampaignCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Campagne;
}

export function CampaignCreateDialog({
  open,
  onOpenChange,
  initialData,
}: CampaignCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [groupeId, setGroupeId] = useState("");
  const [url, setUrl] = useState("");
  const [templateMailId, setTemplateMailId] = useState("");
  const [templatePageId, setTemplatePageId] = useState("");
  const [profilEnvoiId, setProfilEnvoiId] = useState("");
  const [dateDebut, setDateDebut] = useState<Date>();
  const [dateFin, setDateFin] = useState<Date>();
  const [envoyerMaintenant, setEnvoyerMaintenant] = useState(false);

  const isEdit = Boolean(initialData);

  const formatDateToDisplay = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "dd/MM/yy", { locale: fr });
  };

  const parseDateFromString = (value?: string) => {
    if (!value) return undefined;
    const parsed = parse(value, "dd/MM/yy", new Date(), { locale: fr });
    return isValid(parsed) ? parsed : undefined;
  };

  useEffect(() => {
    if (!open || !initialData) return;

    const mailMatch = modelesMails.find(
      (mail) => mail.nom === initialData.templateMail,
    );
    const pageMatch = modelesPages.find(
      (page) => page.nom === initialData.templatePage,
    );

    setNom(initialData.nom ?? "");
    setGroupeId(initialData.groupeId ? initialData.groupeId.toString() : "");
    setUrl(initialData.url ?? "");
    setTemplateMailId(mailMatch ? mailMatch.id.toString() : "");
    setTemplatePageId(pageMatch ? pageMatch.id.toString() : "");
    setProfilEnvoiId("");
    setDateDebut(parseDateFromString(initialData.dateDebut));
    setDateFin(parseDateFromString(initialData.dateFin));
    setEnvoyerMaintenant(false);
  }, [open, initialData]);

  const handleCreate = () => {
    // Fonction vide pour future intégration API (création)
    console.log({
      nom,
      groupeId: Number(groupeId),
      url,
      templateMailId: Number(templateMailId),
      templatePageId: Number(templatePageId),
      profilEnvoiId: Number(profilEnvoiId),
      dateDebut: formatDateToDisplay(dateDebut),
      dateFin: dateFin ? formatDateToDisplay(dateFin) : undefined,
      envoyerMaintenant,
    });
  };

  const handleUpdate = () => {
    // Fonction vide pour future intégration API (modification)
    console.log({
      id: initialData?.id,
      nom,
      groupeId: Number(groupeId),
      url,
      templateMailId: Number(templateMailId),
      templatePageId: Number(templatePageId),
      profilEnvoiId: Number(profilEnvoiId),
      dateDebut: formatDateToDisplay(dateDebut),
      dateFin: dateFin ? formatDateToDisplay(dateFin) : undefined,
      envoyerMaintenant,
    });
  };

  const handleSave = () => {
    // Validation des champs requis
    if (
      !nom ||
      !groupeId ||
      !url ||
      !templateMailId ||
      !templatePageId ||
      !profilEnvoiId ||
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

    if (isEdit) {
      handleUpdate();
    } else {
      handleCreate();
    }

    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-fit! bg-ocean-50 rounded-[10px] p-[30px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit ? "Modifier une campagne" : "Créer une nouvelle campagne"}
          </DialogTitle>
          <p className="text-sm text-neutral-600 mt-2">
            Planifier une campagne en sélectionnant groupe, mail, page, et dates
            d'envoi.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Nom et Groupe */}
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-3 w-[417px]">
              <div className="flex items-center gap-2">
                <Label htmlFor="nom" className="text-[14px] text-ocean-950">
                  Choisir un nom <span className="text-red-500">*</span>
                </Label>
                <InfoTooltip text="Nom de la campagne visible dans la liste des campagnes." />
              </div>
              <Input
                id="nom"
                placeholder="Nom de la campagne"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="bg-white border-neutral-300 rounded-[5px]"
              />
            </div>

            <div className="flex flex-col gap-3 w-[417px]">
              <div className="flex items-center gap-2">
                <Label htmlFor="groupe" className="text-[14px] text-ocean-950">
                  Choisir un groupe <span className="text-red-500">*</span>
                </Label>
                <InfoTooltip text="Sélectionnez le groupe de destinataires cible pour cette campagne." />
              </div>
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
            <div className="flex items-center gap-2">
              <Label htmlFor="url" className="text-[14px] text-ocean-950">
                Saisir l&apos;URL de la landing page{" "}
                <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="URL de la page de destination utilisée pour collecter les clics." />
            </div>
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
              <div className="flex items-center gap-2">
                <Label htmlFor="mail" className="text-[14px] text-ocean-950">
                  Choisir un mail <span className="text-red-500">*</span>
                </Label>
                <InfoTooltip text="Modèle de mail utilisé pour l'envoi aux destinataires." />
              </div>
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
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="template"
                  className="text-[14px] text-ocean-950"
                >
                  Choisir un template <span className="text-red-500">*</span>
                </Label>
                <InfoTooltip text="Template de page web affichée après clic sur le mail." />
              </div>
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

          <div className="flex flex-col gap-3 w-[417px]">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="profil-envoi"
                className="text-[14px] text-ocean-950"
              >
                Choisir un profil d&apos;envoi{" "}
                <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Profil SMTP utilisé pour envoyer les emails de cette campagne." />
            </div>
            <Select value={profilEnvoiId} onValueChange={setProfilEnvoiId}>
              <SelectTrigger className="bg-white border-neutral-300 rounded-[5px] w-full">
                <SelectValue placeholder="Profil d'envoi : " />
              </SelectTrigger>
              <SelectContent>
                {profilsEnvoi.map((profil) => (
                  <SelectItem key={profil.id} value={profil.id.toString()}>
                    {profil.nom} (SMTP)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dates */}
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-3 w-[417px]">
              <div className="flex items-center gap-2">
                <Label className="text-[14px] text-ocean-950">
                  Choisir la date de lancement{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <InfoTooltip text="Date de lancement souhaitée; requise pour planification." />
              </div>
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
              <div className="flex items-center gap-2">
                <Label className="text-[14px] text-ocean-950">
                  Choisir la date de fin des envois
                </Label>
                <InfoTooltip text="Date de fin optionnelle; laisser vide si envoi continu." />
              </div>
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
              {isEdit ? "Mettre à jour" : "Lancer"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
