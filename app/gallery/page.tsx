import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../mockup2.css";

export default function Gallery() {
  // Placeholder for gallery images - these can be replaced with actual project photos
  const galleryItems = [
    { id: 1, title: "Slab Cutting Project", category: "Slab Cutting" },
    { id: 2, title: "Wall Opening Installation", category: "Wall Cutting" },
    { id: 3, title: "Core Drilling Work", category: "Core Drilling" },
    { id: 4, title: "Commercial Demolition", category: "Demolition" },
    { id: 5, title: "Wire Sawing Project", category: "Wire Sawing" },
    { id: 6, title: "GPR Scanning Service", category: "GPR Scanning" },
    { id: 7, title: "Residential Slab Cut", category: "Slab Cutting" },
    { id: 8, title: "Industrial Core Drilling", category: "Core Drilling" },
    { id: 9, title: "Chainsaw Cutting", category: "Chainsawing" },
  ];

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

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-image gallery-coming-soon">
                    <div className="coming-soon-content">
                      <h3>Photos Coming Soon</h3>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
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
