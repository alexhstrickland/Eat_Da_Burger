// MySQL connection
const mysql = require('mysql');

var conn;

if (process.env.DATABASE_URL){
    conn = process.env.DATABASE_URL;
} else {
  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_USER,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
});
};

// Make connection
const connection = mysql.createPool(conn);

// Export connection for our ORM to use
module.exports = connection;
