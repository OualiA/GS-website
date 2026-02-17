// ══════════════════════════════════════════════════
// PATH RESOLUTION (root vs pages/ subfolder)
// ══════════════════════════════════════════════════
var ROOT  = /\/pages\//.test(window.location.pathname) ? '../' : '';
var PAGES = ROOT ? '' : 'pages/';

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 🔧  GREEN SCIENCE — ENGINE                          ║
// ║                                                                      ║
// ║  Core utilities, search engine, and UI logic.                        ║
// ║  ⚠️  DO NOT EDIT unless you know what you're doing.                  ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ══════════════════════════════════════════════════

let currentLang = 'en';

function initLang() {
  let lang = null;
  try { lang = localStorage.getItem('gs_lang'); } catch(e) {}
  if (!lang) {
    const bl = (navigator.language || '').toLowerCase();
    if (bl.startsWith('ar')) lang = 'ar';
    else if (bl.startsWith('fr')) lang = 'fr';
    else lang = 'en';
  }
  return lang;
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('gs_lang', lang); } catch(e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(b => {
    const m = b.getAttribute('onclick').match(/'(\w+)'/);
    if (m) b.classList.toggle('active', m[1] === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  if (typeof onLangChange === 'function') onLangChange(lang);
  var si = document.getElementById('searchInput');
  if (si) si.placeholder = tr('searchPlaceholder');
  searchIndex = null;
}

function tr(key) { return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key; }
function localText(obj) { return (obj && (obj[currentLang] || obj.en)) || ''; }


// ══════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════

function getParam(k) { return new URLSearchParams(window.location.search).get(k); }
function findModule(id) { return modules.find(m => m.id === id); }
function findSub(mod, subId) { return mod && mod.subModules ? mod.subModules.find(s => s.id === subId) : null; }
function findTopic(sub, topicId) { return sub && sub.topics ? sub.topics.find(t => t.id === topicId) : null; }

// Book cover fallback — replaces broken <img> with emoji placeholder
function coverFallback(img) {
  var placeholder = document.createElement('div');
  placeholder.className = 'book-cover book-cover-placeholder';
  placeholder.textContent = '📕';
  img.parentNode.replaceChild(placeholder, img);
}


// ══════════════════════════════════════════════════
// EXERCISE VIDEO TOGGLE
// ══════════════════════════════════════════════════

function toggleExVideo(slotId, videoId, btn, event) {
  if (event) event.stopPropagation();
  var slot = document.getElementById(slotId);
  if (!slot) return;
  if (slot.style.display === 'none' || !slot.innerHTML) {
    slot.innerHTML = '<div class="ex-video-wrap"><div class="video-frame">' +
      '<iframe src="https://www.youtube-nocookie.com/embed/' + videoId + '?rel=0&modestbranding=1" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div>';
    slot.style.display = 'block';
    slot.style.marginTop = '10px';
    if (btn) btn.style.opacity = '0.5';
  } else {
    slot.innerHTML = '';
    slot.style.display = 'none';
    if (btn) btn.style.opacity = '1';
  }
}


// ══════════════════════════════════════════════════
// GLOBAL SEARCH ENGINE
// ══════════════════════════════════════════════════

function localOr(obj, lang) { return (obj && (obj[lang] || obj.en)) || ''; }

var searchIndex = null;

function getSearchIndex() {
  if (!searchIndex) searchIndex = buildSearchIndex();
  return searchIndex;
}

function buildSearchIndex() {
  var items = [];
  modules.forEach(function(mod) {
    items.push({
      type: 'module', icon: mod.icon,
      title: mod.title, desc: mod.description,
      path: '', href: 'pages/module.html?id=' + mod.id, cover: null
    });
    if (mod.books) mod.books.forEach(function(bk) {
      items.push({
        type: 'book', icon: bk.icon || '📕',
        title: bk.title, desc: bk.author || {},
        path: mod.title, href: 'pages/module.html?id=' + mod.id, cover: bk.cover || null
      });
    });
    if (mod.subModules) mod.subModules.forEach(function(sub) {
      items.push({
        type: 'submodule', icon: sub.icon,
        title: sub.title, desc: sub.description,
        path: mod.title, href: 'pages/sub.html?mod=' + mod.id + '&sub=' + sub.id, cover: null
      });
      var subPath = { en: localOr(mod.title,'en') + ' › ' + localOr(sub.title,'en'), fr: localOr(mod.title,'fr') + ' › ' + localOr(sub.title,'fr'), ar: localOr(mod.title,'ar') + ' › ' + localOr(sub.title,'ar') };
      if (sub.books) sub.books.forEach(function(bk) {
        items.push({ type: 'book', icon: bk.icon || '📕', title: bk.title, desc: bk.author || {}, path: subPath, href: 'pages/sub.html?mod=' + mod.id + '&sub=' + sub.id, cover: bk.cover || null });
      });
      if (sub.courseFiles) sub.courseFiles.forEach(function(cf) {
        items.push({ type: 'course', icon: cf.icon || '📄', title: cf.title, desc: {}, path: subPath, href: 'pages/sub.html?mod=' + mod.id + '&sub=' + sub.id, cover: null });
      });
      if (sub.exercises) sub.exercises.forEach(function(ex) {
        items.push({ type: 'exercise', icon: ex.icon || (ex.type === 'tp' ? '🔬' : ex.type === 'other' ? '📋' : '📝'), title: ex.title, desc: {}, path: subPath, href: 'pages/sub.html?mod=' + mod.id + '&sub=' + sub.id, cover: null });
      });
      if (sub.topics) sub.topics.forEach(function(topic) {
        var tPath = { en: localOr(mod.title,'en') + ' › ' + localOr(sub.title,'en'), fr: localOr(mod.title,'fr') + ' › ' + localOr(sub.title,'fr'), ar: localOr(mod.title,'ar') + ' › ' + localOr(sub.title,'ar') };
        var tHref = 'pages/topic.html?mod=' + mod.id + '&sub=' + sub.id + '&topic=' + topic.id;
        items.push({ type: 'topic', icon: topic.icon, title: topic.title, desc: topic.description, path: tPath, href: tHref, cover: null });
        var topicPath = { en: localOr(sub.title,'en') + ' › ' + localOr(topic.title,'en'), fr: localOr(sub.title,'fr') + ' › ' + localOr(topic.title,'fr'), ar: localOr(sub.title,'ar') + ' › ' + localOr(topic.title,'ar') };
        if (topic.books) topic.books.forEach(function(bk) {
          items.push({ type: 'book', icon: bk.icon || '📕', title: bk.title, desc: bk.author || {}, path: topicPath, href: tHref, cover: bk.cover || null });
        });
        if (topic.courseFiles) topic.courseFiles.forEach(function(cf) {
          items.push({ type: 'course', icon: cf.icon || '📄', title: cf.title, desc: {}, path: topicPath, href: tHref, cover: null });
        });
        if (topic.quizzes) topic.quizzes.forEach(function(q) {
          if (q && q.title) items.push({ type: 'quiz', icon: q.icon || '📝', title: q.title, desc: {}, path: topicPath, href: tHref, cover: null });
        });
        if (topic.exercises) topic.exercises.forEach(function(ex) {
          items.push({ type: 'exercise', icon: ex.icon || (ex.type === 'tp' ? '🔬' : ex.type === 'other' ? '📋' : '📝'), title: ex.title, desc: {}, path: topicPath, href: tHref, cover: null });
        });
      });
    });
  });
  return items;
}

function searchAll(query) {
  if (!query || query.trim().length === 0) return [];
  var q = query.toLowerCase().trim();
  var words = q.split(/\s+/);
  var index = getSearchIndex();
  var scored = [];
  index.forEach(function(item) {
    var texts = [
      localOr(item.title, 'en'), localOr(item.title, 'fr'), localOr(item.title, 'ar'),
      localOr(item.desc, 'en'), localOr(item.desc, 'fr'), localOr(item.desc, 'ar')
    ].join(' ').toLowerCase();
    var allMatch = true;
    var score = 0;
    words.forEach(function(w) {
      if (texts.indexOf(w) === -1) { allMatch = false; }
      else {
        var titleText = [localOr(item.title,'en'), localOr(item.title,'fr'), localOr(item.title,'ar')].join(' ').toLowerCase();
        if (titleText.indexOf(w) !== -1) score += 10;
        else score += 3;
      }
    });
    if (allMatch && score > 0) {
      if (item.type === 'module') score += 5;
      else if (item.type === 'topic') score += 3;
      else if (item.type === 'submodule') score += 4;
      scored.push({ item: item, score: score });
    }
  });
  scored.sort(function(a, b) { return b.score - a.score; });
  return scored.map(function(s) { return s.item; }).slice(0, 20);
}

function highlightText(text, query) {
  if (!text || !query) return text || '';
  var words = query.trim().split(/\s+/);
  var result = text;
  words.forEach(function(w) {
    if (w.length < 1) return;
    var regex = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  });
  return result;
}

var typeLabels = { module: 'catModule', submodule: 'catSubModule', topic: 'catTopic', book: 'catBook', course: 'catCourse', quiz: 'catQuiz', exercise: 'catExercise' };

function renderSearchResults(results, query) {
  var container = document.getElementById('searchResults');
  if (!container) return;
  if (!query || query.trim().length === 0) {
    container.innerHTML = '<div class="sr-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><div>' + tr('searchHint') + '</div></div>';
    return;
  }
  if (results.length === 0) {
    container.innerHTML = '<div class="sr-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><div>' + tr('searchNoResults') + '</div></div>';
    return;
  }
  var groups = {};
  var order = ['module', 'submodule', 'topic', 'quiz', 'exercise', 'course', 'book'];
  results.forEach(function(r) {
    if (!groups[r.type]) groups[r.type] = [];
    groups[r.type].push(r);
  });
  var html = '';
  order.forEach(function(type) {
    if (!groups[type]) return;
    html += '<div class="sr-group-label">' + tr(typeLabels[type]) + '</div>';
    groups[type].forEach(function(r) {
      var title = highlightText(localText(r.title), query);
      var path = localText(r.path);
      var iconHtml = (r.cover)
        ? '<div class="sr-icon"><img src="' + ROOT + r.cover + '" alt=""></div>'
        : '<div class="sr-icon">' + r.icon + '</div>';
      html += '<a class="sr-item" href="' + ROOT + r.href + '">' +
        iconHtml +
        '<div class="sr-info">' +
          '<div class="sr-title">' + title + '</div>' +
          (path ? '<div class="sr-path">' + path + '</div>' : '') +
        '</div>' +
        '<span class="sr-badge">' + tr(typeLabels[r.type]) + '</span>' +
      '</a>';
    });
  });
  container.innerHTML = html;
}


// ══════════════════════════════════════════════════
// SEARCH UI
// ══════════════════════════════════════════════════

var searchTimer = null;

function openSearch() {
  var ov = document.getElementById('searchOverlay');
  if (ov) { ov.classList.add('open'); }
  var inp = document.getElementById('searchInput');
  if (inp) { setTimeout(function() { inp.focus(); }, 50); }
}

function closeSearch() {
  var ov = document.getElementById('searchOverlay');
  if (ov) { ov.classList.remove('open'); }
  var inp = document.getElementById('searchInput');
  if (inp) { inp.value = ''; }
  var cl = document.getElementById('searchClear');
  if (cl) { cl.classList.remove('show'); }
  renderSearchResults([], '');
}

function onSearchInput(e) {
  var val = e.target.value;
  var cl = document.getElementById('searchClear');
  if (cl) { cl.classList.toggle('show', val.length > 0); }
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function() {
    var results = searchAll(val);
    renderSearchResults(results, val);
  }, 150);
}

function clearSearch() {
  var inp = document.getElementById('searchInput');
  if (inp) { inp.value = ''; inp.focus(); }
  var cl = document.getElementById('searchClear');
  if (cl) { cl.classList.remove('show'); }
  renderSearchResults([], '');
}

function initSearch() {
  var ov = document.createElement('div');
  ov.id = 'searchOverlay';
  ov.className = 'search-overlay';
  ov.innerHTML =
    '<div class="search-modal">' +
      '<div class="search-input-wrap">' +
        searchSvg +
        '<input type="text" class="search-input" id="searchInput" placeholder="' + tr('searchPlaceholder') + '" autocomplete="off">' +
        '<button class="search-clear" id="searchClear" onclick="clearSearch()">✕</button>' +
        '<span class="search-kbd">ESC</span>' +
      '</div>' +
      '<div class="search-results" id="searchResults"></div>' +
    '</div>';
  document.body.appendChild(ov);
  ov.addEventListener('click', function(e) { if (e.target === ov) closeSearch(); });
  var inp = document.getElementById('searchInput');
  if (inp) inp.addEventListener('input', onSearchInput);
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { closeSearch(); }
  });
  renderSearchResults([], '');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}


