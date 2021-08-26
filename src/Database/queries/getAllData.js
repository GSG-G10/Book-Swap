const connection = require('../config/connection');

const getBooksQuery = () => connection.query('SELECT * FROM BOOKS;');

module.exports = getBooksQuery;