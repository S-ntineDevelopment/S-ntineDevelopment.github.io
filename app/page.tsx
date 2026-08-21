const projects = [
  {
    number: '01',
    project: 'Project Infamy',
    type: 'GAMEPLAY PROJECT',
    title: 'Gameplay foundation for a growing Roblox experience.',
    description: 'A large gameplay project spanning combat, NPCs, player progression, property, economy, and live game systems.',
    contribution: 'Gameplay architecture and the systems that turn player actions into reliable game state.',
    file: 'CombatRuntime.luau',
    code: ['local Combat = require(...)', 'function Combat:Start()', '  self.Ready = true', 'end'],
    tags: ['Gameplay', 'Luau', 'Roblox Studio'],
    status: 'ACTIVE PROJECT',
    accent: 'green',
  },
  {
    number: '02',
    project: 'SCV2 ReWrite',
    type: 'SYSTEMS REWRITE',
    title: 'Rebuilding the systems behind a roleplay experience.',
    description: 'A ground-up rewrite focused on movement, vehicles, inventory, UI, and roleplay features that can keep growing.',
    contribution: 'Character movement, vehicle handling, inventory transactions, minimap presentation, and shared systems.',
    file: 'VehicleRuntime.luau',
    code: ['local Vehicle = require(...)', 'function Vehicle:Mount(player)', '  return self:Admit(player)', 'end'],
    tags: ['Rewrite', 'Vehicles', 'Networking'],
    status: 'IN DEVELOPMENT',
    accent: 'blue',
  },
  {
    number: '03',
    project: 'Systems & tooling',
    type: 'DEVELOPMENT PRACTICE',
    title: 'Reliable code that other developers can work with.',
    description: 'Reusable modules and focused tests that make complicated behaviour easier to maintain and improve.',
    contribution: 'Clear ownership, practical module boundaries, safe server logic, and useful handling of edge cases.',
    file: 'ModuleBoundary.luau',
    code: ['local Result = require(...)', 'if not Valid(input) then', '  return Result.Fail(...)', 'end'],
    tags: ['Modules', 'Testing', 'Maintenance'],
    status: 'EVERY PROJECT',
    accent: 'amber',
  },
];

const principles = [
  ['01', 'Player first', 'The goal is a responsive, understandable experience—not complexity for its own sake.'],
  ['02', 'Dependable systems', 'Important game state is checked and protected so features behave consistently in a live experience.'],
  ['03', 'Team-ready code', 'Systems should be readable, modular, and practical for the next developer to extend.'],
];

const capabilities = [
  ['01', 'Gameplay scripting', 'Combat, NPCs, tools, properties, progression, and interactive world systems.'],
  ['02', 'Roblox systems', 'Movement, vehicles, inventory, UI, networking, persistence, and lifecycle logic.'],
  ['03', 'Development support', 'Debugging, refactoring, technical planning, documentation, and maintainable Luau modules.'],
];

type Video = {
  number: string;
  title: string;
  description: string;
  label: string;
  embedUrl?: string;
  src?: string;
};

