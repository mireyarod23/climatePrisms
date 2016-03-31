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
	
	//TO ADD A NODE:
	
	console.log(">> Adding Node");
	collection.insert({"level":"0.0.0","tags":["soil", "ice", "core"],"color":"#1E7032","meta":"","image":"ice_core.png","image2":"ice_core.png","content":"ice_core.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice Core"}, function(err, docs) {});
	collection.insert({"level":"0.0.1","tags":["soil", "microbes", "core"],"color":"#1E7032","meta":"","image":"soil_microbes.png","image2":"soil_microbes.png","content":"soil_microbes.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soil Microbes"}, function(err, docs) {});
	var level_count = 2;
	for(i=0; i<10000; i++) {
		collection.insert({"level":"0.0."+(level_count++),"tags":["tag"+(level_count%800), "desc"+(level_count%500), "unique"+level_count],"color":"#1E7032","meta":"","image":"permafrost.png","image2":"permafrost.png","content":"permafrost.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Permafrost"}, function(err, docs) {});
	}
	collection.insert({"level":"1.0.0","tags":["soil", "permafrost", "microbes"],"color":"#1E7032","meta":"","image":"permafrost.png","image2":"permafrost.png","content":"permafrost.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Permafrost"}, function(err, docs) {
		console.log("DONE");
	});
	
	
	//TO CREATE THE INDEX:
	
	collection.createIndex(["level", ['_id', 1], ['tags', 1]], function(err, indexName) {
		console.log("INDEX Created");
	});
	console.log("===================================================================================");
	
	
	//TO QUERY THE NODES:
	
	var nodes = {};
	collection.find().each(function(err, node) {
		if(node != null) {
			console.log("[" + node.level + "]:[" + node.color + "]:[" + node.content + "]");
		}
	});
	console.log("===================================================================================");
	
	
	//TO CLOSE THE CONNECTION:
	/*
	console.log("Closed connection");
	db.close();
	*/
});