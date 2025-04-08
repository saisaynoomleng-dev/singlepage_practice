import type { Metadata } from 'next';
import './globals.css';
import { SanityLive } from '@/sanity/lib/live';

export const metadata: Metadata = {
  title: 'Profit Fitness',
  description:
    'Profit Fitness is a fitness studio offering both training both virtually and in person',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SanityLive />
    </html>
  );
}
