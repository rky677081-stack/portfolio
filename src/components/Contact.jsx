import { personalData } from '../data/portfolioData'

function Contact() {
  const { email, location, socials } = personalData

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">05.</span> Contact
        </h2>
        <div className="contact-box">
          <p className="contact-text">
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together.
          </p>
          <a href={`mailto:${email}`} className="btn btn-primary">
            Say Hello
          </a>
          <div className="contact-details">
            <p>
              <span className="contact-label">Email:</span>{' '}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <span className="contact-label">Location:</span> {location}
            </p>
          </div>
          <div className="contact-socials">
            <a href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={socials.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
