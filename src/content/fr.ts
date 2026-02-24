import type { Dictionary, ServiceItem } from "./types";

const makeService = (
  slug: string,
  title: string,
  excerpt: string,
  image: string,
): ServiceItem => ({
  slug,
  title,
  excerpt,
  image,
  paragraphs: [
    `Terra Pretiosa conçoit et pilote des prestations de ${title.toLowerCase()} adaptées aux contraintes techniques, humaines et réglementaires de chaque site.`,
    "Notre approche combine expertise terrain, assurance qualité et transfert de compétences pour sécuriser des décisions rapides et durables.",
  ],
  capabilities: [
    "Diagnostic initial et cadrage opérationnel",
    "Déploiement terrain avec indicateurs de performance",
    "Traçabilité documentaire et restitution claire",
    "Montée en compétences des équipes locales",
  ],
  highlights: [
    {
      title: "Diagnostic ciblé",
      text: "Nous identifions rapidement les points critiques pour prioriser les actions à plus fort impact.",
      ctaLabel: "Échanger avec un expert",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-1.svg",
    },
    {
      title: "Exécution maîtrisée",
      text: "Le plan d'intervention est rythmé par des jalons clairs, un suivi qualité et des revues d'avancement.",
      ctaLabel: "Voir nos services",
      ctaHref: "/fr/services",
      image: "/placeholders/highlight-2.svg",
    },
    {
      title: "Mesure des résultats",
      text: "Nous suivons des indicateurs techniques et économiques pour sécuriser la performance de la mission.",
      ctaLabel: "Lancer une mission",
      ctaHref: "/fr/mission",
      image: "/placeholders/highlight-3.svg",
    },
    {
      title: "Transfert durable",
      text: "Les équipes client disposent de méthodes, standards et supports directement utilisables après la mission.",
      ctaLabel: "Nous contacter",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-4.svg",
    },
  ],
});

