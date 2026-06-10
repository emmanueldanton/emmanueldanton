/* Content for the portfolio. Edit freely. No em-dashes in the copy. */
window.PORTFOLIO = {
  name: "EMMANUEL DANTON",
  firstName: "EMMANUEL",
  lastName: "DANTON",
  role: "Data Analyst & BI",
  email: "defdanton41@gmail.com",
  phone: "07 53 82 56 65",
  location: "Paris, Île-de-France",
  cv: "assets/CV_Emmanuel_DANTON_Alternance.pdf",

  hero: {
    eyebrow: "Futur Ingénieur Data & IA · ECE Paris",
    badge: "Alternance 1 mois / 1 mois · sept. 2026",
    lead: "Je construis des dashboards temps réel, des pipelines de données Python/SQL et des automatisations intelligentes.\nChez CAD.42, j'ai déployé le suivi de plus de 1 200 capteurs IoT sur plus de 100 chantiers.\nFutur étudiant Ingénieur Data & IA à l'ECE Paris en alternance dès septembre 2026.",
  },

  stats: [
    { num: "03",   u: "<",  lbl: "années d'expérience" },
    { num: "02",   u: "",   lbl: "stages en entreprise" },
    { num: "1200", u: "+",  lbl: "capteurs IoT suivis en temps réel" },
  ],

  about: {
    p1: "Étudiant en <strong>BUT Science des données</strong> à l'IUT de Villetaneuse (Sorbonne Paris Nord), je rejoins l'<strong>ECE Paris en septembre 2026</strong> en cycle Ingénieur Data & IA, en alternance rythme 1 mois / 1 mois.",
    p2: "Deux stages m'ont permis de confronter la théorie au terrain : chez <strong>CAD.42</strong>, j'ai déployé un tableau de bord temps réel suivant plus de 1 200 capteurs IoT sur 100+ chantiers ; chez <strong>InspiraTec</strong>, j'ai automatisé la collecte de 50+ offres qualifiées par jour et centralisé les données dans Power BI. Dans les deux cas, l'objectif était le même : transformer des données brutes en <strong>décisions concrètes</strong>.",
    p3: "Curieux, autonome et force de proposition, je ne me contente pas d'exécuter. Je conçois des pipelines solides, j'intègre des LLM quand c'est pertinent, et je garde toujours en tête <em>à qui cela sert et pourquoi</em>. Je recherche une alternance pour <strong>septembre 2026</strong> sur un rythme 1 mois / 1 mois.",
    chips: [
      { label: "Localisation",  value: "Paris, Île-de-France" },
      { label: "Statut",        value: "Stage Data Analyst, CAD.42" },
      { label: "Disponibilité", value: "Alternance, sept. 2026" },
      { label: "Rythme",        value: "1 mois entreprise / 1 mois ECE" },
      { label: "Niveau",        value: "BUT 3 + ECE Paris (Bac+5)" },
      { label: "Anglais",       value: "Professionnel (lecture & rédaction)" },
    ],
  },

  experience: [
    {
      yr: "Mars › Juin 2026",
      logo: "assets/cad42.png",
      live: true,
      ph: "Stage 4 mois",
      role: "Data Analyst",
      co: "CAD.42 Services · Paris",
      bullets: [
        "Déploiement d'un dashboard temps réel (Python/Dash → Node.js) pour 1 200+ capteurs IoT sur 100+ chantiers",
        "Développement de scores de santé par projet pour anticiper les défaillances terrain",
        "Formation de 5 collaborateurs et accompagnement de l'adoption du LLM Claude",
      ],
      tags: ["Python", "Dash", "Node.js", "IoT", "API", "LLM Claude", "Power BI"],
      detail: {
        brief: "Stage chez CAD.42 Services, spécialisée dans le suivi IoT de chantiers. Mission : concevoir et déployer un système de monitoring temps réel pour 1 200+ capteurs répartis sur 100+ projets de construction.",
        role: "Data Analyst stagiaire — architecture de données, développement du dashboard, déploiement et formation des équipes.",
        result: "Dashboard opérationnel en production, 1 200+ capteurs suivis en temps réel, 5 collaborateurs formés, adoption du LLM Claude intégrée à la Direction des Opérations.",
        steps: [
          { n: "01", title: "Architecture temps réel", desc: "Conception du pipeline de collecte IoT via API, normalisation et stockage pour un rafraîchissement continu des données capteurs." },
          { n: "02", title: "Dashboard Python/Dash", desc: "Développement du tableau de bord interactif avec visualisation des capteurs par chantier, alertes automatiques et scores de santé." },
          { n: "03", title: "Migration Node.js", desc: "Migration du dashboard vers Node.js pour améliorer les performances temps réel et la scalabilité sur 100+ projets simultanés." },
          { n: "04", title: "Formation & adoption LLM", desc: "Formation de 5 collaborateurs à l'outil, puis accompagnement de l'adoption du LLM Claude au sein de la Direction des Opérations." },
        ],
      },
    },
    {
      yr: "Juin › Août 2025",
      logo: "assets/it.png",
      featured: true,
      ph: "Stage 2 mois",
      role: "Data Analyst & Product Management",
      co: "InspiraTec · Courbevoie",
      bullets: [
        "Développement du MVP d'une plateforme de recrutement tech avec matching prédictif automatisé via n8n",
        "Scraping automatisé de 50+ offres et profils qualifiés par jour",
        "Centralisation dans un tableau de bord Power BI pour l'aide à la décision",
      ],
      tags: ["Power BI", "n8n", "Web Scraping", "SQL", "Supabase", "API"],
      detail: {
        brief: "Stage chez InspiraTec, startup tech spécialisée dans le recrutement (Courbevoie). Mission : construire les fondations data d'une plateforme de matching prédictif entre offres et candidats tech.",
        role: "Data Analyst & Product Management — scraping, pipeline de données, dashboard et coordination produit.",
        result: "MVP fonctionnel avec 50+ offres/profils qualifiés par jour, tableau de bord Power BI déployé pour l'équipe commerciale.",
        steps: [
          { n: "01", title: "Scraping multi-sources", desc: "Développement du pipeline de scraping automatisé ciblant les principales plateformes d'emploi tech, avec extraction et qualification des profils." },
          { n: "02", title: "Pipeline n8n", desc: "Construction des workflows n8n pour automatiser le matching offres/candidats avec scoring prédictif et notifications automatiques." },
          { n: "03", title: "Base de données Supabase", desc: "Conception et déploiement du modèle relationnel Supabase pour offres, candidats et scores de matching." },
          { n: "04", title: "Dashboard Power BI", desc: "Création du tableau de bord centralisant les KPI de la plateforme pour l'aide à la décision de l'équipe commerciale." },
        ],
      },
    },
  ],

  skills: [
    {
      n: "01", t: "Langages & Analyse",
      d: "Python au quotidien (Pandas, NumPy, Scikit-learn, Matplotlib), SQL pour des requêtes propres et performantes, Node.js pour les APIs et dashboards temps réel.",
      tags: ["Python", "SQL", "Node.js", "Machine Learning", "Data Visualisation"],
    },
    {
      n: "02", t: "Business Intelligence",
      d: "Des tableaux de bord lisibles et actionnables que les équipes consultent chaque matin, de Power BI à Dash et Streamlit.",
      tags: ["Power BI", "Dash", "Streamlit", "KPI", "Data Modeling", "Excel avancé"],
    },
    {
      n: "03", t: "Data Engineering & Cloud",
      d: "Ingestion, stockage et orchestration de bout en bout : bases relationnelles et NoSQL, conteneurisation Docker, ETL et intégrations API.",
      tags: ["PostgreSQL", "MongoDB", "GCP", "Docker", "ETL", "API REST", "Supabase"],
    },
    {
      n: "04", t: "Automatisation & IA",
      d: "Automatisation de workflows via n8n, scraping à grande échelle, et intégration de LLM (Claude) pour personnaliser et accélérer les traitements.",
      tags: ["n8n", "Web Scraping", "Prompt Engineering", "Claude (LLM)", "NLP"],
    },
    {
      n: "05", t: "Product & Web Analytics",
      d: "Lecture des données d'usage pour orienter les décisions produit : analyse de funnel, conversion, campagnes publicitaires et attribution.",
      tags: ["Meta Ads", "Funnel Analytics", "Analyse de conversion", "Webhooks", "KPI"],
    },
    {
      n: "06", t: "Outils & Méthodes",
      d: "Versioning, déploiement et collaboration en équipe avec une méthodologie agile et des outils de prototypage low-code.",
      tags: ["Git", "GitHub", "Lovable", "Agile/Scrum", "Bitbucket", "Docker"],
    },
  ],

  softSkills: [
    { t: "Vision produit",        d: "Je pense chaque analyse en partant de l'utilisateur final. Qu'est-ce que cette donnée change concrètement pour lui ?" },
    { t: "Rigueur d'exécution",   d: "Pipelines propres, code documenté, résultats reproductibles. La précision technique n'est pas négociable." },
    { t: "Autonomie & initiative", d: "J'identifie les opportunités, je propose des solutions et je les exécute sans attendre qu'on me dise quoi faire." },
    { t: "Vulgarisation",         d: "Transformer des résultats complexes en insights clairs pour des profils non techniques est une compétence à part entière." },
    { t: "Travail d'équipe",      d: "Chef de projet Thales (5 membres), BUSIT Week internationale, formation de collaborateurs chez CAD.42." },
  ],

  projects: [
    {
      pn: "01",
      client: "Académique × Thales Group · mars 2025",
      title: "Acquisition automatique de brevets 6G",
      desc: "Scraping et classification automatique des brevets Thales sur la 6G, avec un dashboard interactif Streamlit. Chef de projet d'une équipe de 5 personnes.",
      tags: ["Python", "Scraping", "Streamlit", "API", "NLP"],
      slots: 1,
      url: null,
      detail: {
        brief: "Projet académique en partenariat avec Thales Group pour automatiser la veille brevets sur la technologie 6G. Objectif : réduire le temps de traitement de plusieurs jours à quelques minutes.",
        role: "Chef de projet et développeur principal d'une équipe de 5, coordinant la collecte, le traitement NLP et la livraison au client.",
        result: "Outil opérationnel livré à Thales : scraping et classification automatiques de centaines de brevets, avec un dashboard Streamlit interactif pour la visualisation des tendances.",
        steps: [
          { n: "01", title: "Cadrage du besoin", desc: "Analyse des besoins Thales, définition du périmètre data, identification des sources de brevets (USPTO, EPO) et mise en place de la roadmap en équipe." },
          { n: "02", title: "Collecte automatisée", desc: "Développement de scripts Python de scraping ciblant les bases de brevets publiques, avec gestion des doublons et normalisation des métadonnées." },
          { n: "03", title: "Classification NLP", desc: "Entraînement d'un modèle de classification sur les abstracts de brevets pour catégoriser automatiquement les technologies 6G : RAN, Core Network, spectre, etc." },
          { n: "04", title: "Dashboard Streamlit", desc: "Conception d'un tableau de bord interactif pour visualiser les volumes de brevets par catégorie, déposant et période, avec filtres dynamiques." },
        ],
      },
    },
    {
      pn: "02",
      client: "Projet personnel · 2026",
      title: "MyFinanx, gestion financière",
      desc: "Application web de suivi budgétaire à dashboards interactifs et analyses automatisées, sur une architecture complète Python, SQL et API REST.",
      tags: ["Python", "SQL", "API REST", "Dash", "Dataviz"],
      slots: 1,
      url: null,
      detail: {
        brief: "Application web personnelle de gestion budgétaire conçue pour visualiser et analyser ses finances en temps réel, avec détection automatique des anomalies de dépenses.",
        role: "Développeur full-stack solo, de la conception de l'architecture de données jusqu'au déploiement de l'interface.",
        result: "Application fonctionnelle avec dashboards Dash interactifs, une base PostgreSQL et des endpoints API REST pour l'import automatisé des données bancaires.",
        steps: [
          { n: "01", title: "Architecture de données", desc: "Conception du modèle relationnel PostgreSQL pour les transactions, catégories et budgets prévisionnels, avec migration automatique au démarrage." },
          { n: "02", title: "Pipeline d'ingestion", desc: "Développement d'un pipeline Python d'import et de normalisation des exports CSV bancaires, avec catégorisation automatique des transactions par règles NLP." },
          { n: "03", title: "API REST", desc: "Création d'une API REST en Python exposant les endpoints CRUD pour les transactions et les budgets, avec validation des données entrantes." },
          { n: "04", title: "Dashboard interactif", desc: "Construction des visualisations Dash : courbe de trésorerie, breakdown par catégorie, comparatif budget/réel et alertes automatiques de dépassement." },
        ],
      },
    },
    {
      pn: "03",
      client: "Projet IA · en cours",
      title: "namiCV, génération de CV par IA",
      desc: "Système de scraping d'offres d'emploi couplé à une analyse NLP des annonces pour la génération automatique de CV et lettres de motivation adaptés à chaque poste.",
      tags: ["Python", "NLP", "Web Scraping", "Prompt Engineering", "React"],
      slots: 1,
      url: null,
      detail: {
        brief: "Système IA de personnalisation automatique de candidatures : scraping d'offres, analyse sémantique des annonces, génération de CV et lettres de motivation sur-mesure via LLM.",
        role: "Développeur solo, conception du pipeline de bout en bout : collecte multi-sources, analyse NLP, intégration LLM et interface web React.",
        result: "Prototype fonctionnel capable d'analyser une offre, d'extraire les compétences clés et de générer un CV et une lettre adaptés en moins de 30 secondes.",
        steps: [
          { n: "01", title: "Scraping multi-sources", desc: "Développement d'un scraper ciblant LinkedIn, Welcome to the Jungle et Indeed, avec extraction structurée des compétences, de la stack tech et des soft skills." },
          { n: "02", title: "Analyse NLP", desc: "Traitement des annonces par NLP pour scorer les compétences demandées, détecter le niveau d'expérience attendu et extraire les mots-clés discriminants." },
          { n: "03", title: "Génération LLM", desc: "Intégration via Prompt Engineering pour générer un CV et une lettre de motivation cohérents avec le profil utilisateur et les exigences de l'offre détectées." },
          { n: "04", title: "Interface React", desc: "Développement de l'interface utilisateur en React : upload du profil, visualisation de l'analyse d'offre et export PDF du CV généré." },
        ],
      },
    },
    {
      pn: "04",
      client: "Projet personnel · depuis fév. 2026",
      title: "Hupple Store, data e-commerce",
      desc: "Architecture de données automatisant les flux de commandes via webhooks et n8n, avec suivi des KPI : tunnel de conversion porté à 4 % sur près de 5 500 visites, 225 ventes et 204 clients.",
      tags: ["n8n", "Webhooks", "KPI", "E-commerce", "Funnel Analytics"],
      slots: 3,
      url: null,
      detail: {
        brief: "Architecture data pour un store e-commerce : automatisation complète des flux de commandes, suivi des KPI en temps réel et optimisation du tunnel de conversion.",
        role: "Data Engineer et analyste solo, conception de l'infrastructure webhooks, des automatisations n8n et des dashboards de pilotage.",
        result: "Tunnel de conversion porté de 1,2 % à 4 % sur 5 500 visites, avec 225 ventes et 204 clients, grâce à un suivi KPI précis et des relances panier automatisées.",
        steps: [
          { n: "01", title: "Infrastructure webhooks", desc: "Mise en place des webhooks pour capturer chaque événement (visite, ajout panier, commande, paiement) et les router vers n8n en temps réel." },
          { n: "02", title: "Automatisations n8n", desc: "Construction de workflows n8n : emails de relance panier abandonné, notifications commande, mise à jour stock et synchronisation base de données." },
          { n: "03", title: "Modèle de données KPI", desc: "Conception du modèle analytique : définition du tunnel de conversion, calcul des taux par étape, revenus par segment et cohortes clients." },
          { n: "04", title: "Dashboard de pilotage", desc: "Développement du tableau de bord de suivi quotidien : courbe de conversion, revenus par produit et alertes automatiques sur les anomalies." },
        ],
      },
    },
    {
      pn: "05",
      client: "International · avril 2025, Belgique",
      title: "Football analytics, OHL",
      desc: "Analyse des données du club OHL en équipe internationale lors de la BUSIT Week UC Leuven-Limburg, avec des insights stratégiques présentés devant un panel d'experts du club.",
      tags: ["Python", "Pandas", "Seaborn", "SQL", "Anglais"],
      slots: 1,
      url: null,
      detail: {
        brief: "Analyse des données de performance du club OHL (Belgique) dans le cadre de la BUSIT Week UC Leuven-Limburg, en équipe internationale de 5 personnes.",
        role: "Data Analyst au sein d'une équipe internationale, responsable de la modélisation des métriques et de la visualisation des insights stratégiques.",
        result: "Présentation de recommandations concrètes devant un panel d'experts du club OHL, sur la base d'une analyse complète d'une saison de données matchs et performances individuelles.",
        steps: [
          { n: "01", title: "Exploration des données", desc: "Analyse exploratoire du dataset fourni par OHL : statistiques individuelles, données de match, métriques physiques et tactiques sur une saison complète." },
          { n: "02", title: "Modélisation statistique", desc: "Construction de métriques composites pour évaluer l'impact des joueurs : expected goals, pressing intensity, passing networks et contribution défensive." },
          { n: "03", title: "Visualisation", desc: "Production de visualisations statiques (Seaborn, Matplotlib) et interactives pour communiquer les findings à un public non technique." },
          { n: "04", title: "Restitution client", desc: "Présentation des insights en anglais devant le panel OHL, avec recommandations sur le recrutement, les schémas tactiques et la gestion de la charge physique." },
        ],
      },
    },
  ],

  testimonial: {
    q: "Il possède cette rare double compétence : une vision Product Manager centrée sur l'utilisateur et une rigueur de Data Engineer pour l'exécution technique. Autonome, analytique et force de proposition, il a su transformer nos données en leviers stratégiques concrets. Je le recommande vivement.",
    nm: "Massiva Atmani",
    rl: "Head of Business · InspiraTec",
    meta: "Responsable directe · Stage juin à août 2025",
    photo: "assets/massiva.png",
    li: "https://www.linkedin.com/in/massivaatmani/",
  },

  education: [
    { yr: "2026 › 2029", deg: "Cycle Ingénieur Data & IA", sch: "École Centrale d'Électronique (ECE) · Paris", country: "France", logo: "assets/ece.png" },
    { yr: "2023 › 2026", deg: "BUT Science des données", sch: "IUT de Villetaneuse · Université Sorbonne Paris Nord", country: "France", logo: "assets/iut.png" },
    { yr: "2021 › 2024", deg: "Licence, Sécurité & Réseau informatique", sch: "Les Cours Sonou · Bénin", country: "Bénin", logo: "assets/lcs.png" },
  ],

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanueldanton" },
    { label: "GitHub",   href: "https://github.com/emmanueldanton" },
    { label: "Email",    href: "mailto:defdanton41@gmail.com" },
  ],
};
