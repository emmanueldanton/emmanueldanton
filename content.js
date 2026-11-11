/* Content for the portfolio. Edit freely. No em-dashes in the copy. */
window.PORTFOLIO = {
  name: "EMMANUEL DANTON",
  firstName: "EMMANUEL",
  lastName: "DANTON",
  role: "Ingénieur Data & IA",
  email: "defdanton41@gmail.com",
  location: "Paris, Île-de-France",
  cv: "assets/CV_Emmanuel_DANTON.pdf",

  hero: {
    mission: "J'allie IA, automatisation et design pour aider les équipes à avancer plus vite.",
    lead: "Chef de projet junior chez Ipsos BVA, dans l'équipe Expérience Client & Plateformes, et étudiant en cycle ingénieur Data & IA à l'ECE Paris. Ce que j'aime, c'est trouver une solution simple à un problème.",
    photoAlt: "Portrait d'Emmanuel Danton",
    tags: {
      poste: { v: "Chef de projet junior", k: "Ipsos BVA · expérience client" },
      capteurs: "1 200+ capteurs IoT suivis",
      ventes: { v: "361", k: "ventes · Hupple Store" },
    },
  },

  marquee: ["Analyse de données", "Data visualisation", "Design graphique", "Suite Adobe", "Automatisation", "Intelligence artificielle", "Gestion de projet", "Expérience client", "Tableaux de bord", "Création de contenu", "Data storytelling", "UI design"],

  stats: [
    { num: "03",   u: "",   lbl: "expériences en entreprise" },
    { num: "361",  u: "",   lbl: "ventes sur ma boutique Hupple Store" },
    { num: "1200", u: "+",  lbl: "capteurs IoT suivis en temps réel" },
  ],

  about: {
    quote: "Mon fil conducteur : comprendre un besoin, analyser les données et <strong>passer à l'action</strong>.",
    p1: "Je suis étudiant en cycle ingénieur Data & IA à l'<strong>ECE Paris</strong> et alternant chef de projet junior chez <strong>Ipsos BVA</strong>, au sein de l'équipe <strong>Expérience Client & Plateformes</strong>.",
    p2: "Mon parcours m'a permis de travailler sur des sujets très différents. Chez <strong>CAD.42</strong>, j'ai travaillé sur l'analyse et la visualisation de données pour répondre à des problématiques opérationnelles, avec un tableau de bord qui suit plus de 1 200 capteurs IoT sur une centaine de chantiers. Je développe également <strong>Hupple Store</strong>, une boutique e-commerce destinée à l'Afrique francophone, où je gère l'acquisition, les campagnes publicitaires, l'analyse des performances, la stratégie produit et le copywriting. C'est <strong>mon terrain de jeu</strong> : cela me permet de tester, mesurer et ajuster mes décisions à partir de données réelles, sur 361 ventes à ce jour.",
    p3: "Aujourd'hui, chez Ipsos BVA, je développe davantage mes compétences en gestion de projet, en coordination et en compréhension des besoins clients. Originaire de Cotonou, au Bénin, j'ai aussi travaillé en équipe internationale en Belgique et en Espagne. À terme, je souhaite réunir ces expériences pour travailler sur des projets <em>à l'intersection de la Data, de l'IA et du business</em>.",
    chips: [
      { label: "Localisation",  value: "Paris, Île-de-France" },
      { label: "Poste",         value: "Chef de projet junior chez Ipsos BVA" },
      { label: "Équipe",        value: "Expérience Client & Plateformes" },
      { label: "Niveau",        value: "Cycle ingénieur ECE Paris (Bac+5)" },
      { label: "Anglais",       value: "Professionnel (lecture & rédaction)" },
    ],
  },

  experience: [
    {
      yr: "Depuis sept. 2026",
      live: true,
      logo: "assets/ipsos.svg",
      ph: "Alternance",
      role: "Chef de projet junior Plateformes IT",
      co: "Ipsos BVA · Paris",
      bullets: [
        "Je fais tourner, avec l'équipe, les programmes d'expérience client de nos clients sur Medallia",
        "J'utilise Medallia au quotidien et j'en approfondis les fonctions avancées",
        "Je documente les processus pour repérer ce qui peut être automatisé",
      ],
      tags: ["Medallia", "Expérience client", "Gestion de projet", "Documentation", "Automatisation"],
      detail: {
        brief: "Je suis alternant chez Ipsos BVA, au sein de l'équipe Expérience Client & Plateformes. L'équipe fait tourner sur Medallia les programmes d'expérience client des clients d'Ipsos.",
        role: "Chef de projet junior Plateformes IT. Je coordonne avec l'équipe les programmes clients, je comprends les besoins et je cherche ce qui peut être simplifié ou automatisé.",
        result: "La mission est en cours. J'utilise Medallia au quotidien et je cherche où l'automatisation peut faire gagner du temps à l'équipe.",
        steps: [
          { n: "01", title: "Comprendre les programmes", desc: "Je découvre les programmes d'expérience client et la façon dont l'équipe les fait vivre au quotidien." },
          { n: "02", title: "Travailler sur Medallia", desc: "J'utilise la plateforme au quotidien et j'en approfondis les fonctions avancées au fil des projets." },
          { n: "03", title: "Documenter, puis automatiser", desc: "Je documente les processus de l'équipe pour repérer les tâches qui se répètent et proposer des automatisations simples." },
        ],
        facts: [
          { v: "CX", k: "Équipe Expérience Client & Plateformes" },
          { v: "Medallia", k: "la plateforme que j'utilise au quotidien" },
          { v: "2026", k: "En poste depuis septembre" },
        ],
      },
    },
    {
      yr: "Mars › Juin 2026",
      logo: "assets/cad42.png",
      ph: "Stage 4 mois",
      role: "Data Analyst",
      co: "CAD.42 Services · Rueil-Malmaison",
      bullets: [
        "J'ai déployé un tableau de bord temps réel pour 1 200+ capteurs IoT sur 100+ chantiers",
        "J'ai créé des scores de santé par projet pour anticiper les pannes sur le terrain",
        "J'ai formé 5 collaborateurs et accompagné l'adoption de Claude",
      ],
      tags: ["Python", "Dash", "Node.js", "IoT", "API", "LLM Claude", "Power BI"],
      detail: {
        brief: "CAD.42 suit des chantiers de construction grâce à des capteurs connectés. Il manquait un outil pour voir, en direct, l'état de plus de 1 200 capteurs répartis sur plus de 100 chantiers.",
        role: "Data Analyst en stage. J'ai pensé l'organisation des données, développé le tableau de bord, puis je l'ai mis en service et j'ai formé les équipes.",
        result: "Le tableau de bord tourne en production. Cinq collaborateurs l'utilisent après formation, et la Direction des Opérations a adopté Claude dans son travail.",
        steps: [
          { n: "01", title: "Faire remonter les données", desc: "J'ai construit la collecte des données des capteurs par API, puis leur nettoyage et leur stockage, pour que l'écran se mette à jour en continu." },
          { n: "02", title: "Le tableau de bord en Python", desc: "J'ai développé avec Dash un tableau de bord qui montre les capteurs chantier par chantier, avec des alertes automatiques et un score de santé par projet." },
          { n: "03", title: "Le passage à Node.js", desc: "J'ai migré l'outil vers Node.js pour qu'il reste rapide en temps réel sur plus de 100 chantiers à la fois." },
          { n: "04", title: "Former et accompagner", desc: "J'ai formé cinq collaborateurs à l'outil, puis j'ai accompagné la Direction des Opérations dans l'adoption de Claude." },
        ],
        facts: [
          { v: "1 200+", k: "capteurs suivis en direct" },
          { v: "100+", k: "chantiers couverts" },
          { v: "5", k: "collaborateurs formés" },
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
        "J'ai développé le MVP d'une plateforme de recrutement tech, avec un matching automatisé sous n8n",
        "J'ai automatisé la collecte de 50+ offres et profils qualifiés par jour",
        "J'ai tout réuni dans un tableau de bord Power BI pour aider à décider",
      ],
      tags: ["Power BI", "n8n", "Web Scraping", "SQL", "Supabase", "API"],
      detail: {
        brief: "InspiraTec est une startup de recrutement tech. Elle voulait une plateforme capable de rapprocher automatiquement les offres et les candidats. Tout était à construire, à commencer par les données.",
        role: "Data Analyst et Product Management. Je collectais les données, je construisais les automatisations et le tableau de bord, et je faisais le lien avec le produit.",
        result: "Un MVP qui fonctionne, plus de 50 offres et profils qualifiés collectés chaque jour, et un tableau de bord Power BI utilisé par l'équipe commerciale.",
        steps: [
          { n: "01", title: "Collecter les offres", desc: "J'ai automatisé la collecte sur les principales plateformes d'emploi tech, avec un tri pour ne garder que les offres et les profils qualifiés." },
          { n: "02", title: "Automatiser le matching", desc: "J'ai construit des workflows n8n qui rapprochent offres et candidats, leur donnent un score et préviennent l'équipe." },
          { n: "03", title: "Ranger les données", desc: "J'ai conçu la base Supabase qui réunit les offres, les candidats et les scores." },
          { n: "04", title: "Aider à décider", desc: "J'ai réuni les indicateurs dans un tableau de bord Power BI pour l'équipe commerciale." },
        ],
        facts: [
          { v: "50+", k: "offres et profils qualifiés par jour" },
          { v: "2", k: "mois de stage" },
          { v: "1", k: "MVP livré" },
        ],
        quote: true,
      },
    },
  ],

  skills: [
    {
      n: "01", t: "Langages & Analyse",
      d: "Python tous les jours, avec Pandas et Scikit-learn. SQL pour interroger proprement, Node.js quand il faut du temps réel, comme pour le tableau de bord de CAD.42.",
      tags: ["Python", "SQL", "Node.js", "Machine Learning", "Data Visualisation"],
    },
    {
      n: "02", t: "Business Intelligence",
      d: "Je construis des tableaux de bord qu'on ouvre vraiment. Chez InspiraTec, l'équipe commerciale suivait ses offres dans Power BI ; chez CAD.42, les chantiers se lisaient dans Dash.",
      tags: ["Power BI", "Dash", "Streamlit", "KPI", "Data Modeling", "Excel avancé"],
    },
    {
      n: "03", t: "Data Engineering & Cloud",
      d: "Je fais circuler la donnée de la source jusqu'au tableau de bord : collecte par API, stockage en PostgreSQL ou Supabase, le tout rangé dans Docker.",
      tags: ["PostgreSQL", "MongoDB", "GCP", "Docker", "ETL", "API REST", "Supabase"],
    },
    {
      n: "04", t: "Automatisation & IA",
      d: "Tout ce qui se répète, j'essaie de l'automatiser. Des workflows n8n pour les commandes de ma boutique, du scraping chez InspiraTec, Claude pour aller plus vite sur le reste.",
      tags: ["n8n", "Web Scraping", "Prompt Engineering", "Claude (LLM)", "NLP"],
    },
    {
      n: "05", t: "Product & Web Analytics",
      d: "Je regarde où les visiteurs décrochent avant d'acheter. Sur Hupple Store, je suis chaque étape, de la publicité Meta jusqu'au paiement.",
      tags: ["Meta Ads", "Funnel Analytics", "Analyse de conversion", "Webhooks", "KPI"],
    },
    {
      n: "06", t: "Design & Graphisme",
      d: "Des interfaces, des visuels et des graphiques soignés, parce qu'un outil bien présenté est un outil qu'on utilise.",
      tags: ["Suite Adobe", "Design graphique", "Dataviz", "UI"],
    },
    {
      n: "07", t: "Outils & Méthodes",
      d: "Git pour ne rien perdre, des méthodes agiles pour avancer par petites étapes, et Medallia, que j'utilise au quotidien chez Ipsos.",
      tags: ["Git", "GitHub", "Lovable", "Agile/Scrum", "Bitbucket", "Docker", "Medallia"],
    },
  ],

  softSkills: [
    { ico: "eye",    t: "Vision produit",       d: "Avant d'ouvrir un fichier, je demande à qui ça va servir. Un chiffre que personne n'utilise ne m'intéresse pas." },
    { ico: "check",  t: "Rigueur",              d: "Je documente ce que je construis pour qu'un collègue puisse le reprendre sans moi. Chez CAD.42, j'ai formé cinq collaborateurs à l'outil." },
    { ico: "rocket", t: "Autonomie",            d: "Hupple Store, je l'ai lancée seul : les produits, les visuels, les automatisations. Quand je vois un problème, je propose et je teste." },
    { ico: "chat",   t: "Vulgarisation",        d: "J'ai présenté mes résultats en anglais devant un jury à Saragosse et devant les experts d'un club de football en Belgique. Si ce n'est pas clair, c'est à moi de refaire." },
    { ico: "video",  t: "Création de contenu",  d: "J'aime créer : visuels, vidéos, carrousels. Ceux de Hupple Store, c'est moi. Et oui, je suis celui qui refait la diapositive parce qu'un alignement le dérange." },
    { ico: "users",  t: "Esprit d'équipe",      d: "BUSIT Week en Belgique, Erasmus+ à Saragosse, équipe Expérience Client & Plateformes chez Ipsos BVA : j'ai surtout appris avec les autres." },
    { ico: "spark",  t: "Curiosité",            d: "Un nouvel outil sort, je l'essaie dans la semaine. C'est comme ça que n8n et Claude sont entrés dans ma boîte à outils." },
    { ico: "pen",    t: "Œil de designer",      d: "Un tableau de bord bien présenté, c'est un tableau de bord qu'on utilise. Je soigne les marges autant que les requêtes." },
    { ico: "globe",  t: "Adaptation",           d: "Cotonou, Paris, la Belgique, l'Espagne : j'ai changé de pays, d'école et d'équipe plusieurs fois. Je prends vite mes marques." },
  ],


  projects: [
    {
      pn: "01",
      client: "Erasmus+ · Université de Saragosse · juillet 2026",
      title: "CaRental, réduire les coûts sans faire attendre",
      desc: "Projet Erasmus+ à l'Université de Saragosse. Une agence de location d'aéroport voulait savoir quelle flotte de navettes coûte le moins cher tout en gardant au moins 85 % de clients satisfaits. En équipe internationale de quatre, nous avons simulé plus de 100 scénarios pour aboutir à une configuration à 6,54 € par client.",
      tags: ["JaamSim", "Simulation", "Python", "Optimisation", "Anglais"],
      media: [
        { src: "assets/projets/carental-resultats.jpg", alt: "Diapositive de résultats : compromis entre coût et qualité de service pour chaque scénario" },
        { src: "assets/photos/equipe-carental.jpg", alt: "L'équipe CaRental devant sa présentation", pos: "12% 100%" },
      ],
      url: null,
      detail: {
        brief: "Une agence de location de voitures d'aéroport cherchait la flotte de navettes la moins coûteuse capable de garder au moins 85 % de clients satisfaits.",
        role: "Au sein d'une équipe internationale de quatre personnes, j'ai pris en charge l'analyse des données et la présentation des résultats.",
        result: "Après plus de 100 scénarios comparés, nous avons recommandé une configuration à 6,54 € par client, présentée en anglais à l'Université de Saragosse.",
        steps: [
          { n: "01", title: "Poser le problème", desc: "Nous avons traduit la question de l'agence en objectif chiffré : le coût par client le plus bas, avec au moins 85 % de clients satisfaits." },
          { n: "02", title: "Simuler le service", desc: "Nous avons modélisé les navettes et le comptoir de location dans JaamSim, un logiciel de simulation." },
          { n: "03", title: "Comparer les scénarios", desc: "J'ai analysé en Python plus de 100 configurations pour trouver le meilleur compromis entre coût et qualité de service." },
          { n: "04", title: "Présenter en anglais", desc: "J'ai présenté les résultats et notre recommandation devant le jury du programme." },
        ],
        facts: [
          { v: "100+", k: "scénarios simulés" },
          { v: "6,54 €", k: "par client, la configuration retenue" },
          { v: "85 %", k: "de clients satisfaits au minimum" },
        ],
        gallery: [
          { src: "assets/photos/saragosse-groupe.jpg", alt: "Le groupe Erasmus+ réuni dans le grand escalier de l'Université de Saragosse", cap: "Saragosse, juillet 2026 : le groupe du programme Erasmus+", pos: "50% 88%" },
          { src: "assets/photos/equipe-carental.jpg", alt: "L'équipe CaRental devant sa première diapositive", cap: "Notre équipe, le jour de la présentation" },
          { src: "assets/photos/equipe-roles.jpg", alt: "L'équipe CaRental devant la diapositive des rôles de chacun", cap: "Ma part du travail : l'analyse des données et la présentation" },
        ],
      },
    },
    {
      pn: "02",
      client: "Mon entreprise · depuis fév. 2026",
      title: "Hupple Store, data e-commerce",
      desc: "Boutique e-commerce destinée à l'Afrique francophone, que je développe seul. J'y gère l'acquisition, les campagnes publicitaires, l'analyse des performances, la stratégie produit et le copywriting, avec des commandes automatisées sous n8n. 361 ventes et 321 clients à ce jour.",
      tags: ["n8n", "Webhooks", "KPI", "E-commerce", "Design"],
      media: [
        { src: "assets/projets/hupple.jpg", alt: "Page d'accueil de la boutique Hupple Store, avec ses trois packs en vedette" },
      ],
      url: "https://hupplemarket.mychariow.com",
      logo: "assets/hupple-logo.png",
      detail: {
        brief: "J'ai lancé Hupple Store pour vendre des guides numériques en Afrique francophone, avec un budget publicitaire limité. Il fallait que les commandes se traitent seules et que chaque décision repose sur des chiffres. C'est aussi mon terrain de jeu : cela me permet de tester, mesurer et ajuster mes décisions à partir de données réelles.",
        role: "Fondateur. Je gère l'acquisition, les campagnes publicitaires, l'analyse des performances, la stratégie produit et le copywriting, ainsi que les automatisations.",
        result: "361 ventes et 321 clients, surtout dans 14 pays africains.",
        steps: [
          { n: "01", title: "Attirer les bons clients", desc: "Je lance et pilote les campagnes publicitaires Meta, pays par pays, et j'écris les textes des annonces et des pages produits." },
          { n: "02", title: "Automatiser les commandes", desc: "Des webhooks et des workflows n8n traitent chaque commande, relancent les paniers abandonnés et gardent les données à jour." },
          { n: "03", title: "Mesurer chaque étape", desc: "Je suis le parcours de la publicité jusqu'au paiement pour voir où les visiteurs décrochent et ce que rapporte chaque produit." },
          { n: "04", title: "Ajuster", desc: "Un tableau de bord quotidien me montre la conversion et les revenus par produit ; j'ajuste les prix, les offres et les campagnes à partir de ces chiffres." },
        ],
        facts: [
          { v: "361", k: "ventes" },
          { v: "321", k: "clients" },
          { v: "14", k: "pays africains" },
        ],
      },
    },
    {
      pn: "03",
      client: "Projet personnel · 2026",
      title: "MyFinanx, gestion financière",
      desc: "Application de budget que j'ai conçue et développée seul. Le besoin : suivre ses dépenses sans créer de compte ni confier ses données. Elle s'installe sur téléphone, propose des conseils par IA et lit les tickets de caisse.",
      tags: ["PWA", "JavaScript", "Vite", "IA", "Scan de tickets"],
      media: [
        { src: "assets/projets/myfinanx-desktop.jpg", alt: "Tableau de bord de MyFinanx sur ordinateur, avec des données de démonstration" },
        { src: "assets/projets/myfinanx-mobile.jpg", alt: "MyFinanx sur téléphone, avec des données de démonstration", contain: true },
      ],
      url: "https://myfinanx.vercel.app",
      detail: {
        brief: "Les applications de budget demandent souvent un compte et gardent tout sur leurs serveurs. MyFinanx permet de suivre son budget sans donner ses données.",
        role: "J'ai mené le projet de bout en bout, de la conception à la mise en ligne.",
        result: "L'application est en ligne et gratuite, et les données restent sur l'appareil.",
        steps: [
          { n: "01", title: "Partir de l'usage", desc: "J'ai conçu une application installable, pensée d'abord pour le téléphone." },
          { n: "02", title: "Garder les données chez soi", desc: "Aucun compte à créer : les données de budget restent chez l'utilisateur." },
          { n: "03", title: "Des conseils par IA", desc: "J'ai intégré un modèle de langage qui commente le budget et propose des pistes d'économie." },
          { n: "04", title: "Le scan de tickets", desc: "L'application lit les tickets de caisse et les relevés PDF, pour éviter la saisie à la main." },
        ],
        facts: [
          { v: "0", k: "compte à créer" },
          { v: "100 %", k: "des données sur l'appareil" },
          { v: "IA", k: "des conseils sur le budget" },
        ],
        gallery: [
          { src: "assets/projets/myfinanx-desktop.jpg", alt: "Tableau de bord de MyFinanx sur ordinateur, avec des données de démonstration", cap: "Le tableau de bord sur ordinateur (données de démonstration)" },
          { src: "assets/projets/myfinanx-mobile.jpg", alt: "MyFinanx sur téléphone, avec des données de démonstration", cap: "La même application sur téléphone", contain: true },
        ],
      },
    },
    {
      pn: "04",
      client: "International · avril 2025, Belgique",
      title: "Football analytics, OHL",
      desc: "Lors de la BUSIT Week de l'UC Leuven-Limburg, en Belgique, j'ai analysé avec une équipe internationale les données de performance du club OH Leuven, puis nous avons présenté nos recommandations à un panel d'experts du club.",
      tags: ["Python", "Pandas", "Seaborn", "SQL", "Anglais"],
      layout: "duo",
      media: [
        { src: "assets/projets/ohl-mi-temps-1.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en première mi-temps" },
        { src: "assets/projets/ohl-mi-temps-2.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en deuxième mi-temps" },
      ],
      url: null,
      detail: {
        brief: "Pendant la BUSIT Week de l'UC Leuven-Limburg, le club de football OH Leuven nous a confié ses données de performance, avec une question : qu'en tirer pour le recrutement, le jeu et la gestion de la charge physique ?",
        role: "Au sein d'une équipe internationale de cinq personnes, j'ai construit les indicateurs et les graphiques qui rendent les résultats lisibles.",
        result: "Nous avons présenté des recommandations concrètes devant des experts du club, à partir d'une saison complète de données de matchs et de joueurs.",
        steps: [
          { n: "01", title: "Explorer les données", desc: "Nous avons parcouru le jeu de données du club : statistiques des joueurs, données de match, mesures physiques et tactiques sur une saison." },
          { n: "02", title: "Construire les indicateurs", desc: "J'ai combiné plusieurs mesures pour évaluer l'apport de chaque joueur : buts attendus, intensité du pressing, réseaux de passes, travail défensif." },
          { n: "03", title: "Rendre lisible", desc: "J'ai produit des graphiques, fixes et interactifs, avec Seaborn et Matplotlib, pour expliquer les résultats à des personnes qui ne sont pas techniques." },
          { n: "04", title: "Présenter au club", desc: "Nous avons présenté en anglais nos recommandations sur le recrutement, les schémas tactiques et la gestion de la charge physique." },
        ],
        facts: [
          { v: "5", k: "personnes dans l'équipe" },
          { v: "1", k: "saison complète de données" },
          { v: "EN", k: "présentation en anglais" },
        ],
        gallery: [
          { src: "assets/projets/ohl-mi-temps-1.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en première mi-temps", cap: "Actions réussies d'OH Leuven, première mi-temps" },
          { src: "assets/projets/ohl-mi-temps-2.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en deuxième mi-temps", cap: "Actions réussies d'OH Leuven, deuxième mi-temps" },
        ],
      },
    },
  ],

  terrain: {
    title: "Sur le terrain",
    lead: "Les projets qui m'ont le plus appris, je les ai faits en équipe, souvent loin de chez moi.",
    photos: [
      { src: "assets/photos/saragosse-groupe.jpg", alt: "Le groupe Erasmus+ réuni dans le grand escalier de l'Université de Saragosse", cap: "Saragosse, juillet 2026 : le groupe du programme Erasmus+", pos: "50% 88%" },
      { src: "assets/photos/equipe-carental.jpg", alt: "L'équipe CaRental devant sa première diapositive", cap: "Notre équipe CaRental, le jour de la présentation" },
      { src: "assets/photos/equipe-roles.jpg", alt: "L'équipe CaRental devant la diapositive des rôles de chacun", cap: "Ma part du travail : l'analyse des données et la présentation" },
    ],
  },

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

  contactLead: "Un projet, une question, ou juste envie de parler data, IA ou design ? Écrivez-moi, je réponds sous 48 h.",

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanueldanton" },
    { label: "GitHub",   href: "https://github.com/emmanueldanton" },
    { label: "Email",    href: "mailto:defdanton41@gmail.com" },
  ],
};
