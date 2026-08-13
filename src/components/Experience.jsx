import { experienceData } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span> Experience
        </h2>
        <div className="experience-list">
          {experienceData.map((job, index) => (
            <article key={index} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">
                  {job.role} <span className="experience-accent">@ {job.company}</span>
                </h3>
                <div className="experience-meta">
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-location">{job.location}</span>
                  {job.isCurrent && (
                    <span className="experience-badge">Current</span>
                  )}
                </div>
              </div>
              <ul className="experience-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
