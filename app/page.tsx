import UIShowcase from './components/UIShowcase';
import {
  capabilities,
  principles,
  projects,
  uiShowcaseItems,
  videos,
  type ShowcaseVideo,
} from './data/portfolioData';

function VideoCard({ video }: { video: ShowcaseVideo }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <video
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          src={video.src}
        />
        <span className="video-badge">{video.category}</span>
      </div>
      <div className="video-body">
        <div className="video-meta-row">
          <span>{video.number} / DEMO</span>
          <small>{video.specs}</small>
        </div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}

function ExplorerPanel() {
  return (
    <aside className="studio-sidebar">
      <section className="side-panel explorer-panel">
        <div className="side-heading">
          <span>EXPLORER</span>
          <span className="side-actions">＋ ⋯</span>
        </div>
        <div className="tree">
          <a className="tree-row root-row" href="#top">
            <span className="chevron">⌄</span>
            <span className="tree-icon workspace-icon">◇</span>Workspace
          </a>
          <a className="tree-row selected" href="#ui-showcase">
            <span className="chevron">›</span>
            <span className="tree-icon script-icon">▤</span>StarterGui · UI ({uiShowcaseItems.length})
          </a>
          <a className="tree-row nested" href="#work">
            <span className="chevron">›</span>
            <span className="tree-icon">▣</span>Projects ({String(projects.length).padStart(2, '0')})
          </a>
          <a className="tree-row nested" href="#videos">
            <span className="chevron">›</span>
            <span className="tree-icon workspace-icon">▶</span>Demos ({String(videos.length).padStart(2, '0')})
          </a>
          <a className="tree-row nested" href="#skills">
            <span className="chevron">›</span>
            <span className="tree-icon">▣</span>ServerScriptService
          </a>
          <a className="tree-row nested" href="#about">
            <span className="chevron">›</span>
            <span className="tree-icon script-icon">▤</span>README.luau
          </a>
          <a className="tree-row nested" href="#contact">
            <span className="chevron">›</span>
            <span className="tree-icon">▣</span>Commissions
          </a>
        </div>
      </section>

      <section className="side-panel properties-panel">
        <div className="side-heading">
          <span>PROPERTIES</span>
          <span className="side-actions">⌕</span>
        </div>
        <div className="property-selection">
          <span className="script-icon">▤</span>
          <strong>S_ntinel</strong>
          <small>Developer &amp; UI Designer</small>
        </div>
        <div className="property-row">
          <span>Language</span>
          <strong>Luau / RoUI</strong>
        </div>
        <div className="property-row">
          <span>UI Styles</span>
          <strong>6 Commercial Genres</strong>
        </div>
        <div className="property-row">
          <span>UI Screens</span>
          <strong>{uiShowcaseItems.length} Curated</strong>
        </div>
        <div className="property-row">
          <span>Live Demos</span>
          <strong>{videos.length} Playable Clips</strong>
        </div>
        <div className="property-row">
          <span>Commissions</span>
          <strong className="green-text">Open</strong>
        </div>
      </section>

      <section className="side-panel output-panel">
        <div className="side-heading">
          <span>OUTPUT</span>
          <span className="side-actions">×</span>
        </div>
        <p>
          <span className="output-dot" /> Portfolio loaded successfully
        </p>
        <p>
          <span className="output-dot" /> {uiShowcaseItems.length} UI screens indexed (6 styles)
        </p>
        <p>
          <span className="output-dot" /> 0{projects.length} project case studies ready
        </p>
        <p>
          <span className="output-dot" /> 0{videos.length} motion &amp; gameplay demos mounted
        </p>
      </section>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="studio-app">
      <header className="studio-chrome">
        <div className="studio-titlebar">
          <a className="brand" href="#top" aria-label="S ntinel home">
            <img className="brand-logo" src="/sntinel-terminal-logo.svg" alt="S_ntinel" />
          </a>
          <span className="titlebar-file">
            S_ntinel Portfolio <small>— Roblox Studio</small>
          </span>
          <span className="titlebar-state">
            <i /> COMMISSIONS OPEN
          </span>
          <div className="window-controls" aria-hidden="true">
            <span>—</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
        <div className="studio-ribbon">
          <div className="ribbon-tabs">
            <span className="active">HOME</span>
            <span>UI SUITE</span>
            <span>SYSTEMS</span>
            <span>DEMOS</span>
          </div>
          <div className="ribbon-tools">
            <a className="tool-button" href="#ui-showcase">
              <b>▱</b> UI ({uiShowcaseItems.length})
            </a>
            <a className="tool-button" href="#work">
              <b>＋</b> PROJECTS
            </a>
            <a className="tool-button" href="#videos">
              <b>▶</b> DEMOS
            </a>
          </div>
        </div>
      </header>

      <nav className="studio-nav" aria-label="Main navigation">
        <div className="place-tab">
          <span className="place-dot" /> S_ntinel.rbxl <small>×</small>
        </div>
        <div className="nav-links">
          <a href="#ui-showcase">UI Showcase</a>
          <a href="#work">Projects</a>
          <a href="#videos">Demos</a>
          <a href="#skills">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="run-button" href="#contact">
          <span>▶</span> Hire / Commission
        </a>
      </nav>

      <div className="studio-layout">
        <div className="workspace-main">
          <section className="viewport-panel" id="top">
            <div className="panel-heading">
              <span>
                <i className="panel-icon viewport-icon" /> VIEWPORT
              </span>
              <div className="panel-tools">
                <b>SELECT</b>
                <b>UI</b>
                <b>SCRIPT</b>
                <b>PLAY</b>
              </div>
            </div>
            <div className="viewport-content">
              <div className="hero-copy">
                <p className="eyebrow">
                  <span className="status-dot" /> Roblox Studio · Luau Developer &amp; UI Designer
                </p>
                <h1>
                  Commercial Roblox UI &amp; systems that <em>players can feel.</em>
                </h1>
                <p className="hero-lede">
                  I design full-game Roblox UI suites across 6+ visual styles—and script the
                  server-authoritative Luau systems, vehicles, inventories, and 60fps animations
                  that power them.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#ui-showcase">
                    Browse 32 UI screens <span>↓</span>
                  </a>
                  <a className="text-link" href="#videos">
                    Watch live demos <span>▶</span>
                  </a>
                </div>
                <div className="hero-proof">
                  <span>32 UI Screens</span>
                  <i>×</i>
                  <span>6 Commercial Styles</span>
                  <i>×</i>
                  <span>6 Live Demos</span>
                  <i>×</i>
                  <span>Full Luau Systems</span>
                </div>
              </div>
              <div className="viewport-scene" aria-hidden="true">
                <div className="scene-grid" />
                <div className="scene-axis axis-x" />
                <div className="scene-axis axis-y" />
                <div className="scene-axis axis-z" />
                <div className="scene-block">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="selection-corners">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="scene-label">
                  <span className="green-text">SELECTED</span>
                  <br />
                  S_NTINEL / UI + LUAU
                </div>
                <div className="scene-cursor">+</div>
              </div>
            </div>
            <div className="panel-status">
              <span>
                <i className="status-dot" /> READY FOR COMMISSIONS
              </span>
              <span>ROUI + LUAU</span>
              <span>DESKTOP · MOBILE · CONSOLE</span>
            </div>
          </section>

          <UIShowcase />

          <section className="studio-panel work-panel" id="work">
            <div className="panel-heading">
              <span>
                <i className="panel-icon folder-icon" /> SELECTED PROJECTS &amp; SYSTEMS
              </span>
              <small>0{projects.length} CASE STUDIES</small>
            </div>
            <div className="section-intro-row">
              <div>
                <p className="eyebrow">Project files</p>
                <h2>
                  Games &amp; systems I&apos;ve been <em>building.</em>
                </h2>
              </div>
              <p>
                End-to-end Roblox projects spanning full commercial UI suites, gameplay scripting,
                vehicle &amp; railway simulation, and custom Studio tooling.
              </p>
            </div>
            <div className="projects">
              {projects.map((project) => (
                <article className={`project-card ${project.accent}`} key={project.number}>
                  <div className="project-preview">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                    <span className="project-preview-type">{project.type}</span>
                  </div>
                  <div className="project-window">
                    <div className="project-window-bar">
                      <span className="traffic">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>{project.file}</span>
                      <small>Luau</small>
                    </div>
                    <div className="code-lines">
                      {project.code.map((line, index) => (
                        <p key={`${project.number}-${index}`}>
                          <b>{String(index + 1).padStart(2, '0')}</b>
                          <code>{line}</code>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="project-body">
                    <p className="project-kicker">
                      {project.number} / {project.project}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-work">
                      <span>MY CONTRIBUTION</span>
                      <p>{project.contribution}</p>
                    </div>
                    <div className="project-footer">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <small>{project.status}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="studio-panel demos-panel" id="videos">
            <div className="panel-heading">
              <span>
                <i className="panel-icon play-icon" /> PLAY TEST &amp; MOTION DEMOS
              </span>
              <small>0{videos.length} PLAYABLE CLIPS</small>
            </div>
            <div className="section-intro-row">
              <div>
                <p className="eyebrow">Live recordings</p>
                <h2>
                  See the work <br />
                  <em>in motion.</em>
                </h2>
              </div>
              <p>
                60fps animated UI sequences, whole-state spritesheet button transitions, and live
                Roblox Studio gameplay recordings.
              </p>
            </div>
            <div className="videos">
              {videos.map((video) => (
                <VideoCard key={video.number} video={video} />
              ))}
            </div>
            <p className="evidence-note">
              <span>VERIFIED MEDIA</span> Every clip above is captured directly from active
              commissions, animated UI pipelines, and Roblox Studio runtime tests.
            </p>
          </section>

          <section className="studio-panel skills-panel" id="skills">
            <div className="panel-heading">
              <span>
                <i className="panel-icon gear-icon" /> TOOLBOX · SERVICES
              </span>
              <small>AVAILABLE FOR HIRE</small>
            </div>
            <div className="section-intro-row">
              <div>
                <p className="eyebrow">What I can build for you</p>
                <h2>
                  Commissionable UI.
                  <br />
                  <em>Production systems.</em>
                </h2>
              </div>
              <p>
                Hire me for complete multi-screen UI suites, animated storefronts, core gameplay
                scripting, or refactoring legacy Roblox codebases.
              </p>
            </div>
            <div className="capabilities">
              {capabilities.map(([number, title, description, items]) => (
                <div className="capability" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <div className="tags capability-tags">
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="studio-panel about-panel" id="about">
            <div className="panel-heading">
              <span>
                <i className="panel-icon script-icon" /> ABOUT S_NTINEL
              </span>
              <small>README.luau</small>
            </div>
            <div className="about-layout">
              <div>
                <p className="eyebrow">README</p>
                <h2>
                  Visual polish on the surface.
                  <br />
                  <em>Rock-solid Luau underneath.</em>
                </h2>
                <p className="about-copy">
                  Most teams have to hire separately for UI design, UI implementation, and gameplay
                  scripting. I bridge the entire pipeline—taking a concept from illustrated mockup
                  to responsive Roblox Studio hierarchy and server-authoritative code.
                </p>
              </div>
              <div className="principles">
                {principles.map(([number, title, description]) => (
                  <div className="principle" key={number}>
                    <span className="principle-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="studio-panel contact-panel" id="contact">
            <div className="panel-heading">
              <span>
                <i className="panel-icon terminal-icon" /> OUTPUT / NEXT STEP
              </span>
              <small>COMMISSIONS OPEN</small>
            </div>
            <div className="contact-content">
              <div>
                <p className="eyebrow">Get in touch</p>
                <h2>
                  Need a full UI suite or
                  <br />
                  Roblox system <em>built right?</em>
                </h2>
                <p>
                  Available for commercial Roblox UI commissions (any of the 6 styles showcased
                  above), animated storefronts, gameplay scripting, and systems rewrites.
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/S-ntineDevelopment"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my GitHub <span>↗</span>
                </a>
                <a
                  className="contact-link"
                  href="https://github.com/S-ntineDevelopment/S-ntineDevelopment.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  View portfolio source <span>↗</span>
                </a>
              </div>
            </div>
          </section>

          <footer className="studio-footer">
            <span>© 2026 S_ntinel</span>
            <span>Roblox Studio · Luau Developer &amp; Commercial UI Designer</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
        <ExplorerPanel />
      </div>

      <div className="studio-statusbar">
        <span>
          <i className="status-dot" /> S_ntinel Portfolio
        </span>
        <span>32 UI Screens · 6 Case Studies · 6 Demos</span>
        <span>Roblox Studio theme / web portfolio</span>
      </div>
    </main>
  );
}