export const fr: Dictionary = {
  lang: "fr",
  siteName: "Terra Pretiosa",
  logoLabel: "Terra Pretiosa",
  nav: {
    services: "Services",
    company: "Entreprise",
    team: "Équipe",
    contact: "Contact",
    search: "Recherche",
    login: "Connexion",
    mission: "Lancer une mission",
    companyMenu: "Entreprise",
    companyLinks: {
      about: "À propos",
      megatrends: "Mégatendance",
      sustainable: "Développement durable",
      ambitions: "Nos ambitions",
      contact: "Contact",
    },
  },
  common: {
    partnerCta: "PARTENAIRE AVEC TERRA PRETIOSA",
    contactUs: "Contactez-nous",
    learnMore: "En savoir plus",
    readMore: "Lire plus",
    takeNextStep: "Passez à l'étape suivante",
    breadcrumbs: {
      home: "Accueil",
      services: "Services",
    },
  },
  home: {
    hero: [
      {
        title: "Gouvernance minérale et performance terrain",
        subtitle:
          "Cabinet stratégique spécialisé en services miniers et gouvernance des ressources minérales pour une industrialisation durable en Afrique.",
        ctaLabel: "Découvrir nos services",
        ctaHref: "/fr/services",
        image: "/placeholders/hero-1.svg",
      },
      {
        title: "Résilience de la chaîne d'approvisionnement",
        subtitle:
          "Nous renforçons la fiabilité des flux, la conformité et la transparence de la mine à l'exportation.",
        ctaLabel: "Voir notre approche",
        ctaHref: "/fr/company",
        image: "/placeholders/hero-2.svg",
      },
      {
        title: "Opérations minières responsables",
        subtitle:
          "Nos équipes intègrent les exigences techniques, ESG et de performance pour des résultats mesurables.",
        ctaLabel: "Lancer une mission",
        ctaHref: "/fr/mission",
        image: "/placeholders/hero-3.svg",
      },
    ],
    features: [
      {
        title: "Expertise multidisciplinaire",
        text: "Essais, analyses, opérations minières, environnement et gouvernance: une offre intégrée sur toute la chaîne de valeur.",
        ctaLabel: "Explorer les catégories",
        ctaHref: "/fr/services",
        image: "/placeholders/feature-1.svg",
      },
      {
        title: "Ancrage africain et standard international",
        text: "Nous opérons dans plusieurs juridictions minières avec une exigence de qualité, de conformité et de transfert de compétences.",
        ctaLabel: "Voir le corridor d'activité",
        ctaHref: "/fr/company#corridor",
        image: "/placeholders/feature-2.svg",
      },
      {
        title: "Impact durable et création de valeur",
        text: "Nos missions alignent performance industrielle, recettes minières et bénéfices économiques locaux.",
        ctaLabel: "Découvrir nos ambitions",
        ctaHref: "/fr/company#ambitions",
        image: "/placeholders/feature-3.svg",
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Parcourez nos domaines d'intervention pour structurer et accélérer vos opérations.",
    serviceGridTitle: "Expertises clés",
    serviceGridIntro:
      "Une sélection de services à haute valeur ajoutée pour des missions minières exigeantes.",
    insights: {
      title: "Insights",
      featuredTitle: "Mégatendance: vers une gouvernance minérale agile",
      featuredExcerpt:
        "La transition énergétique mondiale augmente la pression sur les matières premières critiques. Les États et opérateurs doivent renforcer la gouvernance, la traçabilité et l'intégration locale.",
      featuredHref: "/fr/company#megatrends",
      items: [
        {
          title: "Industrialisation locale et valeur partagée",
          excerpt:
            "L'intégration locale transforme les ressources en moteur de développement industriel.",
          href: "/fr/company#ambitions",
        },
        {
          title: "Qualité des eaux et conformité ESG",
          excerpt:
            "Le suivi des effluents et des eaux minières devient un levier de performance durable.",
          href: "/fr/services/environnement",
        },
        {
          title: "Renforcement des capacités publiques",
          excerpt:
            "Les administrations minières ont besoin d'outils robustes pour piloter recettes et traçabilité.",
          href: "/fr/services/gouvernance-minerale",
        },
      ],
    },
    ctaBand: {
      title: "Prêt à structurer votre prochaine mission ?",
      missionCta: "Lancer une mission",
      contactCta: "Contact us",
    },
  },
  company: {
    pageTitle: "Entreprise",
    introTitle: "À propos de Terra Pretiosa",
    introBlocks: [
      {
        title: "Positionnement",
        text: "Terra Pretiosa est un cabinet stratégique spécialisé dans les services miniers et la gouvernance des ressources minérales.",
      },
      {
        title: "Vision",
        text: "Nous accompagnons la résilience des chaînes d'approvisionnement minérales et une industrialisation durable du continent africain.",
      },
      {
        title: "Méthode",
        text: "Nos interventions combinent expertise technique, exécution terrain, renforcement institutionnel et standards de conformité.",
      },
    ],
    corridorTitle: "Corridor d'activité",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinée Conakry",
      "Sénégal",
      "Niger",
      "Mali",
    ],
    hqTitle: "Siège",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    megatrendsTitle: "Mégatendance",
    megatrendsText:
      "La demande en matières premières minérales critiques impose de nouveaux standards de gouvernance, de transparence et de performance opérationnelle. Terra Pretiosa aide les acteurs publics et privés à anticiper ces mutations et à capturer durablement la valeur.",
    miningDevTitle: "Exploitation minière pour un développement efficace",
    miningDevText:
      "Nous promouvons une exploitation minière orientée résultats: meilleure productivité, recettes publiques sécurisées, industrialisation locale et compétitivité internationale.",
    sustainableTitle: "Développement durable",
    sustainableBullets: [
      "Intégration des exigences ESG dans les plans d'exploitation",
      "Réduction des impacts environnementaux et suivi de la qualité des eaux",
      "Approches de réhabilitation des sites fondées sur les risques",
      "Gouvernance transparente des flux et de la chaîne de custody",
    ],
    ambitionsTitle: "Nos ambitions",
    ambitionsBullets: [
      "Accélérer une gouvernance minérale robuste et mesurable",
      "Renforcer la résilience des chaînes d'approvisionnement",
      "Contribuer à l'industrialisation durable en Afrique",
      "Soutenir la montée en compétences des équipes locales",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa met à disposition des expertises techniques, opérationnelles et de gouvernance pour répondre aux défis de la filière minérale.",
    categoriesTitle: "Catégories de services",
    sitemapTitle: "Plan des services",
    featuredTitle: "Insight en vedette",
    featuredText:
      "La discipline opérationnelle et la gouvernance des données minières sont devenues des avantages compétitifs majeurs.",
    categories: [
      {
        slug: "essais-analyses",
        title: "Essais & Analyses",
        summary:
          "Caractérisation des matériaux, qualité des échantillons et fiabilité analytique pour des décisions techniques robustes.",
        icon: "EA",
        image: "/placeholders/category-1.svg",
        services: [
          makeService(
            "fragmentation-des-roches",
            "Fragmentation des roches",
            "Optimisation des paramètres de fragmentation pour améliorer la libération minérale et les performances aval.",
            "/placeholders/service-card-1.svg",
          ),
          makeService(
            "preparation-des-echantillons",
            "Préparation des échantillons",
            "Chaîne de préparation standardisée pour garantir la représentativité et limiter les biais analytiques.",
            "/placeholders/service-card-2.svg",
          ),
          makeService(
            "analyses-mineralogiques-et-chimiques",
            "Analyses minéralogiques et chimiques",
            "Analyses ciblées pour déterminer la composition, la variabilité et les éléments de valeur ou pénalisants.",
            "/placeholders/service-card-3.svg",
          ),
          makeService(
            "tests-mineralurgiques-et-metallurgiques",
            "Tests minéralurgiques et métallurgiques",
            "Programmes d'essais pour optimiser récupération, rendement et sélectivité des procédés.",
            "/placeholders/service-card-4.svg",
          ),
        ],
        faq: [
          {
            question: "Pourquoi standardiser la préparation des échantillons ?",
            answer:
              "La standardisation réduit les écarts, améliore la comparabilité des résultats et sécurise les décisions.",
          },
          {
            question: "Quels livrables recevez-vous ?",
            answer:
              "Des rapports techniques structurés, des tableaux de résultats et des recommandations actionnables.",
          },
        ],
      },
      {
        slug: "operations-minieres",
        title: "Opérations minières",
        summary:
          "Exécution opérationnelle et assistance technique pour renforcer disponibilité, sécurité et productivité.",
        icon: "OM",
        image: "/placeholders/category-2.svg",
        services: [
          makeService(
            "exhaure-des-mines",
            "Exhaure des mines",
            "Dimensionnement et supervision des solutions d'exhaure pour sécuriser la continuité des opérations.",
            "/placeholders/service-card-5.svg",
          ),
          makeService(
            "forage-minier",
            "Forage minier",
            "Support technique et organisationnel pour améliorer précision, cadence et sécurité des campagnes de forage.",
            "/placeholders/service-card-6.svg",
          ),
          makeService(
            "transport-minier",
            "Transport minier",
            "Optimisation des flux de transport, de la planification flotte à la performance logistique terrain.",
            "/placeholders/service-card-7.svg",
          ),
        ],
      },
      {
        slug: "formations",
        title: "Formations",
        summary:
          "Programmes de montée en compétences orientés performance continue, procédés et qualité opérationnelle.",
        icon: "FO",
        image: "/placeholders/category-3.svg",
        services: [
          makeService(
            "amelioration-continue",
            "Amélioration continue",
            "Formations Lean, SPC, maintenance et performance pour installer une culture de progrès mesurable.",
            "/placeholders/service-card-8.svg",
          ),
          makeService(
            "traitement-mineralurgique-et-des-eaux",
            "Traitement minéralurgique et des eaux",
            "Formation technique sur les procédés minéralurgiques et la maîtrise de la qualité des eaux.",
            "/placeholders/service-card-9.svg",
          ),
        ],
      },
      {
        slug: "environnement",
        title: "Environnement",
        summary:
          "Conformité environnementale, suivi de la qualité et réhabilitation pour une performance minière durable.",
        icon: "EN",
        image: "/placeholders/category-4.svg",
        services: [
          makeService(
            "politique-environnementale",
            "Politique environnementale",
            "Diagnostic, cadre juridique, ESG et mise en oeuvre de politiques environnementales adaptées.",
            "/placeholders/service-card-10.svg",
          ),
          makeService(
            "evaluation-et-rehabilitation-des-sites",
            "Évaluation & réhabilitation des sites",
            "Évaluation des risques et plans de réhabilitation progressifs des sites miniers.",
            "/placeholders/service-card-11.svg",
          ),
          makeService(
            "controle-qualite-assurance-qualite",
            "Contrôle qualité / Assurance qualité",
            "Systèmes QA/QC et chain of custody pour fiabiliser les données et les flux.",
            "/placeholders/service-card-12.svg",
          ),
          makeService(
            "surveillance-qualite-des-eaux",
            "Surveillance qualité des eaux",
            "Programmes de monitoring des eaux de surface et souterraines avec reporting de conformité.",
            "/placeholders/service-card-13.svg",
          ),
          makeService(
            "effluents-miniers-et-drainage-minier-acide",
            "Effluents miniers + drainage minier acide (AMD)",
            "Évaluation et traitement des effluents miniers, prévention et mitigation du drainage minier acide.",
            "/placeholders/service-card-14.svg",
          ),
        ],
      },
      {
        slug: "gouvernance-minerale",
        title: "Conseil en gouvernance des matières premières minérales",
        summary:
          "Appui stratégique aux États et institutions pour structurer recettes, contrôle et traçabilité du secteur minier.",
        icon: "GV",
        image: "/placeholders/category-5.svg",
        services: [
          makeService(
            "strategie-recettes-minieres",
            "Stratégie recettes minières",
            "Conception de stratégies de mobilisation, sécurisation et projection des recettes minières.",
            "/placeholders/service-card-15.svg",
          ),
          makeService(
            "structuration-organes-et-unites-revenus",
            "Structuration organes/instances & unités revenus",
            "Organisation des structures institutionnelles dédiées à la gouvernance et aux revenus miniers.",
            "/placeholders/service-card-16.svg",
          ),
          makeService(
            "integration-locale-et-politique-industrielle",
            "Intégration locale & politique industrielle",
            "Dispositifs d'intégration locale pour renforcer la transformation et la valeur ajoutée nationales.",
            "/placeholders/service-card-17.svg",
          ),
          makeService(
            "controle-production-et-reporting",
            "Contrôle production + reporting",
            "Cadres de contrôle et de reporting pour une supervision fiable de la production minière.",
            "/placeholders/service-card-18.svg",
          ),
          makeService(
            "audit-flux-paiements-et-tracabilite-export",
            "Audit flux paiements + traçabilité export",
            "Audit des flux financiers et des volumes exportés pour limiter les pertes de revenus.",
            "/placeholders/service-card-19.svg",
          ),
          makeService(
            "renforcement-capacites-administration",
            "Renforcement capacités administration",
            "Programmes de renforcement de capacités au profit des administrations minières.",
            "/placeholders/service-card-20.svg",
          ),
        ],
      },
    ],
    ctaBand: {
      title: "Partenaire de vos projets miniers",
      subtitle:
        "Nous mobilisons les bonnes expertises pour accélérer l'impact opérationnel, institutionnel et durable.",
      primaryCta: "PARTENAIRE AVEC TERRA PRETIOSA",
      secondaryCta: "Contact us",
    },
    relatedTitle: "Services associés",
    faqTitle: "Questions fréquentes",
  },
  team: {
    pageTitle: "Notre équipe",
    intro:
      "Une équipe pluridisciplinaire au service des opérations minières, de l'environnement et de la gouvernance des matières premières.",
    note: "Photos et mini CV seront ajoutés.",
    cvLabel: "Télécharger mini CV",
    members: [
      {
        name: "Amina Traoré",
        role: "Associée - Gouvernance minière",
        bio: "Spécialiste des politiques minières, recettes extractives et cadres institutionnels.",
        image: "/placeholders/team-1.svg",
      },
      {
        name: "Moussa Diallo",
        role: "Directeur opérations",
        bio: "Expert en pilotage de sites miniers, performance terrain et sécurité opérationnelle.",
        image: "/placeholders/team-2.svg",
      },
      {
        name: "Clara Mvemba",
        role: "Lead environnement",
        bio: "Ingénieure en gestion des eaux minières, conformité ESG et réhabilitation de sites.",
        image: "/placeholders/team-3.svg",
      },
      {
        name: "Jean Kaboré",
        role: "Responsable analyses",
        bio: "Expert en QA/QC, préparation d'échantillons et interprétation des données analytiques.",
        image: "/placeholders/team-4.svg",
      },
      {
        name: "Fatou Ndiaye",
        role: "Consultante formation",
        bio: "Conçoit des programmes Lean/SPC et d'amélioration continue pour équipes techniques.",
        image: "/placeholders/team-5.svg",
      },
      {
        name: "David Okoro",
        role: "Consultant stratégie",
        bio: "Accompagne les stratégies d'intégration locale et de politique industrielle minérale.",
        image: "/placeholders/team-6.svg",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Discutons de vos enjeux techniques, environnementaux et de gouvernance des matières premières minérales.",
    hqTitle: "Siège social",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    corridorTitle: "Corridor d'activité",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinée Conakry",
      "Sénégal",
      "Niger",
      "Mali",
    ],
    phoneLabel: "Téléphone",
    phoneValue: "À définir",
    emailLabel: "Email",
    emailValue: "À créer",
    formTitle: "Envoyez-nous un message",
    formSuccess: "Merci, votre message a bien été envoyé.",
    formFields: {
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer",
    },
    formErrors: {
      required: "Ce champ est requis.",
      email: "Adresse email invalide.",
    },
  },
  mission: {
    pageTitle: "Lancer une mission",
    intro:
      "Partagez les objectifs de votre mission. Notre équipe vous répondra avec une proposition adaptée.",
    formSuccess: "Merci. Votre demande de mission a été enregistrée.",
    missionTypes: [
      "Essais & Analyses",
      "Opérations minières",
      "Formations",
      "Environnement",
      "Gouvernance minérale",
    ],
    formFields: {
      name: "Nom complet",
      email: "Email",
      organization: "Organisation",
      country: "Pays",
      missionType: "Type de mission",
      timeline: "Calendrier souhaité",
      budget: "Budget (optionnel)",
      details: "Détails de la mission",
      submit: "Soumettre la demande",
    },
    formErrors: {
      required: "Ce champ est requis.",
      email: "Adresse email invalide.",
    },
  },
  footer: {
    columns: [
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/fr/company#about" },
          { label: "Mégatendance", href: "/fr/company#megatrends" },
          { label: "Développement durable", href: "/fr/company#sustainable" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Essais & Analyses", href: "/fr/services/essais-analyses" },
          {
            label: "Opérations minières",
            href: "/fr/services/operations-minieres",
          },
          {
            label: "Gouvernance minérale",
            href: "/fr/services/gouvernance-minerale",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Nous écrire", href: "/fr/contact" },
          { label: "Lancer une mission", href: "/fr/mission" },
        ],
      },
    ],
    legal: "© Terra Pretiosa. Tous droits réservés.",
    socials: ["LinkedIn", "X", "YouTube"],
  },
  search: {
    title: "Recherche",
    placeholder: "Rechercher un service, une page ou un insight...",
    suggestedLabel: "Suggestions",
    noResult: "Aucun résultat pour cette recherche.",
  },
};
