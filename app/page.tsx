import DemosSection from './components/DemosSection';
import PricingAndFaq from './components/PricingAndFaq';
import UIShowcase from './components/UIShowcase';
import {
  marqueeHighlights,
  proprietaryTools,
  scriptingSystems,
  shippedCodebases,
  sngineServerSubsystems,
  sngineSharedSubsystems,
  uiShowcaseItems,
} from './data/portfolioData';

export default function Home() {
  const marqueeLoop = [...marqueeHighlights, ...marqueeHighlights];

  return (
    <div className="page-shell" id="top">
      {/* Floating Top Identity Bar */}
      <header className="top-bar-wrap">
        <div className="top-bar">
          <a className="brand-cluster" href="#top">
            <span className="brand-mark">
              <img src="/sntinel-terminal-logo.svg" alt="S_ntinel" />
            </span>
            <span className="brand-text">
              <strong>S_ntinel</strong>
              <small>Senior UI Engineer &amp; Luau Systems Dev</small>
            </span>
          </a>

          <nav className="top-nav" aria-label="Primary navigation">
            <a href="#showcase">Showcase</a>
            <a href="#stack">Stack</a>
            <a href="#systems">Scripting</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="top-actions">
            <span className="avail-pill">
              <i /> Available
            </span>
            <a className="btn btn-dark btn-sm" href="#contact">
              Commission ↗
            </a>
          </div>
        </div>
      </header>

      <main className="main-container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-eyebrow-row">
            <span className="hero-pill">
              <span className="pill-dot" /> 10+ Years Roblox Experience · Studio Import Included
            </span>
          </div>

          <h1 className="hero-title">
            Commercial Roblox UI &amp; systems <em>built to ship.</em>
          </h1>

          <p className="hero-subtitle">
            I design full-game Roblox UI suites across <strong>8+ visual styles</strong>, compile
            them natively into Studio through my personal <strong>RoUI</strong> engine (PC · Mobile
            · Console verified), and power them with my private <strong>S_ngine</strong> &amp;{' '}
            <strong>Luau</strong> gameplay architecture—no raw PNG dumps, no extra Studio import
            fees.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-dark btn-lg" href="#pricing">
              View Plans &amp; Pricing
            </a>
            <a className="btn btn-light btn-lg" href="#showcase">
              Explore {uiShowcaseItems.length} Screens ↓
            </a>
          </div>

          <div className="hero-stats-strip">
            <div className="stat-item">
              <strong>Studio-Ready UI</strong>
              <span>Compiled via RoUI · PC / Mobile / Console</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>Zero Flat Tweens</strong>
              <span>Whole-State Spritesheets &amp; Stationary Hitboxes</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>S_ngine Architecture</strong>
              <span>ECS · Binary Netcode · Atomic Ledgers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>End-to-End</strong>
              <span>Design · RoUI Compilation · Luau Systems</span>
            </div>
          </div>

          {/* Dual Auto-Playing Hero Reels */}
          <div className="hero-reels">
            <div className="reel-card">
              <div className="reel-label-row">
                <span className="reel-tag">60 FPS ANIMATED UI</span>
                <small>Whole-State Spritesheets · Zero Flat Tweens</small>
              </div>
              <div className="reel-frame">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/portfolio/bleach-stats.webp"
                  src="/videos/bleach-complete-ui-60fps.mp4"
                />
              </div>
            </div>

            <div className="reel-card">
              <div className="reel-label-row">
                <span className="reel-tag tag-sys">LIVE LUAU SYSTEMS</span>
                <small>Combat · Stealth · Ballistics · S_ngine</small>
              </div>
              <div className="reel-frame">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/portfolio/ic-black-market-real.webp"
                  src="/videos/gun-ballistics-demo.mp4"
                />
              </div>
            </div>
          </div>

          {/* Infinite Showcase Marquee */}
          <div className="marquee-wrap" aria-label="Featured UI highlights">
            <div className="marquee-track">
              {marqueeLoop.map((item, index) => (
                <a
                  href="#showcase"
                  className="marquee-card"
                  key={`${item.id}-${index}`}
                >
                  <div className="marquee-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      draggable={false}
                      className="protected-img"
                    />
                    <div className="anti-scrape-shield" aria-hidden="true" />
                  </div>
                  <div className="marquee-caption">
                    <span>{item.project}</span>
                    <small>{item.styleLabel}</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FULL 52-SCREEN FILTERABLE SHOWCASE */}
        <UIShowcase />

        {/* PROPRIETARY ENGINEERING STACK */}
        <section className="section-block" id="stack">
          <div className="section-header">
            <span className="section-pill">PROPRIETARY TOOLCHAIN</span>
            <h2>
              Not just Figma. <em>Custom Roblox engineering tools.</em>
            </h2>
            <p className="section-subtitle">
              Every commission runs through my own production stack—guaranteeing mobile TouchGui
              safe zones, stationary spritesheet hitboxes, and leak-free strict Luau.
            </p>
          </div>

          <div className="stack-bento">
            {proprietaryTools.map((tool) => (
              <article
                className={`stack-card ${tool.image ? 'stack-card-featured' : ''}`}
                key={tool.id}
              >
                <div className="stack-card-content">
                  <span className="stack-badge">{tool.badge}</span>
                  <h3>{tool.name}</h3>
                  <p className="stack-tagline">{tool.tagline}</p>
                  <p className="stack-desc">{tool.description}</p>
                  <ul className="stack-list">
                    {tool.highlights.map((h) => (
                      <li key={h}>
                        <span className="stack-bullet" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {tool.image && (
                  <div className="stack-media">
                    <img
                      src={tool.image}
                      alt={tool.imageAlt ?? tool.name}
                      loading="lazy"
                      draggable={false}
                      className="protected-img"
                    />
                    <div className="anti-scrape-shield" aria-hidden="true" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* DEDICATED S_NGINE ARCHITECTURE BREAKDOWN */}
        <section className="section-block" id="sngine">
          <div className="section-header">
            <span className="section-pill">PRIVATE LUAU ARCHITECTURE · S_NGINE</span>
            <h2>
              Inside <em>S_ngine.</em>
            </h2>
            <p className="section-subtitle">
              A policy-first Roblox engine strictly separating shared simulation from server-only
              authority—engineered for zero-trust security, low-bandwidth binary netcode, dupe-proof
              persistence, and deterministic offline testing.
            </p>
          </div>

          <div className="sngine-board">
            <div className="sngine-col">
              <div className="sngine-col-head">
                <span className="sngine-boundary-pill pill-shared">SHARED · REPLICATES</span>
                <code>ReplicatedStorage.S_ngine.Engine</code>
              </div>
              <div className="sngine-sub-list">
                {sngineSharedSubsystems.map((sub) => (
                  <div className="sngine-sub-row" key={sub.name}>
                    <div className="sngine-sub-top">
                      <strong>{sub.name}</strong>
                      <span>{sub.mechanism}</span>
                    </div>
                    <p>{sub.summary}</p>
                    <div className="sngine-files">
                      {sub.keyFiles.map((f) => (
                        <code key={f}>{f}</code>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sngine-col sngine-col-server">
              <div className="sngine-col-head">
                <span className="sngine-boundary-pill pill-server">SERVER ONLY · ZERO REPLICATION</span>
                <code>ServerStorage.S_ngine.Engine</code>
              </div>
              <div className="sngine-sub-list">
                {sngineServerSubsystems.map((sub) => (
                  <div className="sngine-sub-row" key={sub.name}>
                    <div className="sngine-sub-top">
                      <strong>{sub.name}</strong>
                      <span>{sub.mechanism}</span>
                    </div>
                    <p>{sub.summary}</p>
                    <div className="sngine-files">
                      {sub.keyFiles.map((f) => (
                        <code key={f}>{f}</code>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="sngine-guarantee">
                <strong>Zero Client Trust:</strong> Every remote payload is schema-validated,
                server-admitted, and audited by Roblox Cortex AST checks before shipping.
              </div>
            </div>
          </div>

          {/* Real Shipped Codebases Coverage */}
          <div className="codebases-wrap">
            <div className="codebases-head">
              <span className="brief-badge">ARCHITECTURAL COVERAGE</span>
              <h3>Production systems engineered across real Roblox projects</h3>
            </div>
            <div className="codebases-grid">
              {shippedCodebases.map((cb) => (
                <article className="codebase-card" key={cb.project}>
                  <div className="codebase-top">
                    <strong>{cb.project}</strong>
                    <span className="codebase-scale">{cb.architecture}</span>
                  </div>
                  <small className="codebase-genre">{cb.genre}</small>
                  <div className="codebase-tags">
                    {cb.systemsCovered.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GAMEPLAY SCRIPTING SYSTEMS */}
        <section className="section-block" id="systems">
          <div className="section-header">
            <span className="section-pill">LUAU GAMEPLAY ENGINEERING</span>
            <h2>
              The technology <em>under the hood.</em>
            </h2>
            <p className="section-subtitle">
              Deep technical breakdowns of how each system is engineered and why it outperforms
              standard Roblox scripts under live multiplayer load.
            </p>
          </div>

          <div className="curation-notice">
            <span className="notice-tag">SELECTIVE CODE SHOWCASE</span>
            <p>
              To protect client IP and prevent AI scraping of private production codebases, only
              high-level architecture breakdowns and representative snippets are published here—not
              the full repositories. Private walkthroughs and live tests are available on inquiry.
            </p>
          </div>

          <div className="systems-grid">
            {scriptingSystems.map((sys) => (
              <article className="system-card" key={sys.number}>
                <div className="system-card-top">
                  <span className="system-num">{sys.number}</span>
                  <div className="system-top-meta">
                    <span className="system-cat">{sys.category}</span>
                    <small className="system-scale">{sys.techFocus}</small>
                  </div>
                </div>
                <h3>{sys.title}</h3>
                <p>{sys.description}</p>
                <div className="why-advanced-box">
                  <span>WHY IT&apos;S ADVANCED</span>
                  <p>{sys.whyAdvanced}</p>
                </div>
                <div className="code-preview-box">
                  <div className="code-preview-bar">
                    <span>{sys.snippetFile}</span>
                    <small>Luau · Strict</small>
                  </div>
                  <pre className="code-preview-body">
                    <code>{sys.snippet.join('\n')}</code>
                  </pre>
                </div>
                <div className="system-tags">
                  {sys.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PLAYABLE VIDEO DEMOS */}
        <DemosSection />

        {/* INTERACTIVE PRICING & FAQ */}
        <PricingAndFaq />

        {/* CONTACT CTA */}
        <section className="section-block" id="contact">
          <div className="contact-hero-card">
            <div className="contact-left">
              <span className="avail-pill avail-dark">
                <i /> Commissions Open · Q4 2026
              </span>
              <h2>
                Ready to build something <em>players trust?</em>
              </h2>
              <p>
                Send your game genre, screen list or scripting scope, target style, and timeline.
                Clean unwatermarked 1:1 Studio proofs and live place tests are shared directly with
                serious studios and clients.
              </p>
              <div className="contact-buttons">
                <a
                  className="btn btn-cta btn-lg"
                  href="https://github.com/S-ntineDevelopment"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub · S-ntineDevelopment ↗
                </a>
                <a
                  className="btn btn-ghost-light btn-lg"
                  href="https://github.com/S-ntineDevelopment/S-ntineDevelopment.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio Source ↗
                </a>
              </div>
            </div>

            <div className="contact-right">
              <div className="brief-checklist">
                <span className="checklist-heading">FAST QUOTE CHECKLIST</span>
                <ol>
                  <li>
                    <strong>Scope:</strong> Single screen, full UI suite, or Luau gameplay system
                  </li>
                  <li>
                    <strong>Style:</strong> Pick from the 8 genres above or share references
                  </li>
                  <li>
                    <strong>Delivery:</strong> Studio-ready UI, wired Luau runtime, or 100% vector
                  </li>
                  <li>
                    <strong>Budget &amp; Timeline:</strong> USD (preferred) or DevEx Robux
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 S_ntinel · Senior Roblox UI Engineer &amp; Luau Developer</span>
          <span>RoUI Studio · Roblox Cortex · S_ngine</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {/* Persistent Floating Bottom Dock */}
      <nav className="floating-dock" aria-label="Quick section dock">
        <a href="#top" title="Top">
          Home
        </a>
        <a href="#showcase" title="UI Vault">
          UI ({uiShowcaseItems.length})
        </a>
        <a href="#stack" title="Proprietary Stack">
          Stack
        </a>
        <a href="#systems" title="Luau Scripting">
          Scripting
        </a>
        <a href="#demos" title="Live Demos">
          Demos
        </a>
        <a href="#pricing" title="Pricing" className="dock-cta">
          Pricing
        </a>
      </nav>
    </div>
  );
}
