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
    features: ['Dizajn na mieru', 'Prémiový papier', 'Cena od 0,45€ / kus'],
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
    features: ['Viaceré veľkostné možnosti', 'Prémiový papier', 'Cena od 0,30€ / kus'],
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
    features: ['Rôzne prevedenia', 'Prémiový papier', 'Individuálna cena'],
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/menu/o (1).jpeg',
      '/menu/o (2).jpeg',
      '/menu/o (3).jpeg',
    ],
  },
  {
    slug: 'table-number-cards',
    title: 'Číslovanie stolov',
    short: 'Čitateľné čísla stolov s uhladeným moderným vzhľadom.',
    description: 'Kartičky s číslami stolov, ktoré ladia s vašimi tlačovinami  a pomáhajú hosťom orientovať sa bez rušenia.',
    features: ['Ladiace do súpravy', 'Prémiový papier', 'Individuálna cena'],
    heroImage: 'https://images.unsplash.com/photo-1530026402564-05f3b3440b6a?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/cislovanie/o (1).jpeg',
      '/cislovanie/o (2).jpeg',
      '/cislovanie/o (3).jpeg',
    ],
  },
  {
    slug: 'coloring-pages',
    title: 'Omaľovánky',
    short: 'Hravo ladená tlačovina, ktorá zabaví hostí a vytvorí krásne suveníry.',
    description: 'Hravo ladená tlačovina, ktorá zabaví tých najmenších hostí.',
    features: ['Vhodné pre najmenších', 'Obojstranná tlač', 'Cena od 2,00€ / kus'],
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
    features: ['Vlastné tvary', 'Doladené k štýlu svadby', 'Cena od 10,00€ / balenie 20ks'],
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
    description: 'Vyberte si z rôznych typov papiera, ktoré dodajú vašim svadobným tlačovinám jedinečný vzhľad a pocit. \nV ponuke sú kvalitné hladké, štruktúrované, vizitkové papiere a iné.',
    features: ['Vysoká kvalita', 'Zaujímavé textúry', 'Rôzne gramáže'],
    heroImage: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/typy/o (1).jpg',
      '/typy/o (2).jpg',
      '/typy/o (3).jpg',
      '/typy/o (4).jpg',
      '/typy/o (5).jpg',
    ],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
