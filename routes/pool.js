const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  database: "exprtie",
  user: "root",
  password: "12345",
  connectionLimit: 100,
  multipleStatements: true,
});

module.exports = pool;
