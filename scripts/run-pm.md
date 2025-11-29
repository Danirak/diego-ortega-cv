# Script de Gestión de Proyectos

Este script define los procesos de gestión y mantenimiento del proyecto.

## 📊 Gestión del Proyecto

### Versionado

Usamos **Semantic Versioning** (semver):
- **MAJOR**: Cambios incompatibles en la API
- **MINOR**: Nueva funcionalidad compatible
- **PATCH**: Correcciones de bugs

### Commits Convencionales

Formato: `<tipo>(<scope>): <descripción>`

Tipos:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

Ejemplos:
```bash
git commit -m "feat(portfolio): agregar sistema de filtros"
git commit -m "fix(sidebar): corregir toggle en móvil"
git commit -m "docs(readme): actualizar instrucciones de instalación"
```

### Workflow de Desarrollo

1. **Desarrollo Local**
   ```bash
   # Abrir index.html en navegador
   # No requiere build process
   ```

2. **Hacer Cambios**
   ```bash
   # Editar archivos necesarios
   # Probar en navegador
   ```

3. **Commit y Push**
   ```bash
   git add .
   git commit -m "tipo(scope): descripción"
   git push origin main
   ```

4. **Deploy Automático**
   - GitHub Actions despliega automáticamente
   - El sitio se actualiza en ~2-3 minutos

### Checklist de Calidad

Antes de cada commit:

- [ ] ¿El código sigue las convenciones de AGENTS.md?
- [ ] ¿Todas las funciones tienen JSDoc?
- [ ] ¿Se usa camelCase en JavaScript?
- [ ] ¿El diseño es responsive?
- [ ] ¿Funciona en diferentes navegadores?
- [ ] ¿Los enlaces externos tienen target="_blank"?
- [ ] ¿Las imágenes tienen alt text?
- [ ] ¿El código está bien comentado?

### Testing Manual

Probar en:
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop/iOS)
- [ ] Edge (Desktop)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

Resoluciones a probar:
- [ ] 320px (Mobile pequeño)
- [ ] 375px (Mobile estándar)
- [ ] 768px (Tablet)
- [ ] 1024px (Desktop pequeño)
- [ ] 1440px (Desktop estándar)

### Mantenimiento

#### Actualización de Contenido

1. **Agregar Proyecto**
   - Subir imagen a `src/assets/images/projects/`
   - Editar `index.html` en sección Portfolio
   - Actualizar categoría (iot, web, cloud)

2. **Actualizar Experiencia**
   - Editar `index.html` en sección Resume
   - Mantener formato consistente

3. **Cambiar Información de Contacto**
   - Actualizar en Sidebar (index.html)
   - Actualizar en README.md

#### Optimización

1. **Imágenes**
   - Comprimir antes de subir
   - Usar formatos modernos (WebP, AVIF)
   - Máximo 200KB por imagen

2. **CSS**
   - Eliminar estilos no usados
   - Minimizar en producción (opcional)

3. **JavaScript**
   - Mantener módulos pequeños
   - Lazy loading cuando sea necesario

### Backup y Seguridad

- El código está respaldado en GitHub
- Hacer commits frecuentes
- No subir información sensible
- Usar `.gitignore` apropiadamente

### Contacto y Soporte

Para preguntas sobre el proyecto:
- **Email**: 11.diego.ortega@gmail.com
- **GitHub**: [@Danirak](https://github.com/Danirak)
- **LinkedIn**: [Diego Ortega](https://www.linkedin.com/in/diego-ortega-5801b2206)

### Recursos Útiles

- [Documentación de Ionicons](https://ionic.io/ionicons)
- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Pages Docs](https://docs.github.com/pages)
