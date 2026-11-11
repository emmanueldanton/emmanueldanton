/* English version. Only the texts: everything else (links, images, numbers) comes from content.js.
   To add a language, copy this file (content.xx.js), translate it, register it in index.html
   and add its code to LANGS in app.jsx. No em-dashes in the copy. */
window.PORTFOLIO_I18N = window.PORTFOLIO_I18N || {};
window.PORTFOLIO_I18N.en = {
  content: {
    role: "Data & AI Engineer",
    hero: {
      mission: "I combine AI, automation and design to help teams move faster.",
      lead: "Junior Project Manager at Ipsos, in the CX Platform team, and Data & AI engineering student at ECE Paris. What I enjoy most is finding a simple solution to a problem.",
      photoAlt: "Portrait of Emmanuel Danton",
      tags: {
        poste: { v: "Junior Project Manager", k: "Ipsos · customer experience" },
        capteurs: "1,200+ IoT sensors monitored",
        ventes: { k: "sales · Hupple Store" },
      },
    },
    marquee: ["Data analysis", "Data visualisation", "Graphic design", "Adobe Suite", "Automation", "Artificial intelligence", "Project management", "Customer experience", "Dashboards", "Content creation", "Data storytelling", "UI design"],
    about: {
      p1: "I am a Junior Project Manager at <strong>Ipsos</strong>, in the CX Platform team, on a work-study programme alongside my Data & AI engineering degree at <strong>ECE Paris</strong>. My field is <strong>customer experience</strong>: understanding what customers go through so that teams can serve them better.",
      p2: "I have followed that thread from the start. At <strong>CAD.42</strong>, I built a dashboard that monitors more than 1,200 IoT sensors across 100+ construction sites. At <strong>InspiraTec</strong>, I automated the collection of 50+ qualified job offers a day. With <strong>Hupple Store</strong>, my online shop, I have made 353 sales. Each time I started from a problem and looked for <strong>the simplest solution</strong>.",
      p3: "I come from Cotonou, Benin, and I have worked in international teams in Belgium and Spain. I look for solutions wherever they are: in data, AI, automation, design or graphics. And I always keep in mind <em>who it is for, and why</em>.",
      chips: [
        { label: "Location", value: "Paris, France" },
        { label: "Position", value: "Junior Project Manager at Ipsos" },
        { label: "Team", value: "CX Platform, customer experience" },
        { label: "Rhythm", value: "1 month at work / 1 month at ECE" },
        { label: "Level", value: "Engineering degree, ECE Paris (Master's level)" },
        { label: "Languages", value: "French (native), English (professional)" },
      ],
    },
    experience: [
      {
        yr: "Since Sept. 2026", ph: "Work-study", role: "Junior Project Manager, IT Platforms",
        bullets: [
          "With the team, I run our clients' customer experience programmes on Medallia",
          "I use Medallia every day and keep going deeper into its advanced features",
          "I document processes to spot what can be automated",
        ],
        tags: ["Medallia", "Customer experience", "Project management", "Documentation", "Automation"],
        detail: {
          brief: "I work at Ipsos, in the CX Platform team. It runs the customer experience programmes of Ipsos clients on Medallia.",
          role: "Junior Project Manager, IT Platforms. I alternate one month at the company and one month at ECE Paris, where I am completing my engineering degree.",
          result: "The assignment is ongoing. I use Medallia every day and I look for places where automation can save the team time.",
          steps: [
            { title: "Understanding the programmes", desc: "I learned how the customer experience programmes work and how the team keeps them running day to day." },
            { title: "Working in Medallia", desc: "I use the platform daily and go deeper into its advanced features with each project." },
            { title: "Document, then automate", desc: "I document the team's processes to spot repetitive tasks and suggest simple automations." },
          ],
          facts: [
            { k: "CX Platform team, customer experience" },
            { k: "One month at Ipsos, one month at ECE" },
            { k: "In the role since September" },
          ],
        },
      },
      {
        yr: "March › June 2026", ph: "4-month internship", role: "Data Analyst",
        bullets: [
          "I deployed a real-time dashboard for 1,200+ IoT sensors across 100+ construction sites",
          "I created health scores per project to anticipate failures in the field",
          "I trained 5 colleagues and supported the adoption of Claude",
        ],
        detail: {
          brief: "CAD.42 monitors construction sites with connected sensors. There was no tool to see, live, the state of more than 1,200 sensors spread across more than 100 sites.",
          role: "Data Analyst intern. I designed how the data is organised, built the dashboard, then put it into service and trained the teams.",
          result: "The dashboard runs in production. Five colleagues use it after training, and the Operations Department has adopted Claude in its work.",
          steps: [
            { title: "Bringing the data in", desc: "I built the collection of sensor data through APIs, then its cleaning and storage, so that the screen updates continuously." },
            { title: "The dashboard in Python", desc: "With Dash, I developed a dashboard showing the sensors site by site, with automatic alerts and a health score per project." },
            { title: "Moving to Node.js", desc: "I migrated the tool to Node.js so it stays fast in real time across more than 100 sites at once." },
            { title: "Training and support", desc: "I trained five colleagues on the tool, then supported the Operations Department in adopting Claude." },
          ],
          facts: [
            { v: "1,200+", k: "sensors monitored live" },
            { k: "construction sites covered" },
            { k: "colleagues trained" },
          ],
        },
      },
      {
        yr: "June › Aug. 2025", ph: "2-month internship", role: "Data Analyst & Product Management",
        bullets: [
          "I built the MVP of a tech recruitment platform, with automated matching in n8n",
          "I automated the collection of 50+ qualified offers and profiles a day",
          "I brought everything together in a Power BI dashboard to support decisions",
        ],
        detail: {
          brief: "InspiraTec is a tech recruitment startup. It wanted a platform able to match job offers and candidates automatically. Everything had to be built, starting with the data.",
          role: "Data Analyst and Product Management. I collected the data, built the automations and the dashboard, and acted as the link with the product side.",
          result: "A working MVP, more than 50 qualified offers and profiles collected every day, and a Power BI dashboard used by the sales team.",
          steps: [
            { title: "Collecting the offers", desc: "I automated collection from the main tech job platforms, with filtering to keep only qualified offers and profiles." },
            { title: "Automating the matching", desc: "I built n8n workflows that match offers and candidates, score them and notify the team." },
            { title: "Organising the data", desc: "I designed the Supabase database that brings together offers, candidates and scores." },
            { title: "Supporting decisions", desc: "I gathered the indicators in a Power BI dashboard for the sales team." },
          ],
          facts: [
            { k: "qualified offers and profiles a day" },
            { k: "month internship" },
            { k: "MVP delivered" },
          ],
        },
      },
    ],
    skills: [
      { t: "Languages & Analysis", d: "Python every day, with Pandas and Scikit-learn. SQL to query cleanly, Node.js when real time is needed, as for the CAD.42 dashboard." },
      { t: "Business Intelligence", d: "I build dashboards people actually open. At InspiraTec, the sales team tracked its offers in Power BI; at CAD.42, construction sites were read in Dash." },
      { t: "Data Engineering & Cloud", d: "I move data from the source to the dashboard: collection through APIs, storage in PostgreSQL or Supabase, all packaged in Docker." },
      { t: "Automation & AI", d: "Anything repetitive, I try to automate. n8n workflows for my shop's orders, scraping at InspiraTec, Claude to go faster on the rest." },
      { t: "Product & Web Analytics", d: "I look at where visitors drop off before buying. On Hupple Store, I follow every step, from the Meta ad to the payment." },
      { t: "Design & Graphics", d: "Carefully made interfaces, visuals and charts, because a well presented tool is a tool people use." },
      { t: "Tools & Methods", d: "Git so nothing gets lost, agile methods to move in small steps, and Medallia, which I use every day at Ipsos." },
    ],
    softSkills: [
      { t: "Product vision" }, { t: "Rigour" }, { t: "Autonomy" }, { t: "Clear explanations" }, { t: "Content creation" },
      { t: "Team spirit" }, { t: "Curiosity" }, { t: "Designer's eye" }, { t: "Adaptability" },
    ],
    projects: [
      {
        client: "Erasmus+ · University of Zaragoza · July 2026",
        title: "CaRental, cutting costs without making customers wait",
        tags: ["JaamSim", "Simulation", "Python", "Optimisation", "English"],
        media: [{ alt: "Results slide: trade-off between cost and service quality for each scenario" }, { alt: "The CaRental team in front of its presentation" }],
        detail: {
          brief: "An airport car rental agency wanted to know which shuttle fleet costs the least while keeping at least 85% of customers satisfied.",
          role: "I was in charge of the data analysis and the presentation, in an international team of four.",
          result: "We compared more than 100 scenarios and selected a configuration at €6.54 per customer, presented in English at the University of Zaragoza.",
          steps: [
            { title: "Framing the problem", desc: "We turned the agency's question into a measurable goal: the lowest cost per customer, with at least 85% of customers satisfied." },
            { title: "Simulating the service", desc: "We modelled the shuttles and the rental desk in JaamSim, a simulation software." },
            { title: "Comparing the scenarios", desc: "I analysed more than 100 configurations in Python to find the best trade-off between cost and service quality." },
            { title: "Presenting in English", desc: "I presented the results and our recommendation to the programme's jury." },
          ],
          facts: [
            { k: "scenarios simulated" },
            { v: "€6.54", k: "per customer, the selected configuration" },
            { v: "85%", k: "of customers satisfied, at minimum" },
          ],
          gallery: [
            { alt: "The Erasmus+ group gathered on the main staircase of the University of Zaragoza", cap: "Zaragoza, July 2026: the Erasmus+ programme group" },
            { alt: "The CaRental team in front of its first slide", cap: "Our team on presentation day" },
            { alt: "The CaRental team in front of the slide showing each member's role", cap: "My part of the work: data analysis and presentation" },
          ],
        },
      },
      {
        client: "My business · since Feb. 2026",
        title: "Hupple Store, e-commerce data",
        tags: ["n8n", "Webhooks", "KPI", "E-commerce", "Design"],
        media: [{ alt: "Home page of the Hupple Store shop, with its three featured bundles" }],
        detail: {
          brief: "I launched a digital guides shop on my own, with remote customers and a small advertising budget. Orders had to process themselves and I needed to see where every sale stood.",
          role: "Founder. I create the products and the visuals, build the automations and follow the numbers.",
          result: "353 sales and 314 customers, mostly in 14 African countries.",
          steps: [
            { title: "Capturing every event", desc: "Webhooks record every visit, cart, order and payment, and send them to n8n live." },
            { title: "Automating the tasks", desc: "n8n workflows follow up abandoned carts, notify me of each order and keep the data up to date." },
            { title: "Choosing the right indicators", desc: "I defined the steps that lead from a visit to a purchase, to measure where visitors drop off and what each product brings in." },
            { title: "Daily follow-up", desc: "A dashboard shows me conversion, revenue per product and anything unusual every day." },
          ],
          facts: [{ k: "sales" }, { k: "customers" }, { k: "African countries" }],
        },
      },
      {
        client: "Personal project · 2026",
        title: "MyFinanx, personal finance",
        tags: ["PWA", "JavaScript", "Vite", "AI", "Receipt scanning"],
        media: [{ alt: "MyFinanx dashboard on desktop, with demo data" }, { alt: "MyFinanx on a phone, with demo data" }],
        detail: {
          brief: "Budget apps often require an account and keep everything on their servers. MyFinanx lets you follow your budget without handing over your data.",
          role: "I did everything myself, from the design to going live.",
          result: "The app is online and free, and the data stays on the device.",
          steps: [
            { title: "Starting from the use", desc: "I designed an installable app, built for the phone first." },
            { title: "Keeping data at home", desc: "No account to create: the budget data stays with the user." },
            { title: "Advice from AI", desc: "I integrated a language model that comments on the budget and suggests ways to save." },
            { title: "Receipt scanning", desc: "The app reads receipts and PDF statements, to avoid typing everything by hand." },
          ],
          facts: [{ k: "account to create" }, { v: "100%", k: "of the data on the device" }, { v: "AI", k: "advice on the budget" }],
          gallery: [
            { alt: "MyFinanx dashboard on desktop, with demo data", cap: "The dashboard on desktop (demo data)" },
            { alt: "MyFinanx on a phone, with demo data", cap: "The same app on a phone" },
          ],
        },
      },
      {
        client: "International · April 2025, Belgium",
        title: "Football analytics, OHL",
        tags: ["Python", "Pandas", "Seaborn", "SQL", "English"],
        media: [{ alt: "Heatmap of OH Leuven's successful actions in the first half" }, { alt: "Heatmap of OH Leuven's successful actions in the second half" }],
        detail: {
          brief: "During the BUSIT Week at UC Leuven-Limburg, in Belgium, the football club OH Leuven entrusted us with its performance data. We were an international team of five.",
          role: "Data Analyst in the team. I handled the indicators and the charts that make the results readable.",
          result: "We presented concrete recommendations to experts from the club, based on a full season of match and player data.",
          steps: [
            { title: "Exploring the data", desc: "We went through the club's dataset: player statistics, match data, physical and tactical measures over a season." },
            { title: "Building the indicators", desc: "I combined several measures to assess each player's contribution: expected goals, pressing intensity, passing networks, defensive work." },
            { title: "Making it readable", desc: "I produced static and interactive charts with Seaborn and Matplotlib to explain the results to non-technical people." },
            { title: "Presenting to the club", desc: "We presented, in English, our recommendations on recruitment, tactical patterns and physical load management." },
          ],
          facts: [{ k: "people in the team" }, { k: "full season of data" }, { k: "presentation in English" }],
          gallery: [
            { alt: "Heatmap of OH Leuven's successful actions in the first half", cap: "OH Leuven's successful actions, first half" },
            { alt: "Heatmap of OH Leuven's successful actions in the second half", cap: "OH Leuven's successful actions, second half" },
          ],
        },
      },
    ],
    terrain: {
      photos: [
        { alt: "The Erasmus+ group gathered on the main staircase of the University of Zaragoza", cap: "Zaragoza, July 2026: the Erasmus+ programme group" },
        { alt: "The CaRental team in front of its first slide", cap: "Our CaRental team on presentation day" },
        { alt: "The CaRental team in front of the slide showing each member's role", cap: "My part of the work: data analysis and presentation" },
      ],
    },
    testimonial: {
      q: "He has that rare dual skill: a Product Manager's vision focused on the user, and a Data Engineer's rigour in technical execution. Autonomous, analytical and proactive, he turned our data into concrete strategic levers. I highly recommend him.",
      rl: "Head of Business · InspiraTec (translated from French)",
      meta: "Direct manager · Internship, June to August 2025",
    },
    education: [
      { deg: "Engineering degree, Data & AI", sch: "École Centrale d'Électronique (ECE) · Paris" },
      { deg: "Bachelor (BUT) in Data Science", sch: "IUT de Villetaneuse · Université Sorbonne Paris Nord" },
      { deg: "Bachelor's degree, IT Security & Networks", sch: "Les Cours Sonou · Benin" },
    ],
    contactLead: "A project, a question, or just want to talk data, AI or design? Write to me, I reply within 48 hours.",
    social: [{}, {}, { label: "Email" }],
  },

  /* Interface strings, keyed by the French text used in app.jsx */
  ui: {
    "À propos": "About", "Compétences": "Skills", "Softskills": "Soft skills", "Expériences": "Experience", "Projets": "Projects", "Formations": "Education", "Contact": "Contact",
    "Mon CV": "My CV", "Voir mes projets": "See my projects", "En savoir plus": "Learn more",
    "Ce que je sais": "What I can", "faire": "do",
    "Comment je": "How I", "travaille": "work",
    "Où j'ai": "Where I", "travaillé": "worked", "appris": "studied",
    "Ce que j'ai": "What I", "construit": "built",
    "En poste": "Current role", "Détails": "Details", "En cours": "In progress",
    "En images": "In pictures", "Mon rôle": "My role", "Le résultat": "The result",
    "Ce qu'en dit ma responsable": "What my manager says",
    "Retour aux expériences": "Back to experience", "Retour aux projets": "Back to projects", "Retour": "Back",
    "Comment ça s'est passé": "How it went", "Comment je m'y suis pris": "How I went about it",
    "Me contacter": "Contact me", "Voir le projet": "See the project",
    "Expérience suivante": "Next experience", "Projet suivant": "Next project",
    "On se parle ?": "Let's talk?", "On se parle": "Let's talk", "Une idée, un projet ?": "An idea, a project?",
    "ÉCRIVEZ-MOI · JE RÉPONDS SOUS 48 H · ": "WRITE TO ME · I REPLY WITHIN 48 HOURS · ",
    "Haut de page": "Back to top", "Moi, c'est Emmanuel": "Hi, I'm Emmanuel", "Télécharger mon CV": "Download my CV",
    "Voir les détails du projet ": "See the details of the project ", "Détails du projet ": "Project details: ", "Détails : ": "Details: ", " chez ": " at ",
    "Remonter en haut": "Back to top",
    "Votre e-mail": "Your email", "Objet": "Subject", "Message": "Message", "Envoyer": "Send", "Envoi…": "Sending…",
    "De quoi voulez-vous parler ?": "What would you like to talk about?", "Bonjour Emmanuel,": "Hello Emmanuel,",
    "Message envoyé.": "Message sent.", "Merci, je vous réponds vite.": "Thank you, I will reply soon.", "L'envoi a échoué. Réessayez dans un instant.": "Sending failed. Please try again in a moment.", "Menu": "Menu", "Langue": "Language",
  },
};
