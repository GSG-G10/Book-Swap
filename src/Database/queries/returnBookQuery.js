const connection = require('../config/connection')
const deleteBookQuery = (bookID, username) => {
    connection.query(`DELETE FROM RENTS WHERE RENTS.book_id = $1 AND RENTS.renter = '$2';`, [bookID, username]);
}
module.exports = deleteBookQuery