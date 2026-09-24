import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Sparkles, Award, Phone, Calendar, Quote, ArrowUpRight } from 'lucide-react';
import { chefProfile } from '../content/dishesAnatomy';
import { siteContent } from '../content/siteContent';

export const ChefSpotlight: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <section className="home-chef home-wrap" id="kocken" aria-labelledby="home-chef-title">
        <figure className="home-chef__portrait">
          <img src={chefProfile.portrait} alt="Nana, kocken bakom Syrian Cuisine" loading="lazy" decoding="async" width="523" height="1024" />
          <figcaption><span>Nana · Kock & grundare</span><span className="font-arabic" lang="ar" dir="rtl">الشيف نانا</span></figcaption>
        </figure>
        <div className="home-chef__story">
          <span className="home-eyebrow">Människan bakom smakerna</span>
          <h2 id="home-chef-title">Möt Nana.<br /><em>Mat från hjärtat.</em></h2>
          <p>Med rötterna i det syriska köket lagar Nana mat som för människor samman. Handrullade vinblad, doftande kryddor och generösa fat – allt med samma omsorg som hemma.</p>
          <blockquote>{chefProfile.quoteSv}</blockquote>
          <NavLink to="/om-oss" className="home-link">Lär känna Nana <ArrowUpRight size={17} /></NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="section chef-spotlight-section" id="kocken">
      <div className="container">
        <div className="chef-spotlight-card">
          <div className="chef-spotlight-grid">
            {/* CHEF PORTRAIT & BADGES */}
            <div className="chef-visual-wrapper">
              <div className="chef-frame">
                <div className="chef-halo-glow" />
                <img
                  src={chefProfile.portrait}
                  alt={`${chefProfile.name} – ${chefProfile.roleSv}`}
                  className="chef-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="chef-seal-badge">
                  <Award size={22} className="seal-icon" />
                  <span className="seal-text">Tradition & Äkthet</span>
                </div>
              </div>

              <div className="chef-experience-tag">
                <Sparkles size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>{chefProfile.experience}</span>
              </div>
            </div>

            {/* CHEF STORY & CREDENTIALS */}
            <div className="chef-details-wrapper">
              <div className="section-eyebrow" style={{ textAlign: 'left', marginBottom: '8px' }}>
                <Heart size={14} style={{ display: 'inline', marginRight: '6px' }} />
                <span>Möt Kocken Bakom Smakerna</span>
              </div>

              <h2 className="chef-name-heading">
                <span className="chef-title-ar font-arabic">{chefProfile.nameAr}</span>
                <span className="chef-title-sv">{chefProfile.name}</span>
              </h2>

              <p className="chef-role-sub font-arabic">{chefProfile.roleAr}</p>
              <p className="chef-role-sv">{chefProfile.roleSv}</p>

              <div className="chef-quote-box">
                <Quote size={28} className="quote-icon" />
                <p className="quote-text-sv">{chefProfile.quoteSv}</p>
                <p className="quote-text-ar font-arabic">{chefProfile.quoteAr}</p>
              </div>

              <p className="chef-story-body">{chefProfile.storySv}</p>
              <p className="chef-story-body-ar font-arabic">{chefProfile.storyAr}</p>

              {/* PILLARS GRID */}
              <div className="chef-pillars-grid">
                {chefProfile.pillars.map((pillar, idx) => (
                  <div key={idx} className="pillar-item">
                    <div className="pillar-dot" />
                    <div>
                      <strong className="pillar-title">{pillar.titleSv}</strong>
                      <span className="pillar-title-ar font-arabic">{pillar.titleAr}</span>
                      <p className="pillar-desc">{pillar.descSv}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAS */}
              <div className="chef-cta-row">
                <NavLink to="/kontakt#catering" className="btn btn-primary">
                  <Calendar size={18} />
                  <span>Beställ Catering till Fest & Event</span>
                </NavLink>
                <a href={`tel:${siteContent.phoneRaw}`} className="btn btn-secondary">
                  <Phone size={18} />
                  <span>Kontakta Kocken Direkt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
