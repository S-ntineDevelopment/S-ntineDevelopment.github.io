const projects = [
  {
    number: '01',
    kicker: 'Project Infamy · Roblox gameplay project',
    title: 'A modular foundation for a growing Roblox experience.',
    description:
      'Project Infamy is a large gameplay project built around combat, NPCs, player progression, property, economy, and live game systems.',
    work: 'My work covers the gameplay architecture and the systems that turn player actions into reliable game state.',
    tags: ['Gameplay systems', 'Luau', 'Roblox Studio'],
    status: 'Active project',
    accent: 'orange',
  },
  {
    number: '02',
    kicker: 'SCV2 ReWrite · systems rewrite',
    title: 'Rebuilding the systems behind a roleplay experience.',
    description:
      'SCV2 ReWrite is a ground-up systems project focused on making movement, vehicles, inventory, UI, and roleplay features easier to extend.',
    work: 'I work across character movement, vehicle handling, inventory transactions, minimap presentation, and shared package boundaries.',
    tags: ['Systems rewrite', 'Vehicles', 'Networking'],
    status: 'Rewrite in progress',
    accent: 'blue',
  },
  {
    number: '03',
    kicker: 'Development practice · Luau',
    title: 'Reliable code that other developers can work with.',
    description:
      'Alongside game features, I build reusable modules and focused tests that make complicated behaviour easier to maintain and improve.',
    work: 'I focus on clear ownership, sensible module boundaries, safe server logic, and practical handling of edge cases.',
    tags: ['Modular code', 'Testing', 'Maintainability'],
    status: 'Part of every project',
    accent: 'green',
  },
];

const principles = [
  ['01', 'Build for the player', 'The goal is a responsive, understandable experience—not complexity for its own sake.'],
  ['02', 'Make it dependable', 'Important game state is checked and protected so features behave consistently in a live experience.'],
  ['03', 'Leave it usable', 'I write systems that are readable, modular, and practical for the next developer to extend.'],
];

type Capability = {
  number: string;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  { number: '01', title: 'Gameplay scripting', description: 'Combat, NPCs, tools, properties, progression, and interactive world systems.' },
  { number: '02', title: 'Roblox systems', description: 'Character movement, vehicles, inventory, UI, networking, persistence, and lifecycle logic.' },
  { number: '03', title: 'Development support', description: 'Debugging, refactoring, technical planning, documentation, and maintainable Luau modules.' },
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

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="S ntinel home">
          <img className="brand-logo" src="/sntinel-logo.svg" alt="S_ntinel" />
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#videos">Demos</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Roblox Studio · Luau developer</p>
          <h1>I build Roblox gameplay systems that <em>players can feel.</em></h1>
          <p className="hero-lede">
            I script and improve the systems behind Roblox experiences—from combat and vehicles to player features, tools, and world interaction.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <span>↓</span></a>
            <a className="text-link" href="#contact">Work with me <span>↗</span></a>
          </div>
          <div className="hero-proof"><span>Roblox Studio</span><i>×</i><span>Luau</span><i>×</i><span>Gameplay systems</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-top"><span /><span /><span /><small>ServerRuntime.luau</small></div>
            <div className="code-lines">
              <p><b>01</b><span className="purple">local</span> <span className="blue">System</span> = {`{}`}</p>
              <p><b>02</b></p>
              <p><b>03</b><span className="purple">function</span> <span className="yellow">System</span><span className="blue">:Start()</span></p>
              <p><b>04</b>&nbsp;&nbsp;<span className="green">-- gameplay, owned clearly</span></p>
              <p><b>05</b>&nbsp;&nbsp;<span className="blue">self</span>.Ready = <span className="orange">true</span></p>
              <p><b>06</b><span className="purple">end</span></p>
              <p><b>07</b></p>
              <p><b>08</b><span className="purple">return</span> System</p>
            </div>
          </div>
          <div className="floating-note note-top"><span>✦</span> Built in Studio</div>
          <div className="floating-note note-bottom">typed · modular · player-focused <span>↗</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Specialties">
        <div className="ticker-track">
          <span>GAMEPLAY SCRIPTING</span><i>✦</i><span>ROBLOX STUDIO</span><i>✦</i><span>LUAU</span><i>✦</i><span>GAME SYSTEMS</span><i>✦</i><span>GAMEPLAY SCRIPTING</span><i>✦</i><span>ROBLOX STUDIO</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few of the projects<br />I&apos;ve been <em>building.</em></h2>
          </div>
          <p className="section-intro">A snapshot of my current Roblox development work and the areas where I contribute most.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">{project.number}</span>
                <div className="visual-shape" />
                <span className="visual-label">{project.accent === 'orange' ? 'BUILD / PLAY / IMPROVE' : project.accent === 'blue' ? 'REWRITE / EXTEND / SHIP' : 'PLAN / SCRIPT / MAINTAIN'}</span>
              </div>
              <div className="project-body">
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-work"><span>My contribution</span><p>{project.work}</p></div>
                <div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><small>{project.status}</small></div>
              </div>
            </article>
          ))}
        </div>
        <p className="evidence-note"><span>Portfolio note</span> Project details describe ongoing development work. Demos and screenshots will be added as they are ready.</p>
      </section>

      <section className="principles-band" id="about">
        <div className="section shell">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">About my work</p>
              <h2>Technical enough for the system.<br /><em>Clear enough for the team.</em></h2>
            </div>
            <p className="section-intro">I enjoy taking a rough feature idea, turning it into a working Roblox system, and leaving it in a state that can keep growing.</p>
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

      <section className="section shell toolkit" id="skills">
        <div className="toolkit-copy">
          <p className="eyebrow">What I can help with</p>
          <h2>Useful systems.<br /><em>Better experiences.</em></h2>
          <p>Whether you need a feature built, an existing system cleaned up, or help making a project easier to continue, I work comfortably across gameplay and technical foundations.</p>
        </div>
        <div className="tool-list">
          {capabilities.map((capability) => <div key={capability.number}><span>{capability.number}</span><strong>{capability.title}</strong><small>{capability.description}</small></div>)}
        </div>
      </section>

      <section className="section shell video-section" id="videos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Demos</p>
            <h2>See the work<br /><em>in motion.</em></h2>
          </div>
          <p className="section-intro">Gameplay clips and short walkthroughs will live here as the projects are ready to show.</p>
        </div>
        <div className="videos">{videos.map((video) => <VideoCard key={video.number} video={video} />)}</div>
        <p className="video-note">To add a demo, edit the <code>videos</code> array in <code>app/page.tsx</code>. You can use an Unlisted YouTube video or a local file in <code>public/videos</code>.</p>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Get in touch</p>
          <h2>Have a Roblox project<br />you want to <em>improve?</em></h2>
          <p>I&apos;m interested in gameplay scripting, systems work, and helping Roblox projects become more reliable and enjoyable to play.</p>
          <div className="contact-actions"><a className="button button-light" href="https://github.com/S-ntineDevelopment" target="_blank" rel="noreferrer">View my GitHub <span>↗</span></a><a className="contact-link" href="https://github.com/S-ntineDevelopment/S-ntineDevelopment.github.io" target="_blank" rel="noreferrer">View portfolio source <span>↗</span></a></div>
          <span className="contact-hint">Replace the GitHub link with your Discord or email when you are ready.</span>
        </div>
        <div className="contact-stamp" aria-hidden="true">ROBLOX<br />LUAU<br /><span>✦</span></div>
      </section>

      <footer className="footer shell">
        <span>© 2026 S_ntinel</span>
        <span>Roblox Studio · Luau developer</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
