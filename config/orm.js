var connection = require('./connection.js');
//////
function QuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}
//////////////////
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

	// loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
			// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
			if (typeof value === 'string' && value.indexOf(' ') >= 0) {
				value = `'${value}'`;
			}
			// e.g. {name: 'Lana Del Grey'} => ['name='Lana Del Grey'']
			// e.g. {sleepy: true} => ['sleepy=true']
			arr.push(key + '=' + value);
		}
	}

	// translate array of strings to a single comma-separated string
	return arr.toString();
}
////////////////////
var orm = {
    selectAll: function(tableInput, cb) {
        var query = 'SELECT * FROM ??';
        connection.query(query,[tableInput],function(err,result){
            if(err) throw err;
            // console.log(result)
            cb(result);
        })
    }, 
    insertOne: function(tableInput,newBurger, cb) {
        var query = 'INSERT INTO ' + tableInput;
       //as seen on the cats exercise...concat strings & values to query.
       query += ' SET ';
       query += objToSql(newBurger);        
        console.log(query);
        connection.query(query,function(err,result){
            if(err) throw err;
            // console.log(result);
            cb(result);
        })
    },
    updateOne: function(tableInput,col,row , cb) {
        var query = 'UPDATE '+ tableInput
        
        query += " SET ";
        query += objToSql(col);

        query += " WHERE " ;
        query += objToSql(row);
        console.log(query);
        connection.query(query,function(err,result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;