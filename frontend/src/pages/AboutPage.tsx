import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { siteContent } from '../content/siteContent';
import { chefProfile } from '../content/dishesAnatomy';
import { Award, Compass, Users, Sparkles, Heart, Calendar, Phone, Quote } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={`Om Kocken Nana & Syrian Cuisine – ${siteContent.companyName}`}
        description="Läs om vår passion för det syriska matarvet, våra traditionella recept och hur vi levererar äkta festcatering i Trollhättan och Trestad."
        canonical="https://syrian-cuisine.vercel.app/om-oss"
      />

      {/* FIRST HERO: CHEF NANA PORTRAIT & INTRO */}
      <section className="about-hero" aria-label="Om Kocken Nana">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__content">
              <span className="section-eyebrow">Vår Berättelse & Filosofi</span>
              <span className="about-hero__arabic" lang="ar" dir="rtl">
                {chefProfile.nameAr} · {chefProfile.roleAr}
              </span>
              <h1 className="about-hero__title">Möt Kocken Bakom Smakerna – Nana</h1>
              <p className="about-hero__desc">
                {chefProfile.storySv}
              </p>

              <div className="about-hero__badges">
                <span className="about-hero__badge">
                  <Sparkles size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>20+ Års Mathantverk</span>
                </span>
                <span className="about-hero__badge">
                  <Award size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>Äkta Syriska Recept</span>
                </span>
                <span className="about-hero__badge">
                  <Heart size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>100% Hemlagat från Grunden</span>
                </span>
              </div>

              <div className="about-hero__actions">
                <NavLink to="/kontakt#offert" className="btn btn-primary">
                  <Calendar size={18} />
                  <span>Beställ Catering</span>
                </NavLink>
                <a href={`tel:${siteContent.phoneRaw}`} className="btn btn-secondary">
                  <Phone size={18} />
                  <span>Ring {siteContent.phone}</span>
                </a>
              </div>
            </div>

            <div className="about-hero__visual">
              <div className="about-hero__frame">
                <div className="chef-halo-glow" />
                <img
                  src={chefProfile.portrait}
                  alt={`${chefProfile.name} – ${chefProfile.roleSv}`}
                  className="chef-image"
                  loading="eager"
                  decoding="async"
                />
                <div className="chef-seal-badge">
                  <Award size={20} className="seal-icon" />
                  <span className="seal-text">Tradition & Äkthet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: QUOTE & TRADITION */}
      <section className="section">
        <div className="container">
          <div className="chef-quote-box" style={{ maxWidth: '820px', margin: '0 auto 60px auto' }}>
            <Quote size={28} className="quote-icon" />
            <p className="quote-text-sv">{chefProfile.quoteSv}</p>
            <p className="quote-text-ar font-arabic">{chefProfile.quoteAr}</p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="section-eyebrow">Tradition & Hantverk</span>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Recept som förts vidare genom sekler
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                Syrian Cuisine grundades ur en stark längtan efter att erbjuda äkta, oförfalskad syrisk matkultur i Sverige. Våra rätter är skapade utifrån gamla familjerecept från Damaskus och Aleppo, där varje ingrediens väljs med omsorg.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                Vi importerar specialkryddor som torkad sumak, za'atar, granatäppelmelass och apelsinblomsvatten direkt för att garantera den rätta balansen mellan syra, rökighet och sötma.
              </p>
            </div>

            <div
              style={{
                background: 'var(--bg-dark-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
              }}
            >
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>Våra Tre Grundpelare</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Kvalitet & Äkthet</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Inga genvägar eller halvfabrikat. Allt tillagas från grunden varje morgon.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
                    <Compass size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Kärleken till Kolgrillen</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Äkta träkolsglöd som låser in saftigheten och ger den karakteristiska aromen.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Gemenskap kring Bordet</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      I Mellanöstern är måltiden en fest att dela med dem man älskar.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '48px 24px',
              background: 'linear-gradient(180deg, var(--bg-dark-card), var(--bg-dark-elevated))',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <h3 style={{ marginBottom: '16px' }}>Vill du boka catering till ditt evenemang?</h3>
            <p style={{ maxWidth: '560px', margin: '0 auto 24px auto' }}>
              Vi levererar färdiglagad, rykande het festmat i Trollhättan, Vänersborg, Uddevalla och Trestad.
            </p>
            <NavLink to="/kontakt#offert" className="btn btn-primary">
              Beställ Catering & Få Offert
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

