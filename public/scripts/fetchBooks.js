// request data from server
const hhh = document.querySelector(".book-container");
const fetchBooks = () => {
    fetch('home/books')
        .then((response) => response.json())
        .then((data) => {
            hhh.innerHTML = '';
            for (book in data) {
                createCard(data[book]);
            }
        }).catch((error) => console.log(error.message));
};