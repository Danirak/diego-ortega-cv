/**
 * @fileoverview Sistema de navegación por pestañas
 * @author Diego Ortega
 */

'use strict';

import { scrollToTop } from '../utils/helpers.js';

/**
 * Inicializa el sistema de navegación por tabs
 * @returns {void}
 */
export const initNavigation = function () {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  if (!navigationLinks.length || !pages.length) {
    console.warn('Navigation elements not found');
    return;
  }

  // Agregar event listeners a todos los links de navegación
  navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
      const targetPage = this.innerHTML.toLowerCase();

      pages.forEach((page, pageIndex) => {
        if (targetPage === page.dataset.page) {
          page.classList.add("active");
          navigationLinks[pageIndex].classList.add("active");
          scrollToTop();
        } else {
          page.classList.remove("active");
          navigationLinks[pageIndex].classList.remove("active");
        }
      });
    });
  });
};
