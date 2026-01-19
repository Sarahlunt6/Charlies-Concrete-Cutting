import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
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
            <div className="service-overview-content">
              <div className="section-label">WHAT WE DO</div>
              <h2>Service Overview</h2>
              <div className="overview-description-box">
                <div className="quote-mark">"</div>
                <p className="service-full-description">{service.fullDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="service-features-section">
          <div className="container">
            <div className="section-label">OUR CAPABILITIES</div>
            <h2>What Sets Us Apart</h2>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                    <p>{feature}</p>
                  </div>
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
                <div className="block-header">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <h2>Applications</h2>
                </div>
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

              <div className="service-detail-block benefits-block">
                <div className="block-header">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <h2>Benefits</h2>
                </div>
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
