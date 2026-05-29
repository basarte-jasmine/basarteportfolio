import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import {
  aboutVideo,
  contactLinks,
  designGallery,
  filters,
  jasmineLogo,
  profileImage,
  projects,
  skills,
  stats,
} from './data/portfolio'

const navItems = ['About', 'Skills', 'Projects', 'Gallery', 'Contact']

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function GlassCard({ className = '', children }) {
  return <article className={`glass-card ${className}`}>{children}</article>
}

function SocialIcon({ name }) {
  const icons = {
    email: (
      <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v10.4a2.8 2.8 0 0 1-2.8 2.8H6.8A2.8 2.8 0 0 1 4 17.2V6.8Zm2.3.15 5.7 4.31 5.7-4.31a.9.9 0 0 0-.5-.15H6.8a.9.9 0 0 0-.5.15Zm11.9 2.19-5.66 4.29a.9.9 0 0 1-1.08 0L5.8 9.14v8.06c0 .55.45 1 1 1h10.4c.55 0 1-.45 1-1V9.14Z" />
    ),
    github: (
      <path d="M12 2.7a9.4 9.4 0 0 0-2.97 18.32c.47.08.64-.2.64-.45v-1.6c-2.62.57-3.17-1.12-3.17-1.12-.43-1.08-1.05-1.37-1.05-1.37-.86-.59.06-.58.06-.58.95.07 1.45.98 1.45.98.84 1.44 2.2 1.02 2.74.78.08-.61.33-1.02.6-1.26-2.09-.24-4.29-1.05-4.29-4.65 0-1.03.37-1.87.97-2.53-.1-.24-.42-1.2.1-2.5 0 0 .8-.25 2.59.97A8.9 8.9 0 0 1 12 6.39c.8 0 1.59.11 2.34.31 1.79-1.22 2.58-.97 2.58-.97.52 1.3.2 2.26.1 2.5.61.66.97 1.5.97 2.53 0 3.61-2.2 4.4-4.3 4.64.34.3.64.87.64 1.76v2.61c0 .25.17.54.65.45A9.4 9.4 0 0 0 12 2.7Z" />
    ),
    linkedin: (
      <path d="M6.7 8.8H3.9v11.1h2.8V8.8ZM5.3 4.1a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Zm14.6 9.75c0-3.17-1.69-4.64-3.94-4.64-1.82 0-2.63 1-3.08 1.7V8.8h-2.8v11.1h2.8v-6.2c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.37v6.1h2.8l-.01-6.05Z" />
    ),
    facebook: (
      <path d="M21.2 12a9.2 9.2 0 1 0-10.64 9.09v-6.43H8.22V12h2.34V9.97c0-2.31 1.37-3.58 3.47-3.58.68 0 1.35.06 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.41V12h2.51l-.4 2.66h-2.11v6.43A9.2 9.2 0 0 0 21.2 12Z" />
    ),
  }

  return (
    <svg aria-hidden="true" className="contact-icon" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.toLowerCase())]
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => {
            return secondEntry.intersectionRatio - firstEntry.intersectionRatio
          })[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-34% 0px -46% 0px',
        threshold: [0.12, 0.3, 0.55],
      },
    )

    sections.forEach((section) => navObserver.observe(section))

    return () => navObserver.disconnect()
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Jasmine Basarte home">
        <img src={jasmineLogo} alt="" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            className={activeSection === item.toLowerCase() ? 'active' : ''}
            key={item}
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <span className="shape shape-one" />
        <span className="shape shape-two" />
        <span className="shape shape-three" />
      </div>

      <div className="hero-content">
        <div>
          <span className="status-pill">Portfolio</span>
          <h1>Jasmine Basarte</h1>
          <p className="hero-subtitle">BS Information Technology Student</p>
          <p className="hero-role">Developer &bull; Problem Solver</p>

          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-frame">
          <img src={profileImage} alt="Jasmine Basarte" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="page-section about-layout" id="about">
      <div className="about-copy">
        <SectionHeader eyebrow="About Me" title="Hi, I'm Jasmine.">
          I'm a third-year BS Information Technology student passionate about
          software development, UI/UX design, networking, and digital creativity.
          I enjoy building solutions that combine functionality, usability, and
          visual appeal.
        </SectionHeader>

        <div className="stats-grid">
          {stats.map((stat) => (
            <GlassCard className="stat-card" key={stat}>
              {stat}
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="about-media-stack">
        <GlassCard className="video-card">
          <video src={aboutVideo} controls muted playsInline />
        </GlassCard>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="page-section" id="skills">
      <SectionHeader eyebrow="Skills" title="What I use and practice">
        These are the tools and areas I have been working with through class
        projects, personal practice, and design experiments.
      </SectionHeader>

      <div className="skill-grid">
        {skills.map((group) => (
          <GlassCard className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-list">
              {group.items.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.filters.includes(activeFilter))
  }, [activeFilter])
  const activeProject = visibleProjects[activeProjectIndex] ?? visibleProjects[0]
  const previousProject =
    visibleProjects[
      (activeProjectIndex - 1 + visibleProjects.length) % visibleProjects.length
    ]
  const nextProject = visibleProjects[(activeProjectIndex + 1) % visibleProjects.length]

  const showPreviousProject = () => {
    setActiveProjectIndex(
      (currentIndex) =>
        (currentIndex - 1 + visibleProjects.length) % visibleProjects.length,
    )
  }

  const showNextProject = () => {
    setActiveProjectIndex(
      (currentIndex) => (currentIndex + 1) % visibleProjects.length,
    )
  }

  return (
    <section className="page-section" id="projects">
      <SectionHeader eyebrow="Projects" title="A mix of school and creative work">
        Here are the apps, websites, systems, games, and network activities I
        have built or designed so far.
      </SectionHeader>

      <div className="filter-tabs" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            aria-selected={activeFilter === filter}
            className={activeFilter === filter ? 'active' : ''}
            key={filter}
            onClick={() => {
              setActiveFilter(filter)
              setActiveProjectIndex(0)
            }}
            role="tab"
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-deck">
        <div className="project-spotlight" key={activeProject.title}>
          <div className="spotlight-media">
            {activeProject.video ? (
              <video
                src={activeProject.video}
                poster={activeProject.image}
                controls
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={activeProject.image} alt={activeProject.title} />
            )}
          </div>
          <div className="spotlight-content">
            <span className="project-count">
              {String(activeProjectIndex + 1).padStart(2, '0')} /{' '}
              {String(visibleProjects.length).padStart(2, '0')}
            </span>
            <span className="project-type">{activeProject.type}</span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="tag-row">
              {activeProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-controls">
            <button
              aria-label={`Show previous project, ${previousProject.title}`}
              onClick={showPreviousProject}
              type="button"
            >
              Prev
            </button>
            <button
              aria-label={`Show next project, ${nextProject.title}`}
              onClick={showNextProject}
              type="button"
            >
              Next
            </button>
          </div>
        </div>

        <div className="project-thumbnails" aria-label="Project list">
          {visibleProjects.map((project, index) => (
            <button
              className={activeProjectIndex === index ? 'active' : ''}
              key={project.title}
              onClick={() => setActiveProjectIndex(index)}
              type="button"
            >
              <img src={project.image} alt="" />
              <span>{project.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isGalleryDragging, setIsGalleryDragging] = useState(false)
  const [galleryDragProgress, setGalleryDragProgress] = useState(0)
  const dragStartX = useRef(0)
  const dragDeltaX = useRef(0)
  const galleryPointerId = useRef(null)

  const getCircularOffset = (index) => {
    const halfGallery = designGallery.length / 2
    let offset = index - galleryIndex

    if (offset > halfGallery) {
      offset -= designGallery.length
    }

    if (offset < -halfGallery) {
      offset += designGallery.length
    }

    return offset + galleryDragProgress
  }

  const showGalleryItem = (targetIndex) => {
    setGalleryDragProgress(0)
    setGalleryIndex((targetIndex + designGallery.length) % designGallery.length)
  }

  const showPrevious = () => {
    showGalleryItem((galleryIndex - 1 + designGallery.length) % designGallery.length)
  }

  const showNext = () => {
    showGalleryItem((galleryIndex + 1) % designGallery.length)
  }

  const startGalleryDrag = (event) => {
    dragStartX.current = event.clientX
    dragDeltaX.current = 0
    galleryPointerId.current = event.pointerId
    setIsGalleryDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveGalleryDrag = (event) => {
    if (!isGalleryDragging) {
      return
    }

    const dragDistance = event.clientX - dragStartX.current
    dragDeltaX.current = dragDistance
    setGalleryDragProgress(Math.max(-1.35, Math.min(1.35, dragDistance / 260)))
  }

  const endGalleryDrag = (event) => {
    if (!isGalleryDragging) {
      return
    }

    const swipeDistance = 72

    if (dragDeltaX.current > swipeDistance) {
      showPrevious()
    } else if (dragDeltaX.current < -swipeDistance) {
      showNext()
    } else {
      setGalleryDragProgress(0)
    }

    setIsGalleryDragging(false)

    if (
      event?.currentTarget?.hasPointerCapture &&
      galleryPointerId.current !== null &&
      event.currentTarget.hasPointerCapture(galleryPointerId.current)
    ) {
      event.currentTarget.releasePointerCapture(galleryPointerId.current)
    }

    galleryPointerId.current = null
  }

  return (
    <section className="page-section" id="gallery">
      <SectionHeader eyebrow="Graphic Design" title="Designs I made along the way">
        Posters, layout studies, and visual exercises from my graphic design
        work.
      </SectionHeader>

      <div className="gallery-showcase">
        <div className="gallery-controls">
          <button
            aria-label="Previous gallery item"
            onClick={showPrevious}
            type="button"
          >
            Prev
          </button>
          <button aria-label="Next gallery item" onClick={showNext} type="button">
            Next
          </button>
        </div>

        <div
          aria-label="Draggable design gallery"
          aria-live="polite"
          className={`gallery-carousel ${isGalleryDragging ? 'dragging' : ''}`}
          onPointerCancel={endGalleryDrag}
          onPointerDown={startGalleryDrag}
          onPointerMove={moveGalleryDrag}
          onPointerUp={endGalleryDrag}
        >
          <div className="gallery-track">
            {designGallery.map((item, index) => {
              const cardOffset = getCircularOffset(index)
              const absOffset = Math.abs(cardOffset)

              return (
                <article
                  className={`gallery-slide ${
                    galleryIndex === index ? 'active' : ''
                  }`}
                  key={item.title}
                  style={{
                    '--abs-offset': absOffset,
                    '--offset': cardOffset,
                    zIndex: 20 - Math.round(absOffset * 4),
                  }}
                >
                  <div className="gallery-artwork">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="gallery-info">
                    <span>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(designGallery.length).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="gallery-dots" aria-label="Gallery items">
        {designGallery.map((item, index) => (
          <button
            aria-label={`Show ${item.title}`}
            aria-selected={galleryIndex === index}
            className={galleryIndex === index ? 'active' : ''}
            key={item.title}
            onClick={() => showGalleryItem(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="page-section contact-section" id="contact">
      <div className="contact-shell">
        <div className="contact-intro">
          <SectionHeader eyebrow="Contact" title="Let's connect">
            For project questions, collaboration, or to see more of my work,
            these are the best places to reach me.
          </SectionHeader>
          <a className="contact-primary" href="mailto:basartejasmine@gmail.com">
            Send an email
          </a>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              className="contact-link"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              <span className="contact-icon-wrap">
                <SocialIcon name={link.icon} />
              </span>
              <span className="contact-link-copy">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </span>
              <span className="contact-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    const animatedSections = document.querySelectorAll(
      '.hero-section, .page-section',
    )

    animatedSections.forEach((section) => {
      section.classList.add('reveal-on-scroll')
    })

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    animatedSections.forEach((section) => sectionObserver.observe(section))

    return () => sectionObserver.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}

export default App
