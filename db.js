require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DBConnectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

// const itemsPool = new Pool({
//     user: 'postgres',
//     password: 'tagavara',
//     host: 'localhost',
//     port: 5432,
//     database: 'myrecipes'
// });

module.exports = pool;
