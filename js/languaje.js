let currentLang = localStorage.getItem('lang') || 'es';

function loadLang(lang, preserveScroll = false) {
  const savedScroll = window.scrollY;
  const loader = document.getElementById('lang-loader');

  if (loader) {
    loader.style.display = 'flex';
    loader.style.opacity = '1';
  }

  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.getElementById(key);
        if (el) {
          if (/<.*?>/.test(data[key])) {
            el.innerHTML = data[key];
          } else {
            el.textContent = data[key];
          }
        }
      }

      localStorage.setItem('lang', lang);

      if (preserveScroll) {
        setTimeout(() => {
          window.scrollTo({ top: savedScroll, behavior: 'instant' });
        }, 100);
      }

      setTimeout(() => {
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => (loader.style.display = 'none'), 500);
        }
      }, 2000);
    });
}

window.changeLanguage = function (lang) {
  const toast = document.getElementById('language-toast');
  const message = lang === 'es' ? 'Cambiando idioma...' : 'Changing language...';

  if (toast) {
    toast.textContent = message;
    toast.style.display = 'block';
  }

  setTimeout(() => {
    if (toast) toast.style.display = 'none';
    currentLang = lang;
    loadLang(lang);
    updateLangComboText(lang);
    highlightActiveLanguage(lang);
  }, 1500);
};


function getAllLangMenus() {
  return document.querySelectorAll(
    '[aria-labelledby="lang-toggle-desktop"], [aria-labelledby="lang-toggle-mobile"]'
  );
}

function updateLangComboText(lang) {
  getAllLangMenus().forEach(menu => {
    menu.querySelectorAll('.dropdown-item').forEach(item => {
      const match = item.getAttribute('onclick')?.match(/'(\w+)'/);
      const langCode = match && match[1];
      if (!langCode) return;

      if (langCode === 'es') {
        item.textContent = lang === 'es' ? 'Español' : 'Spanish';
      } else if (langCode === 'en') {
        item.textContent = lang === 'es' ? 'Inglés' : 'English';
      }
    });
  });
}

function highlightActiveLanguage(currentLang) {
  getAllLangMenus().forEach(menu => {
    menu.querySelectorAll('.dropdown-item').forEach(item => {
      item.classList.remove('active-lang');
      const match = item.getAttribute('onclick')?.match(/'(\w+)'/);
      const langCode = match && match[1];
      if (langCode === currentLang) item.classList.add('active-lang');
    });
  });
}


window.initLanguageUI = function () {
  currentLang = localStorage.getItem('lang') || 'es';
  loadLang(currentLang);
  updateLangComboText(currentLang);
  highlightActiveLanguage(currentLang);
};


document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('lang-toggle-desktop') || document.getElementById('lang-toggle-mobile')) {
    window.initLanguageUI();
  }
});
