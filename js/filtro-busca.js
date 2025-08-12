document.addEventListener('DOMContentLoaded', () => {
  const searchForms = document.querySelectorAll('form[id^="search-form"]');

  searchForms.forEach((form) => {
    const input = form.querySelector('.search-input');
    if (!input) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const termo = input.value.trim().toLowerCase();
      if (termo) {
        localStorage.setItem('searchTerm', termo);
        window.location.href = '/pages/busca.html';
      } else {
        console.log('Nenhum termo de busca inserido');
      }
    });
  });
});
