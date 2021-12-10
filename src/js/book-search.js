const bookSearch = document.querySelector('#book-search');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#book-search-input');
const searchOutput = document.querySelector('#book-search-result');

let inputTimer;
const doneTypingInterval = 1000;
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const maxResults = '&maxResults=40';
let searchResultArray = [];

searchBtn.addEventListener('click', showBookSearch);
searchInput.addEventListener('keyup', () => {
  clearTimeout(inputTimer);
  if (searchInput.value) {
    inputTimer = setTimeout(searchBook, doneTypingInterval);
  }
});

function showBookSearch() {
  bookSearch.style.display = 'flex';
  searchInput.focus();
}

async function searchBook() {
  try {
    const searchQuery = searchInput.value;
    const response = await fetch(baseUrl + searchQuery + maxResults);
    const data = await response.json();
    searchResultArray = data.items;
    console.log(searchResultArray);
    searchOutput.innerHTML = ' ';
    showSearchResult(searchResultArray);
  } catch (error) {
    console.log('Rejected', error);
  }
}

function renderItem(item) {
  if (item.volumeInfo.imageLinks.thumbnail === 'N/A') {
    item.volumeInfo.imageLinks.thumbnail = '/img/no-poster-available.png';
  }
  let result = '';
  result += `<div class="book-search__item" title="Click to see more">
              <a href="${item.volumeInfo.infoLink}" target="blank">
              <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.volumeInfo.title}">
              <div class="book-search__item-hover">
              <p>${item.volumeInfo.title}</p>
              </div>
              </a>
              </div>`;
  return result;
}

function showSearchResult(array) {
  let result = '';
  array.forEach(e => {
    result += renderItem(e);
    searchOutput.innerHTML = result;
  });
}
