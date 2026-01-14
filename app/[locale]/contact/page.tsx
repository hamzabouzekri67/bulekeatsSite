import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return {
    title: 'Contact BULEK EATS - Food Delivery Service in Algeria',
    description:
      'Contact BULEK EATS for food delivery services. Email: contact@bulekeats.com, Phone: 054009746, Algeria',
  };
}

export default async function ContactPage({
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
            {dict.contact.title}
          </h1>
          <p className="text-xl text-center text-red-100 animate-fade-in">
            {dict.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-t-4 border-brand-red shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.contact.info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">{dict.contact.info.description}</p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <div className="p-3 bg-brand-red rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{dict.about.info.email}</p>
                      <a
                        href="mailto:contact@bulekeats.com"
                        className="text-brand-red hover:underline text-lg"
                      >
                        contact@bulekeats.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <div className="p-3 bg-brand-red rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{dict.about.info.phone}</p>
                      <a
                        href="tel:054009746"
                        className="text-brand-red hover:underline text-lg"
                      >
                        054009746
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <div className="p-3 bg-brand-red rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{dict.about.info.country}</p>
                      <p className="text-gray-700 text-lg">Algeria</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">BULEK EATS</strong> - Licensed food
                    delivery service operating in Algeria
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-t-4 border-brand-red shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm dict={dict.contact.form} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
