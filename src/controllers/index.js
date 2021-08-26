const login = require('./login');
const signup = require('./signup');
const getHomePage = require('./getHomePage');
const getBooks = require('./getBooks');
const borrowBook = require('./borrowBook');
const generateError = require('./generateError');
const getUser = require('./getUser');
const addBook = require('./addBook');
const editBook = require('./editBook');
const deleteBook = require('./deleteBook');
const returnBook = require('./returnBook');
const logout = require('./logout')

module.exports = {login , signup, getHomePage, getBooks, borrowBook, generateError, getUser, addBook, editBook, deleteBook, returnBook, logout};