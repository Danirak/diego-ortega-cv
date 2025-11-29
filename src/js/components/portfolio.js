/**
 * @fileoverview Sistema de filtros para el portafolio
 * @author Diego Ortega
 */

'use strict';

import { elementToggleFunc } from '../utils/helpers.js';

/**
 * Filtra los items del portafolio por categoría
 * @param {string} selectedValue - Categoría seleccionada
 * @param {NodeList} filterItems - Lista de items a filtrar
 * @returns {void}
 */
const filterFunc = function (selectedValue, filterItems) {
  filterItems.forEach((item) => {
    if (selectedValue === "todos") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

/**
 * Inicializa el sistema de filtros del portafolio
 * @returns {void}
 */
export const initPortfolioFilters = function () {
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (!select || !filterItems.length) {
    console.warn('Portfolio filter elements not found');
    return;
  }

  // Custom select para móvil
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Event listeners para select items (móvil)
  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue, filterItems);
    });
  });

  // Event listeners para botones de filtro (desktop)
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedValue = this.getAttribute("data-filter");
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue, filterItems);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
};
