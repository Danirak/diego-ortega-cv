/**
 * @fileoverview Punto de entrada principal de la aplicación
 * @author Diego Ortega
 */

'use strict';

import { initSidebar } from './components/sidebar.js';
import { initNavigation } from './components/navigation.js';
import { initPortfolioFilters } from './components/portfolio.js';
import { initContactForm } from './components/contactForm.js';

/**
 * Inicializa todos los componentes de la aplicación
 * @returns {void}
 */
const initApp = function () {
  // Inicializar sidebar
  initSidebar();

  // Inicializar navegación
  initNavigation();

  // Inicializar filtros de portafolio
  initPortfolioFilters();

  // Inicializar formulario de contacto
  initContactForm();

  console.log('✅ Aplicación inicializada correctamente');
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
