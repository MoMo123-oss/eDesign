import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Môžem objednať viac položiek naraz?',
    answer: 'Áno. Vyberte si pozvánky, kartičky menu, menovky a ďalšie ako koordinovanú súpravu.',
  },
  {
    question: 'Ako dlho trvá korektúra?',
    answer: 'Korektúry sú zvyčajne zaslané do 1–2 pracovných dní od vašej žiadosti.',
  },
  {
    question: 'Môžem upraviť farby?',
    answer: 'Paletu je možné prispôsobiť pri zachovaní minimalistického a elegantného vzhľadu.',
  },
  {
    question: 'Poskytujete odporúčania na tlač?',
    answer: 'Áno. eDesign zahŕňa odporúčania na papier a tlač pre najlepší výsledok.',
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
            <p className="subtitle">Všetko, čo potrebujete vedieť pred objednaním svadobnej tlačoviny.</p>
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
