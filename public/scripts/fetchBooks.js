// request data from server

const fetchBooks = () => {
    fetch('home/books')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (book in data) {
                createCard(data[book]);
            }
        }).catch((error) => console.log(error.message));
};