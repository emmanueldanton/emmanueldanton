/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;
/* Langue : ?lang=xx, puis choix mémorisé, puis langue du navigateur. Hors français : anglais. */
const LANGS = ["fr", "en"];
function pickLang() {
  var m = /[?&]lang=([a-z]{2})/.exec(window.location.search);
  if (m && LANGS.indexOf(m[1]) >= 0) { try { localStorage.setItem("lang", m[1]); } catch (e) {} return m[1]; }
  try { var st = localStorage.getItem("lang"); if (st && LANGS.indexOf(st) >= 0) return st; } catch (e) {}
  var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "fr"];
  for (var i = 0; i < list.length; i++) { var c = String(list[i]).slice(0, 2).toLowerCase(); if (LANGS.indexOf(c) >= 0) return c; }
  return "en";
}
const LANG = pickLang();
document.documentElement.lang = LANG;
const I18N = (window.PORTFOLIO_I18N || {})[LANG] || null;
/* fusion : les textes traduits remplacent ceux du français, le reste (liens, images, chiffres) est hérité */
function mergeLang(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    if (base.length && typeof base[0] !== "object") return over;
    return base.map(function(b, i) { return mergeLang(b, over[i]); });
  }
  if (base && typeof base === "object") {
    var out = {};
    Object.keys(base).forEach(function(k) { out[k] = mergeLang(base[k], over[k]); });
    Object.keys(over).forEach(function(k) { if (!(k in out)) out[k] = over[k]; });
    return out;
  }
  return over;
}
const D = I18N ? mergeLang(window.PORTFOLIO, I18N.content) : window.PORTFOLIO;
function tr(str) { return I18N && I18N.ui && I18N.ui[str] ? I18N.ui[str] : str; }
function switchLang(to) {
  try { localStorage.setItem("lang", to); } catch (e) {}
  var u = new URL(window.location.href); u.searchParams.set("lang", to); window.location.href = u.toString();
}

/* Le bleu de la photo d'origine est la couleur principale ; index.html?citron montre l'ancienne version */
const BLEU = !/[?&]citron/.test(window.location.search);
if (BLEU) document.documentElement.classList.add("t-bleu");
const ICO3D = BLEU ? "ico3d-apple" : "ico3d";

const NAV = [
  { id: "apropos", label: tr("À propos") },
  { id: "competences", label: tr("Compétences") },
  { id: "softskills", label: tr("Softskills") },
  { id: "experiences", label: tr("Expériences") },
  { id: "projets", label: tr("Projets") },
  { id: "formation", label: tr("Formations") },
];

/* Titre de section : pastille, phrase courte, un mot dans un bloc de couleur */
function STitle({ k, c, a, m, z }) {
  return (
    <h2 className={"section-title st st--" + c} data-reveal>
      {a}{a ? " " : ""}<mark>{m}</mark>{z ? " " + z : ""}
    </h2>
  );
}

/* Icônes des softskills : une seule famille, même épaisseur de trait */
const SOFT_ICONS = {
  eye:    <React.Fragment><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></React.Fragment>,
  check:  <React.Fragment><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></React.Fragment>,
  rocket: <React.Fragment><path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.900a2.1 2.1 0 0 0-2.9-.1z"/><path d="M12 15 9 12a22 22 0 0 1 2-4 12.9 12.9 0 0 1 11-6c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.5-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.5 4-2c1.1-1.6 0-5 0-5"/></React.Fragment>,
  chat:   <React.Fragment><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.2-4.600A8 8 0 1 1 21 12z"/><path d="M9 11h6"/><path d="M9 14h4"/></React.Fragment>,
  video:  <React.Fragment><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3z"/></React.Fragment>,
  users:  <React.Fragment><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.500a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6.5 6.5 0 0 1 4 6"/></React.Fragment>,
  spark:  <React.Fragment><path d="M12 3c.6 4.7 2.3 6.4 7 7-4.7.6-6.4 2.3-7 7-.6-4.7-2.3-6.4-7-7 4.7-.6 6.4-2.3 7-7z"/><path d="M19 16v4"/><path d="M17 18h4"/></React.Fragment>,
  pen:    <React.Fragment><path d="m12 19 7-7 3 3-7 7z"/><path d="m18 13-1.5-7.500L2 2l3.5 14.500L13 18z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/></React.Fragment>,
  globe:  <React.Fragment><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></React.Fragment>,
};

