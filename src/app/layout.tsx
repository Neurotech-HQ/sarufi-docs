import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

// One typeface, as on the marketing site.
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.sarufi.io'),
  title: {
    default: 'Sarufi Developer Docs',
    template: '%s | Sarufi Docs',
  },
  description:
    'Guides and REST API reference for building conversational agents with Sarufi across WhatsApp, SMS, USSD and the web.',
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    apple: '/sarufi.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
