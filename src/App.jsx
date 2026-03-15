import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Formulario from './pages/Formulario.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-porto-cream text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

