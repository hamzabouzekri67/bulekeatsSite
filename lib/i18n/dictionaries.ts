export type Locale = 'en' | 'fr' | 'ar';

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    home: {
      hero: {
        title: 'Fast & Reliable Food Delivery',
        subtitle: 'BULEK EATS delivers your favorite meals quickly and safely across Algeria',
        cta: 'Order Now',
      },
      services: {
        title: 'Our Services',
        fast: {
          title: 'Fast Delivery',
          description: 'We deliver your orders within 30-45 minutes to ensure fresh and hot meals',
        },
        reliable: {
          title: 'Reliable Service',
          description: 'Licensed and professional delivery service you can trust',
        },
        quality: {
          title: 'Quality Guaranteed',
          description: 'We ensure your food arrives in perfect condition with quality packaging',
        },
        support: {
          title: '24/7 Support',
          description: 'Our customer service team is always available to assist you',
        },
      },
      why: {
        title: 'Why Choose BULEK EATS?',
        licensed: {
          title: 'Licensed Business',
          description: 'Officially registered food delivery company in Algeria',
        },
        professional: {
          title: 'Professional Team',
          description: 'Experienced delivery professionals trained for excellence',
        },
        secure: {
          title: 'Secure Payment',
          description: 'Multiple safe payment options for your convenience',
        },
        tracking: {
          title: 'Real-time Tracking',
          description: 'Track your order from restaurant to your doorstep',
        },
      },
      contact: {
        title: 'Get In Touch',
        description: 'Contact BULEK EATS for any inquiries or support',
      },
    },
    about: {
      title: 'About BULEK EATS',
      intro: 'Your Trusted Food Delivery Partner',
      description: 'BULEK EATS is a licensed and professional food delivery service operating in Algeria. We are committed to providing fast, reliable, and quality food delivery services to our valued customers.',
      mission: {
        title: 'Our Mission',
        description: 'To deliver exceptional food delivery experiences by connecting customers with their favorite restaurants through professional, timely, and reliable service.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To become the most trusted and preferred food delivery platform across Algeria, known for our commitment to quality and customer satisfaction.',
      },
      info: {
        title: 'Company Information',
        name: 'Legal Name',
        country: 'Country',
        email: 'Email',
        phone: 'Phone',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with BULEK EATS',
      info: {
        title: 'Contact Information',
        description: 'Reach out to us for any questions or support',
      },
      form: {
        title: 'Send us a Message',
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 2026',
      intro: 'At BULEK EATS, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.',
      sections: {
        collection: {
          title: '1. Information We Collect',
          content: 'We collect information necessary to provide our food delivery services, including: name, email address, phone number, delivery address, and payment information. We also collect order history and preferences to improve your experience.',
        },
        use: {
          title: '2. How We Use Your Information',
          content: 'Your information is used to: process and deliver your orders, communicate with you about your orders, improve our services, send promotional offers (with your consent), and comply with legal obligations.',
        },
        protection: {
          title: '3. Data Protection',
          content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All payment information is processed securely through encrypted channels.',
        },
        sharing: {
          title: '4. Information Sharing',
          content: 'We do not sell your personal information to third parties. We only share information with: delivery partners (to fulfill orders), restaurants (to process orders), and payment processors (to complete transactions).',
        },
        rights: {
          title: '5. Your Rights',
          content: 'You have the right to: access your personal information, request corrections or deletions, opt-out of marketing communications, and withdraw consent at any time. Contact us at contact@bulekeats.com to exercise these rights.',
        },
        cookies: {
          title: '6. Cookies',
          content: 'We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.',
        },
        contact: {
          title: '7. Contact Us',
          content: 'For any questions about this Privacy Policy, please contact us at contact@bulekeats.com or call 054009746.',
        },
      },
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 2026',
      intro: 'Welcome to BULEK EATS. By using our food delivery services, you agree to comply with and be bound by the following terms and conditions.',
      sections: {
        acceptance: {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using BULEK EATS services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
        },
        services: {
          title: '2. Service Description',
          content: 'BULEK EATS is a licensed food delivery platform operating in Algeria. We connect customers with restaurants and provide delivery services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
        },
        orders: {
          title: '3. Orders and Payment',
          content: 'All orders are subject to acceptance and availability. Prices are displayed in Algerian Dinar and include applicable taxes. Payment must be completed before order processing. We accept various payment methods as indicated on our platform.',
        },
        delivery: {
          title: '4. Delivery',
          content: 'We strive to deliver orders within the estimated time frame (30-45 minutes). Delivery times may vary due to traffic, weather, or other unforeseen circumstances. Delivery is available within our service areas only.',
        },
        cancellation: {
          title: '5. Cancellation and Refunds',
          content: 'Orders can be cancelled within 5 minutes of placement for a full refund. After this period, cancellations are subject to our discretion. Refunds for valid complaints will be processed within 7-10 business days.',
        },
        liability: {
          title: '6. Limitation of Liability',
          content: 'BULEK EATS acts as an intermediary between customers and restaurants. We are not liable for food quality issues arising from restaurant preparation. Our liability is limited to the order value.',
        },
        conduct: {
          title: '7. User Conduct',
          content: 'You agree to use our services lawfully and not to: provide false information, interfere with service operations, or engage in fraudulent activities. We reserve the right to suspend accounts violating these terms.',
        },
        intellectual: {
          title: '8. Intellectual Property',
          content: 'All content on the BULEK EATS platform, including logos, trademarks, and design elements, are owned by BULEK EATS and protected by intellectual property laws.',
        },
        changes: {
          title: '9. Changes to Terms',
          content: 'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.',
        },
        contact: {
          title: '10. Contact Information',
          content: 'For questions about these Terms of Service, contact us at contact@bulekeats.com or call 054009746. BULEK EATS is a registered business operating in Algeria.',
        },
      },
    },
    footer: {
      copyright: '© 2026 BULEK EATS - All rights reserved',
      email: 'Email',
      phone: 'Phone',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      contact: 'Contact',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
    home: {
      hero: {
        title: 'Livraison de Nourriture Rapide et Fiable',
        subtitle: 'BULEK EATS livre vos repas préférés rapidement et en toute sécurité à travers l\'Algérie',
        cta: 'Commander Maintenant',
      },
      services: {
        title: 'Nos Services',
        fast: {
          title: 'Livraison Rapide',
          description: 'Nous livrons vos commandes en 30-45 minutes pour garantir des repas frais et chauds',
        },
        reliable: {
          title: 'Service Fiable',
          description: 'Service de livraison licencié et professionnel en qui vous pouvez avoir confiance',
        },
        quality: {
          title: 'Qualité Garantie',
          description: 'Nous veillons à ce que votre nourriture arrive en parfait état avec un emballage de qualité',
        },
        support: {
          title: 'Support 24/7',
          description: 'Notre équipe de service client est toujours disponible pour vous aider',
        },
      },
      why: {
        title: 'Pourquoi Choisir BULEK EATS?',
        licensed: {
          title: 'Entreprise Licenciée',
          description: 'Société de livraison de nourriture officiellement enregistrée en Algérie',
        },
        professional: {
          title: 'Équipe Professionnelle',
          description: 'Professionnels de livraison expérimentés formés pour l\'excellence',
        },
        secure: {
          title: 'Paiement Sécurisé',
          description: 'Plusieurs options de paiement sûres pour votre commodité',
        },
        tracking: {
          title: 'Suivi en Temps Réel',
          description: 'Suivez votre commande du restaurant jusqu\'à votre porte',
        },
      },
      contact: {
        title: 'Contactez-Nous',
        description: 'Contactez BULEK EATS pour toute question ou assistance',
      },
    },
    about: {
      title: 'À Propos de BULEK EATS',
      intro: 'Votre Partenaire de Livraison de Confiance',
      description: 'BULEK EATS est un service de livraison de nourriture licencié et professionnel opérant en Algérie. Nous nous engageons à fournir des services de livraison rapides, fiables et de qualité à nos précieux clients.',
      mission: {
        title: 'Notre Mission',
        description: 'Offrir des expériences de livraison de nourriture exceptionnelles en connectant les clients avec leurs restaurants préférés grâce à un service professionnel, rapide et fiable.',
      },
      vision: {
        title: 'Notre Vision',
        description: 'Devenir la plateforme de livraison de nourriture la plus fiable et préférée en Algérie, connue pour notre engagement envers la qualité et la satisfaction client.',
      },
      info: {
        title: 'Informations sur l\'Entreprise',
        name: 'Nom Légal',
        country: 'Pays',
        email: 'Email',
        phone: 'Téléphone',
      },
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Entrez en contact avec BULEK EATS',
      info: {
        title: 'Informations de Contact',
        description: 'Contactez-nous pour toute question ou assistance',
      },
      form: {
        title: 'Envoyez-nous un Message',
        name: 'Votre Nom',
        email: 'Votre Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...',
      },
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière Mise à Jour: Janvier 2026',
      intro: 'Chez BULEK EATS, nous nous engageons à protéger votre vie privée et à assurer la sécurité de vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos données.',
      sections: {
        collection: {
          title: '1. Informations que Nous Collectons',
          content: 'Nous collectons les informations nécessaires pour fournir nos services de livraison de nourriture, y compris: nom, adresse email, numéro de téléphone, adresse de livraison et informations de paiement. Nous collectons également l\'historique des commandes et les préférences pour améliorer votre expérience.',
        },
        use: {
          title: '2. Comment Nous Utilisons Vos Informations',
          content: 'Vos informations sont utilisées pour: traiter et livrer vos commandes, communiquer avec vous concernant vos commandes, améliorer nos services, envoyer des offres promotionnelles (avec votre consentement) et respecter les obligations légales.',
        },
        protection: {
          title: '3. Protection des Données',
          content: 'Nous mettons en œuvre des mesures de sécurité standard de l\'industrie pour protéger vos informations personnelles contre l\'accès non autorisé, la divulgation, l\'altération ou la destruction. Toutes les informations de paiement sont traitées de manière sécurisée via des canaux cryptés.',
        },
        sharing: {
          title: '4. Partage d\'Informations',
          content: 'Nous ne vendons pas vos informations personnelles à des tiers. Nous ne partageons des informations qu\'avec: des partenaires de livraison (pour exécuter les commandes), des restaurants (pour traiter les commandes) et des processeurs de paiement (pour compléter les transactions).',
        },
        rights: {
          title: '5. Vos Droits',
          content: 'Vous avez le droit de: accéder à vos informations personnelles, demander des corrections ou suppressions, vous désinscrire des communications marketing et retirer votre consentement à tout moment. Contactez-nous à contact@bulekeats.com pour exercer ces droits.',
        },
        cookies: {
          title: '6. Cookies',
          content: 'Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site web. Vous pouvez contrôler les préférences des cookies via les paramètres de votre navigateur.',
        },
        contact: {
          title: '7. Nous Contacter',
          content: 'Pour toute question concernant cette Politique de Confidentialité, veuillez nous contacter à contact@bulekeats.com ou appeler le 054009746.',
        },
      },
    },
    terms: {
      title: 'Conditions d\'Utilisation',
      lastUpdated: 'Dernière Mise à Jour: Janvier 2026',
      intro: 'Bienvenue chez BULEK EATS. En utilisant nos services de livraison de nourriture, vous acceptez de vous conformer et d\'être lié par les termes et conditions suivants.',
      sections: {
        acceptance: {
          title: '1. Acceptation des Conditions',
          content: 'En accédant et en utilisant les services BULEK EATS, vous acceptez et acceptez d\'être lié par ces Conditions d\'Utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.',
        },
        services: {
          title: '2. Description des Services',
          content: 'BULEK EATS est une plateforme de livraison de nourriture licenciée opérant en Algérie. Nous connectons les clients avec les restaurants et fournissons des services de livraison. Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de nos services à tout moment.',
        },
        orders: {
          title: '3. Commandes et Paiement',
          content: 'Toutes les commandes sont soumises à acceptation et disponibilité. Les prix sont affichés en Dinar Algérien et incluent les taxes applicables. Le paiement doit être complété avant le traitement de la commande. Nous acceptons diverses méthodes de paiement comme indiqué sur notre plateforme.',
        },
        delivery: {
          title: '4. Livraison',
          content: 'Nous nous efforçons de livrer les commandes dans le délai estimé (30-45 minutes). Les délais de livraison peuvent varier en raison du trafic, de la météo ou d\'autres circonstances imprévues. La livraison est disponible uniquement dans nos zones de service.',
        },
        cancellation: {
          title: '5. Annulation et Remboursements',
          content: 'Les commandes peuvent être annulées dans les 5 minutes suivant le placement pour un remboursement complet. Après cette période, les annulations sont soumises à notre discrétion. Les remboursements pour réclamations valides seront traités dans un délai de 7 à 10 jours ouvrables.',
        },
        liability: {
          title: '6. Limitation de Responsabilité',
          content: 'BULEK EATS agit comme intermédiaire entre les clients et les restaurants. Nous ne sommes pas responsables des problèmes de qualité alimentaire résultant de la préparation du restaurant. Notre responsabilité est limitée à la valeur de la commande.',
        },
        conduct: {
          title: '7. Conduite des Utilisateurs',
          content: 'Vous acceptez d\'utiliser nos services légalement et de ne pas: fournir de fausses informations, interférer avec les opérations de service ou vous engager dans des activités frauduleuses. Nous nous réservons le droit de suspendre les comptes violant ces conditions.',
        },
        intellectual: {
          title: '8. Propriété Intellectuelle',
          content: 'Tout le contenu de la plateforme BULEK EATS, y compris les logos, marques et éléments de design, appartient à BULEK EATS et est protégé par les lois sur la propriété intellectuelle.',
        },
        changes: {
          title: '9. Modifications des Conditions',
          content: 'Nous nous réservons le droit de modifier ces Conditions d\'Utilisation à tout moment. Les modifications entreront en vigueur immédiatement après leur publication. L\'utilisation continue de nos services constitue l\'acceptation des conditions modifiées.',
        },
        contact: {
          title: '10. Informations de Contact',
          content: 'Pour des questions sur ces Conditions d\'Utilisation, contactez-nous à contact@bulekeats.com ou appelez le 054009746. BULEK EATS est une entreprise enregistrée opérant en Algérie.',
        },
      },
    },
    footer: {
      copyright: '© 2026 BULEK EATS - Tous droits réservés',
      email: 'Email',
      phone: 'Téléphone',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    home: {
      hero: {
        title: 'توصيل طعام سريع وموثوق',
        subtitle: 'BULEK EATS توصل وجباتك المفضلة بسرعة وأمان في جميع أنحاء الجزائر',
        cta: 'اطلب الآن',
      },
      services: {
        title: 'خدماتنا',
        fast: {
          title: 'توصيل سريع',
          description: 'نقوم بتوصيل طلباتك خلال 30-45 دقيقة لضمان وجبات طازجة وساخنة',
        },
        reliable: {
          title: 'خدمة موثوقة',
          description: 'خدمة توصيل مرخصة ومحترفة يمكنك الوثوق بها',
        },
        quality: {
          title: 'جودة مضمونة',
          description: 'نضمن وصول طعامك في حالة مثالية مع تغليف عالي الجودة',
        },
        support: {
          title: 'دعم على مدار الساعة',
          description: 'فريق خدمة العملاء لدينا متاح دائمًا لمساعدتك',
        },
      },
      why: {
        title: 'لماذا تختار BULEK EATS؟',
        licensed: {
          title: 'شركة مرخصة',
          description: 'شركة توصيل طعام مسجلة رسميًا في الجزائر',
        },
        professional: {
          title: 'فريق محترف',
          description: 'محترفو توصيل ذوو خبرة ومدربون على التميز',
        },
        secure: {
          title: 'دفع آمن',
          description: 'خيارات دفع آمنة متعددة لراحتك',
        },
        tracking: {
          title: 'تتبع فوري',
          description: 'تتبع طلبك من المطعم حتى باب منزلك',
        },
      },
      contact: {
        title: 'تواصل معنا',
        description: 'اتصل بـ BULEK EATS لأي استفسارات أو دعم',
      },
    },
    about: {
      title: 'حول BULEK EATS',
      intro: 'شريكك الموثوق في توصيل الطعام',
      description: 'BULEK EATS هي خدمة توصيل طعام مرخصة ومحترفة تعمل في الجزائر. نحن ملتزمون بتقديم خدمات توصيل طعام سريعة وموثوقة وعالية الجودة لعملائنا الكرام.',
      mission: {
        title: 'مهمتنا',
        description: 'تقديم تجارب توصيل طعام استثنائية من خلال ربط العملاء بمطاعمهم المفضلة عبر خدمة احترافية وسريعة وموثوقة.',
      },
      vision: {
        title: 'رؤيتنا',
        description: 'أن نصبح منصة توصيل الطعام الأكثر ثقة وتفضيلاً في جميع أنحاء الجزائر، معروفين بالتزامنا بالجودة ورضا العملاء.',
      },
      info: {
        title: 'معلومات الشركة',
        name: 'الاسم القانوني',
        country: 'البلد',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
      },
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع BULEK EATS',
      info: {
        title: 'معلومات الاتصال',
        description: 'تواصل معنا لأي أسئلة أو دعم',
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
      },
    },
    privacy: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يناير 2026',
      intro: 'في BULEK EATS، نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها.',
      sections: {
        collection: {
          title: '1. المعلومات التي نجمعها',
          content: 'نجمع المعلومات اللازمة لتقديم خدمات توصيل الطعام، بما في ذلك: الاسم وعنوان البريد الإلكتروني ورقم الهاتف وعنوان التوصيل ومعلومات الدفع. كما نجمع سجل الطلبات والتفضيلات لتحسين تجربتك.',
        },
        use: {
          title: '2. كيف نستخدم معلوماتك',
          content: 'تستخدم معلوماتك لـ: معالجة وتوصيل طلباتك، والتواصل معك بشأن طلباتك، وتحسين خدماتنا، وإرسال عروض ترويجية (بموافقتك)، والامتثال للالتزامات القانونية.',
        },
        protection: {
          title: '3. حماية البيانات',
          content: 'نطبق تدابير أمنية متوافقة مع معايير الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الإفصاح أو التعديل أو التدمير. تتم معالجة جميع معلومات الدفع بشكل آمن من خلال قنوات مشفرة.',
        },
        sharing: {
          title: '4. مشاركة المعلومات',
          content: 'لا نبيع معلوماتك الشخصية لأطراف ثالثة. نشارك المعلومات فقط مع: شركاء التوصيل (لتنفيذ الطلبات)، والمطاعم (لمعالجة الطلبات)، ومعالجي الدفع (لإتمام المعاملات).',
        },
        rights: {
          title: '5. حقوقك',
          content: 'لديك الحق في: الوصول إلى معلوماتك الشخصية، وطلب التصحيحات أو الحذف، والانسحاب من الاتصالات التسويقية، وسحب الموافقة في أي وقت. اتصل بنا على contact@bulekeats.com لممارسة هذه الحقوق.',
        },
        cookies: {
          title: '6. ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح.',
        },
        contact: {
          title: '7. اتصل بنا',
          content: 'لأي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على contact@bulekeats.com أو الاتصال على 054009746.',
        },
      },
    },
    terms: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: يناير 2026',
      intro: 'مرحبًا بك في BULEK EATS. باستخدام خدمات توصيل الطعام الخاصة بنا، فإنك توافق على الامتثال والالتزام بالشروط والأحكام التالية.',
      sections: {
        acceptance: {
          title: '1. قبول الشروط',
          content: 'من خلال الوصول إلى خدمات BULEK EATS واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.',
        },
        services: {
          title: '2. وصف الخدمة',
          content: 'BULEK EATS هي منصة توصيل طعام مرخصة تعمل في الجزائر. نربط العملاء بالمطاعم ونقدم خدمات التوصيل. نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي جانب من جوانب خدماتنا في أي وقت.',
        },
        orders: {
          title: '3. الطلبات والدفع',
          content: 'جميع الطلبات تخضع للقبول والتوفر. يتم عرض الأسعار بالدينار الجزائري وتشمل الضرائب المطبقة. يجب إكمال الدفع قبل معالجة الطلب. نقبل طرق دفع مختلفة كما هو موضح على منصتنا.',
        },
        delivery: {
          title: '4. التوصيل',
          content: 'نسعى جاهدين لتوصيل الطلبات خلال الإطار الزمني المقدر (30-45 دقيقة). قد تختلف أوقات التوصيل بسبب حركة المرور أو الطقس أو ظروف أخرى غير متوقعة. التوصيل متاح فقط ضمن مناطق خدمتنا.',
        },
        cancellation: {
          title: '5. الإلغاء والمبالغ المستردة',
          content: 'يمكن إلغاء الطلبات خلال 5 دقائق من الطلب لاسترداد كامل المبلغ. بعد هذه الفترة، تخضع الإلغاءات لتقديرنا. سيتم معالجة المبالغ المستردة للشكاوى الصحيحة خلال 7-10 أيام عمل.',
        },
        liability: {
          title: '6. تحديد المسؤولية',
          content: 'تعمل BULEK EATS كوسيط بين العملاء والمطاعم. نحن غير مسؤولين عن مشاكل جودة الطعام الناشئة عن إعداد المطعم. مسؤوليتنا محدودة بقيمة الطلب.',
        },
        conduct: {
          title: '7. سلوك المستخدم',
          content: 'توافق على استخدام خدماتنا بشكل قانوني وعدم: تقديم معلومات كاذبة، أو التدخل في عمليات الخدمة، أو الانخراط في أنشطة احتيالية. نحتفظ بالحق في تعليق الحسابات التي تنتهك هذه الشروط.',
        },
        intellectual: {
          title: '8. الملكية الفكرية',
          content: 'جميع المحتويات على منصة BULEK EATS، بما في ذلك الشعارات والعلامات التجارية وعناصر التصميم، مملوكة لـ BULEK EATS ومحمية بقوانين الملكية الفكرية.',
        },
        changes: {
          title: '9. تغييرات الشروط',
          content: 'نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت. ستكون التغييرات سارية فور نشرها. استمرار استخدام خدماتنا يشكل قبولاً للشروط المعدلة.',
        },
        contact: {
          title: '10. معلومات الاتصال',
          content: 'للأسئلة حول شروط الخدمة هذه، اتصل بنا على contact@bulekeats.com أو اتصل على 054009746. BULEK EATS هي شركة مسجلة تعمل في الجزائر.',
        },
      },
    },
    footer: {
      copyright: '© 2026 BULEK EATS - جميع الحقوق محفوظة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
    },
  },
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
