fetch('/added-books')
  .then((response) => response.json())
  .then((data) => {
    for (book in data) {
      const card = createCard(book, addedBooksSection);
      createElement('i', 'far fa-edit', card, '');
      createElement('i', 'fas fa-trash-alt', card, '');
    }
  }).catch((error) => console.log(error.message));

fetch('/borrowed-books')
  .then((response) => response.json())
  .then((data) => {
    for (book in data) {
      createCard(book, borrowedBooksSection);
    }
  }).catch((error) => console.log(error.message));
