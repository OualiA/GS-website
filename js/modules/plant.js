// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: BOTANY                                                   ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'plant', icon: '🌳', category: 'plant',
  title:       { en: 'Botany',             fr: 'Botanique',            ar: 'علم النبات' },
  description: { en: 'Comprehensive study of plant structure, growth, functions, and classification.',
                 fr: 'Étude complète de la structure des plantes, de leur croissance, de leurs fonctions et de leur classification.',
                 ar: 'دراسة شاملة لتركيب النباتات، نموها، وظائفها، وتصنيفها' },
  books: [],
  subModules: [
    { id: 'plant-nutrition', icon: '🌿', category: 'plant',
      title:       { en: 'Plant Nutrition',  fr: 'Nutrition Végétale',  ar: 'تغذية النبات' },
      description: { en: 'Macro and micronutrients, uptake mechanisms, and fertilization.',
                     fr: "Macro et micronutriments, mécanismes d'absorption et fertilisation.",
                     ar: 'العناصر الكبرى والصغرى وآليات الامتصاص والتسميد.' },
      books: [
        { icon: '📕', title: { en: 'PLANT NUTRITION AND SOIL FERTILITY', fr: 'PLANT NUTRITION AND SOIL FERTILITY', ar: 'PLANT NUTRITION AND SOIL FERTILITY' },
          author: { en: 'OUALI Abdelouahad', fr: 'OUALI Abdelouahad', ar: 'والي عبد الواحد' },
          cover: 'files/images/books/soil/PNSF.jpg', file: 'https://drive.google.com/file/d/1dVsn_mfVA7oAh-X0QmRO8RY-Iswuz6Zu/view?usp=drive_link' },
      ],
      courseFiles: [], exercises: [], topics: [],
    },
  ],
});
