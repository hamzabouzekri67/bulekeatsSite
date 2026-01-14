import Link from 'next/link';
import { Mail, Phone, Utensils } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

interface FooterProps {
  locale: Locale;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  const navigation = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
    { name: dict.nav.privacy, href: `/${locale}/privacy` },
    { name: dict.nav.terms, href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-brand-red text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Utensils className="h-6 w-6" />
              <span className="font-bold text-xl">BULEK EATS</span>
            </div>
            <p className="text-red-100 text-sm">
              Fast & Reliable Food Delivery
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-red-100 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@bulekeats.com"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  contact@bulekeats.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:054009746"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  054009746
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600 mt-8 pt-8 text-center">
          <p className="text-red-100 text-sm">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
