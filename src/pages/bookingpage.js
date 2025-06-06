import SiteNavbar from '../components/navbar';
import FooterSection from '../components/footer';
import BookingHero from '../components/bookinghero';
import BookingForm from '../components/bookingform';

function BookingPage() {
  return (
    <>
      <SiteNavbar />
      <BookingHero />
      <BookingForm />
      <FooterSection />
    </>
  );
}

export default BookingPage;
