'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale, localeNames } from '@/lib/i18n/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:text-white hover:bg-red-700 transition-colors"
        >
          <Globe className="h-4 w-4 mr-2" />
          {localeNames[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(localeNames).map(([locale, name]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale as Locale)}
            className={currentLocale === locale ? 'bg-red-50' : ''}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
