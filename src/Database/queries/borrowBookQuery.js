const connection = require('../config/connection')
const borrowBookQuery = (username, bookId) => {
    connection.query(`INSERT INTO rents(book_id, renter) VALUES ('${bookId}', '${username}')`)
}
module.exports = borrowBookQuery