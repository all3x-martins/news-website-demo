document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('dropdown-categorias');
  const toggle = document.getElementById('dropdown-toggle');
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdown.classList.toggle('open');
  });

  // Fecha o dropdown ao clicar fora
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Dropdown in mobile menu
const dropdownMobileToggle = document.getElementById('dropdown-mobile-toggle');
const dropdownMobileContent = document.getElementById(
  'dropdown-mobile-content'
);
dropdownMobileToggle.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMobileContent.classList.toggle('show');
});

// Optional: close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  if (
    !mobileMenu.contains(event.target) &&
    !hamburgerBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove('show');
    dropdownMobileContent.classList.remove('show');
  }
});
