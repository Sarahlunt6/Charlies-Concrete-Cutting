import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Services() {
  const services = [
    {
      id: "slab-cutting",
      title: "Slab Cutting",
      tagline: "Precision Cutting Up to 27 Inches Deep",
      description: "Professional slab cutting for trenching, openings, and expansion joints in concrete and asphalt.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="16" y="30" width="32" height="18" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="32" y1="20" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M20 38 L44 38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
        </svg>
      )
    },
    {
      id: "wall-cutting",
      title: "Wall Cutting",
      tagline: "Clean Openings Through Reinforced Concrete",
      description: "Expert wall cutting for doors, windows, ducts, and penetrations up to 27″ deep.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="16" width="48" height="36" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="44" cy="28" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="44" y1="18" x2="44" y2="38" stroke="currentColor" strokeWidth="2.5"/>
          <line x1="12" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: "core-drilling",
      title: "Core Drilling",
      tagline: "Diamond Precision Drilling",
      description: "Clean circular cuts through any structural material for utility penetrations and HVAC.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="24" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
          <line x1="32" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: "wire-sawing",
      title: "Wire Sawing",
      tagline: "Unlimited Depth Cutting",
      description: "Large-scale demolition and structural modifications including foundation and bridge work.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="12" y="36" width="40" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 28 Q32 8 56 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4,2"/>
          <circle cx="8" cy="28" r="5" fill="currentColor"/>
          <circle cx="56" cy="28" r="5" fill="currentColor"/>
          <line x1="16" y1="44" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
        </svg>
      )
    },
    {
      id: "chainsawing",
      title: "Chainsawing",
      tagline: "Versatile Cutting in Tight Spaces",
      description: "Perfect for tight or hard-to-reach areas, cuts materials ¼\" to 24\" thick.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="28" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M38 16 L48 28" stroke="currentColor" strokeWidth="3"/>
          <rect x="32" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="12" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="2"/>
          <circle cx="46" cy="13" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: "demolition",
      title: "Demolition & Removal",
      tagline: "Professional Demolition Services",
      description: "Complete demolition with debris removal and site cleanup for all project sizes.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="32" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-15 18 42)"/>
          <rect x="36" y="28" width="20" height="24" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(10 46 40)"/>
          <path d="M10 52 L54 52" stroke="currentColor" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: "gpr-scanning",
      title: "GPR Scanning",
      tagline: "Non-Destructive Testing",
      description: "Locate rebar, conduits, and cables before cutting for safety and accuracy.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="32" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="16" y="12" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="32" y1="20" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 40 Q20 36 28 40 Q36 44 44 40 Q52 36 56 40" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="20" r="2" fill="currentColor"/>
          <circle cx="40" cy="20" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: "safety-grooving",
      title: "Safety Grooving",
      tagline: "Enhanced Surface Traction",
      description: "Precision grooving for parking structures and walkways with ADA-compliant solutions.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="28" width="48" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="14" y1="28" x2="14" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="26" y1="28" x2="26" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="32" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="38" y1="28" x2="38" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="44" y1="28" x2="44" y2="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="50" y1="28" x2="50" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: "pour-back",
      title: "Pour Back & Patching",
      tagline: "Seamless Surface Restoration",
      description: "Professional concrete patching and finishing to restore surfaces after cutting.",
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <rect x="8" y="36" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 20 Q24 12 28 20 L28 36" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="24" cy="20" rx="6" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 44 Q24 40 32 44 Q40 48 48 44" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Header */}
        <section className="services-hero">
          <div className="container">
            <h1>Our Services</h1>
            <p className="hero-subtitle">Comprehensive concrete cutting solutions for every project need</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-showcase">
          <div className="container">
            <div className="services-showcase-grid">
              {services.map((service) => (
                <Link href={`/services/${service.id}`} key={service.id} className="service-showcase-card">
                  <div className="service-showcase-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-tagline">{service.tagline}</p>
                  <p className="service-preview">{service.description}</p>
                  <span className="learn-more">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="services-features">
          <div className="container">
            <h2>Why Choose Our Services?</h2>
            <div className="features-grid-horizontal">
              <div className="feature-horizontal">
                <div className="feature-number">27"</div>
                <div className="feature-content">
                  <h3>Maximum Cutting Depth</h3>
                  <p>Industry-leading cutting capabilities</p>
                </div>
              </div>
              <div className="feature-horizontal">
                <div className="feature-number">24/7</div>
                <div className="feature-content">
                  <h3>Emergency Service</h3>
                  <p>Available when you need us most</p>
                </div>
              </div>
              <div className="feature-horizontal">
                <div className="feature-number">100%</div>
                <div className="feature-content">
                  <h3>Satisfaction Guaranteed</h3>
                  <p>Quality workmanship every time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-final">
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote</p>
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
