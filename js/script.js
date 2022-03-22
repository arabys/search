const search = document.querySelector('.search');
const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', () => {
    search.classList.toggle('active');
    searchInput.focus();
})