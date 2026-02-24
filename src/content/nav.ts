export const megaMenuCategoryOrder = [
  "essais-analyses",
  "operations-minieres",
  "formations",
  "environnement",
  "gouvernance-minerale",
] as const;

export const companyMenuAnchors = [
  { id: "about", anchor: "about" },
  { id: "megatrends", anchor: "megatrends" },
  { id: "sustainable", anchor: "sustainable" },
  { id: "ambitions", anchor: "ambitions" },
  { id: "contact", anchor: "contact" },
] as const;

export const megaMenuTileImages: Record<string, string[]> = {
  "essais-analyses": [
    "/placeholders/service-lab-1.svg",
    "/placeholders/service-lab-2.svg",
    "/placeholders/service-lab-3.svg",
    "/placeholders/service-lab-4.svg",
    "/placeholders/service-lab-5.svg",
    "/placeholders/service-lab-6.svg",
  ],
  "operations-minieres": [
    "/placeholders/service-mine-1.svg",
    "/placeholders/service-mine-2.svg",
    "/placeholders/service-mine-3.svg",
    "/placeholders/service-mine-4.svg",
    "/placeholders/service-mine-5.svg",
    "/placeholders/service-mine-6.svg",
  ],
  formations: [
    "/placeholders/service-training-1.svg",
    "/placeholders/service-training-2.svg",
    "/placeholders/service-training-3.svg",
    "/placeholders/service-training-4.svg",
    "/placeholders/service-training-5.svg",
    "/placeholders/service-training-6.svg",
  ],
  environnement: [
    "/placeholders/service-env-1.svg",
    "/placeholders/service-env-2.svg",
    "/placeholders/service-env-3.svg",
    "/placeholders/service-env-4.svg",
    "/placeholders/service-env-5.svg",
    "/placeholders/service-env-6.svg",
  ],
  "gouvernance-minerale": [
    "/placeholders/service-gov-1.svg",
    "/placeholders/service-gov-2.svg",
    "/placeholders/service-gov-3.svg",
    "/placeholders/service-gov-4.svg",
    "/placeholders/service-gov-5.svg",
    "/placeholders/service-gov-6.svg",
  ],
};
