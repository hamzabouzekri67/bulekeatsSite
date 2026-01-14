import type { Metadata } from 'next';
import { FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'الشروط والأحكام - BULEK EATS',
  description: 'شروط وأحكام استخدام خدمات BULEK EATS - نشاط تجاري معتمد',
};

export default function TermsOfService() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-20 h-20 mx-auto mb-6 text-emerald-100" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">الشروط والأحكام</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              شروط وأحكام استخدام خدمات BULEK EATS
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
              مرحباً بك في موقع BULEK EATS. من خلال الوصول إلى هذا الموقع واستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. BULEK EATS هو نشاط تجاري مرخص ومعتمد لتقديم خدمات توصيل الطعام في الجزائر.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. تعريفات</h2>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li><strong>"النشاط التجاري"</strong> أو <strong>"نحن"</strong> أو <strong>"خدماتنا"</strong> تشير إلى BULEK EATS</li>
              <li><strong>"العميل"</strong> أو <strong>"أنت"</strong> تشير إلى الشخص أو الكيان الذي يستخدم خدماتنا</li>
              <li><strong>"الموقع"</strong> يشير إلى موقع الويب bulekeats.com</li>
              <li><strong>"الخدمات"</strong> تشير إلى خدمات توصيل الطعام التي نقدمها</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. قبول الشروط</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              باستخدامك لموقعنا وخدماتنا، فإنك تقر بأنك قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. الأهلية القانونية</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              للاستفادة من خدماتنا، يجب أن تكون بالغاً راشداً وقادراً قانونياً على الدخول في عقود ملزمة. إذا كنت تستخدم الخدمات نيابة عن كيان، فإنك تقر بأن لديك الصلاحية للالتزام بهذه الشروط نيابة عن ذلك الكيان.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. الخدمات المقدمة</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BULEK EATS يقدم خدمات توصيل الطعام في الجزائر. خدماتنا تشمل:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>توصيل الطلبات من المطاعم والمحلات المشاركة</li>
              <li>معالجة الطلبات عبر الإنترنت</li>
              <li>خدمة العملاء والدعم</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. الطلبات والدفع</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              عند تقديم طلب من خلال خدماتنا:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>يجب تقديم معلومات دقيقة وكاملة</li>
              <li>الأسعار المعروضة هي الأسعار السارية وقت تقديم الطلب</li>
              <li>نحتفظ بالحق في رفض أو إلغاء الطلبات في ظروف معينة</li>
              <li>الدفع يجب أن يتم وفقاً لطرق الدفع المعتمدة</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. التوصيل</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              فيما يتعلق بخدمات التوصيل:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>أوقات التوصيل المذكورة هي تقديرات وليست ضمانات</li>
              <li>يجب توفير عنوان توصيل دقيق وكامل</li>
              <li>العميل مسؤول عن التواجد لاستلام الطلب</li>
              <li>قد تخضع بعض المناطق لرسوم توصيل إضافية</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. الإلغاء والاسترجاع</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              سياسات الإلغاء والاسترجاع تخضع لظروف كل طلب. يرجى التواصل مع خدمة العملاء لمعرفة المزيد عن حقوقك في الإلغاء والاسترجاع. نحتفظ بالحق في رفض طلبات الاسترجاع في حالات معينة.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. مسؤوليات المستخدم</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              أنت توافق على:
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-8">
              <li>استخدام الخدمات بشكل قانوني ومناسب</li>
              <li>عدم إساءة استخدام أو محاولة اختراق أنظمتنا</li>
              <li>تقديم معلومات دقيقة وحديثة</li>
              <li>الحفاظ على سرية معلومات حسابك</li>
              <li>احترام حقوق الملكية الفكرية</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. حدود المسؤولية</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              في حدود ما يسمح به القانون، لن نكون مسؤولين عن أي خسائر أو أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا. مسؤوليتنا محدودة بقيمة الطلب المعني.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. حقوق الملكية الفكرية</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              جميع المحتويات والمواد على موقعنا، بما في ذلك الشعارات والنصوص والصور، هي ملك لـ BULEK EATS أو مرخصة لنا. لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق منا.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. الخصوصية</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              استخدامك لخدماتنا يخضع أيضاً لسياسة الخصوصية الخاصة بنا. يرجى مراجعة سياسة الخصوصية لفهم كيفية جمع واستخدام معلوماتك الشخصية.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. التعديلات على الشروط</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التعديلات على هذه الصفحة، واستمرارك في استخدام الخدمات بعد نشر التعديلات يعني قبولك للشروط المعدلة.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. القانون الساري</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين الجزائر. أي نزاعات تنشأ عن هذه الشروط تخضع للاختصاص الحصري للمحاكم الجزائرية.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">15. معلومات الاتصال</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              لأي أسئلة أو استفسارات حول هذه الشروط والأحكام، يرجى الاتصال بنا:
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Mail className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">البريد الإلكتروني الرسمي</p>
                  <a href="mailto:contact@bulekeats.com" className="text-emerald-600 hover:text-emerald-700">
                    contact@bulekeats.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">رقم الهاتف الرسمي</p>
                  <a href="tel:054009746" className="text-emerald-600 hover:text-emerald-700 text-xl">
                    054009746
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 mt-8 text-center">
            <p className="text-gray-700">
              <strong className="text-emerald-600">الاسم القانوني للنشاط التجاري:</strong> BULEK EATS
            </p>
            <p className="text-gray-700 mt-2">
              نشاط تجاري مرخص ومعتمد لتقديم خدمات التوصيل في الجزائر
            </p>
            <p className="text-gray-600 text-sm mt-4">
              آخر تحديث: يناير 2026
            </p>
          </div>

          <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
            <p className="text-lg font-semibold mb-2">
              باستخدامك لخدمات BULEK EATS، فإنك توافق على هذه الشروط والأحكام
            </p>
            <p className="text-emerald-100">
              نشكرك على اختيارك BULEK EATS لخدمات التوصيل
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
