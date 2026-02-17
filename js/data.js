// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 📦  GREEN SCIENCE — CONTENT DATA                    ║
// ║                                                                      ║
// ║  Apps are defined here. Modules are loaded from modules/*.js         ║
// ║  Each module file calls modules.push({...})                          ║
// ║                                                                      ║
// ║  FILE STRUCTURE:                                                     ║
// ║  config.js  → gradients & SVGs                                       ║
// ║  i18n.js    → all labels (edit to rename sections)                   ║
// ║  data.js    → apps + modules array (this file)                       ║
// ║  modules/   → one file per module (soil.js, plant.js, etc.)          ║
// ║  engine.js  → search & logic (don't touch)                           ║
// ║                                                                      ║
// ║  EXPLANATION FILES:                                                  ║
// ║  explanations/folder/topic.en.html  (English)                        ║
// ║  explanations/folder/topic.fr.html  (French)                         ║
// ║  explanations/folder/topic.ar.html  (Arabic)                         ║
// ║  In data: explanation: 'explanations/folder/topic'  (no extension)   ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════════════════════════
// █  APPS  (shown in the carousel on the home page)
// ══════════════════════════════════════════════════════════════════════
//
//  TEMPLATE:
//  {
//    id:          'unique-id',
//    icon:        '🧪',
//    name:        { en: '', fr: '', ar: '' },
//    description: { en: '', fr: '', ar: '' },
//    videoId:     'YOUTUBE_VIDEO_ID',
//    storeUrl:    'https://...',
//    steps: [ { title: {...}, desc: {...} }, ... ]
//  }
// ──────────────────────────────────────────────────────────────────────

const apps = [

  // ┌────────────────────────────────────────────┐
  // │  App 1: Green Science Quiz                  │
  // └────────────────────────────────────────────┘
  {
    id:       'green-science-quiz',
    icon:     '🧪',
    name:     { en: 'Green Science Quiz', fr: 'Green Science Quiz', ar: 'Green Science Quiz' },
    description: {
      en: 'Download quiz files, import them into the app, and test your knowledge with multiple choice questions.',
      fr: 'Téléchargez les fichiers quiz, importez-les dans l\'application et testez vos connaissances.',
      ar: 'حمّل ملفات الاختبار، استوردها في التطبيق واختبر معلوماتك بأسئلة الاختيار المتعدد.',
    },
    videoId:  'K2tFoy-TaX8',
    storeUrl: 'https://www.mediafire.com/file/yoszkbo8ernqq9z/GS_Quiz.apk/file',
    steps: [
      { title: { en: 'Download',  fr: 'Télécharger',  ar: 'حمّل' },
        desc:  { en: 'Pick a quiz file and tap download', fr: 'Choisissez un quiz et appuyez sur télécharger', ar: 'اختر ملف اختبار واضغط تحميل' } },
      { title: { en: 'Open App',  fr: 'Ouvrir l\'app', ar: 'افتح التطبيق' },
        desc:  { en: 'Launch Green Science Quiz on your phone', fr: 'Lancez Green Science Quiz sur votre téléphone', ar: 'شغّل تطبيق Green Science Quiz على هاتفك' } },
      { title: { en: 'Import',    fr: 'Importer',      ar: 'استيراد' },
        desc:  { en: 'Import the JSON file from the app menu', fr: 'Importez le fichier JSON depuis le menu', ar: 'استورد ملف JSON من قائمة التطبيق' } },
    ],
  },

  // ┌────────────────────────────────────────────┐
  // │  App 2: Research Manager                    │
  // └────────────────────────────────────────────┘
  {
    id:       'research-manager',
    icon:     '🧪',
    name:     { en: 'Research Manager', fr: 'Research Manager', ar: 'Research Manager' },
    description: {
      en: 'Download app files, import them into the app, and test your knowledge with multiple choice questions.',
      fr: 'Téléchargez les fichiers quiz, importez-les dans l\'application et testez vos connaissances.',
      ar: 'حمّل ملفات الاختبار، استوردها في التطبيق واختبر معلوماتك بأسئلة الاختيار المتعدد.',
    },
    videoId:  'x0UzAgA6rSw',
    storeUrl: 'https://www.mediafire.com/file/r11pl122j194col/Research_Manager_-_Demo.rar/file',
    steps: [
      { title: { en: 'Download',  fr: 'Télécharger',  ar: 'حمّل' },
        desc:  { en: 'Pick a quiz file and tap download', fr: 'Choisissez un quiz et appuyez sur télécharger', ar: 'اختر ملف اختبار واضغط تحميل' } },
      { title: { en: 'Open App',  fr: 'Ouvrir l\'app', ar: 'افتح التطبيق' },
        desc:  { en: 'Launch Green Science Quiz on your phone', fr: 'Lancez Green Science Quiz sur votre téléphone', ar: 'شغّل تطبيق Green Science Quiz على هاتفك' } },
      { title: { en: 'Import',    fr: 'Importer',      ar: 'استيراد' },
        desc:  { en: 'Import the JSON file from the app menu', fr: 'Importez le fichier JSON depuis le menu', ar: 'استورد ملف JSON من قائمة التطبيق' } },
    ],
  },

  // ── ADD MORE APPS — copy a block above ──
];


// ══════════════════════════════════════════════════════════════════════
// █  MODULES ARRAY  (populated by modules/*.js files)
// ══════════════════════════════════════════════════════════════════════
//
//  Each module file (e.g. modules/soil.js) calls:
//    modules.push({ id: 'soil', ... });
//
//  To add a new module:
//  1. Create modules/your-module.js  (copy an existing one)
//  2. Add <script src="modules/your-module.js"></script> in all HTML files
//  3. Add a gradient in config.js if using a new category
// ──────────────────────────────────────────────────────────────────────

const modules = [];
