# Esteban Girón Herrera — Portafolio

Portafolio profesional de **Esteban Girón Herrera**, estudiante de Ingeniería de Sistemas y
desarrollador Full Stack con enfoque en Frontend. Construido con React + Vite, muestra el
proyecto destacado **TableMaster** y el stack técnico completo.

🔗 Demo: _agrega aquí tu URL de despliegue_

---

## ✨ Características

- Landing page con hero animado y snippet de código en vivo (extraído de TableMaster).
- Secciones: Hero, Sobre mí, Habilidades, Proyectos, Trayectoria y Contacto.
- Riel de navegación tipo "bracket" (inspirado en las llaves de TableMaster) con scroll-spy.
- Caso de estudio completo de TableMaster: problema, solución, arquitectura y retos técnicos.
- Diseño oscuro, minimalista, 100% responsive (mobile-first).
- Animaciones discretas con Framer Motion y `prefers-reduced-motion` respetado.
- SEO listo: meta tags, Open Graph, Twitter Card y favicon.

## 🛠️ Tecnologías

| Categoría | Tecnologías |
|---|---|
| Frontend | React, Vite, Tailwind CSS, Framer Motion, Lucide Icons |
| Calidad | ESLint |
| Despliegue | Vercel / Netlify |

## 📁 Estructura del proyecto

```
src/
├── components/     # Navbar, Footer, botones, badges, riel de navegación, etc.
├── sections/        # Hero, About, Skills, Projects, Timeline, Contact
├── data/             # Contenido editable: skills.js, projects.js, timeline.js
├── hooks/            # useReveal (animaciones), useActiveSection (scroll-spy)
├── App.jsx
├── main.jsx
└── index.css
public/
├── favicon.svg
├── cv-esteban-giron.pdf   ← reemplázalo con tu CV real
└── og-cover.png            ← reemplázalo con tu imagen de vista previa (1200x630)
```

## 🚀 Instalación

Requisitos: Node.js 18+ y `pnpm` (o `npm`/`yarn`).

```bash
# instalar dependencias
pnpm install
# o: npm install

# levantar entorno de desarrollo
pnpm dev
# o: npm run dev
```

El proyecto quedará disponible en `http://localhost:5173`.

## 📦 Scripts disponibles

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción en /dist
pnpm preview   # sirve el build de producción localmente
pnpm lint      # revisa el código con ESLint
```

## ✏️ Personalizar el contenido

Todo el contenido editable vive en `src/data/`:

- `projects.js` — agrega o edita proyectos (incluido TableMaster).
- `skills.js` — categorías y tecnologías mostradas en Habilidades.
- `timeline.js` — hitos de la sección "Mi trayectoria".

Los enlaces de contacto y redes se editan directamente en `src/sections/Contact.jsx`,
`src/components/Footer.jsx` y `src/components/Navbar.jsx`.

Antes de publicar, reemplaza:
1. `public/cv-esteban-giron.pdf` por tu hoja de vida real.
2. `public/og-cover.png` por una imagen de vista previa (1200×630 px).
3. Los enlaces de GitHub, LinkedIn y email por los tuyos.

## ☁️ Despliegue

### Vercel

```bash
npm install -g vercel
vercel
```

O conecta el repositorio de GitHub directamente en [vercel.com/new](https://vercel.com/new):
Vercel detecta Vite automáticamente (`build command: vite build`, `output dir: dist`).

### Netlify

1. Sube el repositorio a GitHub.
2. En Netlify: **Add new site → Import an existing project**.
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy.

## 📈 Recomendaciones para reforzar el perfil profesional

- Despliega también el backend de TableMaster (Render, Railway o Fly.io) y enlaza la API
  documentada con Swagger desde la sección de proyectos.
- Agrega capturas reales de TableMaster en `src/data/projects.js` (campo `image`) una vez
  tengas el producto desplegado.
- Suma 1-2 proyectos adicionales, aunque sean pequeños, en el espacio reservado de Proyectos.
- Mantén el CV en PDF sincronizado con lo que muestra este portafolio.
- Conecta un dominio propio (ej. `estebangiron.dev`) para mayor credibilidad frente a reclutadores.

---

Hecho con React + Vite · Esteban Girón Herrera · Bogotá, Colombia
