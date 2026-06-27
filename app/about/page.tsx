import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section hero section-sm">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">o mne</span>
            <h1>Elegantná tlačovina s tichým editoriálnym nádychom</h1>
            <p className="subtitle">eDesign vytvára prepracovanú svadobnú tlačovinu, ktorá pôsobí osobne, premyslene a krásne.</p>
          </div>
        </div>
      </section>

      <section className="section about-grid">
        <div className="main-container">
          <div className="card">
            <h3>Čistý, pokojný dizajn</h3>
            <p>Každý kus je vyvážený vzdušnou hierarchiou, jemnými farbami a modernými tlačovými detailmi.</p>
          </div>
          <div className="card">
            <h3>Prívetivá spolupráca</h3>
            <p>Jednoduchá komunikácia, rýchle prepracovania a jasné odporúčania pre tlač a dokončenie.</p>
          </div>
          <div className="card">
            <h3>Premyslená prezentácia</h3>
            <p>Od pozvánok po menu, tlačovina pôsobí súdržne v každom svadobnom momente.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
