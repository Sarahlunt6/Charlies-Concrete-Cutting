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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Three Generations of Expertise</h3>
                <p>Our family business spans three generations of concrete cutting professionals, passing down knowledge, techniques, and a commitment to excellence.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3>State-of-the-Art Equipment</h3>
                <p>We invest in the latest diamond cutting technology and equipment to ensure precision and efficiency on every project.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Safety First</h3>
                <p>Professional operations with comprehensive safety training and GPR scanning to prevent accidents and damage.</p>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
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
