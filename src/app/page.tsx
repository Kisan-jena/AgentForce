import Features from '../components/sections/features';
import LogoCloud from '../components/layout/logo-cloud';
import Hero from '../components/sections/hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features/>
    </div>
  );
};

export default Home;
