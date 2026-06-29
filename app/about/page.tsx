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
            <h1>Prečo eDesign?</h1>
          </div>
        </div>
      </section>

      <section className="section about-grid">
        <div className="main-container">
          <div className="card">
            <h3>Kto je eDesign?</h3>
            <p>Volám sa Erika a som študentkou, ktorá si vo voľnom čase našla záľubu v tvorbe dizajnu, nielen svadobných tlačovín. Som kreatívna (alebo si to aspoň myslím :D) a eDesign je pre mňa spôsob, akým môžem pretaviť svoje nápady do reality.</p>
          </div>
          <div className="card">
            <h3>Ako vznikol eDesign?</h3>
            <p>eDesign vznikal postupne. Všetko sa začalo v svadobných skupinách písaním komentárov pod príspevky ohľadom tlačovín. Niekoľkí z vás mi dali šancu vytvoriť prvé návrhy. Postupne pribúdali pozitívne reakcie a ľudia začali prejavovať záujem o ďalšie produkty.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
