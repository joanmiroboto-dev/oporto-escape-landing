import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGsapFadeIn(options = {}) {
  const elementRef = useRef(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const { duration, ease, delay } = optionsRef.current;
    let ctx;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              gsap.fromTo(
                el,
                { autoAlpha: 0, y: 40 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: duration || 0.9,
                  ease: ease || 'power3.out',
                  delay: delay || 0,
                },
              );
            }, el);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return elementRef;
}

