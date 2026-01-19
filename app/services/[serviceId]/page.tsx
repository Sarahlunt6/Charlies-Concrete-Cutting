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
          <div className="container">
            <div className="service-hero-content">
              <div className="service-hero-icon">
                {service.icon}
              </div>
              <h1>{service.title}</h1>
              <p className="service-hero-tagline">{service.tagline}</p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="container">
            <div className="service-overview-grid">
              <div className="service-main-content">
                <h2>Overview</h2>
                <p className="service-full-description">{service.fullDescription}</p>

                <h3>Key Features</h3>
                <ul className="service-features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-sidebar">
                <div className="service-cta-box">
                  <h3>Request a Quote</h3>
                  <p>Get a free consultation for your {service.title.toLowerCase()} project</p>
                  <Link href="/contact#quote" className="cta-button">Get Quote</Link>
                  <div className="service-phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:8138349011">(813) 834-9011</a>
                  </div>
                </div>

                <div className="service-image-box">
                  <img src="/images/placeholder.jpg" alt={service.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications & Benefits */}
        <section className="service-details">
          <div className="container">
            <div className="service-details-grid">
              <div className="service-detail-block">
                <h2>Applications</h2>
                <p>Our {service.title.toLowerCase()} services are ideal for:</p>
                <ul className="service-applications-list">
                  {service.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>

              <div className="service-detail-block">
                <h2>Benefits</h2>
                <p>Why choose our {service.title.toLowerCase()} services:</p>
                <ul className="service-benefits-list">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
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
