
const path = require('path');
var mysql = require('mysql');
require('dotenv').config({ path: path.resolve(__dirname + '/../.env') });



var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_DATABASE
  });

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;