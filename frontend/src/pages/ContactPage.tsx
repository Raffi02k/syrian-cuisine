import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { ReservationForm } from '../components/ReservationForm';
import { siteContent } from '../content/siteContent';
import { MapPin, Phone, Mail, Clock, Truck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title={`Beställ Catering & Offert – ${siteContent.companyName}`}
        description="Beställ syrisk catering och festbufféer i Trollhättan, Vänersborg och Uddevalla. Begär kostnadsfri offert för 15 till 300+ personer."
        canonical="https://syrian-cuisine.vercel.app/kontakt"
      />

      <PageHero
        eyebrow="Trollhättan & Trestad"
        title="Beställ Catering & Få Offert"
        description="Planerar ni fest, bröllop, födelsedag eller företagsevent? Fyll i formuläret så återkommer vi med ett komplett prisförslag."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            {/* Form */}
            <div>
              <ReservationForm />
            </div>

            {/* Info & Catering Perks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div
                style={{
                  background: 'var(--bg-dark-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(20px, 4vw, 32px)',
                }}
              >
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Cateringkontakt</h3>

                <ul className="footer-links" style={{ gap: '16px', marginBottom: '24px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Plats & Kök</strong>
                      <span>{siteContent.city} (Leveranser i Trollhättan, Vänersborg & Uddevalla)</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Phone size={20} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Telefon & WhatsApp</strong>
                      <a href={`tel:${siteContent.phoneRaw}`} style={{ color: 'var(--accent-gold)' }}>
                        {siteContent.phone}
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>E-post</strong>
                      <a href={`mailto:${siteContent.email}`} style={{ color: 'var(--accent-gold)' }}>
                        {siteContent.email}
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Clock size={20} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Telefontider</strong>
                      <span>{siteContent.openingHours.weekdays}</span>
                      <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        {siteContent.openingHours.weekends}
                      </span>
                    </div>
                  </li>
                </ul>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '12px' }}>
                    Hur fungerar beställningen?
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>1.</span>
                      <span>Skicka din förfrågan med önskat paket och gästantal (minst 2 dagar före).</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>2.</span>
                      <span>Kock Nana ringer upp för att gå igenom meny, allergier och tider.</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>3.</span>
                      <span>Vi levererar maten rykande het i Trollhättan/Trestad, uppdukad och klar!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.08), var(--bg-dark-card))',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Truck size={22} style={{ color: 'var(--accent-gold)' }} />
                  <strong style={{ color: 'var(--text-primary)' }}>Leverans i Hela Trestad</strong>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Vi kör ut till Trollhättan, Vänersborg, Uddevalla, Lilla Edet och närliggande orter i Västra Götaland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
