import type { FaqItem } from "./types";

export const serviceFaqsBySlug: Record<string, FaqItem[]> = {
  "fragmentation-des-roches": [
    {
      "question": "Who is this service for?",
      "answer": "For exploration and operations teams who need controlled size reduction before sampling, laboratory analysis, or processing tests. It is also relevant for projects preparing representative composites from heterogeneous materials."
    },
    {
      "question": "What do you need from the client to start?",
      "answer": "Sample type and approximate mass, the downstream objective (chemical analysis, mineralogy, or metallurgical testing), target top size if known, and any constraints such as moisture, contamination risk, or safety requirements."
    },
    {
      "question": "How do you define the target particle size?",
      "answer": "We set the target size based on the next step: representativeness for splitting, suitability for specific analytical methods, or liberation needs for test work. We can validate the target using simple checks such as sieving or particle size distribution where relevant."
    },
    {
      "question": "How do you avoid over-grinding and analytical bias?",
      "answer": "We use staged reduction (coarse to fine), control residence time, limit excessive fines, and apply cleaning steps between batches. When needed, we separate high-grade materials and document key steps so results are repeatable."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive labeled outputs at the required size range, plus a brief process record describing the reduction steps, target size, and any checks performed. Where requested, we also provide a simple size distribution snapshot."
    }
  ],
  "preparation-des-echantillons": [
    {
      "question": "How do you ensure the prepared sample remains representative?",
      "answer": "We follow a controlled workflow: sample inventory and identification, drying when required, staged crushing/grinding, thorough mixing, and disciplined splitting/fractioning. The goal is to minimize bias and keep subsamples consistent with the original material."
    },
    {
      "question": "What do you need from me to begin sample preparation?",
      "answer": "We need sample IDs, material type, approximate mass, the intended analyses/tests, and the required grain size or format (coarse fraction, pulp, duplicates). Any special constraints (trace elements, contamination sensitivity) should be shared upfront."
    },
    {
      "question": "How do you prevent cross-contamination between samples?",
      "answer": "We apply cleaning protocols between batches, use appropriate containers, separate sensitive or high-grade materials when needed, and document handling steps. Extra precautions can be added for trace-level work."
    },
    {
      "question": "What output formats can you deliver?",
      "answer": "Common outputs include coarse fractions, fine pulp, split duplicates, and composite samples. The exact format depends on the downstream method and the decisions you need to make."
    },
    {
      "question": "Do you provide documentation and chain-of-custody support?",
      "answer": "Yes. We can provide an inventory log, labeling and packaging conventions, and documented handoffs so the sample path from receipt to final output remains traceable."
    }
  ],
  "analyses-mineralogiques-et-chimiques": [
    {
      "question": "How do you choose the right analytical approach?",
      "answer": "We start from the decision you need to make-resource understanding, process design, environmental risk, or compliance-then select methods that best answer it. We often combine mineralogy and chemistry to avoid incomplete interpretation."
    },
    {
      "question": "When do I need mineralogy versus chemistry?",
      "answer": "Chemistry tells you how much of each element is present; mineralogy tells you the minerals hosting those elements and how they are associated. Mineralogy is especially important for processing behavior, liberation, and environmental reactivity."
    },
    {
      "question": "What information do you need about the sample?",
      "answer": "We need sample IDs, material type, project context, and what you want to learn (e.g., host phases, gangue, deleterious elements). We may request specific preparation such as pulp, sized fractions, or prepared mounts depending on the method."
    },
    {
      "question": "How do you manage confidence and data quality?",
      "answer": "We apply QA/QC practices appropriate to the scope-standards, duplicates, blanks, and consistency checks-then interpret results with clear notes on limitations. Any assumptions are made explicit in the reporting."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive structured results (tables and summaries), key findings such as mineral associations or drivers of behavior, and recommended next steps (additional tests, process options, or monitoring priorities) based on the outcomes."
    }
  ],
  "tests-mineralurgiques-et-metallurgiques": [
    {
      "question": "What types of tests can you run?",
      "answer": "Depending on the ore and objectives, we can scope and run tests such as particle size analysis, gravity separation screening, flotation scoping, and leaching scoping. The program is tailored to commodity targets and project stage."
    },
    {
      "question": "What sample mass and preparation do you need?",
      "answer": "Requirements depend on variability, test objectives, and the number of conditions to evaluate. We define target mass, top size, and preparation steps after a short scoping discussion and review of available sample material."
    },
    {
      "question": "What performance indicators do you report?",
      "answer": "Typical KPIs include recovery, product grade, mass pull, and sensitivity to grind size or operating conditions. Where relevant, we also note practical observations that affect scale-up decisions."
    },
    {
      "question": "How do these results support project decisions?",
      "answer": "They help screen viable processing routes, identify key risks (liberation limits, reagent sensitivity, leach behavior), and prioritize next-stage testing. This reduces uncertainty before committing to larger programs or process design."
    },
    {
      "question": "What is a typical timeline?",
      "answer": "Timelines depend on sample readiness and test scope. After scoping, we provide a practical plan with sequencing (preparation -> baseline tests -> optimization loops) and expected turnaround for each stage."
    }
  ],
  "exhaure-des-mines": [
    {
      "question": "When do I need mine dewatering services?",
      "answer": "When water inflow or accumulation threatens safety, production continuity, slope stability, underground access, or equipment reliability. Dewatering is also critical during rainy seasons, commissioning, or when expanding to new benches or headings."
    },
    {
      "question": "What information do you need to size the solution?",
      "answer": "We need the site context (open pit or underground), estimated inflow rates, pumping head (depth/elevation), water quality constraints, power availability, discharge points, and any operational constraints (access, mobility, duty cycle). If flow data is unavailable, we can start with field measurements and conservative assumptions."
    },
    {
      "question": "How do you choose pumps and setup (submersible, diesel, pipelines)?",
      "answer": "We select equipment based on required flow, head, solids content, reliability needs, and site logistics. The setup is designed for robustness and maintainability, with redundancy where uptime is critical."
    },
    {
      "question": "How do you manage HSE risks during dewatering operations?",
      "answer": "We apply a site-specific risk assessment, safe work procedures, lockout/tagout where applicable, and controls for electrical, lifting, confined space, and slip hazards. We also coordinate with the mine's HSE system and reporting requirements."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "Typically: a dewatering plan (assumptions, equipment sizing, layout), operating procedures, maintenance recommendations, and optional monitoring indicators (flow, downtime, water levels). For urgent deployments, we provide a rapid action plan followed by stabilization improvements."
    }
  ],
  "forage-minier": [
    {
      "question": "What types of drilling do you provide?",
      "answer": "We support drilling for production and operational needs, including drainage drilling in open pit and underground environments. The exact scope is defined based on target depth, diameter, accuracy, and site conditions."
    },
    {
      "question": "What do you need from the client before mobilization?",
      "answer": "We need the drilling objectives, site access conditions, target depths/diameters, ground conditions (if known), HSE requirements, and any permitting or site induction constraints. A basic schedule and priorities help optimize deployment."
    },
    {
      "question": "How do you ensure technical performance and accuracy?",
      "answer": "We define operating parameters and quality checks aligned to the objective, maintain equipment readiness, and use disciplined supervision and documentation. Where required, we capture drill logs and verify key parameters during execution."
    },
    {
      "question": "How do you manage safety and operational compliance on site?",
      "answer": "We follow mine site rules, conduct pre-start checks, apply job hazard analysis, and ensure crew competency for the environment (open pit or underground). Coordination with the client's supervisors and HSE team is built into the workflow."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "Deliverables may include drill logs, execution summaries, basic performance metrics (e.g., completed meters, downtime causes), and recommendations for optimization or follow-on work. The exact deliverable pack depends on the drilling program type."
    }
  ],
  "transport-minier": [
    {
      "question": "What can you transport for mining operations?",
      "answer": "We can support transport of ore, equipment, and industrial consumables between sites, processing facilities, and logistics hubs. The exact scope depends on load type, route constraints, and safety requirements."
    },
    {
      "question": "What kind of fleet and logistics setup do you use?",
      "answer": "We deploy fleet configurations appropriate to the cargo (e.g., dump trucks, flatbeds, tankers where relevant) and coordinate dispatch with scheduling and route planning. The aim is to meet deadlines while maintaining safety and traceability."
    },
    {
      "question": "How do you ensure security and traceability?",
      "answer": "We implement basic tracking and documentation for loads, handoffs, and delivery confirmations. For higher-risk cargo, we can add stricter controls such as controlled handover points and reporting checkpoints."
    },
    {
      "question": "What regions do you cover?",
      "answer": "We prioritize operations aligned with Terra Pretiosa's corridor of activity in West Africa and select neighboring routes based on feasibility, security, and client timelines. Coverage is confirmed during scoping to match the project's logistics realities."
    },
    {
      "question": "How do you handle incidents, delays, or changes in plan?",
      "answer": "We communicate quickly, document the situation, and propose practical alternatives (rerouting, rescheduling, or load adjustments) while maintaining safety first. For critical operations, we recommend contingency planning and buffer capacity."
    }
  ],
  "amelioration-continue": [
    {
      "question": "Who is this training designed for?",
      "answer": "For mining and metallurgical professionals involved in operations, maintenance, processing, quality, and supervision. It also fits managers who need practical levers to improve productivity, reduce variability, and strengthen performance culture."
    },
    {
      "question": "What is the format and typical duration?",
      "answer": "We offer onsite or remote delivery depending on constraints. Duration ranges from short workshops (1-2 days) to multi-week programs with coaching and project-based assignments, depending on your objectives."
    },
    {
      "question": "What topics are covered?",
      "answer": "Typical modules include Lean Mining fundamentals, process mapping, waste reduction, Statistical Process Control (SPC), preventive maintenance and equipment reliability, cost drivers and operational performance, and how to sustain continuous improvement through routines and governance."
    },
    {
      "question": "Can the training be tailored to our site and KPIs?",
      "answer": "Yes. We adapt examples, exercises, and case studies to your flows, constraints, and KPIs (throughput, recovery, downtime, energy, quality). If you share baseline data, we can align the training to real improvement opportunities."
    },
    {
      "question": "What deliverables do participants receive?",
      "answer": "Participants receive training materials, practical tools/templates, and a clear action plan. For longer programs, we also deliver a shortlist of improvement projects with measurable targets and a follow-up plan."
    }
  ],
  "traitement-mineralurgique-et-des-eaux": [
    {
      "question": "Who should attend this training?",
      "answer": "It is designed for plant operators, technicians, metallurgists, and supervisors who want to improve mineral processing performance and industrial water management. It also supports teams working on environmental compliance and water reuse."
    },
    {
      "question": "Are there prerequisites?",
      "answer": "No strict prerequisites are required, but basic familiarity with plant operations helps. We can deliver a fundamentals track for newer staff and a more advanced track for experienced teams."
    },
    {
      "question": "What topics are included?",
      "answer": "Modules can cover crushing, grinding, classification, flotation, gravity separation, leaching basics, mass balances and performance control, plus water treatment and recycling principles, including effluent constraints and practical monitoring."
    },
    {
      "question": "Is the training practical and hands-on?",
      "answer": "Yes. We use real case studies, calculation exercises (mass balances, KPIs), and scenario-based problem solving. Where feasible, we align exercises to your circuit and operating constraints."
    },
    {
      "question": "What measurable outcomes should we expect?",
      "answer": "Teams typically gain improved control of key operating variables, clearer understanding of performance losses, and stronger decision-making around water reuse and treatment options. We can define site-specific success metrics during scoping."
    }
  ],
  "politique-environnementale": [
    {
      "question": "Why do we need an environmental policy and strategy before rehabilitation work?",
      "answer": "A clear policy sets standards, roles, and enforcement mechanisms so rehabilitation and compliance are consistent and defensible. It also helps align stakeholders, secure funding mechanisms, and reduce regulatory and operational uncertainty."
    },
    {
      "question": "What does your policy development scope typically include?",
      "answer": "It commonly includes a sector or site diagnosis, review of the legal and institutional framework, stakeholder consultation, definition of standards and procedures, ESG alignment with international expectations, and a practical implementation roadmap."
    },
    {
      "question": "How do you handle stakeholder consultation?",
      "answer": "We define the relevant stakeholder map (government, operators, communities, financiers, regulators), run structured interviews or workshops, and translate findings into clear requirements and trade-offs. The process is documented to support transparency."
    },
    {
      "question": "How do you address enforcement and compliance mechanisms?",
      "answer": "We propose realistic monitoring, reporting, and control mechanisms that match institutional capacity. This can include audit routines, thresholds for action, reporting templates, and recommended governance structures for oversight."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Deliverables typically include a policy document, standards/guidelines, an implementation plan with milestones, recommended institutional roles, and optional financial mechanisms such as environmental guarantees where relevant."
    }
  ],
  "evaluation-et-rehabilitation-des-sites": [
    {
      "question": "What do you assess during a site evaluation?",
      "answer": "We assess environmental, geotechnical, and operational risks linked to mining legacies, including soils, water, residues/tailings, drainage pathways, and infrastructure conditions. The goal is to map liabilities and prioritize interventions."
    },
    {
      "question": "How do you estimate rehabilitation costs?",
      "answer": "We base estimates on the identified liabilities, required remediation actions, access/logistics constraints, material volumes, and monitoring needs. Assumptions and uncertainty ranges are documented so decisions remain transparent."
    },
    {
      "question": "What does a rehabilitation plan include?",
      "answer": "A typical plan includes the technical approach (stabilization, containment, treatment, revegetation), sequencing, HSE controls, required resources, cost and schedule, and monitoring indicators to verify effectiveness over time."
    },
    {
      "question": "Do you coordinate with authorities and compliance requirements?",
      "answer": "Yes. We align the rehabilitation approach with applicable regulations and stakeholder expectations, and we can support reporting packages that facilitate review, approvals, and follow-up monitoring."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive an assessment report, risk and liability mapping, a prioritized action plan, and a rehabilitation concept with cost/schedule. Where needed, we include monitoring recommendations and documentation suitable for decision-makers."
    }
  ],
  "controle-qualite-assurance-qualite": [
    {
      "question": "What does QA/QC mean in your context?",
      "answer": "QA/QC refers to structured procedures that ensure results are reliable, traceable, and defensible. It includes preventive controls (QA) and verification checks (QC) applied to sampling, handling, analysis, and reporting."
    },
    {
      "question": "Which controls do you typically use?",
      "answer": "Common controls include instrument calibration checks, certified reference materials, blanks, duplicates, and documented procedures for sample handling and data validation. The exact control set is adapted to the project risk level."
    },
    {
      "question": "Do you support chain-of-custody and traceability?",
      "answer": "Yes. We can implement chain-of-custody documentation and controlled handoffs, including labeling conventions, logs, and integrity checks, to preserve traceability from collection to reporting."
    },
    {
      "question": "Do you perform audits or result validation?",
      "answer": "We can run internal checks and consistency reviews, and we can support audit-ready reporting by documenting methods, controls, and non-conformance handling. Any limitations are disclosed clearly."
    },
    {
      "question": "How do you handle non-conformities or questionable results?",
      "answer": "We flag anomalies, review possible causes (sampling, preparation, instrument drift, contamination), and recommend corrective actions such as re-analysis, additional controls, or revised procedures. The resolution path is documented."
    }
  ],
  "surveillance-qualite-des-eaux": [
    {
      "question": "What types of water do you monitor?",
      "answer": "We can monitor potable, surface, groundwater, industrial process water, and wastewater depending on the site context. The scope is defined based on intended use, risk, and regulatory requirements."
    },
    {
      "question": "How do you define the sampling plan?",
      "answer": "We define sampling locations, frequency, and parameters based on risk pathways, operational needs, and compliance expectations. If baseline data is limited, we start with a practical baseline campaign and refine from results."
    },
    {
      "question": "Can you operate in remote areas and new boreholes?",
      "answer": "Yes, we can plan logistics for remote sampling and coordinate handling to preserve sample integrity. We prioritize practical scheduling, safety constraints, and clear documentation of field conditions."
    },
    {
      "question": "How are results reported and interpreted?",
      "answer": "Results are delivered in structured tables with key indicators and short interpretation notes. Where thresholds apply, we highlight exceedances and recommend follow-up actions or confirmatory sampling."
    },
    {
      "question": "How often should monitoring be performed?",
      "answer": "Frequency depends on risk level, seasonality, operational changes, and regulatory needs. We typically recommend a baseline phase followed by a routine schedule that can be increased during high-risk periods."
    }
  ],
  "effluents-miniers-et-drainage-minier-acide": [
    {
      "question": "Which parameters do you typically evaluate?",
      "answer": "We focus on indicators relevant to mine effluents such as pH, conductivity, sulfates, dissolved metals, and other site-specific contaminants. The final list is based on the mine context and compliance thresholds."
    },
    {
      "question": "How do you diagnose pollution sources (AMD, tailings, ponds)?",
      "answer": "We map drainage pathways, identify likely generation zones, review operational water circuits, and correlate water chemistry with site features. The objective is to target interventions where they will be most effective."
    },
    {
      "question": "What treatment options can you propose?",
      "answer": "Options may include neutralization, chemical precipitation, filtration, and other modular approaches depending on water chemistry and volumes. We prioritize solutions that are operable in the local context and maintainable over time."
    },
    {
      "question": "Can you help optimize industrial water recycling?",
      "answer": "Yes. We can propose practical circuit improvements, retention or settling strategies, and treatment steps that improve reuse while controlling scaling, corrosion, and contamination risks."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive an assessment summary (sources, risks, constraints), recommended treatment and management options, and a monitoring plan. If required, we include implementation steps and operational checks to sustain performance."
    }
  ],
  "strategie-recettes-minieres": [
    {
      "question": "What is the goal of a mining revenue improvement strategy?",
      "answer": "To increase the state's ability to capture fair and predictable value from mining by improving rules, processes, monitoring, and negotiation capacity. The focus is on reducing leakages, strengthening reporting, and aligning incentives with long-term development."
    },
    {
      "question": "What information do you need to start?",
      "answer": "We typically need the current fiscal and regulatory framework, production and export data, contract/permit structures, institutional roles, and existing reporting processes. If data is fragmented, we start with a structured data inventory and gap analysis."
    },
    {
      "question": "How do you approach the work in practice?",
      "answer": "We combine technical understanding of mineral value chains with policy and macroeconomic analysis. The work usually includes diagnosis, benchmarking, stakeholder interviews, and a prioritized roadmap with quick wins and structural reforms."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Common deliverables include a diagnostic report, a prioritized reform roadmap, recommended KPIs and reporting templates, and proposals for institutional strengthening. Where requested, we include implementation guidance and capacity-building actions."
    },
    {
      "question": "How do you measure impact?",
      "answer": "We define measurable indicators such as improved reporting coverage, reduced reconciliation gaps, faster audit cycles, increased compliance, and better predictability of revenue flows. The exact KPIs are agreed during scoping."
    }
  ],
  "structuration-organes-et-unites-revenus": [
    {
      "question": "What does institutional structuring mean in this context?",
      "answer": "It means designing or improving the roles, workflows, and coordination mechanisms between agencies responsible for mining oversight, revenue, and compliance. The objective is to reduce overlap, close gaps, and improve execution capacity."
    },
    {
      "question": "What is typically included in the scope?",
      "answer": "We assess the current institutional landscape, propose target operating models, define responsibilities, and recommend staffing profiles and workflows. We also align procedures with reporting needs and audit readiness."
    },
    {
      "question": "Do you help create specialized mining revenue units?",
      "answer": "Yes. We can propose the mandate, structure, governance, and operating procedures for specialized units, including required skills and interfaces with other ministries and regulators."
    },
    {
      "question": "Do you produce manuals and procedures?",
      "answer": "Yes. We can draft practical procedure manuals, templates, and checklists to standardize operations, improve traceability, and support continuity even when teams change."
    },
    {
      "question": "How do you support capacity building?",
      "answer": "We provide targeted training for managers and technical staff, coaching for implementation, and tools that help teams apply the new procedures in day-to-day work. The goal is to embed capability, not just deliver documents."
    }
  ],
  "integration-locale-et-politique-industrielle": [
    {
      "question": "What is the objective of local content and industrial policy work?",
      "answer": "To move from raw export dependence toward value addition, competitive local supply chains, and job creation-while remaining realistic about costs, infrastructure, and market access. The goal is a practical pathway to industrialization."
    },
    {
      "question": "What analysis do you typically conduct?",
      "answer": "We assess competitiveness of local transformation options, CAPEX and operating requirements, supply chain constraints, and potential employment and revenue impacts. We also examine incentive structures and implementation feasibility."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Deliverables may include competitiveness studies, policy options with trade-offs, incentive design proposals, and an implementation roadmap. Where relevant, we include recommendations for industrial zones linked to mining corridors."
    },
    {
      "question": "Who do you work with during the mission?",
      "answer": "We typically coordinate with ministries, regulators, state-owned entities, financiers, and industrial partners. We align priorities through structured workshops and translate them into operational policy recommendations."
    },
    {
      "question": "How do you define success for this work?",
      "answer": "Success is a realistic plan that can be executed: clearly defined priority value chains, credible investment and infrastructure requirements, enforceable local content measures, and measurable KPIs for jobs, capability, and value addition."
    }
  ],
  "controle-production-et-reporting": [
    {
      "question": "Why are production controls and reporting systems critical?",
      "answer": "Because production and export volumes drive royalties, taxes, and macroeconomic planning. Weak controls create leakages, disputes, and unreliable planning. Strong systems improve transparency and trust."
    },
    {
      "question": "What do you typically implement or improve?",
      "answer": "We can help design reporting workflows, define required data fields, propose verification points, and recommend tools for consolidation and auditability. The approach is scaled to local capacity and available infrastructure."
    },
    {
      "question": "How do you verify reported production and exports?",
      "answer": "We propose controls such as reconciliation across sources (site, transport, port, customs), targeted audits, and traceability steps. The goal is a defensible data chain rather than reliance on a single reporting point."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Typically: a target reporting framework, templates and procedures, recommended verification controls, and an implementation roadmap. We can also define KPIs and governance routines to sustain the system."
    },
    {
      "question": "How long does implementation usually take?",
      "answer": "It depends on scope and data maturity. We usually start with a rapid diagnostic and quick-win improvements, then build toward a more complete system in phases with clear milestones."
    }
  ],
  "audit-flux-paiements-et-tracabilite-export": [
    {
      "question": "What does a payment flow audit focus on?",
      "answer": "It focuses on how money should flow versus how it actually flows-identifying gaps, timing issues, reconciliation problems, and potential leakages. It also checks whether payments align with production, pricing, and contractual terms."
    },
    {
      "question": "What data do you need to conduct the audit?",
      "answer": "We typically need payment records, declarations, production/export data, contract terms, institutional processes, and any prior audit findings. If full data access is limited, we can start with a high-level mapping and progressively deepen."
    },
    {
      "question": "How do you approach export traceability?",
      "answer": "We map the chain from mine to export point, define control points, and propose documentation and reconciliation steps. The objective is to reduce uncertainty on volumes, grades, and declared values."
    },
    {
      "question": "What outputs do you deliver?",
      "answer": "You receive a findings report with prioritized issues, recommended controls and procedure changes, and a practical action plan. Where appropriate, we provide templates for reconciliation and reporting."
    },
    {
      "question": "How do you handle confidentiality and sensitive information?",
      "answer": "We apply strict confidentiality practices, restrict access to mission data, and document assumptions without exposing sensitive details in public-facing materials. Confidential handling rules are agreed at the start of the engagement."
    }
  ],
  "renforcement-capacites-administration": [
    {
      "question": "Who is capacity building intended for?",
      "answer": "For government and regulatory staff involved in licensing, monitoring, revenue oversight, environmental compliance, and data management. It can also include cross-ministry coordination teams where responsibilities overlap."
    },
    {
      "question": "What topics can the capacity building cover?",
      "answer": "Topics may include project evaluation tools, procedures and manuals, audit readiness, reporting and reconciliation methods, governance routines, and negotiation support. The curriculum is adapted to role profiles and current maturity."
    },
    {
      "question": "What is the delivery format?",
      "answer": "We can deliver workshops, hands-on labs using real datasets (where permitted), coaching sessions, and follow-up support during implementation. Programs can be short and intensive or staged over time."
    },
    {
      "question": "What deliverables come with the training?",
      "answer": "Participants receive practical toolkits (templates, checklists, workflows) and a clear operational playbook aligned to their responsibilities. Where needed, we define standard operating procedures to ensure continuity."
    },
    {
      "question": "How do you measure success of capacity building?",
      "answer": "We use measurable outcomes such as improved reporting quality, faster review cycles, reduced reconciliation gaps, stronger audit execution, and clearer decision documentation. Metrics are agreed upfront to match the institution's goals."
    }
  ]
};
