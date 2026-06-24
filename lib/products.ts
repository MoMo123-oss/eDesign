export type Product = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  images: string[];
  heroImage: string;
};

export const products: Product[] = [
  {
    slug: 'wedding-invitations',
    title: 'Oznámenia a pozvania k stolu',
    short: 'Jemné moderné pozvánky s čistou typografiou a modrými akcentmi.',
    description: 'Personalizované pozvánky s prémiovými papierovými textúrami, prepracovanými rozloženiami a jemným farebným štýlom pre vaše oznámenie.',
    features: ['Zahŕňa dve kolá návrhov', 'Tlačou pripravený artboard', 'Sprievodca návrhom obálky'],
    heroImage: 'https://images.unsplash.com/photo-1511285560929-fd59c5587cd0?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'name-tags',
    title: 'Menovky',
    short: 'Elegantné menovky navrhnuté tak, aby ladili s vašou svadobnou identitou.',
    description: 'Minimálne stolové kartičky a menovky pre hostí s jasným rozložením, jemnými okrajmi a premysleným priestorovaním pre každý stôl.',
    features: ['Viaceré veľkostné možnosti', 'Vlastné kaligrafické spracovanie', 'Ladiace kartičky pre hostí'],
    heroImage: 'https://images.unsplash.com/photo-1561436506-6c180a1d00ee?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1512427691650-1f92f3c5d5b1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'menu-info-cards',
    title: 'Menu karty',
    short: 'Štýlové menu kartičky a informačné doplnky pre vaše hostiny.',
    description: 'Čisté menu a informačné kartičky s premysleným priestorovaním, poznámkami k párovaniu a ostrou vizuálnou hierarchiou pre všetky detaily stolovania.',
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
    description: 'Výrazné kartičky s číslami stolov, ktoré ladia s vašou tlačovinou a pomáhajú hosťom orientovať sa bez rušenia.',
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
    description: 'Elegantné plány sedenia pre výstavy pri obrade, uvítacie stolíky a organizáciu hostiny.',
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
    description: 'Zákazkové omaľovánky pre deti, rozlúčky so slobodou a stoly pri hostine s jemnými motívmi a čistými obrysmi.',
    features: ['Dizajny vhodné pre deti', 'Súbory pripravené na tlač', 'Ladiace tematické motívy'],
    heroImage: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509718443690-d8e2fb3474a7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460343588241-4a021d7e22b5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    slug: 'foto-props',
    title: 'Rekvizity',
    short: 'Výrazné foto rekvizity, ktoré udržia hostí usmiatych a doladené k vašej oslave.',
    description: 'Návrhovo orientované foto rekvizity pre svadobné stánky, knihy hostí a hravé momenty počas obradu.',
    features: ['Vlastné tvary', 'Vysoké rozlíšenie pre tlač', 'Koordinovaná paleta'],
    heroImage: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1434682883527-0c7083e5c3f9?auto=format&fit=crop&w=900&q=80',
    ],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
