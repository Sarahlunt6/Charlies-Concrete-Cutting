import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Locations() {
  const locations = [
    {
      city: "Tampa",
      phone: "(813) 834-9011",
      phoneLink: "tel:8138349011",
      areas: ["Tampa Bay", "Brandon", "Riverview", "Plant City", "Lutz", "Wesley Chapel"],
      description: "Serving the greater Tampa Bay area with professional concrete cutting services for residential, commercial, and industrial projects."
    },
    {
      city: "Sarasota",
      phone: "(941) 254-5011",
      phoneLink: "tel:9412545011",
      areas: ["Sarasota", "Bradenton", "Venice", "Lakewood Ranch", "Palmetto", "Ellenton"],
      description: "Providing expert concrete cutting solutions throughout Sarasota and Manatee counties with a focus on quality and precision."
    },
    {
      city: "Orlando",
      phone: "(407) 505-3011",
      phoneLink: "tel:4075053011",
      areas: ["Orlando", "Kissimmee", "Winter Park", "Altamonte Springs", "Oviedo", "Lake Mary"],
      description: "Delivering comprehensive concrete cutting and coring services to Orlando and surrounding Central Florida communities."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="locations-hero">
          <div className="container">
            <h1>Our Service Locations</h1>
            <p className="hero-subtitle">Professional concrete cutting services across Tampa, Sarasota, and Orlando</p>
          </div>
        </section>

        {/* Main Office */}
        <section className="main-office">
          <div className="container">
            <div className="office-card">
              <div className="office-content">
                <h2>Main Office</h2>
                <div className="office-details">
                  <div className="office-detail">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <strong>Address</strong>
                      <p>7120 Ashland Glen<br />Lakewood Ranch, FL 34202</p>
                    </div>
                  </div>
                  <div className="office-detail">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div>
                      <strong>Business Hours</strong>
                      <p>Monday - Friday: 8:00am - 5:00pm<br />Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="office-image">
                <img src="/images/placeholder.jpg" alt="Charlie's Concrete Cutting Office" />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="locations-grid-section">
          <div className="container">
            <h2>Areas We Serve</h2>
            <p className="section-intro">We proudly serve residential, commercial, and industrial clients across three major Florida markets</p>

            <div className="locations-grid">
              {locations.map((location) => (
                <div key={location.city} className="location-card">
                  <div className="location-header">
                    <h3>{location.city}</h3>
                    <div className="location-phone">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href={location.phoneLink}>{location.phone}</a>
                    </div>
                  </div>

                  <p className="location-description">{location.description}</p>

                  <div className="location-areas">
                    <strong>Serving:</strong>
                    <ul>
                      {location.areas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact#quote" className="location-cta">
                    Request Quote →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Radius */}
        <section className="service-radius-section">
          <div className="container">
            <div className="radius-box">
              <h2>Extended Service Area</h2>
              <p>While we specialize in Tampa, Sarasota, and Orlando, we can accommodate projects throughout Central and Southwest Florida. Contact us to discuss your project location and timeline.</p>
              <div className="radius-cta">
                <a href="tel:8138349011" className="phone-large">(813) 834-9011</a>
                <Link href="/contact#quote" className="cta-button">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="why-local">
          <div className="container">
            <h2>Why Choose a Local Concrete Cutting Company?</h2>
            <div className="why-local-grid">
              <div className="why-local-item">
                <h3>Fast Response Times</h3>
                <p>Local presence means we can respond quickly to your project needs and emergencies.</p>
              </div>
              <div className="why-local-item">
                <h3>Area Expertise</h3>
                <p>Deep knowledge of local building codes, regulations, and project requirements.</p>
              </div>
              <div className="why-local-item">
                <h3>Community Reputation</h3>
                <p>Our reputation is built on local relationships and quality work in your community.</p>
              </div>
              <div className="why-local-item">
                <h3>Reliable Service</h3>
                <p>Consistent, dependable service from a team that&apos;s invested in your area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-final">
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact your local Charlie&apos;s Concrete Cutting team today</p>
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
