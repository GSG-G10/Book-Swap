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

const createCard = (data, section) => {
    const { author, bookname, bookImg } = data;
    section;
    const bookContainer = createElement("div", "book-card", booksSection, "");
    createElement("img", "book-img", bookContainer, bookImg);
    const bookInfo = createElement("div", "info-container", bookContainer, "");
    // createElement('p', 'username', bookInfo, username);
    createElement("p", "bookname", bookInfo, bookname);
    createElement("p", "auther", bookInfo, author);
    createElement("p", "status", bookInfo, "avilable");
    createElement("button", "borrow btn", bookContainer, "");
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