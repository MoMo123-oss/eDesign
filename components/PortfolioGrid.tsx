'use client';

import { useEffect, useMemo, useState } from 'react';

type PortfolioGridProps = {
  images: string[];
};

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [page, setPage] = useState(0);
  const pages = useMemo(() => {
    const groups = [];
    for (let i = 0; i < images.length; i += 3) {
      groups.push(images.slice(i, i + 3));
    }
    return groups;
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <div className="portfolio-grid">
      {pages[page]?.map((src) => (
        <div key={src} className="portfolio-card">
          <img src={src} alt="Product portfolio" />
        </div>
      ))}
    </div>
  );
}
