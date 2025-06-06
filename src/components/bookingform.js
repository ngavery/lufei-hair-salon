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

        <h1 className="form-title">Booking Form</h1>

        {submitted && isValid && (
          <Alert variant="success">🎉 Appointment request submitted!</Alert>
        )}

        {submitted && !isValid && (
          <Alert variant="danger">Please fill in all fields.</Alert>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Service</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="cut">Cut & Style</option>
            <option value="color">Colouring</option>
            <option value="highlight">Highlights</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preferred Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onKeyDown={(e) => e.preventDefault()}
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" className="submit-btn rounded-pill px-4 w-100">
            SUBMIT
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default BookingForm;
