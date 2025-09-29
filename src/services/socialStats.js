// Social Stats Service - Handles fetching data from various social platforms

class SocialStatsService {
  constructor() {
    this.cache = new Map()
    this.cacheTimeout = 5 * 60 * 1000 // 5 minutes
  }

  // Generic cache getter
  getCachedData(key) {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data
    }
    return null
  }

  // Generic cache setter
  setCachedData(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    })
  }

  // Format large numbers for display
  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  // GitHub API integration
  async fetchGitHubStats(username, statsConfig) {
    const cacheKey = `github_${username}`
    const cached = this.getCachedData(cacheKey)
    if (cached) return cached

    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!userResponse.ok) throw new Error(`GitHub API error: ${userResponse.status}`)

      const userData = await userResponse.json()

      // Fetch repositories for star count calculation
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      if (!reposResponse.ok) throw new Error(`GitHub repos API error: ${reposResponse.status}`)

      const reposData = await reposResponse.json()
      const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0)

      // Map the requested stats
      const statsData = statsConfig.map(stat => {
        let value
        switch (stat.type) {
          case 'public_repos':
            value = userData.public_repos
            break
          case 'followers':
            value = userData.followers
            break
          case 'following':
            value = userData.following
            break
          case 'total_stars':
            value = totalStars
            break
          default:
            value = 0
        }

        return {
          number: this.formatNumber(value),
          label: stat.label,
          raw: value
        }
      })

      this.setCachedData(cacheKey, statsData)
      return statsData

    } catch (error) {
      console.error('Error fetching GitHub stats:', error)
      throw error
    }
  }

  // Instagram API integration (requires Instagram Basic Display API)
  async fetchInstagramStats(username, statsConfig) {
    // Note: Instagram API requires app approval and access tokens
    // This is a placeholder for when API access is available
    throw new Error('Instagram API integration requires access token and app approval')
  }

  // LinkedIn API integration (requires LinkedIn API access)
  async fetchLinkedInStats(profileId, statsConfig) {
    // Note: LinkedIn API requires OAuth and special permissions
    // This is a placeholder for when API access is available
    throw new Error('LinkedIn API integration requires OAuth setup')
  }

  // Twitter API integration (requires Twitter API v2 access)
  async fetchTwitterStats(username, statsConfig) {
    // Note: Twitter API requires API keys and Bearer token
    // This is a placeholder for when API access is available
    throw new Error('Twitter API integration requires API credentials')
  }

  // Check if any social platforms are enabled
  hasEnabledPlatforms(socialStatsConfig) {
    return Object.values(socialStatsConfig).some(config => config.enabled)
  }

  // Main method to fetch stats based on platform configuration
  async fetchSocialStats(socialStatsConfig) {
    const results = {}

    // If no platforms are enabled, return empty results
    if (!this.hasEnabledPlatforms(socialStatsConfig)) {
      return results
    }

    for (const [platform, config] of Object.entries(socialStatsConfig)) {
      if (!config.enabled) continue

      try {
        switch (platform) {
          case 'github':
            results[platform] = await this.fetchGitHubStats(config.username, config.stats)
            break
          case 'instagram':
            results[platform] = await this.fetchInstagramStats(config.username, config.stats)
            break
          case 'linkedin':
            results[platform] = await this.fetchLinkedInStats(config.profileId, config.stats)
            break
          case 'twitter':
            results[platform] = await this.fetchTwitterStats(config.username, config.stats)
            break
          default:
            console.warn(`Unknown social platform: ${platform}`)
        }
      } catch (error) {
        console.error(`Failed to fetch ${platform} stats:`, error.message)
        results[platform] = null // Will fall back to static data
      }
    }

    return results
  }

  // Get the first enabled platform's stats for display
  getDisplayStats(socialStatsResults, fallbackStats) {
    // If no platforms were attempted (all disabled), return null to hide section
    if (Object.keys(socialStatsResults).length === 0) {
      return null
    }

    // Find the first successful platform result
    for (const [platform, stats] of Object.entries(socialStatsResults)) {
      if (stats && Array.isArray(stats)) {
        return stats
      }
    }

    // Fall back to static stats only if platforms were enabled but failed
    return fallbackStats
  }
}

// Export singleton instance
export const socialStatsService = new SocialStatsService()
export default socialStatsService