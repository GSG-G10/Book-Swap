const connection = require('../config/connection')
const editBookQuery = (id, bookName, bookPhoto, author) => {
    connection.query(`UPDATE BOOKS SET name = $1, picture = $2, author = $3 WHERE BOOKS.id = ${id}`,[ bookName, bookPhoto, author]);
}
module.exports = editBookQuery
