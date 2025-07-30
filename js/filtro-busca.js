document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.querySelector('.search-input');

  if (!searchForm || !searchInput) {
    console.log(
      'Formulário ou input de busca não encontrado na página:',
      window.location.pathname
    );
    return;
  }

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const termo = searchInput.value.trim().toLowerCase();
    if (termo) {
      localStorage.setItem('searchTerm', termo);
      console.log('Termo de busca salvo:', termo);
      window.location.href = '/pages/busca.html';
    } else {
      console.log('Nenhum termo de busca inserido');
    }
  });
});
