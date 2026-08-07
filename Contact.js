'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div>
                <p><strong>Phone</strong></p>
                <p><a href="tel:3512300018" style={{ color: '#d4a574', textDecoration: 'none' }}>
                  (351) 230-0018
                </a></p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p><strong>Email</strong></p>
                <p><a href="mailto:Jacksonconstructioninc350@gmail.com" style={{ color: '#d4a574', textDecoration: 'none' }}>
                  Jacksonconstructioninc350@gmail.com
                </a></p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p><strong>Address</strong></p>
                <p>3 Centennial Dr Ste G50<br />Peabody, Massachusetts</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p><strong>Hours</strong></p>
                <p>Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: By Appointment<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="form-status success">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error">
                ✗ Error sending message. Please try again or call us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
