const projects = [
  {
    number: '01',
    kicker: 'Project Infamy · source architecture',
    title: 'Gameplay systems with a clear chain of custody.',
    description:
      'Infamy is where I have been pushing a contract-first foundation across combat, NPCs, grow systems, property, inventory, and persistence.',
    examples: [
      'Combat intent is checked at the network boundary before it reaches authoritative state.',
      'Composition roots inject ports for accounts, inventory, protection, tools, visuals, and publishing.',
      'Property placement and grow persistence keep authored content, durable state, and runtime materialization separate.',
    ],
    tags: ['Strict Luau', 'Contracts', 'Ports & composition'],
    status: 'Source implementation',
    accent: 'orange',
  },
  {
    number: '02',
    kicker: 'SCV2 ReWrite · systems and fixtures',
    title: 'Input that is responsive without becoming authority.',
    description:
      'The SCV2 rewrite explores the difficult middle ground between responsive client presentation and server-owned movement, vehicles, inventory, and roleplay state.',
    examples: [
      'Movement forwarding carries generation, context revision, sequence, freshness, and rate limits.',
      'Vehicle driving validates the player, seat, vehicle session, config revision, and replay-safe sequence.',
      'Vehicle raycast dynamics has one focused suspension solver with explicit landing, curb, grip, and cleanup behavior.',
    ],
    tags: ['Authority', 'Vehicles', 'Lifecycle fixtures'],
    status: 'Rewrite / verification work',
    accent: 'blue',
  },
  {
    number: '03',
    kicker: 'Reusable proof seams · Luau',
    title: 'Small boundaries that make edge cases executable.',
    description:
      'I like extracting the rule into a narrow module or fixture so it can be read, challenged with bad input, and composed into a larger runtime later.',
    examples: [
      'Pure fixtures exercise replay, stale revisions, malformed payloads, capacity, rollback, and teardown.',
      'Result-shaped returns keep failure reasons visible instead of hiding them in deep callbacks.',
      'Named owners make it possible to answer who creates, mutates, presents, and destroys a resource.',
    ],
    tags: ['Deterministic tests', 'Result flows', 'Ownership'],
    status: 'How I build',
    accent: 'green',
  },
];

const principles = [
  ['01', 'Read the contract first', 'Before a feature grows, I want its inputs, outputs, invariants, failure codes, and ownership to be visible.'],
  ['02', 'Keep authority explicit', 'The client can feel immediate and look polished. The server still validates the request and owns the truth.'],
  ['03', 'Compose, do not conceal', 'Dependencies are injected through narrow ports so a system can be tested without importing half the game.'],
  ['04', 'Finish the lifecycle', 'Cleanup, cancellation, replay, player removal, and failed writes are part of the feature—not a later patch.'],
];

