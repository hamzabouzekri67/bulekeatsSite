import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Zap, Shield, Award, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-brand-red to-red-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {dict.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              {dict.home.hero.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {dict.home.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.home.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-red">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dict.home.services.fast.title}
                </h3>
                <p className="text-gray-600">
                  {dict.home.services.fast.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-red">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dict.home.services.reliable.title}
                </h3>
                <p className="text-gray-600">
                  {dict.home.services.reliable.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-red">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dict.home.services.quality.title}
                </h3>
                <p className="text-gray-600">
                  {dict.home.services.quality.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-red">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dict.home.services.support.title}
                </h3>
                <p className="text-gray-600">
                  {dict.home.services.support.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.home.why.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {dict.home.why.licensed.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {dict.home.why.licensed.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {dict.home.why.professional.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {dict.home.why.professional.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {dict.home.why.secure.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {dict.home.why.secure.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {dict.home.why.tracking.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {dict.home.why.tracking.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.home.contact.title}
            </h2>
            <p className="text-xl text-red-100 mb-8">
              {dict.home.contact.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <p className="font-semibold mb-2">{dict.footer.email}</p>
              <a
                href="mailto:contact@bulekeats.com"
                className="text-red-100 hover:text-white transition-colors"
              >
                contact@bulekeats.com
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <p className="font-semibold mb-2">{dict.footer.phone}</p>
              <a
                href="tel:054009746"
                className="text-red-100 hover:text-white transition-colors"
              >
                054009746
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <p className="font-semibold mb-2">Country</p>
              <p className="text-red-100">Algeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
