import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Send, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { cateringPackages } from '../content/cateringPackages';

export const ReservationForm: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Födelsedagsfest',
    packageId: 'shawarma-buffet',
    guests: '30 personer',
    deliveryLocation: 'Trollhättan (Leverans)',
    date: '',
    time: '17:00',
    notes: '',
    consent: false,
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-populate from URL search params if coming from CateringCalculator
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlPaket = params.get('paket');
    const urlPersoner = params.get('personer');

    if (urlPaket || urlPersoner) {
      setFormData((prev) => ({
        ...prev,
        packageId: urlPaket || prev.packageId,
        guests: urlPersoner ? `${urlPersoner} personer` : prev.guests,
      }));
    }
  }, [location.search]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.phone || !formData.date || !formData.consent) {
      setErrorMessage('Vänligen fyll i alla obligatoriska fält (*) och godkänn villkoren.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="form-wrapper" id="offert">
        <div className="form-success">
          <CheckCircle2 size={52} style={{ margin: '0 auto 16px auto', color: '#4ade80' }} />
          <h3 style={{ marginBottom: '8px', color: '#4ade80' }}>Tack för din cateringförfrågan!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
            Vi har tagit emot din förfrågan för <strong>{formData.guests}</strong> till{' '}
            <strong>{formData.deliveryLocation}</strong>.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Kock Nana kontaktar dig personligen via telefon ({formData.phone}) eller e-post med en detaljerad offert och bekräftelse.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                phone: '',
                email: '',
                eventType: 'Födelsedagsfest',
                packageId: 'shawarma-buffet',
                guests: '30 personer',
                deliveryLocation: 'Trollhättan (Leverans)',
                date: '',
                time: '17:00',
                notes: '',
                consent: false,
                honeypot: '',
              });
            }}
          >
            Gör en ny cateringförfrågan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrapper" id="offert">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <Sparkles size={18} style={{ color: 'var(--accent-gold)' }} />
        <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>
          Catering Trollhättan & Trestad
        </span>
      </div>
      <h3 style={{ marginBottom: '8px', color: 'var(--text-primary)', fontSize: '1.6rem' }}>
        Begär Kostnadsfri Offert
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Berätta om ditt evenemang så återkommer vi inom 24 timmar med ett skräddarsytt förslag.
      </p>

      {status === 'error' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '20px',
            fontSize: '0.9rem',
          }}
        >
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Anti-spam Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="form-grid">
          {/* PACKAGE SELECTION */}
          <div className="form-group">
            <label className="form-label" htmlFor="packageId">
              Önskat Cateringpaket
            </label>
            <select
              id="packageId"
              name="packageId"
              className="form-select"
              value={formData.packageId}
              onChange={handleChange}
            >
              {cateringPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} ({pkg.pricePerPerson} kr/pers)
                </option>
              ))}
              <option value="custom">Skräddarsydd buffé efter egna önskemål</option>
            </select>
          </div>

          {/* GUEST COUNT */}
          <div className="form-group">
            <label className="form-label" htmlFor="guests">
              Antal Personer / Portioner *
            </label>
            <select
              id="guests"
              name="guests"
              className="form-select"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="15 personer">15 personer</option>
              <option value="20 personer">20 personer</option>
              <option value="25 personer">25 personer</option>
              <option value="30 personer">30 personer (Vanligast)</option>
              <option value="40 personer">40 personer</option>
              <option value="50 personer">50 personer</option>
              <option value="75 personer">75 personer</option>
              <option value="100 personer">100 personer</option>
              <option value="150+ personer">150+ personer (Stort evenemang)</option>
            </select>
          </div>

          {/* EVENT TYPE */}
          <div className="form-group">
            <label className="form-label" htmlFor="eventType">
              Typ av Tillställning
            </label>
            <select
              id="eventType"
              name="eventType"
              className="form-select"
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="Födelsedagsfest">Födelsedagsfest / Jubileum</option>
              <option value="Bröllop / Förlovning">Bröllop / Förlovning</option>
              <option value="Dop / Namngivning">Dop / Namngivning</option>
              <option value="Företagsevent / Lunch">Företagsevent / Firmafest</option>
              <option value="Student / Examen">Student / Examen</option>
              <option value="Annat firande">Annat firande</option>
            </select>
          </div>

          {/* DELIVERY LOCATION */}
          <div className="form-group">
            <label className="form-label" htmlFor="deliveryLocation">
              Leverans eller Upphämtning
            </label>
            <select
              id="deliveryLocation"
              name="deliveryLocation"
              className="form-select"
              value={formData.deliveryLocation}
              onChange={handleChange}
            >
              <option value="Trollhättan (Leverans)">Trollhättan (Utkörning & Varmhållning)</option>
              <option value="Vänersborg (Leverans)">Vänersborg (Utkörning)</option>
              <option value="Uddevalla (Leverans)">Uddevalla (Utkörning)</option>
              <option value="Övriga Trestad / Fyrbodal">Övriga Trestad / Fyrbodal</option>
              <option value="Hämtas själv i Trollhättan">Hämtas själv i Trollhättan</option>
            </select>
          </div>

          {/* DATE */}
          <div className="form-group">
            <label className="form-label" htmlFor="date">
              Datum för Evenemanget *
            </label>
            <input
              id="date"
              type="date"
              name="date"
              required
              className="form-input"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* TIME */}
          <div className="form-group">
            <label className="form-label" htmlFor="time">
              Önskad Leveranstid / Serveringstid *
            </label>
            <select
              id="time"
              name="time"
              className="form-select"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="12:00">12:00 (Lunchbuffé)</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00 (Middag)</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>

          {/* NAME */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Fullständigt Namn *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="form-input"
              placeholder="Ditt för- och efternamn"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Telefonnummer *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="form-input"
              placeholder="070-123 45 67"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="form-group full-width">
            <label className="form-label" htmlFor="email">
              E-postadress (för offert och bekräftelse)
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="din.epost@exempel.se"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* NOTES / SPECIAL REQUIREMENTS */}
          <div className="form-group full-width">
            <label className="form-label" htmlFor="notes">
              Specialkost, Allergier eller Specifika Önskemål
            </label>
            <textarea
              id="notes"
              name="notes"
              className="form-textarea"
              placeholder="Exempel: 2 vegetarianer, önskar Halawet El Jibn som dessert, leverans till festlokal..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* CONSENT */}
          <div className="form-group full-width">
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
                style={{ marginTop: '3px' }}
              />
              <span>Jag godkänner att mina kontaktuppgifter sparas för att Syrian Cuisine Catering ska kunna lämna offert.</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="spin" />
              <span>Skickar förfrågan...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Skicka Cateringförfrågan för {formData.guests}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