const videos: Video[] = [
  {
    number: '01',
    title: 'Gameplay showcase',
    description: 'A short clip showing a finished feature or player-facing system.',
    label: 'Add a YouTube or Vimeo link',
    // Add embedUrl: 'https://www.youtube.com/embed/VIDEO_ID' when ready.
  },
  {
    number: '02',
    title: 'Development walkthrough',
    description: 'A concise explanation of a system, the problem it solved, and the result.',
    label: 'Add a local MP4 or WebM',
    // Add src: '/videos/your-clip.mp4' after placing the file in public/videos.
  },
];

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        {video.embedUrl ? <iframe src={video.embedUrl} title={video.title} allowFullScreen /> : video.src ? <video controls preload="metadata" src={video.src} /> : <div className="video-placeholder">
          <span className="play-mark">▶</span>
          <span className="video-number">{video.number}</span>
          <strong>{video.label}</strong>
          <small>Update the video data in app/page.tsx</small>
        </div>}
      </div>
      <div className="video-body">
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
        <div className="side-heading"><span>EXPLORER</span><span className="side-actions">＋ ⋯</span></div>
        <div className="tree">
          <p className="tree-row root-row"><span className="chevron">⌄</span><span className="tree-icon workspace-icon">◇</span>Workspace</p>
          <p className="tree-row nested"><span className="chevron">›</span><span className="tree-icon">▣</span>Portfolio</p>
          <p className="tree-row selected"><span className="chevron">›</span><span className="tree-icon script-icon">▤</span>S_ntinel</p>
          <p className="tree-row nested"><span className="chevron">›</span><span className="tree-icon">▣</span>ServerScriptService</p>
          <p className="tree-row nested"><span className="chevron">›</span><span className="tree-icon">▣</span>ReplicatedStorage</p>
          <p className="tree-row nested"><span className="chevron">›</span><span className="tree-icon">▣</span>StarterPlayer</p>
        </div>
      </section>

      <section className="side-panel properties-panel">
        <div className="side-heading"><span>PROPERTIES</span><span className="side-actions">⌕</span></div>
        <div className="property-selection"><span className="script-icon">▤</span><strong>S_ntinel</strong><small>Script</small></div>
        <div className="property-row"><span>Name</span><strong>S_ntinel</strong></div>
        <div className="property-row"><span>Language</span><strong>Luau</strong></div>
        <div className="property-row"><span>Status</span><strong className="green-text">Ready</strong></div>
      </section>

      <section className="side-panel output-panel">
        <div className="side-heading"><span>OUTPUT</span><span className="side-actions">×</span></div>
        <p><span className="output-dot" /> Portfolio loaded successfully</p>
        <p><span className="output-dot" /> 03 project records found</p>
      </section>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="studio-app">
      <header className="studio-chrome">
        <div className="studio-titlebar">
          <a className="brand" href="#top" aria-label="S ntinel home"><img className="brand-logo" src="/sntinel-terminal-logo.svg" alt="S_ntinel" /></a>
          <span className="titlebar-file">S_ntinel Portfolio <small>— Roblox Studio</small></span>
          <span className="titlebar-state"><i /> SAVED LOCALLY</span>
          <div className="window-controls" aria-hidden="true"><span>—</span><span>□</span><span>×</span></div>
        </div>
        <div className="studio-ribbon">
          <div className="ribbon-tabs"><span className="active">HOME</span><span>MODEL</span><span>TEST</span><span>VIEW</span></div>
          <div className="ribbon-tools"><span className="tool-button"><b>＋</b> PART</span><span className="tool-button">▱ UI</span><span className="tool-button">▶ PLAY</span></div>
        </div>
      </header>

      <nav className="studio-nav" aria-label="Main navigation">
        <div className="place-tab"><span className="place-dot" /> S_ntinel.rbxl <small>×</small></div>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#videos">Demos</a><a href="#contact">Contact</a></div>
        <a className="run-button" href="#contact"><span>▶</span> Let&apos;s talk</a>
      </nav>

      <div className="studio-layout">
        <div className="workspace-main">
          <section className="viewport-panel" id="top">
            <div className="panel-heading"><span><i className="panel-icon viewport-icon" /> VIEWPORT</span><div className="panel-tools"><b>SELECT</b><b>MOVE</b><b>SCALE</b><b>ROTATE</b></div></div>
            <div className="viewport-content">
              <div className="hero-copy">
                <p className="eyebrow"><span className="status-dot" /> Roblox Studio · Luau developer</p>
                <h1>I build Roblox gameplay systems that <em>players can feel.</em></h1>
                <p className="hero-lede">I script and improve the systems behind Roblox experiences—from combat and vehicles to player features, tools, and world interaction.</p>
                <div className="hero-actions"><a className="button button-primary" href="#work">View selected work <span>↓</span></a><a className="text-link" href="#contact">Work with me <span>↗</span></a></div>
                <div className="hero-proof"><span>Roblox Studio</span><i>×</i><span>Luau</span><i>×</i><span>Gameplay systems</span></div>
              </div>
              <div className="viewport-scene" aria-hidden="true">
                <div className="scene-grid" />
                <div className="scene-axis axis-x" /><div className="scene-axis axis-y" /><div className="scene-axis axis-z" />
                <div className="scene-block"><div /><div /><div /></div>
                <div className="selection-corners"><span /><span /><span /><span /></div>
                <div className="scene-label"><span className="green-text">SELECTED</span><br />S_NTINEL / SCRIPT</div>
                <div className="scene-cursor">+</div>
              </div>
            </div>
            <div className="panel-status"><span><i className="status-dot" /> EDIT MODE</span><span>GRID 1 STUD</span><span>CAMERA: ORBIT</span></div>
          </section>

          <section className="studio-panel work-panel" id="work">
            <div className="panel-heading"><span><i className="panel-icon folder-icon" /> SELECTED WORK</span><small>03 ITEMS</small></div>
            <div className="section-intro-row"><div><p className="eyebrow">Project files</p><h2>Work I&apos;ve been <em>building.</em></h2></div><p>A snapshot of my current Roblox development work and where I contribute most.</p></div>
            <div className="projects">
              {projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-window">
                  <div className="project-window-bar"><span className="traffic"><i /><i /><i /></span><span>{project.file}</span><small>{project.type}</small></div>
                  <div className="code-lines">{project.code.map((line, index) => <p key={line}><b>{String(index + 1).padStart(2, '0')}</b><code>{line}</code></p>)}</div>
                  <div className="project-window-footer"><span className="green-text">● READY</span><span>Luau</span></div>
                </div>
                <div className="project-body"><p className="project-kicker">{project.number} / {project.project}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-work"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div><div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><small>{project.status}</small></div></div>
              </article>)}
            </div>
            <p className="evidence-note"><span>STATUS</span> Project details describe ongoing development work. Demos and screenshots will be added as they are ready.</p>
          </section>

          <section className="studio-panel about-panel" id="about">
            <div className="panel-heading"><span><i className="panel-icon script-icon" /> ABOUT S_NTINEL</span><small>README.luau</small></div>
            <div className="about-layout"><div><p className="eyebrow">README</p><h2>Technical enough for the system.<br /><em>Clear enough for the team.</em></h2><p className="about-copy">I enjoy taking a rough feature idea, turning it into a working Roblox system, and leaving it in a state that can keep growing.</p></div><div className="principles">{principles.map(([number, title, description]) => <div className="principle" key={number}><span className="principle-number">{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div>
          </section>

          <section className="studio-panel skills-panel" id="skills">
            <div className="panel-heading"><span><i className="panel-icon gear-icon" /> TOOLBOX</span><small>CAPABILITIES</small></div>
            <div className="section-intro-row"><div><p className="eyebrow">What I can help with</p><h2>Useful systems.<br /><em>Better experiences.</em></h2></div><p>Feature work, systems work, cleanup, and support for Roblox projects that want to keep improving.</p></div>
            <div className="capabilities">{capabilities.map(([number, title, description]) => <div className="capability" key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div>
          </section>

          <section className="studio-panel demos-panel" id="videos">
            <div className="panel-heading"><span><i className="panel-icon play-icon" /> PLAY TEST RECORDINGS</span><small>MEDIA</small></div>
            <div className="section-intro-row"><div><p className="eyebrow">Demos</p><h2>See the work<br /><em>in motion.</em></h2></div><p>Gameplay clips and short walkthroughs will live here as the projects are ready to show.</p></div>
            <div className="videos">{videos.map((video) => <VideoCard key={video.number} video={video} />)}</div>
            <p className="video-note">Edit the <code>videos</code> array in <code>app/page.tsx</code> to add a YouTube clip or local file.</p>
          </section>

          <section className="studio-panel contact-panel" id="contact">
            <div className="panel-heading"><span><i className="panel-icon terminal-icon" /> OUTPUT / NEXT STEP</span><small>READY</small></div>
            <div className="contact-content"><div><p className="eyebrow">Get in touch</p><h2>Have a Roblox project<br />you want to <em>improve?</em></h2><p>I&apos;m interested in gameplay scripting, systems work, and helping Roblox projects become more reliable and enjoyable to play.</p></div><div className="contact-actions"><a className="button button-primary" href="https://github.com/S-ntineDevelopment" target="_blank" rel="noreferrer">View my GitHub <span>↗</span></a><a className="contact-link" href="https://github.com/S-ntineDevelopment/S-ntineDevelopment.github.io" target="_blank" rel="noreferrer">View portfolio source <span>↗</span></a></div></div>
          </section>

          <footer className="studio-footer"><span>© 2026 S_ntinel</span><span>Roblox Studio · Luau developer</span><a href="#top">Back to top ↑</a></footer>
        </div>
        <ExplorerPanel />
      </div>
      <div className="studio-statusbar"><span><i className="status-dot" /> S_ntinel Portfolio</span><span>Luau</span><span>Roblox Studio theme / web portfolio</span></div>
    </main>
  );
}
