const projects = [
  {
    number: '01',
    title: 'Combat & gameplay systems',
    description:
      'Responsive gameplay built around clear state, readable feedback, and server-validated outcomes.',
    tags: ['Luau', 'RemoteEvents', 'State machines'],
    accent: 'orange',
  },
  {
    number: '02',
    title: 'Vehicle & emergency systems',
    description:
      'Interactive vehicle features with client-owned input, authoritative rules, and clean lifecycle handling.',
    tags: ['Roblox APIs', 'Networking', 'Modular design'],
    accent: 'blue',
  },
  {
    number: '03',
    title: 'World interaction frameworks',
    description:
      'Reusable interaction patterns for doors, properties, tools, and UI that stay maintainable as a game grows.',
    tags: ['Components', 'UI', 'Services'],
    accent: 'green',
  },
];

const principles = [
  ['01', 'Readable by design', 'Systems should be easy to understand six months after they were written.'],
  ['02', 'Server-authoritative', 'The client can request and present; the server decides what is true.'],
  ['03', 'Built to extend', 'Features are composed from contracts and modules instead of one-off scripts.'],
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
    description: 'Show a feature in motion: the problem, the interaction, and the final player-facing result.',
    label: 'Add a YouTube or Vimeo link',
    // Add embedUrl: 'https://www.youtube.com/embed/VIDEO_ID' when ready.
  },
  {
    number: '02',
    title: 'Systems walkthrough',
    description: 'Use a short recording to explain the architecture, edge cases, and decisions behind a system.',
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
          <span className="brand-mark">S</span>
          <span>S_ntinel</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#videos">Demos</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Roblox scripter · Luau developer</p>
          <h1>Systems that make<br /><em>worlds feel alive.</em></h1>
          <p className="hero-lede">
            I build reliable gameplay, tools, and framework foundations for Roblox experiences — from the first interaction to the systems behind it.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
            <a className="text-link" href="#contact">Have a project? <span>Get in touch ↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-top"><span /><span /><span /><small>ServerRuntime.luau</small></div>
            <div className="code-lines">
              <p><b>01</b><span className="purple">local</span> <span className="blue">Service</span> = {`{}`}</p>
              <p><b>02</b></p>
              <p><b>03</b><span className="purple">function</span> <span className="yellow">Service</span><span className="blue">:Start()</span></p>
              <p><b>04</b>&nbsp;&nbsp;<span className="green">-- clear ownership</span></p>
              <p><b>05</b>&nbsp;&nbsp;<span className="blue">self</span>.Started = <span className="orange">true</span></p>
              <p><b>06</b><span className="purple">end</span></p>
              <p><b>07</b></p>
              <p><b>08</b><span className="purple">return</span> Service</p>
            </div>
          </div>
          <div className="floating-note note-top"><span>✦</span> Built for play</div>
          <div className="floating-note note-bottom">typed · modular · multiplayer-ready <span>↗</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Specialties">
        <div className="ticker-track">
          <span>GAMEPLAY SYSTEMS</span><i>✦</i><span>ROBLOX STUDIO</span><i>✦</i><span>LUAU</span><i>✦</i><span>TECHNICAL DESIGN</span><i>✦</i><span>GAMEPLAY SYSTEMS</span><i>✦</i><span>ROBLOX STUDIO</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Turning complex ideas<br />into <em>playable moments.</em></h2>
          </div>
          <p className="section-intro">A snapshot of the kinds of systems I enjoy designing. Every project starts with a clear contract and ends with a better player experience.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">{project.number}</span>
                <div className="visual-shape" />
                <span className="visual-label">{project.accent === 'orange' ? 'INPUT / STATE / OUTCOME' : project.accent === 'blue' ? 'REQUEST → VALIDATE → REACT' : 'COMPOSE / EXTEND / REUSE'}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-band" id="approach">
        <div className="section shell">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>Good code is part of<br /><em>the experience.</em></h2>
            </div>
            <p className="section-intro">The strongest Roblox projects are the ones that feel simple to players because the engineering underneath is intentional.</p>
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

      <section className="section shell video-section" id="videos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In motion</p>
            <h2>Let the work<br /><em>speak for itself.</em></h2>
          </div>
          <p className="section-intro">Short demos make technical work easier to understand. Add gameplay clips, system walkthroughs, or a showreel here.</p>
        </div>
        <div className="videos">{videos.map((video) => <VideoCard key={video.number} video={video} />)}</div>
        <p className="video-note">For a no-cost setup, upload clips to YouTube as Unlisted and paste the embed URL into this section. Local files can live in <code>public/videos</code>.</p>
      </section>

      <section className="section shell toolkit">
        <div className="toolkit-copy">
          <p className="eyebrow">The toolkit</p>
          <h2>From first sketch<br />to <em>final polish.</em></h2>
          <p>I care about the full loop: shaping the idea, building the system, testing the edge cases, and making the final interaction feel effortless.</p>
        </div>
        <div className="tool-list">
          <div><span>01</span><strong>Luau & Roblox Studio</strong><small>Gameplay scripting, services, modules, UI</small></div>
          <div><span>02</span><strong>Architecture & networking</strong><small>Contracts, authority, replication, cleanup</small></div>
          <div><span>03</span><strong>Debugging & iteration</strong><small>Readable systems, edge cases, player feedback</small></div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Start a conversation</p>
          <h2>Have a world<br />worth <em>building?</em></h2>
          <p>Tell me what you&apos;re making, what needs solving, or where you want an extra pair of hands.</p>
          <a className="button button-light" href="#top">Add your contact link <span>↗</span></a>
          <span className="contact-hint">Replace this button with your Discord, GitHub, or email link.</span>
        </div>
        <div className="contact-stamp" aria-hidden="true">ROBLOX<br />LUAU<br /><span>✦</span></div>
      </section>

      <footer className="footer shell">
        <span>© 2026 S_ntinel</span>
        <span>Built with intention · Made for Roblox</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
