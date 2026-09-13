import { useEffect, useRef } from 'react'
import { profile, journey, projects, resume } from './content'
import './App.css'

const sections = [
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H4M12 2V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
      <div className="hero-glow" aria-hidden="true" />
      <p className="eyebrow">
        <span className="dot" /> {profile.tagline}
      </p>
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

function SectionHeading({ index, title }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" />
    </div>
  )
}

function Journey() {
  const ref = useReveal()
  return (
    <section id="journey" className="section reveal" ref={ref}>
      <SectionHeading index="01" title="Journey" />
      <div className="timeline">
        {journey.map((item) => (
          <div className="timeline-item" key={item.year}>
            <div className="timeline-marker">
              <span className="timeline-dot" />
              <span className="timeline-line" />
            </div>
            <div className="timeline-body">
              <span className="timeline-year">{item.year}</span>
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
  const ref = useReveal()
  return (
    <section id="projects" className="section reveal" ref={ref}>
      <SectionHeading index="02" title="Projects" />
      <div className="project-grid">
        {projects.map((p) => (
          <a
            className="project-card"
            key={p.title}
            href={p.liveUrl || p.repoUrl || '#'}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-card-top">
              <h3>{p.title}</h3>
              <span className="project-arrow">
                <ArrowIcon />
              </span>
            </div>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Resume() {
  const ref = useReveal()
  return (
    <section id="resume" className="section reveal" ref={ref}>
      <SectionHeading index="03" title="Resume" />
      <div className="resume-card">
        <p className="resume-summary">{resume.summary}</p>
        <ul className="resume-highlights">
          {resume.highlights.map((h) => (
            <li key={h}>
              <span className="bullet" />
              {h}
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href={resume.pdfPath} download>
          Download resume
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact reveal-section">
      <div className="hero-glow contact-glow" aria-hidden="true" />
      <span className="section-index center">04</span>
      <h2 className="contact-title">Let's build something.</h2>
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
