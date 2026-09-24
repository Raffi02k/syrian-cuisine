import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/scroll-video-hero.css';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    file: 'Kousa-scroll2', title: 'Waraq Enab', arabic: 'ورق عنب يالنجي',
    category: 'Förrätt & meze', note: 'Handrullat. Med omsorg.',
    ingredients: ['Granatäppelmelass', 'Färsk mynta', 'Olivolja & citron'],
  },
  {
    file: 'Dolma-scroll1', title: 'Kousa b’Laban', arabic: 'كوسا بلبن',
    category: 'Från det syriska festbordet', note: 'Tradition i varje lager.',
    ingredients: ['Silkeslen yoghurt', 'Kryddad färs', 'Gyllene pinjenötter'],
  },
  {
    file: 'Fattah-scroll3', title: 'Damaskensk Fatteh', arabic: 'فتة شامية',
    category: 'Varm meze', note: 'Frasigt möter krämigt.',
    ingredients: ['Sprött tunnbröd', 'Tahiniyoghurt', 'Granatäpple'],
  },
  {
    file: 'Kycklingshawarma-scroll4', title: 'Kycklingshawarma', arabic: 'شاورما دجاج',
    category: 'Från grillen', note: 'Kryddat med tålamod.',
    ingredients: ['24 timmars marinad', 'Hemgjord toum', 'Krispiga pickles'],
  },
];

const clamp = gsap.utils.clamp(0, 1);
const blend = 0.12;

