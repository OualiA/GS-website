// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 ⚙️  GREEN SCIENCE — CONFIG                          ║
// ║                                                                      ║
// ║  Site settings, color gradients, and SVG icons.                      ║
// ║  Edit gradients below to change category colors across the site.     ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════
// 1. CATEGORY GRADIENTS
// ──────────────────────────────────────────────────
//    Each key must match a 'category' value used in
//    modules, sub-modules, or topics in data.js.
//    Format: 'category-name': 'linear-gradient(...)'
// ══════════════════════════════════════════════════

const catGradients = {
  // ── Soil Science ──
  soil:        'linear-gradient(135deg, #8B6914, #A67B2E)',
  physics:     'linear-gradient(135deg, #E67E22, #F39C12)',
  chemistry:   'linear-gradient(135deg, #8E44AD, #AF7AC5)',
  soilbiology: 'linear-gradient(135deg, #1ABC9C, #16A085)',
  fertility:   'linear-gradient(135deg, #6B8E23, #9ACD32)',
  water:       'linear-gradient(135deg, #2980B9, #3498DB)',

  // ── Botany ──
  plant:       'linear-gradient(135deg, #2E8B57, #3CB371)',
  biology:     'linear-gradient(135deg, #1ABC9C, #16A085)',

  // ── Climate ──
  climate:     'linear-gradient(135deg, #4682B4, #5DADE2)',
  bioclimate:  'linear-gradient(135deg, #3A7CA5, #81C3D7)',

  // ── Statistics ──
  statistics:  'linear-gradient(135deg, #6C5B7B, #C06C84)',

  // ── Fallback ──
  general:     'linear-gradient(135deg, #27AE60, #2ECC71)',
};


// ══════════════════════════════════════════════════
// 2. SVG ICONS
// ──────────────────────────────────────────────────
//    Shared icon SVGs used across all pages.
//    Referenced by variable name in HTML templates.
// ══════════════════════════════════════════════════

const dlSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

const ytSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

const arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

const backSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';

const searchSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';


// ══════════════════════════════════════════════════
// 3. ANNOUNCEMENT BANNER
// ──────────────────────────────────────────────────
//    Set text to '' to hide the banner.
//    Change 'id' when you update the message
//    (so users who dismissed the old one see the new one).
// ══════════════════════════════════════════════════

const announcement = {
  id:   'welcome-2025',        // change this to show a new announcement
  icon: '🎓',
  text: {
    en: 'Welcome to Green Science! New modules and quizzes added regularly.',
    fr: 'Bienvenue sur Green Science ! De nouveaux modules et quiz ajoutés régulièrement.',
    ar: 'مرحباً بكم في Green Science! يتم إضافة وحدات واختبارات جديدة بانتظام.',
  },
};


// ══════════════════════════════════════════════════
// 4. CONTACT LINKS
// ──────────────────────────────────────────────────
//    Shown in the footer. Add/remove as needed.
//    icon: use inline SVG string
// ══════════════════════════════════════════════════

