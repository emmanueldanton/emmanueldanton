/* global React, ReactDOM */
const { useState, useEffect } = React;
const D = window.PORTFOLIO;

/* Formspree: créez un compte gratuit sur formspree.io et remplacez ci-dessous */
const FORMSPREE_ID = "YOUR_FORM_ID";

const NAV = [
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "softskills", label: "Softskills" },
  { id: "experiences", label: "Expériences" },
  { id: "projets", label: "Projets" },
  { id: "formation", label: "Formations" },
];

/* ---------- PLACEHOLDER IMAGE SLOT ---------- */
var PROJ_ICONS = {
  "01": {
    main: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><line x1="13.25" y1="16.25" x2="15" y2="18"/></svg>,
    sec:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>,
  },
  "02": {
    main: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    sec:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  },
  "03": {
    main: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
    sec:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  },
  "04": {
    main: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    sec1: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    sec2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  },
};

function PlaceholderSlot({ className, icon, label }) {
  return (
    <div className={"img-slot-ph" + (className ? " " + className : "")}>
      {icon
        ? <div className="slot-icon">{icon}</div>
        : <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      }
      {label && <span className="slot-label">{label}</span>}
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ scrolled, active, onOpenAbout }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  function handleLink(e, id) {
    e.preventDefault();
    close();
    window.dispatchEvent(new Event('nav:close-overlay'));
    setTimeout(function() {
      if (id === 'apropos') {
        onOpenAbout();
      } else {
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }

  function handleBrand(e) {
    e.preventDefault();
    close();
    window.dispatchEvent(new Event('nav:close-overlay'));
    setTimeout(function() { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50);
  }

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "") + (open ? " open" : "")}>
      <div className="wrap">
        <a href="#top" className="brand" onClick={handleBrand}><span className="dot"></span>E. Danton</a>
        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""} onClick={(e) => handleLink(e, n.id)}>{n.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href={D.cv} download className="nav-cta">Mon CV <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></a>
          <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className="nav-menu">
        {NAV.map((n) => (
          <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""} onClick={(e) => handleLink(e, n.id)}>{n.label}</a>
        ))}
        <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>Contact</a>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero({ onOpenAbout }) {
  useEffect(function() {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    function onMove(e) {
      var giant = document.querySelector('.hero-giant');
      var visual = document.querySelector('.hero-center-visual');
      if (!giant || !visual) return;
      var x = window.innerWidth / 2 - e.clientX;
      var y = window.innerHeight / 2 - e.clientY;
      giant.style.transform =
        'translate(calc(-50% + ' + (x / 40) + 'px), calc(-50% + ' + (y / 40) + 'px))';
      visual.style.transform =
        'translate(calc(-50% + ' + (-x / 25) + 'px), calc(-50% + ' + (-y / 25) + 'px))';
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    return function() { window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <React.Fragment>
      <section className="hero-fluid" id="top">
        {/* Titre géant en arrière-plan ·parallaxe couche 1 */}
        <h1 className="hero-giant">
          <span>{D.firstName}</span>
          <span>{D.lastName}</span>
        </h1>

        {/* Barre inférieure ·description + boutons */}
        <div className="hero-bottom-bar">
          <div className="wrap hero-bottom-inner">
            <p className="hero-lead-text">{D.hero.lead}</p>
            <div className="hero-actions-bottom">
              <button className="btn btn-primary" onClick={onOpenAbout}>En savoir plus <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee skills ·séparé du hero */}
      <div className="hero-marquee">
        <div className="track">
          {[0, 1].map(function(k) {
            return <span key={k}>PYTHON · SQL · NODE.JS · POWER BI · DASH · STREAMLIT · MACHINE LEARNING · NLP · n8n · WEB SCRAPING · PROMPT ENGINEERING · DOCKER · GCP · API REST · SUPABASE · DATA STORYTELLING&nbsp;</span>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------- STATS BAND ---------- */
function StatsBand() {
  return (
    <div className="statsband">
      <div className="wrap statsband-grid">
        {D.stats.map((s, i) => (
          <div className="sb-cell" key={i} data-reveal style={{ "--d": i * 70 + "ms" }}>
            <div className="sb-num">
              {(s.u === "+" || s.u === "<") && <span className="u">{s.u}</span>}
              {s.num}
              {s.u !== "+" && s.u !== "<" && s.u && <span className="u">{s.u}</span>}
            </div>
            <div className="sb-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section className="section" id="apropos">
      <div className="wrap">
        <h2 className="section-title" data-reveal>À propos</h2>
        <div className="about-grid">
          <div>
            <p data-reveal dangerouslySetInnerHTML={{ __html: D.about.p1 }}></p>
            <p data-reveal style={{ "--d": "80ms" }} dangerouslySetInnerHTML={{ __html: D.about.p2 }}></p>
            <p data-reveal style={{ "--d": "160ms" }} dangerouslySetInnerHTML={{ __html: D.about.p3 }}></p>
          </div>
          <div>
            <img src="assets/portrait.jpg" alt={D.name} className="about-photo" data-reveal style={{ "--d": "60ms" }} />
            <div className="chips" data-reveal style={{ "--d": "120ms" }}>
              {D.about.chips.map((c, i) => (
                <div className="chip" key={i}>
                  <div className="chip-l">{c.label}</div>
                  <div className="chip-v">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  return (
    <section className="section alt" id="competences">
      <div className="wrap">
        <h2 className="section-title" data-reveal>Compétences</h2>
        <div className="skills">
          {D.skills.map((s, i) => (
            <div className="skill" key={i} data-reveal style={{ "--d": i * 45 + "ms" }}>
              <div className="n">{s.n}</div>
              <div>
                <div className="t">{s.t}</div>
                <div className="tags">{s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
              <div className="d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOFT SKILLS + TESTIMONIAL ---------- */
function SoftSkills() {
  const t = D.testimonial;
  return (
    <section className="section" id="softskills">
      <div className="wrap">
        <h2 className="section-title" data-reveal>Softskills</h2>
        <div className="softgrid">
          {D.softSkills.map((s, i) => (
            <div className="soft" key={i} data-reveal style={{ "--d": i * 55 + "ms" }}>
              <div className="soft-n">{String(i + 1).padStart(2, "0")}</div>
              <div className="soft-t">{s.t}</div>
              <div className="soft-d">{s.d}</div>
            </div>
          ))}
        </div>

        <figure className="tfeature" data-reveal>
          <div className="qmark">”</div>
          <blockquote>{t.q}</blockquote>
          <figcaption className="who">
            <a href={t.li} target="_blank" rel="noopener noreferrer" className="who-avatar-link" aria-label={"Voir le profil LinkedIn de " + t.nm}>
              <img src={t.photo} alt={t.nm} className="who-avatar" />
            </a>
            <div>
              <a href={t.li} target="_blank" rel="noopener noreferrer" className="nm nm-link">
                {t.nm}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{marginLeft:"5px",verticalAlign:"middle",opacity:.7}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="rl">{t.rl}</div>
              <div className="meta">{t.meta}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- DETAIL FOOTER (shared) ---------- */
function DetailFooter() {
  return (
    <footer className="detail-footer">
      <div className="detail-footer-inner">
        <span className="detail-footer-brand"><span className="dot"></span>{D.name}</span>
        <div className="detail-footer-links">
          <a href={"mailto:" + D.email}>{D.email}</a>
          <a href={D.cv} download>Télécharger CV</a>
        </div>
        <span className="detail-footer-copy">© 2026 · Data Analyst & BI</span>
      </div>
    </footer>
  );
}

/* ---------- EXPERIENCE DETAIL OVERLAY ---------- */
function ExperienceDetail({ x, onClose }) {
  useEffect(function() {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    window.addEventListener('nav:close-overlay', onClose);
    document.body.style.overflow = 'hidden';
    return function() {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('nav:close-overlay', onClose);
      document.body.style.overflow = '';
    };
  }, []);
  var d = x.detail;
  return (
    <div className="proj-detail-overlay" role="dialog" aria-modal="true" aria-label={"Détails — " + x.role + " chez " + x.co}>
      <div className="proj-detail-inner proj-detail-inner--noPad">
        <div className={"xpd-hero" + (x.live ? " xpd-hero--live" : "")}>
          <div className="xpd-hero-topbar">
            <button className="proj-detail-back xpd-back" onClick={onClose} aria-label="Fermer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              Retour
            </button>
          </div>
          <div className="xpd-hero-body">
            {x.logo && <img src={x.logo} alt={x.co} className="xpd-hero-logo" />}
            <div className="xpd-hero-info">
              {x.live && <div className="xpd-live-badge"><span className="live"></span>Poste actuel · En cours</div>}
              <h2 className="xpd-hero-role">{x.role}</h2>
              <div className="xpd-hero-meta">
                <span>{x.co}</span><span className="xpd-sep">·</span>
                <span>{x.yr}</span><span className="xpd-sep">·</span>
                <span>{x.ph}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="xpd-content">
          <div className="proj-detail-brief-grid">
            <div className="proj-detail-brief-block">
              <h4>Mission</h4>
              <p>{d.brief}</p>
            </div>
            <div className="proj-detail-brief-block">
              <h4>Mon rôle</h4>
              <p>{d.role}</p>
            </div>
            <div className="proj-detail-brief-block">
              <h4>Résultat</h4>
              <p>{d.result}</p>
            </div>
          </div>

          <p className="proj-detail-steps-label">Déroulé</p>
          <div className="proj-detail-steps">
            {d.steps.map(function(s) {
              return (
                <div className="proj-detail-step" key={s.n}>
                  <div className="proj-detail-step-n" aria-hidden="true">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="tags" style={{marginTop:"32px"}}>{x.tags.map(function(t) { return <span className="tag" key={t}>{t}</span>; })}</div>
        </div>

        <DetailFooter />
      </div>
    </div>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  var [openIdx, setOpenIdx] = useState(null);
  var openXp = openIdx !== null ? D.experience[openIdx] : null;
  return (
    <section className="section alt" id="experiences">
      <div className="wrap">
        <h2 className="section-title" data-reveal>Expériences</h2>
        <div className="ns-stack">
          {D.experience.map(function(x, i) {
            return (
              <div className={"nextstage" + (x.live ? " nextstage--live" : "")} key={i} data-reveal style={{ "--d": i * 80 + "ms" }}>
                <div className="ns-main">
                  {x.logo && <img src={x.logo} alt={x.co} className="ns-logo" />}
                  {x.live && <div className="ns-badge"><span className="live"></span>Poste actuel · En cours</div>}
                  <h3 className="ns-title">{x.role}</h3>
                  <p className="ns-desc">{x.detail && x.detail.brief}</p>
                  <div className="tags ns-tags">{x.tags.map(function(t) { return <span className="tag" key={t}>{t}</span>; })}</div>
                </div>
                <div className="ns-date">
                  <div className="ns-date-l">Période</div>
                  <div className="ns-date-v">{x.yr}</div>
                  <div className="ns-date-s">{x.ph} · {x.co.split(" · ")[0]}</div>
                  {x.detail && <button className="xp-detail-btn" style={{marginTop:"auto", alignSelf:"flex-end"}} onClick={function() { setOpenIdx(i); }}>Détails <span>→</span></button>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {openXp && <ExperienceDetail x={openXp} onClose={function() { setOpenIdx(null); }} />}
    </section>
  );
}

/* ---------- PROJECT DETAIL OVERLAY ---------- */
function ProjectDetail({ p, onClose }) {
  useEffect(function() {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    window.addEventListener('nav:close-overlay', onClose);
    document.body.style.overflow = 'hidden';
    return function() {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('nav:close-overlay', onClose);
      document.body.style.overflow = '';
    };
  }, []);

  var d = p.detail;
  var total = String(D.projects.length).padStart(2, '0');
  return (
    <div className="proj-detail-overlay" role="dialog" aria-modal="true" aria-label={"Détails du projet " + p.title}>
      <div className="proj-detail-inner">
        <div className="proj-detail-topbar">
          <button className="proj-detail-back" onClick={onClose} aria-label="Retour aux projets">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            Retour aux projets
          </button>
          <span className="proj-detail-pn">{p.pn} / {total}</span>
        </div>

        <h2 className="proj-detail-title">{p.title}</h2>
        <div className="proj-detail-tags">
          {p.tags.map(function(t) { return <span className="tag" key={t}>{t}</span>; })}
        </div>

        <div className="proj-detail-brief-grid">
          <div className="proj-detail-brief-block">
            <h4>Mission</h4>
            <p>{d.brief}</p>
          </div>
          <div className="proj-detail-brief-block">
            <h4>Mon rôle</h4>
            <p>{d.role}</p>
          </div>
          <div className="proj-detail-brief-block">
            <h4>Résultat</h4>
            <p>{d.result}</p>
          </div>
        </div>

        <p className="proj-detail-steps-label">Conception</p>
        <div className="proj-detail-steps">
          {d.steps.map(function(s) {
            return (
              <div className="proj-detail-step" key={s.n}>
                <div className="proj-detail-step-n" aria-hidden="true">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {p.url
          ? <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-primary">Voir le projet <span className="arr">↗</span></a>
          : <a href="#contact" className="btn btn-ghost" onClick={onClose}>Prendre contact <span className="arr">↗</span></a>
        }
        <DetailFooter />
      </div>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
function Project({ p, i, onOpen }) {
  return (
    <article className="project" data-reveal style={{ "--d": (i % 2) * 60 + "ms" }}>
      <div className="project-top">
        <div className="lead">
          <span className="pn">{p.pn}</span>
          <div>
            <div className="client">{p.client}</div>
            <h3 className="ptitle">{p.title}</h3>
          </div>
        </div>
        <div className="project-actions">
          {p.url && (
            <a href={p.url} className="live" target="_blank" rel="noreferrer">Voir le projet <span>↗</span></a>
          )}
          <button className="live" onClick={function() { onOpen(p.pn); }}>Conception <span>→</span></button>
        </div>
      </div>
      <div className="project-media">
        <PlaceholderSlot className="big" icon={PROJ_ICONS[p.pn] && PROJ_ICONS[p.pn].main} label="Aperçu à venir" />
        {p.slots === 3 ? (
          <div className="col">
            <PlaceholderSlot icon={PROJ_ICONS[p.pn] && PROJ_ICONS[p.pn].sec1} />
            <PlaceholderSlot icon={PROJ_ICONS[p.pn] && PROJ_ICONS[p.pn].sec2} />
          </div>
        ) : (
          <div className="col">
            <PlaceholderSlot icon={PROJ_ICONS[p.pn] && PROJ_ICONS[p.pn].sec} />
          </div>
        )}
      </div>
      <div className="project-foot">
        <p className="desc">{p.desc}</p>
        <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      </div>
    </article>
  );
}

function Projects() {
  var [openPn, setOpenPn] = useState(null);
  var openProject = D.projects.find(function(p) { return p.pn === openPn; }) || null;

  return (
    <React.Fragment>
      <section className="section" id="projets">
        <div className="wrap">
          <h2 className="section-title" data-reveal>Projets</h2>
          <div className="projects">
            {D.projects.map(function(p, i) {
              return <Project key={p.pn} p={p} i={i} onOpen={setOpenPn} />;
            })}
          </div>
        </div>
      </section>
      {openProject && <ProjectDetail p={openProject} onClose={function() { setOpenPn(null); }} />}
    </React.Fragment>
  );
}

/* ---------- FORMATION ---------- */
function Formation() {
  return (
    <section className="section alt" id="formation">
      <div className="wrap">
        <h2 className="section-title" data-reveal>Formations</h2>
        <div className="edugrid">
          {D.education.map((e, i) => (
            <div className="edu" key={i} data-reveal style={{ "--d": i * 70 + "ms" }}>
              <div className="edu-top">
                <span className="edu-yr">{e.yr}</span>
                <span className="edu-country">{e.country}</span>
              </div>
              {e.logo && <img src={e.logo} alt={e.sch} className="edu-logo" />}
              <div className="edu-deg">{e.deg}</div>
              <div className="edu-sch">{e.sch}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT + FOOTER ---------- */
const SHAPES = [
  { cls: "cross",   color: "var(--c-pink)"   },
  { cls: "dot",     color: "var(--c-lime)"   },
  { cls: "diamond", color: "var(--c-purple)" },
  { cls: "ring",    color: "var(--c-orange)" },
  { cls: "dot",     color: "var(--c-green)"  },
  { cls: "tri",     color: "var(--c-pink)"   },
  { cls: "diamond", color: "var(--c-orange)" },
  { cls: "ring",    color: "var(--c-purple)" },
];

function Shape({ s }) {
  if (s.cls === "tri") return <span className="shape tri" style={{ borderBottomColor: s.color }}></span>;
  if (s.cls === "ring") return <span className="shape ring" style={{ borderColor: s.color }}></span>;
  if (s.cls === "cross") return <span className="shape cross" style={{ "--bar": s.color }}></span>;
  return <span className={"shape " + s.cls} style={{ background: s.color }}></span>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Votre nom est requis";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Email invalide";
    if (form.message.trim().length < 10) er.message = "Quelques mots de plus ?";
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    setLoading(true);
    setSubmitError(null);
    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: form.name, _replyto: form.email, message: form.message }),
    })
      .then(function(res) {
        if (res.ok) { setSent(true); }
        else { setSubmitError("Erreur lors de l'envoi. Écrivez-moi directement par email."); }
      })
      .catch(function() {
        setSubmitError("Connexion impossible. Écrivez-moi directement par email.");
      })
      .finally(function() { setLoading(false); });
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <h2 className="section-title" data-reveal>Me<br />contacter</h2>
            <p className="contact-lead" data-reveal style={{ "--d": "100ms" }}>
              Disponible pour une alternance Data Analyst / BI à partir de septembre 2026, rythme 1 mois en entreprise / 1 mois à l'ECE Paris. N'hésitez pas à m'écrire. Je réponds sous 48h.
            </p>
            <div className="contact-links" data-reveal style={{ "--d": "160ms" }}>
              <a href={"mailto:" + D.email} className="cl"><span className="cl-l">Email</span>{D.email}</a>
              <a href={"tel:" + D.phone.replace(/\s/g, "")} className="cl"><span className="cl-l">Téléphone</span>{D.phone}</a>
              <a href="https://linkedin.com/in/emmanueldanton" target="_blank" rel="noreferrer" className="cl"><span className="cl-l">LinkedIn</span>/in/emmanueldanton</a>
            </div>
          </div>

          <div data-reveal style={{ "--d": "120ms" }}>
            {sent ? (
              <div className="form-ok">
                <div className="check">✓</div>
                <div>
                  <div className="t">Message envoyé.</div>
                  <div className="s">Merci {form.name.split(" ")[0]}, je reviens vers vous très vite.</div>
                </div>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <div className={"field" + (errors.name ? " err" : "")}>
                  <label htmlFor="f-name">Nom</label>
                  <input id="f-name" name="name" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Votre nom" />
                  {errors.name && <span className="msg">{errors.name}</span>}
                </div>
                <div className={"field" + (errors.email ? " err" : "")}>
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="vous@entreprise.com" />
                  {errors.email && <span className="msg">{errors.email}</span>}
                </div>
                <div className={"field" + (errors.message ? " err" : "")}>
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" name="message" rows="4" value={form.message} onChange={set("message")} placeholder="Parlez-moi de votre besoin…"></textarea>
                  {errors.message && <span className="msg">{errors.message}</span>}
                </div>
                <button type="submit" className={"btn btn-primary" + (loading ? " btn-loading" : "")} disabled={loading}>
                  {loading ? "Envoi en cours…" : "Envoyer"} <span className="arr">↗</span>
                </button>
                {submitError && <p className="submit-err">{submitError}</p>}
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="bigfoot">
        <div className="wrap">
          <div className="bigfoot-name" data-reveal>{D.firstName}</div>
          <div className="bigfoot-name" data-reveal style={{ "--d": "80ms" }}>{D.lastName}</div>
          <div className="shapes" data-reveal style={{ "--d": "140ms" }}>
            {SHAPES.map((s, i) => <Shape key={i} s={s} />)}
          </div>
          <div className="foot-cols">
            <div>
              <h4>Réseaux</h4>
              {D.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}
              <a href={D.cv} download>Télécharger CV</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={"mailto:" + D.email}>{D.email}</a>
              <p>{D.phone}</p>
              <p>{D.location}</p>
            </div>
            <div>
              <h4>Disponibilité</h4>
              <p>Alternance · sept. 2026</p>
              <p>Rythme 1 mois / 1 mois</p>
              <p>Data Analyst, BI</p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 {D.name} · Data Analyst & BI</span>
            <span>Conçu avec rigueur et curiosité</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

/* ---------- ABOUT DETAIL ---------- */
function AboutDetail({ onClose }) {
  useEffect(function() {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    window.addEventListener('nav:close-overlay', onClose);
    document.body.style.overflow = 'hidden';
    return function() {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('nav:close-overlay', onClose);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="proj-detail-overlay" role="dialog" aria-modal="true" aria-label="À propos — Emmanuel Danton">
      <div className="proj-detail-inner">
        <div className="proj-detail-topbar">
          <button className="proj-detail-back" onClick={onClose} aria-label="Fermer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            Retour
          </button>
        </div>

        <h2 className="proj-detail-title">À propos</h2>

        <div className="about-detail-grid">
          <img src="assets/portrait.jpg" alt={D.name} className="about-detail-photo" />
          <div className="about-detail-text">
            <p dangerouslySetInnerHTML={{ __html: D.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: D.about.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: D.about.p3 }} />
          </div>
        </div>

        <div className="chips about-detail-chips">
          {D.about.chips.map(function(c, i) {
            return (
              <div className="chip" key={i}>
                <div className="chip-l">{c.label}</div>
                <div className="chip-v">{c.value}</div>
              </div>
            );
          })}
        </div>

        <a href={D.cv} download className="btn btn-primary" style={{ marginTop: "48px" }}>
          Télécharger mon CV
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
        <DetailFooter />
      </div>
    </div>
  );
}

/* ---------- SCROLL TO TOP ---------- */
function ScrollToTop() {
  var [visible, setVisible] = useState(false);
  useEffect(function() {
    function onScroll() { setVisible(window.scrollY > 400); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return function() { window.removeEventListener('scroll', onScroll); };
  }, []);
  function goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  return (
    <button
      className={"scroll-top" + (visible ? " scroll-top--visible" : "")}
      onClick={goTop}
      aria-label="Remonter en haut"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
}

/* ---------- APP ---------- */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("apropos");
  const [openAbout, setOpenAbout] = useState(false);

  useEffect(() => {
    const ids = ["apropos", "competences", "softskills", "experiences", "projets", "formation", "contact"];
    let reveals = Array.from(document.querySelectorAll("[data-reveal]"));

    const tick = () => {
      const vh = window.innerHeight;
      setScrolled(window.scrollY > 40);
      reveals = reveals.filter((el) => {
        if (el.getBoundingClientRect().top < vh * 0.9) { el.classList.add("in"); return false; }
        return true;
      });
      const mid = window.scrollY + vh * 0.4;
      let current = ids[0];
      ids.forEach((id) => { const el = document.getElementById(id); if (el && el.offsetTop <= mid) current = id; });
      setActive(current);
    };

    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    const t1 = setTimeout(tick, 120);
    const t2 = setTimeout(tick, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2);
    };
  }, []);

  return (
    <React.Fragment>
      <Nav scrolled={scrolled} active={active} onOpenAbout={() => setOpenAbout(true)} />
      <Hero onOpenAbout={() => setOpenAbout(true)} />
      <StatsBand />
      <div id="apropos" />
      <Skills />
      <SoftSkills />
      <Experience />
      <Projects />
      <Formation />
      <Contact />
      {openAbout && <AboutDetail onClose={() => setOpenAbout(false)} />}
      <ScrollToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
