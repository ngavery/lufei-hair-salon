import '../styles/bookingform.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, date } = formData;

    if (name && email && phone && service && date) {
      setIsValid(true);
      setSubmitted(true);
    } else {
      setIsValid(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="form-div">
      <Form onSubmit={handleSubmit}>

        <h2 className="form-subtitle">Fill out the form below to book an appointment with us!</h2>

        {submitted && isValid && (
          <Alert variant="success">🎉 Appointment request submitted!</Alert>
        )}

        {submitted && !isValid && (
          <Alert variant="danger">Please fill in all fields.</Alert>
        )}

        <Form.Group className="mb-3 booking-form">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 booking-form">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 booking-form">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 booking-form">
          <Form.Label>Service</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="cut">Cut & Style - Women</option>
            <option value="Cut & Style - Men">Cut & Style - Men</option>
            <option value="color">Colouring</option>
            <option value="highlight">Highlights</option>
            <option value="Updo">Updo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 booking-form">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onKeyDown={(e) => e.preventDefault()}
          />
        </Form.Group>

        <Form.Group className="mb-3 booking-form">

        <Form.Label className=" booking-form">Time</Form.Label>
          <Form.Select
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <div className="btn-div">
            <Button type="submit" className="submit-btn rounded-pill px-4 w-100">
              SUBMIT
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default BookingForm;
