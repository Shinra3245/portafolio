
const servicesStepDetails = {
    1: {
        title: "🔍 Consultoría & Análisis Inicial",
        description: "Analizamos objetivos, audiencia y requisitos para definir la estrategia perfecta.",
        features: ["Análisis de necesidades", "Definición de objetivos", "Estudio de competencia", "Propuesta personalizada"]
    },
    2: {
        title: "🎨 Diseño & Prototipado Visual",
        description: "Mockups y prototipos para ver tu sitio antes de desarrollarlo.",
        features: ["Mockups interactivos", "Paleta de colores", "Tipografía personalizada", "Responsive design"]
    },
    3: {
        title: "💻 Desarrollo & Programación",
        description: "Transformo el diseño en un sitio rápido, seguro y escalable.",
        features: ["Código limpio y escalable", "Tecnologías modernas", "Optimización de rendimiento", "Seguridad implementada"]
    },
    4: {
        title: "🧪 Testing & Optimización",
        description: "Pruebas en dispositivos/navegadores y mejora de usabilidad y velocidad.",
        features: ["Pruebas multidispositivo", "Optimización de velocidad", "Testing de usabilidad", "Corrección de bugs"]
    },
    5: {
        title: "🚀 Lanzamiento & Soporte Continuo",
        description: "Deploy, capacitación, soporte y actualizaciones cuando las necesites.",
        features: ["Deploy profesional", "Capacitación incluida", "Soporte post-lanzamiento", "Actualizaciones periódicas"]
    },
    6: {
        title: "♻️ Mejora continua & Mantenimiento",
        description: "Monitoreo, ajustes y nuevas iteraciones para mantener y potenciar tu producto.",
        features: [
            "Monitoreo y analítica",
            "Parcheo de seguridad",
            "Optimización periódica",
            "Iteraciones basadas en feedback"
        ]
    }
};

function updateActiveServicePanel() {
    const activeStep = document.querySelector('.process-step.selected');
    if (activeStep && currentServicesStepDetails) {
        const stepNumber = activeStep.dataset.step;
        const data = currentServicesStepDetails[stepNumber];
        if (data) {
            updatePanel(data);
        }
    }
}

(function initServicesOrbit() {
    const section = document.getElementById('section_6');
    if (!section) return;

    const orbit = section.querySelector('.process-orbit');
    const container = document.getElementById('services-orbit-container');
    const detailsPanel = document.getElementById('services-step-details');
    const titleEl = document.getElementById('detail-title');
    const descEl = document.getElementById('detail-description');
    const featuresEl = document.getElementById('detail-features');


    const counterEls = section.querySelectorAll(
        '.process-step .step-number, .process-step .step-title, .process-step lord-icon'
    );
    const setCounterState = (state) =>
        counterEls.forEach(el => el.style.animationPlayState = state);


    const isMobile = () => window.innerWidth <= 768;


    const updatePanel = (data) => {
        const titleEl = document.getElementById('detail-title');
        const descEl = document.getElementById('detail-description');
        const featuresEl = document.getElementById('detail-features');

        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.description;
        if (featuresEl) {
            featuresEl.innerHTML = '';
            if (data.features && Array.isArray(data.features)) {
                data.features.forEach(f => {
                    const div = document.createElement('div');
                    div.className = 'detail-feature';
                    div.textContent = f;
                    featuresEl.appendChild(div);
                });
            }
        }
    };

    const clearSelected = () =>
        section.querySelectorAll('.process-step.selected')
            .forEach(s => s.classList.remove('selected'));

    const openDetails = (stepEl) => {
        const n = stepEl.dataset.step;
        const data = currentServicesStepDetails[n];
        if (!data) return;

        updatePanel(data);
        detailsPanel.classList.add('active');
        clearSelected();
        stepEl.classList.add('selected');

        if (orbit) orbit.style.animationPlayState = 'paused';
        setCounterState('paused');


        if (isMobile()) {
            detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const closeDetails = () => {
        detailsPanel.classList.remove('active');
        clearSelected();
        if (orbit) orbit.style.animationPlayState = 'running';
        setCounterState('running');
    };


    container.style.opacity = '0';
    container.style.transform = 'scale(0.8)';
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }, 350);


    section.querySelectorAll('.process-step').forEach(step => {

        step.addEventListener('mouseenter', () => {
            if (!isMobile()) openDetails(step);
        });
        step.addEventListener('mouseleave', () => {
            if (!isMobile()) closeDetails();
        });


        step.addEventListener('click', (e) => {
            e.stopPropagation();
            openDetails(step);
        });
    });


    container.addEventListener('mouseleave', () => {
        if (!isMobile()) closeDetails();
    });


    document.addEventListener('click', (e) => {
        if (!isMobile()) return;
        const inside = container.contains(e.target) || detailsPanel.contains(e.target);
        if (!inside) closeDetails();
    });


    window.addEventListener('resize', () => {

    });
})();