// ══════════════════════════════════════════════════
// THEME TOGGLE (light / dark)
// ══════════════════════════════════════════════════

function initTheme() {
  var saved = null;
  try { saved = localStorage.getItem('gs_theme'); } catch(e) {}
  if (!saved) saved = 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('gs_theme', theme); } catch(e) {}
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

initTheme();


// ══════════════════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════════════════

function initBackToTop() {
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(btn);

  var visible = false;
  window.addEventListener('scroll', function() {
    var show = window.scrollY > 400;
    if (show !== visible) {
      visible = show;
      btn.classList.toggle('visible', show);
    }
  }, { passive: true });
}

initBackToTop();


// ══════════════════════════════════════════════════
// PAGE FADE ANIMATION
// ══════════════════════════════════════════════════

function initPageFade() {
  var wrap = document.querySelector('main.wrap, .wrap');
  if (wrap) wrap.classList.add('page-fade');
}

initPageFade();


// ══════════════════════════════════════════════════
// RECENTLY VISITED (stored in localStorage)
// ══════════════════════════════════════════════════

var RECENT_KEY = 'gs_recent';
var MAX_RECENT = 6;

function getRecentVisits() {
  try {
    var raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function trackVisit(data) {
  // data = { id, icon, title: {en,fr,ar}, path: {en,fr,ar}, href, grad }
  try {
    var visits = getRecentVisits();
    // Remove duplicate
    visits = visits.filter(function(v) { return v.id !== data.id; });
    // Add to front
    visits.unshift(data);
    // Cap
    if (visits.length > MAX_RECENT) visits = visits.slice(0, MAX_RECENT);
    localStorage.setItem(RECENT_KEY, JSON.stringify(visits));
  } catch(e) {}
}

function renderRecentVisits() {
  var container = document.getElementById('recentVisits');
  if (!container) return;
  var visits = getRecentVisits();
  if (visits.length === 0) { container.style.display = 'none'; return; }

  var h = '<div class="section-label"><span>' + tr('recentlyVisited') + '</span></div>';
  h += '<div class="recent-grid">';
  visits.forEach(function(v) {
    h += '<a class="recent-card" href="' + ROOT + v.href + '">';
    h += '<div class="recent-card-icon" style="background:' + (v.grad || catGradients.general) + '">' + v.icon + '</div>';
    h += '<div class="recent-card-info">';
    h += '<div class="recent-card-title">' + localText(v.title) + '</div>';
    h += '<div class="recent-card-path">' + localText(v.path) + '</div>';
    h += '</div></a>';
  });
  h += '</div>';
  container.innerHTML = h;
  container.style.display = 'block';
}


// ══════════════════════════════════════════════════
// ANNOUNCEMENT BANNER
// ══════════════════════════════════════════════════

function renderAnnouncement() {
  var container = document.getElementById('announcementSlot');
  if (!container || typeof announcement === 'undefined') return;
  var text = localText(announcement.text);
  if (!text) { container.style.display = 'none'; return; }

  // Check if user dismissed this announcement
  var dismissKey = 'gs_dismiss_' + announcement.id;
  try { if (localStorage.getItem(dismissKey)) { container.style.display = 'none'; return; } } catch(e) {}

  container.innerHTML =
    '<div class="announcement">' +
      '<div class="announcement-icon">' + announcement.icon + '</div>' +
      '<div class="announcement-text">' + text + '</div>' +
      '<button class="announcement-close" onclick="dismissAnnouncement()" aria-label="Close">✕</button>' +
    '</div>';
  container.style.display = 'block';
}

function dismissAnnouncement() {
  try { localStorage.setItem('gs_dismiss_' + announcement.id, '1'); } catch(e) {}
  var el = document.getElementById('announcementSlot');
  if (el) el.style.display = 'none';
}


// ══════════════════════════════════════════════════
// CONTACT LINKS RENDERER
// ══════════════════════════════════════════════════

function renderContactLinks() {
  var container = document.getElementById('contactSlot');
  if (!container || typeof contactLinks === 'undefined' || contactLinks.length === 0) return;
  var h = '<div class="contact-row">';
  contactLinks.forEach(function(c) {
    h += '<a class="contact-link" href="' + c.url + '" target="_blank" rel="noopener">' +
      c.icon + ' ' + localText(c.label) + '</a>';
  });
  h += '</div>';
  container.innerHTML = h;
}


// ══════════════════════════════════════════════════
// EXPLANATION TABLE OF CONTENTS (auto-generated)
// ══════════════════════════════════════════════════

function buildExplToc(container) {
  if (!container) return;
  var headings = container.querySelectorAll('h2, h3');
  if (headings.length < 3) return; // too short, skip TOC

  // Add IDs to headings
  headings.forEach(function(h, i) {
    if (!h.id) h.id = 'expl-heading-' + i;
  });

  var toc = document.createElement('div');
  toc.className = 'expl-toc';
  toc.innerHTML = '<div class="expl-toc-title">' + tr('tocTitle') + '</div>';
  headings.forEach(function(h) {
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    if (h.tagName === 'H3') a.className = 'toc-h3';
    toc.appendChild(a);
  });

  container.insertBefore(toc, container.firstChild);
}


// ══════════════════════════════════════════════════
// NEWS & EVENTS
// ══════════════════════════════════════════════════

var NEWS_HOME_LIMIT = 3;

var newsTypeIcons = {
  video:   '🎬',
  app:     '📱',
  seminar: '🎓',
  result:  '📊',
  event:   '📅',
  update:  '🔔',
  news:    '📰',
};

var newsTypeKeys = {
  video:   'newsVideo',
  app:     'newsApp',
  seminar: 'newsSeminar',
  result:  'newsResult',
  event:   'newsEvent',
  update:  'newsUpdate',
  news:    'newsNews',
};

function formatNewsDate(dateStr) {
  if (!dateStr) return '';
  try {
    var d = new Date(dateStr + 'T00:00:00');
    var months = currentLang === 'ar'
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
      : currentLang === 'fr'
      ? ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  } catch(e) { return dateStr; }
}

function sortedNews() {
  if (typeof newsItems === 'undefined') return [];
  return newsItems.slice().sort(function(a, b) {
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    return (b.date || '').localeCompare(a.date || '');
  });
}

function buildNewsCard(item) {
  var type = item.type || 'news';
  var icon = newsTypeIcons[type] || '📰';
  var typeLabel = tr(newsTypeKeys[type] || 'newsNews');
  var pinClass = item.pin ? ' pinned' : '';
  var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  // Check if deadline is past
  var deadlinePast = false;
  if (item.deadline) {
    try { deadlinePast = new Date(item.deadline + 'T23:59:59') < new Date(); } catch(e) {}
  }

  var h = '<div class="news-card' + pinClass + (deadlinePast ? ' deadline-passed' : '') + '">';
  h += '<div class="news-card-header">';
  h += '<span class="news-type-badge ' + type + '">' + icon + ' ' + typeLabel + '</span>';
  h += '<span class="news-date">' + formatNewsDate(item.date) + '</span>';
  h += '</div>';
  h += '<div class="news-card-title">' + localText(item.title) + '</div>';
  h += '<div class="news-card-desc">' + localText(item.desc) + '</div>';

  // Date range: eventDate → deadline
  if (item.eventDate || item.deadline) {
    var clockSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-2px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    h += '<div class="news-card-dates">';
    if (item.eventDate) {
      h += '<span class="news-meta-tag">' + clockSvg + ' ' + formatNewsDate(item.eventDate) + '</span>';
    }
    if (item.deadline) {
      var dlClass = deadlinePast ? ' passed' : '';
      h += '<span class="news-meta-tag deadline' + dlClass + '">⏰ ' + tr('newsDeadline') + ': ' + formatNewsDate(item.deadline) + '</span>';
    }
    h += '</div>';
  }

  if (item.link) {
    var isExternal = item.link.indexOf('http') === 0;
    var linkHref = isExternal ? item.link : ROOT + item.link;
    h += '<a class="news-card-link" href="' + linkHref + '"' + (isExternal ? ' target="_blank" rel="noopener"' : '') + '>' + tr('newsReadMore') + ' ' + arrowSvg + '</a>';
  }
  h += '</div>';
  return h;
}

// Home page: ≤6 → show 3 + "show more" toggle; >6 → show 3 + "view all news" link
var newsExpanded = false;

function renderNews() {
  var container = document.getElementById('newsSlot');
  if (!container || typeof newsItems === 'undefined' || newsItems.length === 0) {
    if (container) container.style.display = 'none';
    return;
  }

  var sorted = sortedNews();
  var total = sorted.length;
  var limit = newsExpanded ? total : Math.min(NEWS_HOME_LIMIT, total);
  var items = sorted.slice(0, limit);

  var h = '<div class="section-label"><span>' + tr('newsTitle') + '</span></div>';
  h += '<div class="news-grid">';
  items.forEach(function(item) { h += buildNewsCard(item); });
  h += '</div>';

  if (total > NEWS_HOME_LIMIT) {
    h += '<div class="news-show-more">';
    if (total <= 6) {
      // Small set: toggle show more / show less
      h += '<button class="news-view-all-btn" onclick="newsExpanded=!newsExpanded;renderNews()">' +
        (newsExpanded ? tr('newsLess') : tr('newsMore') + ' (' + total + ')') + '</button>';
    } else {
      // Large set: link to full news page
      h += '<a href="' + PAGES + 'news.html" class="news-view-all-btn">' + tr('newsViewAll') + ' (' + total + ')</a>';
    }
    h += '</div>';
  }

  container.innerHTML = h;
  container.style.display = 'block';
}


// ══════════════════════════════════════════════════
// BOOKS
// ══════════════════════════════════════════════════

var BOOKS_INLINE_LIMIT = 6;


// ══════════════════════════════════════════════════
// ALL BOOKS COLLECTOR (for books.html page)
// ══════════════════════════════════════════════════

function getAllBooks() {
  var books = [];
  modules.forEach(function(mod) {
    var modTitle = mod.title;
    var modId = mod.id;
    var modIcon = mod.icon;
    var modGrad = catGradients[mod.category] || catGradients.general;

    // Module-level books
    if (mod.books) mod.books.forEach(function(bk) {
      books.push({
        book: bk,
        source: modTitle,
        sourceIcon: modIcon,
        sourceGrad: modGrad,
        href: 'pages/module.html?id=' + modId,
        level: 'module',
      });
    });

    // Sub-module level books
    if (mod.subModules) mod.subModules.forEach(function(sub) {
      if (sub.books) sub.books.forEach(function(bk) {
        books.push({
          book: bk,
          source: sub.title,
          sourceIcon: sub.icon,
          sourceGrad: catGradients[sub.category] || modGrad,
          href: 'pages/sub.html?mod=' + modId + '&sub=' + sub.id,
          level: 'sub',
        });
      });

      // Topic-level books
      if (sub.topics) sub.topics.forEach(function(topic) {
        if (topic.books) topic.books.forEach(function(bk) {
          books.push({
            book: bk,
            source: topic.title,
            sourceIcon: topic.icon,
            sourceGrad: modGrad,
            href: 'pages/topic.html?mod=' + modId + '&sub=' + sub.id + '&topic=' + topic.id,
            level: 'topic',
          });
        });
      });
    });
  });
  return books;
}


// ══════════════════════════════════════════════════
// SERVICE WORKER REGISTRATION
// ══════════════════════════════════════════════════




// ══════════════════════════════════════════════════
// PAGE TRANSITIONS (fade out on navigate)
// ══════════════════════════════════════════════════

function initPageTransitions() {
  // Fade out on internal link click
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0 ||
        link.hasAttribute('download') || link.target === '_blank') return;

    e.preventDefault();
    var wrap = document.querySelector('main.wrap, .wrap');
    if (wrap) {
      wrap.classList.add('page-transitioning');
      setTimeout(function() { window.location.href = href; }, 180);
    } else {
      window.location.href = href;
    }
  });

  // Restore visibility on back/forward (bfcache + normal)
  window.addEventListener('pageshow', function(e) {
    var wrap = document.querySelector('main.wrap, .wrap');
    if (wrap) {
      wrap.classList.remove('page-transitioning');
      wrap.style.opacity = '';
      wrap.style.transform = '';
      // Re-trigger fade-in if restored from bfcache
      if (e.persisted) {
        wrap.classList.remove('page-fade');
        void wrap.offsetWidth; // force reflow
        wrap.classList.add('page-fade');
      }
    }
  });
}

