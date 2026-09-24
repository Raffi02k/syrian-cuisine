import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Check, ArrowRight, Users } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { CateringCalculator } from '../components/CateringCalculator';
import { cateringPackages } from '../content/cateringPackages';
import { DishCatalog } from '../components/DishCatalog';
import { siteContent } from '../content/siteContent';

export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buffeer' | 'ratter'>('buffeer');

  return (
    <>
      <PageMeta
        title={`Cateringpaket & Menyer – ${siteContent.companyName}`}
        description="Se våra syriska cateringbufféer och priser per person i Trollhättan. Klassisk shawarmabuffé, mezetallrikar och kungliga varmrätter för alla sällskap."
        canonical="https://syrian-cuisine.vercel.app/meny"
      />

      <PageHero
        eyebrow="Catering i Trollhättan & Trestad"
        title="Våra Cateringpaket & Bufféer"
        description="Prisvärda, generösa och doftande festbufféer tillagade från grunden med äkta levantinska smaker för 15 till 300+ personer."
      />

      <section className="section">
        <div className="container">
          {/* Main Toggle: Bufféer vs Rätt-för-Rätt */}
          <div className="filter-tabs" style={{ marginBottom: '50px' }}>
            <button
              className={`filter-tab ${activeTab === 'buffeer' ? 'active' : ''}`}
              onClick={() => setActiveTab('buffeer')}
            >
              Kompletta Cateringbufféer (Pris per person)
            </button>
            <button
              className={`filter-tab ${activeTab === 'ratter' ? 'active' : ''}`}
              onClick={() => setActiveTab('ratter')}
            >
              Alla rätter & deras berättelser
            </button>
          </div>

          {activeTab === 'buffeer' ? (
            <div className="grid-2" style={{ marginBottom: '60px' }}>
              {cateringPackages.map((pkg) => (
                <div key={pkg.id} className="card menu-package-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="menu-package-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <div>
                        <span className="font-arabic" style={{ color: 'var(--accent-gold-light)', fontSize: '1.2rem', fontWeight: 700 }}>
                          {pkg.nameAr}
                        </span>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '4px' }}>{pkg.name}</h3>
                      </div>
                      <div className="menu-package-price" style={{ textAlign: 'right' }}>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                          {pkg.pricePerPerson} kr
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>per kuvert</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                      {pkg.description}
                    </p>

                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                      <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                        Detta ingår i buffén:
                      </strong>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {pkg.includedItems.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <Check size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={16} style={{ color: 'var(--accent-gold)' }} />
                      Minst {pkg.minGuests} personer
                    </span>
                    <NavLink to={`/kontakt?paket=${pkg.id}#offert`} className="btn btn-primary" style={{ padding: '10px 22px' }}>
                      <span>Beställ Denna Buffé</span>
                      <ArrowRight size={16} />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <DishCatalog />
          )}
        </div>
      </section>

      {/* CALCULATOR EMBED */}
      <CateringCalculator initialGuests={30} />
    </>
  );
};
