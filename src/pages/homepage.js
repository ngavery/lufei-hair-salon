import '../App.css';
import SiteNavbar from '../components/navbar';
import HeroSection from '../components/hero';
import VisionSection from '../components/vision';
import ServicesSection from '../components/services';
import InfoSection from '../components/info';
import FooterSection from '../components/footer';

function HomePage() {
  return (
    <>
      <SiteNavbar/>
      <HeroSection/>
      <VisionSection/>
      <ServicesSection/>
      <InfoSection/>
      <FooterSection/>
    </>
  );
}

export default HomePage;
