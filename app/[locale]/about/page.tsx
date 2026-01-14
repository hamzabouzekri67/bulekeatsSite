import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Target, Eye, Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return {
    title: 'About BULEK EATS - Licensed Food Delivery Service in Algeria',
    description:
      'Learn about BULEK EATS, a licensed food delivery company operating in Algeria. Contact: contact@bulekeats.com, Phone: 054009746',
  };
}

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-red text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            {dict.about.title}
          </h1>
          <p className="text-xl text-center text-red-100 animate-fade-in">
            {dict.about.intro}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <Card className="border-t-4 border-brand-red shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {dict.about.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-shadow border-t-4 border-brand-red">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Target className="h-8 w-8 text-brand-red" />
                </div>
                <CardTitle className="text-2xl">{dict.about.mission.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {dict.about.mission.description}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-brand-red">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Eye className="h-8 w-8 text-brand-red" />
                </div>
                <CardTitle className="text-2xl">{dict.about.vision.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {dict.about.vision.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-t-4 border-brand-red shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-red-100 rounded-lg">
                <Building2 className="h-8 w-8 text-brand-red" />
              </div>
              <CardTitle className="text-2xl">{dict.about.info.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{dict.about.info.name}</p>
                    <p className="text-gray-700 text-lg">BULEK EATS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{dict.about.info.country}</p>
                    <p className="text-gray-700">Algeria</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{dict.about.info.email}</p>
                    <a
                      href="mailto:contact@bulekeats.com"
                      className="text-brand-red hover:underline"
                    >
                      contact@bulekeats.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{dict.about.info.phone}</p>
                    <a
                      href="tel:054009746"
                      className="text-brand-red hover:underline"
                    >
                      054009746
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
