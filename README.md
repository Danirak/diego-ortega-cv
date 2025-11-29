<div align="center">

# 🚀 Diego Ortega - Portfolio Personal

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://danirak.github.io/diego-ortega-portafolio)
[![GitHub Pages](https://img.shields.io/github/deployments/Danirak/diego-ortega-portafolio/github-pages?label=Deploy&style=for-the-badge)](https://github.com/Danirak/diego-ortega-portafolio/deployments)

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Portfolio profesional moderno y totalmente responsive, desarrollado como Single Page Application (SPA) con arquitectura component-based y sistema de temas dinámico día/noche.

[🌐 Ver Demo](https://danirak.github.io/diego-ortega-portafolio) · [📖 Documentación](./ARCHITECTURE.md) · [🐛 Reportar Bug](https://github.com/Danirak/diego-ortega-portafolio/issues)

</div>

---

## ✨ Características

- 🎨 **Sistema de Temas Dinámico** - Cambio automático día/noche basado en hora local (6AM-6PM)
- 📱 **Totalmente Responsive** - Diseño adaptativo para todos los dispositivos
- ⚡ **Performance Optimizado** - Build con Vite, lazy loading y assets optimizados
- 🔒 **Type-Safe** - TypeScript estricto con interfaces completas
- 🎯 **Hash Routing** - Navegación sin recarga con URLs semánticas
- 🖼️ **Sistema de Imágenes Centralizado** - Gestión type-safe de assets
- 🚀 **CI/CD Automatizado** - Deployment automático a GitHub Pages
- ♿ **Accesible** - Semántica HTML y navegación por teclado

## 🛠️ Stack Tecnológico

### Core
- **React 18.2** - UI library con hooks y componentes funcionales
- **TypeScript 5.2** - Superset tipado de JavaScript
- **Vite 5.0** - Build tool ultra-rápido con HMR

### Desarrollo
- **ESLint** - Linting con reglas para React y TypeScript
- **CSS3** - Variables CSS para theming y transiciones suaves

### Deployment
- **GitHub Actions** - CI/CD pipeline automatizado
- **GitHub Pages** - Hosting estático gratuito

### Iconos & Fuentes
- **Ionicons 7.1** - Biblioteca de iconos moderna
- **Google Fonts (Poppins)** - Tipografía profesional

## 📁 Estructura del Proyecto

```
diego-ortega-cv/
├── src/
│   ├── components/        # Componentes React
│   │   ├── About.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/             # Configuración de contenido
│   │   ├── about.ts
│   │   ├── navbar.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── resume.ts
│   ├── lib/              # Utilidades y helpers
│   │   ├── placeholder-images.ts
│   │   └── theme-init.ts
│   ├── types/            # Definiciones TypeScript
│   │   └── config.ts
│   ├── css/              # Estilos globales
│   │   └── style.css
│   ├── App.tsx           # Componente raíz
│   └── main.tsx          # Entry point
├── public/               # Assets estáticos
│   ├── avatars/
│   ├── icons/
│   ├── projects/
│   └── logo.ico
├── .github/
│   └── workflows/
│       └── pages.yml     # GitHub Actions workflow
└── index.html            # HTML principal
```

> 📘 Para arquitectura detallada, consulta [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Danirak/diego-ortega-portafolio.git

# Navegar al directorio
cd diego-ortega-portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción (dist/)
npm run preview  # Preview del build de producción
npm run lint     # Linting con ESLint
```

## ⚙️ Configuración

### Personalizar Contenido

Edita los archivos en `src/data/` para actualizar tu información:

- **`profile.ts`** - Información del sidebar (nombre, foto, contacto, redes sociales)
- **`about.ts`** - Sección "About me" (presentación, skills, tecnologías)
- **`resume.ts`** - Educación, experiencia laboral, habilidades
- **`projects.ts`** - Portfolio de proyectos con imágenes
- **`navbar.ts`** - Elementos del menú de navegación

### Sistema de Imágenes

Las imágenes se gestionan centralizadamente:

```typescript
import { getImageUrl } from '../lib/placeholder-images';

// Obtener URL de imagen por ID
const avatarUrl = getImageUrl('yo-ia');
```

Todas las imágenes se registran en `src/lib/placeholder-images.json` y se sirven desde `public/`.

### Configurar para tu GitHub Pages

1. **Fork** este repositorio
2. Renombra a `tu-usuario.github.io` (o cualquier nombre)
3. Actualiza el `base` en `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/tu-repo-name/',  // Cambia esto
   })
   ```
4. Habilita GitHub Pages en: `Settings > Pages > Source: GitHub Actions`
5. Push a `main` para deployar automáticamente

## 🎨 Personalización de Tema

El tema día/noche usa CSS variables definidas en `src/css/style.css`:

```css
/* Tema oscuro (default) */
:root {
  --bg-gradient-onyx: ...;
  --text-color: ...;
}

/* Tema claro */
[data-theme="light"] {
  --bg-gradient-onyx: ...;
  --text-color: ...;
}
```

El cambio automático ocurre:
- **6:00 AM - 6:00 PM** → Tema claro ☀️
- **6:00 PM - 6:00 AM** → Tema oscuro 🌙

La preferencia se guarda en `localStorage`.

## 📦 Build de Producción

```bash
npm run build
```

Genera una build optimizada en `dist/` con:
- ✅ Assets minificados y hasheados
- ✅ Code splitting automático
- ✅ Tree shaking
- ✅ Source maps para debugging

## 🚀 Deployment

### GitHub Pages (Automático)

El proyecto incluye GitHub Actions workflow (`.github/workflows/pages.yml`) que:

1. Se ejecuta automáticamente en cada push a `main`
2. Instala dependencias (`npm ci`)
3. Ejecuta build (`npm run build`)
4. Despliega a GitHub Pages

### Deployment Manual

```bash
npm run build
# Sube el contenido de dist/ a tu hosting
```

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

## 👤 Autor

**Diego Andrés Ortega Araya**

- 🌐 Portfolio: [danirak.github.io/diego-ortega-portafolio](https://danirak.github.io/diego-ortega-portafolio)
- 📧 Email: 11.diego.ortega@gmail.com
- 💼 GitHub: [@Danirak](https://github.com/Danirak)

## 🙏 Agradecimientos

- [Ionicons](https://ionic.io/ionicons) - Biblioteca de iconos
- [Google Fonts](https://fonts.google.com/) - Tipografía Poppins
- [Vite](https://vitejs.dev/) - Build tool increíblemente rápido
- [React](https://react.dev/) - Librería UI poderosa y flexible

---

<div align="center">

Hecho con ❤️ y ☕ por Diego Ortega

⭐ Si te gustó el proyecto, considera darle una estrella

</div>

### Step 4

Go to the `src/data/` folder and replace the default data with your personal information in the TypeScript files.

```bash
src/data
├── about.ts       # About section data
├── blog.ts        # Blog posts data
├── contact.ts     # Contact information
├── navbar.ts      # Navigation menu
├── profile.ts     # Profile/sidebar data
├── projects.ts    # Portfolio projects
├── resume.ts      # Education, experience, skills
└── index.ts       # Main config export
```

For example, to set your contact information, edit `src/data/profile.ts`.

```typescript
export const profileConfig: ProfileConfig = {
  USER: {
    role: "iOS Developer",
    name: "Richard Hendricks",
    username: "richardhendricks",
    avatar: "/config/assets/avatars/my-avatar.png"
  },
  INFO: [
    {
      label: "Email",
      value: "richard@example.com",
      icon: "mail-outline"
    },
    // ... more info
  ],
  // ... more config
};
```

> [!IMPORTANT]
> TypeScript provides type safety and autocompletion. Your IDE will help you understand the expected data structure for each field.

<br/>

> [!TIP]
> You can upload your images directly to the `config/assets` folder or use an image server like [Imgur][imgur]. Both options are valid for customizing your portfolio. For example:
>
> `avatar: "https://i.imgur.com/H5gx7JF.png"`
>
> `avatar: "/config/assets/avatars/my-avatar.png"`

### Step 5: Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Step 6: Enjoy 😉

Now you can visit your portfolio at `https://your_github_username.github.io`

Your personal portfolio will be built and updated automatically whenever any changes occur in the configuration files.

> [!NOTE]
> If you like my work and want to show some ❤️, please consider giving a ⭐️ to this Repository.

## Screenshots

![Desktop Demo][desktop-screenshot]
![Mobile Demo][mobile-screenshot]

## Contribute

Contributions are welcome.

## Facing any Issue?

Feel free to open an [Issue][issue] :)

## Contact

If you want to contact me you can reach me at [Discord][discord].

## Credits

This project is based on [vcard portfolio][vcard] and was migrated from Python/Jinja2 to React/TypeScript using Vite.

## License

MIT

[vcard]: https://github.com/codewithsadee/vcard-personal-portfolio
[devfolio]: https://danirak.github.io/diego-ortega-portafolio
[demo]: https://raw.githubusercontent.com/ivansaul/demos/master/python/personal-portfolio-demo.gif
[discord]: https://discord.com/users/744755977684779038
[issue]: https://github.com/Danirak/diego-ortega-portafolio/issues
[github-stars]: https://img.shields.io/github/stars/Danirak/diego-ortega-portafolio?style=social
[github-forks]: https://img.shields.io/github/forks/Danirak/diego-ortega-portafolio?style=social
[desktop-screenshot]: https://i.imgur.com/xKkMSwR.png
[mobile-screenshot]: https://i.imgur.com/G1A1nBu.png
[imgur]: https://imgur.com
