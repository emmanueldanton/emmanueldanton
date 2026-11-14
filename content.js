/* Content for the portfolio. Edit freely. No em-dashes in the copy. */
window.PORTFOLIO = {
  name: "EMMANUEL DANTON",
  firstName: "EMMANUEL",
  lastName: "DANTON",
  role: "Ingénieur Data & IA",
  email: "defdanton41@gmail.com",
  location: "Paris, Île-de-France",
  cv: "assets/CV_Emmanuel_DANTON_FR.pdf",
  cvFr: "assets/CV_Emmanuel_DANTON_FR.pdf",
  cvEn: "assets/CV_Emmanuel_DANTON_EN.pdf",

  hero: {
    mission: "J'allie IA, automatisation et design pour aider les équipes à avancer plus vite.",
    lead: "Chef de projet junior chez Ipsos BVA, dans l'équipe Expérience Client & Plateformes, et étudiant en cycle ingénieur Data & IA à l'ECE Paris. Ce que j'aime, c'est trouver une solution simple à un problème.",
    photoAlt: "Portrait d'Emmanuel Danton",
    tags: {
      poste: { v: "Chef de projet junior", k: "Ipsos BVA - expérience client" },
      capteurs: "1 200+ capteurs IoT suivis",
      ventes: { v: "360+", k: "ventes - Hupple Store" },
    },
  },

  marquee: ["Analyse de données", "Data visualisation", "Design graphique", "Suite Adobe", "Automatisation", "Intelligence artificielle", "Gestion de projet", "Expérience client", "Tableaux de bord", "Création de contenu", "Data storytelling", "UI design"],

  stats: [
    { num: "03",   u: "",   lbl: "expériences en entreprise" },
    { num: "360",  u: "+",   lbl: "ventes sur ma boutique Hupple Store" },
    { num: "1200", u: "+",  lbl: "capteurs IoT suivis en temps réel" },
  ],

  about: {
    quote: "Mon fil conducteur : comprendre un besoin, analyser les données et <strong>passer à l'action</strong>.",
    p1: "Je suis étudiant en cycle ingénieur Data & IA à l'<strong>ECE Paris</strong> et alternant chef de projet junior chez <strong>Ipsos BVA</strong>, au sein de l'équipe <strong>Expérience Client & Plateformes</strong>.",
    p2: "Mon parcours m'a permis de travailler sur des sujets très différents. Chez <strong>CAD.42</strong>, j'ai travaillé sur l'analyse et la visualisation de données pour répondre à des problématiques opérationnelles, avec un tableau de bord qui suit plus de 1 200 capteurs IoT sur une centaine de chantiers. Je développe également <strong>Hupple Store</strong>, une boutique e-commerce destinée à l'Afrique francophone, où je gère l'acquisition, les campagnes publicitaires, l'analyse des performances, la stratégie produit et le copywriting. C'est <strong>mon terrain de jeu</strong> : cela me permet de tester, mesurer et ajuster mes décisions à partir de données réelles, sur plus de 360 ventes.",
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
      discret: true,
      logo: "assets/ipsos.svg",
      ph: "Alternance",
      role: "Chef de projet junior Plateformes IT",
      co: "Ipsos BVA - Paris",
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
      yr: "Mars - Juin 2026",
      logo: "assets/cad42.png",
      ph: "Stage 4 mois",
      role: "Data Analyst",
      co: "CAD.42 Services - Rueil-Malmaison",
      bullets: [
        "1 200+ capteurs suivis en direct sur 100+ chantiers, grâce au tableau de bord que j'ai déployé",
        "Les pannes anticipées sur le terrain, grâce à un score de santé par projet",
        "5 collaborateurs formés à l'outil, et Claude adopté par la Direction des Opérations",
      ],
      tags: ["Python", "Dash", "Node.js", "IoT", "API", "LLM Claude", "Power BI"],
      detail: {
        brief: "Les équipes de CAD.42 voient désormais en direct l'état de plus de 1 200 capteurs, sur plus de 100 chantiers. Avant, aucun outil ne le permettait.",
        role: "Data Analyst en stage. J'ai pensé l'organisation des données, développé le tableau de bord, puis je l'ai mis en service et j'ai formé les équipes.",
        result: "Le tableau de bord tourne en production. Cinq collaborateurs l'utilisent après formation, et la Direction des Opérations a adopté Claude dans son travail.",
        steps: [
          { n: "01", title: "Un écran toujours à jour", desc: "J'ai construit la collecte des données des capteurs par API, leur nettoyage et leur stockage. Ce qui veut dire que l'écran se met à jour seul, en continu." },
          { n: "02", title: "Voir les problèmes avant qu'ils arrivent", desc: "J'ai développé avec Dash un tableau de bord chantier par chantier, avec des alertes automatiques et un score de santé par projet, pour intervenir avant la panne." },
          { n: "03", title: "Rester rapide à grande échelle", desc: "J'ai migré l'outil vers Node.js. Résultat : il reste rapide, même avec plus de 100 chantiers suivis en même temps." },
          { n: "04", title: "Une équipe autonome", desc: "J'ai formé cinq collaborateurs à l'outil, puis j'ai accompagné la Direction des Opérations dans l'adoption de Claude." },
        ],
        facts: [
          { v: "1 200+", k: "capteurs suivis en direct" },
          { v: "100+", k: "chantiers couverts" },
          { v: "5", k: "collaborateurs formés" },
        ],
      },
    },
    {
      yr: "Juin - Août 2025",
      logo: "assets/it.png",
      featured: true,
      ph: "Stage 2 mois",
      role: "Data Analyst & Product Management",
      co: "InspiraTec - Courbevoie",
      bullets: [
        "50+ offres et profils qualifiés collectés chaque jour, sans saisie à la main",
        "Un MVP qui rapproche seul offres et candidats, construit avec n8n",
        "Un tableau de bord Power BI pour que l'équipe commerciale décide sur des chiffres",
      ],
      tags: ["Power BI", "n8n", "Web Scraping", "SQL", "Supabase", "API"],
      detail: {
        brief: "InspiraTec a obtenu une plateforme qui rapproche seule les offres et les candidats, alimentée chaque jour par plus de 50 offres et profils qualifiés. Cette startup de recrutement tech partait de zéro, à commencer par les données.",
        role: "Data Analyst et Product Management. Je collectais les données, je construisais les automatisations et le tableau de bord, et je faisais le lien avec le produit.",
        result: "Un MVP qui fonctionne, plus de 50 offres et profils qualifiés collectés chaque jour, et un tableau de bord Power BI utilisé par l'équipe commerciale.",
        steps: [
          { n: "01", title: "Des offres qui arrivent seules", desc: "J'ai automatisé la collecte sur les principales plateformes d'emploi tech, avec un tri. Ce qui veut dire que l'équipe ne reçoit que des offres et des profils qualifiés." },
          { n: "02", title: "Le bon candidat pour la bonne offre", desc: "J'ai construit des workflows n8n qui rapprochent offres et candidats, leur donnent un score et préviennent l'équipe." },
          { n: "03", title: "Tout au même endroit", desc: "J'ai conçu la base Supabase qui réunit les offres, les candidats et les scores." },
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
      n: "01", t: "Faire parler les données",
      d: "Je transforme des données brutes en réponses claires. Chez CAD.42, l'état de plus de 1 200 capteurs se lisait d'un coup d'œil. Python et SQL au quotidien, Node.js quand il faut du temps réel.",
      tags: ["Python", "SQL", "Node.js", "Machine Learning", "Data Visualisation"],
    },
    {
      n: "02", t: "Rendre les chiffres lisibles",
      d: "Des tableaux de bord qu'une équipe ouvre vraiment pour décider. Chez InspiraTec, l'équipe commerciale suivait ses offres dans Power BI ; chez CAD.42, cinq collaborateurs suivaient leurs chantiers en direct.",
      tags: ["Power BI", "Dash", "Streamlit", "KPI", "Data Modeling", "Excel avancé"],
    },
    {
      n: "03", t: "Faire arriver la bonne donnée",
      d: "Les données arrivent seules, propres et à jour, là où on en a besoin. Chez CAD.42, l'écran se mettait à jour en continu sur plus de 100 chantiers. Derrière : des API, une base PostgreSQL ou Supabase, Docker.",
      tags: ["PostgreSQL", "MongoDB", "GCP", "Docker", "ETL", "API REST", "Supabase"],
    },
    {
      n: "04", t: "Faire gagner du temps",
      d: "Ce qui se répète, je le confie à la machine. Sur Hupple Store, chaque commande se traite seule ; chez InspiraTec, plus de 50 offres et profils arrivaient chaque jour sans saisie à la main.",
      tags: ["n8n", "Web Scraping", "Prompt Engineering", "Claude (LLM)", "NLP"],
    },
    {
      n: "05", t: "Comprendre ce qui fait acheter",
      d: "Je repère où les visiteurs décrochent avant d'acheter, puis j'ajuste. Sur Hupple Store, plus de 360 ventes, avec des prix, des offres et des publicités corrigés à partir des chiffres.",
      tags: ["Meta Ads", "Funnel Analytics", "Analyse de conversion", "Webhooks", "KPI"],
    },
    {
      n: "06", t: "Donner envie d'utiliser un outil",
      d: "Un outil bien présenté est un outil qu'on utilise. Je dessine moi-même les interfaces, les visuels et les graphiques de mes projets, de MyFinanx aux publicités de Hupple Store.",
      tags: ["Suite Adobe", "Design graphique", "Dataviz", "UI"],
    },
    {
      n: "07", t: "Avancer en équipe sans rien perdre",
      d: "Un travail suivi et documenté, pour qu'un collègue puisse le reprendre sans moi. J'avance par petites étapes, et j'utilise Medallia au quotidien chez Ipsos BVA.",
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
      client: "Erasmus+ - Université de Saragosse - juillet 2026",
      title: "CaRental, 6,54 € par client avec 85 % de clients satisfaits",
      desc: "La flotte de navettes la moins chère qui garde au moins 85 % de clients satisfaits : 6,54 € par client. Nous l'avons trouvée en comparant plus de 100 scénarios, en équipe internationale de quatre, pour une agence de location d'aéroport. Projet Erasmus+ à l'Université de Saragosse.",
      tags: ["JaamSim", "Simulation", "Python", "Optimisation", "Anglais"],
      media: [
        { src: "assets/projets/carental-resultats.jpg", alt: "Diapositive de résultats : compromis entre coût et qualité de service pour chaque scénario" },
        { src: "assets/photos/equipe-carental.jpg", alt: "L'équipe CaRental devant sa présentation", pos: "12% 100%" },
      ],
      url: null,
      detail: {
        brief: "Nous avons trouvé la flotte de navettes la moins chère qui garde au moins 85 % de clients satisfaits : 6,54 € par client. La question venait d'une agence de location de voitures d'aéroport.",
        role: "Au sein d'une équipe internationale de quatre personnes, j'ai pris en charge l'analyse des données et la présentation des résultats.",
        result: "Après plus de 100 scénarios comparés, nous avons recommandé une configuration à 6,54 € par client, présentée en anglais à l'Université de Saragosse.",
        steps: [
          { n: "01", title: "Un objectif chiffré", desc: "Nous avons traduit la question de l'agence en objectif chiffré : le coût par client le plus bas, avec au moins 85 % de clients satisfaits." },
          { n: "02", title: "Tester sans risque", desc: "Nous avons reproduit les navettes et le comptoir de location dans JaamSim, un logiciel de simulation. Ce qui veut dire qu'on pouvait tout essayer sans toucher à la vraie agence." },
          { n: "03", title: "Trouver le meilleur compromis", desc: "J'ai analysé en Python plus de 100 configurations pour trouver le meilleur compromis entre coût et qualité de service." },
          { n: "04", title: "Convaincre le jury", desc: "J'ai présenté en anglais les résultats et notre recommandation devant le jury du programme." },
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
      client: "Projet personnel - depuis fév. 2026",
      title: "Hupple Store, plus de 360 ventes dans 14 pays",
      desc: "Plus de 360 ventes et 320 clients dans 14 pays africains. Hupple Store est une boutique de guides numériques que je développe seul : publicité, analyse des performances, offres, textes et commandes automatisées.",
      tags: ["n8n", "Webhooks", "KPI", "E-commerce", "Design"],
      media: [
        { src: "assets/projets/hupple.jpg", alt: "Page d'accueil de la boutique Hupple Store, avec ses trois packs en vedette" },
      ],
      url: "https://hupplemarket.mychariow.com",
      logo: "assets/hupple-logo.png",
      detail: {
        brief: "Plus de 360 ventes et 320 clients dans 14 pays africains, avec un budget publicitaire limité. Les commandes se traitent seules et chaque décision repose sur des chiffres. C'est aussi mon terrain de jeu : je teste, je mesure et j'ajuste à partir de données réelles.",
        role: "Un projet que je mène seul. Je gère l'acquisition, les campagnes publicitaires, l'analyse des performances, la stratégie produit et le copywriting, ainsi que les automatisations.",
        result: "Plus de 360 ventes et 320 clients, surtout dans 14 pays africains.",
        steps: [
          { n: "01", title: "Attirer les bons clients", desc: "Je lance et pilote les campagnes publicitaires Meta, pays par pays, et j'écris les textes des annonces et des pages produits." },
          { n: "02", title: "Des commandes qui se traitent seules", desc: "Des webhooks et des workflows n8n traitent chaque commande et relancent les paniers abandonnés. Ce qui veut dire que le client reçoit ses guides sans attendre, même la nuit." },
          { n: "03", title: "Voir où les clients décrochent", desc: "Je suis le parcours de la publicité jusqu'au paiement pour voir où les visiteurs décrochent et ce que rapporte chaque produit." },
          { n: "04", title: "Décider sur des chiffres", desc: "Un tableau de bord quotidien me montre la conversion et les revenus par produit ; j'ajuste les prix, les offres et les campagnes à partir de ces chiffres." },
        ],
        facts: [
          { v: "360+", k: "ventes" },
          { v: "320+", k: "clients" },
          { v: "14", k: "pays africains" },
        ],
        gallery: [
          { src: "assets/projets/hupple-tableau.jpg", alt: "Tableau de bord de suivi des ventes de Hupple Store : ventes par mois, part des ventes par pays, heures d'achat", cap: "Mon tableau de bord de suivi des ventes (données réelles, en volumes et en pourcentages)", wide: true },
          { src: "assets/projets/hupple.jpg", alt: "Page d'accueil de la boutique Hupple Store", cap: "La boutique en ligne", half: true },
          { src: "assets/projets/hupple-avis-client.jpg", alt: "Capture WhatsApp d'un message de cliente après la réception de ses ebooks", cap: "Un avis client reçu sur WhatsApp", half: true, contain: true },
        ],
      },
    },
    {
      pn: "03",
      client: "Projet personnel - 2026",
      title: "MyFinanx, son budget sans donner ses données",
      desc: "Suivre ses dépenses sans créer de compte ni confier ses données. MyFinanx est une application de budget que j'ai conçue et développée seul : elle s'installe sur téléphone, donne des conseils par IA et lit les tickets de caisse.",
      tags: ["PWA", "JavaScript", "Vite", "IA", "Scan de tickets"],
      media: [
        { src: "assets/projets/myfinanx-desktop.jpg", alt: "Tableau de bord de MyFinanx sur ordinateur, avec des données de démonstration" },
        { src: "assets/projets/myfinanx-mobile.jpg", alt: "MyFinanx sur téléphone, avec des données de démonstration", contain: true },
      ],
      url: "https://myfinanx.vercel.app",
      detail: {
        brief: "Avec MyFinanx, on suit son budget sans créer de compte : les données restent sur le téléphone. Les autres applications de budget gardent souvent tout sur leurs serveurs.",
        role: "J'ai mené le projet de bout en bout, de la conception à la mise en ligne.",
        result: "Une application en ligne et gratuite, où l'on suit son budget sans rien saisir à la main ni donner ses données.",
        steps: [
          { n: "01", title: "Toujours dans la poche", desc: "J'ai conçu une application qui s'installe comme une vraie application, pensée d'abord pour le téléphone." },
          { n: "02", title: "Des données qui restent chez soi", desc: "Aucun compte à créer : les données de budget restent chez l'utilisateur." },
          { n: "03", title: "Des pistes pour économiser", desc: "J'ai intégré une IA qui commente le budget et propose des pistes d'économie." },
          { n: "04", title: "Plus de saisie à la main", desc: "L'application lit les tickets de caisse et les relevés PDF, pour éviter la saisie à la main." },
        ],
        facts: [
          { v: "0", k: "compte à créer" },
          { v: "100 %", k: "des données sur l'appareil" },
          { v: "IA", k: "des conseils sur le budget" },
        ],
        gallery: [
          { src: "assets/projets/myfinanx-desktop.jpg", alt: "Tableau de bord de MyFinanx sur ordinateur, avec des données de démonstration", cap: "Le tableau de bord sur ordinateur (données de démonstration)", wide: true },
          { src: "assets/projets/myfinanx-mobile.jpg", alt: "MyFinanx sur téléphone, avec des données de démonstration", cap: "La même application sur téléphone", contain: true },
          { src: "assets/projets/myfinanx-ia.jpg", alt: "Le conseiller IA de MyFinanx répond à une question sur le budget, avec des données de démonstration", cap: "Le conseiller IA, qui répond à partir du budget (données de démonstration)", contain: true },
          { src: "assets/projets/myfinanx-budget.jpg", alt: "Onglet Budget de MyFinanx : revenus et postes de dépenses", cap: "Le planning budgétaire, avec la répartition par IA", contain: true },
          { src: "assets/projets/myfinanx-depenses.jpg", alt: "Onglet Dépenses de MyFinanx : total du mois et répartition par catégorie", cap: "Les dépenses du mois, par catégorie", contain: true },
          { src: "assets/projets/myfinanx-objectifs.jpg", alt: "Onglet Objectifs de MyFinanx : fonds d'urgence et projet de voyage", cap: "Les objectifs d'épargne", contain: true },
          { src: "assets/projets/myfinanx-stats.jpg", alt: "Écran Statistiques de MyFinanx : revenus, dépenses, taux d'épargne et répartition", cap: "Les statistiques : revenus, dépenses et taux d'épargne", contain: true },
        ],
      },
    },
    {
      pn: "04",
      client: "International - avril 2025, Belgique",
      title: "Football OHL, une saison de matchs traduite en conseils",
      desc: "Des recommandations sur le recrutement, le jeu et la charge physique, présentées aux experts du club OH Leuven. Nous les avons tirées d'une saison complète de données, en équipe internationale, pendant la BUSIT Week de l'UC Leuven-Limburg en Belgique.",
      tags: ["Python", "Pandas", "Seaborn", "SQL", "Anglais"],
      layout: "duo",
      media: [
        { src: "assets/projets/ohl-mi-temps-1.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en première mi-temps" },
        { src: "assets/projets/ohl-mi-temps-2.jpg", alt: "Carte de chaleur des actions réussies d'OH Leuven en deuxième mi-temps" },
      ],
      url: null,
      detail: {
        brief: "Nous avons présenté aux experts du club OH Leuven des recommandations sur le recrutement, le jeu et la charge physique des joueurs, tirées d'une saison complète de données. C'était pendant la BUSIT Week de l'UC Leuven-Limburg, en Belgique.",
        role: "Au sein d'une équipe internationale de cinq personnes, j'ai construit les indicateurs et les graphiques qui rendent les résultats lisibles.",
        result: "Nous avons présenté des recommandations concrètes devant des experts du club, à partir d'une saison complète de données de matchs et de joueurs.",
        steps: [
          { n: "01", title: "Comprendre la saison", desc: "Nous avons parcouru le jeu de données du club : statistiques des joueurs, données de match, mesures physiques et tactiques sur une saison." },
          { n: "02", title: "Mesurer l'apport de chaque joueur", desc: "J'ai combiné plusieurs mesures, comme les buts attendus, l'intensité du pressing ou le travail défensif. Ce qui veut dire qu'on pouvait comparer les joueurs sur ce qu'ils apportent vraiment à l'équipe." },
          { n: "03", title: "Des graphiques que tout le monde comprend", desc: "J'ai produit des graphiques, fixes et interactifs, avec Seaborn et Matplotlib, pour expliquer les résultats à des personnes qui ne sont pas techniques." },
          { n: "04", title: "Convaincre le club", desc: "Nous avons présenté en anglais nos recommandations sur le recrutement, les schémas tactiques et la gestion de la charge physique." },
        ],
        facts: [
          { v: "5", k: "personnes dans l'équipe" },
          { v: "1", k: "saison complète de données" },
          { v: "EN", k: "présentation en anglais" },
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
    rl: "Head of Business - InspiraTec",
    meta: "Responsable directe - Stage juin à août 2025",
    photo: "assets/massiva.png",
    li: "https://www.linkedin.com/in/massivaatmani/",
  },

  education: [
    { yr: "2026 - 2029", deg: "Cycle Ingénieur Data & IA", sch: "École Centrale d'Électronique (ECE) - Paris", country: "France", logo: "assets/ece.png" },
    { yr: "2023 - 2026", deg: "BUT Science des données", sch: "IUT de Villetaneuse - Université Sorbonne Paris Nord", country: "France", logo: "assets/iut.png" },
    { yr: "2021 - 2024", deg: "Licence, Sécurité & Réseau informatique", sch: "Les Cours Sonou - Bénin", country: "Bénin", logo: "assets/lcs.png" },
  ],

  contactLead: "Un projet, une question, ou juste envie de parler data, IA ou design ? Écrivez-moi, je réponds sous 48 h.",

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanueldanton" },
    { label: "GitHub",   href: "https://github.com/emmanueldanton" },
    { label: "Email",    href: "mailto:defdanton41@gmail.com" },
  ],
};
