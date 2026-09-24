import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { DishCatalog } from '../components/DishCatalog';
import { galleryItems } from '../content/gallery';
import { dishes } from '../content/dishes';
import { siteContent } from '../content/siteContent';
import '../styles/dishes.css';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('Alla');
  const categories = ['Alla', 'Mat-Anatomi', 'Mat', 'Kolgrill', 'Atmosfär', 'Desserter'];
  const filtered = galleryItems.filter((item) => activeCategory === 'Alla' || item.category === activeCategory);
  return (
    <div className="dish-theme dish-gallery">
      <PageMeta title={`Galleri & våra rätter – ${siteContent.companyName}`} description="Upptäck Nanas syriska kök. Se bilder och lär känna varje rätt, dess råvaror, smaker och servering." canonical="https://syrian-cuisine.vercel.app/galleri" ogImage="/images/dish-shawarma.webp" />
      <div className="dish-wrap">
        <header className="dish-gallery__intro"><span className="dish-kicker">En närmare titt på Nanas kök</span><h1>Varje rätt har<br /><em>sin egen berättelse.</em></h1><p>Från råvaran till det dukade bordet. Upptäck bilderna och lär känna smakerna bakom varje rätt.</p><a href="#ratter" className="dish-link">Utforska alla rätter <ArrowUpRight size={17} /></a></header>
        <section aria-label="Bilder från köket">
          <div className="dish-filters" aria-label="Filtrera bilder">{categories.map((category) => <button key={category} type="button" aria-pressed={category === activeCategory} onClick={() => setActiveCategory(category)}>{category === 'Mat-Anatomi' ? 'Råvaror & hantverk' : category}</button>)}</div>
          <div className="dish-gallery__grid">{filtered.map((item) => {
            const dish = dishes.find((entry) => entry.slug === item.dishSlug);
            const content = <><div className="dish-gallery__image"><img src={item.imageUrl} alt={dish?.name ?? item.title} loading="lazy" decoding="async" /></div><div className="dish-gallery__caption"><span className="dish-kicker">{item.category === 'Mat-Anatomi' ? 'Råvaror & hantverk' : item.category}</span><h2>{dish?.name ?? item.title}</h2><p>{item.description}</p>{dish && <span className="dish-card__more">Läs om rätten <ArrowUpRight size={17} /></span>}</div></>;
            return dish ? <Link key={item.id} to={`/ratter/${dish.slug}`} className="dish-gallery__card">{content}</Link> : <article key={item.id} className="dish-gallery__card">{content}</article>;
          })}</div>
        </section>
        <section id="ratter" className="dish-gallery__catalog" aria-labelledby="all-dishes-title"><span className="dish-kicker">Hela smakresan</span><h2 id="all-dishes-title">Lär känna <em>din nästa favorit.</em></h2><p>Varje rätt har en egen sida med smaker, råvaror och serveringsförslag.</p><DishCatalog /></section>
      </div>
    </div>
  );
};
