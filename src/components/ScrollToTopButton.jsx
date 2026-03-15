import { useScrollToTop } from '../hooks/useScrollToTop.js';

function ScrollToTopButton() {
  const { isVisible, scrollToTop } = useScrollToTop(260);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-4 z-40 rounded-full bg-white/95 p-2.5 text-xs text-porto-blue shadow-soft ring-1 ring-black/5 transition-all duration-200 hover:bg-porto-blue hover:text-porto-offwhite ${
        isVisible ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
      }`}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;

