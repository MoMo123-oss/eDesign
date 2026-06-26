'use client';

import Link from 'next/link';
import { useState } from 'react';

const leftLinks = [
  { label: 'Domov', href: '/' },
  { label: 'Produkty', href: '/products' },
  { label: 'Cenník', href: '/pricing' },
];

const rightLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/contact' },
  { label: 'O mne', href: '/about' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="main-container header-inner">
        <div className="nav-left nav-segment desktop-nav">
          {leftLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nav-item" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-center">
          <Link href="/" className="brand-logo-link" onClick={() => setOpen(false)}>
            <img className="brand-logo" src="/logo.svg" alt="eDesign logo" />
          </Link>
        </div>

        <div className="nav-right nav-segment desktop-nav">
          {rightLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nav-item" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'nav-menu open' : 'nav-menu'}>
          <div className="nav-mobile-group">
            {leftLinks.concat(rightLinks).map((item) => (
              <Link key={item.href} href={item.href} className="nav-item" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
