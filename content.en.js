/* English version. Only the texts: everything else (links, images, numbers) comes from content.js.
   To add a language, copy this file (content.xx.js), translate it, register it in index.html
   and add its code to LANGS in app.jsx. No em-dashes in the copy. */
window.PORTFOLIO_I18N = window.PORTFOLIO_I18N || {};
window.PORTFOLIO_I18N.en = {
  content: {
    role: "Data & AI Engineer",
    hero: {
      mission: "I combine AI, automation and design to help teams move faster.",
      lead: "Junior Project Manager at Ipsos BVA, in the Customer Experience & Platforms team, and Data & AI engineering student at ECE Paris. What I enjoy most is finding a simple solution to a problem.",
      photoAlt: "Portrait of Emmanuel Danton",
      tags: {
        poste: { v: "Junior Project Manager", k: "Ipsos BVA - customer experience" },
        capteurs: "1,200+ IoT sensors monitored",
        ventes: { k: "sales - Hupple Store" },
      },
    },
    marquee: ["Data analysis", "Data visualisation", "Graphic design", "Adobe Suite", "Automation", "Artificial intelligence", "Project management", "Customer experience", "Dashboards", "Content creation", "Data storytelling", "UI design"],
    about: {
      quote: "My common thread: understand a need, analyse the data and <strong>take action</strong>.",
      p1: "I am a Data & AI engineering student at <strong>ECE Paris</strong> and a work-study Junior Project Manager at <strong>Ipsos BVA</strong>, in the <strong>Customer Experience & Platforms</strong> team.",
      p2: "My path has led me to work on very different subjects. At <strong>CAD.42</strong>, I worked on data analysis and visualisation to answer operational problems, with a dashboard that tracks more than 1,200 IoT sensors across about a hundred construction sites. I am also building <strong>Hupple Store</strong>, an e-commerce shop for French-speaking Africa, where I handle acquisition, advertising campaigns, performance analysis, product strategy and copywriting. It is <strong>my playground</strong>: it lets me test, measure and adjust my decisions based on real data, across more than 360 sales.",
      p3: "Today, at Ipsos BVA, I am building my skills in project management, coordination and understanding client needs. Originally from Cotonou, Benin, I have also worked in international teams in Belgium and Spain. In the long run, I want to bring these experiences together to work on projects <em>at the crossroads of data, AI and business</em>.",
      chips: [
        { label: "Location", value: "Paris, France" },
        { label: "Position", value: "Junior Project Manager at Ipsos BVA" },
        { label: "Team", value: "Customer Experience & Platforms" },
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
          brief: "I am a work-study student at Ipsos BVA, in the Customer Experience & Platforms team. The team runs the customer experience programmes of Ipsos clients on Medallia.",
          role: "Junior Project Manager, IT Platforms. I coordinate client programmes with the team, understand needs and look for what can be simplified or automated.",
          result: "The assignment is ongoing. I use Medallia every day and I look for places where automation can save the team time.",
          steps: [
            { title: "Understanding the programmes", desc: "I learned how the customer experience programmes work and how the team keeps them running day to day." },
            { title: "Working in Medallia", desc: "I use the platform daily and go deeper into its advanced features with each project." },
            { title: "Document, then automate", desc: "I document the team's processes to spot repetitive tasks and suggest simple automations." },
          ],
          facts: [
            { k: "Customer Experience & Platforms team" },
            { k: "the platform I use every day" },
            { k: "In the role since September" },
          ],
        },
      },
      {
        yr: "March - June 2026", ph: "4-month internship", role: "Data Analyst",
        bullets: [
          "1,200+ sensors monitored live across 100+ sites, thanks to the dashboard I deployed",
          "Failures anticipated in the field, thanks to a health score per project",
          "5 colleagues trained on the tool, and Claude adopted by the Operations Department",
        ],
        detail: {
          brief: "CAD.42's teams now see, live, the state of more than 1,200 sensors across more than 100 sites. Before, no tool made that possible.",
          role: "Data Analyst intern. I designed how the data is organised, built the dashboard, then put it into service and trained the teams.",
          result: "The dashboard runs in production. Five colleagues use it after training, and the Operations Department has adopted Claude in its work.",
          steps: [
            { title: "A screen always up to date", desc: "I built the collection of sensor data through APIs, its cleaning and its storage. Which means the screen updates on its own, continuously." },
            { title: "Seeing problems before they happen", desc: "With Dash, I developed a site-by-site dashboard with automatic alerts and a health score per project, to step in before a failure." },
            { title: "Staying fast at scale", desc: "I migrated the tool to Node.js. The result: it stays fast, even with more than 100 sites followed at once." },
            { title: "An autonomous team", desc: "I trained five colleagues on the tool, then supported the Operations Department in adopting Claude." },
          ],
          facts: [
            { v: "1,200+", k: "sensors monitored live" },
            { k: "construction sites covered" },
            { k: "colleagues trained" },
          ],
        },
      },
      {
        yr: "June - Aug. 2025", ph: "2-month internship", role: "Data Analyst & Product Management",
        bullets: [
          "50+ qualified offers and profiles collected every day, with no manual entry",
          "An MVP that matches offers and candidates on its own, built with n8n",
          "A Power BI dashboard so the sales team decides based on numbers",
        ],
        detail: {
          brief: "InspiraTec got a platform that matches offers and candidates on its own, fed every day by more than 50 qualified offers and profiles. This tech recruitment startup started from scratch, beginning with the data.",
          role: "Data Analyst and Product Management. I collected the data, built the automations and the dashboard, and acted as the link with the product side.",
          result: "A working MVP, more than 50 qualified offers and profiles collected every day, and a Power BI dashboard used by the sales team.",
          steps: [
            { title: "Offers that come in on their own", desc: "I automated collection from the main tech job platforms, with filtering. Which means the team only receives qualified offers and profiles." },
            { title: "The right candidate for the right offer", desc: "I built n8n workflows that match offers and candidates, score them and notify the team." },
            { title: "Everything in one place", desc: "I designed the Supabase database that brings together offers, candidates and scores." },
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
      { t: "Making data talk", d: "I turn raw data into clear answers. At CAD.42, the state of more than 1,200 sensors could be read at a glance. Python and SQL every day, Node.js when real time is needed." },
      { t: "Making numbers readable", d: "Dashboards a team actually opens to make decisions. At InspiraTec, the sales team tracked its offers in Power BI; at CAD.42, five colleagues followed their sites live." },
      { t: "Getting the right data in", d: "Data arrives on its own, clean and up to date, where it is needed. At CAD.42, the screen updated continuously across more than 100 sites. Behind it: APIs, a PostgreSQL or Supabase database, Docker." },
      { t: "Saving teams time", d: "Anything repetitive, I hand over to the machine. On Hupple Store, every order processes itself; at InspiraTec, more than 50 offers and profiles came in every day without manual entry." },
      { t: "Understanding what makes people buy", d: "I spot where visitors drop off before buying, then I adjust. On Hupple Store, more than 360 sales, with prices, offers and ads corrected based on the numbers." },
      { t: "Making tools people want to use", d: "A well presented tool is a tool people use. I design the interfaces, visuals and charts of my projects myself, from MyFinanx to the Hupple Store ads." },
      { t: "Teamwork without losing anything", d: "Tracked, documented work, so a colleague can pick it up without me. I move in small steps, and I use Medallia every day at Ipsos BVA." },
    ],
    softSkills: [
      { t: "Product vision" }, { t: "Rigour" }, { t: "Autonomy" }, { t: "Clear explanations" }, { t: "Content creation" },
      { t: "Team spirit" }, { t: "Curiosity" }, { t: "Designer's eye" }, { t: "Adaptability" },
    ],
    projects: [
      {
        client: "Erasmus+ - University of Zaragoza - July 2026",
        title: "CaRental, €6.54 per customer with 85% satisfied",
        desc: "The cheapest shuttle fleet that keeps at least 85% of customers satisfied: €6.54 per customer. We found it by comparing more than 100 scenarios, in an international team of four, for an airport rental agency. Erasmus+ project at the University of Zaragoza.",
        tags: ["JaamSim", "Simulation", "Python", "Optimisation", "English"],
        media: [{ alt: "Results slide: trade-off between cost and service quality for each scenario" }, { alt: "The CaRental team in front of its presentation" }],
        detail: {
          brief: "We found the cheapest shuttle fleet that keeps at least 85% of customers satisfied: €6.54 per customer. The question came from an airport car rental agency.",
          role: "In an international team of four, I was in charge of the data analysis and the presentation of the results.",
          result: "After comparing more than 100 scenarios, we recommended a configuration at €6.54 per customer, presented in English at the University of Zaragoza.",
          steps: [
            { title: "A measurable goal", desc: "We turned the agency's question into a measurable goal: the lowest cost per customer, with at least 85% of customers satisfied." },
            { title: "Testing without risk", desc: "We reproduced the shuttles and the rental desk in JaamSim, a simulation software. Which means we could try anything without touching the real agency." },
            { title: "Finding the best trade-off", desc: "I analysed more than 100 configurations in Python to find the best trade-off between cost and service quality." },
            { title: "Convincing the jury", desc: "I presented the results and our recommendation, in English, to the programme's jury." },
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
        client: "Personal project - since Feb. 2026",
        title: "Hupple Store, 360+ sales in 14 countries",
        desc: "More than 360 sales and 320 customers in 14 African countries. Hupple Store is a shop of digital guides that I build on my own: advertising, performance analysis, offers, copy and automated orders.",
        tags: ["n8n", "Webhooks", "KPI", "E-commerce", "Design"],
        media: [{ alt: "Home page of the Hupple Store shop, with its three featured bundles" }],
        detail: {
          brief: "More than 360 sales and 320 customers in 14 African countries, on a limited advertising budget. Orders process themselves and every decision rests on numbers. It is also my playground: I test, measure and adjust based on real data.",
          role: "A project I run on my own. I handle acquisition, advertising campaigns, performance analysis, product strategy and copywriting, as well as the automations.",
          result: "More than 360 sales and 320 customers, mostly in 14 African countries.",
          steps: [
            { title: "Bringing in the right customers", desc: "I launch and manage Meta ad campaigns, country by country, and write the copy for the ads and product pages." },
            { title: "Orders that process themselves", desc: "Webhooks and n8n workflows process every order and follow up abandoned carts. Which means customers get their guides right away, even at night." },
            { title: "Seeing where customers drop off", desc: "I follow the journey from the ad to the payment to see where visitors drop off and what each product brings in." },
            { title: "Deciding on numbers", desc: "A daily dashboard shows me conversion and revenue per product; I adjust prices, offers and campaigns based on these numbers." },
          ],
          facts: [{ k: "sales" }, { k: "customers" }, { k: "African countries" }],
          gallery: [
            { alt: "Hupple Store sales tracking dashboard: sales per month, share of sales by country, purchase hours", cap: "My sales tracking dashboard (real data, in volumes and percentages)" },
            { alt: "Home page of the Hupple Store shop", cap: "The online shop" },
            { alt: "WhatsApp screenshot of a customer message after receiving her ebooks", cap: "A customer review received on WhatsApp" },
          ],
        },
      },
      {
        client: "Personal project - 2026",
        title: "MyFinanx, your budget without giving away your data",
        desc: "Track your spending without creating an account or handing over your data. MyFinanx is a budget app I designed and built on my own: it installs on a phone, gives AI advice and reads receipts.",
        tags: ["PWA", "JavaScript", "Vite", "AI", "Receipt scanning"],
        media: [{ alt: "MyFinanx dashboard on desktop, with demo data" }, { alt: "MyFinanx on a phone, with demo data" }],
        detail: {
          brief: "With MyFinanx, you follow your budget without creating an account: the data stays on the phone. Other budget apps often keep everything on their servers.",
          role: "I led the project end to end, from design to going live.",
          result: "A free online app where you follow your budget without typing everything by hand or handing over your data.",
          steps: [
            { title: "Always in your pocket", desc: "I designed an app that installs like a real app, built for the phone first." },
            { title: "Data that stays with you", desc: "No account to create: the budget data stays with the user." },
            { title: "Ideas to save money", desc: "I integrated an AI that comments on the budget and suggests ways to save." },
            { title: "No more typing by hand", desc: "The app reads receipts and PDF statements, to avoid typing everything by hand." },
          ],
          facts: [{ k: "account to create" }, { v: "100%", k: "of the data on the device" }, { v: "AI", k: "advice on the budget" }],
          gallery: [
            { alt: "MyFinanx dashboard on desktop, with demo data", cap: "The dashboard on desktop (demo data)" },
            { alt: "MyFinanx on a phone, with demo data", cap: "The same app on a phone" },
            { alt: "The MyFinanx AI advisor answering a budget question, with demo data", cap: "The AI advisor, answering from the budget (demo data)" },
            { alt: "MyFinanx Budget tab: income and spending categories", cap: "The budget plan, with AI allocation" },
            { alt: "MyFinanx Spending tab: monthly total and breakdown by category", cap: "Monthly spending, by category" },
            { alt: "MyFinanx Goals tab: emergency fund and travel plan", cap: "Savings goals" },
            { alt: "MyFinanx Statistics screen: income, spending, savings rate and breakdown", cap: "Statistics: income, spending and savings rate" },
          ],
        },
      },
      {
        client: "International - April 2025, Belgium",
        title: "Football OHL, a season of matches turned into advice",
        desc: "Recommendations on recruitment, playing style and physical load, presented to the experts of the OH Leuven club. We drew them from a full season of data, in an international team, during the BUSIT Week at UC Leuven-Limburg in Belgium.",
        tags: ["Python", "Pandas", "Seaborn", "SQL", "English"],
        media: [{ alt: "Heatmap of OH Leuven's successful actions in the first half" }, { alt: "Heatmap of OH Leuven's successful actions in the second half" }],
        detail: {
          brief: "We presented recommendations on recruitment, playing style and the players' physical load to the experts of the OH Leuven club, drawn from a full season of data. It was during the BUSIT Week at UC Leuven-Limburg, in Belgium.",
          role: "In an international team of five, I built the indicators and the charts that make the results readable.",
          result: "We presented concrete recommendations to experts from the club, based on a full season of match and player data.",
          steps: [
            { title: "Understanding the season", desc: "We went through the club's dataset: player statistics, match data, physical and tactical measures over a season." },
            { title: "Measuring each player's contribution", desc: "I combined several measures, such as expected goals, pressing intensity or defensive work. Which means players could be compared on what they really bring to the team." },
            { title: "Charts everyone understands", desc: "I produced static and interactive charts with Seaborn and Matplotlib to explain the results to non-technical people." },
            { title: "Convincing the club", desc: "We presented, in English, our recommendations on recruitment, tactical patterns and physical load management." },
          ],
          facts: [{ k: "people in the team" }, { k: "full season of data" }, { k: "presentation in English" }],
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
      rl: "Head of Business - InspiraTec (translated from French)",
      meta: "Direct manager - Internship, June to August 2025",
    },
    education: [
      { deg: "Engineering degree, Data & AI", sch: "École Centrale d'Électronique (ECE) - Paris" },
      { deg: "Bachelor (BUT) in Data Science", sch: "IUT de Villetaneuse - Université Sorbonne Paris Nord" },
      { deg: "Bachelor's degree, IT Security & Networks", sch: "Les Cours Sonou - Benin" },
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
    "ÉCRIVEZ-MOI - JE RÉPONDS SOUS 48 H - ": "WRITE TO ME - I REPLY WITHIN 48 HOURS - ",
    "Haut de page": "Back to top", "Moi, c'est Emmanuel": "Hi, I'm Emmanuel", "Télécharger mon CV": "Download my CV",
    "Voir les détails du projet ": "See the details of the project ", "Détails du projet ": "Project details: ", "Détails : ": "Details: ", " chez ": " at ",
    "Remonter en haut": "Back to top",
    "Quelle version de mon CV ?": "Which version of my CV?", "Choisissez la langue, le PDF se télécharge.": "Pick a language, the PDF will download.", "Fermer": "Close", "Image": "Image", "Image précédente": "Previous image", "Image suivante": "Next image",
    "Votre e-mail": "Your email", "Objet": "Subject", "Message": "Message", "Envoyer": "Send", "Envoi…": "Sending…",
    "De quoi voulez-vous parler ?": "What would you like to talk about?", "Bonjour Emmanuel,": "Hello Emmanuel,",
    "Message envoyé.": "Message sent.", "Merci, je vous réponds vite.": "Thank you, I will reply soon.", "L'envoi a échoué. Réessayez dans un instant.": "Sending failed. Please try again in a moment.", "Menu": "Menu", "Langue": "Language",
  },
};