const examples = [
  {
    number: '01',
    title: 'Combat admission',
    path: 'Infamy / Combat / FireAdmission + NetworkBoundary',
    status: 'Source implementation',
    description:
      'A fire request is not trusted because it came from a player. The boundary checks payload size, identity, actor ownership, sequence freshness, rate limits, cadence, equipped state, reload state, and ammunition before publishing a correction.',
    result: 'Input → validate → mutate → correct',
    accent: 'orange',
  },
  {
    number: '02',
    title: 'Movement forwarding',
    path: 'SCV2 / tools / movement / CharacterMovementForwardingFixture',
    status: 'Pure contract fixture',
    description:
      'The fixture models client intent, server admission, and snapshot presentation. It deliberately challenges actor identity, generations, context revisions, magnitude, replay, vault availability, rate limits, and stopped lifecycles.',
    result: 'Intent → admission → snapshot',
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Vehicle authority',
    path: 'SCV2 / tools / vehiclechassis / VehicleRaycastDynamicsCore',
    status: 'Core + fixture evidence',
    description:
      'Vehicle physics is kept behind a focused raycast dynamics core. Separate driving admission validates session identity, config revision, generation, context, sequence, and timing before an accepted state is produced.',
    result: 'Driver intent → accepted state → dynamics',
    accent: 'purple',
  },
  {
    number: '04',
    title: 'Durable state and recovery',
    path: 'Infamy / Grow / Persistence + SCV2 / Inventory fixtures',
    status: 'Boundary and fixture evidence',
    description:
      'Persistence boundaries validate document identity and schema, preserve revisions, and keep account failures visible. Inventory fixtures cover mutation gates, save acknowledgement, replay receipts, capacity, rollback, and recovery-required states.',
    result: 'Read → validate → apply → recover',
    accent: 'green',
  },
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
    description: 'Show the player-facing result: the interaction, the feedback, and the moment where the system becomes visible.',
    label: 'Add a YouTube or Vimeo link',
    // Add embedUrl: 'https://www.youtube.com/embed/VIDEO_ID' when ready.
  },
  {
    number: '02',
    title: 'Systems walkthrough',
    description: 'Use a short recording to explain the problem, the contract, the edge cases, and the trade-offs behind a feature.',
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
          <a href="#examples">Examples</a>
          <a href="#videos">Demos</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Roblox scripter · Luau systems developer</p>
          <h1>Code that gives<br /><em>gameplay a backbone.</em></h1>
          <p className="hero-lede">
            I build Roblox systems where the player experience feels immediate because the rules underneath are explicit, testable, and owned by the right layer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
            <a className="text-link" href="#examples">See real examples <span>↘</span></a>
          </div>
          <div className="hero-proof"><span>Infamy</span><i>×</i><span>SCV2 ReWrite</span><i>×</i><span>Strict Luau</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-top"><span /><span /><span /><small>Admission.luau</small></div>
            <div className="code-lines">
              <p><b>01</b><span className="purple">local</span> <span className="blue">Result</span> = <span className="yellow">require</span>(...)</p>
              <p><b>02</b></p>
              <p><b>03</b><span className="purple">function</span> <span className="yellow">Admission</span><span className="blue">.Validate</span>(input)</p>
              <p><b>04</b>&nbsp;&nbsp;<span className="purple">if</span> <span className="blue">not</span> valid(input) <span className="purple">then</span></p>
              <p><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> Result.Fail(<span className="orange">&quot;Rejected&quot;</span>)</p>
              <p><b>06</b>&nbsp;&nbsp;<span className="purple">end</span></p>
              <p><b>07</b>&nbsp;&nbsp;<span className="purple">return</span> Result.Ok(nextState)</p>
              <p><b>08</b><span className="purple">end</span></p>
              <p><b>09</b></p>
              <p><b>10</b><span className="purple">return</span> <span className="blue">table.freeze</span>(Admission)</p>
            </div>
          </div>
          <div className="floating-note note-top"><span>✦</span> Built for real edge cases</div>
          <div className="floating-note note-bottom">typed · modular · lifecycle-aware <span>↗</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Specialties">
        <div className="ticker-track">
          <span>GAMEPLAY SYSTEMS</span><i>✦</i><span>ROBLOX STUDIO</span><i>✦</i><span>LUAU</span><i>✦</i><span>NETWORK BOUNDARIES</span><i>✦</i><span>GAMEPLAY SYSTEMS</span><i>✦</i><span>ROBLOX STUDIO</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Systems with a reason<br />behind <em>every boundary.</em></h2>
          </div>
          <p className="section-intro">These are not generic “features.” They are the real problem spaces I keep returning to: authority, state, composition, persistence, and the player-facing result.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">{project.number}</span>
                <div className="visual-shape" />
                <span className="visual-label">{project.accent === 'orange' ? 'ADMIT / MUTATE / PRESENT' : project.accent === 'blue' ? 'INTENT / AUTHORITY / SNAPSHOT' : 'CONTRACT / FIXTURE / LIFECYCLE'}</span>
              </div>
              <div className="project-body">
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-examples">{project.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                <div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><small>{project.status}</small></div>
              </div>
            </article>
          ))}
        </div>
        <p className="evidence-note"><span>Evidence note</span> The examples on this page come from source modules, architectural seams, and focused fixtures. Runtime, provider, visual, and multiplayer status varies by project and is labelled where relevant.</p>
      </section>

      <section className="section examples-section shell" id="examples">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Examples, not buzzwords</p>
            <h2>Here&apos;s what that<br /><em>looks like in code.</em></h2>
          </div>
          <p className="section-intro">A closer look at the kinds of decisions I make when a system has to survive bad input, stale state, failed writes, and teardown.</p>
        </div>
        <div className="example-grid">
          {examples.map((example) => (
            <article className={`example-card ${example.accent}`} key={example.number}>
              <div className="example-top"><span>{example.number}</span><small>{example.status}</small></div>
              <h3>{example.title}</h3>
              <code>{example.path}</code>
              <p>{example.description}</p>
              <strong>{example.result}</strong>
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
            <p className="section-intro">The strongest Roblox projects feel simple to players because the engineering underneath is intentional, bounded, and honest about failure.</p>
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
          <p className="section-intro">A good demo should show both sides: what the player feels and the system decision that makes that moment reliable.</p>
        </div>
        <div className="videos">{videos.map((video) => <VideoCard key={video.number} video={video} />)}</div>
        <p className="video-note">For a no-cost setup, upload clips to YouTube as Unlisted and paste the embed URL into this section. Local files can live in <code>public/videos</code>. Edit the <code>videos</code> array in <code>app/page.tsx</code>.</p>
      </section>

      <section className="section shell toolkit">
        <div className="toolkit-copy">
          <p className="eyebrow">The toolkit</p>
          <h2>From first sketch<br />to <em>failure-proof loop.</em></h2>
          <p>I care about the full loop: shaping the idea, naming the owner, building the system, testing the edge cases, and making the final interaction feel effortless.</p>
        </div>
        <div className="tool-list">
          <div><span>01</span><strong>Luau & Roblox Studio</strong><small>Strict modules, services, gameplay, UI, authored world integration</small></div>
          <div><span>02</span><strong>Contracts & networking</strong><small>Typed inputs, admission boundaries, corrections, replication, correlation</small></div>
          <div><span>03</span><strong>Lifecycle & ownership</strong><small>Construction, active state, cancellation, player removal, idempotent destroy</small></div>
          <div><span>04</span><strong>Fixtures & audits</strong><small>Hostile input, replay, capacity, rollback, persistence, recovery, evidence limits</small></div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Start a conversation</p>
          <h2>Have a system<br />worth <em>building?</em></h2>
          <p>Tell me what you&apos;re making, what needs solving, or where you want an extra pair of hands on the scripting and systems side.</p>
          <div className="contact-actions"><a className="button button-light" href="https://github.com/S-ntineDevelopment" target="_blank" rel="noreferrer">View my GitHub <span>↗</span></a><a className="contact-link" href="https://github.com/S-ntineDevelopment/S-ntineDevelopment.github.io" target="_blank" rel="noreferrer">Inspect this portfolio&apos;s source <span>↗</span></a></div>
          <span className="contact-hint">Replace the GitHub action with your Discord or email when you are ready to take commissions.</span>
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
