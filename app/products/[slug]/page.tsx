import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import PortfolioGrid from '../../../components/PortfolioGrid';
import { getProduct, products } from '../../../lib/products';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />

      <section className="section hero section-sm">
        <div className="main-container detail-hero">
          <div>
            <span className="eyebrow">{product.title}</span>
            <h1>{product.title}</h1>
            <p className="subtitle">{product.short}</p>
            <p>{product.description}</p>
            <div className="detail-features">
              {product.features.map((feature) => (
                <div key={feature} className="feature-pill">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="detail-hero-image">
            <img src={product.heroImage} alt={product.title} className="detail-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">portfólio</span>
            <h2>Príklady pre {product.title}</h2>
          </div>
          <PortfolioGrid images={product.images} />
        </div>
      </section>

      <section className="section section-sm">
        <div className="main-container back-link">
          <Link href="/products" className="button button-secondary">
            ← Späť na produkty
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
