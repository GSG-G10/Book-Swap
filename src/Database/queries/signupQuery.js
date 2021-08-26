const connection = require('../config/connection')
const signupQuery = (username, firstName, lastName, email, password, picture) => {
    connection.query(`INSERT INTO USERS (username, first_name, last_name,email, password, picture)VALUES ($1, $2, $3, $4, $5,$6);`,[username, firstName, lastName, email, password, picture])
}
module.exports = signupQuery