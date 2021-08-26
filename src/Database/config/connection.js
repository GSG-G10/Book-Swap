const { Pool } = require('pg');

const { NODE_ENV, DEV_DB_URL, DB_URL, TEST_DB_URL } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
    case 'production':
        dbUrl = DB_URL;
        break;
    case 'devlopment':
        dbUrl = DEV_DB_URL;
        break;
    case 'testing':
        dbUrl = TEST_DB_URL;
        break;
    default:
        //throw new Error('database doesn\'t exist');
}

const options = {
    connectionString: dbUrl,
    ssl: {
        rejectUnauthorized: false,
    }
};

module.exports = new Pool(options);