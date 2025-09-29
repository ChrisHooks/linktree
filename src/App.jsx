import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLinkClick = (linkText) => {
    console.log('Link clicked:', linkText)
  }

  return (
    <div className="container">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      />

      <div className="profile-image">YN</div>
      <h1 className="profile-name">Your Name</h1>
      <p className="profile-bio">
        Full Stack Developer | Open Source Enthusiast<br />
        Building amazing things with code ✨
      </p>

      <div className="social-stats">
        <div className="stat">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-number">1.2k</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">200+</span>
          <span className="stat-label">Stars</span>
        </div>
      </div>

      <div className="links-container">
        <a
          href="https://github.com/ChrisHooks"
          className="link-item github"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('GitHub Profile')}
        >
          <span className="link-icon">📱</span>
          GitHub Profile
        </a>

        <a
          href="https://yourportfolio.com"
          className="link-item portfolio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Portfolio Website')}
        >
          <span className="link-icon">🌐</span>
          Portfolio Website
        </a>

        <a
          href="https://www.linkedin.com/in/christopher-hooks/"
          className="link-item linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('LinkedIn')}
        >
          <span className="link-icon">💼</span>
          LinkedIn
        </a>

        <a
          href="https://twitter.com/yourusername"
          className="link-item twitter"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Twitter')}
        >
          <span className="link-icon">🐦</span>
          Twitter
        </a>

        <a
          href="mailto:your.email@example.com"
          className="link-item email"
          onClick={() => handleLinkClick('Email Me')}
        >
          <span className="link-icon">✉️</span>
          Email Me
        </a>

        <a
          href="https://yourresume.com/resume.pdf"
          className="link-item resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Download Resume')}
        >
          <span className="link-icon">📄</span>
          Download Resume
        </a>
      </div>

      <div className="footer">
        <p>Made with ❤️ for GitHub Pages</p>
      </div>
    </div>
  )
}

export default App