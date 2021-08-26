const connection = require('../config/connection')
const deleteBookQuery = (bookName) => {
    connection.query(`DELETE FROM BOOKS WHERE BOOKS.name = $1;`,[bookName]);
}
module.exports = deleteBookQuery