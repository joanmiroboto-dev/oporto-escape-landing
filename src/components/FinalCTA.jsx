import { useNavigate } from 'react-router-dom';
import { useGsapFadeIn } from '../hooks/useGsapFadeIn.js';

function FinalCTA() {
  const navigate = useNavigate();
  const ref = useGsapFadeIn({ delay: 0.05 });

  return (
    <section
      id="contacto"
      ref={ref}
      className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-porto-blue via-porto-blue to-porto-soft-terracotta/80 px-6 py-10 text-porto-offwhite shadow-soft sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-porto-gold/20" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full border border-porto-gold/15" />

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-gold/80">
            Cierre de la escapada
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Si sientes que Oporto te está llamando, quizá sea el momento.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-porto-offwhite/90 sm:text-base">
            No hace falta tenerlo todo decidido. Rellena un breve formulario y
            te enviaremos más detalles sobre el viaje, opciones de alojamiento,
            ritmo de la propuesta y la forma de adaptarlo a lo que tú
            necesitas ahora.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/formulario')}
              className="inline-flex items-center justify-center rounded-full bg-porto-offwhite px-7 py-2.5 text-sm font-semibold text-porto-blue shadow-soft transition hover:bg-white"
            >
              Solicitar información del viaje
            </button>
            <p className="text-xs text-porto-offwhite/80">
              Sin compromiso · Te respondemos con calma y claridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

