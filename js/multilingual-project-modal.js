let projectTranslations = null;
async function loadProjectTranslations() {
    const currentLanguage = localStorage.getItem('lang') || 'es';

    try {
        const response = await fetch(`./lang/projects-${currentLanguage}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        projectTranslations = await response.json();
    } catch (error) {
        console.error('Error cargando traducciones de proyectos:', error);

        if (currentLanguage !== 'es') {
            try {
                const fallbackResponse = await fetch('./lang/projects-es.json');
                projectTranslations = await fallbackResponse.json();
            } catch (fallbackError) {
                console.error('Error cargando traducciones de fallback:', fallbackError);
                projectTranslations = null;
            }
        }
    }
}


function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'es';
}


async function showProjectDetails(projectType) {
    const currentLanguage = getCurrentLanguage();


    if (!projectTranslations) {
        await loadProjectTranslations();
    }


    if (!projectTranslations || !projectTranslations[projectType]) {
        console.warn(`Traducciones no encontradas para ${projectType} en idioma ${currentLanguage}`);

        showFallbackModal(projectType);
        return;
    }

    const project = projectTranslations[projectType];


    const content = generateProjectModalContent(project, projectType);

    showModal(content);
}


function showAccessCredentials() {
    const currentLanguage = getCurrentLanguage();
    const isEnglish = currentLanguage === 'en';
    
    const content = `
        <h3>${isEnglish ? 'Test Access Credentials' : 'Accesos de Prueba'}</h3>
        <div style="text-align: left; margin: 25px 0;">
            
            <div style="background: rgba(255, 193, 7, 0.1); border: 2px solid #ffc107; border-radius: 10px; padding: 20px; margin: 15px 0;">
                <h4 style="color: #ffc107; margin-bottom: 15px; text-align: center;">${isEnglish ? 'Access Credentials' : 'Credenciales de Acceso'}</h4>
                
                <div style="margin-bottom: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <h5 style="color: #ffc107; margin-bottom: 8px;">${isEnglish ? 'Administrator' : 'Administrador'}</h5>
                    <p style="margin: 5px 0;"><strong>Email:</strong> AdminPanaderia@gmail.com</p>
                    <p style="margin: 5px 0;"><strong>${isEnglish ? 'Password' : 'Contraseña'}:</strong> 123</p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <h5 style="color: #ffc107; margin-bottom: 8px;">${isEnglish ? 'Customer User' : 'Usuario Cliente'}</h5>
                    <p style="margin: 5px 0;"><strong>Email:</strong> usuario@panaderia.com</p>
                    <p style="margin: 5px 0;"><strong>${isEnglish ? 'Password' : 'Contraseña'}:</strong> 123</p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <h5 style="color: #ffc107; margin-bottom: 8px;">${isEnglish ? 'Employee' : 'Empleado'}</h5>
                    <p style="margin: 5px 0;"><strong>Email:</strong> empleado@panaderia.com</p>
                    <p style="margin: 5px 0;"><strong>${isEnglish ? 'Password' : 'Contraseña'}:</strong> 123</p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding: 15px; background: rgba(76, 175, 80, 0.1); border: 1px solid #4CAF50; border-radius: 8px;">
                    <p style="color: #4CAF50; margin: 0; font-weight: bold;">${isEnglish ? 'Tip: Try different roles to see specific functionalities' : 'Tip: Prueba con diferentes roles para ver las funcionalidades específicas'}</p>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="window.open('https://panaderia-la-flor.infy.uk', '_blank')" 
                    style="
                        background: linear-gradient(45deg, #ffc107, #ff8f00) !important;
                        color: #000 !important;
                        border: none !important;
                        padding: 12px 24px !important;
                        border-radius: 8px !important;
                        cursor: pointer !important;
                        font-weight: bold !important;
                        margin-right: 10px !important;
                        font-size: 1rem !important;
                        transition: all 0.3s ease !important;
                        box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
                    "
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 193, 7, 0.4)'"
                    onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 4px 15px rgba(255, 193, 7, 0.3)'">
                    ${isEnglish ? 'Go to Bakery' : 'Ir a la Panadería'}
            </button>
            <button onclick="closeModal()" 
                    style="
                        background: rgba(255,255,255,0.1) !important;
                        color: #fff !important;
                        border: 1px solid rgba(255,255,255,0.3) !important;
                        padding: 12px 24px !important;
                        border-radius: 8px !important;
                        cursor: pointer !important;
                        font-size: 1rem !important;
                        transition: all 0.3s ease !important;
                    "
                    onmouseover="this.style.background='rgba(255,255,255,0.2)'"
                    onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                ${isEnglish ? 'Close' : 'Cerrar'}
            </button>
        </div>
    `;

    showModal(content);
}


function generateProjectModalContent(project, projectType) {
    return `
        <div class="project-details-container">
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-badge">${project.badge}</span>
            </div>
            
            <div class="content-grid">
                <div class="features-section">
                    <div class="section-header">
                        <h4>
                            <svg class="btn-icon">
                                <use href="/icons/light-bulb.svg#light-bulb"></use>
                            </svg>
                            ${project.features.title}
                        </h4>
                    </div>
                    <div class="features-list">
                        ${project.features.items.map(feature => `
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <svg class="icon">
                                        <use href="/icons/${feature.icon}.svg#${feature.icon}"></use>
                                    </svg>
                                </div>
                                <div class="feature-content">
                                    <strong>${feature.title}</strong>
                                    <span>${feature.description}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-section">
                    <div class="section-header">
                        <h4>
                            <svg class="btn-icon">
                                <use href="/icons/technology.svg#technology"></use>
                            </svg>
                            ${project.tech.title}
                        </h4>
                    </div>
                    <div class="tech-stack">
                        ${project.tech.categories.map(category => `
                            <div class="tech-category">
                                <div class="tech-label">${category.label}</div>
                                <div class="tech-tags">
                                    ${category.tags.map(tag => `
                                        <span class="tech-tag ${tag.class || ''}">${tag.name}</span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="action-footer">
                <button onclick="window.open('${project.url}', '_blank')" 
                        class="cta-button">
                    <svg class="btn-icon-page">
                        <use href="/icons/${project.button.icon}.svg#${project.button.icon}"></use>
                    </svg>
                    ${project.button.text}
                    <span class="button-arrow">→</span>
                </button>
            </div>
        </div>

        <style>
            ${getModalStyles()}
        </style>
    `;
}


function showFallbackModal(projectType) {
    const currentLanguage = getCurrentLanguage();
    const isEnglish = currentLanguage === 'en';

    const content = `
        <div style="
            text-align: center; 
            padding: 50px; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        ">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${isEnglish ? 'Project Details' : 'Detalles del Proyecto'}</h1>
            <p style="font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9;">${isEnglish ? 'Information not available at the moment' : 'Información no disponible en este momento'}</p>
            <button onclick="closeModal()" style="
                color: white; 
                text-decoration: none; 
                background: rgba(255,255,255,0.2);
                padding: 10px 20px;
                border-radius: 25px;
                transition: all 0.3s ease;
                display: inline-block;
                border: none;
                cursor: pointer;
                font-size: 1.1rem;
            " onmouseover="this.style.background='rgba(255,255,255,0.3)'" 
               onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                ${isEnglish ? 'Close' : 'Cerrar'}
            </button>
        </div>
    `;

    showModal(content);
}


function getModalStyles() {
    return `
        .project-details-container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            padding: 30px;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .project-header {
            text-align: center;
            margin-bottom: 30px;
            position: relative;
        }
        
        .project-header h3 {
            font-size: 2.2rem;
            margin: 0 0 10px 0;
            font-weight: 700;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .project-badge {
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .section-header h4 {
            font-size: 1.3rem;
            margin: 0 0 20px 0;
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 600;
        }
        
        .section-header .icon {
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
        }
        
        .features-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        
        .feature-item:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.15);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
            min-width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
        }
        
        .feature-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        
        .feature-content strong {
            font-weight: 600;
            font-size: 1rem;
        }
        
        .feature-content span {
            font-size: 0.85rem;
            opacity: 0.9;
            line-height: 1.4;
        }
        
        .tech-stack {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .tech-category {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .tech-label {
            font-weight: 600;
            margin-bottom: 10px;
            font-size: 0.95rem;
            opacity: 0.9;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .tech-tag {
            background: rgba(255,255,255,0.2);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
            background: rgba(255,255,255,0.3);
            transform: scale(1.05);
        }
        
       
        .tech-tag.html { background: rgba(227, 76, 38, 0.3); }
        .tech-tag.css { background: rgba(21, 114, 182, 0.3); }
        .tech-tag.js { background: rgba(247, 223, 30, 0.3); }
        .tech-tag.bootstrap { background: rgba(86, 61, 124, 0.3); }
        .tech-tag.php { background: rgba(119, 123, 180, 0.3); }
        .tech-tag.mysql { background: rgba(0, 117, 143, 0.3); }
        .tech-tag.security { background: rgba(220, 53, 69, 0.3); }
        .tech-tag.api { background: rgba(52, 168, 83, 0.3); }
        .tech-tag.mvc { background: rgba(139, 69, 19, 0.3); }
        .tech-tag.organization { background: rgba(75, 0, 130, 0.3); }
        .tech-tag.database { background: rgba(0, 128, 0, 0.3); }
        .tech-tag.performance { background: rgba(255, 165, 0, 0.3); }
        .tech-tag.cache { background: rgba(70, 130, 180, 0.3); }
        .tech-tag.optimization { background: rgba(255, 20, 147, 0.3); }
        .tech-tag.validation { background: rgba(220, 53, 69, 0.3); }
        .tech-tag.animations { background: rgba(255, 99, 132, 0.3); }
        .tech-tag.professional { background: rgba(54, 162, 235, 0.3); }
        .tech-tag.grid { background: rgba(255, 205, 86, 0.3); }
        .tech-tag.icons { background: rgba(75, 192, 192, 0.3); }
        .tech-tag.modern { background: rgba(153, 102, 255, 0.3); }
        .tech-tag.colors { background: rgba(255, 159, 64, 0.3); }
        .tech-tag.design { background: rgba(255, 105, 180, 0.3); }
        .tech-tag.seo { background: rgba(76, 175, 80, 0.3); }
        .tech-tag.accessibility { background: rgba(63, 81, 181, 0.3); }
        .tech-tag.responsive { background: rgba(86, 61, 124, 0.3); }
        .tech-tag.color-primary { background: #1a1a2e; border-color: #fff; }
        .tech-tag.color-secondary { background: #16213e; border-color: #fff; }
        .tech-tag.color-accent { background: #ffc107; color: #000; }
        .tech-tag.color-gradient { background: linear-gradient(45deg, #667eea, #764ba2); }
        .tech-tag.tiendanube { background: rgba(0, 168, 255, 0.3); }
        .tech-tag.inventory { background: rgba(121, 85, 72, 0.3); }
        .tech-tag.shipping { background: rgba(63, 81, 181, 0.3); }
        .tech-tag.sports { background: rgba(244, 67, 54, 0.3); }
        .tech-tag.customization { background: rgba(233, 30, 99, 0.3); }
        .tech-tag.payments { background: rgba(46, 125, 50, 0.3); }
        
        .action-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        .cta-button {
            background: linear-gradient(45deg, #ffc107, #ff8f00);
            color: #000;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(255, 193, 7, 0.4);
            background: linear-gradient(45deg, #ffcd38, #ffa000);
        }
        
        .btn-icon {
            width: 50px;
            height: 50px;
            display: block;
        }

        .btn-icon-page {
            width: 30px;
            height: 30px;
            display: block;
        }

        .icon:not(.section-header .icon) {
            inline-size: 30px;
            block-size: 30px;
            aspect-ratio: 1/1;
            display: block;
            transform: translateY(0px);
        }
        
        .button-arrow {
            font-size: 1.1rem;
            transition: transform 0.3s ease;
        }
        
        .cta-button:hover .button-arrow {
            transform: translateX(5px);
        }
        
        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .project-details-container {
                padding: 20px;
                margin: 10px;
            }
            
            .feature-item {
                padding: 12px;
            }
            
            .tech-tags {
                gap: 6px;
            }
            
            .tech-tag {
                font-size: 0.75rem;
                padding: 5px 10px;
            }
        }
    `;
}


function showModal(content) {
    const modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(8px);
        " onclick="if(event.target === this) closeModal()">
            <div style="
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                padding: 30px;
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                text-align: center;
                color: #fff;
                position: relative;
                box-shadow: 0 25px 50px rgba(0,0,0,0.5);
                border: 1px solid rgba(255, 193, 7, 0.2);
            ">
                <button onclick="closeModal()" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                ${content}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}


function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) modal.remove();
}


function resetProjectTranslations() {
    projectTranslations = null;
}


window.showProjectDetails = showProjectDetails;
window.showAccessCredentials = showAccessCredentials;
window.closeModal = closeModal;
window.resetProjectTranslations = resetProjectTranslations;
window.loadProjectTranslations = loadProjectTranslations;