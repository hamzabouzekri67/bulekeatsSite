import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent } from '@/components/ui/card';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return {
    title: 'Terms of Service - BULEK EATS',
    description:
      'Terms of Service for BULEK EATS food delivery service. Read our terms and conditions.',
  };
}

export default async function TermsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-red text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            {dict.terms.title}
          </h1>
          <p className="text-center text-red-100">{dict.terms.lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-t-4 border-brand-red shadow-lg mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {dict.terms.intro}
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {Object.values(dict.terms.sections).map((section, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow border-l-4 border-brand-red"
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-red-50 rounded-lg border-l-4 border-brand-red">
          <p className="text-gray-700">
            <strong className="text-gray-900">BULEK EATS</strong> - Licensed food
            delivery service operating in Algeria. For questions about these Terms of
            Service, contact us at{' '}
            <a
              href="mailto:contact@bulekeats.com"
              className="text-brand-red hover:underline font-semibold"
            >
              contact@bulekeats.com
            </a>{' '}
            or call{' '}
            <a
              href="tel:054009746"
              className="text-brand-red hover:underline font-semibold"
            >
              054009746
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
