const connection = require('../config/connection')
const addBookQuery = (username, bookName, bookPhoto, author) => {
    connection.query(`INSERT INTO BOOKS(OWNER, NAME, PICTURE, AUTHOR) VALUES ($1, $2, $3, $4);`,[username, bookName, bookPhoto, author]);
}
module.exports = addBookQuery