/**
 * @fileoverview Funcionalidad del sidebar lateral
 * @author Diego Ortega
 */

'use strict';

import { elementToggleFunc } from '../utils/helpers.js';

/**
 * Inicializa la funcionalidad del sidebar
 * @returns {void}
 */
export const initSidebar = function () {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (!sidebar || !sidebarBtn) {
    console.warn('Sidebar elements not found');
    return;
  }

  // Toggle sidebar en móvil
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
};
