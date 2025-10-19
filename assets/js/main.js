// assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.getAttribute('aria-hidden') === 'false';
      mobileNav.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      menuToggle.classList.toggle('open');
      mobileNav.classList.toggle('active');
    });
  }

  // Mobile dropdown toggles
  const dropdownButtons = document.querySelectorAll('.mobile-dropdown > button');
  dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const menu = button.nextElementSibling;
      menu.classList.toggle('open');
    });
  });
});
