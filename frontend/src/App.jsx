import { useMemo, useState } from 'react'
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

function Navbar() {
  const navItems = ['About', 'Skills', 'Projects', 'Gallery', 'Contact']

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Jasmine Basarte home">
        <img src={jasmineLogo} alt="" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
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

function ProjectCard({ project }) {
  return (
    <GlassCard className="project-card">
      <div className="project-media">
        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            controls
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={project.image} alt={project.title} />
        )}
      </div>
      <div className="project-body">
        <span className="project-type">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </GlassCard>
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
  const [galleryMotion, setGalleryMotion] = useState('next')
  const currentItem = designGallery[galleryIndex]
  const previousItem =
    designGallery[(galleryIndex - 1 + designGallery.length) % designGallery.length]
  const nextItem = designGallery[(galleryIndex + 1) % designGallery.length]

  const showPrevious = () => {
    setGalleryMotion('previous')
    setGalleryIndex(
      (currentIndex) =>
        (currentIndex - 1 + designGallery.length) % designGallery.length,
    )
  }

  const showNext = () => {
    setGalleryMotion('next')
    setGalleryIndex((currentIndex) => (currentIndex + 1) % designGallery.length)
  }

  return (
    <section className="page-section" id="gallery">
      <SectionHeader eyebrow="Graphic Design" title="Designs I made along the way">
        Posters, layout studies, and visual exercises from my graphic design
        work.
      </SectionHeader>

      <div className="gallery-carousel" aria-live="polite">
        <button
          aria-label={`Show previous design, ${previousItem.title}`}
          className="gallery-preview preview-previous"
          onClick={showPrevious}
          type="button"
        >
          <img src={previousItem.image} alt="" />
          <span>{previousItem.title}</span>
        </button>

        <div className={`gallery-feature ${galleryMotion}`} key={currentItem.title}>
          <img src={currentItem.image} alt={currentItem.title} />
          <div className="gallery-caption">
            <span>
              {String(galleryIndex + 1).padStart(2, '0')} /{' '}
              {String(designGallery.length).padStart(2, '0')}
            </span>
            <h3>{currentItem.title}</h3>
          </div>
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
        </div>

        <button
          aria-label={`Show next design, ${nextItem.title}`}
          className="gallery-preview preview-next"
          onClick={showNext}
          type="button"
        >
          <img src={nextItem.image} alt="" />
          <span>{nextItem.title}</span>
        </button>
      </div>

      <div className="gallery-dots" aria-label="Gallery items">
        {designGallery.map((item, index) => (
          <button
            aria-label={`Show ${item.title}`}
            aria-selected={galleryIndex === index}
            className={galleryIndex === index ? 'active' : ''}
            key={item.title}
            onClick={() => {
              setGalleryMotion(index > galleryIndex ? 'next' : 'previous')
              setGalleryIndex(index)
            }}
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
      <SectionHeader eyebrow="Contact" title="Reach me here">
        For project questions, collaboration, or just to see more of my work,
        these are the best places to find me.
      </SectionHeader>

      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a className="contact-link" href={link.href} key={link.label}>
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}

function App() {
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