initPageTransitions();


// ══════════════════════════════════════════════════
// MODULE PROGRESS (topic visit tracking)
// ══════════════════════════════════════════════════

var PROGRESS_KEY = 'gs_visited_topics';

function getVisitedTopics() {
  try { var r = localStorage.getItem(PROGRESS_KEY); return r ? JSON.parse(r) : {}; }
  catch(e) { return {}; }
}

function markTopicVisited(modId, subId, topicId) {
  try {
    var visited = getVisitedTopics();
    var key = modId + '/' + subId + '/' + topicId;
    visited[key] = Date.now();
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(visited));
  } catch(e) {}
}

function getModuleProgress(mod) {
  var visited = getVisitedTopics();
  var total = 0, done = 0;
  if (mod.subModules) mod.subModules.forEach(function(sub) {
    if (sub.topics) sub.topics.forEach(function(topic) {
      total++;
      if (visited[mod.id + '/' + sub.id + '/' + topic.id]) done++;
    });
  });
  return { total: total, done: done };
}

function getSubProgress(modId, sub) {
  var visited = getVisitedTopics();
  var total = 0, done = 0;
  if (sub.topics) sub.topics.forEach(function(topic) {
    total++;
    if (visited[modId + '/' + sub.id + '/' + topic.id]) done++;
  });
  return { total: total, done: done };
}


