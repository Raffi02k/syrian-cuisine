import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { Home, Utensils, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={`404 - Sidan hittades inte | ${siteContent.companyName}`}
        description="Den efterfrågade sidan kunde tyvärr inte hittas."
      />

      <section
        className="section"
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '520px',
              margin: '0 auto',
              background: 'var(--bg-dark-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '48px 32px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '5rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                display: 'block',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              404
            </span>
            <h2 style={{ marginBottom: '16px' }}>Sidan kunde inte hittas</h2>
            <p style={{ marginBottom: '32px' }}>
              Adressen du sökte verkar inte finnas eller har flyttats. Använd snabblänkarna nedan för att hitta rätt.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <NavLink to="/" className="btn btn-primary">
                <Home size={18} />
                <span>Gå till Startsidan</span>
              </NavLink>
              <NavLink to="/meny" className="btn btn-secondary">
                <Utensils size={18} />
                <span>Se Vår Meny</span>
              </NavLink>
              <NavLink to="/kontakt" className="btn btn-secondary">
                <Phone size={18} />
                <span>Kontakta Oss</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
