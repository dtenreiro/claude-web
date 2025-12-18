// Personal configuration - Update this file with your information
export const siteConfig = {
  // Basic Info
  name: 'Daniel Tenreiro',
  title: 'Investor & researcher',
  tagline: 'AI systems for public‑market trading — research, infrastructure, and execution.',
  location: 'New York, USA',

  // URLs
  siteUrl: 'https://danieltenreiro.com',

  // Bio (used on home page)
  shortBio:
    'Investor & researcher — building AI-native systems for public‑market trading.',

  // Extended bio (used on about page)
  fullBio: `I’m an investor and researcher building AI systems that improve how public‑market trading strategies are researched, implemented, and risk‑managed.

I’m the managing partner of **Autoencoder Holdings**, where my work sits at the intersection of machine learning, market structure, and real‑world execution. I’m especially interested in the “infrastructure layer” of quant investing: data, modeling, portfolio construction, and the feedback loops that make systems robust.

Previously, I was a research fellow at **Thiel Macro** (Los Angeles). Before that, I worked at a New York long/short equity fund, and I started my career as a writer and editor at **National Review**, covering finance and economics. My writing has appeared in *National Review*, *City Journal*, and *The Spectator*.

I grew up in New York City. I attended Regis High School (2015) and studied economics at Yale University (2019).`,

  // Current work
  currentRole: 'Managing Partner',
  currentCompany: 'Autoencoder Holdings',
  currentCompanyUrl: 'https://autoencoderholdings.com',
  currentDescription: 'Building AI‑native research and trading infrastructure: data → models → portfolios → execution.',

  // Experience
  experience: [
    {
      title: 'Managing Partner',
      company: 'Autoencoder Holdings',
      companyUrl: 'https://autoencoderholdings.com',
      period: 'Present',
      description: 'Building AI‑native research and trading infrastructure: data → models → portfolios → execution.',
    },
    {
      title: 'Research Fellow',
      company: 'Thiel Macro',
      companyUrl: '',
      period: 'Previous',
      description: 'Global macro research with an emphasis on regime shifts, positioning, and risk.',
    },
    {
      title: 'Analyst',
      company: 'Long/Short Equity Fund',
      companyUrl: '#',
      period: 'Previous',
      description: 'Fundamental + systematic research, position sizing, and portfolio risk management.',
    },
    {
      title: 'Writer & Editor',
      company: 'National Review',
      companyUrl: 'https://nationalreview.com',
      period: 'Previous',
      description:
        'Covered finance and economics; essays also published in National Review, City Journal, and The Spectator.',
    },
  ],

  // Now page content
  now: {
    updated: 'December 2025',
    sections: [
      {
        title: 'Working',
        content:
          'Building AI systems and infrastructure that make public‑market strategies more adaptive and more honest about uncertainty.',
      },
      {
        title: 'Writing',
        content:
          'Writing about markets, economics, and the craft of investing—especially where narratives collide with incentives.',
      },
      {
        title: 'Living',
        content: 'New York City. Regis High School (2015), Yale University (2019).',
      },
      {
        title: 'Thinking',
        content: 'Decision‑making under uncertainty, long‑horizon compounding, and the limits of backtests.',
      },
    ],
  },

  // Social links
  links: {
    email: 'dtopeninbox@gmail.com',
    twitter: 'https://x.com/tenreirodaniel',
    github: 'https://github.com/dtenreiro',
    linkedin: 'https://linkedin.com/in/dantenreiro',
    // Add more links as needed
  },

  // All links for the links page
  allLinks: [
    { name: 'Email', url: 'mailto:dtopeninbox@gmail.com', description: 'Get in touch' },
    {
      name: 'Twitter / X',
      url: 'https://x.com/tenreirodaniel',
      description: 'Notes on markets + research',
    },
    { name: 'GitHub', url: 'https://github.com/dtenreiro', description: 'Code and experiments' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dantenreiro',
      description: 'Professional profile',
    },
    { name: 'Blog', url: '/blog', description: 'Writing' },
    // Add more links as needed
  ],

  // Navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Now', href: '/now' },
    { name: 'Links', href: '/links' },
  ],
};

export type SiteConfig = typeof siteConfig;
