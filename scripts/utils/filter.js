import { getPhotographerDetail } from "../pages/photographer.js";

// Fonction pour ouvrir ou fermer le menu déroulant
const toggleDropdownMenu = () => {
  const filterMenu = document.querySelector(".dropdown_content");
  const filterMenuButton = document.querySelector(".btn_drop");
  const filterButtons = document.querySelectorAll(".dropdown_content button");

  // Récupérer la valeur actuellement sélectionnée dans le menu déroulant
  const selectedValue = document.getElementById("current_filter").innerHTML;

  // Déterminer si le menu est ouvert ou fermé:  Si cet attribut est égal à "true", la variable isExpanded sera true. Sinon, elle sera false.
  const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;

  // Inverser l'état du menu déroulant
  filterMenuButton.setAttribute("aria-expanded", !isExpanded);
  filterMenu.classList.toggle("curtain_effect");
  document.querySelector(".fa-chevron-up").classList.toggle("rotate");

  // Définir l'attribut aria-hidden en fonction de l'état du menu déroulant
  const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
  filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

  // Définir le tabindex des boutons en fonction de l'état du menu déroulant
  const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
  filterButtons.forEach((button) => {
    button.setAttribute("tabindex", newTabIndexValue);
    button.style.display = button.getAttribute("data-btn-title") === selectedValue ? "none" : "block";
  });
};

// Fonction pour gérer l'ouverture et la fermeture du menu déroulant
const openCloseFilterMenu = () => {
  const filterMenuButton = document.querySelector(".btn_drop");
  const filterButtons = document.querySelectorAll(".dropdown_content button");

  filterButtons.forEach((button) => {
    // Au clic sur un bouton dans le menu déroulant
    button.addEventListener("click", () => {
      // Mettre à jour le texte du bouton d'ouverture du menu déroulant avec la valeur du bouton cliqué
      document.getElementById("current_filter").textContent = button.getAttribute("data-btn-title");

      // Appeler la fonction pour ouvrir ou fermer le menu déroulant
      toggleDropdownMenu();

      // Appeler la fonction pour récupérer les détails du photographe en fonction de la valeur sélectionnée
      getPhotographerDetail(button.getAttribute("data-btn-title"));
    });
  });

  // Au clic sur le bouton d'ouverture du menu déroulant
  filterMenuButton.addEventListener("click", toggleDropdownMenu);
};

// Appeler la fonction pour gérer l'ouverture et la fermeture du menu déroulant
openCloseFilterMenu();

