// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: SOIL SCIENCE                                             ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id:       'soil',
  icon:     '🪨',
  category: 'soil',
  title:       { en: 'Soil Science',       fr: 'Science du Sol',      ar: 'علم التربة' },
  description: { en: 'Comprehensive study of soil composition, physics, chemistry, and biology.',
                 fr: 'Étude complète de la composition, physique, chimie et biologie des sols.',
                 ar: 'دراسة شاملة لتركيب التربة وفيزيائها وكيميائها وأحيائها.' },

  books: [
    { icon: '📕',
      title:  { en: 'Guide des analyses en pédologie: 2e édition', fr: 'Guide des analyses en pédologie: 2e édition', ar: 'Guide des analyses en pédologie: 2e édition' },
      author: { en: 'Denis Baize - 2000', fr: 'Denis Baize - 2000', ar: 'Denis Baize - 2000' },
      cover:  'files/images/books/soil/GSP.jpg',
      file:   'https://drive.google.com/file/d/1dVsn_mfVA7oAh-X0QmRO8RY-Iswuz6Zu/view?usp=drive_link' },

    { icon: '📕',
      title:  { en: "L'analyse du sol: échantillonnage, instrumentation et contrôle", fr: "L'analyse du sol: échantillonnage, instrumentation et contrôle", ar: "L'analyse du sol: échantillonnage, instrumentation et contrôle" },
      author: { en: 'Marc Pansu et al - 1997', fr: 'Marc Pansu et al - 1997', ar: 'Marc Pansu et al - 1997' },
      cover:  'files/images/books/soil/AEIC.jpg',
      file:   'https://drive.google.com/file/d/1nzz07UtqwjS4HTcaAjCi4tBREHAuotIr/view?usp=drive_link' },

    { icon: '📕',
      title:  { en: 'La Faune des Sols, son écologie et son action', fr: 'La Faune des Sols, son écologie et son action', ar: 'La Faune des Sols, son écologie et son action' },
      author: { en: 'Georges Bachelier - 1978', fr: 'Georges Bachelier - 1978', ar: 'Georges Bachelier - 1978' },
      cover:  'files/images/books/soil/FSEA.jpg',
      file:   'https://drive.google.com/file/d/1lV8BaZNpgq0-AjTjXQugvivrIKv-8Kux/view?usp=sharing' },
  ],


  subModules: [

    // ── Sub: Soil Physics ──────────────────────
    {
      id: 'soil-physics', icon: '⚡', category: 'physics',
      title:       { en: 'Soil Physics',       fr: 'Physique du Sol',     ar: 'فيزياء التربة' },
      description: { en: 'Physical properties and processes of soils: texture, structure, porosity, and water movement.',
                     fr: "Propriétés physiques et processus des sols : texture, structure, porosité et mouvement de l'eau.",
                     ar: 'الخصائص الفيزيائية للتربة وعملياتها: القوام والبنية والمسامية وحركة الماء.' },
      books: [], courseFiles: [], exercises: [],
      topics: [
        { id: 'mass-volume', icon: '📐', order: 1,
          title:       { en: 'Mass-Volume Relations', fr: 'Relations Masse-Volume', ar: 'علاقات الكتلة-الحجم' },
          description: { en: 'Density, porosity, void ratio, and phase relationships.',  fr: 'Densité, porosité, indice des vides et relations entre phases.',  ar: 'الكثافة والمسامية ونسبة الفراغات والعلاقات بين الأطوار.' },
          explanation: 'files/explanations/soil/physic/mass-volume/mass-volume', 
          videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [],
          quizzes: [
            { icon: '📝', title: { en: 'Mass-Volume Quiz', fr: 'Quiz Masse-Volume', ar: 'اختبار الكتلة-الحجم' },
              questions: 58, chapters: 7, langs: ['EN', 'FR', 'AR'],
              file: 'https://www.mediafire.com/file/msfqgmnb6fzdern/SOIL_PHYSICS_-_CH01_Soil_Components.json/file' },
          ],
        },
        { id: 'texture', icon: '🧱', order: 2,
          title:       { en: 'Soil Texture',       fr: 'Texture du Sol',     ar: 'قوام التربة' },
          description: { en: 'Particle size distribution and textural classification of soils.', fr: 'Distribution granulométrique et classification texturale des sols.', ar: 'توزيع حجم الحبيبات والتصنيف القوامي للتربة.' },
          explanation: 'files/explanations/soil/physic/texture/texture',
          videoId: '', playlist: '',
          courseFiles: [], books: [],
          exercises: [
            { icon: '📝', type: 'td', title: { en: 'TD1: Textural Triangle', fr: 'TD1: Triangle Textural', ar: 'TD1: مثلث القوام' }, videoId: '', file: 'exercises/texture_td1.pdf' },
          ],
          quizzes: [
            { icon: '📝', title: { en: 'Soil Texture Quiz', fr: 'Quiz Texture du Sol', ar: 'اختبار قوام التربة' },
              questions: 34, chapters: 5, langs: ['EN', 'FR', 'AR'],
              file: 'https://www.mediafire.com/file/ap8vxhl3fkwtb4l/SOIL_PHYSICS_-_CH02_Soil_Texture.json/file' },
          ],
        },
        { id: 'structure', icon: '🏗️', order: 3,
          title:       { en: 'Soil Structure',     fr: 'Structure du Sol',   ar: 'بنية التربة' },
          description: { en: 'Aggregation, pore space, and structural classification.', fr: 'Agrégation, espace poreux et classification structurale.', ar: 'التجمع والفراغات المسامية والتصنيف البنيوي.' },
          explanation: 'files/explanations/soil/physic/structure/structure',
          videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'porosity', icon: '🌐', order: 4,
          title:       { en: 'Soil Porosity',      fr: 'Porosité du Sol',    ar: 'مسامية التربة' },
          description: { en: '', fr: '', ar: '' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'water', icon: '💧', order: 5,
          title:       { en: 'Soil Water',         fr: 'Eau du Sol',         ar: 'ماء التربة' },
          description: { en: 'Water retention, movement, and soil moisture characteristics.', fr: "Rétention d'eau, mouvement et caractéristiques d'humidité du sol.", ar: 'احتباس الماء وحركته وخصائص رطوبة التربة.' },
          explanation: 'files/explanations/soil/physic/soil-water/water', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },

    // ── Sub: Soil Chemistry ────────────────────
    {
      id: 'soil-chemistry', icon: '⚗️', category: 'chemistry', 
      title:       { en: 'Soil Chemistry',     fr: 'Chimie du Sol',      ar: 'كيمياء التربة' },
      description: { en: 'Chemical properties, reactions, and nutrient dynamics in soils.',
                     fr: 'Propriétés chimiques, réactions et dynamique des nutriments dans les sols.',
                     ar: 'الخصائص الكيميائية والتفاعلات وديناميكية العناصر الغذائية في التربة.' },
      books: [], exercises: [],
      courseFiles: [
        { icon: '📄', title: { en: 'Soil Chemistry - University of Biskra', fr: 'Chimie du sol - Université de Biskra', ar: 'كيمياء التربة - جامعة بسكرة' },
          file: 'https://drive.google.com/drive/folders/1lJt4nuSiKuxAFPn46Lv2ybV5m4OCAKs5?usp=drive_link' },
      ],
      topics: [
        { id: 'soil-solution', icon: '💧', order: 1,
          title:       { en: 'Soil Solution',     fr: 'Solution du Sol',    ar: 'محلول التربة' },
          description: { en: 'Mineral and organic constituents of the soil.', fr: 'Constituants minéraux et organiques du sol.', ar: 'المكونات المعدنية والعضوية للتربة.' },
          explanation: 'files/explanations/soil/chemic/soil-solution/soil-solution', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'ion-exchange', icon: '🔄', order: 3,
          title:       { en: 'Ion Exchange Capacity',     fr: 'Capacité d\'Échange d\'Ionique',    ar: 'قدرة التبادل الأيوني' },
          description: { en: 'Mineral and organic constituents of the soil.', fr: 'Constituants minéraux et organiques du sol.', ar: 'المكونات المعدنية والعضوية للتربة.' },
          explanation: 'files/explanations/soil/chemic/iec/ion-exchange', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'ph', icon: '🚥', order: 2,
          title:       { en: 'Soil pH',     fr: 'pH du Sol',    ar: 'محلول التربة' },
          description: { en: 'Mineral and organic constituents of the soil.', fr: 'Constituants minéraux et organiques du sol.', ar: 'المكونات المعدنية والعضوية للتربة.' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },

    // ── Sub: Soil Biology ──────────────────────
    {
      id: 'soil-biology', icon: '🐌', category: 'soilbiology',
      title:       { en: 'Soil Biology',       fr: 'Biologie du sol',    ar: 'بيولوجيا التربة' },
      description: { en: '', fr: '', ar: '' },
      books: [], courseFiles: [], exercises: [],
      topics: [
        { id: 'fauna', icon: '🐍', order: 1,
          title:       { en: 'Soil Fauna',       fr: 'Faune du Sol',      ar: 'حيوانات التربة' },
          description: { en: '', fr: '', ar: '' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'flora', icon: '🍃', order: 2,
          title:       { en: 'Soil Flora',       fr: 'Flore du Sol',      ar: 'فلورا التربة' },
          description: { en: '', fr: '', ar: '' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },

    // ── Sub: Soil Fertility ────────────────────
    {
      id: 'soil-fertility', icon: '🌱', category: 'fertility',
      title:       { en: 'Soil Fertility',     fr: 'Fertilité du Sol',   ar: 'خصوبة التربة' },
      description: { en: "Study of the soil's capacity to supply essential nutrients to plants.", fr: "Étude de la capacité du sol à fournir les éléments nutritifs nécessaires.", ar: 'دراسة قدرة التربة على تزويد النباتات بالعناصر الغذائية الضرورية' },
      books: [], exercises: [],
      courseFiles: [
        { icon: '📄', title: { en: 'Soil Fertility - University of Biskra', fr: 'Fertilité du Sol - Université de Biskra', ar: 'خصوبة التربة - جامعة بسكرة' },
          file: 'https://drive.google.com/drive/folders/1nnhfQanETTLSt0wIYn1phRd5hCFjBaKh?usp=drive_link' },
        { icon: '📄', title: { en: 'Soil Fertility - National Higher School of Agronomy', fr: 'Fertilité du Sol - École Nationale Supérieure Agronomique', ar: 'خصوبة التربة - المدرسة الوطنية العليا للزراعة' },
          file: 'https://drive.google.com/drive/folders/1zSa3wob7JidAJUXm9wOqaca3Ghesbu1Z?usp=drive_link' },
      ],
      topics: [
        { id: 'fertilisation', icon: '🥀', order: 1,
          title:       { en: 'Fertilisation',    fr: 'Fertilisation',     ar: 'التخصيب' },
          description: { en: 'Management of nutrient inputs', fr: 'Gestion des apports nutritifs', ar: 'إدارة إضافة العناصر الغذائية' },
          explanation: '', videoId: 'FP_nltHwsCo',
          playlist: 'https://www.youtube.com/watch?v=FP_nltHwsCo&list=PLpot-tBGux4n6R8PU9Zc3Pao1Td4HUL-L',
          courseFiles: [],
          books: [
            { icon: '📕', title: { en: 'PLANT NUTRITION AND SOIL FERTILITY', fr: 'PLANT NUTRITION AND SOIL FERTILITY', ar: 'PLANT NUTRITION AND SOIL FERTILITY' },
              author: { en: 'OUALI Abdelouahad', fr: 'OUALI Abdelouahad', ar: 'والي عبد الواحد' },
              cover: 'images/books/soil/PNSF.jpg', file: 'https://drive.google.com/file/d/1dVsn_mfVA7oAh-X0QmRO8RY-Iswuz6Zu/view?usp=drive_link' },
          ],
          exercises: [], quizzes: [],
        },
      ],
    },

  ],
});
