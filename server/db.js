const Pool = require('pg').Pool

const pool = new Pool({
    user: 'me',
    password: 'me',
    host: 'localhost',
    port: 5432,
    database: 'favlinks'
})

module.exports = pool