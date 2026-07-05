import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'
import './Projects.css'

gsap.registerPlugin(useGSAP)

const CATEGORIES = ['all', 'web', 'python', 'movil']

function Projects() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [category, setCategory] = useState('all')
  const gridRef = useRef(null)

  const filtered = category === 'all' ? projects : projects.filter((p) => p.category === category)

  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    },
    { scope: gridRef, dependencies: [category] },
  )

  return (
    <section id="proyectos" className="projects">
      <h2 className="section-title">{t('projects.title')}</h2>

      <div className="projects__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`projects__tab ${category === cat ? 'is-active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {t(`projects.category${cat.charAt(0).toUpperCase() + cat.slice(1)}`)}
          </button>
        ))}
      </div>

      <div className="projects__grid" ref={gridRef}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
