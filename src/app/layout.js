// app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saraswati Adkine - Full Stack Developer',
  description: 'Full Stack Developer Portfolio with hackathon journey',
  openGraph: {
    title: 'Saraswati Adkine - Full Stack Developer',
    description: 'Full Stack Developer Portfolio with hackathon journey',
    url: 'https://saraswati-adkine.vercel.app',
    siteName: 'Saraswati Adkine Portfolio',
    images: [
      {
        url: '/14.jpg',
        width: 1200,
        height: 630,
        alt: 'Saraswati Adkine Portfolio Preview',
      },
    ],
    type: 'website',
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
