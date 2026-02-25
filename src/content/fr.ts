import type { Dictionary, ServiceItem } from "./types";

const serviceDetails: Record<
  string,
  { paragraphs: string[]; capabilities: string[] }
> = {
  "fragmentation-des-roches": {
    paragraphs: [
      "La fragmentation et le broyage sont des étapes cruciales en minéralurgie et métallurgie. Elles conditionnent la qualité de l'échantillonnage, la précision des analyses et l'efficacité du traitement.",
      "Une fragmentation adaptée permet une distribution homogène des particules. Un broyage contrôlé évite la sur-pulvérisation et limite les pertes métalliques.",
    ],
    capabilities: [
      "Contrôle granulométrique pour des échantillons représentatifs",
      "Optimisation du rendement et de la récupération",
      "Réduction des coûts d'exploitation",
      "Décisions techniques et économiques plus fiables",
      "Contribution à la conception des usines de traitement",
    ],
  },
  "preparation-des-echantillons": {
    paragraphs: [
      "Une bonne préparation des échantillons est une étape critique en métallurgie extractive. Elle vise un échantillon homogène et représentatif pour les tests chimiques et minéralogiques.",
      "Une préparation inadéquate peut fausser les résultats et impacter les choix de procédés, la conception des circuits et l'évaluation économique du projet.",
    ],
    capabilities: [
      "Inventaire et sélection rigoureuse selon les normes",
      "Séchage maximal des échantillons",
      "Fragmentation et broyage contrôlés",
      "Mélange et fractionnement stricts",
    ],
  },
  "analyses-mineralogiques-et-chimiques": {
    paragraphs: [
      "Les analyses minéralogiques et chimiques sont déterminantes pour la compréhension des gisements, la performance métallurgique et la conformité environnementale.",
      "Nous mobilisons XRD, FRX, SEM et QEMSCAN pour une lecture détaillée des associations minérales, de la granulométrie et de la composition chimique.",
    ],
    capabilities: [
      "Analyses XRD, FRX, SEM et QEMSCAN",
      "Intégration des données dans la conception métallurgique",
      "Réduction des délais d'acheminement des échantillons",
      "Reprise rapide des tests et meilleure coordination laboratoire-terrain",
    ],
  },
  "tests-mineralurgiques-et-metallurgiques": {
    paragraphs: [
      "Nous proposons une gamme complète d'essais pour évaluer le comportement du minerai avant et pendant l'exploitation.",
      "Ces tests orientent les choix de procédés et d'investissement en optimisant récupération, rendements et coûts.",
    ],
    capabilities: [
      "Analyses granulométriques",
      "Composition minéralogique et chimique",
      "Tests de flottation",
      "Essais gravimétriques",
      "Essais de lixiviation (cyanuration, acide)",
    ],
  },
  "exhaure-des-mines": {
    paragraphs: [
      "L'exhaure est essentielle pour la sécurité, la continuité de production et la protection des équipements en mine.",
      "Nous accompagnons la planification et l'exécution des opérations de pompage avec des solutions adaptées aux conditions de site.",
    ],
    capabilities: [
      "Pompage d'eau et maîtrise des infiltrations",
      "Équipements robustes: pompes submersibles et motopompes",
      "Maintenance préventive et réduction des risques HSE",
      "Optimisation des coûts d'exploitation",
    ],
  },
  "forage-minier": {
    paragraphs: [
      "Nous réalisons des forages d'exploitation, de production et de drainage en mines à ciel ouvert et souterraines.",
      "Nos équipes interviennent avec une approche adaptée aux exigences de profondeur, diamètre et précision.",
    ],
    capabilities: [
      "Forage de production",
      "Forage de drainage",
      "Rendement élevé et sécurité optimale",
      "Exécution adaptée aux contraintes géotechniques",
    ],
  },
  "transport-minier": {
    paragraphs: [
      "Nous assurons un transport minier fiable des minerais, équipements et consommables industriels.",
      "Notre logistique relie sites d'exploitation, ports et usines de traitement avec un suivi opérationnel continu.",
    ],
    capabilities: [
      "Flotte adaptée: bennes, plateaux, citernes",
      "Chauffeurs formés aux standards HSE",
      "Traçabilité et coordination en temps réel",
      "Respect des délais et contraintes opérationnelles",
    ],
  },
  "amelioration-continue": {
    paragraphs: [
      "Nos formations en amélioration continue renforcent les compétences des équipes minières et métallurgiques.",
      "Les modules combinent théorie, ateliers pratiques et cas réels pour installer une culture de performance durable.",
    ],
    capabilities: [
      "Lean Mining & optimisation des processus",
      "Contrôle statistique des procédés (SPC)",
      "Maintenance préventive & fiabilité des équipements",
      "Gestion des coûts & performance opérationnelle",
      "Culture de performance et leadership terrain",
    ],
  },
  "traitement-mineralurgique-et-des-eaux": {
    paragraphs: [
      "Cette formation couvre le traitement des minerais et la gestion des eaux industrielles dans les opérations minières.",
      "Elle vise à améliorer la performance métallurgique, réduire les pertes et garantir la conformité environnementale.",
    ],
    capabilities: [
      "Optimisation concassage, broyage, classification",
      "Flottation, lixiviation, récupération métallurgique",
      "Bilans massiques et contrôle des performances",
      "Traitement des effluents et gestion de l'AMD",
      "Recyclage et gestion durable de l'eau",
    ],
  },
  "politique-environnementale": {
    paragraphs: [
      "Nous aidons les pays et entreprises à développer ou améliorer leur politique environnementale en amont des projets et des plans de réhabilitation.",
      "L'approche intègre gouvernance ESG, cadre juridique, contrôle et mécanismes financiers de garantie environnementale.",
    ],
    capabilities: [
      "Diagnostic environnemental sectoriel",
      "Analyse du cadre juridique",
      "Consultation des parties prenantes",
      "Définition des standards environnementaux",
      "Intégration des exigences ESG et standards internationaux",
      "Mise en place des mécanismes de contrôle et d'application",
      "Structuration d'un mécanisme financier de garantie environnementale",
      "Plan de mise en œuvre et renforcement des capacités institutionnelles",
      "Évaluation de l'impact économique et ajustement stratégique",
    ],
  },
  "evaluation-et-rehabilitation-des-sites": {
    paragraphs: [
      "Nous réalisons des audits complets des sols, eaux, résidus et infrastructures pour cartographier les risques des sites miniers.",
      "Nous concevons des plans de réhabilitation technique et financière intégrant stabilisation et restauration écologique.",
    ],
    capabilities: [
      "Diagnostic des impacts environnementaux, géotechniques et sociaux",
      "Cartographie des risques et passifs miniers",
      "Estimation des coûts de restauration",
      "Plans de réhabilitation progressifs",
    ],
  },
  "controle-qualite-assurance-qualite": {
    paragraphs: [
      "Nous déployons un système QA/QC rigoureux pour garantir fiabilité, précision et traçabilité des analyses minières et environnementales.",
      "Nos procédures sont alignées sur les standards internationaux pour produire des résultats défendables.",
    ],
    capabilities: [
      "Étalonnage et vérification des instruments",
      "Blancs, duplicatas et standards certifiés",
      "Chaîne de custody documentée",
      "Audits internes et validation des résultats",
    ],
  },
  "surveillance-qualite-des-eaux": {
    paragraphs: [
      "Nous analysons et surveillons la qualité des eaux dans les zones reculées, nouveaux forages et environnements miniers.",
      "Le dispositif est adapté à l'usage: captage, eau potable, eaux usées, eaux souterraines et rejets.",
    ],
    capabilities: [
      "Échantillonnage multi-usages des eaux",
      "Analyse d'eau potable et eaux minières",
      "Suivi périodique et reporting de conformité",
    ],
  },
  "effluents-miniers-et-drainage-minier-acide": {
    paragraphs: [
      "Nous analysons les effluents et lixiviats miniers pour assurer la conformité réglementaire des rejets.",
      "Nos solutions couvrent le traitement des effluents, la gestion du drainage minier acide (AMD) et le monitoring continu.",
    ],
    capabilities: [
      "Analyse physico-chimique (pH, métaux lourds, sulfates, cyanures, arsenic)",
      "Diagnostic des sources de pollution",
      "Conception de systèmes de traitement adaptés",
      "Traitement du drainage minier acide (AMD)",
      "Mise en place de bassins de rétention et gestion des eaux pluviales",
      "Optimisation des circuits de recyclage d'eau industrielle",
      "Plan de surveillance et monitoring environnemental continu",
    ],
  },
  "strategie-recettes-minieres": {
    paragraphs: [
      "Nous proposons des stratégies d'amélioration des recettes minières pour les États producteurs.",
      "Les recommandations visent la sécurisation des flux, la transparence et l'efficacité budgétaire.",
    ],
    capabilities: [
      "Stratégie de mobilisation des recettes minières",
      "Outils d'évaluation des projets",
      "Manuels de procédures",
      "Assistance technique continue",
    ],
  },
  "structuration-organes-et-unites-revenus": {
    paragraphs: [
      "Nous accompagnons la structuration des organes et instances en charge des ressources minières et des unités de revenus.",
      "L'objectif est d'améliorer gouvernance, coordination institutionnelle et performance administrative.",
    ],
    capabilities: [
      "Structuration des instances et organes",
      "Formation des cadres ministériels",
      "Création d'unités spécialisées revenus miniers",
      "Assistance institutionnelle continue",
    ],
  },
  "integration-locale-et-politique-industrielle": {
    paragraphs: [
      "Nous conseillons l'intégration locale et la politique industrielle pour accroître la valeur ajoutée nationale.",
      "Les études couvrent compétitivité, raffineries, emploi, fiscalité industrielle et zones minières intégrées.",
    ],
    capabilities: [
      "Étude de compétitivité de la transformation locale",
      "Analyse CAPEX des raffineries",
      "Évaluation de l'impact emploi",
      "Plans d'incitations fiscales industrielles",
      "Structuration de zones industrielles minières",
    ],
  },
  "controle-production-et-reporting": {
    paragraphs: [
      "Nous mettons en place des moyens de contrôle de production et des dispositifs de reporting robustes.",
      "Ces systèmes améliorent la qualité de la donnée, la supervision des volumes et la transparence des flux miniers.",
    ],
    capabilities: [
      "Contrôle de production",
      "Systèmes de reporting",
      "Traçabilité des volumes exportés",
      "Alignement avec standards internationaux",
    ],
  },
  "audit-flux-paiements-et-tracabilite-export": {
    paragraphs: [
      "Nous auditons les flux de paiement miniers et les volumes exportés pour réduire les pertes de revenus.",
      "La traçabilité des flux financiers et physiques est structurée pour soutenir la conformité et la gouvernance.",
    ],
    capabilities: [
      "Audit des flux de paiement miniers",
      "Traçabilité des volumes exportés",
      "Vérification des écarts et risques",
      "Recommandations de sécurisation des recettes",
    ],
  },
  "renforcement-capacites-administration": {
    paragraphs: [
      "Nous renforçons les capacités des administrations minières via formation, outils et accompagnement opérationnel.",
      "L'objectif est d'ancrer des capacités durables de contrôle, pilotage et négociation stratégique.",
    ],
    capabilities: [
      "Formation des cadres ministériels",
      "Outils d'évaluation des projets",
      "Appui méthodologique et procédural",
      "Assistance technique continue",
    ],
  },
};

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
    ...(serviceDetails[slug]?.paragraphs ?? [
      `Terra Pretiosa conçoit et pilote des prestations de ${title.toLowerCase()} alignées sur les contraintes géologiques, métallurgiques, HSE et réglementaires du projet.`,
      "Notre méthodologie combine diagnostic terrain, modélisation technique, contrôle qualité et pilotage par indicateurs de performance afin de sécuriser les décisions d'investissement.",
    ]),
    "Chaque mission intègre un dispositif QA/QC, une gouvernance claire des données et un transfert opérationnel vers les équipes locales pour garantir la continuité après intervention.",
  ],
  capabilities: [
    ...(serviceDetails[slug]?.capabilities ?? [
      "Due diligence technique et cadrage opérationnel",
      "Exécution terrain avec revues de performance périodiques",
      "Traçabilité documentaire et reporting décisionnel",
      "Conformité HSE, ESG et exigences réglementaires",
    ]),
    "Plan de transfert de compétences et de montée en autonomie",
  ],
  highlights: [
    {
      title: "Cadrage technico-economique",
      text: "Nous consolidons données géologiques, contraintes opérationnelles et objectifs financiers pour définir une feuille de route réaliste.",
      ctaLabel: "Échanger avec un expert",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-1.svg",
    },
    {
      title: "Execution maitrisee",
      text: "Le déploiement suit des jalons techniques, des contrôles QA/QC et des arbitrages rapides pour limiter les dérives de coût et de délai.",
      ctaLabel: "Voir nos services",
      ctaHref: "/fr/services",
      image: "/placeholders/highlight-2.svg",
    },
    {
      title: "Performance mesuree",
      text: "Nous suivons des KPI techniques, métallurgiques, environnementaux et économiques pour objectiver les gains de la mission.",
      ctaLabel: "Lancer une mission",
      ctaHref: "/fr/mission",
      image: "/placeholders/highlight-3.svg",
    },
    {
      title: "Transfert durable",
      text: "Nous remettons procédures, standards de contrôle et supports de formation afin d'ancrer durablement les bonnes pratiques.",
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
        title: "Ingenierie miniere, metallurgie et gouvernance strategique",
        subtitle:
          "Terra Pretiosa accompagne les projets miniers depuis la caracterisation du minerai jusqu'a la performance industrielle, avec des exigences strictes de securite, conformite et creation de valeur.",
        ctaLabel: "Decouvrir nos services",
        ctaHref: "/fr/services",
        image: "/placeholders/hero-1.svg",
      },
      {
        title: "Securiser la chaine de valeur des ressources minerales",
        subtitle:
          "Nos equipes combinent geosciences, mineralurgie, operations et gouvernance publique pour renforcer la resilience des chaines d'approvisionnement strategiques en Afrique.",
        ctaLabel: "Voir notre approche",
        ctaHref: "/fr/company",
        image: "/placeholders/hero-2.svg",
      },
      {
        title: "Transformer l'extraction en valeur industrielle locale",
        subtitle:
          "Nous structurons des missions mesurables pour les Etats, institutions et operateurs afin d'ameliorer la recuperation metallurgique, la gouvernance des revenus et la competitivite industrielle.",
        ctaLabel: "Lancer une mission",
        ctaHref: "/fr/mission",
        image: "/placeholders/hero-3.svg",
      },
    ],
    features: [
      {
        title: "Une offre technique complete, du laboratoire au site",
        text: "Essais mineralurgiques, QA/QC analytique, exhaure, forage, transport, environnement et gouvernance: un continuum de services coordonnes autour de la performance et de la maitrise des risques.",
        ctaLabel: "Explorer les categories",
        ctaHref: "/fr/services",
        image: "/placeholders/feature-1.svg",
      },
      {
        title: "Execution multi-pays dans les corridors miniers africains",
        text: "Nos operations couvrent le Burkina Faso, la RDC, la Guinee Conakry, le Senegal, le Niger et le Mali, avec un pilotage international depuis Gaithersburg (Maryland, USA).",
        ctaLabel: "Voir le corridor d'activite",
        ctaHref: "/fr/company#corridor",
        image: "/placeholders/feature-2.svg",
      },
      {
        title: "Souverainete miniere, industrialisation et impact durable",
        text: "Nous aidons les acteurs publics et prives a convertir les ressources minerales en capacites productives locales, en recettes fiabilisees et en emplois qualifies durables.",
        ctaLabel: "Decouvrir nos ambitions",
        ctaHref: "/fr/company#ambitions",
        image: "/placeholders/feature-3.svg",
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Explorez nos lignes de service pour structurer, fiabiliser et accelerer vos programmes miniers, metallurgiques et environnementaux.",
    serviceGridTitle: "Expertises techniques cles",
    serviceGridIntro:
      "Une selection de prestations a haute valeur ajoutee couvrant la chaine geologique, operationnelle, environnementale et institutionnelle.",
    insights: {
      title: "Analyses",
      featuredTitle:
        "Megatendance: excellence operationnelle et gouvernance des minerais critiques",
      featuredExcerpt:
        "Sous l'effet de la transition energetique et des exigences ESG, les acteurs miniers doivent simultanement augmenter la productivite, reduire l'empreinte environnementale et renforcer la tracabilite des flux.",
      featuredHref: "/fr/company#megatrends",
      items: [
        {
          title: "Industrialisation locale et emplois techniques",
          excerpt:
            "Les politiques de contenu local et de transformation permettent de capter davantage de valeur sur les territoires miniers.",
          href: "/fr/company#megatrends",
        },
        {
          title: "Qualite des eaux et conformite ESG",
          excerpt:
            "Le monitoring hydrochimique des effluents et du drainage minier acide devient un indicateur critique de performance durable.",
          href: "/fr/services/environnement",
        },
        {
          title: "Transfert de savoir-faire et excellence terrain",
          excerpt:
            "Les programmes de formation operationnelle reduisent la variabilite d'execution et accelerent l'autonomie des equipes.",
          href: "/fr/services/formations",
        },
        {
          title: "Gouvernance des ressources minerales",
          excerpt:
            "Controle de production, audit des paiements et tracabilite export sont decisifs pour limiter les fuites de revenus.",
          href: "/fr/services/gouvernance-minerale",
        },
      ],
    },
    ctaBand: {
      title: "Pret a securiser votre prochaine mission miniere ?",
      missionCta: "Lancer une mission",
      contactCta: "Nous ecrire",
    },
  },
  company: {
    pageTitle: "Entreprise",
    introTitle: "A propos de Terra Pretiosa",
    introBlocks: [
      {
        title: "Mission",
        text: "Terra Pretiosa est une firme de conseil et d'execution specialisee dans les services miniers, la performance metallurgique et la gouvernance des ressources minerales.",
      },
      {
        title: "Positionnement",
        text: "Nous intervenons a l'interface entre technique, operations et politique publique pour aligner performance industrielle, conformite reglementaire et creation de valeur locale.",
      },
      {
        title: "Champ d'action",
        text: "Nos interventions couvrent la caracterisation du minerai, l'optimisation des procedes, l'exhaure, le forage, le transport minier, le suivi environnemental et la gouvernance des revenus extractifs.",
      },
      {
        title: "Approche d'ingenierie",
        text: "Notre methode repose sur des donnees fiabilisees, des protocoles QA/QC stricts, des revues de performance periodiques et des plans de renforcement de capacites pour garantir des resultats auditables.",
      },
    ],
    corridorTitle: "Corridor d'activite",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinee Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    hqTitle: "Siege",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    megatrendsTitle: "Megatendance",
    megatrendsText:
      "La hausse de la demande en minerais critiques impose des standards plus eleves en securite, tracabilite, efficacite energetique et performance metallurgique. Les operateurs et les Etats doivent fiabiliser leurs donnees et leurs modeles de gouvernance pour rester competitifs.",
    miningDevTitle: "Exploitation miniere pour un developpement efficace",
    miningDevText:
      "Nous promouvons une exploitation miniere createur de valeur long terme: productivite technique, recuperation metallurgique, maitrise des risques environnementaux, recettes publiques securisees et integration industrielle locale.",
    sustainableTitle: "Developpement durable",
    sustainableBullets: [
      "Systemes de suivi environnemental periodique et auditables",
      "Gestion integree des residus, boues et rejets miniers",
      "Plans de rehabilitation progressive et revegetalisation des sites",
      "Formation des operateurs locaux aux standards HSE et QA/QC",
      "Optimisation de l'usage de l'energie et de l'eau industrielle",
      "Conception de dispositifs d'exhaure et de traitement des eaux minieres",
      "Mobilisation du capital humain et financier pour soutenir une croissance responsable du secteur",
    ],
    ambitionsTitle: "Nos ambitions",
    ambitionsBullets: [
      "Renforcer la souverainete economique des Etats producteurs",
      "Fiabiliser les chaines d'approvisionnement en minerais strategiques",
      "Accelerer l'industrialisation durable des pays africains",
      "Elever les standards techniques et environnementaux du secteur",
      "Contribuer a la stabilite geopolitique des corridors miniers critiques",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa fournit des services d'ingenierie miniere, de pilotage operationnel et de gouvernance des ressources minerales avec des livrables techniques, auditables et orientes decision.",
    categoriesTitle: "Categories de services",
    sitemapTitle: "Plan des services",
    featuredTitle: "Insight en vedette",
    featuredText:
      "Nous combinons excellence technique, maitrise des risques operationnels et gouvernance responsable pour convertir les ressources minerales en croissance durable.",
    categories: [
      {
        slug: "essais-analyses",
        title: "Essais & Analyses",
        summary:
          "Essais et analyses en traitement des minerais: au cœur de l'action pour une Afrique plus prospère et soucieuse de ses ressources.",
        icon: "EA",
        image: "/placeholders/category-1.svg",
        services: [
          makeService(
            "fragmentation-des-roches",
            "Fragmentation des roches",
            "Contrôle de la fragmentation et du broyage pour fiabiliser l'échantillonnage, les analyses et la récupération métallurgique.",
            "/placeholders/service-card-1.svg",
          ),
          makeService(
            "preparation-des-echantillons",
            "Préparation des échantillons",
            "Préparation rigoureuse d'échantillons homogènes et représentatifs pour sécuriser les décisions techniques et économiques.",
            "/placeholders/service-card-2.svg",
          ),
          makeService(
            "analyses-mineralogiques-et-chimiques",
            "Analyses minéralogiques et chimiques",
            "Analyses avancées (XRD, FRX, SEM, QEMSCAN) pour comprendre le gisement et optimiser les choix métallurgiques.",
            "/placeholders/service-card-3.svg",
          ),
          makeService(
            "tests-mineralurgiques-et-metallurgiques",
            "Tests minéralurgiques et métallurgiques",
            "Essais complets (flottation, gravimétrie, lixiviation) pour optimiser rendement, récupération et schémas de traitement.",
            "/placeholders/service-card-4.svg",
          ),
        ],
        faq: [
          {
            question: "Pourquoi standardiser la préparation des échantillons ?",
            answer:
              "Une préparation inadéquate peut fausser la teneur, la minéralogie et la répartition des métaux. La standardisation réduit les écarts, améliore la comparabilité des résultats et sécurise les choix de procédés (flottation, lixiviation, gravimétrie).",
          },
          {
            question: "Quels livrables recevez-vous ?",
            answer:
              "Des rapports techniques structurés, tableaux de résultats, interprétation minéralogique/chimique et recommandations opérationnelles actionnables.",
          },
          {
            question: "Quelles techniques analytiques utilisez-vous ?",
            answer:
              "Nos équipes utilisent notamment XRD, FRX, SEM et QEMSCAN pour produire une image détaillée de la répartition minéralogique, des associations minérales et de la granulométrie.",
          },
        ],
      },
      {
        slug: "operations-minieres",
        title: "Opérations minières",
        summary:
          "Exhaure, forage et transport minier avec une approche orientée sécurité, rendement et continuité des opérations.",
        icon: "OM",
        image: "/placeholders/category-2.svg",
        services: [
          makeService(
            "exhaure-des-mines",
            "Exhaure des mines",
            "Exhaure et pompage d'eau pour sécuriser les opérations, prévenir les risques HSE et protéger les équipements.",
            "/placeholders/service-card-5.svg",
          ),
          makeService(
            "forage-minier",
            "Forage minier",
            "Forage de production et de drainage en mine à ciel ouvert/souterraine avec maîtrise technique, rendement et sécurité.",
            "/placeholders/service-card-6.svg",
          ),
          makeService(
            "transport-minier",
            "Transport minier",
            "Transport sécurisé des minerais, équipements et consommables industriels avec traçabilité et coordination temps réel.",
            "/placeholders/service-card-7.svg",
          ),
        ],
        faq: [
          {
            question: "Quelle est votre approche pour l'exhaure des mines ?",
            answer:
              "Nous combinons réactivité opérationnelle, robustesse des équipements (pompes submersibles, motopompes, tuyauterie), maintenance préventive et planification des risques pour sécuriser la continuité des opérations.",
          },
          {
            question: "Intervenez-vous en forage de production et de drainage ?",
            answer:
              "Oui. Nous réalisons forage de production et forage de drainage en mine à ciel ouvert et souterraine, avec une adaptation aux contraintes de profondeur, diamètre et précision.",
          },
          {
            question: "Comment garantissez-vous la fiabilité du transport minier ?",
            answer:
              "Nous mobilisons une flotte adaptée (bennes, camions plateaux, citernes), des chauffeurs formés HSE, une traçabilité continue et une coordination temps réel.",
          },
        ],
      },
      {
        slug: "formations",
        title: "Formations",
        summary:
          "Montée en compétences des équipes minières pour gagner en confiance, leadership et performance.",
        icon: "FO",
        image: "/placeholders/category-3.svg",
        services: [
          makeService(
            "amelioration-continue",
            "Amélioration continue",
            "Formations Lean Mining, SPC, maintenance, coûts et performance pour ancrer une culture d'excellence opérationnelle.",
            "/placeholders/service-card-8.svg",
          ),
          makeService(
            "traitement-mineralurgique-et-des-eaux",
            "Traitement minéralurgique et des eaux",
            "Formation en procédés minéralurgiques, performance métallurgique, traitement des effluents et gestion durable de l'eau.",
            "/placeholders/service-card-9.svg",
          ),
        ],
        faq: [
          {
            question: "Quels modules couvrez-vous en amélioration continue ?",
            answer:
              "Lean Mining, SPC, maintenance préventive, fiabilité des équipements, gestion des coûts et culture de performance, avec études de cas et ateliers pratiques.",
          },
          {
            question: "La formation traitement minéralurgique inclut-elle les eaux ?",
            answer:
              "Oui. Elle inclut traitement des effluents, recyclage de l'eau industrielle et gestion du drainage minier acide (AMD), en plus des procédés minéralurgiques.",
          },
        ],
      },
      {
        slug: "environnement",
        title: "Environnement",
        summary:
          "Politique environnementale, réhabilitation de sites, QA/QC et surveillance des eaux pour une performance durable.",
        icon: "EN",
        image: "/placeholders/category-4.svg",
        services: [
          makeService(
            "politique-environnementale",
            "Politique environnementale",
            "Diagnostic, cadre juridique, consultation, standards ESG et mécanismes de contrôle pour des politiques environnementales robustes.",
            "/placeholders/service-card-10.svg",
          ),
          makeService(
            "evaluation-et-rehabilitation-des-sites",
            "Évaluation & réhabilitation des sites",
            "Audits des passifs environnementaux, cartographie des risques et plans techniques/financiers de réhabilitation.",
            "/placeholders/service-card-11.svg",
          ),
          makeService(
            "controle-qualite-assurance-qualite",
            "Contrôle qualité / Assurance qualité",
            "Système QA/QC complet (étalonnage, standards, blancs, duplicatas, chain of custody) pour résultats défendables.",
            "/placeholders/service-card-12.svg",
          ),
          makeService(
            "surveillance-qualite-des-eaux",
            "Surveillance qualité des eaux",
            "Surveillance de la qualité des eaux en zones reculées et nouveaux forages selon les usages et exigences de conformité.",
            "/placeholders/service-card-13.svg",
          ),
          makeService(
            "effluents-miniers-et-drainage-minier-acide",
            "Effluents miniers + drainage minier acide (AMD)",
            "Analyses, diagnostic des pollutions et conception de solutions de traitement des effluents et du drainage minier acide.",
            "/placeholders/service-card-14.svg",
          ),
        ],
        faq: [
          {
            question: "Que couvre votre service de politique environnementale ?",
            answer:
              "Diagnostic sectoriel, analyse du cadre juridique, consultation des parties prenantes, standards ESG, mécanismes de contrôle, garantie environnementale et plan de mise en œuvre.",
          },
          {
            question: "Comment sécurisez-vous la qualité des analyses ?",
            answer:
              "Par un système QA/QC strict: étalonnage des instruments, échantillons blancs et duplicatas, standards certifiés, chaîne de custody documentée et audits internes.",
          },
          {
            question: "Proposez-vous des solutions contre le drainage minier acide (AMD) ?",
            answer:
              "Oui. Nous faisons le diagnostic des sources de pollution, concevons des traitements adaptés (neutralisation, précipitation, filtration, membranes) et mettons en place un monitoring continu.",
          },
        ],
      },
      {
        slug: "gouvernance-minerale",
        title: "Conseil en gouvernance des matières premières minérales",
        summary:
          "Gouvernance et développement stratégique des ressources naturelles pour transformer l'extraction en valeur locale durable.",
        icon: "GV",
        image: "/placeholders/category-5.svg",
        services: [
          makeService(
            "strategie-recettes-minieres",
            "Stratégie recettes minières",
            "Stratégies d'amélioration des recettes minières et sécurisation des flux financiers extractifs.",
            "/placeholders/service-card-15.svg",
          ),
          makeService(
            "structuration-organes-et-unites-revenus",
            "Structuration organes/instances & unités revenus",
            "Structuration institutionnelle des organes et unités en charge des ressources et revenus miniers.",
            "/placeholders/service-card-16.svg",
          ),
          makeService(
            "integration-locale-et-politique-industrielle",
            "Intégration locale & politique industrielle",
            "Conseil en intégration locale: compétitivité, CAPEX raffineries, emploi, incitations fiscales et zones industrielles.",
            "/placeholders/service-card-17.svg",
          ),
          makeService(
            "controle-production-et-reporting",
            "Contrôle production + reporting",
            "Mise en œuvre des contrôles de production et systèmes de reporting pour une supervision minière fiable.",
            "/placeholders/service-card-18.svg",
          ),
          makeService(
            "audit-flux-paiements-et-tracabilite-export",
            "Audit flux paiements + traçabilité export",
            "Audit des flux de paiements et traçabilité des volumes exportés pour réduire les pertes de revenus.",
            "/placeholders/service-card-19.svg",
          ),
          makeService(
            "renforcement-capacites-administration",
            "Renforcement capacités administration",
            "Renforcement des capacités des administrations minières: formation, outils d'évaluation et assistance technique continue.",
            "/placeholders/service-card-20.svg",
          ),
        ],
        faq: [
          {
            question: "Quels livrables en gouvernance minérale fournissez-vous ?",
            answer:
              "Stratégies d'amélioration des recettes minières, manuels de procédures, outils d'évaluation des projets, plans de contrôle production/reporting et dispositifs de traçabilité export.",
          },
          {
            question: "Intervenez-vous sur l'intégration locale et la politique industrielle ?",
            answer:
              "Oui. Nous réalisons études de compétitivité, analyses CAPEX de raffineries, plans d'incitations fiscales et structuration de zones industrielles minières.",
          },
          {
            question: "Accompagnez-vous les administrations sur la durée ?",
            answer:
              "Oui. Nos programmes incluent formation des cadres ministériels, création d'unités spécialisées revenus miniers et assistance technique continue.",
          },
        ],
      },
    ],
    ctaBand: {
      title: "Partenaire de vos projets miniers",
      subtitle:
        "Nous mobilisons les bonnes expertises pour accélérer l'impact opérationnel, institutionnel et durable.",
      primaryCta: "PARTENAIRE AVEC TERRA PRETIOSA",
      secondaryCta: "Nous écrire",
    },
    relatedTitle: "Services associés",
    faqTitle: "Questions fréquentes",
  },
  team: {
    pageTitle: "Notre equipe",
    intro:
      "Notre equipe pluridisciplinaire regroupe des profils en geologie, mineralurgie, operations minieres, environnement et gouvernance publique pour executer des missions complexes avec un haut niveau de rigueur technique.",
    note: "Photos et mini CV complets seront ajoutes prochainement.",
    cvLabel: "Telecharger mini CV",
    members: [
      {
        name: "Amina Traore",
        role: "Associee - Gouvernance miniere",
        bio: "Specialiste des politiques minieres, de la fiscalite extractive et de la structuration institutionnelle des revenus miniers.",
        image: "/placeholders/team-1.svg",
      },
      {
        name: "Moussa Diallo",
        role: "Directeur des operations",
        bio: "Expert en planification de production, disponibilite des equipements et securisation des operations sur sites miniers.",
        image: "/placeholders/team-2.svg",
      },
      {
        name: "Clara Mvemba",
        role: "Lead environnement et eau",
        bio: "Ingenieure specialisee en hydrochimie miniere, conformite ESG, rehabilitation de sites et gestion du drainage minier acide.",
        image: "/placeholders/team-3.svg",
      },
      {
        name: "Jean Kabore",
        role: "Responsable analyses et QA/QC",
        bio: "Expert en protocoles de preparation d'echantillons, validation analytique et interpretation des donnees mineralogiques.",
        image: "/placeholders/team-4.svg",
      },
      {
        name: "Fatou Ndiaye",
        role: "Consultante performance et formation",
        bio: "Concoit des parcours Lean, SPC et fiabilite pour augmenter la discipline d'execution et la productivite des equipes.",
        image: "/placeholders/team-5.svg",
      },
      {
        name: "David Okoro",
        role: "Consultant strategie et industrialisation",
        bio: "Accompagne les strategies de contenu local, l'analyse CAPEX et la structuration de chaines de valeur minerales competitives.",
        image: "/placeholders/team-6.svg",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Exposez vos enjeux techniques, operationnels ou institutionnels. Nos experts vous repondent avec un cadrage initial, des hypotheses de travail et une proposition d'intervention adaptee a votre contexte minier.",
    hqTitle: "Siege social",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    corridorTitle: "Corridor d'activite",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinee Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    phoneLabel: "Telephone",
    phoneValue: "Numero en cours de finalisation",
    emailLabel: "Email",
    emailValue: "Adresse de la compagnie en cours de creation",
    formTitle: "Contactez-nous",
    formSuccess: "Merci. Votre demande a bien ete transmise a notre equipe.",
    formFields: {
      firstName: "Prenom *",
      lastName: "Nom *",
      email: "Email *",
      phoneOptional: "Telephone (optionnel)",
      serviceLocation: "Lieu du service *",
      stateProvince: "Etat/Province",
      serviceIndustry: "Secteur de service",
      enquiryType: "Type de demande *",
      message: "Message *",
      consentText: "J'accepte la",
      privacyPolicyLabel: "Politique de confidentialite",
      submit: "SOUMETTRE",
    },
    formOptions: {
      selectPlaceholder: "-",
      serviceLocations: [
        "Burkina Faso",
        "RDC",
        "Guinee Conakry",
        "Senegal",
        "Niger",
        "Mali",
        "Etats-Unis",
      ],
      statesProvinces: [
        "Kadiogo",
        "Haut-Katanga",
        "Conakry",
        "Dakar",
        "Niamey",
        "Bamako",
        "Maryland",
      ],
      serviceIndustries: [
        "Essais & Analyses",
        "Operations minieres",
        "Formations",
        "Environnement",
        "Gouvernance minerale",
      ],
      enquiryTypes: [
        "Demande de service",
        "Question technique",
        "Partenariat",
        "Autre",
      ],
    },
    formErrors: {
      required: "Ce champ est requis.",
      email: "Adresse email invalide.",
      consent: "Vous devez accepter la politique de confidentialite.",
    },
  },
  mission: {
    pageTitle: "Lancer une mission",
    intro:
      "Partagez vos objectifs techniques, vos contraintes de site, votre calendrier et vos attentes de performance. Nous preparons une proposition structuree avec perimetre, livrables et plan de deploiement.",
    formSuccess: "Merci. Votre demande de mission a ete enregistree.",
    missionTypes: [
      "Essais & Analyses",
      "Operations minieres",
      "Formations",
      "Environnement",
      "Gouvernance minerale",
    ],
    formFields: {
      name: "Nom complet",
      email: "Email",
      organization: "Organisation",
      country: "Pays",
      missionType: "Type de mission",
      timeline: "Calendrier souhaite",
      budget: "Budget (optionnel)",
      details: "Details de la mission",
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
        groups: [
          {
            title: "Informations entreprise",
            links: [
              { label: "A propos", href: "/fr/company#about" },
              { label: "Megatendance", href: "/fr/company#megatrends" },
              { label: "Developpement durable", href: "/fr/company#sustainable" },
              { label: "Nos ambitions", href: "/fr/company#ambitions" },
              { label: "Equipe", href: "/fr/team" },
              { label: "Contact", href: "/fr/contact" },
            ],
          },
          {
            title: "Corridor d activite",
            links: [
              { label: "Pays d intervention", href: "/fr/company#corridor" },
              { label: "Lancer une mission", href: "/fr/mission" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Essais & Analyses",
            links: [
              {
                label: "Fragmentation des roches",
                href: "/fr/services/essais-analyses/fragmentation-des-roches",
              },
              {
                label: "Preparation des echantillons",
                href: "/fr/services/essais-analyses/preparation-des-echantillons",
              },
              {
                label: "Analyses mineralogiques et chimiques",
                href: "/fr/services/essais-analyses/analyses-mineralogiques-et-chimiques",
              },
              {
                label: "Tests mineralurgiques et metallurgiques",
                href: "/fr/services/essais-analyses/tests-mineralurgiques-et-metallurgiques",
              },
            ],
          },
          {
            title: "Operations minieres",
            links: [
              {
                label: "Exhaure des mines",
                href: "/fr/services/operations-minieres/exhaure-des-mines",
              },
              {
                label: "Forage minier",
                href: "/fr/services/operations-minieres/forage-minier",
              },
              {
                label: "Transport minier",
                href: "/fr/services/operations-minieres/transport-minier",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Formations",
            links: [
              {
                label: "Amelioration continue",
                href: "/fr/services/formations/amelioration-continue",
              },
              {
                label: "Traitement mineralurgique et des eaux",
                href: "/fr/services/formations/traitement-mineralurgique-et-des-eaux",
              },
            ],
          },
          {
            title: "Environnement",
            links: [
              {
                label: "Politique environnementale",
                href: "/fr/services/environnement/politique-environnementale",
              },
              {
                label: "Evaluation et rehabilitation des sites",
                href: "/fr/services/environnement/evaluation-et-rehabilitation-des-sites",
              },
              {
                label: "Controle qualite / Assurance qualite",
                href: "/fr/services/environnement/controle-qualite-assurance-qualite",
              },
              {
                label: "Surveillance qualite des eaux",
                href: "/fr/services/environnement/surveillance-qualite-des-eaux",
              },
              {
                label: "Effluents miniers + AMD",
                href: "/fr/services/environnement/effluents-miniers-et-drainage-minier-acide",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Gouvernance minerale",
            links: [
              {
                label: "Strategie recettes minieres",
                href: "/fr/services/gouvernance-minerale/strategie-recettes-minieres",
              },
              {
                label: "Structuration organes et unites revenus",
                href: "/fr/services/gouvernance-minerale/structuration-organes-et-unites-revenus",
              },
              {
                label: "Integration locale et politique industrielle",
                href: "/fr/services/gouvernance-minerale/integration-locale-et-politique-industrielle",
              },
              {
                label: "Controle production et reporting",
                href: "/fr/services/gouvernance-minerale/controle-production-et-reporting",
              },
              {
                label: "Audit flux paiements et tracabilite export",
                href: "/fr/services/gouvernance-minerale/audit-flux-paiements-et-tracabilite-export",
              },
              {
                label: "Renforcement capacites administration",
                href: "/fr/services/gouvernance-minerale/renforcement-capacites-administration",
              },
            ],
          },
          {
            title: "Acces rapide",
            links: [
              { label: "Tous les services", href: "/fr/services" },
              { label: "Nous ecrire", href: "/fr/contact" },
              { label: "Lancer une mission", href: "/fr/mission" },
            ],
          },
        ],
      },
    ],
    quickLinksTitle: "Autres liens",
    quickLinks: [
      { label: "Corridor d activite", href: "/fr/company#corridor" },
      { label: "Page entreprise", href: "/fr/company" },
      { label: "Formulaire mission", href: "/fr/mission" },
    ],
    legal: "(c) Terra Pretiosa. Tous droits reserves.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "X", href: "https://x.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
  search: {
    title: "Recherche",
    placeholder: "Rechercher un service, une page ou un insight...",
    suggestedLabel: "Suggestions",
    noResult: "Aucun résultat pour cette recherche.",
  },
};
