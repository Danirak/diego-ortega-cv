/**
 * @fileoverview Funciones auxiliares reutilizables
 * @author Diego Ortega
 */

'use strict';

/**
 * Alterna la clase 'active' en un elemento del DOM
 * @param {HTMLElement} elem - Elemento a modificar
 * @returns {void}
 */
export const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
};

/**
 * Desplaza la ventana hacia arriba
 * @returns {void}
 */
export const scrollToTop = function () {
  window.scrollTo(0, 0);
};
