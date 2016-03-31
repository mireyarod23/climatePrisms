var MongoClient = require('mongodb').MongoClient, 
    format = require('util').format;

// Connect to the db
var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : '127.0.0.1';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;
var LINE_SIZE = 120;

console.log("Connecting to " + host + ":" + port);
MongoClient.connect(format("mongodb://%s:%s/bradbury?w=1", host, port), function(err, db) {
	if(!err) {
		console.log("We are connected");
  	} else {
		console.log("Connection error");
  	}
	var collection = db.collection('nodes');

	//TO EMPTY THE DATABASE:
	
	collection.remove(function(err, collection) {
		console.log("emptied database");		
	});
	console.log("===================================================================================");	
	
	//TO CLOSE THE CONNECTION:
	console.log("Closed connection");
	db.close();
});