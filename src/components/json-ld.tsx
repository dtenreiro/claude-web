import { siteConfig } from '@/lib/config';

/**
 * JSON-LD structured data for SEO
 * Provides search engines with rich information about the person and website
 */

interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  jobTitle: string;
  worksFor: {
    '@type': 'Organization';
    name: string;
    url?: string;
  };
  sameAs: string[];
  knowsAbout: string[];
  alumniOf: {
    '@type': 'EducationalOrganization';
    name: string;
  }[];
}

interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  author: {
    '@type': 'Person';
    name: string;
  };
}

function generatePersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: siteConfig.currentRole,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.currentCompany,
      url: siteConfig.currentCompanyUrl || undefined,
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      'Artificial Intelligence',
      'Investment Management',
      'Finance',
      'Economics',
      'Machine Learning',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Yale University',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Regis High School',
      },
    ],
  };
}

function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };
}

/**
 * Component that renders JSON-LD structured data scripts
 * Should be included in the document head
 */
export function JsonLd() {
  const personSchema = generatePersonSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
