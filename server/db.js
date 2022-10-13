const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "@p!ng",
    host: "localhost",
    port: 5432,
    database: "sari_sari_store"
});

module.exports = pool;