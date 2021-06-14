const fab = document.querySelector("#fab");

const overlay = document.querySelector(".overlay-sidebar");

const sidebar = document.querySelector(".sidebar");

const dropdownMobileMenu = document.querySelector(".dropdown-mobile-menu");

const dropdownMobileTrigger = document.querySelector(".dropdown-mobile");

const arrow = document.querySelector(".arrow");

let isOpened = false;

dropdownMobileTrigger.addEventListener("click", () => {
  isOpened = !isOpened;

  if (isOpened) {
    dropdownMobileMenu.style.height = dropdownMobileMenu.scrollHeight + "px";
    arrow.style.transform = "rotate(180deg)";
  } else {
    dropdownMobileMenu.style.height = 0;
    arrow.style.transform = "rotate(0deg)";
  }
});

fab.addEventListener("click", () => {
  overlay.classList.toggle("show");
  sidebar.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  sidebar.classList.toggle("show");
});
