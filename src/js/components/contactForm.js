/**
 * @fileoverview Manejo del formulario de contacto
 * @author Diego Ortega
 */

'use strict';

/**
 * Valida y habilita/deshabilita el botón de envío del formulario
 * @param {HTMLFormElement} form - Formulario a validar
 * @param {HTMLButtonElement} formBtn - Botón de envío
 * @returns {void}
 */
const validateForm = function (form, formBtn) {
  if (form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
};

/**
 * Maneja el envío del formulario de contacto
 * @param {Event} e - Evento de submit
 * @param {HTMLFormElement} form - Formulario
 * @param {HTMLButtonElement} formBtn - Botón de envío
 * @returns {void}
 */
const handleFormSubmit = function (e, form, formBtn) {
  e.preventDefault();
  
  // Aquí puedes agregar la lógica de envío (API, EmailJS, etc.)
  alert("¡Gracias por tu mensaje! Te contactaré pronto.");
  
  // Reset formulario
  form.reset();
  formBtn.setAttribute("disabled", "");
};

/**
 * Inicializa el formulario de contacto
 * @returns {void}
 */
export const initContactForm = function () {
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (!form || !formBtn) {
    console.warn('Contact form elements not found');
    return;
  }

  // Validar en cada input
  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      validateForm(form, formBtn);
    });
  });

  // Manejar submit
  form.addEventListener("submit", function (e) {
    handleFormSubmit(e, form, formBtn);
  });
};
