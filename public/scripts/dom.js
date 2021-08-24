const booksSection = document.querySelector('.books-section');
const addedBooksSection = document.querySelector('.added-books');
const borrowedBooksSection = document.querySelector('.borowed-books');

// function to create dom elements
const createElement = (tag, className, parent, text) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
  if (tag === 'img') {
    ele.src = text;
  } else {
    ele.textContent = text;
  }
  return ele;
};

// Create card function --------------------------------------------
const createCard = (data, section) => {
  const {
    username,
    author,
    bookname,
    bookImg,
    expDate,
  } = data;
  const bookContainer = createElement('div', 'book-container', section, '');
  createElement('img', 'book-img', bookContainer, bookImg);
  const bookInfo = createElement('div', 'info-container', bookContainer, '');
  createElement('p', 'username', bookInfo, username);
  createElement('p', 'bookname', bookInfo, bookname);
  createElement('p', 'auther', bookInfo, author);
  createElement('p', 'exp-date', bookInfo, expDate);
  createElement('button', 'borrow btn', bookContainer, '');

  return bookContainer;
};
// pop up form ------------------------------------------
const popupForm = document.querySelector('.add-form-container');
const addBtn = document.querySelector('.add-btn');
const contentHider = document.querySelector('.content-hider');
addBtn.addEventListener('click', () => {
  popupForm.classList.toggle('active');
  contentHider.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});
const saveButton = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
saveButton.addEventListener('click', () => {
  popupForm.classList.remove('active');
  contentHider.classList.remove('active');
  document.body.style.overflow = 'auto';
});
