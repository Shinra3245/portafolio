let currentLang = localStorage.getItem('lang') || 'es';

function loadLang(lang, preserveScroll = false) {
    const savedScroll = window.scrollY;
    const loader = document.getElementById('lang-loader');

    // Mostrar loader
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

            // Ocultar loader suavemente después de 2 segundos
            setTimeout(() => {
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
            }, 2000); // ← Duración de la carga
        });
}

window.changeLanguage = function (lang) {
    const toast = document.getElementById('language-toast');

    // Determina el mensaje dependiendo del idioma actual
    const message = currentLang === 'es' ? 'Cambiando idioma...' : 'Changing language...';

    // Mostrar el mensaje
    toast.textContent = message;
    toast.style.display = 'block';

    // Ocultar después de 1.5 segundos
    setTimeout(() => {
        toast.style.display = 'none';
        currentLang = lang;
        loadLang(lang); // Aquí actualizas los textos como ya lo hacías

        // También actualizamos los textos del combo para reflejar el idioma correcto
        updateLangComboText(lang);
    }, 1500);
};

function updateLangComboText(lang) {
    const langItems = document.querySelectorAll('#lang-toggle + .dropdown-menu .dropdown-item');

    langItems.forEach(item => {
        const langCode = item.getAttribute('onclick').match(/'(\w+)'/)[1];

        if (lang === 'es') {
            item.textContent = langCode === 'es' ? 'Español' : 'Inglés';
        } else {
            item.textContent = langCode === 'es' ? 'Spanish' : 'English';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadLang(currentLang);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {});
    }
});
