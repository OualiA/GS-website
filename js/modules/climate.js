// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: CLIMATOLOGY                                              ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'climate', icon: '🌤️', category: 'climate',
  title:       { en: 'Climatology',         fr: 'Climatologie',         ar: 'المناخ' },
  description: { en: '', fr: '', ar: '' },
  books: [],
  subModules: [
    { id: 'bioclimate', icon: '🌦', category: 'bioclimate',
      title:       { en: 'Bioclimatology',   fr: 'Bioclimatologie',    ar: 'المناخ الحيوي' },
      description: { en: 'Climate effects on living organisms and ecosystems.',
                     fr: 'Effets du climat sur les organismes vivants et les écosystèmes.',
                     ar: 'تأثيرات المناخ على الكائنات الحية والنظم البيئية.' },
      books: [], courseFiles: [], exercises: [], topics: [
        { id: 'evaporation', icon: '📐',
          title:       { en: 'Evapotranspiration', fr: 'Evapotranspiration', ar: 'التبخر النتحي' },
          description: { en: 'Density, porosity, void ratio, and phase relationships.',  fr: 'Densité, porosité, indice des vides et relations entre phases.',  ar: 'الكثافة والمسامية ونسبة الفراغات والعلاقات بين الأطوار.' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'climat-elements', icon: '📐',
          title:       { en: 'Climatic Elements', fr: 'Éléments climatiques', ar: 'العناصر المناخية' },
          description: { en: 'Density, porosity, void ratio, and phase relationships.',  fr: 'Densité, porosité, indice des vides et relations entre phases.',  ar: 'الكثافة والمسامية ونسبة الفراغات والعلاقات بين الأطوار.' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
        { id: 'climat-elements', icon: '📐',
          title:       { en: 'Climatic Elements', fr: 'Éléments climatiques', ar: 'العناصر المناخية' },
          description: { en: 'Density, porosity, void ratio, and phase relationships.',  fr: 'Densité, porosité, indice des vides et relations entre phases.',  ar: 'الكثافة والمسامية ونسبة الفراغات والعلاقات بين الأطوار.' },
          explanation: '', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },
  ],
});
