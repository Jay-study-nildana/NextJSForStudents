import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'S and K Design Studio',
//   description: 'The official Next.js Course Dashboard, built with App Router, as modified by Jay (Vijayasimha BR).',
//   metadataBase: new URL('https://vercel-dashboard-app.vercel.app/'),
// };

export const metadata: Metadata = {
  title: {
    template: '%s | S and K Design Studio',
    default: 'S and K Design Studio',
  },
  description: 'The official Next.js Course Dashboard, built with App Router, as modified by Jay (Vijayasimha BR).',
  metadataBase: new URL('https://vercel-dashboard-app.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
