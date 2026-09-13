import { profile, journey, projects, resume } from './content'
import './App.css'

const tree = [
  { file: 'index.md', href: '#top' },
  { file: 'journey.log', href: '#journey' },
  { file: 'projects/', href: '#projects' },
  { file: 'resume.pdf', href: '#resume' },
  { file: 'contact.sh', href: '#contact' },
]

function WindowBar({ name }) {
  return (
    <div className="panel-bar">
      <span className="win-dot" />
      <span className="win-dot" />
      <span className="win-dot" />
      <span className="panel-name">{name}</span>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-user">{profile.handle}</div>
      <div className="sidebar-path">~/portfolio</div>
      <nav className="tree">
        {tree.map((t) => (
          <a key={t.file} className="tree-item" href={t.href}>
            {t.file}
          </a>
        ))}
      </nav>
      <div className="sidebar-status">
        branch: main
        <br />
        status: clean
        <br />
        build: passing
      </div>
    </aside>
  )
}

function Hero() {
  return (
    <section id="top" className="panel">
      <WindowBar name="index.md" />
      <div className="panel-body">
        <div>
          <span className="prompt">$</span> whoami
        </div>
        <div className="hero-name">{profile.name}</div>
        <div className="hero-role">role: {profile.tagline.toLowerCase()}</div>
        <p className="hero-intro">&gt; {profile.intro}</p>
        <div className="hero-actions">
          <a className="btn-term btn-term-primary" href="#contact">
            [ get in touch ]
          </a>
          <a className="btn-term" href="#projects">
            [ view work ]
          </a>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="panel">
      <WindowBar name="journey.log" />
      <div className="panel-body">
        <div className="cmd-line">
          <span className="prompt">$</span> tail -f journey.log
        </div>
        <div className="log-list">
          {journey.map((item) => (
            <div className="log-row" key={item.year}>
              <span className="log-year">[{item.year}]</span>
              <span className="log-title">
                {item.title.toLowerCase().replace(/\s+/g, '_')}
              </span>
              <span className="log-desc">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="panel">
      <WindowBar name="projects/" />
      <div className="panel-body">
        <div className="cmd-line">
          <span className="prompt">$</span> ls -la projects/
        </div>
        <div className="table">
          <div className="table-head">
            <span>NAME</span>
            <span>STACK</span>
            <span>STATUS</span>
            <span className="col-link">LINK</span>
          </div>
          {projects.map((p) => (
            <div className="table-row" key={p.title}>
              <span className="cell-name">{p.title}</span>
              <span>{p.tags.join(', ')}</span>
              <span>
                <span
                  className={
                    p.status === 'active' ? 'dot dot-active' : 'dot'
                  }
                >
                  ●
                </span>{' '}
                {p.status}
              </span>
              <a
                className="col-link"
                href={p.liveUrl || p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="panel">
      <WindowBar name="resume.pdf --preview" />
      <div className="panel-body">
        <div className="cmd-line">
          <span className="prompt">$</span> cat resume.pdf --summary
        </div>
        <p className="hero-intro">&gt; {resume.summary}</p>
        <div className="meta-row">
          {resume.meta.map((m) => (
            <span className="meta-tag" key={m.label}>
              {m.label}: {m.value}
            </span>
          ))}
        </div>
        <div className="checklist">
          {resume.highlights.map((h) => (
            <div key={h}>[✓] {h}</div>
          ))}
        </div>
        <div className="cmd-line">
          <span className="prompt">$</span>{' '}
          <a
            className="btn-term"
            style={{ display: 'inline-flex' }}
            href={resume.pdfPath}
            download
          >
            ./download-resume.sh
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="panel">
      <WindowBar name="contact.sh" />
      <div className="panel-body">
        <div className="cmd-line">
          <span className="prompt">$</span> curl -X POST https://contact.dev \
          <br />
          <span className="indent">-d "email={profile.email}"</span>
        </div>
        <div className="json-block">
          <div>{'{'}</div>
          <div className="indent">
            <span className="json-key">"email"</span>:{' '}
            <a href={`mailto:${profile.email}`}>"{profile.email}"</a>,
          </div>
          {profile.socials.map((s) => (
            <div className="indent" key={s.label}>
              <span className="json-key">"{s.label.toLowerCase()}"</span>:{' '}
              <a href={s.url} target="_blank" rel="noreferrer">
                "{s.url.replace('https://', '')}"
              </a>
            </div>
          ))}
          <div>{'}'}</div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      // built with react · deployed on github pages · © {new Date().getFullYear()}
    </footer>
  )
}

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Hero />
        <Journey />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
