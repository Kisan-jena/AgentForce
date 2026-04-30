import Features from '../components/layout/features';
import Hero from '../components/layout/hero';
import LogoCloud from '../components/layout/logo-cloud';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
    </div>
  );
};

export default Home;
