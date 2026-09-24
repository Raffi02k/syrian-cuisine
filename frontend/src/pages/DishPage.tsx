import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { dishes, dishCategoryName } from '../content/dishes';
import { siteContent } from '../content/siteContent';
import '../styles/dishes.css';

export const DishPage = () => {
  const { slug } = useParams();
  const dish = dishes.find((item) => item.slug === slug);
  if (!dish) return <Navigate to="/404" replace />;
  const related = dishes.filter((item) => item.category === dish.category && item.slug !== dish.slug).slice(0, 3);

  return (
    <article className="dish-page dish-theme">
      <PageMeta title={`${dish.name} – ${siteContent.companyName}`} description={dish.description} canonical={`https://syrian-cuisine.vercel.app/ratter/${dish.slug}`} ogImage={dish.image ?? '/images/chef-portrait.webp'} />
      <div className="dish-wrap">
        <nav className="dish-breadcrumb" aria-label="Brödsmulor"><Link to="/galleri#ratter"><ArrowLeft size={14} /> Alla rätter</Link><span aria-hidden="true">/</span><span aria-current="page">{dish.name}</span></nav>
        <header className={`dish-intro ${dish.image ? '' : 'dish-intro--typographic'}`}>
          <div className="dish-intro__text">
            <span className="dish-kicker">Nanas kök · {dishCategoryName(dish.category)}</span>
            <p className="dish-intro__arabic font-arabic" lang="ar" dir="rtl">{dish.arabicName}</p>
            <h1>{dish.name}</h1>
            <p className="dish-intro__description">{dish.description}</p>
            <Link to="/kontakt#offert" className="dish-link">Prata catering med Nana <ArrowUpRight size={17} /></Link>
          </div>
          {dish.image ? (
            <figure className="dish-intro__image"><img key={dish.image} src={dish.image} alt={dish.name} decoding="async" /><figcaption>Råvaror, omsorg och syriskt mathantverk.</figcaption></figure>
          ) : (
            <div className="dish-intro__wordmark" aria-hidden="true"><span>✦</span><span className="font-arabic" lang="ar" dir="rtl">{dish.arabicName}</span><small>Från Nanas kök</small></div>
          )}
        </header>

        <section className="dish-story" aria-labelledby="dish-story-title">
          <div><span className="dish-kicker">Smaken & hantverket</span><h2 id="dish-story-title">Det lilla som gör<br /><em>hela skillnaden.</em></h2></div>
          <div><p>{dish.story}</p>{dish.highlights.length > 0 && <ul className="dish-highlights">{dish.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}</div>
        </section>

        <div className="dish-details">
          <section aria-labelledby="dish-ingredients-title"><span className="dish-kicker">Rättens byggstenar</span><h2 id="dish-ingredients-title">Råvaror i fokus.</h2><ul className="dish-ingredients">{dish.ingredients.map((ingredient, index) => <li key={ingredient}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{ingredient}</li>)}</ul></section>
          <section aria-labelledby="dish-serving-title"><span className="dish-kicker">Runt bordet</span><h2 id="dish-serving-title">Så njuter du av den.</h2><p>{dish.serving}</p><p className="dish-details__note">Vill du ha rätten på din buffé? Berätta för Nana om ert sällskap så hjälper hon er att sätta ihop menyn.</p><Link to="/meny#kalkylator" className="dish-link">Utforska bufféer & pris <ArrowUpRight size={17} /></Link></section>
        </div>

        <section className="dish-related" aria-labelledby="dish-related-title"><span className="dish-kicker">Fortsätt smakresan</span><h2 id="dish-related-title">Fler smaker att upptäcka.</h2><div>{related.map((item) => <Link key={item.slug} to={`/ratter/${item.slug}`}><span>{item.name}</span><ArrowUpRight size={19} /></Link>)}</div><Link className="dish-link" to="/galleri#ratter">Till alla rätter <ArrowUpRight size={17} /></Link></section>
      </div>
    </article>
  );
};
