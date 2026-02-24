import { fr } from "./fr";
import type { Dictionary } from "./types";

const todo = "(TODO: review EN wording)";

const categoryTranslations: Record<string, { title: string; summary: string }> =
  {
    "essais-analyses": {
      title: "Testing & Analysis",
      summary:
        "Material characterization, sample integrity, and analytical reliability for robust technical decisions.",
    },
    "operations-minieres": {
      title: "Mining Operations",
      summary:
        "Operational execution and technical support to strengthen availability, safety, and productivity.",
    },
    formations: {
      title: "Training",
      summary:
        "Capability-building programs focused on continuous improvement, processing, and quality outcomes.",
    },
    environnement: {
      title: "Environment",
      summary:
        "Environmental compliance, quality monitoring, and rehabilitation for long-term mining performance.",
    },
    "gouvernance-minerale": {
      title: "Mineral Resources Governance Advisory",
      summary:
        "Strategic advisory to structure revenue, control systems, and traceability across the mineral sector.",
    },
  };

const serviceTranslations: Record<string, { title: string; excerpt: string }> = {
  "fragmentation-des-roches": {
    title: "Rock Fragmentation",
    excerpt:
      "Optimization of fragmentation parameters to improve mineral liberation and downstream performance.",
  },
  "preparation-des-echantillons": {
    title: "Sample Preparation",
    excerpt:
      "Standardized preparation chain to ensure representativeness and reduce analytical bias.",
  },
  "analyses-mineralogiques-et-chimiques": {
    title: "Mineralogical and Chemical Analysis",
    excerpt:
      "Targeted analysis to determine composition, variability, and value/penalty elements.",
  },
  "tests-mineralurgiques-et-metallurgiques": {
    title: "Mineralurgical and Metallurgical Testing",
    excerpt:
      "Test programs to optimize recovery, yield, and process selectivity.",
  },
  "exhaure-des-mines": {
    title: "Mine Dewatering",
    excerpt:
      "Sizing and supervision of dewatering solutions to protect continuity of operations.",
  },
  "forage-minier": {
    title: "Mining Drilling",
    excerpt:
      "Technical and organizational support to improve drilling precision, pace, and safety.",
  },
  "transport-minier": {
    title: "Mining Transport",
    excerpt:
      "Optimization of transport flows, from fleet planning to field logistics performance.",
  },
  "amelioration-continue": {
    title: "Continuous Improvement",
    excerpt:
      "Lean, SPC, maintenance, and performance training to build a measurable improvement culture.",
  },
  "traitement-mineralurgique-et-des-eaux": {
    title: "Mineral Processing and Water Treatment",
    excerpt:
      "Technical training on mineral processing and water quality management.",
  },
  "politique-environnementale": {
    title: "Environmental Policy",
    excerpt:
      "Diagnosis, legal framework, ESG alignment, and implementation of fit-for-purpose policies.",
  },
  "evaluation-et-rehabilitation-des-sites": {
    title: "Site Assessment and Rehabilitation",
    excerpt:
      "Risk-based assessment and phased rehabilitation planning for mining sites.",
  },
  "controle-qualite-assurance-qualite": {
    title: "Quality Control / Quality Assurance",
    excerpt:
      "QA/QC and chain-of-custody systems to improve data and flow reliability.",
  },
  "surveillance-qualite-des-eaux": {
    title: "Water Quality Monitoring",
    excerpt:
      "Monitoring programs for surface and groundwater quality with compliance reporting.",
  },
  "effluents-miniers-et-drainage-minier-acide": {
    title: "Mine Effluents and Acid Mine Drainage (AMD)",
    excerpt:
      "Assessment and treatment of mining effluents, plus AMD prevention and mitigation.",
  },
  "strategie-recettes-minieres": {
    title: "Mining Revenue Strategy",
    excerpt:
      "Design of strategies to mobilize, secure, and forecast mining revenues.",
  },
  "structuration-organes-et-unites-revenus": {
    title: "Structuring Bodies and Revenue Units",
    excerpt:
      "Institutional structuring for governance and revenue-focused mining functions.",
  },
  "integration-locale-et-politique-industrielle": {
    title: "Local Integration and Industrial Policy",
    excerpt:
      "Local-content mechanisms to strengthen transformation and national value addition.",
  },
  "controle-production-et-reporting": {
    title: "Production Control and Reporting",
    excerpt:
      "Control and reporting frameworks for reliable production oversight.",
  },
  "audit-flux-paiements-et-tracabilite-export": {
    title: "Payment Flow Audit and Export Traceability",
    excerpt:
      "Audit of financial flows and export volumes to reduce revenue leakage.",
  },
  "renforcement-capacites-administration": {
    title: "Public Administration Capacity Building",
    excerpt:
      "Capacity-building programs for mining administrations and supervisory units.",
  },
};

