import { useGsapFadeIn } from '../hooks/useGsapFadeIn.js';

function TripExperience() {
  const ref = useGsapFadeIn({ delay: 0.1 });

  const days = [
    {
      title: 'Día 1 · Llegada y primer encuentro con el Duero',
      description:
        'Llegada tranquila, check-in sin prisas y paseo inicial por la Ribeira para tomar contacto con el río, las fachadas de colores y el ambiente relajado de Oporto al atardecer.',
    },
    {
      title: 'Día 2 · Azulejos, historia y cafés con alma',
      description:
        'Recorrido por la Estación de São Bento, la Sé Catedral y las iglesias más emblemáticas. Pausa en un café histórico para disfrutar de un desayuno largo y sin prisas.',
    },
    {
      title: 'Día 3 · Puente Don Luis I y bodegas en Gaia',
      description:
        'Cruzamos el Puente Don Luis I a pie, disfrutamos de las vistas panorámicas y visitamos una bodega tradicional en Vila Nova de Gaia con cata de vino de Oporto incluida.',
    },
    {
      title: 'Día 4 · Librerías, miradores y vida de barrio',
      description:
        'Exploramos la Livraria Lello, el barrio de los Clérigos y varios miradores menos conocidos. Tiempo libre por la tarde para descubrir tiendas de autor y rincones personales.',
    },
    {
      title: 'Día 5 · Día flexible: mar, mercados o más bodegas',
      description:
        'Día abierto para elegir: acercarse a la costa atlántica, descubrir mercados locales o repetir ese lugar que te ha enamorado. Te daremos varias propuestas según tu ritmo.',
    },
    {
      title: 'Día 6 · Último paseo y despedida',
      description:
        'Mañana libre para un último café con vistas, compras tranquilas o un paseo silencioso junto al río antes del regreso.',
    },
  ];

  return (
    <section
      id="experiencia"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="rounded-3xl bg-porto-blue text-porto-offwhite px-5 py-8 shadow-soft sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-gold/80">
              18 — 23 marzo 2026
            </p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Una experiencia pensada para disfrutar Oporto con calma.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-porto-offwhite/90 sm:text-base">
              Más que encadenar visitas, esta propuesta busca darte espacio
              para respirar la ciudad: momentos de grupo, ratos a solas y
              tiempo suficiente para saborear cada lugar sin tener la
              sensación de estar corriendo de un punto a otro.
            </p>
          </div>
          <div className="rounded-2xl bg-porto-offwhite/5 p-4 text-sm text-porto-offwhite/90 lg:max-w-xs">
            <p className="font-semibold text-porto-gold">
              Equilibrio entre planes guiados y tiempo libre
            </p>
            <p className="mt-2">
              Tendrás un marco sugerido para cada día, pero también espacio
              para improvisar, parar cuando lo necesites y hacer el viaje
              realmente tuyo.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {days.map((day) => (
            <article
              key={day.title}
              className="rounded-2xl bg-porto-offwhite/5 p-4 text-sm shadow-sm ring-1 ring-white/5"
            >
              <h3 className="text-[13px] font-semibold text-porto-gold">
                {day.title}
              </h3>
              <p className="mt-2 text-porto-offwhite/90">{day.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TripExperience;

