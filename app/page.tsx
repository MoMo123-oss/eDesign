import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import { products } from '../lib/products';

const reviews = [
  {
    quote: 'So slečnou Erikou sme boli maximálne spokojní. Od začiatku bola veľmi milá, ochotná a ústretová. Komunikácia s ňou bola príjemná, všetko nám trpezlivo vysvetlila, poradila a pomohla nám s výberom tak, aby výsledok čo najlepšie zodpovedal našim predstavám. Výsledný dizajn svadobných pozvánok predčil naše očakávania. Pozvánky boli nádherné, precízne spracované a bolo vidieť, že si dala záležať na každom detaile. Veľmi oceňujeme aj to, že nám pripravila samostatné pozvánky pre deti, ktoré boli rovnako krásne a perfektne zladené s celkovým štýlom. Ďakujeme za profesionálny prístup, ochotu a skvelú spoluprácu. Slečnu Eriku môžeme všetkými desiatimi odporučiť každému, kto hľadá krásne a originálne svadobné oznámenia. ❤️💍',
    author: 'Lucie Ř',
    detail: 'svadobné oznámenia',
    tone: 'soft'
  },
  {
    quote: 'Skvelá komunikácia , rýchle dodanie ❤️ a práca krásna a krásne to prišlo aj zabalené ❤️ Veľká spokojnosť❤️',
    author: 'Monika V',
    detail: 'menovky a zasadací poriadok',
    tone: 'tall'
  },
  {
    quote: 'Skvelá komunikácia a trpezlivosť! Nakoľko som stále niečo menila, tak sa všetko vybavilo ozaj rýchlo a svadobné oznámenie je perfektne ❤️ Velmi pekne ďakujem za trpezlivosť a čas.',
    author: 'Eliška A',
    detail: 'kompletná tlačovinová sada',
    tone: 'accent'
  },
  {
    quote: 'Erika je veľmi šikovná, dizajn oznámení som dostala veľmi rýchlo, poslala mi hneď niekoľko návrhov takže bolo z čoho vyberať. Odporúčam',
    author: 'Paula B',
    detail: 'svadobná kolekcia na mieru',
    tone: 'wide'
  },
  {
    quote: 'S prácou tejto šikovnej dievčiny som veľmi spokojná, spravila mi krásne svadobné oznámenia, pozvania k svadobnému stolu a takisto menovky. Určite odporúčam každej budúcej nevestičke, ktorá zháňa svadobné oznámenia a iné tlačoviny. Takisto oceňujem rýchlosť dodania, Erika sa naozaj snaží poslať zásielky čím skôr, čo každá nevesta v strese, či všetko stíha ocení. Ďakujem ešte raz za všetko 😊',
    author: 'Nikuš Z',
    detail: 'oznámenia a doplnky',
    tone: 'soft'
  },
  {
    quote: 'Chcela by som sa veľmi pekne poďakovať za nádherné svadobné oznámenia. Komunikácia bola od začiatku veľmi príjemná, milá a profesionálna. Oceňujem najmä rýchlosť vyhotovenia, ochotu prispôsobiť sa mojim predstavám a zároveň pridať vlastné kreatívne nápady. Výsledok predčil moje očakávania – oznámenia sú spracované vo vysokej kvalite, s dôrazom na detail a estetiku. Je vidieť, že svoju prácu robí s láskou a záujmom. Určite odporúčam všetkými desiatimi každému, kto hľadá spoľahlivosť, kvalitu a ľudský prístup. Ešte raz veľká vďaka! 💐',
    author: 'Katka P',
    detail: 'papierové detaily na svadbu',
    tone: 'tall'
  }
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section home-hero">
        <div className="main-container hero-grid">
          <div className="hero-copy">
            <h1>Malé projekty <br />s veľkým významom</h1>
            <p className="panel-description">Máte predstavu o svojich svadobných tlačovinách? <br />Poďme ju spolu premeniť na skutočnosť.</p>
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

      <section className="section reviews-section" aria-labelledby="reviews-title">
        <div className="main-container">
          <div className="section-headline reviews-headline">
            <span className="eyebrow">Recenzie</span>
            <h2 id="reviews-title">Vaše milé slová</h2>
          </div>
          <p className="subtitle">Všetky tieto recenzie nájdete na mojom facebookovom profile a budem rada ak tam pribudnú aj vaše spokojné slová.</p>

          <div className="reviews-composition">
            {reviews.map((review, index) => (
              <article
                key={`${review.author}-${index}`}
                className={`review-card review-card-${review.tone}`}
              >
                <div className="review-card-topline">
                  <span className="review-index">0{index + 1}</span>
                </div>
                <p className="review-quote">“{review.quote}”</p>
                <p className="review-author">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
