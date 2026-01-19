import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="Charlie's Concrete Cutting - A Name You Can Depend On" className="logo-img" />
          </Link>
        </div>
        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="nav-menu">
          <li><Link href="/">HOME</Link></li>
          <li className="has-dropdown">
            <Link href="/services">SERVICES</Link>
            <ul className="dropdown">
              <li><Link href="/services#slab-cutting">Slab Cutting</Link></li>
              <li><Link href="/services#wall-cutting">Wall Cutting</Link></li>
              <li><Link href="/services#core-drilling">Core Drilling</Link></li>
              <li><Link href="/services#wire-sawing">Wire Sawing</Link></li>
              <li><Link href="/services#chainsawing">Chainsawing</Link></li>
              <li><Link href="/services#demolition">Demolition & Removal</Link></li>
              <li><Link href="/services#gpr-scanning">GPR Scanning</Link></li>
              <li><Link href="/services#safety-grooving">Safety Grooving</Link></li>
              <li><Link href="/services#pour-back">Pour Back & Patching</Link></li>
            </ul>
          </li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/gallery">GALLERY</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
        <div className="nav-cta">
          <a href="tel:8138349011" className="phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            (813) 834-9011
          </a>
          <Link href="/contact#quote" className="cta-button">GET A QUOTE</Link>
        </div>
      </nav>
    </header>
  );
}
