const postgres = require("postgres");
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
module.exports = postgres("", {
  host: DB_HOST, // Postgres ip address[s] or domain name[s]
  port: DB_PORT, // Postgres server port[s]
  database: DB_NAME, // Name of database to connect to
  username: DB_USER, // Username of database user
  password: DB_PASSWORD, // Password of database user
});
