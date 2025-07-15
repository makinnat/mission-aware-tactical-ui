import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Aware Defense - Military-Grade Hearing Protection & Biometric Wearables",
  description = "Custom-fit hearing protection and biometric wearables for warfighters. FDA-cleared scanning technology trusted by Special Operations.",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  structuredData,
  noindex = false
}) => {
  const fullTitle = title.includes('Aware Defense') ? title : `${title} | Aware Defense`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Aware Defense" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Shopify-compatible meta */}
      <meta name="shopify-checkout-api-token" content="" />
      <meta name="shopify-digital-wallet" content="1" />
    </Helmet>
  );
};