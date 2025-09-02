
fetch('404.html')
    .then(res => res.text())
    .then(data => {
        document.body.innerHTML = data;
        const scripts = document.body.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const script = scripts[i];
            const newScript = document.createElement('script');

            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }

            document.head.appendChild(newScript);
            script.remove();
        }
        if (window.initLanguageUI) window.initLanguageUI();
    })
    .catch(error => {
        console.error('Error cargando la página 404:', error);
        document.body.innerHTML = `
                <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                    <h1 style="color: #667eea; font-size: 4rem;">404</h1>
                    <p style="font-size: 1.2rem; color: #666;">Página no encontrada</p>
                    <a href="/" style="color: #667eea; text-decoration: none;">← Regresar al inicio</a>
                </div>
            `;
    });
