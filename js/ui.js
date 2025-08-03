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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simula envio bem-sucedido (troque aqui se for integração real)
      setTimeout(() => {
        feedback.textContent = 'Inscrição realizada com sucesso!';
        feedback.style.display = 'block';
        feedback.style.color = '#2f8f73';

        // Limpa o campo de e-mail
        form.reset();

        // Some o feedback após alguns segundos, se desejar
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 5000);
      }, 500);
    });
  }
});
