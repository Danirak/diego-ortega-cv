# Agents Rules

- Cada función nueva debe incluir un bloque de comentarios JSDoc encima
- Todas las variables y funciones deben escribirse en camelCase
- No uses snake_case
- Seguir las convenciones de React y TypeScript

## Sistema de imágenes

El proyecto usa un sistema centralizado de gestión de imágenes en `src/lib/placeholder-images`:

- **JSON**: `placeholder-images.json` - Todas las rutas organizadas por categorías
- **TypeScript**: `placeholder-images.ts` - Funciones helper con type safety

### Uso de imágenes

```typescript
import { placeholderImages } from '../lib/placeholder-images';

// Acceso directo
const avatar = placeholderImages.avatars.myAvatar;
const icon = placeholderImages.icons.mobile;

// O usando helpers
import { getIcon, getAvatar } from '../lib/placeholder-images';
const mobileIcon = getIcon('mobile');
```

Todas las imágenes se sirven desde la carpeta `public/` y se acceden con rutas absolutas.

## Configuración de datos

Para actualizar el contenido del portfolio, edita los archivos en `src/data/`:

- `profile.ts` - Información del sidebar (nombre, foto, contacto, redes sociales)
- `about.ts` - Sección "About me" (presentación, skills, tecnologías)
- `navbar.ts` - Elementos del menú de navegación
- `resume.ts` - Educación, experiencia, habilidades y lenguajes
- `projects.ts` - Portfolio de proyectos
- `blog.ts` - Posts del blog
- `contact.ts` - Formulario y ubicación de contacto

# Commands

## Ejecutar script run-architecture
```command:run_architecture
./scripts/run-architecture.md
```
## Ejecutar script run-pm
```command:run_pm
./scripts/run-pm.md
```

## Desarrollo
```bash
npm run dev
```

## Build de producción
```bash
npm run build
```

## Preview del build
```bash
npm run preview
```

## Lint
```bash
npm run lint
```
