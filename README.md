# Portafolio de Omar Bolaños

Portafolio de proyectos Full Stack, Python, aplicaciones móviles y hardware, con una identidad visual espacial.

**Sitio:** [shinradev.online](https://shinradev.online/)

**Vercel:** [portafolio-mu-gray.vercel.app](https://portafolio-mu-gray.vercel.app/)

**GitHub:** [Shinra3245](https://github.com/Shinra3245)

## Tecnologías

React 18, Vite, React Router, i18next (español/inglés), Three.js y React Three Fiber (fondo estrellado), GSAP y Anime.js (animación), Lenis (desplazamiento) y FormSubmit (formulario de contacto).

## Desarrollo local

Requiere Node.js compatible con Vite 5 y npm.

```bash
npm ci
npm run dev
```

Para compilar y revisar producción:

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
  App.jsx                 Rutas y carga diferida
  components/             Navegación, CV, certificados e interacciones
  sections/               Inicio, trayectoria, educación, GitHub y contacto
  pages/                  Explorador de proyectos
  data/                   Proyectos, experiencia, formación y contacto
  locales/                Traducciones activas es/en
  hooks/                  Desplazamiento y utilidades
  3d/                     Fondo estrellado
  assets/                 Imágenes, iconos, texturas y fuentes
public/
  CV.pdf                  CV original preservado
  CV-actualizado.pdf       Copia con contactos y dominio del portafolio
  videos/                 Demostraciones
scripts/
  optimize_assets.py      Genera copias WebP y actualiza referencias
tests/
  browser_smoke.py        Regresión de navegación, móvil e idiomas
```

`lang/` conserva archivos de una versión anterior; la aplicación actual utiliza `src/locales/`.

## Actualizar contenido

- Proyectos existentes: `src/data/projects.js`.
- Trayectoria y formación: `src/data/experience.js` y `src/data/education.js`.
- Correo, LinkedIn y enlaces principales: `src/data/profile.js`.
- Textos: `src/locales/es/translation.json` y `src/locales/en/translation.json`.

Las estadísticas se calculan a partir del catálogo y los certificados. No se deben incluir contraseñas ni credenciales administrativas en el frontend. Cambiar el correo en `profile.js` también requiere actualizar la copia del CV y confirmar la configuración del servicio FormSubmit.

Las imágenes originales se conservan; las referencias activas usan copias WebP. Para regenerarlas, con Pillow instalado:

```bash
python3 scripts/optimize_assets.py
```

## Validación

La prueba de navegador requiere Python, Playwright y Chromium. Con la vista previa activa:

```bash
python3 tests/browser_smoke.py --base-url http://localhost:4173
```

Comprueba navegación de ida y vuelta, filtros, fichas, funcionalidades, menú a diferentes anchos, traducciones regionales y descarga del CV. No envía mensajes reales ni verifica recepción de correo o hardware físico.

## Despliegue

El repositorio está conectado con Vercel: publicar en `main` genera el despliegue de producción. `vercel.json` permite abrir directamente rutas como `/proyectos`. Después de publicar, se debe confirmar el estado del despliegue y repetir las pruebas contra su URL pública.

## Autoría

© Omar Bolaños. Derechos reservados. Este repositorio contiene el código del portafolio y su documentación.
