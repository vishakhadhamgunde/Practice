var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'skynetscore'
  });
  
  connection.connect();

function createUser(query, callback ){
	
  connection.query(query, function(error, Results){
			if(error){
				throw error;
			}else{
				callback(error, Results );
		 }
	});
}


function createbankUser(callback, createQuery){
	console.log("inside createbankUser");
  connection.query(createQuery, function(error, Results){
	console.log("query executed");

			if(error){
				console.log("We are in createbankUser error!!");
				throw error;
			}
			else
				{
				console.log("Results of createbankUser is "+ Results.changedRows);
				callback(error, Results );
				}
	});
}

function user(query, callback) {
  connection.query(query, function(error, Results){
			if(error){
				console.log("We are in User error!!");
				throw error;
			}else{
				console.log("Results User is "+ Results);
				callback(error, Results );
			}
	});
};

exports.user = user;
exports.createUser = createUser;
exports.createbankUser = createbankUser;