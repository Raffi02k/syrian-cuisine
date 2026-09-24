import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calculator,
  Users,
  Utensils,
  Plus,
  Minus,
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { cateringPackages, cateringAddons } from '../content/cateringPackages';
import { siteContent } from '../content/siteContent';

interface CateringCalculatorProps {
  initialGuests?: number;
  onSelectOffer?: (summary: {
    packageId: string;
    packageName: string;
    guests: number;
    pricePerPerson: number;
    totalPrice: number;
    addons: string[];
  }) => void;
}

export const CateringCalculator: React.FC<CateringCalculatorProps> = ({
  initialGuests = 30,
  onSelectOffer,
}) => {
  const [guests, setGuests] = useState<number>(initialGuests);
  const [selectedPackageId, setSelectedPackageId] = useState<string>(cateringPackages[0].id);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['halawet-dessert']);
  const navigate = useNavigate();

  const activePackage =
    cateringPackages.find((pkg) => pkg.id === selectedPackageId) || cateringPackages[0];

  const handleGuestChange = (val: number) => {
    const clamped = Math.max(10, Math.min(500, val));
    setGuests(clamped);
  };

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const addonsTotalPerPerson = selectedAddonIds.reduce((sum, id) => {
    const addon = cateringAddons.find((a) => a.id === id);
    return sum + (addon ? addon.pricePerPerson : 0);
  }, 0);

  const pricePerPerson = activePackage.pricePerPerson + addonsTotalPerPerson;
  const totalPrice = pricePerPerson * guests;

  const handleProceed = () => {
    const summary = {
      packageId: activePackage.id,
      packageName: activePackage.name,
      guests,
      pricePerPerson,
      totalPrice,
      addons: selectedAddonIds,
    };

    if (onSelectOffer) {
      onSelectOffer(summary);
    } else {
      // Navigate to contact page with prefilled query params
      const params = new URLSearchParams({
        paket: activePackage.id,
        personer: guests.toString(),
        total: totalPrice.toString(),
        addons: selectedAddonIds.join(','),
      });
      navigate(`/kontakt?${params.toString()}#offert`);
    }
  };

  const guestPresets = [15, 20, 30, 40, 50, 75, 100];

  return (
    <section className="section catering-calc-section" id="kalkylator">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Calculator size={15} style={{ display: 'inline', marginRight: '6px' }} />
            <span>Interaktiv Priskalkylator i Trollhättan</span>
          </div>
          <h2 className="section-title">
            <span className="font-arabic arabic-title-highlight">احسب تكلفة البوفيه</span>
            <span>Räkna Ut Pris per Portion & Total för Ditt Sällskap</span>
          </h2>
          <p className="section-subtitle">
            Planerar du fest för 30 personer eller bröllop för 100? Välj din favoritbuffé, justera
            antal gäster och se portionspris och totalkostnad i realtid.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-grid">
            {/* LEFT COLUMN: GUESTS & PACKAGES */}
            <div className="calc-controls-col">
              {/* STEP 1: GUESTS SELECTOR */}
              <div className="calc-step-box">
                <div className="calc-step-header">
                  <div className="step-num">1</div>
                  <div>
                    <h3 className="step-title">Hur många gäster blir ni?</h3>
                    <p className="step-desc">Välj bland snabbvalen eller skriv in exakt antal (min 10 pers)</p>
                  </div>
                </div>

                <div className="guests-input-group">
                  <div className="guest-stepper">
                    <button
                      type="button"
                      className="stepper-btn"
                      onClick={() => handleGuestChange(guests - 5)}
                      aria-label="Minska med 5 gäster"
                    >
                      <Minus size={18} />
                    </button>
                    <div className="stepper-display">
                      <span className="stepper-number">{guests}</span>
                      <span className="stepper-label">personer</span>
                    </div>
                    <button
                      type="button"
                      className="stepper-btn"
                      onClick={() => handleGuestChange(guests + 5)}
                      aria-label="Öka med 5 gäster"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Slider */}
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="10"
                      max="150"
                      step="1"
                      value={guests}
                      onChange={(e) => handleGuestChange(Number(e.target.value))}
                      className="calc-range-slider"
                      aria-label="Välj antal gäster"
                    />
                    <div className="slider-ticks">
                      <span>10 pers</span>
                      <span>30 pers</span>
                      <span>50 pers</span>
                      <span>100 pers</span>
                      <span>150+ pers</span>
                    </div>
                  </div>

                  {/* Presets */}
                  <div className="presets-row">
                    {guestPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`preset-chip ${guests === preset ? 'active' : ''}`}
                        onClick={() => handleGuestChange(preset)}
                      >
                        {preset} pers
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 2: CHOOSE BUFFET PACKAGE */}
              <div className="calc-step-box">
                <div className="calc-step-header">
                  <div className="step-num">2</div>
                  <div>
                    <h3 className="step-title">Välj Cateringbuffé</h3>
                    <p className="step-desc">Alla menyer tillagas färskt av Kock Nana i Trollhättan</p>
                  </div>
                </div>

                <div className="packages-select-grid">
                  {cateringPackages.map((pkg) => {
                    const isSelected = pkg.id === selectedPackageId;
                    return (
                      <div
                        key={pkg.id}
                        className={`package-select-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedPackageId(pkg.id)}
                      >
                        <div className="pkg-card-top">
                          <div>
                            <span className="pkg-title-ar font-arabic">{pkg.nameAr}</span>
                            <h4 className="pkg-title-sv">{pkg.name}</h4>
                          </div>
                          <div className="pkg-price-tag">
                            <span className="pkg-price-num">{pkg.pricePerPerson}</span>
                            <span className="pkg-price-unit">kr/pers</span>
                          </div>
                        </div>

                        <p className="pkg-card-desc">{pkg.subtitle}</p>

                        <div className="pkg-card-footer">
                          <span className="pkg-highlight">{pkg.dishHighlight}</span>
                          <span className={`pkg-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected ? <Check size={16} /> : null}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: OPTIONAL ADDONS */}
              <div className="calc-step-box">
                <div className="calc-step-header">
                  <div className="step-num">3</div>
                  <div>
                    <h3 className="step-title">Lyxiga Tillval (Valfritt)</h3>
                    <p className="step-desc">Kombinera med dessertbord eller traditionellt kaffe</p>
                  </div>
                </div>

                <div className="addons-grid">
                  {cateringAddons.map((addon) => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className={`addon-chip-card ${isChecked ? 'checked' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="addon-checkbox"
                        />
                        <div className="addon-content">
                          <div className="addon-row-top">
                            <strong className="addon-name">{addon.name}</strong>
                            <span className="addon-price">+{addon.pricePerPerson} kr/p</span>
                          </div>
                          <p className="addon-desc">{addon.description}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE REAL-TIME ESTIMATE RECEIPT */}
            <div className="calc-receipt-col">
              <div className="calc-receipt-sticky">
                <div className="receipt-card">
                  <div className="receipt-header">
                    <Sparkles size={20} style={{ color: 'var(--accent-gold)' }} />
                    <span className="receipt-tag">Beräknat Prisförslag</span>
                  </div>

                  <h3 className="receipt-package-name">{activePackage.name}</h3>
                  <span className="receipt-package-ar font-arabic">{activePackage.nameAr}</span>

                  <div className="receipt-divider" />

                  {/* BREAKDOWN LIST */}
                  <div className="receipt-breakdown">
                    <div className="receipt-row">
                      <span className="receipt-label">
                        <Users size={15} style={{ display: 'inline', marginRight: '6px' }} />
                        Antal gäster:
                      </span>
                      <strong className="receipt-val">{guests} personer</strong>
                    </div>

                    <div className="receipt-row">
                      <span className="receipt-label">Baspris buffé:</span>
                      <span className="receipt-val">{activePackage.pricePerPerson} kr / pers</span>
                    </div>

                    {addonsTotalPerPerson > 0 && (
                      <div className="receipt-row">
                        <span className="receipt-label">Valda tillval:</span>
                        <span className="receipt-val">+{addonsTotalPerPerson} kr / pers</span>
                      </div>
                    )}

                    <div className="receipt-row highlight">
                      <span className="receipt-label">Kuvertpris per person:</span>
                      <strong className="receipt-val text-gold">{pricePerPerson} kr / pers</strong>
                    </div>
                  </div>

                  <div className="receipt-divider" />

                  {/* TOTAL SUM */}
                  <div className="receipt-total-box">
                    <span className="total-label">Totalt Beräknat Pris</span>
                    <div className="total-amount-row">
                      <span className="total-currency">SEK</span>
                      <span className="total-amount">{totalPrice.toLocaleString('sv-SE')}</span>
                      <span className="total-unit">kr</span>
                    </div>
                    <span className="total-subtext">
                      Gäller för komplett buffé till {guests} personer
                    </span>
                  </div>

                  {/* INCLUDED PERKS */}
                  <div className="receipt-perks">
                    <div className="perk-item">
                      <Truck size={14} className="perk-icon" />
                      <span>Leverans i Trollhättan & Trestad</span>
                    </div>
                    <div className="perk-item">
                      <Utensils size={14} className="perk-icon" />
                      <span>Varmhållningskärl & uppläggningsfat ingår</span>
                    </div>
                    <div className="perk-item">
                      <ShieldCheck size={14} className="perk-icon" />
                      <span>100% hemlagat från grunden</span>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="receipt-actions">
                    <button
                      type="button"
                      onClick={handleProceed}
                      className="btn btn-primary btn-block"
                    >
                      <span>Begär Offert för {guests} Personer</span>
                      <ArrowRight size={16} />
                    </button>

                    <a
                      href={`tel:${siteContent.phoneRaw}`}
                      className="btn btn-secondary btn-block"
                      style={{ fontSize: '0.84rem' }}
                    >
                      <Phone size={14} />
                      <span>Frågor? Ring {siteContent.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
