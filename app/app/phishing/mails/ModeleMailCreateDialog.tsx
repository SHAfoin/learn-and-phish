"use client";

import { useEffect, useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ModeleMail,
  EmailCreationMode,
  ConversionResponse,
} from "@/lib/placeholder";
import { modelesMails } from "@/lib/placeholder/modeles-mails";

interface ModeleMailCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: ModeleMail & { contenuHtml?: string };
}

export function ModeleMailCreateDialog({
  open,
  onOpenChange,
  initialData,
}: ModeleMailCreateDialogProps) {
  const [nom, setNom] = useState("");
  const [objet, setObjet] = useState("");
  const [expediteur, setExpediteur] = useState("");
  const [contenuHtml, setContenuHtml] = useState("");
  const [creationMode, setCreationMode] = useState<EmailCreationMode>("manuel");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [emailToPaste, setEmailToPaste] = useState("");
  const [conversionLoading, setConversionLoading] = useState(false);
  const [conversionJobId, setConversionJobId] = useState<string | null>(null);
  const [conversionError, setConversionError] = useState<string | null>(null);

  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!open || !initialData) return;

    setNom(initialData.nom ?? "");
    setObjet(initialData.objet ?? "");
    setExpediteur(initialData.expediteur ?? "");
    setContenuHtml(initialData.contenuHtml ?? "");
  }, [open, initialData]);

  const handleCancel = () => {
    onOpenChange(false);
  };

  const submitEmailForConversion = async (
    email: string,
  ): Promise<string | null> => {
    // Placeholder function for future API integration
    // Should POST to /api/conversion/submit with email content
    //TODO: Appeler l'API POST /api/conversion/submit pour convertir l'email en HTML
    console.log("Submitting email for conversion:", email);
    console.log("[API PLACEHOLDER] POST /api/conversion/submit");

    // Simulated response
    const jobId = `job_${Date.now()}`;
    return jobId;
  };

  const checkConversionStatus = async (
    jobId: string,
  ): Promise<ConversionResponse> => {
    // Placeholder function for future API integration
    // Should GET /api/conversion/status/:jobId
    //TODO: Appeler l'API GET /api/conversion/status/{jobId} pour vérifier le statut de conversion
    console.log("Checking conversion status for jobId:", jobId);
    console.log("[API PLACEHOLDER] GET /api/conversion/status/" + jobId);

    // TODO: Replace with actual API call that returns real conversion status
    // For now, randomly return either pending or completed for testing purposes
    const isReady = Math.random() > 0.5;

    // Simulated response
    return {
      jobId,
      status: isReady ? "completed" : "pending",
      contenuHtml: isReady
        ? `<html><body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;"><table style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 5px;"><tr><td style="padding: 30px;"><h2 style="color: #1976d2; margin-top: 0;">Email converti par IA</h2><p>Ceci est un exemple de contenu converti par l'IA.</p><a href="#" style="background-color: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Cliquez ici</a></td></tr></table></body></html>`
        : undefined,
      error: undefined,
    };
  };

  const startConversion = async () => {
    if (!emailToPaste.trim()) {
      setConversionError("Veuillez coller le contenu de l'email");
      return;
    }

    if (emailToPaste.length > 7000) {
      setConversionError(
        "Le contenu de l'email ne doit pas dépasser 7000 caractères",
      );
      return;
    }

    setConversionLoading(true);
    setConversionError(null);

    try {
      const jobId = await submitEmailForConversion(emailToPaste);
      if (jobId) {
        setConversionJobId(jobId);
        // Start polling for conversion status
        pollConversionStatus(jobId);
      } else {
        setConversionError("Erreur lors de l'envoi du mail pour conversion");
      }
    } catch (error) {
      setConversionError("Erreur lors de l'envoi du mail pour conversion");
      console.error(error);
    } finally {
      setConversionLoading(false);
    }
  };

  const pollConversionStatus = (jobId: string) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await checkConversionStatus(jobId);

        if (response.status === "completed") {
          clearInterval(pollInterval);
          if (response.contenuHtml) {
            setContenuHtml(response.contenuHtml);
            setConversionJobId(null);
            setEmailToPaste("");
          }
        } else if (response.status === "failed") {
          clearInterval(pollInterval);
          setConversionError(response.error || "La conversion a échoué");
          setConversionJobId(null);
        }
      } catch (error) {
        clearInterval(pollInterval);
        setConversionError("Erreur lors de la vérification du statut");
        console.error(error);
      }
    }, 5000); // Poll every 5 seconds
  };

  const creerModeleMail = () => {
    // Fonction vide pour future intégration API (création)
    //TODO: Appeler l'API POST /api/modeles-mails pour créer un nouveau modèle de mail
    console.log({ nom, objet, expediteur, contenuHtml });
  };

  const modifierModeleMail = () => {
    // Fonction vide pour future intégration API (modification)
    //TODO: Appeler l'API PUT /api/modeles-mails/{id} pour mettre à jour le modèle de mail
    console.log({
      id: initialData?.id,
      nom,
      objet,
      expediteur,
      contenuHtml,
    });
  };

  const handleSave = () => {
    if (!nom || !objet || !expediteur || !contenuHtml) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (isEdit) {
      modifierModeleMail();
    } else {
      creerModeleMail();
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[1520px] sm:max-w-[1520px]! bg-ocean-50 rounded-[10px] p-[30px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-bold text-black">
            {isEdit ? "Modifier un modèle de mail" : "Créer un modèle de mail"}
          </DialogTitle>
          <p className="text-sm text-neutral-600 mt-2">
            Créer et éditer le contenu HTML et les métadonnées d'un modèle
            d'email.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Métadonnées du mail */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="modele-mail-nom"
                className="text-[14px] text-ocean-950"
              >
                Nom du modèle <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Nom interne du modèle pour le retrouver facilement." />
            </div>
            <Input
              id="modele-mail-nom"
              placeholder="Nom du modèle"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="modele-mail-objet"
                className="text-[14px] text-ocean-950"
              >
                Objet du mail <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Sujet de l'email tel qu'il apparaîtra au destinataire." />
            </div>
            <Input
              id="modele-mail-objet"
              placeholder="Objet du mail"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="modele-mail-expediteur"
                className="text-[14px] text-ocean-950"
              >
                Adresse de l&apos;expéditeur (spoofing) " "
                <span className="text-red-500">*</span>
              </Label>
              <InfoTooltip text="Adresse affichée comme expéditeur (attention au spoofing)." />
            </div>
            <Input
              id="modele-mail-expediteur"
              placeholder="exemple@entreprise.com"
              value={expediteur}
              onChange={(e) => setExpediteur(e.target.value)}
              className="bg-white border-neutral-300 rounded-[5px]"
            />
          </div>

          {/* Onglets pour les trois modes de création */}
          <Tabs defaultValue="manuel" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manuel">Manuel</TabsTrigger>
              <TabsTrigger value="template">Template prédéfini</TabsTrigger>
              <TabsTrigger value="conversion-ia">Conversion IA</TabsTrigger>
            </TabsList>

            {/* Onglet 1: Manuel - Saisie HTML directe */}
            <TabsContent value="manuel" className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="modele-mail-html"
                    className="text-[14px] text-ocean-950"
                  >
                    Contenu HTML <span className="text-red-500">*</span>
                  </Label>
                  <InfoTooltip text="HTML complet du message; testez l'aperçu avant sauvegarde." />
                </div>
                <textarea
                  id="modele-mail-html"
                  placeholder="<html>..."
                  value={contenuHtml}
                  onChange={(e) => setContenuHtml(e.target.value)}
                  className="min-h-[180px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400"
                />
              </div>
            </TabsContent>

            {/* Onglet 2: Template prédéfini - Sélection et customisation */}
            <TabsContent value="template" className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <Label className="text-[14px] text-ocean-950">
                  Sélectionner un template prédéfini
                </Label>
                <select
                  value={selectedTemplate ?? ""}
                  onChange={(e) => {
                    const templateId = parseInt(e.target.value);
                    setSelectedTemplate(templateId);
                    const template = modelesMails.find(
                      (t) => t.id === templateId,
                    );
                    if (template?.contenuHtml) {
                      setContenuHtml(template.contenuHtml);
                    }
                  }}
                  className="rounded-[5px] border border-neutral-300 bg-white p-2 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400"
                >
                  <option value="">-- Choisir un template --</option>
                  {modelesMails.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Label className="text-[14px] text-ocean-950">
                    Personnaliser le contenu HTML (optionnel)
                  </Label>
                  <InfoTooltip text="Modifiez le template sélectionné si nécessaire." />
                </div>
                <textarea
                  placeholder="Modifiez le HTML du template..."
                  value={contenuHtml}
                  onChange={(e) => setContenuHtml(e.target.value)}
                  className="min-h-[180px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400"
                />
              </div>
            </TabsContent>

            {/* Onglet 3: Conversion IA - Copier-coller email */}
            <TabsContent value="conversion-ia" className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Label className="text-[14px] text-ocean-950">
                    Contenu du mail à convertir (max 7000 caractères)
                    <span className="text-red-500">*</span>
                  </Label>
                  <InfoTooltip text="Copiez-collez le contenu complet du mail que vous souhaitez convertir en phishing." />
                </div>
                <textarea
                  placeholder="Collez ici le contenu du mail..."
                  value={emailToPaste}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 7000) {
                      setEmailToPaste(value);
                    }
                  }}
                  disabled={conversionLoading || !!conversionJobId}
                  className="min-h-[180px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:opacity-50"
                />
                <p className="text-xs text-neutral-500">
                  {emailToPaste.length} / 7000 caractères
                </p>
              </div>

              {conversionError && (
                <div className="rounded-[5px] bg-red-50 border border-red-300 p-3">
                  <p className="text-sm text-red-800">{conversionError}</p>
                </div>
              )}

              {conversionLoading || conversionJobId ? (
                <div className="rounded-[5px] bg-blue-50 border border-blue-300 p-3">
                  <p className="text-sm text-blue-800">
                    {conversionLoading
                      ? "Envoi du mail en cours de conversion..."
                      : "Conversion en cours... Veuillez patienter (cela peut prendre entre 5 et 10 minutes)."}
                  </p>
                  <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 animate-pulse"></div>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={startConversion}
                  disabled={!emailToPaste.trim()}
                  className="bg-ocean-800 text-white rounded-[5px] hover:bg-ocean-900"
                >
                  Envoyer pour conversion
                </Button>
              )}

              {contenuHtml && (
                <div className="rounded-[5px] bg-green-50 border border-green-300 p-3">
                  <p className="text-sm text-green-800">
                    ✓ Contenu converti et prêt! Vous pouvez sauvegarder le
                    modèle.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Aperçu du contenu HTML - toujours visible */}
          {contenuHtml && (
            <div className="flex flex-col gap-3">
              <Label className="text-[14px] text-ocean-950">Aperçu</Label>
              <iframe
                srcDoc={contenuHtml}
                sandbox="allow-same-origin"
                className="h-[560px] rounded-[5px] border border-neutral-300 bg-white p-3 text-sm"
              />
            </div>
          )}

          {/* Boutons d'action */}
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
              {isEdit ? "Mettre à jour" : "Sauvegarder"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
