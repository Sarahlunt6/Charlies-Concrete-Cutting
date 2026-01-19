import Link from "next/link";
import "./mockup2.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-image">
            <img src="/images/placeholder.jpg" alt="Professional concrete cutting in action" className="hero-bg-image" />
            <div className="hero-accent"></div>
          </div>
          <div className="hero-content">
            <h1>Charlie's Concrete Cutting</h1>
            <p className="hero-subheadline">A Name You Can Depend On</p>
            <Link href="/contact#quote" className="cta-button">REQUEST A QUOTE</Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2>Complete Concrete Cutting Solutions</h2>
            <div className="services-grid">
              <Link href="/services/slab-cutting" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="32" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="16" y="30" width="32" height="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="32" y1="20" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M20 38 L44 38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
                  </svg>
                </div>
                <h3>Slab Cutting</h3>
                <p>Precision cutting through concrete, asphalt, and structural materials up to 27 inches thick for trenching, openings, and expansion joints</p>
              </Link>

              <Link href="/services/wall-cutting" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="8" y="16" width="48" height="36" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="44" cy="28" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="44" y1="18" x2="44" y2="38" stroke="currentColor" strokeWidth="2.5"/>
                    <line x1="12" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3>Wall Cutting</h3>
                <p>Clean openings through reinforced concrete and structural walls up to 27″ deep for doors, windows, ducts, and pipe penetrations</p>
              </Link>

              <Link href="/services/core-drilling" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="8" y="24" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                    <circle cx="32" cy="32" r="3" fill="currentColor"/>
                    <line x1="32" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="3"/>
                    <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>Core Drilling</h3>
                <p>Diamond precision drilling for clean circular cuts through any structural material for utility penetrations, HVAC, and plumbing</p>
              </Link>

              <Link href="/services/wire-sawing" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="12" y="36" width="40" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 28 Q32 8 56 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4,2"/>
                    <circle cx="8" cy="28" r="5" fill="currentColor"/>
                    <circle cx="56" cy="28" r="5" fill="currentColor"/>
                    <line x1="16" y1="44" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
                  </svg>
                </div>
                <h3>Wire Sawing</h3>
                <p>Unlimited depth cutting for large-scale demolition and structural modifications including foundation removal and bridge work</p>
              </Link>

              <Link href="/services/chainsawing" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="8" y="28" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M38 16 L48 28" stroke="currentColor" strokeWidth="3"/>
                    <rect x="32" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="12" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="46" cy="13" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Chainsawing</h3>
                <p>Versatile cutting in tight spaces through materials ¼" to 24″ thick including reinforced concrete and precast panels</p>
              </Link>

              <Link href="/services/gpr-scanning" className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="8" y="32" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="16" y="12" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="32" y1="20" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 40 Q20 36 28 40 Q36 44 44 40 Q52 36 56 40" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="24" cy="20" r="2" fill="currentColor"/>
                    <circle cx="40" cy="20" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3>GPR Scanning</h3>
                <p>Non-destructive scanning to locate rebar, conduits, and cables before cutting for safety verification and target location</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="sawtooth-border"></div>
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">27"</div>
                <div className="stat-label">Maximum Cut Depth</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas">
          <div className="container">
            <h2>Serving Your Community</h2>
            <p className="section-intro">We proudly serve residential, commercial, and industrial clients throughout the region</p>
            <div className="areas-grid">
              <div className="area-card">
                <h3>Tampa</h3>
                <a href="tel:8138349011" className="area-phone-button">(813) 834-9011</a>
              </div>
              <div className="area-card">
                <h3>Sarasota</h3>
                <a href="tel:9412545011" className="area-phone-button">(941) 254-5011</a>
              </div>
              <div className="area-card">
                <h3>Orlando</h3>
                <a href="tel:4075053011" className="area-phone-button">(407) 505-3011</a>
              </div>
            </div>
            <div className="service-radius">
              <p><strong>Service Radius:</strong> Up to 50 miles from city center | <a href="#contact" className="radius-link">Contact us</a> for service area inquiries</p>
            </div>
          </div>
        </section>

        {/* Certifications & Partnerships Section */}
        <section className="certifications">
          <div className="container">
            <h2>Certified & Trusted Professionals</h2>
            <p className="section-intro">Our commitment to quality and safety is backed by industry certifications and partnerships</p>
            <div className="cert-grid">
              <div className="cert-card">
                <h3>Licensed & Insured</h3>
                <p>Fully licensed contractors with comprehensive liability insurance</p>
              </div>
              <div className="cert-card">
                <h3>Safety Certified</h3>
                <p>Professional safety standards with certified training for all operators</p>
              </div>
              <div className="cert-card">
                <h3>Industry Certified</h3>
                <p>Certified concrete cutting specialists with ongoing training</p>
              </div>
              <div className="cert-card">
                <h3>Quality Guarantee</h3>
                <p>100% satisfaction guarantee on all work performed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose">
          <div className="container">
            <h2>Why Choose Charlie&apos;s Concrete Cutting?</h2>
            <div className="why-grid">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Precision & Accuracy</h3>
                  </div>
                  <div className="flip-card-back">
                    <ul>
                      <li>Diamond cutting technology for clean cuts</li>
                      <li>GPR scanning to locate obstacles before cutting</li>
                      <li>Cuts up to 27 inches deep with professional accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Versatile Capabilities</h3>
                  </div>
                  <div className="flip-card-back">
                    <ul>
                      <li>9 specialized cutting services</li>
                      <li>Handles materials from ¼" to unlimited depth</li>
                      <li>Residential to large commercial projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Safe & Efficient</h3>
                  </div>
                  <div className="flip-card-back">
                    <ul>
                      <li>Non-destructive scanning technology</li>
                      <li>Minimal disruption to surrounding areas</li>
                      <li>Clean, quiet operations with complete debris removal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Professional Experience</h3>
                  </div>
                  <div className="flip-card-back">
                    <ul>
                      <li>Trained and certified operators</li>
                      <li>State-of-the-art equipment</li>
                      <li>Complete project management from consultation to cleanup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '4rem'}}>
              <Link href="/contact#quote" className="why-button">Get Started</Link>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="service-area">
          <div className="container">
            <h2>Serving Your Area</h2>
            <p className="service-area-text">Charlie&apos;s Concrete Cutting proudly serves the region with professional concrete cutting, coring, and scanning services. Contact us today to discuss your project needs.</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-final">
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact Charlie&apos;s Concrete Cutting today for a free consultation and quote</p>
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
