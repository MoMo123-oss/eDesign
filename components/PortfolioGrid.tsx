'use client';

import { useEffect, useMemo, useState, type TouchEvent } from 'react';

type PortfolioGridProps = {
  images: string[];
};

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [page, setPage] = useState(0);
  const [lastManualSwipeAt, setLastManualSwipeAt] = useState(Date.now());
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setVisibleCount(1);
        return;
      }

      if (width <= 1024) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const pages = useMemo(() => {
    const groups: string[][] = [];
    for (let i = 0; i < images.length; i += visibleCount) {
      groups.push(images.slice(i, i + visibleCount));
    }
    return groups;
  }, [images, visibleCount]);

  useEffect(() => {
    setPage(0);
  }, [visibleCount]);

  const goToNextPage = (isManual: boolean) => {
    if (pages.length === 0) {
      return;
    }

    setPage((current) => (current + 1) % pages.length);
    if (isManual) {
      setLastManualSwipeAt(Date.now());
    }
  };

  const goToPreviousPage = () => {
    if (pages.length === 0) {
      return;
    }

    setPage((current) => (current - 1 + pages.length) % pages.length);
    setLastManualSwipeAt(Date.now());
  };

  useEffect(() => {
    if (pages.length <= 1) {
      return;
    }

    const timeout = setTimeout(() => {
      goToNextPage(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [lastManualSwipeAt, page, pages.length]);

  useEffect(() => {
    if (!zoomedImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomedImage]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || pages.length <= 1) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX;
    if (typeof endX !== 'number') {
      setTouchStartX(null);
      return;
    }

    const delta = endX - touchStartX;
    const swipeThreshold = 40;

    if (delta > swipeThreshold) {
      goToPreviousPage();
    } else if (delta < -swipeThreshold) {
      goToNextPage(true);
    }

    setTouchStartX(null);
  };

  return (
    <>
      <div className="portfolio-slider">
        {pages.length > 1 && (
          <button
            type="button"
            className="portfolio-arrow portfolio-arrow-left"
            onClick={goToPreviousPage}
            aria-label="Predchádzajúce fotografie"
          >
            &#8249;
          </button>
        )}

        <div className="portfolio-grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {pages[page]?.map((src) => (
            <button
              key={src}
              type="button"
              className="portfolio-card"
              onClick={() => setZoomedImage(src)}
              aria-label="Zobraziť fotografiu vo väčšom náhľade"
            >
              <img src={src} alt="Product portfolio" />
            </button>
          ))}
        </div>

        {pages.length > 1 && (
          <button
            type="button"
            className="portfolio-arrow portfolio-arrow-right"
            onClick={() => goToNextPage(true)}
            aria-label="Ďalšie fotografie"
          >
            &#8250;
          </button>
        )}
      </div>

      {zoomedImage && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Veľký náhľad fotografie"
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            className="portfolio-lightbox-close"
            onClick={() => setZoomedImage(null)}
            aria-label="Zavrieť náhľad"
          >
            x
          </button>
          <img
            src={zoomedImage}
            alt="Large product view"
            className="portfolio-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
