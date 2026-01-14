import type { Metadata } from 'next';
import { Shield, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - BULEK EATS',
  description: 'سياسة الخصوصية لموقع BULEK EATS - نشاط تجاري معتمد لخدمات التوصيل',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-100" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">سياسة الخصوصية</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              نحن في BULEK EATS نلتزم بحماية خصوصيتك وبياناتك الشخصية
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">معلومات النشاط التجاري</h2>
            <p className="text-gray-700 mb-4">
              <strong className="text-emerald-600">الاسم القانوني:</strong> BULEK EATS
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-emerald-600">البلد:</strong> الجزائر (Algeria)
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-emerald-600">البريد الإلكتروني:</strong> contact@bulekeats.com
            </p>
            <p className="text-gray-700">
              <strong className="text-emerald-600">الهاتف:</strong> 054009746
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. مقدمة</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              تحدد هذه السياسة كيفية جمع واستخدام وحماية BULEK EATS للمعلومات الشخصية التي يتم جمعها من خلال موقعنا الإلكتروني وخدماتنا. نحن نشاط تجاري مرخص ومعتمد يلتزم بأعلى معايير حماية البيانات والخصوصية.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. المعلومات التي نجمعها</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              قد نجمع الأنواع التالية من المعلومات:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
              <li>معلومات التوصيل (العنوان، تفاصيل الموقع)</li>
              <li>معلومات الطلب والتفضيلات</li>
              <li>معلومات تقنية عن استخدام الموقع</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. كيفية استخدام المعلومات</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              نستخدم المعلومات المجمعة للأغراض التالية:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>معالجة وتنفيذ طلبات التوصيل</li>
              <li>التواصل مع العملاء بخصوص خدماتنا</li>
              <li>تحسين جودة خدماتنا</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              <li>حماية حقوقنا القانونية</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. حماية البيانات</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              نطبق إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام غير القانوني أو الفقدان العرضي. نحن ملتزمون بالحفاظ على سرية وأمان جميع البيانات الشخصية التي نحتفظ بها.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. مشاركة المعلومات</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>مع مقدمي الخدمات الضروريين لتنفيذ خدمات التوصيل</li>
              <li>عند الامتثال للمتطلبات القانونية</li>
              <li>لحماية حقوقنا وممتلكاتنا</li>
              <li>بموافقتك الصريحة</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. حقوقك</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              لديك الحق في:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح المعلومات غير الدقيقة</li>
              <li>طلب حذف معلوماتك</li>
              <li>الاعتراض على معالجة بياناتك</li>
              <li>سحب موافقتك في أي وقت</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. الاحتفاظ بالبيانات</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا والامتثال لالتزاماتنا القانونية. عندما لم تعد هناك حاجة للمعلومات، سنحذفها بشكل آمن.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              قد نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربتك على موقعنا. يمكنك التحكم في استخدام ملفات تعريف الارتباط من خلال إعدادات متصفحك.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. التغييرات على السياسة</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث".
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. الاتصال بنا</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية التعامل مع معلوماتك الشخصية، يرجى الاتصال بنا:
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Mail className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">البريد الإلكتروني</p>
                  <a href="mailto:contact@bulekeats.com" className="text-emerald-600 hover:text-emerald-700">
                    contact@bulekeats.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">الهاتف</p>
                  <a href="tel:054009746" className="text-emerald-600 hover:text-emerald-700 text-xl">
                    054009746
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 mt-8 text-center">
            <p className="text-gray-700">
              <strong className="text-emerald-600">النشاط التجاري:</strong> BULEK EATS
            </p>
            <p className="text-gray-700 mt-2">
              نشاط تجاري مرخص ومعتمد لتقديم خدمات التوصيل في الجزائر
            </p>
            <p className="text-gray-600 text-sm mt-4">
              آخر تحديث: يناير 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
