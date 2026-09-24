import React, { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/og.png',
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    const canonicalUrl = canonical ?? `https://syrian-cuisine.vercel.app${window.location.pathname}`;
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Open Graph
    const setMetaTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property='${property}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('og:title', title);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:description', description);
    setMetaTag('og:image', ogImage);
  }, [title, description, canonical, ogImage]);

  return null;
};
