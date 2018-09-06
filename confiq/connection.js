var mysql = require ('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'hblock1299',
    database:'burgers_db'
})

connection,connection(function(err){
    if (err) throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;