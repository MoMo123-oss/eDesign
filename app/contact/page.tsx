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
            <h1>Zahájte konzultáciu tlačovín</h1>
            <p className="subtitle">Povedzte nám o svojej svadbe a o tom, aké kusy potrebujete, a my vám odpovieme s ďalšími krokmi.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-container contact-card contact-page-card">
          <h2>Spojte sa s nami</h2>
          <p>Kontaktujte nás emailom, telefonicky alebo stručnou správou nižšie.</p>
          <div className="contact-details">
            <div>
              <p className="contact-label">Email</p>
              <p>hello@edesign.com</p>
            </div>
            <div>
              <p className="contact-label">Telefón</p>
              <p>+1 (555) 012-3456</p>
            </div>
          </div>
          <p className="contact-note">Pre najrýchlejšiu odpoveď uveďte, o ktoré produkty máte záujem, a dátum udalosti.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
