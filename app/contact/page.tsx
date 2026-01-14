import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'اتصل بنا - BULEK EATS',
  description: 'تواصل مع BULEK EATS - خدمة توصيل الطعام المعتمدة في الجزائر',
};

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">اتصل بنا</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">معلومات الاتصال الرسمية</h2>
            <p className="text-xl text-gray-600">
              للتواصل مع <span className="text-emerald-600 font-bold">BULEK EATS</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-center mb-4">البريد الإلكتروني الرسمي للنشاط التجاري</p>
              <div className="text-center">
                <a
                  href="mailto:contact@bulekeats.com"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg break-all"
                >
                  contact@bulekeats.com
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الهاتف</h3>
              <p className="text-gray-600 text-center mb-4">رقم الهاتف الرسمي للعمل</p>
              <div className="text-center">
                <a
                  href="tel:054009746"
                  className="text-emerald-600 hover:text-emerald-700 font-bold text-2xl"
                >
                  054009746
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الموقع</h3>
              <p className="text-gray-600 text-center mb-4">البلد الذي نعمل فيه</p>
              <div className="text-center">
                <p className="text-emerald-600 font-bold text-2xl">الجزائر</p>
                <p className="text-gray-600 mt-2">Algeria</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">معلومات النشاط التجاري</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-8 h-8 text-emerald-200 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">الاسم القانوني</p>
                      <p className="text-emerald-100 text-xl font-bold">BULEK EATS</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-emerald-200 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">البلد</p>
                      <p className="text-emerald-100 text-xl">الجزائر - Algeria</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-emerald-200 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">البريد الإلكتروني الرسمي</p>
                      <a href="mailto:contact@bulekeats.com" className="text-emerald-100 hover:text-white transition break-all">
                        contact@bulekeats.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-emerald-200 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">رقم الهاتف الرسمي</p>
                      <a href="tel:054009746" className="text-emerald-100 hover:text-white transition text-xl">
                        054009746
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-emerald-100 text-lg">
                  نشاط تجاري معتمد ومرخص لتقديم خدمات التوصيل في الجزائر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ساعات العمل</h2>
            <p className="text-xl text-gray-600">نحن في خدمتك</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-12 h-12 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-900">خدمة العملاء</h3>
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                فريقنا متاح لخدمتك والإجابة على استفساراتك
              </p>
              <div className="bg-emerald-50 rounded-lg p-6 mt-6">
                <p className="text-gray-700 mb-4">للتواصل معنا:</p>
                <div className="space-y-2">
                  <p className="text-emerald-600 font-semibold">
                    البريد الإلكتروني: contact@bulekeats.com
                  </p>
                  <p className="text-emerald-600 font-semibold text-xl">
                    الهاتف: 054009746
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">معلومات مهمة</h2>
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <span className="text-emerald-600 font-bold">BULEK EATS</span> هو نشاط تجاري معتمد ومرخص رسمياً لتقديم خدمات توصيل الطعام في الجزائر.
            </p>
            <p className="text-gray-600 leading-relaxed">
              جميع المعلومات المذكورة في هذه الصفحة هي معلومات رسمية ومعتمدة للنشاط التجاري. نحن نلتزم بأعلى معايير الشفافية والموثوقية في تعاملاتنا.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
