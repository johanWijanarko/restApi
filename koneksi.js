var mysql      = require('mysql');

// koneksi ke db 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'johan',
  password : 'johanwijanarko',
  database : 'u590759601_kpku_hk'
});

connection.connect((err)=> {
    if(err) throw err;
    console.log('database connect');
});

module.exports = connection;