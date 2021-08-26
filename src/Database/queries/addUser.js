const connection = require('../config/connection');
const addUser = (userName, firstName, lastName, email, password) => {
    const sql = {
        text: 'INSERT INTO USERS VALUES ($1 , $2 , $3 , $4 , $5)',
        values: [userName, firstName, lastName, email, password]
    }
    return connection.query(sql).then((data) => data.rows).then(rows => rows.length !== 0);
}
module.exports = addUser;