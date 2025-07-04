import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object | object[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Whiz - Custom Apps Built in 7 Days for $297 | Real Apps. Real Fast. Real Affordable.",
  description = "Get a custom app for your business built in 7 days starting at $297. See demo before you pay. Transparent pricing, guaranteed delivery, direct developer access.",
  keywords = "custom app development, business apps, small business software, mobile apps, web applications, affordable app development",
  canonicalUrl = "https://whiz.so/",
  ogImage = "https://whiz.so/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  author = "Neek",
  publishedTime,
  modifiedTime,
  articleSection,
  articleTags
}) => {
  // Generate default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Whiz",
    "url": "https://whiz.so",
    "logo": "https://whiz.so/logo.png",
    "description": "Custom app development for businesses. Apps built in 7 days starting at $297.",
    "founder": {
      "@type": "Person",
      "name": "Neek"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1-800-WHIZ-APP",
      "contactType": "customer service",
      "email": "neek@whiz.so"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/whizapps",
      "https://linkedin.com/company/whiz-apps"
    ]
  };

  // Combine default and custom structured data
  const allStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? [defaultStructuredData, ...structuredData]
      : [defaultStructuredData, structuredData]
    : defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Whiz" />
      
      {/* Article specific Open Graph */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      {articleTags && articleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@whizapps" />
      <meta name="twitter:creator" content="@whizapps" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(allStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;