export const en: Dictionary = {
  lang: "en",
  siteName: "Terra Pretiosa",
  logoLabel: "Terra Pretiosa",
  nav: {
    services: "Services",
    company: "Company",
    team: "Team",
    contact: "Contact",
    search: "Search",
    login: "Login",
    mission: "Launch a mission",
    companyMenu: "Company",
    companyLinks: {
      about: "About",
      megatrends: "Megatrends",
      sustainable: "Sustainable development",
      ambitions: "Ambitions",
      contact: "Contact",
    },
  },
  common: {
    partnerCta: "PARTNER WITH TERRA PRETIOSA",
    contactUs: "Contact us",
    learnMore: "Learn more",
    readMore: "Read more",
    takeNextStep: "Take the next step",
    breadcrumbs: {
      home: "Home",
      services: "Services",
    },
  },
  home: {
    hero: [
      {
        title: "Mineral governance and field performance",
        subtitle:
          "Strategic firm specializing in mining services and mineral resource governance for sustainable industrialization in Africa.",
        ctaLabel: "Explore services",
        ctaHref: "/en/services",
        image: "/placeholders/hero-1.svg",
      },
      {
        title: "Supply chain resilience for critical minerals",
        subtitle:
          "We strengthen reliability, compliance, and transparency from mine operations to export.",
        ctaLabel: "See our approach",
        ctaHref: "/en/company",
        image: "/placeholders/hero-2.svg",
      },
      {
        title: "Responsible mining operations",
        subtitle:
          "Our teams integrate technical, ESG, and performance requirements for measurable outcomes.",
        ctaLabel: "Launch a mission",
        ctaHref: "/en/mission",
        image: "/placeholders/hero-3.svg",
      },
    ],
    features: [
      {
        title: "Integrated multidisciplinary expertise",
        text: "Testing, analysis, mining operations, environment, and governance combined in one delivery model.",
        ctaLabel: "Browse categories",
        ctaHref: "/en/services",
        image: "/placeholders/feature-1.svg",
      },
      {
        title: "African footprint, international standards",
        text: "We operate across multiple mining jurisdictions with strong quality, compliance, and capacity-transfer discipline.",
        ctaLabel: "View activity corridor",
        ctaHref: "/en/company#corridor",
        image: "/placeholders/feature-2.svg",
      },
      {
        title: "Sustainable impact and value creation",
        text: "Our missions align industrial performance, mining revenues, and local economic development.",
        ctaLabel: "Read our ambitions",
        ctaHref: "/en/company#ambitions",
        image: "/placeholders/feature-3.svg",
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Explore our intervention areas to structure and accelerate mining programs.",
    serviceGridTitle: "Core expertise",
    serviceGridIntro:
      "A selection of high-value services for demanding mining missions.",
    insights: {
      title: "Insights",
      featuredTitle: "Megatrends: agile mineral governance",
      featuredExcerpt:
        "Global energy transition raises pressure on critical minerals. Governments and operators must strengthen governance, traceability, and local integration.",
      featuredHref: "/en/company#megatrends",
      items: [
        {
          title: "Local industrialization and shared value",
          excerpt:
            "Local integration turns mineral resources into long-term industrial growth.",
          href: "/en/company#ambitions",
        },
        {
          title: "Water quality and ESG compliance",
          excerpt:
            "Effluent and water monitoring are now key drivers of sustainable performance.",
          href: "/en/services/environnement",
        },
        {
          title: "Public capacity reinforcement",
          excerpt:
            "Mining administrations need robust tools for revenue governance and traceability.",
          href: "/en/services/gouvernance-minerale",
        },
      ],
    },
    ctaBand: {
      title: "Ready to structure your next mission?",
      missionCta: "Launch a mission",
      contactCta: "Contact us",
    },
  },
  company: {
    pageTitle: "Company",
    introTitle: "About Terra Pretiosa",
    introBlocks: [
      {
        title: "Positioning",
        text: "Terra Pretiosa is a strategic firm focused on mining services and mineral resource governance.",
      },
      {
        title: "Vision",
        text: "We support resilient mineral supply chains and sustainable industrialization across Africa.",
      },
      {
        title: "Method",
        text: "Our interventions combine technical expertise, field execution, institutional support, and compliance standards.",
      },
    ],
    corridorTitle: "Activity corridor",
    corridorCountries: [
      "Burkina Faso",
      "DRC",
      "Guinea Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    hqTitle: "Headquarters",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    megatrendsTitle: "Megatrends",
    megatrendsText:
      "Rising demand for critical mineral resources is reshaping governance, transparency, and operational standards. Terra Pretiosa helps public and private actors anticipate change and secure long-term value.",
    miningDevTitle: "Mining for effective development",
    miningDevText:
      "We promote results-driven mining: stronger productivity, secured public revenues, local industrialization, and global competitiveness.",
    sustainableTitle: "Sustainable development",
    sustainableBullets: [
      "Integrating ESG requirements into mine plans",
      "Reducing environmental impacts and monitoring water quality",
      "Risk-based site rehabilitation approaches",
      "Transparent governance of flows and chain of custody",
    ],
    ambitionsTitle: "Our ambitions",
    ambitionsBullets: [
      "Accelerate robust, measurable mineral governance",
      "Strengthen resilience across mineral supply chains",
      "Contribute to sustainable industrialization in Africa",
      "Support capability growth for local teams",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa provides technical, operational, and governance expertise for mineral-sector challenges.",
    categoriesTitle: "Service categories",
    sitemapTitle: "Service sitemap",
    featuredTitle: "Featured insight",
    featuredText:
      "Operational discipline and mining data governance have become major competitive advantages.",
    categories: fr.services.categories.map((category) => ({
      ...category,
      title: categoryTranslations[category.slug]?.title ?? `${category.title} ${todo}`,
      summary:
        categoryTranslations[category.slug]?.summary ??
        `${category.summary} ${todo}`,
      services: category.services.map((service) => ({
        ...service,
        title: serviceTranslations[service.slug]?.title ?? `${service.title} ${todo}`,
        excerpt:
          serviceTranslations[service.slug]?.excerpt ??
          `${service.excerpt} ${todo}`,
        paragraphs: [
          `Terra Pretiosa designs and delivers ${(
            serviceTranslations[service.slug]?.title ?? service.title
          ).toLowerCase()} services tailored to technical, human, and regulatory constraints. ${todo}`,
          `Our delivery model combines field expertise, quality assurance, and capability transfer to secure durable outcomes. ${todo}`,
        ],
        capabilities: [
          "Initial diagnosis and operational framing",
          "Field deployment with performance indicators",
          "Documented traceability and clear reporting",
          "Capacity transfer to local teams",
        ],
        highlights: service.highlights.map((highlight) => ({
          ...highlight,
          title: `${highlight.title} ${todo}`,
          text: `${highlight.text} ${todo}`,
          ctaLabel: "Talk to an expert",
          ctaHref: highlight.ctaHref.replace("/fr/", "/en/"),
        })),
      })),
      faq: category.faq?.map((item) => ({
        question: `${item.question} ${todo}`,
        answer: `${item.answer} ${todo}`,
      })),
    })),
    ctaBand: {
      title: "Partner for your mining projects",
      subtitle:
        "We mobilize the right capabilities to accelerate operational, institutional, and sustainable impact.",
      primaryCta: "PARTNER WITH TERRA PRETIOSA",
      secondaryCta: "Contact us",
    },
    relatedTitle: "Related services",
    faqTitle: "Frequently asked questions",
  },
  team: {
    pageTitle: "Our team",
    intro:
      "A multidisciplinary team supporting mining operations, environment, and mineral governance.",
    note: "Photos and mini CVs will be added.",
    cvLabel: "Download mini CV",
    members: fr.team.members.map((member) => ({
      ...member,
      role: `${member.role} ${todo}`,
      bio: `${member.bio} ${todo}`,
    })),
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Let us discuss your technical, environmental, and mineral governance priorities.",
    hqTitle: "Headquarters",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    corridorTitle: "Activity corridor",
    corridorCountries: [
      "Burkina Faso",
      "DRC",
      "Guinea Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    phoneLabel: "Phone",
    phoneValue: "To be defined",
    emailLabel: "Email",
    emailValue: "To be created",
    formTitle: "Send us a message",
    formSuccess: "Thank you, your message has been sent.",
    formFields: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Submit",
    },
    formErrors: {
      required: "This field is required.",
      email: "Invalid email address.",
    },
  },
  mission: {
    pageTitle: "Launch a mission",
    intro:
      "Share your mission objectives and constraints. Our team will respond with a tailored plan.",
    formSuccess: "Thank you. Your mission request has been registered.",
    missionTypes: [
      "Testing & Analysis",
      "Mining Operations",
      "Training",
      "Environment",
      "Mineral Governance",
    ],
    formFields: {
      name: "Full name",
      email: "Email",
      organization: "Organization",
      country: "Country",
      missionType: "Mission type",
      timeline: "Preferred timeline",
      budget: "Budget (optional)",
      details: "Mission details",
      submit: "Submit request",
    },
    formErrors: {
      required: "This field is required.",
      email: "Invalid email address.",
    },
  },
  footer: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/en/company#about" },
          { label: "Megatrends", href: "/en/company#megatrends" },
          { label: "Sustainable development", href: "/en/company#sustainable" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Testing & Analysis", href: "/en/services/essais-analyses" },
          { label: "Mining operations", href: "/en/services/operations-minieres" },
          {
            label: "Mineral governance",
            href: "/en/services/gouvernance-minerale",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Contact us", href: "/en/contact" },
          { label: "Launch a mission", href: "/en/mission" },
        ],
      },
    ],
    legal: "© Terra Pretiosa. All rights reserved.",
    socials: ["LinkedIn", "X", "YouTube"],
  },
  search: {
    title: "Search",
    placeholder: "Search for a service, page, or insight...",
    suggestedLabel: "Suggestions",
    noResult: "No result for this query.",
  },
};
