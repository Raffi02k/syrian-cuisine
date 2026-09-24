import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, Star } from 'lucide-react';
import { reviewsData } from '../content/reviews';

export const ReviewsRail = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const interactionUntil = useRef(0);
  const pointerDown = useRef(false);
  const drag = useRef<{ x: number; scroll: number } | null>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    const group = groupRef.current;
    if (!rail || !group) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cycleWidth = 0;
    let visible = false;
    let previousTime = 0;
    let remainder = 0;
    let frame = 0;

    const measure = () => {
      const next = group.getBoundingClientRect().width;
      if (!next) return;
      const progress = cycleWidth ? (rail.scrollLeft % cycleWidth) / cycleWidth : 0;
      cycleWidth = next;
      rail.scrollLeft = next + progress * next;
    };
    const normalize = () => {
      if (!cycleWidth || pointerDown.current) return;
      // Identical groups let either scroll direction wrap without a visual jump.
      if (rail.scrollLeft < cycleWidth * 0.5) rail.scrollLeft += cycleWidth;
      else if (rail.scrollLeft >= cycleWidth * 2) rail.scrollLeft -= cycleWidth;
    };
    const animate = (time: number) => {
      const delta = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      if (visible && !document.hidden && !motion.matches && !pausedRef.current && !pointerDown.current && time > interactionUntil.current) {
        remainder += delta * 0.022;
        const pixels = Math.floor(remainder);
        remainder -= pixels;
        if (pixels) rail.scrollLeft += pixels;
        normalize();
      }
      frame = requestAnimationFrame(animate);
    };
    const resize = new ResizeObserver(measure);
    resize.observe(group);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(rail);
    rail.addEventListener('scroll', normalize, { passive: true });
    measure();
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      rail.removeEventListener('scroll', normalize);
    };
  }, []);

  const interact = () => { interactionUntil.current = performance.now() + 1800; };
  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    interact();
    const card = rail.querySelector<HTMLElement>('.guest-review');
    rail.scrollBy({
      left: direction * ((card?.getBoundingClientRect().width ?? 340) + 24),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };
  const release = () => {
    pointerDown.current = false;
    drag.current = null;
    railRef.current?.classList.remove('is-dragging');
    interact();
  };

  return (
    <section className="home-reviews" aria-labelledby="guest-reviews-title">
      <div className="home-wrap home-reviews__heading">
        <div>
          <span className="home-eyebrow">Ord från våra gäster</span>
          <h2 id="guest-reviews-title">Smaker som <em>stannar kvar.</em></h2>
          <p className="home-reviews__rating"><Star size={13} fill="currentColor" aria-hidden="true" /><span>{reviewsData.averageRating} / 5</span><span>· {reviewsData.totalReviews} omdömen</span></p>
        </div>
        <div className="home-reviews__controls">
          <button type="button" aria-label="Föregående recensioner" aria-controls="guest-reviews-rail" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
          <button type="button" className="home-reviews__pause" aria-label={paused ? 'Starta automatisk rullning' : 'Pausa automatisk rullning'} aria-pressed={paused} onClick={() => { pausedRef.current = !paused; setPaused(!paused); }}>
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button type="button" aria-label="Nästa recensioner" aria-controls="guest-reviews-rail" onClick={() => move(1)}><ArrowRight size={18} /></button>
        </div>
      </div>

      <div
        ref={railRef}
        id="guest-reviews-rail"
        className="home-reviews__rail"
        role="region"
        aria-label="Recensioner – scrolla åt höger eller vänster"
        tabIndex={0}
        onWheel={interact}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          pointerDown.current = true;
          interact();
          if (event.pointerType === 'mouse') {
            event.preventDefault();
            event.currentTarget.focus({ preventScroll: true });
            drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft };
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.classList.add('is-dragging');
          }
        }}
        onPointerMove={(event) => {
          if (drag.current) event.currentTarget.scrollLeft = drag.current.scroll + drag.current.x - event.clientX;
        }}
        onPointerUp={release}
        onPointerCancel={release}
        onLostPointerCapture={release}
      >
        <div className="home-reviews__track">
          {[0, 1, 2].map((copy) => (
            <div className="home-reviews__group" ref={copy === 1 ? groupRef : undefined} key={copy} aria-hidden={copy !== 1 ? true : undefined}>
              {reviewsData.reviews.map((review) => (
                <figure className="guest-review" key={review.id}>
                  <div className="guest-review__stars" role="img" aria-label={`${review.rating} av 5 stjärnor`}>
                    {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={12} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <blockquote>”{review.text}”</blockquote>
                  <figcaption><span>{review.name}</span><span>{review.source}</span></figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="home-wrap home-reviews__hint">Dra eller svep för att läsa fler <span aria-hidden="true">↔</span></p>
    </section>
  );
};
