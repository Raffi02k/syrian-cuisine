import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { dishes, dishCategories, dishCategoryName } from '../content/dishes';
import '../styles/dishes.css';

export const DishCatalog = () => {
  const [category, setCategory] = useState('alla');
  const filtered = dishes.filter((dish) => category === 'alla' || dish.category === category);
  return (
    <div className="dish-catalog">
      <div className="dish-filters" aria-label="Filtrera rätter">
        {dishCategories.map((item) => (
          <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.name}</button>
        ))}
      </div>
      <p className="dish-catalog__count" role="status">{filtered.length} smaker att upptäcka</p>
      <div className="dish-catalog__grid">
        {filtered.map((dish) => (
          <Link key={dish.slug} to={`/ratter/${dish.slug}`} className="dish-card">
            <span className="dish-kicker">{dishCategoryName(dish.category)}</span>
            <span className="dish-card__arabic font-arabic" lang="ar" dir="rtl">{dish.arabicName}</span>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span className="dish-card__more">Lär känna rätten <ArrowUpRight size={17} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
};
