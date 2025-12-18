// Personal configuration - Update this file with your information
export const siteConfig = {
  // Basic Info
  name: "Daniel Tenreiro",
  title: "Your Title",
  tagline: "A brief tagline about yourself",
  location: "City, Country",

  // URLs
  siteUrl: "https://yoursite.com",

  // Bio (used on home page)
  shortBio: "I'm a software engineer and product builder. I create tools that help people work and live better.",

  // Extended bio (used on about page)
  fullBio: `I'm a software engineer and product builder based in [Your City]. I create tools that help people work and live better, constantly exploring new ways to interact with technology.

I'm passionate about building products that make a real difference in people's lives. My focus is on creating intuitive, well-crafted solutions that solve genuine problems.`,

  // Current work
  currentRole: "Software Engineer",
  currentCompany: "Your Company",
  currentCompanyUrl: "https://yourcompany.com",
  currentDescription: "Building tools and products that help people be more productive.",

  // Experience
  experience: [
    {
      title: "Software Engineer",
      company: "Current Company",
      companyUrl: "https://example.com",
      period: "2023 - Present",
      description: "Building innovative products and features.",
    },
    {
      title: "Senior Developer",
      company: "Previous Company",
      companyUrl: "https://example.com",
      period: "2020 - 2023",
      description: "Led development of key platform features.",
    },
    {
      title: "Developer",
      company: "Earlier Company",
      companyUrl: "https://example.com",
      period: "2018 - 2020",
      description: "Full-stack development and system design.",
    },
  ],

  // Now page content
  now: {
    updated: "December 2025",
    sections: [
      {
        title: "Working",
        content: "Currently focused on building AI-powered tools and applications. Exploring new paradigms for human-computer interaction.",
      },
      {
        title: "Learning",
        content: "Diving deeper into machine learning, distributed systems, and product design. Always reading and experimenting with new technologies.",
      },
      {
        title: "Living",
        content: "Based in [Your City]. Enjoying fitness, photography, and traveling when possible.",
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
