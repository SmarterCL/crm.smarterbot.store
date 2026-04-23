import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/index.css';

export const metadata: Metadata = {
  title: 'SmarterBOT.store - Automation Workflows & Business Solutions Platform',
  description:
    'Deploy powerful n8n workflows, integrate Odoo & scale with VPS hosting, and supercharge your marketing with Meta Ads. 4,343+ production-ready workflows.',
  keywords: [
    'n8n',
    'automation',
    'workflows',
    'Odoo',
    'Meta Ads',
    'VPS hosting',
    'business automation',
  ],
  authors: [{ name: 'SmarterBOT', url: 'https://smarterbot.store' }],
  openGraph: {
    title: 'SmarterBOT.store - Automation Workflows Platform',
    description:
      'Deploy powerful n8n workflows, integrate Odoo & scale with VPS hosting.',
    url: 'https://smarterbot.store',
    siteName: 'SmarterBOT.store',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
