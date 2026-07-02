import { useState, useEffect, useRef } from "react";
import {
  NAV,
  ROLES,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  CERTS,
  COMMANDS,
  github,
  credly,
} from "./data/portfolio";

const ROTATE_PAIRS = [
  { fast: "fast", well: "well." },
  { fast: "clean", well: "right." },
  { fast: "smart", well: "true." },
  { fast: "lean", well: "calm." },
  { fast: "quick", well: "deep." },
];

const useRotator = (items, interval = 2400) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items.length, interval]);
  return [items[i], i];
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 28;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Placeholder = ({ label }) => (
  <div className="placeholder">{label}</div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`top ${scrolled ? "scrolled" : ""}`}>
      <div className="inner">
        <a href="#top" className="brand">
          <span className="dot" />
          <span>
            <span className="name">Saitejas Mopuri</span>
            <span className="role" style={{ display: "block", marginTop: 2 }}>
              Full Stack & ML Engineer
            </span>
          </span>
        </a>
        <div className="links">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
        <a href="mailto:saitejasmopuri@gmail.com" className="cta">
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7CFFA0",
              boxShadow: "0 0 8px #7CFFA0",
            }}
          />
          Available for work
        </a>
      </div>
    </nav>
  );
};

const HeroBg = () => {
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setTx((e.clientX / w - 0.5) * 30);
      setTy((e.clientY / h - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const cols = 14;
  const rows = 8;
  const pts = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * 100 + Math.sin(r * 1.2 + c * 0.3) * 1.5;
      const y = (r / (rows - 1)) * 100 + Math.cos(c * 1.4 + r * 0.4) * 1.5;
      pts.push({ x, y, r, c });
    }
  }

  const lines = [];
  pts.forEach((p) => {
    const right = pts.find((q) => q.r === p.r && q.c === p.c + 1);
    const down = pts.find((q) => q.r === p.r + 1 && q.c === p.c);
    const diag = pts.find((q) => q.r === p.r + 1 && q.c === p.c + 1);
    if (right) lines.push([p, right]);
    if (down) lines.push([p, down]);
    if (diag && (p.r + p.c) % 2 === 0) lines.push([p, diag]);
  });

  return (
    <div className="hero-bg" style={{ transform: `translate(${tx}px, ${ty}px)` }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((l, i) => (
          <line key={i} className="ln" x1={l[0].x} y1={l[0].y} x2={l[1].x} y2={l[1].y} />
        ))}
        {pts.map((p, i) => (
          <circle key={i} className="pt" cx={p.x} cy={p.y} r={i % 13 === 0 ? 0.4 : 0.18}>
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${3 + (i % 5)}s`}
              repeatCount="indefinite"
              begin={`${(i % 7) * 0.3}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState([]);
  const [histIx, setHistIx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const helpBlock = () => [
    {
      t: "out",
      node: (
        <span className="term-dim">
          tejas — interactive resume. type a command and hit{" "}
          <span className="term-key">enter</span>:
        </span>
      ),
    },
    { t: "spacer" },
    ...Object.keys(COMMANDS).map((key) => ({
      t: "cmdopt",
      key,
      hint: COMMANDS[key].hint,
    })),
    { t: "spacer" },
    {
      t: "out",
      node: (
        <span className="term-dim">
          also: <span className="term-key">tejas --help</span> ·{" "}
          <span className="term-key">clear</span>
        </span>
      ),
    },
  ];

  useEffect(() => {
    setLines([{ t: "echo", cmd: "tejas --help" }, ...helpBlock()]);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    setHist((h) => [...h, cmd]);
    setHistIx(-1);
    const echo = { t: "echo", cmd };

    let arg = cmd
      .replace(/^tejas\s+/i, "")
      .trim()
      .toLowerCase()
      .replace(/^--/, "");

    if (arg === "help") {
      setLines((prev) => [...prev, echo, ...helpBlock()]);
    } else if (arg === "--clear" || arg === "clear") {
      setLines([]);
    } else if (COMMANDS[arg]) {
      const c = COMMANDS[arg];
      setLines((prev) => [
        ...prev,
        echo,
        {
          t: "out",
          node: (
            <span>
              <span className="term-ok">→</span> {c.summary}
            </span>
          ),
        },
        {
          t: "out",
          node: (
            <span className="term-dim">
              opening <span className="term-key">#{c.id}</span> …
            </span>
          ),
        },
      ]);
      setTimeout(() => scrollToSection(c.id), 650);
    } else {
      setLines((prev) => [
        ...prev,
        echo,
        {
          t: "err",
          node: (
            <span>
              <span className="term-err">✗</span>{" "}
              <span className="term-dim">{`"${cmd}" is not a command. try `}</span>
              <span className="term-key">tejas --help</span>
            </span>
          ),
        },
      ]);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!hist.length) return;
      const ni = histIx < 0 ? hist.length - 1 : Math.max(0, histIx - 1);
      setHistIx(ni);
      setInput(hist[ni]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIx < 0) return;
      const ni = histIx + 1;
      if (ni >= hist.length) {
        setHistIx(-1);
        setInput("");
      } else {
        setHistIx(ni);
        setInput(hist[ni]);
      }
    }
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="head">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <span className="ttl">~/saitejas — zsh</span>
      </div>
      <div className="body" ref={bodyRef}>
        {lines.map((l, i) => {
          if (l.t === "spacer")
            return <span key={i} className="term-line" style={{ display: "block", height: 8 }} />;
          if (l.t === "echo")
            return (
              <span key={i} className="term-line">
                <span className="term-prompt">$</span> {l.cmd}
              </span>
            );
          if (l.t === "cmdopt")
            return (
              <span
                key={i}
                className="term-line term-opt"
                onClick={(e) => {
                  e.stopPropagation();
                  run(l.key);
                }}
              >
                <span className="term-prompt">›</span>{" "}
                <span className="term-key">tejas {l.key}</span>
                <span className="term-dim term-opt-hint">— {l.hint}</span>
              </span>
            );
          return (
            <span key={i} className={`term-line ${l.t === "err" ? "is-err" : ""}`}>
              {l.node}
            </span>
          );
        })}
        <span className="term-line term-input-line">
          <span className="term-prompt">$</span>
          <input
            ref={inputRef}
            className="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            placeholder="type a command…"
            aria-label="terminal command input"
          />
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  const [pair] = useRotator(ROTATE_PAIRS, 2600);

  return (
    <section className="hero" id="top">
      <HeroBg />
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="ln" />
              <span className="live">tejas.system / online</span>
              <span style={{ color: "var(--muted-2)" }}>· San Jose, US</span>
            </div>
            <h1>
              Building software
              <br />
              that ships{" "}
              <span className="word-rotator" key={`f-${pair.fast}`}>
                <span className="word">{pair.fast}</span>
              </span>
              <br />
              and scales{" "}
              <span className="word-rotator" key={`w-${pair.well}`}>
                <span className="word">{pair.well}</span>
              </span>
            </h1>
            <p className="lead">
              I&apos;m Saitejas — a full-stack engineer building production systems across the
              web, cloud, and applied AI/ML. Currently at Pacific Sports, shipping AI-powered
              tools and platforms that scale.
            </p>
            <div className="actions">
              <a href="#projects" className="btn primary">
                View projects →
              </a>
              <a href="#about" className="btn ghost">
                About me
              </a>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
      <div className="scroll-hint">
        <span>scroll</span>
        <span className="arrow" />
      </div>
    </section>
  );
};

const About = () => (
  <section id="about">
    <div className="container">
      <div className="section-head">
        <div className="left">
          <div className="num">01 / introduction</div>
          <h2>About.</h2>
        </div>
        <div className="desc">A quick read on who I am, what I build, and how I work.</div>
      </div>
      <div className="about-grid">
        <div className="about-prose">
          <p>
            I&apos;m a full-stack engineer building production systems across the web, cloud, and
            applied AI/ML — seeking an engineering role at a company where AI is core to the
            product.
          </p>
          <p>
            At Pacific Sports, I ship AI-powered email agents, CRM platforms, and booking systems
            using React, Node.js, TypeScript, FastAPI, and PostgreSQL — with infrastructure
            provisioned through Docker, Kubernetes, and Terraform.
          </p>
          <p>
            My background spans software engineering, cloud infrastructure, and applied machine
            learning. I learn fast, ship pragmatically, and care about systems that are observable,
            scalable, and a pleasure to use.
          </p>
        </div>
        <div className="roles">
          {ROLES.map((r) => (
            <div key={r.code} className="role-card">
              <div className="ic">{r.code}</div>
              <h4>{r.title}</h4>
              <p className="sub">{r.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience">
    <div className="container">
      <div className="section-head">
        <div className="left">
          <div className="num">02 / experience</div>
          <h2>Where I&apos;ve worked.</h2>
        </div>
        <div className="desc">
          Four years across full-stack, backend, applied AI, and developer community leadership — building things that ship.
        </div>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="exp-row">
            <div className="exp-date">{e.date}</div>
            <div className="exp-icon">
              <img src={e.icon} alt={e.company} />
            </div>
            <div className="exp-body">
              <h3>{e.title}</h3>
              <p className="co">{e.company}</p>
              <ul>
                {e.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education">
    <div className="container">
      <div className="section-head">
        <div className="left">
          <div className="num">03 / education</div>
          <h2>Education.</h2>
        </div>
        <div className="desc">Computer science fundamentals, with a graduate focus on data.</div>
      </div>
      <div className="edu-grid">
        {EDUCATION.map((ed, i) => (
          <div key={i} className="edu-card">
            <div className="top">
              <div className="logo">
                <img src={ed.logo} alt={ed.school} />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{ed.title}</h3>
                <p className="school">
                  {ed.school}
                  {ed.subtitle ? ` · ${ed.subtitle}` : ""}
                </p>
                <p className="date">{ed.date}</p>
              </div>
            </div>
            <div className="gpa">{ed.gpa}</div>
            {ed.courses.length > 0 && (
              <div className="courses">
                {ed.courses.map((c) => (
                  <span key={c} className="course-pill">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ p }) => (
  <div className="proj-card">
    <div className="img">
      {p.img ? <img src={p.img} alt={p.name} /> : <Placeholder label={p.placeholder} />}
      <a href={p.href} target="_blank" rel="noreferrer" className="gh" aria-label="Source">
        <img src={github} alt="GitHub" />
      </a>
    </div>
    <div className="body">
      <h3>{p.name}</h3>
      {p.description && <p className="proj-desc">{p.description}</p>}
      <div className="tags">
        {p.tags.map((t, k) => (
          <span key={t} className={`tag ${k === 1 ? "alt-1" : k === 2 ? "alt-2" : ""}`}>
            #{t.toLowerCase().replace(/\s+/g, "-")}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    <div className="container">
      <div className="section-head">
        <div className="left">
          <div className="num">04 / projects</div>
          <h2>Selected work.</h2>
        </div>
        <div className="desc">
          Open-source projects at the intersection of AI, safety, and infrastructure.
        </div>
      </div>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  </section>
);

const Certs = () => (
  <section id="certifications">
    <div className="container">
      <div className="section-head">
        <div className="left">
          <div className="num">05 / certifications</div>
          <h2>Certifications.</h2>
        </div>
        <div className="desc">Verified credentials in cloud and machine learning.</div>
      </div>
      <div className="cert-grid">
        {CERTS.map((c, i) => (
          <div key={i} className="cert-card">
            <div className="img">
              {c.img ? <img src={c.img} alt={c.name} /> : <Placeholder label={c.placeholder} />}
            </div>
            <div className="body">
              <h3>{c.name}</h3>
              <div className="tags">
                {c.tags.map((t, k) => (
                  <span key={t} className={`tag ${k === 1 ? "alt-1" : k === 2 ? "alt-2" : ""}`}>
                    #{t.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>
            </div>
            <a href={c.href} target="_blank" rel="noreferrer" className="cred" aria-label="Verify">
              <img src={credly} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="foot-cta">
          <h3>Let&apos;s build something.</h3>
          <p>
            Open to full-time roles where AI is core to the product. Reach out — I reply within 24
            hours.
          </p>
          <a href="mailto:saitejasmopuri@gmail.com" className="btn primary">
            saitejasmopuri@gmail.com →
          </a>
        </div>
        <div className="foot-col">
          <h5>Elsewhere</h5>
          <a href="https://github.com/sa616473" target="_blank" rel="noreferrer">
            GitHub →
          </a>
          <a href="https://www.linkedin.com/in/saitejasmopuri/" target="_blank" rel="noreferrer">
            LinkedIn →
          </a>
          <a href="https://www.credly.com/users/saitejas-mopuri" target="_blank" rel="noreferrer">
            Credly →
          </a>
        </div>
        <div className="foot-col">
          <h5>Sections</h5>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label} →
            </a>
          ))}
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 Saitejas Mopuri</span>
        <span>San Jose · Built with React</span>
      </div>
    </div>
  </footer>
);

const App = () => (
  <>
    <div className="stars" />
    <div className="glow g1" />
    <div className="glow g2" />
    <Nav />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Certs />
    <Footer />
  </>
);

export default App;
