import { aboutData } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className="about-highlights">
            {aboutData.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
