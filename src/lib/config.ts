// Personal configuration - Update this file with your information
export const siteConfig = {
  // Basic Info
  name: "Daniel Tenreiro",
  title: "Investor, Writer & Researcher",
  tagline: "Developing AI systems that enhance public-market trading strategies",
  location: "New York, USA",

  // URLs
  siteUrl: "https://yoursite.com",

  // Bio (used on home page)
  shortBio: "I am an investor, writer, and researcher developing AI systems that enhance public-market trading strategies as managing partner of Autoencoder Holdings.",

  // Extended bio (used on about page)
  fullBio: `I am an investor, writer, and researcher developing AI systems that enhance public-market trading strategies as managing partner of Autoencoder Holdings.

I previously worked as a research fellow at Thiel Macro, a global macro hedge fund in Los Angeles. Prior to that I worked at a NYC-based long/short equity fund after starting my career at National Review, where I covered finance and economics as a writer and editor. My writing has appeared in National Review, City Journal, and The Spectator, among other publications.

I grew up in New York City and attended Regis High School (2015) before studying economics at Yale University (2019).

I post regularly on Twitter and am reachable at the email icon linked to the left. Please get in touch — I have met great friends and collaborators online.`,

  // Current work
  currentRole: "Managing Partner",
  currentCompany: "Autoencoder Holdings",
  currentCompanyUrl: "https://autoencoder.com",
  currentDescription: "Developing AI systems that enhance public-market trading strategies.",

  // Experience
  experience: [
    {
      title: "Managing Partner",
      company: "Autoencoder Holdings",
      companyUrl: "https://autoencoder.com",
      period: "Present",
      description: "Developing AI systems that enhance public-market trading strategies.",
    },
    {
      title: "Research Fellow",
      company: "Thiel Macro",
      companyUrl: "https://thielmacro.com",
      period: "Previous",
      description: "Global macro hedge fund research in Los Angeles.",
    },
    {
      title: "Analyst",
      company: "Long/Short Equity Fund",
      companyUrl: "#",
      period: "Previous",
      description: "NYC-based long/short equity fund.",
    },
    {
      title: "Writer & Editor",
      company: "National Review",
      companyUrl: "https://nationalreview.com",
      period: "Previous",
      description: "Covered finance and economics. Writing also appeared in City Journal and The Spectator.",
    },
  ],

  // Now page content
  now: {
    updated: "December 2025",
    sections: [
      {
        title: "Working",
        content: "Developing AI systems that enhance public-market trading strategies at Autoencoder Holdings.",
      },
      {
        title: "Writing",
        content: "Writing about finance, economics, and markets. My work has appeared in National Review, City Journal, and The Spectator.",
      },
      {
        title: "Living",
        content: "Based in New York City. Regis High School (2015), Yale University (2019).",
      },
    ],
  },

  // Social links
  links: {
    email: "hello@example.com",
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // Add more links as needed
  },

  // All links for the links page
  allLinks: [
    { name: "Email", url: "mailto:hello@example.com", description: "Get in touch" },
    { name: "Twitter / X", url: "https://twitter.com/yourusername", description: "Thoughts and updates" },
    { name: "GitHub", url: "https://github.com/yourusername", description: "Open source projects" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", description: "Professional profile" },
    { name: "Blog", url: "/blog", description: "Writing and articles" },
    // Add more links as needed
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Now", href: "/now" },
    { name: "Links", href: "/links" },
  ],
};

export type SiteConfig = typeof siteConfig;
