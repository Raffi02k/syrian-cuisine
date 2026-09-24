import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { ReviewsRail } from '../components/ReviewsRail';
import { ChefSpotlight } from '../components/ChefSpotlight';
import { CinematicScrollytelling } from '../components/CinematicScrollytelling';
import { siteContent } from '../content/siteContent';
import '../styles/home.css';

export const HomePage = () => (
  <div className="home-page">
    <PageMeta
      title={`${siteContent.companyName} – ${siteContent.tagline}`}
      description="Syrisk catering med Nana i Trollhättan och Trestad. Mat lagad från grunden, generösa bufféer och smaker att samlas kring."
    />
    <CinematicScrollytelling />
    <div className="home-after-hero">
      <ChefSpotlight compact />

      <section className="home-catering home-wrap" id="kalkylator" aria-labelledby="home-catering-title">
        <div className="home-catering__intro">
          <span className="home-eyebrow">Från vårt kök till ditt bord</span>
          <h2 id="home-catering-title">Du samlar gästerna.<br /><em>Vi lagar maten.</em></h2>
        </div>
        <div className="home-catering__details">
          <p>En middag med familjen, ett bröllop eller en kväll med kollegorna. Nana lagar syriska bufféer från grunden, anpassade efter ert sällskap.</p>
          <p className="home-catering__location">Catering i Trollhättan, Vänersborg & Trestad.</p>
          <div className="home-links">
            <NavLink to="/meny#kalkylator" className="home-link">Se menyer & beräkna pris <ArrowUpRight size={17} /></NavLink>
            <NavLink to="/kontakt#offert" className="home-link home-link--subtle">Planera din fest <ArrowUpRight size={17} /></NavLink>
          </div>
        </div>
      </section>

      <ReviewsRail />
      <div className="home-signoff home-wrap">
        <span className="home-signoff__ornament" aria-hidden="true">✦</span>
        <p>God mat. Nära människor. <em>Minnen att ta med hem.</em></p>
        <span className="home-eyebrow">Välkommen till Nanas kök</span>
      </div>
    </div>
  </div>
);
