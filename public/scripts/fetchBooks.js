// request data from server

fetch('/books')
  .then((response) => response.json())
  .then((data) => {
    for (book in data) {
      createCard(book, booksSection);
    }
  }).catch((error) => console.log(error.message));