// ══════════════════════════════════════════════════
// BOOKMARKS / FAVORITES
// ══════════════════════════════════════════════════

var BOOKMARKS_KEY = 'gs_bookmarks';
var MAX_BOOKMARKS = 9;

function getBookmarks() {
  try { var r = localStorage.getItem(BOOKMARKS_KEY); return r ? JSON.parse(r) : []; }
  catch(e) { return []; }
}

function isBookmarked(id) {
  return getBookmarks().some(function(b) { return b.id === id; });
}

function showToast(msg) {
  // Remove existing toast
  var old = document.getElementById('gsToast');
  if (old) old.remove();
  var t = document.createElement('div');
  t.id = 'gsToast';
  t.className = 'gs-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  // Trigger animation
  requestAnimationFrame(function() { t.classList.add('visible'); });
  setTimeout(function() {
    t.classList.remove('visible');
    setTimeout(function() { t.remove(); }, 300);
  }, 3000);
}

function toggleBookmark(data) {
  // data = { id, icon, title, path, href, grad }
  try {
    var bm = getBookmarks();
    var idx = -1;
    bm.forEach(function(b, i) { if (b.id === data.id) idx = i; });
    if (idx >= 0) {
      // Remove
      bm.splice(idx, 1);
    } else {
      // Add — check limit
      if (bm.length >= MAX_BOOKMARKS) {
        showToast(tr('bookmarkLimitMsg'));
        return;
      }
      bm.unshift(data);
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bm));
  } catch(e) {}
  // Update all bookmark buttons on page (class + SVG)
  var nowBookmarked = isBookmarked(data.id);
  document.querySelectorAll('.bookmark-btn[data-id="' + data.id + '"]').forEach(function(btn) {
    btn.classList.toggle('active', nowBookmarked);
    btn.innerHTML = bookmarkStarSvg(nowBookmarked);
  });
}

