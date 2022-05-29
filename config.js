try {
  const dotenv = require("dotenv").config();
} catch (err) {}
module.exports = {
  secret: "This is a secret",
  db_dialect: "mysql",
  db_host: process.env.MYSQL_HOST,
  db_port: "3306",
  db_name: process.env.MYSQL_NAME,
  db_user: process.env.MYSQL_USER,
  db_pass: process.env.MYSQL_PASSWORD,
  pw_salt: "This is namak",
};
