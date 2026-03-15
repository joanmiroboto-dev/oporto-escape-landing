import { useGsapFadeIn } from '../hooks/useGsapFadeIn.js';

function WhyPorto() {
  const ref = useGsapFadeIn();

  return (
    <section
      id="por-que"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-x-8 -top-10 -bottom-10 -z-10 rounded-3xl bg-white/70 shadow-soft" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-soft-terracotta">
            Por qué elegir Oporto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-porto-blue sm:text-4xl">
            Una ciudad pequeña, luminosa y profundamente acogedora.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Oporto tiene algo que cuesta explicar pero que se siente desde el
            primer paseo: una mezcla perfecta entre historia, vida de barrio y
            una luz dorada que lo envuelve todo. Sus azulejos, sus balcones
            llenos de ropa tendida y sus calles en pendiente te invitan a bajar
            el ritmo y mirar con más calma.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            A orillas del Duero descubrirás puentes emblemáticos, bodegas
            centenarias y miradores donde el tiempo parece detenerse. La
            gastronomía combina tradición y sencillez: vinos generosos, cafés
            históricos, tabernas donde aún se cocina como antes y restaurantes
            contemporáneos que reinterpretan la cocina portuguesa.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            En esta escapada de marzo te proponemos un Oporto luminoso, sin el
            calor del verano ni las multitudes extremas, ideal para
            reconectar contigo, con quien viajes y con el placer de descubrir
            una ciudad que se disfruta mejor despacio.
          </p>

          <dl className="mt-7 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl bg-porto-cream/90 p-4">
              <dt className="font-semibold text-porto-blue">
                Encanto histórico y azulejos
              </dt>
              <dd className="mt-1 text-slate-700">
                Estaciones, iglesias y fachadas que cuentan historias con
                miles de piezas de cerámica azul y blanca.
              </dd>
            </div>
            <div className="rounded-2xl bg-porto-cream/90 p-4">
              <dt className="font-semibold text-porto-blue">
                Río Duero y miradores
              </dt>
              <dd className="mt-1 text-slate-700">
                Paseos junto al agua, travesías en barco y miradores que
                se encienden al atardecer.
              </dd>
            </div>
            <div className="rounded-2xl bg-porto-cream/90 p-4">
              <dt className="font-semibold text-porto-blue">
                Bodegas y gastronomía
              </dt>
              <dd className="mt-1 text-slate-700">
                Degustaciones de vino de Oporto, platos abundantes y cafés
                donde apetece quedarse un rato más.
              </dd>
            </div>
            <div className="rounded-2xl bg-porto-cream/90 p-4">
              <dt className="font-semibold text-porto-blue">
                Tradición y modernidad
              </dt>
              <dd className="mt-1 text-slate-700">
                Librerías centenarias, arquitectura contemporánea, tiendas
                de autor y un ambiente creativo en constante movimiento.
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="h-56 overflow-hidden rounded-3xl bg-slate-900 shadow-soft sm:h-64">
            <img
              src="https://images.pexels.com/photos/17358917/pexels-photo-17358917.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Casas de colores en la Ribeira de Oporto"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 overflow-hidden rounded-3xl bg-slate-900 shadow-soft sm:h-36">
              <img
                src="https://images.pexels.com/photos/18991099/pexels-photo-18991099.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Calle empedrada y fachadas en Oporto"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-32 flex-col justify-between rounded-3xl bg-gradient-to-br from-porto-soft-terracotta/10 via-porto-cream to-porto-gold/10 p-4 shadow-soft sm:h-36">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-porto-blue/70">
                Marzo en Oporto
              </p>
              <p className="text-sm text-slate-800">
                Un clima suave, días que se alargan y la sensación de estrenar
                la primavera junto al río.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPorto;