function bookmarkStarSvg(filled) {
  return filled
    ? '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
}

function renderBookmarks() {
  var container = document.getElementById('bookmarksSlot');
  if (!container) return;
  var bm = getBookmarks();
  if (bm.length === 0) { container.style.display = 'none'; return; }

  var h = '<div class="section-label"><span>' + tr('bookmarksTitle') + '</span></div>';
  h += '<div class="bookmarks-grid">';
  bm.forEach(function(b) {
    h += '<div class="bookmark-card">';
    h += '<div class="bookmark-card-icon" style="background:' + (b.grad || catGradients.general) + '">' + b.icon + '</div>';
    h += '<a href="' + ROOT + b.href + '" class="bookmark-card-info">';
    h += '<div class="bookmark-card-title">' + localText(b.title) + '</div>';
    h += '<div class="bookmark-card-path">' + localText(b.path) + '</div>';
    h += '</a>';
    h += '<button class="bookmark-card-remove" onclick="removeBookmark(\'' + b.id + '\');renderBookmarks()" title="Remove">✕</button>';
    h += '</div>';
  });
  h += '</div>';
  container.innerHTML = h;
  container.style.display = 'block';
}

function removeBookmark(id) {
  try {
    var bm = getBookmarks().filter(function(b) { return b.id !== id; });
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bm));
  } catch(e) {}
}


