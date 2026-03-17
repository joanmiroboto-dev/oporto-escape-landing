import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const HERO_IMAGE =
  'https://images.pexels.com/photos/17358917/pexels-photo-17358917.jpeg?auto=compress&cs=tinysrgb&w=1600';

function Hero() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    timelineRef.current = tl;

    tl.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0 },
    )
      .fromTo(
        subtitleRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0 },
        '-=0.7',
      )
      .fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        '-=0.6',
      )
      .fromTo(
        buttonsRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        '-=0.6',
      );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const handleDiscoverClick = () => {
    const element = document.getElementById('por-que');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-porto-cream pt-28 pb-16 sm:pt-32 sm:pb-24"
      id="inicio"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Vista de Oporto al atardecer junto al río Duero"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-porto-blue/80 via-porto-blue/70 to-porto-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-porto-blue/70 via-transparent to-porto-cream/60" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-xl text-porto-offwhite">
          <p
            ref={subtitleRef}
            className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-porto-gold shadow-sm ring-1 ring-white/20 backdrop-blur"
          >
            Escapada exclusiva · 18 — 23 marzo 2026
          </p>
          <h1
            ref={titleRef}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Oporto, donde el tiempo se detiene sobre el Duero.
          </h1>
          <p
            ref={contentRef}
            className="mt-5 max-w-xl text-sm leading-relaxed text-porto-offwhite/90 sm:text-base"
          >
            Seis días para perderte entre azulejos, vistas al río, bodegas
            históricas y cafés con alma. Un viaje pensado para saborear Oporto
            sin prisas, con el equilibrio perfecto entre cultura, gastronomía y
            pequeños momentos de calma.
          </p>
          <div
            ref={buttonsRef}
            className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={handleDiscoverClick}
              className="inline-flex items-center justify-center rounded-full bg-porto-offwhite px-6 py-2.5 text-sm font-semibold text-porto-blue shadow-soft transition hover:bg-white"
            >
              Descubrir Oporto
            </button>
            <button
              type="button"
              onClick={() => navigate('/formulario')}
              className="inline-flex items-center justify-center rounded-full border border-porto-offwhite/50 bg-transparent px-6 py-2.5 text-sm font-semibold text-porto-offwhite transition hover:bg-porto-offwhite/10"
            >
              Solicitar información
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md self-end rounded-3xl bg-porto-offwhite/90 p-4 shadow-soft backdrop-blur-sm sm:p-5 lg:ml-auto">
          <div className="rounded-2xl bg-porto-cream/80 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-porto-blue/70">
              Una escapada con sentido
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Pensada para quienes buscan algo más que una ciudad bonita:
              miradores silenciosos, conversaciones largas, paseos al ritmo del
              río y cenas que se alargan sin mirar el reloj.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-700">
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="font-semibold text-porto-blue">Ritmo pausado</p>
                <p className="mt-1 text-[11px]">
                  Itinerario cómodo, sin madrugones extremos ni prisas
                  innecesarias.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="font-semibold text-porto-blue">Detalles cuidados</p>
                <p className="mt-1 text-[11px]">
                  Selección de planes y rincones que marcan la diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

