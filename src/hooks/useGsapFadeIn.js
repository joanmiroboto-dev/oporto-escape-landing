import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Hook sencillo para animar un bloque con fade-in + translate cuando entra en viewport
export function useGsapFadeIn(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 40 },
              {
                autoAlpha: 1,
                y: 0,
                duration: options.duration || 0.9,
                ease: options.ease || 'power3.out',
                delay: options.delay || 0,
              },
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.delay, options.duration, options.ease]);

  return elementRef;
}

