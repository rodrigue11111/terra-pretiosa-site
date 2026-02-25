import { fr } from "./fr";
import type { Dictionary } from "./types";


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
      "Fragmentation and comminution design to improve mineral liberation and downstream process stability.",
  },
  "preparation-des-echantillons": {
    title: "Sample Preparation",
    excerpt:
      "Standardized preparation workflows to ensure representativeness and analytical reliability.",
  },
  "analyses-mineralogiques-et-chimiques": {
    title: "Mineralogical and Chemical Analysis",
    excerpt:
      "Advanced analytical characterization to define ore variability, value minerals, and penalty elements.",
  },
  "tests-mineralurgiques-et-metallurgiques": {
    title: "Mineral Processing and Metallurgical Testing",
    excerpt:
      "Bench and pilot test programs to optimize recovery, selectivity, and process economics.",
  },
  "exhaure-des-mines": {
    title: "Mine Dewatering",
    excerpt:
      "Hydro-technical dewatering systems designed to protect production continuity and asset integrity.",
  },
  "forage-minier": {
    title: "Mining Drilling",
    excerpt:
      "Drilling support to improve precision, productivity, and safety in field operations.",
  },
  "transport-minier": {
    title: "Mining Transport",
    excerpt:
      "Operational transport management for ore, equipment, and critical consumables.",
  },
  "amelioration-continue": {
    title: "Continuous Improvement",
    excerpt:
      "Lean and SPC-based performance programs to improve execution quality and operational discipline.",
  },
  "traitement-mineralurgique-et-des-eaux": {
    title: "Mineral Processing and Water Treatment",
    excerpt:
      "Technical training on process optimization, recovery control, and industrial water stewardship.",
  },
  "politique-environnementale": {
    title: "Environmental Policy",
    excerpt:
      "Policy design aligned with legal obligations, ESG principles, and implementation controls.",
  },
  "evaluation-et-rehabilitation-des-sites": {
    title: "Site Assessment and Rehabilitation",
    excerpt:
      "Risk-based diagnostics and rehabilitation planning for legacy and active mining sites.",
  },
  "controle-qualite-assurance-qualite": {
    title: "Quality Control / Quality Assurance",
    excerpt:
      "End-to-end QA/QC frameworks and chain-of-custody governance for defensible data.",
  },
  "surveillance-qualite-des-eaux": {
    title: "Water Quality Monitoring",
    excerpt:
      "Surface and groundwater monitoring programs with compliance-focused reporting.",
  },
  "effluents-miniers-et-drainage-minier-acide": {
    title: "Mine Effluents and Acid Mine Drainage (AMD)",
    excerpt:
      "Effluent diagnosis, treatment strategy, and AMD mitigation for environmental compliance.",
  },
  "strategie-recettes-minieres": {
    title: "Mining Revenue Strategy",
    excerpt:
      "Strategic frameworks to improve revenue mobilization, transparency, and fiscal resilience.",
  },
  "structuration-organes-et-unites-revenus": {
    title: "Structuring Bodies and Revenue Units",
    excerpt:
      "Institutional structuring of public entities responsible for mining governance and revenues.",
  },
  "integration-locale-et-politique-industrielle": {
    title: "Local Integration and Industrial Policy",
    excerpt:
      "Industrial policy and local-content advisory to strengthen domestic value addition.",
  },
  "controle-production-et-reporting": {
    title: "Production Control and Reporting",
    excerpt:
      "Control architectures and reporting systems for reliable production oversight.",
  },
  "audit-flux-paiements-et-tracabilite-export": {
    title: "Payment Flow Audit and Export Traceability",
    excerpt:
      "Audit and traceability mechanisms to reduce revenue leakage in export value chains.",
  },
  "renforcement-capacites-administration": {
    title: "Public Administration Capacity Building",
    excerpt:
      "Capability-building programs for ministries and supervisory entities in the mineral sector.",
  },
};


const categoryFaqTranslations: Record<
  string,
  { question: string; answer: string }[]
