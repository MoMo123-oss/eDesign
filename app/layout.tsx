import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'eDesign — Svadobná tlačovina pre pozvánky, menovky a kartičky',
  description: 'Minimalistické čierno-bielo-modré štúdio svadobnej tlačoviny zamerané na pozvánky, menovky, kartičky menu, čísla stolov, plány sedenia, omaľovánky a foto rekvizity.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
