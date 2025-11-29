# CV estático — Diego Andrés Ortega Araya

Sitio HTML/CSS simple y accesible para publicar el currículum en GitHub Pages.

## Archivos
- `index.html`: contenido del CV.
- `styles.css`: estilos del sitio.
- `CV.md`: versión Markdown editable del CV.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `diego-ortega-cv`.
2. Sube estos archivos a la raíz del repositorio.
3. En GitHub, ve a `Settings` → `Pages`.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama (por ejemplo `main`) y la carpeta `/root`.
6. Guarda. Tu sitio quedará publicado en `https://<tu-usuario>.github.io/diego-ortega-cv/`.

## Personalización rápida
- Reemplaza `[Tu Teléfono]`, `[Tu Email]`, `LinkedIn` y `GitHub/Portafolio` en `index.html`.
- Actualiza secciones de experiencia, habilidades e idiomas en `CV.md` y refleja cambios en `index.html`.
- Puedes cambiar colores en `styles.css` editando las variables `--bg`, `--card`, `--text`, `--accent`.

## Opcional: dominio personalizado
1. Compra/configura tu dominio (ej. `cv.diegoortega.cl`).
2. En `Settings` → `Pages`, agrega el dominio.
3. Crea un archivo `CNAME` en la raíz con el dominio.
4. Configura DNS tipo `A` y `CNAME` apuntando a GitHub Pages.

## Accesibilidad y rendimiento
- HTML semántico (`header`, `section`, `article`, `footer`).
- Contraste alto y tipografía legible.
- Página ligera, sin JS.
