# Script de Arquitectura

Este script define la arquitectura y estructura del proyecto.

## 🏗️ Arquitectura del Proyecto

### Frontend Stack
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modulares con variables CSS
- **JavaScript ES6+**: Módulos con import/export
- **Ionicons**: Biblioteca de iconos
- **Google Fonts**: Tipografía Poppins

### Patrón de Diseño
- **Modular**: Componentes separados e independientes
- **Mobile-First**: Diseño responsive desde móvil
- **Progressive Enhancement**: Funcionalidad básica sin JS

### Estructura de Archivos

```
diego-ortega-portafolio/
├── index.html                 # Punto de entrada
├── 404.html                   # Página de error
├── README.md                  # Documentación principal
├── AGENTS.md                  # Reglas para agentes IA
├── CV.md                      # CV en markdown
├── .gitignore                 # Archivos ignorados por Git
│
├── src/
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css  # Variables CSS
│   │   │   ├── reset.css      # Reset CSS
│   │   │   └── utilities.css  # Clases utilitarias
│   │   ├── layout/
│   │   │   └── main.css       # Layout principal
│   │   ├── components/
│   │   │   ├── sidebar.css    # Estilos del sidebar
│   │   │   ├── navbar.css     # Estilos del navbar
│   │   │   ├── about.css      # Sección Sobre Mí
│   │   │   ├── resume.css     # Sección Currículum
│   │   │   ├── portfolio.css  # Sección Portafolio
│   │   │   └── contact.css    # Sección Contacto
│   │   ├── responsive/
│   │   │   ├── mobile.css     # Estilos móvil
│   │   │   ├── tablet.css     # Estilos tablet
│   │   │   └── desktop.css    # Estilos desktop
│   │   └── styles.css         # Archivo principal (imports)
│   │
│   ├── js/
│   │   ├── components/
│   │   │   ├── sidebar.js     # Lógica del sidebar
│   │   │   ├── navigation.js  # Sistema de navegación
│   │   │   ├── portfolio.js   # Filtros de portafolio
│   │   │   └── contactForm.js # Formulario de contacto
│   │   ├── utils/
│   │   │   └── helpers.js     # Funciones auxiliares
│   │   └── main.js            # Punto de entrada JS
│   │
│   └── assets/
│       ├── images/
│       │   ├── profile/       # Fotos de perfil
│       │   ├── projects/      # Imágenes de proyectos
│       │   └── og-image.svg   # Imagen para redes sociales
│       └── icons/
│           ├── favicon.svg    # Favicon del sitio
│           ├── navbar/        # Iconos de navegación
│           ├── sidebar/       # Iconos del sidebar
│           ├── services/      # Iconos de servicios
│           └── skills/        # Iconos de habilidades
│
├── scripts/
│   ├── run-architecture.md    # Este archivo
│   └── run-pm.md             # Script de gestión de proyectos
│
└── .github/
    └── workflows/
        └── pages.yml          # GitHub Actions para deploy
```

### Flujo de Datos

```
index.html (estructura)
    ↓
src/css/styles.css (importa todos los CSS)
    ↓
src/js/main.js (inicializa componentes)
    ↓
componentes individuales (sidebar, navigation, portfolio, contact)
```

### Componentes Principales

1. **Sidebar**: Información de contacto y redes sociales
2. **Navbar**: Navegación entre secciones
3. **About**: Presentación, servicios y habilidades
4. **Resume**: Experiencia laboral y educación
5. **Portfolio**: Proyectos con sistema de filtros
6. **Contact**: Formulario de contacto

### Responsive Breakpoints

- **Mobile**: < 580px
- **Tablet**: 580px - 1024px
- **Desktop**: > 1024px

### Deploy

- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **URL**: https://danirak.github.io/diego-ortega-portafolio/