// ══════════════════════════════════════════════════
// SKELETON LOADERS
// ══════════════════════════════════════════════════

function showSkeleton(containerId, count) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var h = '<div class="skeleton-grid">';
  for (var i = 0; i < (count || 4); i++) {
    h += '<div class="skeleton skeleton-card"></div>';
  }
  h += '</div>';
  el.innerHTML = h;
}


// ══════════════════════════════════════════════════
// KEYBOARD NAVIGATION (arrow keys on card grids)
// ══════════════════════════════════════════════════

function initKeyboardNav() {
  var kbdIdx = -1;

  document.addEventListener('keydown', function(e) {
    // Only act on arrow keys when not focused in input
    var tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;

    var cards = Array.from(document.querySelectorAll('.card-grid .card, .bookmarks-grid .bookmark-card, .recent-grid .recent-card'));
    if (cards.length === 0) return;

    // Remove old focus
    cards.forEach(function(c) { c.removeAttribute('data-kbd-focus'); });

    if (e.key === 'Enter' && kbdIdx >= 0 && kbdIdx < cards.length) {
      e.preventDefault();
      cards[kbdIdx].click();
      return;
    }

    var cols = Math.round(cards[0].parentElement.offsetWidth / cards[0].offsetWidth) || 1;
    var isRTL = document.documentElement.dir === 'rtl';

    if (e.key === 'ArrowRight') kbdIdx += isRTL ? -1 : 1;
    else if (e.key === 'ArrowLeft') kbdIdx += isRTL ? 1 : -1;
    else if (e.key === 'ArrowDown') kbdIdx += cols;
    else if (e.key === 'ArrowUp') kbdIdx -= cols;

    if (kbdIdx < 0) kbdIdx = 0;
    if (kbdIdx >= cards.length) kbdIdx = cards.length - 1;

    e.preventDefault();
    cards[kbdIdx].setAttribute('data-kbd-focus', '');
    cards[kbdIdx].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  // Clear kbd focus on mouse click
  document.addEventListener('click', function() {
    kbdIdx = -1;
    document.querySelectorAll('[data-kbd-focus]').forEach(function(c) { c.removeAttribute('data-kbd-focus'); });
  });
}

initKeyboardNav();


// ══════════════════════════════════════════════════
// READING PROGRESS BAR (for topic page)
// ══════════════════════════════════════════════════

function initReadingProgress() {
  var bar = document.createElement('div');
  bar.className = 'reading-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', function() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (h > 0) bar.style.width = Math.min(100, (window.scrollY / h) * 100) + '%';
  }, { passive: true });
}


