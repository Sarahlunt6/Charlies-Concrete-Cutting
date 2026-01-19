"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getServiceById, getAllServiceIds } from "../../data/servicesData";
import "../../mockup2.css";

export async function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  return serviceIds.map((serviceId) => ({
    serviceId: serviceId,
  }));
}

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const [serviceId, setServiceId] = useState<string>("");
  const [service, setService] = useState<any>(null);
  const [applicationsOpen, setApplicationsOpen] = useState(true);
  const [benefitsOpen, setBenefitsOpen] = useState(true);

  useEffect(() => {
    params.then(({ serviceId }) => {
      setServiceId(serviceId);
      const svc = getServiceById(serviceId);
      if (!svc) {
        notFound();
      }
      setService(svc);
    });
  }, [params]);

  if (!service) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        {/* Service Hero */}
        <section className="service-hero">
          <div className="hero-background-pattern"></div>
          <div className="container">
            <div className="service-hero-content">
              <div className="hero-badge">PROFESSIONAL SERVICE</div>
              <h1>{service.title}</h1>
              <p className="service-hero-tagline">{service.tagline}</p>
              <div className="hero-cta-row">
                <a href="tel:8138349011" className="hero-phone-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  (813) 834-9011
                </a>
                <Link href="/contact#quote" className="hero-quote-btn">GET FREE QUOTE</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="container">
            <div className="service-overview-layout">
              <div className="overview-main-box">
                <div className="service-icon-header">
                  {service.icon}
                </div>
                <h3 className="overview-subtitle">PROFESSIONAL CONCRETE CUTTING</h3>
                <h2 className="overview-title">{service.title} <span className="title-highlight">EXCELLENCE</span></h2>
                <p className="service-full-description">{service.fullDescription}</p>
              </div>

              <div className="overview-cta-box">
                <div className="cta-box-header">GET {service.title.toUpperCase()}</div>
                <div className="cta-box-title">PROFESSIONAL <span className="highlight-text">SERVICE</span> READY</div>

                <a href="tel:8138349011" className="location-phone-btn tampa-btn">
                  <div className="btn-label">TAMPA:</div>
                  <div className="btn-number">(813) 834-9011</div>
                </a>

                <a href="tel:9412545011" className="location-phone-btn sarasota-btn">
                  <div className="btn-label">SARASOTA:</div>
                  <div className="btn-number">(941) 254-5011</div>
                </a>

                <a href="tel:4075053011" className="location-phone-btn orlando-btn">
                  <div className="btn-label">ORLANDO:</div>
                  <div className="btn-number">(407) 505-3011</div>
                </a>

                <div className="cta-box-footer">PROFESSIONAL • RELIABLE • EFFICIENT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="service-features-section">
          <div className="container">
            <div className="features-section-header">
              <div className="section-label-red">OUR {service.title.toUpperCase()} CAPABILITIES</div>
              <h2 className="features-main-title">PROFESSIONAL <span className="title-red">CAPABILITIES</span></h2>
              <p className="features-subtitle">PRECISION • EXPERIENCE • RELIABILITY – EXPERT SERVICE DELIVERY</p>
            </div>

            <div className="capabilities-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="capability-box">
                  <div className="capability-header">{feature.split(' ').slice(0, 2).join(' ').toUpperCase()}</div>
                  <p className="capability-text">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications & Benefits */}
        <section className="service-details">
          <div className="container">
            <div className="service-details-grid">
              <div className="service-detail-block applications-block">
                <button
                  className="accordion-header"
                  onClick={() => setApplicationsOpen(!applicationsOpen)}
                  aria-expanded={applicationsOpen}
                >
                  <h2>APPLICATIONS</h2>
                  <svg
                    className={`accordion-arrow ${applicationsOpen ? 'open' : ''}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`accordion-content ${applicationsOpen ? 'open' : ''}`}>
                  <p className="block-intro">Our {service.title.toLowerCase()} services are ideal for:</p>
                  <ul className="service-applications-list">
                    {service.applications.map((application, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-detail-block benefits-block">
                <button
                  className="accordion-header"
                  onClick={() => setBenefitsOpen(!benefitsOpen)}
                  aria-expanded={benefitsOpen}
                >
                  <h2>BENEFITS</h2>
                  <svg
                    className={`accordion-arrow ${benefitsOpen ? 'open' : ''}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`accordion-content ${benefitsOpen ? 'open' : ''}`}>
                  <p className="block-intro">Why choose our {service.title.toLowerCase()} services:</p>
                  <ul className="service-benefits-list">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span className="star-icon">★</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="related-services">
          <div className="container">
            <h2>Other Services You May Need</h2>
            <p className="related-intro">Explore our complete range of concrete cutting and scanning services</p>
            <Link href="/services" className="view-all-services">
              View All Services →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-final">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation on your {service.title.toLowerCase()} project</p>
            <div className="cta-actions">
              <a href="tel:8138349011" className="phone-large">(813) 834-9011</a>
              <Link href="/contact#quote" className="cta-button">REQUEST A QUOTE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
