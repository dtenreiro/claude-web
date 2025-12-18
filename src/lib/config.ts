// Personal configuration - Update this file with your information
export const siteConfig = {
  // Basic Info
  name: 'Daniel Tenreiro',
  location: 'New York, USA',

  // URLs
  siteUrl: 'https://danieltenreiro.com',

  // Bio (used on home page)
  shortBio:
    'Investor & researcher.',

  // Extended bio (used on about page)
  fullBio: `Daniel Tenreiro is an investor, writer, and researcher focused on developing artificial intelligence systems for investment management. He serves as managing partner of **Autoencoder Holdings**.

Previously, he worked as a research fellow at **Thiel Macro**, a global macro hedge fund based in Los Angeles. Before that, he was an analyst at a New York-based long/short equity fund. He began his career at **National Review**, where he covered finance and economics as a writer and editor. His work has been published in *National Review*, *City Journal*, and *The Spectator*, among other outlets.

He is a native of New York City and attended **Regis High School** (2015) and **Yale University** (2019), where he studied economics.`,

  // Current work
  currentRole: 'Managing Partner',
  currentCompany: 'Autoencoder Holdings',
  currentCompanyUrl: 'https://autoencoderholdings.com',
  currentDescription: 'Building AI‑native research and trading infrastructure.',

  // Experience
  experience: [
    {
      title: 'Managing Partner',
      company: 'Autoencoder Holdings',
      companyUrl: 'https://autoencoderholdings.com',
      period: '2023 - Present',
      description: 'Developing AI-native research and trading infrastructure across the full investment lifecycle: data acquisition, model development, portfolio construction, and execution.',
    },
    {
      title: 'Research Fellow',
      company: 'Thiel Macro',
      companyUrl: '',
      period: '2021 - 2023',
      description: 'Conducted global macro research with emphasis on regime analysis, market positioning, and risk assessment.',
    },
    {
      title: 'Analyst',
      company: 'Long/Short Equity Fund',
      companyUrl: '',
      period: '2020 - 2021',
      description: 'Performed fundamental and systematic research, position sizing analysis, and portfolio risk management.',
    },
    {
      title: 'Writer & Editor',
      company: 'National Review',
      companyUrl: 'https://nationalreview.com',
      period: '2019 - 2021',
      description: 'Covered finance and economics; contributed essays to National Review, City Journal, and The Spectator.',
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