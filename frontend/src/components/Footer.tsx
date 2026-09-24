import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Utensils, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Story */}
          <div>
            <a
              href="/"
              onClick={handleLogoClick}
              className="logo-container"
              style={{ marginBottom: '16px' }}
            >
              <div className="logo-mark">
                <Utensils size={18} />
              </div>
              <span>{siteContent.companyName}</span>
            </a>
            <p style={{ fontSize: '0.92rem', marginBottom: '20px', maxWidth: '320px' }}>
              {siteContent.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {siteContent.socialLinks.instagram && (
                <a
                  href={siteContent.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteContent.socialLinks.facebook && (
                <a
                  href={siteContent.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="footer-col-title">Sidor</h4>
            <ul className="footer-links">
              {siteContent.navigation.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="footer-link">
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/kontakt" className="footer-link">
                  Kontakt & Offert
                </NavLink>
              </li>
              <li>
                <NavLink to="/kontakt#bordsbokning" className="footer-link">
                  Bordsbokning
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Öppettider */}
          <div>
            <h4 className="footer-col-title">Öppettider</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--accent-gold)', marginTop: '4px', flexShrink: 0 }} />
                <span>{siteContent.openingHours.weekdays}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--accent-gold)', marginTop: '4px', flexShrink: 0 }} />
                <span>{siteContent.openingHours.weekends}</span>
              </li>
              <li style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                {siteContent.openingHours.kitchenCloses}
              </li>
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <h4 className="footer-col-title">Hitta Hit</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)', marginTop: '4px', flexShrink: 0 }} />
                <a
                  href={siteContent.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {siteContent.address}, {siteContent.postalCode}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href={`tel:${siteContent.phoneRaw}`} className="footer-link">
                  {siteContent.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href={`mailto:${siteContent.email}`} className="footer-link">
                  {siteContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {siteContent.companyName}. Alla rättigheter förbehållna.
          </div>

          {/* MediaMagnet Credit - Required */}
          <div className="mediamagnet-credit-wrapper">
            <a
              href="https://mediamagnet-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mediamagnet-credit"
              title="MediaMagnet Webbyrå"
            >
              <span>Byggd av</span>
              <span className="mediamagnet-badge">MEDIAMAGNET</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
