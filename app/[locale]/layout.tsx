import { Inter } from 'next/font/google';
import '../globals.css';
import type { Metadata } from 'next';
import { i18n, Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return {
    title: 'BULEK EATS - Fast & Reliable Food Delivery in Algeria',
    description:
      'BULEK EATS is a licensed food delivery service in Algeria. We deliver your favorite meals quickly and safely across Algeria. Contact: contact@bulekeats.com, Phone: 054009746',
    keywords:
      'food delivery, Algeria, BULEK EATS, restaurant delivery, fast delivery, online food ordering',
    authors: [{ name: 'BULEK EATS' }],

    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },

    openGraph: {
      title: 'BULEK EATS - Fast & Reliable Food Delivery',
      description:
        'Licensed food delivery service operating in Algeria. Fast, reliable, and quality food delivery.',
      url: 'https://bulekeats.com',
      siteName: 'BULEK EATS',
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BULEK EATS - Fast & Reliable Food Delivery',
      description: 'Licensed food delivery service in Algeria',
    },
    metadataBase: new URL('https://bulekeats.com'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header locale={params.locale} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer locale={params.locale} dict={dict} />
      </body>
    </html>
  );
}
