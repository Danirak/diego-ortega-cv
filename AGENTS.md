# Agent Rules

Este archivo define las reglas y convenciones para agentes de IA que trabajen en este proyecto.

## 📋 Reglas de Código

### JavaScript
- Cada función nueva debe incluir un bloque de comentarios JSDoc encima
- Todas las variables y funciones deben escribirse en **camelCase**
- **No uses snake_case** para nombrar variables o funciones
- Usa módulos ES6 (import/export)
- Siempre incluye 'use strict' al inicio de cada archivo
- Valida la existencia de elementos del DOM antes de usarlos

### CSS
- Usa la metodología BEM para nombres de clases cuando sea apropiado
- Mantén los selectores específicos y evita el uso excesivo de `!important`
- Utiliza variables CSS para valores reutilizables
- Organiza los estilos por componentes

### HTML
- Usa etiquetas semánticas (header, nav, main, section, article, footer)
- Incluye atributos ARIA cuando sea necesario
- Mantén la estructura accesible

## 📁 Estructura del Proyecto

```
├── src/
│   ├── css/
│   │   ├── base/           # Variables, reset, utilities
│   │   ├── layout/         # Estructura principal
│   │   ├── components/     # Componentes individuales
│   │   └── responsive/     # Media queries
│   ├── js/
│   │   ├── components/     # Módulos de componentes
│   │   └── utils/          # Funciones auxiliares
│   └── assets/
│       ├── images/         # Imágenes del proyecto
│       │   ├── profile/    # Fotos de perfil
│       │   └── projects/   # Imágenes de proyectos
│       └── icons/          # Iconos SVG
│           ├── navbar/     # Iconos de navegación
│           ├── sidebar/    # Iconos del sidebar
│           ├── services/   # Iconos de servicios
│           └── skills/     # Iconos de habilidades
├── scripts/                # Scripts de automatización
└── index.html             # Página principal
```

## 🛠️ Commands

### Ejecutar script de arquitectura
```command:run_architecture
./scripts/run-architecture.md
```

### Ejecutar script de gestión de proyectos
```command:run_pm
./scripts/run-pm.md
```

## ✅ Checklist para Nuevas Funcionalidades

- [ ] Documentar función con JSDoc
- [ ] Usar camelCase en nombres
- [ ] Validar elementos del DOM
- [ ] Agregar manejo de errores
- [ ] Actualizar documentación si es necesario
- [ ] Probar en diferentes navegadores
- [ ] Verificar responsive design

## 🎯 Principios de Desarrollo

1. **Modularidad**: Cada componente debe ser independiente
2. **Reutilización**: Crear funciones y estilos reutilizables
3. **Accesibilidad**: Siempre considerar usuarios con discapacidades
4. **Performance**: Optimizar imágenes y código
5. **Mantenibilidad**: Código limpio y bien documentado
