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
  ogImage = '/images/hero-bild.png',
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

    // Open Graph & Twitter meta tags
    const setMetaTag = (attr: 'property' | 'name', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}='${key}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const absoluteOgImage = ogImage.startsWith('http')
      ? ogImage
      : `https://syrian-cuisine.vercel.app${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', absoluteOgImage);
    setMetaTag('property', 'og:image:secure_url', absoluteOgImage);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteOgImage);
  }, [title, description, canonical, ogImage]);

  return null;
};
