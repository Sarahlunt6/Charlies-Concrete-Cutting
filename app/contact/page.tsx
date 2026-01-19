"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectLocation: "",
    cuttingType: "",
    projectDetails: "",
    contactMethod: ""
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

                  {/* Map Embed */}
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148.9190269375083!2d-82.40345876031613!3d27.39794456540055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c339cee5a09b85%3A0x7a6dc1c8e3093e2e!2s7120%20Ashland%20Glen%2C%20Lakewood%20Ranch%2C%20FL%2034202!5e0!3m2!1sen!2sus!4v1768849625968!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{border: 0, borderRadius: '8px'}}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Charlie's Concrete Cutting Location"
                    ></iframe>
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
                <div className="form-header">
                  <h3>REQUEST QUOTE</h3>
                  <h2>GET YOUR <span className="text-red">FREE ESTIMATE</span></h2>
                </div>
                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-group">
                    <label htmlFor="name">YOUR NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">COMPANY NAME</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">EMAIL *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="youremail@business.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">PHONE *</label>
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
                    <label htmlFor="projectLocation">PROJECT LOCATION *</label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="City, State, or Full Address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cuttingType">TYPE OF CONCRETE CUTTING NEEDED *</label>
                    <select
                      id="cuttingType"
                      name="cuttingType"
                      required
                      value={formData.cuttingType}
                      onChange={handleChange}
                    >
                      <option value="">Please choose an option</option>
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

                  <div className="form-group full-width">
                    <label htmlFor="projectDetails">PROJECT DETAILS & SPECIFICATIONS</label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={5}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Please describe your project in detail: access constraints, timeline, special requirements, etc."
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label>PREFERRED CONTACT METHOD</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === "phone"}
                          onChange={handleChange}
                        />
                        <span>Phone Call</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === "email"}
                          onChange={handleChange}
                        />
                        <span>Email</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="text"
                          checked={formData.contactMethod === "text"}
                          onChange={handleChange}
                        />
                        <span>Text Message</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="cta-button submit-button">
                    Submit
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