> = {
  "essais-analyses": [
    {
      question: "Why is standardized sample preparation critical?",
      answer:
        "Non-standard preparation introduces analytical bias and weakens process decisions. Standardized drying, crushing, splitting, and QA/QC controls ensure representative, defensible results.",
    },
    {
      question: "What are typical deliverables for testing programs?",
      answer:
        "We provide structured technical reports, laboratory datasets, interpretation of mineralogical variability, and operational recommendations prioritized by impact.",
    },
  ],
  "operations-minieres": [
    {
      question: "How do you approach dewatering in active mines?",
      answer:
        "We combine hydrogeological assessment, pump and piping sizing, preventive maintenance planning, and operational monitoring to reduce downtime and HSE exposure.",
    },
    {
      question: "Do you support both open-pit and underground operations?",
      answer:
        "Yes. Our teams adapt drilling, dewatering, and transport support to geotechnical constraints, production targets, and safety requirements.",
    },
  ],
  formations: [
    {
      question: "Which competencies are prioritized in your training programs?",
      answer:
        "Continuous improvement, process control (SPC), equipment reliability, operational discipline, and practical leadership for field supervisors and technical teams.",
    },
    {
      question: "Do you include mineral processing and water modules?",
      answer:
        "Yes. Programs include mass balances, recovery optimization, effluent management, and practical control of water quality parameters.",
    },
  ],
  environnement: [
    {
      question: "What does your environmental policy advisory cover?",
      answer:
        "We cover baseline diagnostics, legal and permitting frameworks, ESG alignment, enforcement mechanisms, and implementation roadmaps with measurable KPIs.",
    },
    {
      question: "How do you secure analytical reliability in environmental monitoring?",
      answer:
        "Through calibrated instruments, certified standards, blanks and duplicates, documented chain-of-custody, and routine internal QA/QC audits.",
    },
  ],
  "gouvernance-minerale": [
    {
      question: "What outputs do you deliver for mining governance assignments?",
      answer:
        "Revenue mobilization strategies, production control frameworks, export traceability protocols, and implementation plans for institutional units.",
    },
    {
      question: "Do you support local industrial integration strategies?",
      answer:
        "Yes. We support local-content policies, transformation competitiveness studies, CAPEX screening, and industrial policy implementation pathways.",
    },
  ],
};

