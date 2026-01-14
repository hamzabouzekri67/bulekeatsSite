import type { Metadata } from 'next';
import { Building2, Shield, Mail, Phone, MapPin, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'من نحن - BULEK EATS',
  description: 'معلومات عن BULEK EATS - نشاط تجاري معتمد لخدمات توصيل الطعام في الجزائر',
};

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">من نحن</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              تعرف على BULEK EATS - نشاط تجاري معتمد ومرخص لخدمات التوصيل
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">BULEK EATS</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-emerald-600">BULEK EATS</strong> هو نشاط تجاري معتمد ومرخص قانونياً لتقديم خدمات توصيل الطعام عبر الإنترنت في الجزائر. نحن نعمل وفقاً لأعلى المعايير المهنية والقانونية لضمان تقديم خدمة موثوقة وآمنة لعملائنا.
                </p>
                <p>
                  تأسست شركتنا بهدف توفير خدمة توصيل سريعة وفعالة للوجبات، مع الالتزام الكامل بجميع المتطلبات القانونية والتنظيمية في قطاع الخدمات الغذائية والتوصيل.
                </p>
                <p>
                  نحن نفخر بكوننا نشاطاً تجارياً معتمداً يلتزم بأعلى معايير الجودة والشفافية في تعاملاته مع العملاء والشركاء.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">المعلومات القانونية</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">الاسم القانوني للنشاط التجاري</p>
                    <p className="text-emerald-600 font-bold text-xl">BULEK EATS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">البلد</p>
                    <p className="text-gray-700">الجزائر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">البريد الإلكتروني الرسمي</p>
                    <a href="mailto:contact@bulekeats.com" className="text-emerald-600 hover:text-emerald-700">
                      contact@bulekeats.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">رقم الهاتف الرسمي</p>
                    <a href="tel:054009746" className="text-emerald-600 hover:text-emerald-700 text-xl font-medium">
                      054009746
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">قيمنا ومبادئنا</h2>
            <p className="text-xl text-gray-600">
              نلتزم بمجموعة من القيم الأساسية في تقديم خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">الموثوقية</h3>
              <p className="text-gray-600 leading-relaxed">
                نشاط تجاري مرخص ومعتمد رسمياً يلتزم بجميع القوانين والأنظمة المعمول بها
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">الجودة</h3>
              <p className="text-gray-600 leading-relaxed">
                نلتزم بتقديم أعلى مستويات الجودة في جميع جوانب خدماتنا
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">الشفافية</h3>
              <p className="text-gray-600 leading-relaxed">
                نعمل بشفافية كاملة مع عملائنا وشركائنا في جميع تعاملاتنا
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">نشاط تجاري معتمد ومرخص</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              BULEK EATS مرخص قانونياً لتقديم خدمات التوصيل في الجزائر. نحن نعمل وفقاً لجميع المتطلبات القانونية والتنظيمية المعمول بها.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-4">معلومات الاتصال الرسمية</p>
              <div className="space-y-3 text-emerald-100">
                <p>البريد الإلكتروني: contact@bulekeats.com</p>
                <p>الهاتف: 054009746</p>
                <p>البلد: الجزائر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">هل لديك استفسار؟</h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا للحصول على مزيد من المعلومات عن خدماتنا
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition shadow-lg"
          >
            اتصل بنا
          </Link>
        </div>
      </section>
    </div>
  );
}
