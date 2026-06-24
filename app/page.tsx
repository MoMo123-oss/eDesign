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
            <span className="eyebrow">editoriálna tlačovina</span>
            <h1>Luxusné papierové zážitky pre vaše svadobné detaily</h1>
            <p className="subtitle">eDesign spája sofistikovanú umeleckú réžiu s nadčasovými súpravami pozvánok, menoviek, menu a starostlivo vybranými doplnkami pre hostinu.</p>
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
              <span className="panel-label">Kolekcia</span>
              <h2>Editoriálne detaily, vybrané materiály</h2>
              <p className="panel-description">Jemné textúry, mäkké farebné príbehy a umelecké rozloženie, ktoré pôsobí editoriálne, no zároveň osobne.</p>
              <div className="hero-feature-grid">
                <div className="feature-card">
                  <h3>Súpravy pozvánok</h3>
                  <p>Pamätateľná tlačovina s elegantným kombinovaním papierov a jemnou typografiou.</p>
                </div>
                <div className="feature-card">
                  <h3>Detaily svadby</h3>
                  <p>Menu, čísla stolov, plán sedenia a foto rekvizity navrhnuté ako jednotná kolekcia.</p>
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
