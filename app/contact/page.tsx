import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section hero section-sm">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">kontakt</span>
            <h1>Konzultácia tlačovín</h1>
          </div>
          <p className="subtitle">Ak máte akékoľvek otázky ohľadom tlačovín, neváhajte ma kontaktovať a vymyslíme spolu niečo pekné.</p>
        </div>
      </section>

      <section className="section">
        <div className="main-container contact-card contact-page-card">
          <h2>Spojte sa so mnou</h2>
          <p>Kontaktovať ma môžete cez sociálne siete alebo mailom.</p>
          <div className="contact-details">
            <div>
              <p className="contact-label">Facebook</p>
              <a href="https://www.facebook.com/share/17pPVDfXTY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Erika Dizajn</a>
            </div>
            <div>
              <p className="contact-label">Instagram</p>
              <a href="https://www.instagram.com/edesign.sk?igsh=MWFvNWN4bGp5bXgwNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">@edesign.sk</a>
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p>e.dizajn21@gmail.com</p>
            </div>
          </div>
          <p className="contact-note">Pre efektívnejšiu odpoveď uveďte o aký typ tlačovín máte záujem a dátum udalosti.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
