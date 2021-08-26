const connection = require('../config/connection')
const editBookQuery = (id, bookName, bookPhoto, author) => {
    connection.query(`UPDATE BOOKS SET name = $1, picture = $2, author = $3 WHERE BOOKS.id = $4`,[ bookName, bookPhoto, author, id]);
}
module.exports = editBookQuery
