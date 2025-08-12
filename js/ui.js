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

// Fecha o menu ao clicar no botão de fechar
const closeMenuBtn = document.getElementById('close-menu');
closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !hamburgerBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove('show');
  }
});

// Newsletter form submission
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

const menuOpenOverlay = document.querySelector('.menu-open-overlay');

function toggleMenu(forceClose = false) {
  let isOpen;

  if (forceClose) {
    menuOpenOverlay.classList.remove('show');
    isOpen = false;
  } else {
    isOpen = menuOpenOverlay.classList.toggle('show');
  }

  if (isOpen) {
    menuOpenOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Desabilita o scroll
  } else {
    menuOpenOverlay.style.display = 'none';
    document.body.style.overflow = ''; // Habilita o scroll novamente
  }
}

// Abrir menu pelo hamburger
hamburgerBtn.addEventListener('click', () => toggleMenu());

// Fechar ao clicar no overlay
menuOpenOverlay.addEventListener('click', () => toggleMenu(true));

// Fechar ao clicar no botão de fechar
closeMenuBtn.addEventListener('click', () => toggleMenu(true));

document.addEventListener('DOMContentLoaded', () => {
  const searchToggleMobile = document.querySelector('.search-toggle-mobile');
  const header = document.querySelector('header');

  // Criar o form de busca (se não existir)
  let searchFormHeader = document.querySelector('#search-form-header');
  if (!searchFormHeader) {
    searchFormHeader = document.createElement('form');
    searchFormHeader.id = 'search-form';
    searchFormHeader.className = 'search-form-header';
    searchFormHeader.innerHTML = `
      <input type="text" class="search-input" placeholder="Buscar..." />
      <button type="submit" class="search-button-menu" aria-label="Buscar">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    `;
    header.appendChild(searchFormHeader);
  }

  const searchInput = searchFormHeader.querySelector('.search-input');

  searchToggleMobile.addEventListener('click', (e) => {
    e.preventDefault();
    searchFormHeader.classList.toggle('show');
    if (searchFormHeader.classList.contains('show')) {
      searchInput.focus();
    }
  });
});
