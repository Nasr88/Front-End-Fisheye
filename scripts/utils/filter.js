const openCloseFilterMenu = () => {
  const filterMenu = document.querySelector(".dropdown_content");
  const filterMenuButton = document.querySelector(".btn_drop");
  const filterButtons = document.querySelectorAll(".dropdown_content button");

  const openCloseDropdown = () => {
    const selectedValue = document.getElementById("current_filter").innerHTML;
    const isExpanded =
      filterMenuButton.getAttribute("aria-expanded") === "true" || false;
    filterMenuButton.setAttribute("aria-expanded", !isExpanded);
    filterMenu.classList.toggle("curtain_effect");
    document.querySelector(".fa-chevron-up").classList.toggle("rotate");

    const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect")
      ? "false"
      : "true";
    filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

    const newTabIndexValue = filterMenu.classList.contains("curtain_effect")
      ? "0"
      : "-1";
    filterButtons.forEach((button) => {
      button.setAttribute("tabindex", newTabIndexValue);
      if (button.getAttribute("data-btn-title") === selectedValue)
        button.style.display = "none";
      else button.style.display = "block";
    });
  };
  const onSelectOption = () => {};

  filterButtons.forEach((button) => {
    const selectedValue = document.getElementById("current_filter").innerHTML;
    button.removeEventListener("click", () => {});
    button.addEventListener("click", () => {
      document.getElementById("current_filter").textContent =
        button.getAttribute("data-btn-title");

      if (button.getAttribute("data-btn-title") === selectedValue)
        button.style.display = "none";
      else button.style.display = "block";
      openCloseDropdown();
    });
  });

  filterMenuButton.addEventListener("click", openCloseDropdown);
};

openCloseFilterMenu();
