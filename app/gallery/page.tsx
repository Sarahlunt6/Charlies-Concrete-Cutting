import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Project Gallery</h1>
            <p>See our precision concrete cutting work in action</p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-section">
          <div className="container">
            <p className="gallery-intro">
              Explore our portfolio of completed projects showcasing our expertise in concrete cutting, coring, and demolition services. Each project demonstrates our commitment to precision, safety, and customer satisfaction.
            </p>

            <div className="gallery-coming-soon-large">
              <div className="coming-soon-content">
                <h2>Photos Coming Soon</h2>
                <p>We're building our gallery of completed projects. Check back soon to see our work!</p>
              </div>
            </div>

            <div className="gallery-cta">
              <h2>Have a Project in Mind?</h2>
              <p>Let us add your project to our portfolio of success stories</p>
              <Link href="/contact#quote" className="cta-button">Request a Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