const contactLinks = [
  {
    label: { en: 'Email', fr: 'Email', ar: 'البريد' },
    url:   'mailto:greenscience.contact@gmail.com',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>',
  },
  {
    label: { en: 'Telegram', fr: 'Telegram', ar: 'تيليغرام' },
    url:   'https://t.me/GreenScienceA',
    icon:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  },
  {
    label: { en: 'WhatsApp', fr: 'WhatsApp', ar: 'واتساب' },
    url:   'https://wa.me/213XXXXXXXXX',
    icon:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  },
  {
    label: { en: 'YouTube', fr: 'YouTube', ar: 'يوتيوب' },
    url:   'https://www.youtube.com/@greenscience-9226',
    icon:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  {
    label: { en: 'Facebook', fr: 'Facebook', ar: 'فيسبوك' },
    url:   'https://www.facebook.com/Green.Science.A',
    icon:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  },
];


// ══════════════════════════════════════════════════
// SERVICES
// ══════════════════════════════════════════════════

const services = [
  {
    id: 'presentations',
    sampleUrl: '',      // e.g. 'https://youtube.com/watch?v=xxxxx'
    tutorialUrl: '',    // e.g. 'https://youtube.com/watch?v=xxxxx'
    icon: '📊',
    gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    title:  { en: 'PowerPoint Presentations', fr: 'Présentations PowerPoint', ar: 'عروض تقديمية باوربوينت' },
    desc:   { en: 'Professional academic presentations with clean design, data visualization, and scientific formatting tailored to your subject.', fr: 'Présentations académiques professionnelles avec un design soigné, visualisation de données et mise en forme scientifique adaptée à votre sujet.', ar: 'عروض أكاديمية احترافية بتصميم أنيق وتصور بيانات وتنسيق علمي مخصص لموضوعك.' },
    features: {
      en: ['Custom slide design', 'Charts & infographics', 'Bilingual (FR/AR)', 'Source formatting'],
      fr: ['Design personnalisé', 'Graphiques & infographies', 'Bilingue (FR/AR)', 'Mise en forme des sources'],
      ar: ['تصميم شرائح مخصص', 'رسوم بيانية وإنفوغرافيك', 'ثنائي اللغة (فر/عر)', 'تنسيق المراجع'],
    },
  },
  {
    id: 'data-analysis',
    sampleUrl: '',
    tutorialUrl: '',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    title:  { en: 'Data Analysis & Statistics', fr: 'Analyse de données & Statistiques', ar: 'تحليل البيانات والإحصاء' },
    desc:   { en: 'Statistical analysis using SPSS, R, Excel, and Python. Hypothesis testing, regression, ANOVA, and result interpretation for your research.', fr: 'Analyse statistique avec SPSS, R, Excel et Python. Tests d\'hypothèses, régression, ANOVA et interprétation des résultats pour votre recherche.', ar: 'تحليل إحصائي باستخدام SPSS و R و Excel و Python. اختبار الفرضيات، الانحدار، تحليل التباين، وتفسير النتائج لبحثك.' },
    features: {
      en: ['SPSS / R / Python', 'Hypothesis testing', 'Data visualization', 'Results interpretation'],
      fr: ['SPSS / R / Python', 'Tests d\'hypothèses', 'Visualisation de données', 'Interprétation des résultats'],
      ar: ['SPSS / R / Python', 'اختبار الفرضيات', 'تصور البيانات', 'تفسير النتائج'],
    },
  },
  {
    id: 'tutoring',
    sampleUrl: '',
    tutorialUrl: '',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    title:  { en: 'Private Tutoring & Coaching', fr: 'Cours particuliers & Coaching', ar: 'دروس خصوصية وتدريب' },
    desc:   { en: 'One-on-one or small group sessions in soil science, plant biology, statistics, and more. Flexible scheduling with personalized learning plans.', fr: 'Sessions individuelles ou en petit groupe en sciences du sol, biologie végétale, statistiques et plus. Horaires flexibles avec plans d\'apprentissage personnalisés.', ar: 'جلسات فردية أو مجموعات صغيرة في علوم التربة والنبات والإحصاء والمزيد. جدول مرن مع خطط تعلم مخصصة.' },
    features: {
      en: ['1-on-1 sessions', 'Exam preparation', 'Flexible schedule', 'All university levels'],
      fr: ['Sessions individuelles', 'Préparation aux examens', 'Horaires flexibles', 'Tous niveaux universitaires'],
      ar: ['جلسات فردية', 'تحضير للامتحانات', 'جدول مرن', 'جميع المستويات الجامعية'],
    },
  },
  {
    id: 'research',
    sampleUrl: '',
    tutorialUrl: '',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    title:  { en: 'Academic Research Assistance', fr: 'Assistance à la recherche', ar: 'مساعدة في البحث الأكاديمي' },
    desc:   { en: 'Support with literature review, methodology design, data collection planning, and scientific writing for theses, dissertations, and articles.', fr: 'Aide à la revue de littérature, conception méthodologique, planification de collecte de données et rédaction scientifique pour mémoires et articles.', ar: 'دعم في مراجعة الأدبيات، تصميم المنهجية، تخطيط جمع البيانات، والكتابة العلمية للرسائل والمقالات.' },
    features: {
      en: ['Literature review', 'Methodology guidance', 'Scientific writing', 'Thesis/memoir support'],
      fr: ['Revue de littérature', 'Guide méthodologique', 'Rédaction scientifique', 'Soutien mémoire/thèse'],
      ar: ['مراجعة الأدبيات', 'إرشاد منهجي', 'كتابة علمية', 'دعم الرسائل والأطروحات'],
    },
  },
  {
    id: 'posters',
    sampleUrl: '',
    tutorialUrl: '',
    icon: '🖼️',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    title:  { en: 'Scientific Poster Design', fr: 'Conception d\'affiches scientifiques', ar: 'تصميم الملصقات العلمية' },
    desc:   { en: 'Eye-catching research posters for conferences and seminars. Professional layout with your data, figures, and branding.', fr: 'Affiches de recherche attrayantes pour conférences et séminaires. Mise en page professionnelle avec vos données et figures.', ar: 'ملصقات بحثية جذابة للمؤتمرات والندوات. تخطيط احترافي مع بياناتك ورسومك.' },
    features: {
      en: ['Conference-ready', 'Custom dimensions', 'Print & digital', 'Data figures included'],
      fr: ['Prêt pour conférence', 'Dimensions personnalisées', 'Impression & numérique', 'Figures incluses'],
      ar: ['جاهز للمؤتمرات', 'أبعاد مخصصة', 'طباعة ورقمي', 'تتضمن الرسوم البيانية'],
    },
  },
  {
    id: 'videos',
    sampleUrl: '',
    tutorialUrl: '',
    icon: '🎬',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    title:  { en: 'Custom Educational Videos', fr: 'Vidéos éducatives personnalisées', ar: 'فيديوهات تعليمية مخصصة' },
    desc:   { en: 'Animated explainer videos, lecture recordings, and educational content creation for your courses, channels, or institutions.', fr: 'Vidéos explicatives animées, enregistrements de cours et création de contenus éducatifs pour vos cours, chaînes ou institutions.', ar: 'فيديوهات شرح متحركة، تسجيلات محاضرات، وإنتاج محتوى تعليمي لمقرراتك أو قنواتك أو مؤسستك.' },
    features: {
      en: ['Animated explainers', 'Lecture recording', 'Voiceover & editing', 'Custom branding'],
      fr: ['Animations explicatives', 'Enregistrement de cours', 'Voix off & montage', 'Marque personnalisée'],
      ar: ['رسوم متحركة توضيحية', 'تسجيل المحاضرات', 'تعليق صوتي ومونتاج', 'علامة تجارية مخصصة'],
    },
  },
];

const serviceEmail = 'greenscience.contact@gmail.com';
