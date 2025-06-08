import SiteNavbar from '../components/navbar';
import ServiceHero from '../components/serviceshero'
import MoreServices from '../components/moreservices'
import FooterSection from '../components/footer';


function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <ServiceHero />
      <MoreServices />
      <FooterSection />
    </>
  );
}

export default ServicesPage;