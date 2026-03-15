import { useGsapFadeIn } from '../hooks/useGsapFadeIn.js';
import { galleryImages } from '../data/gallery.js';

function Gallery() {
  const ref = useGsapFadeIn({ delay: 0.1 });

  return (
    <section
      id="galeria"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-soft-terracotta">
            Galería visual
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-porto-blue sm:text-3xl">
            Postales de la escapada que te espera.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-700 sm:text-base">
          Una selección de imágenes para que te hagas una idea de la atmósfera
          de Oporto: luz, texturas, detalles y esa mezcla única entre río y
          ciudad.
        </p>
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:balance]">
        {galleryImages.map((item, index) => (
          <figure
            key={item.id}
            className={`mb-4 overflow-hidden rounded-3xl bg-slate-900/80 shadow-soft ring-1 ring-black/5 ${
              index % 3 === 0 ? 'lg:break-inside-avoid' : ''
            }`}
          >
            <img
              src={item.imagenUrl}
              alt={item.titulo}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />
            <figcaption className="px-4 pb-3 pt-2 text-xs text-porto-offwhite/90">
              <p className="font-semibold text-porto-offwhite">
                {item.titulo}
              </p>
              <p className="mt-1 text-[11px]">{item.descripcion}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

