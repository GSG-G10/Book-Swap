const booksSection = document.querySelector(".book-container");
const addedBooksSection = document.querySelector(".added-books");
const borrowedBooksSection = document.querySelector(".borowed-books");
const logout = document.querySelector('.logout');
// for pop up window
const popupForm = document.querySelector(".add-form-container");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
const contentHider = document.querySelector(".content-hider");
// for add book  from pop up
const bookImgInput = document.querySelector("#book-img-input");
const bookNameInput = document.querySelector("#book-name-input");
const authorInput = document.querySelector("#author-input");
const saveBtn = document.querySelector(".save");


// function to create dom elements
const createElement = (tag, className, parent, text) => {
    const ele = document.createElement(tag);
    parent.appendChild(ele);
    ele.classList.add(className);
    if (tag === "img") {
        ele.src = text;
    } else {
        ele.textContent = text;
    }
    return ele;
};

// Create card function --------------------------------------------

const createCard = (data) => {
    console.log('hello');
    const card = document.createElement('div');
    card.setAttribute('class', 'book-card');
    const img = document.createElement('img');
    img.setAttribute('src', data.picture);
    img.setAttribute('class', 'book-img');
    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'info-container');
    const usernameP = document.createElement('p');
    usernameP.appendChild(document.createTextNode(`Owner: ${data.owner}`));
    usernameP.setAttribute('class', 'username');
    const booknameP = document.createElement('p');
    usernameP.setAttribute('class', 'bookname');
    usernameP.appendChild(document.createTextNode(`name: ${data.name}`));
    const autherP = document.createElement('p');
    usernameP.setAttribute('class', 'auther');
    usernameP.appendChild(document.createTextNode(`Owner: ${data.author}`));
    card.appendChild(img);
    infoDiv.appendChild(usernameP);
    infoDiv.appendChild(booknameP);
    infoDiv.appendChild(autherP);
    card.appendChild(infoDiv);
    booksSection.appendChild(card);
};
// pop up form ------------------------------------------

addBtn.addEventListener("click", () => {
    popupForm.classList.toggle("active");
    contentHider.classList.toggle("active");
    document.body.style.overflow = "hidden";
});
saveBtn.addEventListener("click", () => {
    popupForm.classList.remove("active");
    contentHider.classList.remove("active");
    document.body.style.overflow = "auto";
    console.log('fetch');
    fetch('home/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookName: bookNameInput.value, bookImg: bookImgInput.value, bookAuthor: authorInput.value })
    }).then(fetchBooks());
});
cancelBtn.addEventListener("click", () => {
    popupForm.classList.remove("active");
    contentHider.classList.remove("active");
    document.body.style.overflow = "auto";
});

fetchBooks();