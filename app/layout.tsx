import React from 'react';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'luxury FashionTV cosmetics website',
  description: 'website - luxury FashionTV cosmetics | Premium technology platform with ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased ">{children}</body>
    </html>
  );
}