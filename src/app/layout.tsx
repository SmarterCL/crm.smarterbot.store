import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/index.css';

export const metadata: Metadata = {
  title: 'WACRM - Automatización de Flujos & Soluciones Empresariales',
  description:
    'Despliega potentes flujos de n8n, integra Odoo, escala con hosting VPS y potencia tu marketing con Meta Ads. Más de 4,343 flujos listos para producción.',
  keywords: [
    'n8n',
    'automatización',
    'flujos',
    'Odoo',
    'Meta Ads',
    'hosting VPS',
    'automatización empresarial',
  ],
  authors: [{ name: 'WACRM', url: 'https://wacrm.cl' }],
  openGraph: {
    title: 'WACRM - Automatización de Flujos',
    description:
      'Despliega potentes flujos de n8n, integra Odoo y escala con hosting VPS.',
    url: 'https://wacrm.cl',
    siteName: 'WACRM',
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
