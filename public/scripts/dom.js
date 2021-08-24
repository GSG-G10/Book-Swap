const booksSection = document.querySelector('.books-section');

// Create card function --------------------------------------------
const createCard = (data) => {
  const {
    username,
    author,
    bookname,
    bookImg,
    expDate,
  } = data;
  const bookContainer = createElement('div', 'book-container', booksSection, '');
  createElement('img', 'book-img', bookContainer, bookImg);
  const bookInfo = createElement('div', 'info-container', bookContainer, '');
  createElement('p', 'username', bookInfo, username);
  createElement('p', 'bookname', bookInfo, bookname);
  createElement('p', 'auther', bookInfo, author);
  createElement('p', 'exp-date', bookInfo, expDate);
  createElement('button', 'borrow btn', bookContainer, '')
};

fetch(/)