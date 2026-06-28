import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'eDesign — Dizajn a tlač',
  description: 'eDesign — Dizajn a tlač.',

  openGraph: {
    title: 'eDesign — Dizajn a tlač',
    description: 'eDesign — Dizajn a tlač.',
    url: 'https://e-design.sk',
    siteName: 'eDesign',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'eDesign',
      },
    ],
    locale: 'sk_SK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'eDesign — Dizajn a tlač',
    description: 'eDesign — Dizajn a tlač.',
    images: ['/preview.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}