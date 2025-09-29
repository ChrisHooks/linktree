import { useState, useEffect } from 'react'
import { profileConfig } from './config/profile'
import { socialStatsService } from './services/socialStats'

function App() {
  const [theme, setTheme] = useState('light')
  const [stats, setStats] = useState(profileConfig.fallbackStats)
  const [statsLoading, setStatsLoading] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const loadSocialStats = async () => {
      setStatsLoading(true)
      try {
        const socialStatsResults = await socialStatsService.fetchSocialStats(profileConfig.socialStats)
        const displayStats = socialStatsService.getDisplayStats(socialStatsResults, profileConfig.fallbackStats)
        setStats(displayStats)
      } catch (error) {
        console.error('Failed to load social stats:', error)
        // Keep fallback stats on error
      } finally {
        setStatsLoading(false)
      }
    }

    loadSocialStats()
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLinkClick = (linkTitle) => {
    console.log('Link clicked:', linkTitle)
  }

  return (
    <div className="container">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      />

      <div className="profile-image">
        {profileConfig.avatar ? (
          <img
            src={profileConfig.avatar}
            alt={`${profileConfig.name} avatar`}
            className="avatar-image"
          />
        ) : (
          profileConfig.initials
        )}
      </div>
      <h1 className="profile-name">{profileConfig.name}</h1>
      <p className="profile-bio">
        {profileConfig.bio}<br />
        {profileConfig.tagline}
      </p>

      <div className="social-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <span className="stat-number">
              {statsLoading ? '...' : stat.number}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="links-container">
        {profileConfig.links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className={`link-item ${link.className}`}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            onClick={() => handleLinkClick(link.title)}
          >
            <span className="link-icon">{link.icon}</span>
            {link.title}
          </a>
        ))}
      </div>

      <div className="footer">
        <p>
          {profileConfig.footer.text} •{' '}
          <a
            href={profileConfig.footer.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {profileConfig.footer.repoText} →
          </a>
        </p>
      </div>
    </div>
  )
}

export default App