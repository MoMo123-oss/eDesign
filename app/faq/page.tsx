import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Ako si objednať?',
    answer: 'Kontaktujte ma. Najrýchlejšiu odpoveď dostanete prostredníctvom soc. sietí alebo mailom. Viac info v položke Kontakt.',
  },
  {
    question: 'Aká je dodacia doba?',
    answer: 'Všetky tlačoviny sa snažím pripraviť čo najskôr podľa mojich aktuálnych možností! Dodacia doba je cca 7-10 pracovných dní. Ak máme dohodnutú prípravu doplnkových dizajnov, dodacia doba sa líši aj od termínu svadby, uprednostňujem svadby so skorším termínom. Ak nejaké tlačoviny potrebujete do istého termínu, no nebude to odkomunikované vopred, neručím za doručenie včas',
  },
  {
    question: 'Ako dlho trvá príprava dizajnu?',
    answer: 'Zväčša vám do 24hod. pošlem 2-3 návrhy na výber, v inom prípade vás budem kontaktovať. ',
  },
  {
    question: 'Mám záujem o menovky, v akom formáte odoslať zoznam mien? ',
    answer: 'Zoznam mien odosielajte v ELEKTRONICKEJ podobe: pdf, word, excel. Neakceptované formy sú: foto/screenshot dokumentu, fotka ručne písaných mien... Aby som vaše tlačoviny mohla pripraviť čo najskôr, je potrebné ich dodať vo vyššie uvedenom formáte.',
  },
  {
    question: 'Bude výsledná tlač presne zodpovedať schválenému grafickému návrhu?',
    answer: 'V závislosti od použitých farieb a motívov sa môžu vo výslednej tlači objaviť jemné farebné odchýlky, čo je bežné pri grafickom spracovaní. Tieto rozdiely sú prirodzené a netreba sa ich obávať. Farebné zobrazenie na obrazovkách počítača či telefónu sa totiž môže líšiť od reálnej tlače, preto nie je možné zaručiť 100 % zhodu farieb.',
  },
  {
    question: 'Na čo si dať pozor?',
    answer: 'Pred tlačou si dôkladne skontrolujte všetky texty a údaje v grafickom návrhu. Za chyby, ktoré boli v schválenom návrhu, nenesiem zodpovednosť.',
  },
  {
    question: 'Aké rozmery majú tlačoviny?',
    answer: 'Každá tlačovina má svoj špecifický rozmer (alebo dohodnutý rozmer), napr. pre oznámenia u mňa je to 10x15cm (pre bezokrajovú tlač) a 10,5x14,8cm (klasická tlač), keďže všetky tlačoviny prejdú niekoľko krát mojimi rukami, platí to aj pre samotné orezávanie, to môže sposobiť minimálne odchýlky v rozmeroch.',
  },
  {
    question: 'Aký je minimálny odber svadobných oznámení?',
    answer: 'Minimálny odber nemám. Veľmi rada vám pripravím akýkoľvek počet kusov tlačovín.',
  },
  {
    question: 'Ponúkate aj obálky?',
    answer: 'Áno, v ponuke sú rôzne farby.',
  },
  {
    question: 'Máte v ponuke aj vzorkovník papierov?',
    answer: 'Priamo v ponuke vzorkovník nenájdete. Foto papierov odosielam vždy vopred, no ak máte problém vybrať si, určite sa dohodneme aj na zaslaní vzorkovníka aktuálnej ponuky.',
  },
];

export default function FAQPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section hero section-sm">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">FAQ</span>
            <h1>Najčastejšie kladené otázky</h1>
            <p className="subtitle">Všetko, čo potrebujete vedieť pred objednaním svadobných tlačovín.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-container grid-3">
          {faqItems.map((item) => (
            <div key={item.question} className="card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
