const mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '841204414',
  database : 'vuexms'
});

module.exports=connection;

