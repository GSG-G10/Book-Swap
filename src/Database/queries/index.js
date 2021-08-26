const getBooksQuery = require('./getAllData')
const signupQuery = require('./signupQuery')
const addBookQuery = require('./addBookQuery')
const deleteBookQuery = require('./deleteBookQuery')
const borrowBookQuery = require('./borrowBookQuery')
const editBookQuery = require('./editBookQuery')
const checkIfMember = require('./checkIfMember');
const addUser = require('./addUser');
const getPassword = require('./getPassword');


module.exports = { getBooksQuery, signupQuery, addBookQuery, deleteBookQuery, borrowBookQuery, editBookQuery, checkIfMember, addUser, getPassword };