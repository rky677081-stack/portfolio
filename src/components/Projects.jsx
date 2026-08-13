import { projectsData } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03.</span> Projects
        </h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
