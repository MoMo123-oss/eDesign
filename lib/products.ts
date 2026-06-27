export type Product = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  images: string[];
  heroImage: string;
};

export const resolveProductImageSrc = (src: string) => {
  if (/^https?:\/\//i.test(src) || src.startsWith('/')) {
    return src;
  }

  return `/${src.replace(/^\.\.\/public\//, '').replace(/^public\//, '')}`;
};

export const products: Product[] = [
  {
    slug: 'wedding-invitations',
    title: 'Oznámenia \na pozvania k stolu',
    short: 'Jemné moderné pozvánky s čistou typografiou a modrými akcentmi.',
    description: 'Svadobné oznámenia v rôznych štýloch\n – od kvetinových a greenery dizajnov až po minimalistické prevedenia a netradičné tvary,\n aby si každý pár našiel to svoje.',
    features: ['Zahŕňa dve kolá návrhov', 'Tlačou pripravený artboard', 'Sprievodca návrhom obálky'],
    heroImage: 'https://images.unsplash.com/photo-1511285560929-fd59c5587cd0?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/oznamenia/o (1).jpeg',
      '/oznamenia/o (2).jpeg',
      '/oznamenia/o (3).jpeg',
      '/oznamenia/o (4).jpeg',
      '/oznamenia/o (5).jpeg',
    ],
  },
  {
    slug: 'name-tags',
    title: 'Menovky',
    short: 'Elegantné menovky navrhnuté tak, aby ladili s vašou svadobnou identitou.',
    description: 'Menovky uľahčujú organizáciu svadobného dňa a zabezpečia, že každý hosť rýchlo nájde svoje miesto pri stole.',
    features: ['Viaceré veľkostné možnosti', 'Vlastné kaligrafické spracovanie', 'Ladiace kartičky pre hostí'],
    heroImage: 'https://images.unsplash.com/photo-1561436506-6c180a1d00ee?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/menovky/o (1).jpeg',
      '/menovky/o (2).jpeg',
      '/menovky/o (3).jpeg',
      '/menovky/o (4).jpeg',
      '/menovky/o (5).jpeg',
    ],
  },
  {
    slug: 'menu-info-cards',
    title: 'Menu karty',
    short: 'Štýlové menu kartičky a informačné doplnky pre vaše hostiny.',
    description: 'Menu karty dopĺňajú svadobný stôl a prehľadne zobrazujú jedálny lístok alebo aj priebeh svadobného dňa v jednom dizajne.',
    features: ['Jednostranné a obojstranné rozloženia', 'Odporúčania na bezpečnú tlač jedla', 'Vlastná typografická paleta'],
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1505575967450-9c8b1053d1e5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508873699372-7ae584f96312?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517244873402-1e8d36dcc852?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529691556567-3dde9fb7f6db?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'table-number-cards',
    title: 'Číslovanie stolov',
    short: 'Čitateľné čísla stolov s uhladeným moderným vzhľadom.',
    description: 'Kartičky s číslami stolov, ktoré ladia s vašimi tlačovinami  a pomáhajú hosťom orientovať sa bez rušenia.',
    features: ['Odvážny styling čísiel', 'Dve možnosti tvaru', 'Koordinované akcenty'],
    heroImage: 'https://images.unsplash.com/photo-1530026402564-05f3b3440b6a?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518105779142-d975f22f1d5f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1533777324565-a040eb52fac2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba5f2921e5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'sitting-chart',
    title: 'Zasadací poriadok',
    short: 'Jednoduché plány sedenia s čistou štruktúrou a ľahkou čitateľnosťou.',
    description: 'Zasadací poriadok prehľadne ukazuje, kde má každý hosť svoje miesto, aby sa sedenie pri svadbe organizovalo jednoducho a bez stresu.',
    features: ['Veľkoformátové rozloženie', 'Voliteľná veľkosť pripravená do rámu', 'Farebné akcenty pre prehľadnosť'],
    heroImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512918212487-420b5e04fd27?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'coloring-pages',
    title: 'Omaľovánky',
    short: 'Hravo ladená tlačovina, ktorá zabaví hostí a vytvorí krásne suveníry.',
    description: 'Hravo ladená tlačovina, ktorá zabaví tých najmenších hostí.',
    features: ['Dizajny vhodné pre deti', 'Súbory pripravené na tlač', 'Ladiace tematické motívy'],
    heroImage: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/omalovanky/o (1).jpeg',
      '/omalovanky/o (2).jpeg',
      '/omalovanky/o (3).jpeg',
      '/omalovanky/o (4).jpeg',
      '/omalovanky/o (5).jpeg',
    ],
  },
  {
    slug: 'foto-props',
    title: 'Rekvizity',
    short: 'Výrazné foto rekvizity, ktoré udržia hostí usmiatych a doladené k vašej oslave.',
    description: 'Fotorekvizity, ktoré vyčaria hosťom úsmev na tvári. Krásne doladené v štýle vašej svadby.',
    features: ['Vlastné tvary', 'Vysoké rozlíšenie pre tlač', 'Koordinovaná paleta'],
    heroImage: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/rekvizity/o (1).jpeg',
      '/rekvizity/o (2).jpeg',
      '/rekvizity/o (3).jpeg',
    ],
  },
  {
    slug: 'paper-types',
    title: 'Typy papiera',
    short: 'Rôzne druhy papiera pre vaše tlačoviny.',
    description: 'Vyberte si z rôznych typov papiera, ktoré dodajú vašim svadobným tlačovinám jedinečný vzhľad a pocit. \nV ponuke sú hladké, štruktúrované, vizitkové a iné.',
    features: ['Vysoká kvalita', 'Rôzne textúry', 'Ekologické možnosti'],
    heroImage: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/rekvizity/o (1).jpeg',
      '/rekvizity/o (2).jpeg',
      '/rekvizity/o (3).jpeg',
    ],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
