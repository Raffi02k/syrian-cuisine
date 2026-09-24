import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Utensils, Phone, Calendar } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="logo-container"
            aria-label="Syrian Cuisine - Till startsidan"
          >
            <div className="logo-mark">
              <Utensils size={20} />
            </div>
            <span>{siteContent.companyName}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Huvudmeny">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action / CTA */}
          <div className="header-cta">
            <NavLink to="/kontakt#offert" className="btn btn-primary">
              <Calendar size={18} />
              <span>Beställ Catering</span>
            </NavLink>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div id="mobile-navigation" className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobilmeny" aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-links">
          {siteContent.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <NavLink
            to="/kontakt#offert"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Calendar size={18} />
            <span>Beställ Catering</span>
          </NavLink>
          <a
            href={`tel:${siteContent.phoneRaw}`}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={18} />
            <span>Ring {siteContent.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