// ══════════════════════════════════════════════════
// PAGINATION HELPER
// ══════════════════════════════════════════════════

var CHEVRON_LEFT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
var CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>';

function buildPagination(currentPage, totalPages, onClickFn) {
  if (totalPages <= 1) return '';
  var isRTL = document.documentElement.dir === 'rtl';
  var prevIcon = isRTL ? CHEVRON_RIGHT : CHEVRON_LEFT;
  var nextIcon = isRTL ? CHEVRON_LEFT : CHEVRON_RIGHT;

  var h = '<div class="pagination">';

  // Prev
  h += '<button class="page-btn" onclick="' + onClickFn + '(' + (currentPage - 1) + ')"' +
    (currentPage <= 1 ? ' disabled' : '') + '>' + prevIcon + '</button>';

  // Page numbers with ellipsis
  var pages = [];
  pages.push(1);
  if (currentPage > 3) pages.push('...');
  for (var i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }
  if (currentPage < totalPages - 2) pages.push('...');
  if (totalPages > 1) pages.push(totalPages);

  // Deduplicate
  var seen = {};
  pages.forEach(function(p) {
    var key = '' + p;
    if (seen[key]) return;
    seen[key] = true;
    if (p === '...') {
      h += '<span class="page-dots">…</span>';
    } else {
      h += '<button class="page-btn' + (p === currentPage ? ' active' : '') + '" onclick="' + onClickFn + '(' + p + ')">' + p + '</button>';
    }
  });

  // Next
  h += '<button class="page-btn" onclick="' + onClickFn + '(' + (currentPage + 1) + ')"' +
    (currentPage >= totalPages ? ' disabled' : '') + '>' + nextIcon + '</button>';

  h += '</div>';
  return h;
}


// ══════════════════════════════════════════════════
// SERVICE ACTION BUTTONS (sample / tutorial)
// ══════════════════════════════════════════════════

var playSvgSmall = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
var tutorialSvgSmall = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>';

function buildSvcActions(svc) {
  var h = '';
  if (!svc.sampleUrl && !svc.tutorialUrl) return h;
  h += '<div class="svc-actions">';
  if (svc.sampleUrl) {
    h += '<a href="' + svc.sampleUrl + '" target="_blank" rel="noopener" class="svc-action-btn svc-action-sample">' +
      playSvgSmall + ' ' + tr('svcSample') + '</a>';
  }
  if (svc.tutorialUrl) {
    h += '<a href="' + svc.tutorialUrl + '" target="_blank" rel="noopener" class="svc-action-btn svc-action-tutorial">' +
      tutorialSvgSmall + ' ' + tr('svcTutorial') + '</a>';
  }
  h += '</div>';
  return h;
}

