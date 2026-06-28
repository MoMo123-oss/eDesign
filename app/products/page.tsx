'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { products, resolveProductImageSrc } from '../../lib/products';

export default function ProductsPage() {
  const [activeSlides, setActiveSlides] = useState<number[]>(() => products.map(() => 0));
  const [autoSlideResetKey, setAutoSlideResetKey] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlides((current) =>
        current.map((value, index) => {
          const count = products[index]?.images.length ?? 1;
          return (value + 1) % count;
        })
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [autoSlideResetKey]);

  const moveSlide = (productIndex: number, direction: 1 | -1) => {
    setActiveSlides((current) =>
      current.map((value, index) => {
        if (index !== productIndex) return value;
        const count = products[index]?.images.length ?? 1;
        return (value + direction + count) % count;
      })
    );

    // Restart auto-slide countdown after any manual navigation.
    setAutoSlideResetKey((value) => value + 1);
  };

  return (
    <main>
      <SiteHeader />

      <section className="section hero section-sm">
        <div className="main-container">
          <div className="section-headline">
            <span className="eyebrow">produkty</span>
            <h1>Objavte každý detail</h1>
          </div>
        <p className="subtitle">Svadobné tlačoviny dotvárajú prvý dojem z vášho veľkého dňa a prepájajú všetky jeho časti do jedného krásneho celku. Od oznámení až po menovky, každý detail nesie váš príbeh a štýl.</p>
        </div>
      </section>

      <section className="section products-list">
        <div className="main-container">
          {products.map((product, i) => (
            <article
              key={product.slug}
              className={`product-hero ${i % 2 === 1 ? 'reverse fade-left' : 'fade-right'} bg-${(i % 5) + 1}`}>
              <div className="product-hero-inner">
                <div className="product-text center-text">
                  
                  <h2>{product.title}</h2>
                  
                  <p className="product-description">{product.description}</p>
                  <div className="product-actions">
                    <Link href={`/products/${product.slug}`} className="button button-primary">Zobraziť detaily</Link>
                  </div>
                </div>

                <div className="product-photo-panel">
                  <div className="photo-frame">
                    {product.images[activeSlides[i]] ? (
                      <img
                        className="frame-image"
                        src={resolveProductImageSrc(product.images[activeSlides[i]])}
                        alt={product.title}
                      />
                    ) : null}
                    
                    <button
                      type="button"
                      className="frame-arrow left"
                      onClick={() => moveSlide(i, -1)}
                      aria-label="Predchádzajúca snímka"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="frame-arrow right"
                      onClick={() => moveSlide(i, 1)}
                      aria-label="Nasledujúca snímka"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
