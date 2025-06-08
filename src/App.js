import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import ServicesPage from './pages/servicespage';
import ContactPage from './pages/contactpage';
import BookingPage from './pages/bookingpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
