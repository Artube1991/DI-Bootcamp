const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        // ssl: {rejectUnathorized: false},
    }
})

module.exports = {
    db,
};