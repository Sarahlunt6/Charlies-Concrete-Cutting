"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch for a free consultation and quote on your concrete cutting project</p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Information */}
              <div className="contact-info-block">
                <h2>Get In Touch</h2>
                <p>Ready to start your project? Contact us today for professional concrete cutting services.</p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <h3>Address</h3>
                      <p>7120 Ashland Glen<br />Lakewood Ranch, FL 34202</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <h3>Phone Numbers</h3>
                      <p>
                        Tampa: <a href="tel:8138349011">(813) 834-9011</a><br />
                        Sarasota: <a href="tel:9412545011">(941) 254-5011</a><br />
                        Orlando: <a href="tel:4075053011">(407) 505-3011</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div>
                      <h3>Email</h3>
                      <p><a href="mailto:info@charliesconcrete.com">info@charliesconcrete.com</a></p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div>
                      <h3>Business Hours</h3>
                      <p>
                        Monday - Friday: 8:00am - 5:00pm<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div className="quote-form-block" id="quote">
                <h2>Request a Quote</h2>
                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="slab-cutting">Slab Cutting</option>
                      <option value="wall-cutting">Wall Cutting</option>
                      <option value="core-drilling">Core Drilling</option>
                      <option value="wire-sawing">Wire Sawing</option>
                      <option value="chainsawing">Chainsawing</option>
                      <option value="demolition">Demolition & Removal</option>
                      <option value="gpr-scanning">GPR Scanning</option>
                      <option value="safety-grooving">Safety Grooving</option>
                      <option value="pour-back">Pour Back & Patching</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location *</label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="">Select your location...</option>
                      <option value="tampa">Tampa</option>
                      <option value="sarasota">Sarasota</option>
                      <option value="orlando">Orlando</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project needs..."
                    ></textarea>
                  </div>

                  <button type="submit" className="cta-button submit-button">
                    Submit Request
                  </button>

                  {submitted && (
                    <div className="form-success">
                      Thank you! We&apos;ll contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
