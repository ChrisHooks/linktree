export const profileConfig = {
  // Basic profile info
  name: "Chris Hooks",
  initials: "CH",
  avatar: "https://media.licdn.com/dms/image/v2/C4E03AQHN-NIyNGvf6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639329424160?e=1761782400&v=beta&t=8hUszSO7J4F5yOnCYZ3s4Z9KZtVyGp9dv67vt5sj4bo", // Set to image URL/path to display avatar, null to show initials
  bio: "Founder | Fractional CTO",
  tagline: "Building amazing things with code ✨",

  // Social stats configuration - specify which platforms to pull data from
  socialStats: {
    // GitHub stats (repos, followers, stars)
    github: {
      username: "ChrisHooks",
      enabled: false,
      stats: [
        { type: "public_repos", label: "Repos" },
        { type: "followers", label: "Followers" },
        { type: "total_stars", label: "Stars" } // Custom calculated stat
      ]
    },

    // Instagram stats (can be enabled when API access is available)
    instagram: {
      username: "yourusername",
      enabled: false,
      stats: [
        { type: "posts", label: "Posts" },
        { type: "followers", label: "Followers" },
        { type: "following", label: "Following" }
      ]
    },

    // LinkedIn stats (requires API access)
    linkedin: {
      profileId: "christopher-hooks",
      enabled: false,
      stats: [
        { type: "connections", label: "Connections" },
        { type: "posts", label: "Posts" },
        { type: "followers", label: "Followers" }
      ]
    },

    // Twitter/X stats (requires API access)
    twitter: {
      username: "yourusername",
      enabled: false,
      stats: [
        { type: "followers", label: "Followers" },
        { type: "tweets", label: "Tweets" },
        { type: "likes", label: "Likes" }
      ]
    }
  },

  // Static fallback stats (used if APIs fail or are disabled)
  fallbackStats: [
    { number: "50+", label: "Projects" },
    { number: "1.2k", label: "Followers" },
    { number: "200+", label: "Stars" }
  ],

  // Links configuration
  links: [
    // {
    //   id: "github",
    //   title: "GitHub Profile",
    //   url: "https://github.com/ChrisHooks",
    //   icon: "📱",
    //   className: "github"
    // },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/christopher-hooks/",
      icon: "💼",
      className: "linkedin"
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      url: "https://yourportfolio.com",
      icon: "🌐",
      className: "portfolio"
    },
    // {
    //   id: "twitter",
    //   title: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: "🐦",
    //   className: "twitter"
    // },
    // {
    //   id: "email",
    //   title: "Email Me",
    //   url: "mailto:your.email@example.com",
    //   icon: "✉️",
    //   className: "email"
    // },
    // {
    //   id: "resume",
    //   title: "Download Resume",
    //   url: "https://yourresume.com/resume.pdf",
    //   icon: "📄",
    //   className: "resume"
    // }
  ],

  // Footer configuration
  footer: {
    text: "Made with ❤️ for GitHub Pages",
    repoText: "Make your own",
    repoUrl: "https://github.com/ChrisHooks/linktree"
  }
}