import React from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, description }) => {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
      </div>
    </section>
  );
};