/* Flèche pleine aux bouts arrondis ; d = right, down, left, up, ne (vers le haut à droite) ; pill = dans une pastille ronde */
const ARROW_PATH = "M4.5 13.5h11.3l-4.2 4.2a1.5 1.5 0 0 0 2.1 2.1l6.8-6.8a1.5 1.5 0 0 0 0-2.1l-6.8-6.8a1.5 1.5 0 1 0-2.1 2.1l4.2 4.2H4.5a1.5 1.5 0 0 0 0 3.1z";
function Arrow({ d, pill }) {
  return <span className={"ar ar--" + (d || "right") + (pill ? " ar--pill" : "")} aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d={ARROW_PATH} /></svg></span>;
}

/* Téléchargement : flèche vers un plateau, même famille que Arrow */
function Dl({ pill }) {
  return <span className={"ar ar--dl" + (pill ? " ar--pill" : "")} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.6v10.6"/><path d="m7 9.6 5 5 5-5"/><path d="M5 20.4h14"/></svg></span>;
}

/* ---------- CV : choix de la langue ---------- */
function openCv(e) { if (e) e.preventDefault(); window.dispatchEvent(new Event("cv:open")); }

function CvChooser() {
  const [open, setOpen] = useState(false);
  useEffect(function() {
    function on() { setOpen(true); }
    function key(e) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("cv:open", on);
    document.addEventListener("keydown", key);
    return function() { window.removeEventListener("cv:open", on); document.removeEventListener("keydown", key); };
  }, []);
  if (!open) return null;
  var close = function() { setOpen(false); };
  return (
    <div className="cvc" role="dialog" aria-modal="true" aria-label={tr("Quelle version de mon CV ?")} onClick={function(e) { if (e.target === e.currentTarget) close(); }}>
      <div className="cvc-card">
        <button type="button" className="cvc-x" onClick={close} aria-label={tr("Fermer")}>×</button>
        <h2 className="cvc-t">{tr("Quelle version de mon CV ?")}</h2>
        <p className="cvc-p">{tr("Choisissez la langue, le PDF se télécharge.")}</p>
        <div className="cvc-row">
          <a className="cvc-opt" href={D.cvFr} download onClick={close}><span className="cvc-flag">FR</span><b>Français</b><Dl pill /></a>
          <a className="cvc-opt" href={D.cvEn} download onClick={close}><span className="cvc-flag">EN</span><b>English</b><Dl pill /></a>
        </div>
      </div>
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
          <button type="button" className="nav-lang" aria-label={tr("Langue")} onClick={function() { switchLang(LANG === "fr" ? "en" : "fr"); }}>{LANG === "fr" ? "EN" : "FR"}</button>
          <a href={D.cv} className="nav-cta" onClick={openCv}>{tr("Mon CV")} <Dl /></a>
          <button className="nav-burger" aria-label={tr("Menu")} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className="nav-menu">
        {NAV.map((n) => (
          <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""} onClick={(e) => handleLink(e, n.id)}>{n.label}</a>
        ))}
        <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>{tr("Contact")}</a>
      </div>
    </nav>
  );
}


