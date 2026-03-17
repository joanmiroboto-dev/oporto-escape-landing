import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Formulario = lazy(() => import('./pages/Formulario.jsx'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-porto-cream">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-porto-blue"></div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-porto-cream text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

