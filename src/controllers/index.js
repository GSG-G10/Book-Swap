const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');
const getHomePage = require('./getHomePage');
const getBooks = require('./getBooks');
const borrowBook = require('./borrowBook');
const generateError = require('./generateError');
const getUser = require('./getUser');
const addBook = require('./addBook');
const editBook = require('./editBook');
const deleteBook = require('./deleteBook');
const returnBook = require('./returnBook');
const checkAuth = require('./authCheck');
const createSession = require('./createSession');

module.exports = {
    login,
    signup,
    getHomePage,
    getBooks,
    borrowBook,
    generateError,
    getUser,
    addBook,
    editBook,
    deleteBook,
    returnBook,
    checkAuth,
    createSession,
    logout
};