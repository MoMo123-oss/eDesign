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
            <h1>Transparentné ceny pre zákazkové papierové súpravy</h1>
            <p className="subtitle">Jednoduché ceny začínajú jasnou základnou sadzbou, aby plánovanie tlačovín bolo ľahké.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-container pricing-grid-large">
          <div className="card pricing-card">
            <h3>Súprava pozvánok</h3>
            <p>Pozvánky, RSVP kartičky, obálky na odpovede a jeden zhodný návrh obálky.</p>
            <p className="price-detail">Od 260 $</p>
          </div>
          <div className="card pricing-card">
            <h3>Súprava stolovej tlačoviny</h3>
            <p>Menu, menovky, čísla stolov a plán sedenia navrhnuté tak, aby spolu ladili.</p>
            <p className="price-detail">Od 420 $</p>
          </div>
          <div className="card pricing-card">
            <h3>Kompletná eventová súprava</h3>
            <p>Pozvánky, všetka stolová tlačovina, foto rekvizity a individuálna podpora pri korektúrach.</p>
            <p className="price-detail">Od 650 $</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
