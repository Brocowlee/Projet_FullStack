const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstack_reddit"
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connection a la BDD réussi!');
});

module.exports = con;