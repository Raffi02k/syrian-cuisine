import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  Calendar,
  UtensilsCrossed,
  Layers,
  Flame,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { dishesAnatomyList, IngredientLayer } from '../content/dishesAnatomy';

export const DishAnatomySection: React.FC = () => {
  const [activeDishId, setActiveDishId] = useState<string>(dishesAnatomyList[0].id);
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientLayer | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeDish = dishesAnatomyList.find((d) => d.id === activeDishId) || dishesAnatomyList[0];

  const handleDishChange = (id: string) => {
    setActiveDishId(id);
    setSelectedIngredient(null);
  };

  return (
    <section className="section anatomy-section" id="mat-anatomi">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Sparkles size={15} style={{ display: 'inline', marginRight: '6px' }} />
            <span>Kulinarisk Ingrediensanalys & Anatomi</span>
          </div>
          <h2 className="section-title">
            <span className="font-arabic arabic-title-highlight">تشريح الأكلات السورية</span>
            <span className="block-title">Upptäck Matens Hemligheter Lager för Lager</span>
          </h2>
          <p className="section-subtitle">
            Varje maträtt är ett konstverk av tradition och balans. Klicka och utforska de autentiska råvarorna,
            hur de samverkar och vad som ger det syriska köket sin legendariska själ.
          </p>
        </div>

        {/* DISH SELECTOR TABS */}
        <div className="anatomy-tabs" role="tablist" aria-label="Välj maträtt att dissekera">
          {dishesAnatomyList.map((dish) => {
            const isActive = dish.id === activeDish.id;
            return (
              <button
                key={dish.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleDishChange(dish.id)}
                className={`anatomy-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span className="tab-ar font-arabic">{dish.titleAr.split(' ')[1] || dish.titleAr}</span>
                <span className="tab-sv">{dish.titleSv}</span>
                {isActive && <span className="tab-indicator" />}
              </button>
            );
          })}
        </div>

        {/* MAIN ANATOMY SHOWCASE */}
        <div className="anatomy-showcase card">
          <div className="anatomy-grid">
            {/* LEFT: VISUAL POSTER & INTERACTIVE OVERLAY */}
            <div className="anatomy-visual-col">
              <div className="anatomy-image-wrapper">
                <img
                  src={activeDish.image}
                  alt={`${activeDish.titleSv} - ${activeDish.titleAr}`}
                  className="anatomy-main-img"
                  loading="lazy"
                  decoding="async"
                  onClick={() => setLightboxOpen(true)}
                />

                <div className="anatomy-badge-overlay">
                  <span className="anatomy-tag font-arabic">{activeDish.titleAr}</span>
                  <button
                    className="zoom-btn"
                    onClick={() => setLightboxOpen(true)}
                    title="Öppna bild i helskärm"
                    aria-label="Öppna bild i helskärm"
                  >
                    <Maximize2 size={16} />
                    <span>Zooma Poster</span>
                  </button>
                </div>
              </div>

              {/* TASTE PROFILE METERS */}
              <div className="taste-profile-box">
                <div className="taste-profile-header">
                  <Flame size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span className="taste-title">Smakprofil & Balans</span>
                </div>
                <div className="taste-bars">
                  <div className="taste-bar-row">
                    <span className="taste-label">Fyllighet / Savory</span>
                    <div className="taste-bar-track">
                      <div
                        className="taste-bar-fill savory"
                        style={{ width: `${activeDish.tasteProfile.savory}%` }}
                      />
                    </div>
                    <span className="taste-val">{activeDish.tasteProfile.savory}%</span>
                  </div>

                  <div className="taste-bar-row">
                    <span className="taste-label">Frisk Syra (Citrus/Granatäpple)</span>
                    <div className="taste-bar-track">
                      <div
                        className="taste-bar-fill tangy"
                        style={{ width: `${activeDish.tasteProfile.tangy}%` }}
                      />
                    </div>
                    <span className="taste-val">{activeDish.tasteProfile.tangy}%</span>
                  </div>

                  <div className="taste-bar-row">
                    <span className="taste-label">Kryddighet & Värme</span>
                    <div className="taste-bar-track">
                      <div
                        className="taste-bar-fill spicy"
                        style={{ width: `${activeDish.tasteProfile.spicy}%` }}
                      />
                    </div>
                    <span className="taste-val">{activeDish.tasteProfile.spicy}%</span>
                  </div>

                  {activeDish.tasteProfile.sweet > 0 && (
                    <div className="taste-bar-row">
                      <span className="taste-label">Sötma & Nektar</span>
                      <div className="taste-bar-track">
                        <div
                          className="taste-bar-fill sweet"
                          style={{ width: `${activeDish.tasteProfile.sweet}%` }}
                        />
                      </div>
                      <span className="taste-val">{activeDish.tasteProfile.sweet}%</span>
                    </div>
                  )}

                  <div className="taste-bar-row">
                    <span className="taste-label">Krispighet & Textur</span>
                    <div className="taste-bar-track">
                      <div
                        className="taste-bar-fill crisp"
                        style={{ width: `${activeDish.tasteProfile.crisp}%` }}
                      />
                    </div>
                    <span className="taste-val">{activeDish.tasteProfile.crisp}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: DEEP-DIVE INGREDIENTS & CULINARY SECRETS */}
            <div className="anatomy-info-col">
              <div className="anatomy-meta-top">
                <span className="dish-category-badge">{activeDish.category}</span>
                <span className="dish-price-badge">{activeDish.price}</span>
              </div>

              <div className="dish-title-group">
                <h3 className="dish-arabic-heading font-arabic">{activeDish.titleAr}</h3>
                <h4 className="dish-swedish-heading">{activeDish.titleSv}</h4>
                <p className="dish-arabic-sub font-arabic">{activeDish.subtitleAr}</p>
                <p className="dish-swedish-desc">{activeDish.descriptionSv}</p>
              </div>

              {/* HIGHLIGHT CHIPS */}
              <div className="dish-highlights-list">
                {activeDish.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-pill">
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* INGREDIENT LAYERS BREAKDOWN */}
              <div className="ingredient-breakdown-wrapper">
                <div className="breakdown-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={18} style={{ color: 'var(--accent-gold)' }} />
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                      Rättens 4 Huvudkomponenter
                    </strong>
                  </div>
                  <span className="breakdown-hint">Klicka för detaljer</span>
                </div>

                <div className="ingredient-cards-grid">
                  {activeDish.ingredients.map((ing) => {
                    const isSelected = selectedIngredient?.id === ing.id;
                    return (
                      <div
                        key={ing.id}
                        className={`ingredient-card ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                          setSelectedIngredient(isSelected ? null : ing)
                        }
                      >
                        <div className="ing-card-top">
                          <span className="ing-role">{ing.role}</span>
                          <ChevronRight
                            size={16}
                            className={`ing-chevron ${isSelected ? 'open' : ''}`}
                          />
                        </div>
                        <div className="ing-names">
                          <span className="ing-name-ar font-arabic">{ing.nameAr}</span>
                          <span className="ing-name-sv">{ing.nameSv}</span>
                        </div>

                        {isSelected && (
                          <div className="ing-drawer">
                            <p className="ing-desc-sv">{ing.descSv}</p>
                            <p className="ing-desc-ar font-arabic">{ing.descAr}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* EXTRA META: PREP & ALLERGENS */}
              <div className="dish-additional-meta">
                <div className="meta-block">
                  <Clock size={16} style={{ color: 'var(--accent-gold)' }} />
                  <div>
                    <span className="meta-label">Tillagning</span>
                    <span className="meta-value">{activeDish.prepTime}</span>
                  </div>
                </div>

                <div className="meta-block">
                  <ShieldAlert size={16} style={{ color: 'var(--accent-gold)' }} />
                  <div>
                    <span className="meta-label">Allergener</span>
                    <span className="meta-value">{activeDish.allergens.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="anatomy-cta-row">
                <NavLink to="/kontakt#offert" className="btn btn-primary">
                  <Calendar size={18} />
                  <span>Beställ Denna Rätt till Festen</span>
                </NavLink>
                <NavLink to="/meny" className="btn btn-secondary">
                  <UtensilsCrossed size={18} />
                  <span>Se Alla Cateringbufféer</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* LIGHTBOX MODAL */}
        {lightboxOpen && (
          <div
            className="anatomy-lightbox"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Stäng bild"
              >
                <X size={24} />
              </button>
              <img
                src={activeDish.image}
                alt={`${activeDish.titleSv} Anatomy Diagram`}
                className="lightbox-img"
              />
              <div className="lightbox-caption">
                <h4 className="font-arabic" style={{ color: 'var(--accent-gold)', fontSize: '1.4rem' }}>
                  {activeDish.titleAr}
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>{activeDish.titleSv} – Full Anatomy Diagram</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
