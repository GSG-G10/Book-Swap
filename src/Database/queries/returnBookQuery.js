const connection = require('../config/connection')
const deleteBookQuery = (bookID, username) => {
    connection.query(`DELETE FROM RENTS WHERE RENTS.book_id = ${bookID} AND RENTS.renter = '${username}';`);
}
module.exports = deleteBookQuery