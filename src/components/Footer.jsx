function Footer() {
  return (
    <footer className="border-t border-white/60 bg-porto-cream/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-[11px]">
          &copy; {new Date().getFullYear()} Escapada a Oporto · 18 — 23 marzo
          2026. Todos los derechos reservados.
        </p>
        <p className="text-[11px]">
          Pensado para quienes quieren viajar despacio, con intención y buena
          compañía.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

