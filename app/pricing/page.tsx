import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function PricingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section hero section-sm">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">cenník</span>
            <h1>Prehľad cien</h1>
            </div>
          <p className="subtitle">Tento cenník je orientačný, ceny sa líšia od druhu papiera, rozmerov a použitej techniky (embossovanie, debossovanie, metalická tlač, špeciálne tvary). Pre konkrétnu cenovú ponuku ma kontaktujte.</p>
        </div>
      </section>

      <section className="section">
        <div className="main-container pricing-grid-large">
          <div className="card pricing-card">
            <h3>Svadobné oznámenia</h3>
            <p>Rozmery: 100x150mm / 105x148mm</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 0,45€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Pozvanie k stolu</h3>
            <p>Rozmery: 91x55mm</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 0,30€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Kartičkové menovky</h3>
            <p>Rozmery: 91x55mm</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 0,30€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Strieškové menovky</h3>
            <p>Rozmery: 90x100mm</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 0,40€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Menovky na stuhy</h3>
            <p>Dĺžka stuhy: 60cm</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 0,90€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Omaľovánky</h3>
            <p>Rozmery: A5, obojstranná tlač</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 2,00€ / ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Rekvizity</h3>
            <p>Balenie 20ks</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Od 10,00€ / balenie 20ks</p>
          </div>
          <div className="card pricing-card">
            <h3>Doplnkové tlačoviny</h3>
            <p>Menu karty, zasadací poriadok a iné.</p>
            <p className="price-detail" style={{ marginTop: '0.5rem' }}>Individuálna cena</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
