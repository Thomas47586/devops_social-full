import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "104.248.149.175",
  user: "root",
  password: "1234",
  database: "mydevify_social",
  port: "3306",
});
