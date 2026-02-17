// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 📰  GREEN SCIENCE — NEWS & EVENTS                   ║
// ║                                                                      ║
// ║  Add your latest news, events, and updates here.                     ║
// ║  Newest items first. The site shows the latest 6 by default.         ║
// ║                                                                      ║
// ║  TYPES:                                                              ║
// ║    'video'    → 🎬 New video on your channel                         ║
// ║    'app'      → 📱 New app release or update                         ║
// ║    'seminar'  → 🎓 Seminar, conference, workshop                     ║
// ║    'result'   → 📊 Exam results, grades                              ║
// ║    'event'    → 📅 General event                                     ║
// ║    'update'   → 🔔 Site or content update                            ║
// ║    'news'     → 📰 General news                                      ║
// ║                                                                      ║
// ║  TEMPLATE:                                                           ║
// ║  {                                                                   ║
// ║    type:  'video',                                                   ║
// ║    date:  '2025-06-15',              // YYYY-MM-DD format            ║
// ║    title: { en: '', fr: '', ar: '' },                                ║
// ║    desc:  { en: '', fr: '', ar: '' },                                ║
// ║    link:  'https://...',             // optional: external link      ║
// ║    pin:   false,                     // optional: pin to top         ║
// ║    eventDate: '2025-07-01',          // optional: event start date   ║
// ║    deadline:  '2025-06-25',          // optional: registration/end   ║
// ║  }                                                                   ║
// ╚══════════════════════════════════════════════════════════════════════╝

const newsItems = [

  // ── Pinned example ──
  {
    type:  'seminar',
    date:  '2025-07-10',
    pin:   true,
    eventDate: '2025-08-01',           // ← when the event takes place
    deadline:  '2025-07-25',           // ← registration deadline
    title: {
      en: 'Soil Science Summer Seminar 2025',
      fr: 'Séminaire d\'été en Science du Sol 2025',
      ar: 'الملتقى الصيفي لعلوم التربة 2025',
    },
    desc: {
      en: 'Join us for a 3-day intensive workshop on modern soil analysis techniques at the University of Biskra.',
      fr: 'Rejoignez-nous pour un atelier intensif de 3 jours sur les techniques modernes d\'analyse des sols à l\'Université de Biskra.',
      ar: 'انضموا إلينا في ورشة عمل مكثفة لمدة 3 أيام حول تقنيات تحليل التربة الحديثة في جامعة بسكرة.',
    },
    link: '',
  },

  // ── Recent items ──
  {
    type:  'video',
    date:  '2025-06-01',
    title: {
      en: 'New Video: Soil Texture Explained',
      fr: 'Nouvelle vidéo : La texture du sol expliquée',
      ar: 'فيديو جديد: شرح قوام التربة',
    },
    desc: {
      en: 'A complete visual guide to understanding soil texture classification and the USDA textural triangle.',
      fr: 'Un guide visuel complet pour comprendre la classification texturale du sol et le triangle textural USDA.',
      ar: 'دليل مرئي شامل لفهم تصنيف قوام التربة ومثلث USDA القوامي.',
    },
    link: 'https://www.youtube.com/@greenscience-9226',
  },

  {
    type:  'app',
    date:  '2025-05-20',
    title: {
      en: 'Green Science Quiz v2.0 Released',
      fr: 'Green Science Quiz v2.0 disponible',
      ar: 'إصدار Green Science Quiz v2.0',
    },
    desc: {
      en: 'New version with improved UI, faster imports, and support for image-based questions.',
      fr: 'Nouvelle version avec une interface améliorée, des importations plus rapides et la prise en charge des questions avec images.',
      ar: 'إصدار جديد بواجهة محسنة واستيراد أسرع ودعم الأسئلة المصورة.',
    },
    link: 'https://www.mediafire.com/file/yoszkbo8ernqq9z/GS_Quiz.apk/file',
  },

  {
    type:  'result',
    date:  '2025-05-10',
    deadline: '2025-05-20',            // ← grade appeal deadline
    title: {
      en: 'Soil Physics Exam Results Published',
      fr: 'Résultats de l\'examen de physique du sol publiés',
      ar: 'نشر نتائج امتحان فيزياء التربة',
    },
    desc: {
      en: 'Check your results for the Spring 2025 Soil Physics final exam.',
      fr: 'Consultez vos résultats pour l\'examen final de physique du sol du printemps 2025.',
      ar: 'تحقق من نتائجك لامتحان فيزياء التربة النهائي لربيع 2025.',
    },
    link: '',
  },

  {
    type:  'update',
    date:  '2025-04-28',
    title: {
      en: 'New Module: Statistics Added',
      fr: 'Nouveau module : Statistiques ajouté',
      ar: 'وحدة جديدة: تم إضافة الإحصاء',
    },
    desc: {
      en: 'A new Statistics module with Biostatistics and Descriptive Statistics topics is now available.',
      fr: 'Un nouveau module Statistiques avec des sujets de Biostatistique et Statistiques Descriptives est disponible.',
      ar: 'وحدة إحصاء جديدة تتضمن مواضيع الإحصاء الحيوي والإحصاء الوصفي متاحة الآن.',
    },
    link: 'pages/module.html?id=stat',
  },

  {
    type:  'event',
    date:  '2025-04-15',
    title: {
      en: 'World Soil Day Celebration',
      fr: 'Célébration de la Journée Mondiale du Sol',
      ar: 'الاحتفال باليوم العالمي للتربة',
    },
    desc: {
      en: 'Green Science participated in the World Soil Day activities with interactive soil analysis workshops.',
      fr: 'Green Science a participé aux activités de la Journée mondiale du sol avec des ateliers interactifs d\'analyse des sols.',
      ar: 'شارك Green Science في فعاليات اليوم العالمي للتربة بورشات تحليل تربة تفاعلية.',
    },
    link: '',
  },


  // ╔────────────────────────────────────────────────╗
  // │  ADD NEW ITEMS ABOVE — newest first            │
  // │                                                │
  // │  Copy this template:                           │
  // │                                                │
  // │  {                                             │
  // │    type:  'video',                             │
  // │    date:  '2025-01-01',                        │
  // │    title: { en: '', fr: '', ar: '' },          │
  // │    desc:  { en: '', fr: '', ar: '' },          │
  // │    link:  '',                                  │
  // │    eventDate: '2025-02-01',   // optional      │
  // │    deadline:  '2025-01-25',   // optional      │
  // │    pin:   false,              // optional      │
  // │  },                                            │
  // ╚────────────────────────────────────────────────╝

];
