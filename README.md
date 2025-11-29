# Diego Ortega - Portafolio Personal

Portafolio profesional moderno y completamente responsive, construido con HTML, CSS y JavaScript puro.

## ✨ Características

- 🎨 Diseño moderno con tema oscuro
- 📱 Totalmente responsive (móvil, tablet, escritorio)
- 🚀 Navegación por pestañas fluida
- 🎯 Sistema de filtros para proyectos
- ⚡ Animaciones suaves y transiciones
- 📧 Formulario de contacto funcional
- 🌐 Desplegado automáticamente en GitHub Pages

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript**: Vanilla JS para funcionalidad interactiva
- **Ionicons**: Biblioteca de iconos
- **Google Fonts**: Tipografía Poppins

## 📂 Estructura del Proyecto

```
diego-ortega-portafolio/
├── index.html                 # Página principal
├── 404.html                   # Página de error personalizada
├── README.md                  # Este archivo
├── AGENTS.md                  # Reglas para agentes IA
├── CV.md                      # Currículum en markdown
├── .gitignore                 # Archivos ignorados
│
├── src/
│   ├── css/
│   │   ├── base/              # Estilos base
│   │   │   ├── variables.css  # Variables CSS
│   │   │   ├── reset.css      # Reset CSS
│   │   │   └── utilities.css  # Clases utilitarias
│   │   ├── layout/            # Layout principal
│   │   │   └── main.css       # Estructura main
│   │   ├── components/        # Componentes
│   │   │   ├── sidebar.css    # Sidebar
│   │   │   ├── navbar.css     # Navegación
│   │   │   ├── about.css      # Sobre Mí
│   │   │   ├── resume.css     # Currículum
│   │   │   ├── portfolio.css  # Portafolio
│   │   │   └── contact.css    # Contacto
│   │   ├── responsive/        # Media queries
│   │   │   ├── mobile.css     # Móvil
│   │   │   ├── tablet.css     # Tablet
│   │   │   └── desktop.css    # Desktop
│   │   └── styles.css         # Archivo principal
│   │
│   ├── js/
│   │   ├── components/        # Módulos de componentes
│   │   │   ├── sidebar.js     # Lógica del sidebar
│   │   │   ├── navigation.js  # Sistema de navegación
│   │   │   ├── portfolio.js   # Filtros de portafolio
│   │   │   └── contactForm.js # Formulario de contacto
│   │   ├── utils/             # Utilidades
│   │   │   └── helpers.js     # Funciones auxiliares
│   │   └── main.js            # Punto de entrada JS
│   │
│   └── assets/
│       ├── images/            # Imágenes
│       │   ├── profile/       # Fotos de perfil
│       │   ├── projects/      # Imágenes de proyectos
│       │   └── og-image.svg   # Open Graph image
│       └── icons/             # Iconos
│           ├── favicon.svg    # Favicon
│           ├── navbar/        # Iconos navegación
│           ├── sidebar/       # Iconos sidebar
│           ├── services/      # Iconos servicios
│           └── skills/        # Iconos habilidades
│
├── scripts/                   # Scripts de automatización
│   ├── run-architecture.md    # Documentación de arquitectura
│   └── run-pm.md             # Gestión de proyectos
│
└── .github/
    └── workflows/
        └── pages.yml          # GitHub Actions
```

## 🎯 Secciones

1. **Sobre Mí**: Introducción, servicios y habilidades técnicas con barras de progreso
2. **Currículum**: Experiencia laboral, educación y competencias profesionales
3. **Portafolio**: Proyectos destacados con sistema de filtros (IoT, Web, Cloud)
4. **Contacto**: Formulario de contacto funcional con validación

## 🏗️ Arquitectura

El proyecto sigue una **arquitectura modular** con separación de responsabilidades:

- **HTML**: Estructura semántica en `index.html`
- **CSS**: Módulos separados por responsabilidad (base, layout, components, responsive)
- **JavaScript**: Módulos ES6 con import/export
- **Assets**: Organización por tipo (images, icons) y contexto (profile, projects, navbar, etc.)

Para más detalles, consulta [`scripts/run-architecture.md`](scripts/run-architecture.md).

## 🚀 Despliegue Automático

El sitio se actualiza automáticamente cuando se hacen cambios en la rama `main` gracias a GitHub Actions.

## 🌐 URL del Sitio

https://danirak.github.io/diego-ortega-portafolio/

## 💻 Desarrollo Local

Para ver el sitio localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/Danirak/diego-ortega-portafolio.git
```

2. Abre `index.html` en tu navegador web favorito

No se requieren dependencias ni instalación adicional.

## 📝 Personalización

### Modificar Contenido

- **Información personal**: Edita las secciones en `index.html`
- **Estilos y colores**: Modifica las variables CSS en `:root` en `styles.css`
- **Comportamiento**: Ajusta la funcionalidad en `script.js`

### Variables CSS Principales

```css
--orange-yellow-crayola: hsl(45, 100%, 72%);  /* Color principal */
--smoky-black: hsl(0, 0%, 7%);                 /* Fondo */
--eerie-black-2: hsl(240, 2%, 12%);           /* Tarjetas */
```

## 📧 Contacto

- **Email**: 11.diego.ortega@gmail.com
- **LinkedIn**: [diego-ortega-5801b2206](https://www.linkedin.com/in/diego-ortega-5801b2206)
- **GitHub**: [Danirak](https://github.com/Danirak)
- **Teléfono**: +56 9 6344 5586

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes usar este código como base para tu propio portafolio.

## 🙏 Créditos

Diseño inspirado en el proyecto [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) con modificaciones y mejoras personalizadas.