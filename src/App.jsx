import { profile, journey, projects, resume } from './content'
import './App.css'

const sections = [
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav className="nav">
      <a className="nav-name" href="#top">
        {profile.name}
      </a>
      <div className="nav-links">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">{profile.tagline}</p>
      <h1>{profile.name}</h1>
      <p className="hero-intro">{profile.intro}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">
          Get in touch
        </a>
        <a className="btn" href="#projects">
          View work
        </a>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="section">
      <h2 className="section-title">Journey</h2>
      <div className="timeline">
        {journey.map((item) => (
          <div className="timeline-item" key={item.year}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>
      <p className="resume-summary">{resume.summary}</p>
      <ul className="resume-highlights">
        {resume.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <a className="btn btn-primary" href={resume.pdfPath} download>
        Download resume
      </a>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <p>Have a project in mind, or just want to say hi?</p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="socials">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