export const ScrollVideoHero = () => {
  const rootRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<boolean[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const videos = videoRefs.current.filter((video): video is HTMLVideoElement => !!video);
      const slides = gsap.utils.toArray<HTMLElement>('.scrub-hero__scene', root);
      const left = gsap.utils.toArray<HTMLElement>('.scrub-hero__left', root);
      const right = gsap.utils.toArray<HTMLElement>('.scrub-hero__right', root);
      const bars = gsap.utils.toArray<HTMLElement>('.scrub-hero__progress', root);
      const desired = videos.map(() => 0);
      const loaded = videos.map(() => false);
      let disposed = false;
      let currentChapter = -1;

      // Keep a single seek in flight and always follow the latest scroll target.
      const seek = (index: number) => {
        const video = videos[index];
        if (disposed || video.readyState < 2 || video.seeking || !Number.isFinite(video.duration)) return;
        const end = Math.max(0, video.duration - 1 / 24);
        const time = Math.min(Math.round(desired[index] * end * 24) / 24, end);
        if (Math.abs(video.currentTime - time) < 1 / 48) return;
        video.currentTime = time;
      };
      const listeners = videos.map((video, index) => {
        const sync = () => seek(index);
        video.addEventListener('loadeddata', sync);
        video.addEventListener('seeked', sync);
        video.addEventListener('canplay', sync);
        return () => {
          video.removeEventListener('loadeddata', sync);
          video.removeEventListener('seeked', sync);
          video.removeEventListener('canplay', sync);
        };
      });
      const load = (index: number) => {
        if (!videos[index] || loaded[index]) return;
        loaded[index] = true;
        videos[index].src = `/media/${stories[index].file}-scrub.mp4`;
        videos[index].load();
      };
      const playhead = { position: 0 };
      const render = () => {
        const position = playhead.position;
        const index = Math.min(stories.length - 1, Math.floor(position));
        if (currentChapter !== index) {
          currentChapter = index;
          setActive(index);
          load(index);
          load(index + 1);
        }
        slides.forEach((slide, i) => {
          const local = position - i;
          const visible = local >= 0 && (local < 1 + blend || i === stories.length - 1);
          // Crossfade over an opaque previous scene to avoid a dip to black.
          gsap.set(slide, { opacity: i === 0 ? 1 : clamp(local / blend), visibility: visible ? 'visible' : 'hidden' });
          desired[i] = clamp((local - (i === 0 ? 0 : blend)) / (1 - (i === 0 ? 0 : blend)));
          if (loaded[i]) seek(i);
          const reveal = clamp((local + (i === 0 ? 0.16 : 0) - blend) / 0.22);
          const hide = i === stories.length - 1 ? 1 : 1 - clamp((local - 0.85) / 0.15);
          gsap.set(left[i], { opacity: reveal * hide, x: -20 * (1 - reveal) });
          gsap.set(right[i], { opacity: reveal * hide, x: 20 * (1 - reveal) });
          gsap.set(bars[i], { scaleX: clamp(local) });
        });
      };
      const tween = gsap.to(playhead, {
        position: stories.length,
        ease: 'none',
        onUpdate: render,
        scrollTrigger: {
          trigger: root, start: 'top top', end: 'bottom bottom',
          scrub: 0.35, invalidateOnRefresh: true,
        },
      });
      triggerRef.current = tween.scrollTrigger ?? null;
      render();
      return () => {
        disposed = true;
        triggerRef.current = null;
        listeners.forEach((remove) => remove());
        videos.forEach((video) => {
          video.pause();
          video.removeAttribute('src');
          video.load();
        });
      };
    }, root);
    return () => media.revert();
  }, []);

  const jumpTo = (index: number) => {
    const trigger = triggerRef.current;
    if (trigger) {
      window.scrollTo({
        top: trigger.start + (trigger.end - trigger.start) * ((index + 0.2) / stories.length),
        behavior: 'smooth',
      });
    } else {
      document.getElementById(`hero-scene-${index}`)?.scrollIntoView();
    }
  };

  return (
    <section ref={rootRef} className="scrub-hero" aria-label="En smakresa genom det syriska köket">
      <div className="scrub-hero__stage">
        <div className="scrub-hero__intro">
          <span className="scrub-hero__eyebrow">Syrian Cuisine · Trollhättan & Trestad</span>
          <h1>Syriskt mathantverk. <em>Bild för bild.</em></h1>
        </div>
        {stories.map((story, index) => (
          <article key={story.file} id={`hero-scene-${index}`} className="scrub-hero__scene" aria-label={story.title}>
            <video
              ref={(video) => { videoRefs.current[index] = video; }}
              className="scrub-hero__video"
              poster={`/media/${story.file}-poster.jpg`}
              muted playsInline preload="auto" disablePictureInPicture
              aria-label={`Scrollstyrd film: ${story.title}`}
              onError={() => setFailed((previous) => { const next = [...previous]; next[index] = true; return next; })}
            />
            <div className="scrub-hero__shade" aria-hidden="true" />
            <div className="scrub-hero__left">
              <span className="scrub-hero__eyebrow">0{index + 1} / 04 · {story.category}</span>
              <span className="scrub-hero__ornament" aria-hidden="true">✦</span>
              <h2>{story.title}</h2>
              <p>{story.note}</p>
            </div>
            <div className="scrub-hero__right">
              <p className="scrub-hero__arabic font-arabic" lang="ar" dir="rtl">{story.arabic}</p>
              <span className="scrub-hero__rule" aria-hidden="true" />
              <ul>{story.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
            </div>
            {failed[index] && <p className="scrub-hero__fallback">Filmen kunde inte laddas. Scrolla vidare för fler smaker.</p>}
          </article>
        ))}
        <div className="scrub-hero__footer">
          <a className="scrub-hero__skip" href="#kalkylator">Till catering & pris <ArrowDown size={14} /></a>
          <nav className="scrub-hero__chapters" aria-label="Välj rätt i smakresan">
            {stories.map((story, index) => (
              <button key={story.file} type="button" onClick={() => jumpTo(index)} aria-label={`Visa ${story.title}`} aria-current={active === index ? 'step' : undefined}>
                <span>0{index + 1}</span>
                <span className="scrub-hero__track"><span className="scrub-hero__progress" /></span>
              </button>
            ))}
          </nav>
          <NavLink className="scrub-hero__menu" to="/meny">Upptäck menyn <ArrowUpRight size={16} /></NavLink>
        </div>
        <p className="scrub-hero__hint"><ArrowDown size={13} /> Scrolla för att låta smakerna ta form</p>
      </div>
    </section>
  );
};