/* ---------- HERO ---------- */
function Hero({ onOpenAbout }) {
  var half = Math.ceil(D.lastName.length / 2);
  var T = D.hero.tags;

  function goProjets() {
    var el = document.getElementById('projets');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  var spark = "M50 0c4 30 16 42 50 50-34 8-46 20-50 50-4-30-16-42-50-50C34 42 46 30 50 0z";

  return (
    <React.Fragment>
      <section className="hx" id="top">
        <h1 className="hx-giant" aria-label={D.name}>
          <span aria-hidden="true">{D.firstName}</span>
          <span className="hx-l2" aria-hidden="true">
            <b>{D.lastName.slice(0, half)}</b><b>{D.lastName.slice(half)}</b>
          </span>
        </h1>

        <div className="wrap hx-stage">
          <div className="hx-copy">
            <p className="hx-mission">{D.hero.mission}</p>
            <p className="hx-lead">{D.hero.lead}</p>
          </div>

          <div className="hx-figure">
            <div className="hx-disc"></div>
            <div className="hx-cut"><img src="assets/photos/hero-detoure.webp" alt={D.hero.photoAlt} /></div>
            {BLEU ? <img className="hx-spark hx-spark--1 hx-chart" src="assets/photos/chart-bars.webp" alt="" /> : <svg className="hx-spark hx-spark--1" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d={spark}/></svg>}
            {BLEU ? <img className="hx-spark hx-spark--2 hx-chart" src="assets/photos/chart-donut.webp" alt="" /> : <svg className="hx-spark hx-spark--2" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d={spark}/></svg>}
          </div>

          <div className="hx-tags">
            <div className="hx-chip hx-chip--a">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg></div>
              <div><div className="v">{T.poste.v}</div><div className="k"><span className="hx-live"></span>{T.poste.k}</div></div>
            </div>
            <div className="hx-chip hx-chip--b">
              <i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></i>
              {T.capteurs}
            </div>
            <div className="hx-chip hx-chip--c">
              <div><div className="v">{T.ventes.v}</div><div className="k">{T.ventes.k}</div></div>
              <div className="hx-bars" aria-hidden="true"><b style={{ height: "30%" }}></b><b style={{ height: "48%" }}></b><b style={{ height: "40%" }}></b><b style={{ height: "68%" }}></b><b style={{ height: "100%" }}></b></div>
            </div>
          </div>
        </div>

        <div className="wrap">
        <div className="hx-actions">
          <button className="hx-btn hx-btn--accent" onClick={goProjets}>{tr("Voir mes projets")} <Arrow d="down" pill /></button>
          <button className="hx-btn" onClick={onOpenAbout}>{tr("En savoir plus")} <Arrow d="right" pill /></button>
        </div>
        </div>
      </section>

      {/* bande des compétences, sous le héros */}
      <div className="hero-marquee">
        <div className="track">
          {[0, 1].map(function(k) {
            return <span key={k} aria-hidden={k === 1}>{D.marquee.map(function(t) { return <b key={t}>{t}</b>; })}</span>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section className="section" id="apropos">
      <div className="wrap">
        <STitle k={tr("À propos")} c="lime" a={tr("Moi, c'est")} m={tr("Emmanuel")} />
        <div className="about-grid">
          <div>
            <p data-reveal dangerouslySetInnerHTML={{ __html: D.about.p1 }}></p>
            <p data-reveal style={{ "--d": "80ms" }} dangerouslySetInnerHTML={{ __html: D.about.p2 }}></p>
            <p data-reveal style={{ "--d": "160ms" }} dangerouslySetInnerHTML={{ __html: D.about.p3 }}></p>
          </div>
          <div>
            <img src="assets/portrait.webp" alt={D.name} className="about-photo" data-reveal style={{ "--d": "60ms" }} />
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
  const COLORS = ["lime", "blue", "yellow", "violet", "rose"];
  const [act, setAct] = useState(3);
  var n = D.skills.length;

  return (
    <section className="section alt" id="competences">
      <div className="wrap">
        <STitle k={tr("Compétences")} c="lime" a={tr("Ce que je sais")} m={tr("faire")} />
        <div className="skx" data-reveal>
          <ul className="skx-list">
            {D.skills.map(function(sk, i) {
              return (
                <li key={i} className={"skx-it skx--" + COLORS[i % COLORS.length] + (i === act ? " is-on" : "")}>
                  <button type="button" className="skx-btn" aria-expanded={i === act}
                    onMouseEnter={function() { setAct(i); }} onFocus={function() { setAct(i); }} onClick={function() { setAct(i); }}>
                    <span className="skx-n">{sk.n}</span><span className="skx-t">{sk.t}</span>
                  </button>
                  <div className="skx-in">
                    <p>{sk.d}</p>
                    <div className="skx-tags">{sk.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* jeu de cartes : la carte active est dessus, les suivantes dépassent derrière */}
          <div className="skx-deck" aria-hidden="true">
            {D.skills.map(function(sk, i) {
              var p = (i - act + n) % n;
              return (
                <div key={i} className={"skx-card skx--" + COLORS[i % COLORS.length] + " p" + Math.min(p, 3) + (p === 0 ? " is-top" : "")} style={{ zIndex: n - p }}>
                  <div className="skx-card-top"><span className="skx-card-n">{sk.n}</span><span className="skx-card-t">{sk.t}</span></div>
                  <p>{sk.d}</p>
                  <div className="skx-tags">{sk.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOFT SKILLS + TÉMOIGNAGE ---------- */
const PAL = ["lime", "blue", "yellow", "violet", "rose"];
const TILT = [-4, 3, -2, 5, -3, 2, -5, 4, -1];

function SoftSkills() {
  const t = D.testimonial;
  return (
    <section className="section" id="softskills">
      <div className="wrap">
        <STitle k={tr("Softskills")} c="blue" a={tr("Comment je")} m={tr("travaille")} />
        <div className="sb-grid">
          <figure className="sb-quote" data-reveal>
            <span className="sb-q" aria-hidden="true">”</span>
            <blockquote>{t.q}</blockquote>
            <figcaption>
              <img src={t.photo} alt="" loading="lazy" />
              <div>
                <a href={t.li} target="_blank" rel="noopener noreferrer" className="sb-name">{t.nm} <Arrow d="ne" /></a>
                <span>{t.rl}</span>
              </div>
            </figcaption>
          </figure>
          <ul className="sb-tiles">
            {D.softSkills.map((s, i) => (
              <li key={i} data-reveal style={{ "--d": 60 + i * 50 + "ms" }}>
                <img className="sb-3d" src={"assets/" + ICO3D + "/" + s.ico + ".webp"} alt="" loading="lazy" width="96" height="96" />
                <b>{s.t}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FENÊTRES DE DÉTAIL (commun) ---------- */
function DetailEnd({ next }) {
  return (
    <footer className="dw-end">
      <div className="dw-end-in">
        <button type="button" className="dw-next" onClick={next.go}>
          <span className="dw-next-k">{next.k}</span>
          <span className="dw-next-t">{next.label}</span>
          <span className="dw-next-go" aria-hidden="true">
            <Arrow d="right" />
          </span>
        </button>
        <div className="dw-end-bot">
          <span>© 2026 {D.name}</span>
          <span>
            <a href={D.cv} onClick={openCv}>{tr("Mon CV")} <Dl /></a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function useOverlay(onClose) {
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
}

function Gallery({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <React.Fragment>
      <h3 className="dw-sub">{tr("En images")}</h3>
      <div className={"dw-gal dw-gal--" + items.length}>
        {items.map(function(g) {
          return (
            <figure key={g.src} className={g.contain ? "is-contain" : ""}>
              <img src={g.src} alt={g.alt} loading="lazy" style={g.pos ? { objectPosition: g.pos } : undefined} />
              {g.cap && <figcaption>{g.cap}</figcaption>}
            </figure>
          );
        })}
      </div>
    </React.Fragment>
  );
}

function DetailWindow({ aria, back, counter, color, k, title, tags, panel, d, stepsLabel, quote, cta, next, logo, onClose }) {
  useOverlay(onClose);
  return (
    <div className="proj-detail-overlay dw" role="dialog" aria-modal="true" aria-label={aria}>
      <div className={"dw-in c-" + color}>
        <div className="dw-top">
          <button type="button" className="dw-back" onClick={onClose}><Arrow d="left" /> {back}</button>
        </div>

        <header className="dw-head">
          <div className="dw-intro">
            {logo && <span className="dw-mark"><img src={logo} alt="" /></span>}
            <p className="dw-over">{k}</p>
            <h2 className="dw-title">{title}</h2>
            <p className="dw-lead">{d.brief}</p>
            <div className="dw-tags">{tags.map(function(t) { return <span className="tag" key={t}>{t}</span>; })}</div>
          </div>
          {panel}
        </header>

        {d.facts && (
          <ul className="dw-facts">
            {d.facts.map(function(f) { return <li key={f.k}><b>{f.v}</b><span>{f.k}</span></li>; })}
          </ul>
        )}

        <div className="dw-duo">
          <div className="dw-card"><h3>{tr("Mon rôle")}</h3><p>{d.role}</p></div>
          <div className="dw-card dw-card--k"><h3>{tr("Le résultat")}</h3><p>{d.result}</p></div>
        </div>

        <h3 className="dw-sub">{stepsLabel}</h3>
        <ol className="dw-steps">
          {d.steps.map(function(s) {
            return (
              <li key={s.n}>
                <span className="dw-n" aria-hidden="true">{s.n}</span>
                <div><h4>{s.title}</h4><p>{s.desc}</p></div>
              </li>
            );
          })}
        </ol>

        {quote}
        <Gallery items={d.gallery} />

        <div className="dw-cta">{cta}</div>
      </div>
      <DetailEnd next={next} />
    </div>
  );
}

/* ---------- EXPERIENCE DETAIL OVERLAY ---------- */
/* expérience suivante qui a une fenêtre de détail (Ipsos n'en a pas, par discrétion) */
function nextXp(i) {
  var n = D.experience.length;
  for (var k = 1; k <= n; k++) { var j = (i + k) % n; if (!D.experience[j].discret) return j; }
  return i;
}

function ExperienceDetail({ x, i, onClose, onNext }) {
  var nx = D.experience[nextXp(i)];
  var parts = x.co.split(" - ");
  var t = D.testimonial;
  var panel = (
    <div className="dw-panel dw-panel--xp">
      <span className="dw-badge">{x.live ? tr("En poste") : x.ph}</span>
      <div className="dw-xp-mid">
        {x.logo && <span className="dw-logo"><img src={x.logo} alt="" /></span>}
        <b className="dw-co">{parts[0]}</b>
      </div>
      <span className="dw-when">{x.yr}{parts[1] ? " - " + parts[1] : ""}</span>
    </div>
  );
  var quote = x.detail.quote ? (
    <React.Fragment>
      <h3 className="dw-sub">{tr("Ce qu'en dit ma responsable")}</h3>
      <figure className="sb-quote dw-quote">
        <span className="sb-q" aria-hidden="true">”</span>
        <blockquote>{t.q}</blockquote>
        <figcaption>
          <img src={t.photo} alt="" loading="lazy" />
          <div>
            <a href={t.li} target="_blank" rel="noopener noreferrer" className="sb-name">{t.nm} <Arrow d="ne" /></a>
            <span>{t.rl}</span>
          </div>
        </figcaption>
      </figure>
    </React.Fragment>
  ) : null;
  return (
    <DetailWindow
      aria={tr("Détails : ") + x.role + tr(" chez ") + x.co}
      back={tr("Retour aux expériences")}
      counter={String(i + 1).padStart(2, "0") + " / " + String(D.experience.length).padStart(2, "0")}
      color={XP_PAL[i % XP_PAL.length]}
      k={parts[0] + " - " + x.ph}
      title={x.role}
      tags={x.tags}
      panel={panel}
      d={x.detail}
      stepsLabel={tr("Comment ça s'est passé")}
      quote={quote}
      cta={<a href="#contact" className="dw-btn dw-btn--main" onClick={onClose}>{tr("Me contacter")} <Arrow d="right" pill /></a>}
      next={{ k: tr("Expérience suivante"), label: nx.co.split(" - ")[0], go: onNext }}
      onClose={onClose}
    />
  );
}

/* ---------- EXPERIENCE ---------- */
const XP_PAL = ["lime", "blue", "yellow"];

function Experience() {
  var [openIdx, setOpenIdx] = useState(null);
  var [act, setAct] = useState(0);
  var openXp = openIdx !== null ? D.experience[openIdx] : null;
  return (
    <section className="section alt" id="experiences">
      <div className="wrap">
        <STitle k={tr("Expériences")} c="violet" a={tr("Où j'ai")} m={tr("travaillé")} />
        <div className="xb">
          {D.experience.map(function(x, i) {
            var parts = x.co.split(" - ");
            var on = act === i;
            return (
              <div key={i} data-reveal style={{ "--d": i * 80 + "ms" }}>
              <article
                className={"xb-row c-" + XP_PAL[i % XP_PAL.length] + (on ? " is-open" : "")}
                tabIndex={0}
                onMouseEnter={function() { setAct(i); }}
                onFocus={function() { setAct(i); }}
                onClick={function() { setAct(i); }}
              >
                <div className="xb-line">
                  <span className="xb-when">{x.yr}{x.discret && x.logo && <span className="xb-mark"><img src={x.logo} alt={x.co.split(" - ")[0]} /></span>}</span>
                  <h3>{x.role}</h3>
                  <span className="xb-co">{parts[0]}{x.live && <i>{tr("En poste")}</i>}</span>
                </div>
                {!x.discret && <div className="xb-more">
                  <div>
                    <ul>
                      {x.bullets.map(function(b) { return <li key={b}>{b}</li>; })}
                    </ul>
                    <div className="xb-foot">
                      <div className="xb-tags">{x.tags.slice(0, 5).map(function(t) { return <span className="tag" key={t}>{t}</span>; })}</div>
                      {x.detail && <button type="button" className="xb-btn" tabIndex={on ? 0 : -1} onClick={function() { setOpenIdx(i); }}>{tr("Détails")} <Arrow d="ne" pill /></button>}
                    </div>
                  </div>
                </div>}
              </article>
              </div>
            );
          })}
        </div>
      </div>
      {openXp && <ExperienceDetail key={openIdx} x={openXp} i={openIdx} onClose={function() { setOpenIdx(null); }} onNext={function() { setOpenIdx(nextXp(openIdx)); }} />}
    </section>
  );
}

/* ---------- PROJECT DETAIL OVERLAY ---------- */
function ProjectDetail({ p, onClose, onNext }) {
  var m = p.media || [];
  var i = D.projects.indexOf(p);
  var nx = D.projects[(i + 1) % D.projects.length];
  var panel = (
    <div className="dw-panel">
      {m[0] && <img className="dw-img" src={m[0].src} alt={m[0].alt} />}
      {m[1] && <img className={"dw-img2" + (m[1].contain ? " is-phone" : "")} src={m[1].src} alt={m[1].alt} style={m[1].pos ? { objectPosition: m[1].pos } : undefined} />}
    </div>
  );
  return (
    <DetailWindow
      aria={tr("Détails du projet ") + p.title}
      back={tr("Retour aux projets")}
      counter={p.pn + " / " + String(D.projects.length).padStart(2, "0")}
      color={PAL[i % PAL.length]}
      k={p.client}
      logo={p.logo}
      title={p.title}
      tags={p.tags}
      panel={panel}
      d={p.detail}
      stepsLabel={tr("Comment je m'y suis pris")}
      cta={
        <React.Fragment>
          {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="dw-btn dw-btn--main">{tr("Voir le projet")} <Arrow d="ne" pill /></a>}
          <a href="#contact" className={"dw-btn" + (p.url ? "" : " dw-btn--main")} onClick={onClose}>{tr("Me contacter")} <Arrow d="right" pill /></a>
        </React.Fragment>
      }
      next={{ k: tr("Projet suivant"), label: nx.title.split(",")[0], go: function() { onNext(nx.pn); } }}
      onClose={onClose}
    />
  );
}

/* ---------- PROJECTS ---------- */
function Project({ p, i, onOpen }) {
  var m = p.media || [];
  var phone = m[1] && m[1].contain;
  var shot = phone ? m[1] : m[0];
  var cut = p.title.indexOf(",");
  var name = cut > 0 ? p.title.slice(0, cut) : p.title;
  var sub = cut > 0 ? p.title.slice(cut + 1).trim() : "";
  sub = sub.charAt(0).toUpperCase() + sub.slice(1);
  return (
    <article className={"pb-card pb--" + i} data-reveal style={{ "--d": i * 80 + "ms" }} onClick={function() { onOpen(p.pn); }}>
      <div className="pb-head">
        <span className="pb-n">{p.pn}</span>
        <button type="button" className="pb-go" aria-label={tr("Voir les détails du projet ") + name}>
          <Arrow d="ne" />
        </button>
      </div>
      <h3>{name}</h3>
      {sub && <p>{sub}</p>}
      {shot && (
        <div className={"pb-shot" + (phone ? " is-phone" : "")}>
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </div>
      )}
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
          <STitle k={tr("Projets")} c="rose" a={tr("Ce que j'ai")} m={tr("construit")} />
          <div className="pb">
            {D.projects.map(function(p, i) {
              return <Project key={p.pn} p={p} i={i} onOpen={setOpenPn} />;
            })}
          </div>
        </div>
      </section>
      {openProject && <ProjectDetail key={openPn} p={openProject} onClose={function() { setOpenPn(null); }} onNext={setOpenPn} />}
    </React.Fragment>
  );
}

/* ---------- FORMATION : frise dans l'ordre du temps ---------- */
function Formation() {
  var list = D.education.slice().reverse();
  return (
    <section className="section alt" id="formation">
      <div className="wrap">
        <STitle k={tr("Formations")} c="lime" a={tr("Où j'ai")} m={tr("appris")} />
        <div className="eb">
          {list.map(function(e, i) {
            var now = i === list.length - 1;
            return (
              <article className={"eb-stop" + (now ? " is-now" : "")} key={i} data-reveal style={{ "--d": i * 120 + "ms" }}>
                <span className="eb-dot" aria-hidden="true"></span>
                <span className="eb-yr">{e.yr}</span>
                {e.logo && <span className="eb-logo"><img src={e.logo} alt="" loading="lazy" /></span>}
                <h3>{e.deg}</h3>
                <p>{e.sch}</p>
                {now && <span className="eb-now">{tr("En cours")}</span>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT + PIED DE PAGE ---------- */
const FOOT_NAV = [
  { id: "competences", label: tr("Compétences") },
  { id: "softskills", label: tr("Softskills") },
  { id: "experiences", label: tr("Expériences") },
  { id: "projets", label: tr("Projets") },
  { id: "formation", label: tr("Formations") },
  { id: "contact", label: tr("Contact") },
];

/* Logos officiels (tracés Simple Icons) */
const LOGO_LINKEDIN = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const LOGO_GITHUB = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;

/* Formulaire de contact.
   Avec une clé Web3Forms (web3forms.com, gratuit), le message part directement et l'adresse reste invisible.
   Sans clé, le bouton ouvre la messagerie du visiteur avec l'objet et le texte déjà remplis. */
const FORM_KEY = "ee55c15c-44a1-45e7-9df9-3ed24f17afd6";

function ContactForm() {
  const [f, setF] = useState({ email: "", subject: "", message: "" });
  const [state, setState] = useState("idle");
  const set = function(k) { return function(e) { var n = Object.assign({}, f); n[k] = e.target.value; setF(n); }; };
  function submit(e) {
    e.preventDefault();
    if (!FORM_KEY) {
      window.location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent(f.subject) + "&body=" + encodeURIComponent(f.message + (f.email ? "\n\n" + f.email : ""));
      return;
    }
    setState("sending");
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ access_key: FORM_KEY, subject: f.subject, email: f.email, message: f.message, from_name: "Portfolio" }),
    }).then(function(r) { setState(r.ok ? "sent" : "error"); }).catch(function() { setState("error"); });
  }
  if (state === "sent") return <div className="kb-form kb-form--ok" role="status"><b>{tr("Message envoyé.")}</b><span>{tr("Merci, je vous réponds vite.")}</span></div>;
  return (
    <form className="kb-form" onSubmit={submit}>
      <label>{tr("Votre e-mail")}<input type="email" required autoComplete="email" value={f.email} onChange={set("email")} placeholder="vous@exemple.com" /></label>
      <label>{tr("Objet")}<input type="text" required value={f.subject} onChange={set("subject")} placeholder={tr("De quoi voulez-vous parler ?")} /></label>
      <label>{tr("Message")}<textarea rows="4" required value={f.message} onChange={set("message")} placeholder={tr("Bonjour Emmanuel,")}></textarea></label>
      <button type="submit" className="kb-send" disabled={state === "sending"}>{state === "sending" ? tr("Envoi…") : tr("Envoyer")} <Arrow d="right" pill /></button>
      {state === "error" && <p className="kb-err" role="alert">{tr("L'envoi a échoué. Réessayez dans un instant.")}</p>}
    </form>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <section className="section dark kb-section" id="contact">
        <div className="wrap">
          <div className="kb" data-reveal>
            <div className="kb-txt">
              <h2>{tr("On se parle ?")}</h2>
              <p>{D.contactLead}</p>
              <div className="kb-links">
                <a className="kb-soc" href="https://linkedin.com/in/emmanueldanton" target="_blank" rel="noreferrer" aria-label="LinkedIn">{LOGO_LINKEDIN}</a>
                <a className="kb-soc" href="https://github.com/emmanueldanton" target="_blank" rel="noreferrer" aria-label="GitHub">{LOGO_GITHUB}</a>
                <a href={D.cv} onClick={openCv}>{tr("Mon CV")} <Dl /></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="fc">
        <div className="wrap">
          <div className="fc-row">
            <div>
              <span className="fc-brand"><i></i>E. Danton</span>
              <p>{D.hero.mission}</p>
            </div>
            <ul className="fc-pills">
              {FOOT_NAV.map(function(n, i) {
                return (
                  <li key={n.id} style={{ "--r": TILT[i] + "deg" }}>
                    <a className={"c-" + PAL[i % PAL.length]} href={"#" + n.id}>{n.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="fc-bot">
            <span>© 2026 {D.name}</span>
            <span className="fc-soc">
              <a href="https://linkedin.com/in/emmanueldanton" target="_blank" rel="noreferrer" aria-label="LinkedIn">{LOGO_LINKEDIN}</a>
              <a href="https://github.com/emmanueldanton" target="_blank" rel="noreferrer" aria-label="GitHub">{LOGO_GITHUB}</a>
            </span>
            <a href="#top" className="fc-up" onClick={function(e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{tr("Haut de page")} <Arrow d="up" /></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

/* ---------- ABOUT DETAIL ---------- */
function AboutDetail({ onClose }) {
  useOverlay(onClose);
  return (
    <div className="proj-detail-overlay dw" role="dialog" aria-modal="true" aria-label="À propos de Emmanuel Danton">
      <div className="dw-in c-lime">
        <div className="dw-top">
          <button type="button" className="dw-back" onClick={onClose}><Arrow d="left" /> {tr("Retour")}</button>
        </div>

        <header className="dw-head">
          <div className="dw-intro">
            <h2 className="dw-title">{tr("Moi, c'est Emmanuel")}</h2>
            <p className="dw-lead" dangerouslySetInnerHTML={{ __html: D.about.p1 }} />
          </div>
          <div className="dw-panel dw-panel--me">
            <img src="assets/photos/hero-detoure.webp" alt={D.hero.photoAlt} />
          </div>
        </header>

        <p className="dw-say" dangerouslySetInnerHTML={{ __html: D.about.quote }} />

        <div className="dw-text">
          <p dangerouslySetInnerHTML={{ __html: D.about.p2 }} />
          <p dangerouslySetInnerHTML={{ __html: D.about.p3 }} />
        </div>

        <ul className="dw-chips">
          {D.about.chips.map(function(c) {
            return <li key={c.label}><span>{c.label}</span><b>{c.value}</b></li>;
          })}
        </ul>

        <Gallery items={D.terrain.photos} />

        <div className="dw-cta">
          <a href={D.cv} className="dw-btn dw-btn--main" onClick={openCv}>{tr("Télécharger mon CV")} <Dl pill /></a>
          <a href="#contact" className="dw-btn" onClick={onClose}>{tr("Me contacter")} <Arrow d="right" pill /></a>
        </div>
      </div>
      <DetailEnd next={{ k: tr("Une idée, un projet ?"), label: tr("On se parle"), go: function() { onClose(); setTimeout(function() { var el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 60); } }} />
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
      aria-label={tr("Remonter en haut")}
    >
      <Arrow d="up" />
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
      <div id="apropos" />
      <Skills />
      <SoftSkills />
      <Experience />
      <Projects />
      <Formation />
      <Contact />
      {openAbout && <AboutDetail onClose={() => setOpenAbout(false)} />}
      <ScrollToTop />
      <CvChooser />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
