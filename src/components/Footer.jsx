import { personalData } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {personalData.name}. Built with React &
          Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
