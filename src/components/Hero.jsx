import { personalData } from '../data/portfolioData'

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content container">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">{personalData.name}.</h1>
        <h2 className="hero-role">I&apos;m a {personalData.role}.</h2>
        <p className="hero-tagline">{personalData.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
