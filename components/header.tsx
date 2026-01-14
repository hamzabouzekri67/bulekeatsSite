'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Utensils } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { Locale } from '@/lib/i18n/config';

interface HeaderProps {
  locale: Locale;
  dict: any;
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
    { name: dict.nav.privacy, href: `/${locale}/privacy` },
    { name: dict.nav.terms, href: `/${locale}/terms` },
  ];

  return (
    <header className="bg-brand-red sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2 text-white font-bold text-xl hover:opacity-90 transition-opacity"
            >
              {/* <Utensils className="h-6 w-6" /> */}
              <span>BULEK EATS</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <div className="flex md:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-3 animate-fade-in-up">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
