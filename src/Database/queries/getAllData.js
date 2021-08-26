const connection = require('../config/connection');

const getBooksQuery = () => connection.query('SELECT * FROM BOOKS;').then(data => data.rows);

module.exports = getBooksQuery;