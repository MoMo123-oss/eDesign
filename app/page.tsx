import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import { products } from '../lib/products';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section home-hero">
        <div className="main-container hero-grid">
          <div className="hero-copy">
            <h1>Malé projekty s veľkým významom</h1>
            <p className="panel-description">Máte predstavu o svojich svadobných tlačovinách? Poďme ju spolu premeniť na skutočnosť.</p>
            <div className="hero-buttons">
              <Link href="/products" className="button button-primary">
                Preskúmajte kolekcie
              </Link>
              <Link href="/contact" className="button button-secondary">
                Začnite svoj projekt
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <div className="hero-feature-grid">
                <div className="feature-card">
                  <h3>Tlačoviny na mieru</h3>
                  <p>Každý dizajn je pripravovaný presne podľa vašich predstáv.</p>
                </div>
                <div className="feature-card">
                  <h3>Kvalitné papiere</h3>
                  <p>Starostlivo vyberané papiere, ktoré dodávajú vašim tlačovinám jedinečný charakter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
