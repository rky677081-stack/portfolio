import { skillsData } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04.</span> Skills
        </h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
