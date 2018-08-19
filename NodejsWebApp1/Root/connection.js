var mysql = require('mysql');
var config = {
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'itgate'
};

var conn = mysql.createConnection(config, function (req, res) {
    console.log('Connection to database established.');
});

exports.getConnection = function () {
    return conn;
};