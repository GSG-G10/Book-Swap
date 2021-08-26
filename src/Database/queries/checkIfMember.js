const connection = require('../config/connection');
const checkIfMember = (userName) => {
    const sql = {
        text: 'SELECT * FROM USERS WHERE USERNAME = $1',
        values: [userName]
    }
    return connection.query(sql).then((data) => data.rows).then(rows => rows.length !== 0);
}
module.exports = checkIfMember;