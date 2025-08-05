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
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
            }, 2000);
        });
}

window.changeLanguage = function (lang) {
    const toast = document.getElementById('language-toast');

    // Mostrar mensaje según el idioma al que VAS A cambiar, no el anterior
    const message = lang === 'es' ? 'Cambiando idioma...' : 'Changing language...';

    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
        currentLang = lang;
        loadLang(lang);
        updateLangComboText(lang);
        highlightActiveLanguage(lang);
    }, 1500);
};


function updateLangComboText(lang) {
    const langItems = document.querySelectorAll('#lang-toggle + .dropdown-menu .dropdown-item');

    langItems.forEach(item => {
        const langCode = item.getAttribute('onclick').match(/'(\w+)'/)[1];

        if (langCode === 'es') {
            item.textContent = lang === 'es' ? 'Español' : 'Spanish';
        } else if (langCode === 'en') {
            item.textContent = lang === 'es' ? 'Inglés' : 'English';
        }
    });
}

function highlightActiveLanguage(currentLang) {
    const langItems = document.querySelectorAll('#lang-toggle + .dropdown-menu .dropdown-item');
    langItems.forEach(item => {
        item.classList.remove('active-lang');

        const langCode = item.getAttribute('onclick').match(/'(\w+)'/)[1];
        if (langCode === currentLang) {
            item.classList.add('active-lang');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLang(currentLang);
    updateLangComboText(currentLang);
    highlightActiveLanguage(currentLang); // ✅ aplicar resaltado al cargar

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {});
    }
});