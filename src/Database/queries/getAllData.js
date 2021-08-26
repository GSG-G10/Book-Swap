const connection = require('../config/connection');

const getAllData = () => connection.query('SELECT * FROM BOOKS;');

module.exports = getAllData;
