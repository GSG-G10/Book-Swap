const connection = require('../config/connection');
const getPassword = (userName) => {
    const sql = {
        text: 'SELECT * FROM USERS WHERE USERNAME = $1',
        values: [userName]
    }
    return connection.query(sql).then((data) => data.rows).then(rows => rows.length !== 0);
}
module.exports = getPassword;