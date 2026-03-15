import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const handleScrollTo = (id) => {
    if (location.pathname !== '/') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isHome = location.pathname === '/';

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-porto-cream/80 backdrop-blur border-b border-white/60 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-porto-blue flex items-center justify-center text-porto-gold text-lg font-semibold shadow-soft">
            OP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-porto-blue uppercase">
              Oporto Escapada
            </span>
            <span className="text-xs text-slate-500">
              18 · 23 marzo 2026
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {isHome && (
            <>
              <button
                type="button"
                onClick={() => handleScrollTo('por-que')}
                className="transition-colors hover:text-porto-blue"
              >
                Por qué Oporto
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('lugares')}
                className="transition-colors hover:text-porto-blue"
              >
                Lugares imprescindibles
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('experiencia')}
                className="transition-colors hover:text-porto-blue"
              >
                Experiencia
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('galeria')}
                className="transition-colors hover:text-porto-blue"
              >
                Galería
              </button>
            </>
          )}
          <Link
            to="/formulario"
            className="rounded-full border border-porto-blue/15 bg-porto-blue text-porto-offwhite px-4 py-1.5 text-xs uppercase tracking-wide shadow-soft transition hover:bg-porto-blue/90"
          >
            Solicitar información
          </Link>
        </div>

        <Link
          to="/formulario"
          className="inline-flex items-center gap-1 rounded-full border border-porto-blue/15 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-porto-blue shadow-sm transition hover:bg-porto-blue hover:text-porto-offwhite md:hidden"
        >
          Info viaje
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

