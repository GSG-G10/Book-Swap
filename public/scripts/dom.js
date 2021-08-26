const booksSection = document.querySelector(".book-container");
const addedBooksSection = document.querySelector(".added-books");
const borrowedBooksSection = document.querySelector(".borowed-books");
const logout = document.querySelector('.logout');
// for pop up window
const popupForm = document.querySelector(".add-form-container");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
const contentHider = document.querySelector(".content-hider");
/// for log in
const loginUserName = document.querySelector("#login-user-name");
const loginPassword = document.querySelector("#login-password");
const loginBtn = document.querySelector("#login-btn");
// for add book  from pop up
const bookImgInput = document.querySelector("#book-img-input");
const bookNameInput = document.querySelector("#book-name-input");
const authorInput = document.querySelector("#author-input");
const saveBtn = document.querySelector(".save");
// for sign up
const username = document.querySelector("#username");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const signUpBtn = document.querySelector(".signUp-btn");

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
  bookImgInput = bookImgInput.value;
  bookNameInput = bookNameInput.value;
  authorInput = authorInput.value;
  fetch();
});
cancelBtn.addEventListener("click", () => {
  popupForm.classList.remove("active");
  contentHider.classList.remove("active");
  document.body.style.overflow = "auto";
});
//  login
loginBtn.addEventListener("click", () => {
  loginUserName = loginUserName.value;
  loginPassword = loginPassword.value;
});
//sign up
signUpBtn.addEventListener("click", () => {
  username = username.value;
  firstName = firstName.value;
  lastName = lastName.value;
  signupEmail = signupEmail.value;
  signupPassword = signupPassword.value;
  signUpBtn = signUpBtn.value;
});
//  log out 
logout.addEventListener('click',()=>{
  fetch('/logout');
})