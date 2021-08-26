const connection = require('../config/connection')
const addBookQuery = (username, bookName, bookAuthor, bookImg) => {
    const sqlScript = {
        text: 'INSERT INTO BOOKS(OWNER, NAME, PICTURE, AUTHOR) VALUES ($1, $2, $4, $3);',
        values: [username, bookName, bookAuthor, bookImg]
    };
    return connection.query(sqlScript);
}
module.exports = addBookQuery;