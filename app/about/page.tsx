import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>About Us</h1>
            <p>Professional concrete cutting services you can depend on</p>
          </div>
        </section>

        {/* About Content */}
        <section className="about-section">
          <div className="container">
            <div className="about-intro">
              <h2>Three Generations of Excellence</h2>
              <p className="lead-text">
                Charlie&apos;s Concrete Cutting is a family-owned business proud to represent three generations of concrete cutting professionals. For decades, we&apos;ve been serving Tampa, Sarasota, Orlando, and surrounding areas with expert concrete cutting, coring, and scanning services. Our family legacy of craftsmanship, combined with our commitment to quality, safety, and customer satisfaction, has made us a trusted name in the industry.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
                    <circle cx="32" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="16" y="30" width="32" height="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="32" y1="20" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h3>Three Generations of Expertise</h3>
                <p>Our family business spans three generations of concrete cutting professionals, passing down knowledge, techniques, and a commitment to excellence.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
                    <rect x="8" y="28" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M38 16 L48 28" stroke="currentColor" strokeWidth="3"/>
                    <rect x="32" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>State-of-the-Art Equipment</h3>
                <p>We invest in the latest diamond cutting technology and equipment to ensure precision and efficiency on every project.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
                    <rect x="8" y="32" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="16" y="12" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="32" y1="20" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Safety First</h3>
                <p>Professional operations with comprehensive safety training and GPR scanning to prevent accidents and damage.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
                    <path d="M32 8 L42 24 L58 26 L45 39 L48 55 L32 47 L16 55 L19 39 L6 26 L22 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>100% Satisfaction Guaranteed</h3>
                <p>We stand behind our work with a complete satisfaction guarantee on every project we undertake.</p>
              </div>
            </div>

            <div className="about-values">
              <h2>Our Commitment</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>Quality Workmanship</h3>
                  <p>Every project is completed with meticulous attention to detail and professional precision from start to finish.</p>
                </div>
                <div className="value-item">
                  <h3>Customer Service</h3>
                  <p>Clear communication, transparent pricing, and dedicated support throughout your project.</p>
                </div>
                <div className="value-item">
                  <h3>Safety & Compliance</h3>
                  <p>Fully licensed and insured with strict adherence to all safety regulations and industry standards.</p>
                </div>
                <div className="value-item">
                  <h3>Reliability</h3>
                  <p>On-time service, professional conduct, and consistent results you can count on every time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-final">
          <div className="container">
            <h2>Ready to Work With Us?</h2>
            <p>Experience the difference of working with true professionals</p>
            <div className="cta-actions">
              <a href="tel:8138349011" className="phone-large">(813) 834-9011</a>
              <Link href="/contact#quote" className="cta-button">GET A FREE QUOTE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
