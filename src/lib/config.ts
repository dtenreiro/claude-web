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
      description: 'Developing AI‑native research and trading infrastructure across the full investment lifecycle: data acquisition, model development, portfolio construction, and execution.',
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

  // Highlights (notable mentions, reviews, praise)
  highlights: [
    {
      category: 'Serotonin Blurb',
      subject: 'Serotonin: A Novel',
      items: [
        {
          quote:
            'Michel Houellebecq might be the most brilliant and maddening French writer alive ... Houellebecq is always worth reading because he confronts his readers with fundamental questions. Is selfless love possible? After a certain age, is human life worthwhile?',
          author: 'Paul W. Gleason',
          source: 'The National Book Review',
          sourceUrl: '',
        },
        {
          quote:
            'We are living in the imagination of Michel Houellebecq ... Indeed, the rise of populism in the U.S. and Europe might as well have been choreographed by Houellebecq ... [He] has refined his style, developing richer plot points and keener social commentary ... Society has begun to catch up to Houellebecq\'s long-standing beefs with the sexual revolution, and whereas his invectives against neoliberalism seemed out of touch in the heady atmosphere of the end-of-history 1990s, they are now more apt than ever. In Serotonin, we are in a hell of our own, which we have built to our own taste.',
          author: 'Daniel Tenreiro',
          source: 'National Review',
          sourceUrl: 'https://www.nationalreview.com/2019/01/serotonin-michel-houellebecq-novel-review/',
        },
      ],
    },
    {
      category: 'Mentions',
      subject: '',
      items: [
        {
          embedUrl: 'https://x.com/VicNiederhoffer/status/1867015903105175676',
          author: 'Vic Niederhoffer',
          source: 'Twitter',
          sourceUrl: 'https://x.com/VicNiederhoffer',
          date: 'December 11, 2024',
        },
        {
          quote:
            '"The thing is to turn crazy without any provocation," Quixote tells Sancho Panza, explaining his decision to abandon his quiet life and pursue knight-errantry.',
          author: 'Victor Niederhoffer',
          source: 'Daily Speculations',
          sourceUrl: 'https://dailyspeculations.com/wordpress/?p=14254',
          date: 'December 13, 2024',
          context: 'Citing "A Quixotic President" by Daniel Tenreiro',
        },
      ],
    },
    {
      category: 'Selected Writing',
      subject: '',
      items: [
        {
          title: 'A Quixotic President',
          description:
            'On the parallels between Don Quixote and modern political leadership.',
          source: 'National Review',
          sourceUrl: 'https://www.nationalreview.com/2021/01/a-quixotic-president/',
          date: 'January 13, 2021',
        },
      ],
    },
  ],

  // Projects (used on Projects page)
  projects: [
    {
      name: 'Macro Regime Detector',
      url: 'https://github.com/dtenreiro/macro-regime-detector',
      description: 'Unsupervised clustering of market regimes with HMM + PCA.',
    },
    {
      name: 'Alpha Pipeline Sandbox',
      url: 'https://github.com/dtenreiro/alpha-pipeline',
      description: 'Experimentation harness for factors, validation, and portfolio combos.',
    },
  ],

  // Navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Now', href: '/now' },
    { name: 'Highlights', href: '/highlights' },
    { name: 'Links', href: '/links' },
  ],
};

export type SiteConfig = typeof siteConfig;