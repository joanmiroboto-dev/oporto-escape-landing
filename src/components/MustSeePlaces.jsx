import { useGsapFadeIn } from '../hooks/useGsapFadeIn.js';
import { mustSeePlaces } from '../data/places.js';

function MustSeePlaces() {
  const ref = useGsapFadeIn({ delay: 0.1 });

  return (
    <section
      id="lugares"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-soft-terracotta">
            Lugares imprescindibles
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-porto-blue sm:text-3xl">
            Un recorrido por lo más esencial de Oporto.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-700 sm:text-base">
            Te proponemos un itinerario que combina barrios con carácter,
            miradores, arquitectura emblemática y rincones donde la vida local
            late con fuerza.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mustSeePlaces.map((place) => (
          <article
            key={place.id}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-40 overflow-hidden sm:h-44">
              <img
                src={place.imagenUrl}
                alt={place.nombre}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70" />
              <h3 className="pointer-events-none absolute inset-x-4 bottom-3 text-sm font-semibold text-porto-offwhite drop-shadow-sm">
                {place.nombre}
              </h3>
            </div>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
              <p className="text-sm leading-relaxed text-slate-700">
                {place.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MustSeePlaces;

