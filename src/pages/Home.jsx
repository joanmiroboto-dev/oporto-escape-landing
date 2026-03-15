import Hero from '../components/Hero.jsx';
import WhyPorto from '../components/WhyPorto.jsx';
import MustSeePlaces from '../components/MustSeePlaces.jsx';
import TripExperience from '../components/TripExperience.jsx';
import Gallery from '../components/Gallery.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

function Home() {
  return (
    <div className="pt-20 sm:pt-24">
      <Hero />
      <WhyPorto />
      <MustSeePlaces />
      <TripExperience />
      <Gallery />
      <FinalCTA />
    </div>
  );
}

export default Home;