const teamMembersEn = [
  {
    name: "Amina Traore",
    role: "Partner - Mining Governance",
    bio: "Specialist in extractive fiscal policy, mining revenue architecture, and institutional reform for public sector performance.",
  },
  {
    name: "Moussa Diallo",
    role: "Director, Operations",
    bio: "Mining operations expert focused on production planning, equipment availability, and disciplined field execution.",
  },
  {
    name: "Clara Mvemba",
    role: "Lead, Environment and Water",
    bio: "Engineer specialized in mining hydrochemistry, ESG compliance, site rehabilitation, and AMD risk mitigation.",
  },
  {
    name: "Jean Kabore",
    role: "Head of Analytical QA/QC",
    bio: "Expert in sample preparation protocols, analytical data validation, and mineralogical interpretation for process decisions.",
  },
  {
    name: "Fatou Ndiaye",
    role: "Performance and Training Consultant",
    bio: "Designs Lean/SPC and reliability programs to increase execution consistency and operational productivity.",
  },
  {
    name: "David Okoro",
    role: "Strategy and Industrialization Consultant",
    bio: "Advises on local-content strategy, CAPEX screening, and mineral value-chain development for durable competitiveness.",
  },
] as const;

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
        title: "Mining engineering, metallurgy, and strategic governance",
        subtitle:
          "Terra Pretiosa supports mining projects from ore characterization to industrial performance, with strict standards for safety, compliance, and value delivery.",
        ctaLabel: "Explore services",
        ctaHref: "/en/services",
        image: "/placeholders/hero-1.svg",
      },
      {
        title: "Securing critical mineral value chains",
        subtitle:
          "Our teams combine geoscience, process engineering, operations, and governance advisory to strengthen resilient mineral supply systems in Africa.",
        ctaLabel: "See our approach",
        ctaHref: "/en/company",
        image: "/placeholders/hero-2.svg",
      },
      {
        title: "Converting extraction into local industrial value",
        subtitle:
          "We design measurable assignments for governments, institutions, and operators to improve metallurgical recovery, revenue transparency, and industrial competitiveness.",
        ctaLabel: "Launch a mission",
        ctaHref: "/en/mission",
        image: "/placeholders/hero-3.svg",
      },
    ],
    features: [
      {
        title: "End-to-end technical delivery",
        text: "Mineral testing, analytical QA/QC, dewatering, drilling, transport, environmental monitoring, and governance advisory delivered through one integrated operating model.",
        ctaLabel: "Browse categories",
        ctaHref: "/en/services",
        image: "/placeholders/feature-1.svg",
      },
      {
        title: "Execution across African mining corridors",
        text: "We operate in Burkina Faso, DRC, Guinea Conakry, Senegal, Niger, and Mali, with international coordination from Gaithersburg, Maryland.",
        ctaLabel: "View activity corridor",
        ctaHref: "/en/company#corridor",
        image: "/placeholders/feature-2.svg",
      },
      {
        title: "Industrial sovereignty and sustainable outcomes",
        text: "Our assignments align technical productivity, secured public revenues, and local value-chain development to deliver durable impact.",
        ctaLabel: "Read our ambitions",
        ctaHref: "/en/company#ambitions",
        image: "/placeholders/feature-3.svg",
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Explore our intervention lines to structure, de-risk, and accelerate mining, metallurgical, and environmental programs.",
    serviceGridTitle: "Technical capabilities",
    serviceGridIntro:
      "A focused selection of high-value services covering geology, operations, environment, and governance.",
    insights: {
      title: "Insights",
      featuredTitle:
        "Megatrend: operational excellence and critical mineral governance",
      featuredExcerpt:
        "As energy transition pressures increase, mining actors must simultaneously improve productivity, reduce environmental footprint, and strengthen traceability across financial and physical flows.",
      featuredHref: "/en/company#megatrends",
      items: [
        {
          title: "Local industrialization and skilled jobs",
          excerpt:
            "Local-content and transformation policies are key levers to capture long-term value in mining regions.",
          href: "/en/company#megatrends",
        },
        {
          title: "Water quality control and ESG performance",
          excerpt:
            "Hydrochemical monitoring of effluents and AMD has become a core performance indicator for responsible operations.",
          href: "/en/services/environnement",
        },
        {
          title: "Capability transfer and field discipline",
          excerpt:
            "Targeted training programs reduce execution variability and improve operational autonomy of local teams.",
          href: "/en/services/formations",
        },
        {
          title: "Revenue governance and export traceability",
          excerpt:
            "Production controls, payment-flow audits, and export traceability are essential to limit revenue leakage.",
          href: "/en/services/gouvernance-minerale",
        },
      ],
    },
    ctaBand: {
      title: "Ready to secure your next mining mission?",
      missionCta: "Launch a mission",
      contactCta: "Contact us",
    },
  },
  company: {
    pageTitle: "Company",
    introTitle: "About Terra Pretiosa",
    introBlocks: [
      {
        title: "Mission",
        text: "Terra Pretiosa is a consulting and execution firm specialized in mining services, metallurgical performance, and mineral resource governance.",
      },
      {
        title: "Positioning",
        text: "We operate at the interface of engineering, operations, and public policy to align industrial performance, regulatory compliance, and local value creation.",
      },
      {
        title: "Scope",
        text: "Our assignments cover ore characterization, process optimization, mine dewatering, drilling, transport logistics, environmental monitoring, and extractive revenue governance.",
      },
      {
        title: "Engineering approach",
        text: "Our method relies on reliable data, strict QA/QC protocols, periodic performance reviews, and structured capability transfer to deliver auditable outcomes.",
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
      "Rising demand for critical minerals requires higher standards in safety, traceability, energy efficiency, and metallurgical performance. Both operators and governments need stronger data governance and execution discipline to remain competitive.",
    miningDevTitle: "Mining for effective development",
    miningDevText:
      "We promote a mining model that creates long-term value through technical productivity, stronger recovery, controlled environmental risk, secured public revenues, and local industrial integration.",
    sustainableTitle: "Sustainable development",
    sustainableBullets: [
      "Auditable environmental monitoring systems",
      "Integrated management of mine residues, slurries, and discharges",
      "Progressive rehabilitation and revegetation plans",
      "HSE and QA/QC capability building for local operators",
      "Optimization of energy and industrial water use",
      "Design of dewatering and mine-water treatment systems",
      "Mobilization of human and financial capital for responsible sector growth",
    ],
    ambitionsTitle: "Our ambitions",
    ambitionsBullets: [
      "Strengthen economic sovereignty of producing countries",
      "Improve resilience of strategic mineral supply chains",
      "Accelerate sustainable industrialization in Africa",
      "Raise technical and environmental standards across operations",
      "Support geopolitical stability in critical mining corridors",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa delivers mining engineering, operational support, and mineral governance advisory with technically rigorous, auditable, decision-oriented outputs.",
    categoriesTitle: "Service categories",
    sitemapTitle: "Service sitemap",
    featuredTitle: "Featured insight",
    featuredText:
      "Technical discipline, data reliability, and governance quality are now primary competitive drivers in the mineral sector.",
    categories: fr.services.categories.map((category) => ({
      ...category,
      title: categoryTranslations[category.slug]?.title ?? category.title,
      summary: categoryTranslations[category.slug]?.summary ?? category.summary,
      services: category.services.map((service) => ({
        ...service,
        title: serviceTranslations[service.slug]?.title ?? service.title,
        excerpt: serviceTranslations[service.slug]?.excerpt ?? service.excerpt,
        paragraphs: [
          `Our ${(
            serviceTranslations[service.slug]?.title ?? service.title
          ).toLowerCase()} engagements start with baseline diagnostics to identify key geological, operational, and compliance constraints.`,
          "We then deploy an execution plan with QA/QC control points, performance indicators, and risk mitigation actions tailored to the project context.",
          "Each assignment concludes with decision-ready reporting, implementation guidance, and capability transfer to strengthen long-term client autonomy.",
        ],
        capabilities: [
          "Integrated technical due diligence and operational scoping",
          "Field execution with milestone-based performance reviews",
          "QA/QC governance and traceable data workflows",
          "HSE and ESG alignment with regulatory requirements",
          "Decision-support reporting for operational and investment choices",
          "Structured handover and capability transfer to local teams",
        ],
        highlights: [
          {
            title: "Technical baseline and risk mapping",
            text: "We consolidate geological data, operating constraints, and financial objectives to prioritize high-impact actions.",
            ctaLabel: "Talk to an expert",
            ctaHref: "/en/contact",
            image: "/placeholders/highlight-1.svg",
          },
          {
            title: "Controlled execution model",
            text: "Delivery follows clear milestones, QA/QC checkpoints, and rapid escalation paths to reduce schedule and cost drift.",
            ctaLabel: "View services",
            ctaHref: "/en/services",
            image: "/placeholders/highlight-2.svg",
          },
          {
            title: "Measured performance",
            text: "Technical, metallurgical, environmental, and economic KPIs are monitored throughout the mission to validate outcomes.",
            ctaLabel: "Launch a mission",
            ctaHref: "/en/mission",
            image: "/placeholders/highlight-3.svg",
          },
          {
            title: "Sustainable capability transfer",
            text: "We provide operating procedures, control standards, and training assets that remain actionable after project closure.",
            ctaLabel: "Contact us",
            ctaHref: "/en/contact",
            image: "/placeholders/highlight-4.svg",
          },
        ],
      })),
      faq:
        categoryFaqTranslations[category.slug] ??
        category.faq?.map((item) => ({
          question: item.question,
          answer: item.answer,
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
      "Our multidisciplinary team combines expertise in geology, mineral processing, mining operations, environmental systems, and public-sector governance.",
    note: "Photos and complete mini CVs will be added soon.",
    cvLabel: "Download mini CV",
    members: teamMembersEn.map((member, index) => ({
      ...member,
      image: fr.team.members[index]?.image ?? "/placeholders/team-1.svg",
    })),
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Share your technical, operational, or institutional challenge. Our team will respond with an initial framing note, working assumptions, and a tailored intervention pathway.",
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
    phoneValue: "Corporate line in final setup",
    emailLabel: "Email",
    emailValue: "Corporate address in setup",
    formTitle: "Contact us",
    formSuccess: "Thank you. Your request has been sent to our team.",
    formFields: {
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      phoneOptional: "Phone (optional)",
      serviceLocation: "Service Location *",
      stateProvince: "State/Province",
      serviceIndustry: "Service Industry",
      enquiryType: "Type of enquiry *",
      message: "Message *",
      consentText: "I agree to the",
      privacyPolicyLabel: "Privacy Policy",
      submit: "SUBMIT",
    },
    formOptions: {
      selectPlaceholder: "-",
      serviceLocations: [
        "Burkina Faso",
        "DRC",
        "Guinea Conakry",
        "Senegal",
        "Niger",
        "Mali",
        "United States",
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
        "Testing & Analysis",
        "Mining Operations",
        "Training",
        "Environment",
        "Mineral Governance",
      ],
      enquiryTypes: [
        "Service request",
        "Technical question",
        "Partnership",
        "Other",
      ],
    },
    formErrors: {
      required: "This field is required.",
      email: "Invalid email address.",
      consent: "You must accept the privacy policy.",
    },
  },
  mission: {
    pageTitle: "Launch a mission",
    intro:
      "Provide your technical objectives, site constraints, target timeline, and expected outcomes. We will prepare a structured proposal with scope, deliverables, and deployment plan.",
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
        groups: [
          {
            title: "Company information",
            links: [
              { label: "About", href: "/en/company#about" },
              { label: "Megatrends", href: "/en/company#megatrends" },
              { label: "Sustainable development", href: "/en/company#sustainable" },
              { label: "Ambitions", href: "/en/company#ambitions" },
              { label: "Team", href: "/en/team" },
              { label: "Contact", href: "/en/contact" },
            ],
          },
          {
            title: "Activity corridor",
            links: [
              { label: "Countries of operation", href: "/en/company#corridor" },
              { label: "Launch a mission", href: "/en/mission" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Testing & Analysis",
            links: [
              {
                label: "Rock Fragmentation",
                href: "/en/services/essais-analyses/fragmentation-des-roches",
              },
              {
                label: "Sample Preparation",
                href: "/en/services/essais-analyses/preparation-des-echantillons",
              },
              {
                label: "Mineralogical and Chemical Analysis",
                href: "/en/services/essais-analyses/analyses-mineralogiques-et-chimiques",
              },
              {
                label: "Mineralurgical and Metallurgical Testing",
                href: "/en/services/essais-analyses/tests-mineralurgiques-et-metallurgiques",
              },
            ],
          },
          {
            title: "Mining Operations",
            links: [
              {
                label: "Mine Dewatering",
                href: "/en/services/operations-minieres/exhaure-des-mines",
              },
              {
                label: "Mining Drilling",
                href: "/en/services/operations-minieres/forage-minier",
              },
              {
                label: "Mining Transport",
                href: "/en/services/operations-minieres/transport-minier",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Training",
            links: [
              {
                label: "Continuous Improvement",
                href: "/en/services/formations/amelioration-continue",
              },
              {
                label: "Mineral Processing and Water Treatment",
                href: "/en/services/formations/traitement-mineralurgique-et-des-eaux",
              },
            ],
          },
          {
            title: "Environment",
            links: [
              {
                label: "Environmental Policy",
                href: "/en/services/environnement/politique-environnementale",
              },
              {
                label: "Site Assessment and Rehabilitation",
                href: "/en/services/environnement/evaluation-et-rehabilitation-des-sites",
              },
              {
                label: "Quality Control / Quality Assurance",
                href: "/en/services/environnement/controle-qualite-assurance-qualite",
              },
              {
                label: "Water Quality Monitoring",
                href: "/en/services/environnement/surveillance-qualite-des-eaux",
              },
              {
                label: "Mine Effluents + AMD",
                href: "/en/services/environnement/effluents-miniers-et-drainage-minier-acide",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Mineral governance advisory",
            links: [
              {
                label: "Mining Revenue Strategy",
                href: "/en/services/gouvernance-minerale/strategie-recettes-minieres",
              },
              {
                label: "Structuring Bodies and Revenue Units",
                href: "/en/services/gouvernance-minerale/structuration-organes-et-unites-revenus",
              },
              {
                label: "Local Integration and Industrial Policy",
                href: "/en/services/gouvernance-minerale/integration-locale-et-politique-industrielle",
              },
              {
                label: "Production Control and Reporting",
                href: "/en/services/gouvernance-minerale/controle-production-et-reporting",
              },
              {
                label: "Payment Flow Audit and Export Traceability",
                href: "/en/services/gouvernance-minerale/audit-flux-paiements-et-tracabilite-export",
              },
              {
                label: "Public Administration Capacity Building",
                href: "/en/services/gouvernance-minerale/renforcement-capacites-administration",
              },
            ],
          },
          {
            title: "Quick access",
            links: [
              { label: "All services", href: "/en/services" },
              { label: "Contact us", href: "/en/contact" },
              { label: "Launch a mission", href: "/en/mission" },
            ],
          },
        ],
      },
    ],
    quickLinksTitle: "Other links",
    quickLinks: [
      { label: "Activity corridor", href: "/en/company#corridor" },
      { label: "Company page", href: "/en/company" },
      { label: "Mission request", href: "/en/mission" },
    ],
    legal: "(c) Terra Pretiosa. All rights reserved.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "X", href: "https://x.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
  search: {
    title: "Search",
    placeholder: "Search for a service, page, or insight...",
    suggestedLabel: "Suggestions",
    noResult: "No result for this query.",
  },
};
