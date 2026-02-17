// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: STATISTICS                                               ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'stat', icon: '📱', category: 'statistics',
  title:       { en: 'Statistics',           fr: 'Statistique',          ar: 'الإحصاء' },
  description: { en: '', fr: '', ar: '' },
  books: [
    { icon: '📕',
      title:  { en: 'BIOSTATISTIQUE POUR LES SCIENCES DE LA VIE ET DE LA SANTE', fr: 'BIOSTATISTIQUE POUR LES SCIENCES DE LA VIE ET DE LA SANTE', ar: 'BIOSTATISTIQUE POUR LES SCIENCES DE LA VIE ET DE LA SANTE' },
      author: { en: 'Marc TRIOLA et Mario TRIOLA - 2012', fr: 'Marc TRIOLA et Mario TRIOLA - 2012', ar: 'Marc TRIOLA et Mario TRIOLA - 2012' },
      cover: 'images/books/stat/BPSVS.jpg', file: 'https://drive.google.com/file/d/1gwwNyEUYH21SPDAoesk9KUz5ub602xAq/view?usp=sharing' },
  ],
  subModules: [
    { id: 'descriptive-stat', icon: '📊', category: 'statistics',
      title:       { en: 'Biostatistics',     fr: 'Biostatistique',     ar: 'الإحصاء الحيوي' },
      description: { en: '', fr: '', ar: '' },
      books: [], courseFiles: [], exercises: [],
      topics: [
        { id: 'biostat', icon: '📊',
          title:       { en: 'Descriptive Statistics', fr: 'Statistiques Descriptives', ar: 'الإحصاء الوصفي' },
          description: { en: '', fr: '', ar: '' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },
  ],
});
