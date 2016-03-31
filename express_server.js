var express = require('express');
var app     = express();

// var root_directory = "/Users/mireyarodriguez/bradbury08_10";
var root_directory = "/Users/mireyarodriguez/bradbury03_09";

var MongoClient = require('mongodb').MongoClient, 
    format = require('util').format,
    util = require('util');
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
var async = require('async');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
        // res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':1337');
        // res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host);
        res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1");
        res.setHeader('Access-Control-Allow-Origin', "http://10.0.2.15");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }
);

// database parameters
var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;
var LINE_SIZE = 120;
var levelForContext = '';
var longstring = '';
var collection = '';
var backgrounds = '';
var layoutCollection = '';
var random_index = 0;
var userinfo_collection = '';
var keywords = '';
MongoClient.connect(format("mongodb://%s:%s/bradbury?w=1", host, port), function(err, db) {
	if(!err) {
		console.log("We are connected");
 	} else {
		console.log("Connection error");
	}
	collection = db.collection('nodes');
	fillers = db.collection('fillers');
	userinfo_collection = db.collection('userinfo');
    layoutCollection = db.collection('fullLayout');
    
    
});

function return_json(r, j)
{
    
	for (var i = 0; i < j.length; i++)
		console.log('>> ' + j[i]['filename'],j[i]['level']);

	r.json(j);
}



app.get('/get_fillers', function(req, res, callback) {
		console.log('get_fillers');
		fillers.find({}).toArray(function(err, r) { return_json(res, r); });
});


app.get('/get_content', function(req, res, callback) {
	console.log('get_content: ' + req.query.field + ' ' + req.query.value);

	userinfo_collection.insert(req.query, function(err, docs) {});
    
	nodes = [];
  
//  
//    if(req.query.field=='layout')
//	{
//        var val = req.query.value;
//        var layout_filename = "";
//        var layout_name = "";
//        var layout_sequence = "";
//        var layout = [];
//        var indx;
//        var regex;
//         
//                var seq = ", " + val + ",|^" + val + ",|^" + val + "$|, " + val + "$";
//                var expression = {'name': new RegExp(val)};
//                  layoutCollection.find(expression, function(err, cursor)
//                {
//                        cursor.toArray(function(e, results) 
//                        { 
//                            for(k = 0; k < results.length; k++)
//                            {
//                                index = Math.floor(Math.random() * results.length); 
//                                layout.push(results[index]);
//                                
//                            }
//       
//                            
//                layout_filename = "" + layout.filename;
//                layout_name = "" + layout.name;
//                layout_sequence = "" + layout.sequence;
//                            
//                console.log(layout);
//                console.log(layout_name);
//                console.log(layout_sequence);            
//                         
//                var value = ", " + layout_name + ",|^" +  layout_name  + ",|^" +  layout_name  + "$|, " +  layout_name  + "$";
//                
//                console.log(layout_filename);
//                var expression = {'filename': new RegExp(value)};
//		collection.find(expression, function(err, cursor)
//		{
//				cursor.toArray(function(e, results) 
//				{ 
//					   for(k = 0; k < results.length; k++)
//					{
//						index = Math.floor(Math.random() * results.length);
//						nodes.push(results[index]);
//						results.splice(index, 1); //remove that one from consideration
//					}
//					return_json(res, nodes);
//				})
//		});
//    
//            });
//    });
//        
//}
                                        
                                        
    if(req.query.field=='layout')
	{
        var val = req.query.value;
        var layout_filename = "";
        var layout_name = "";
        var layout_sequence = "";
        var layout = [];
        var indx;
        var regex;
        
    layoutCollection.find({'name': new RegExp(val)}).each(function(err, node) {
        if(node != null) {
            layout_filename = "" + node.filename;
            layout_name = "" + node.name;
            layout_sequence = "" + node.sequence;
            
            for(i = 0; i < layout_filename.count; i++) {
                layout.push(layout_filename);
                console.log(layout);
            }
        
        async.parallel([
            function(callback){
                 var choices = layout.split(",");
                        for(j=0; j<choices.length; j++) {       
                                choices[j] = choices[j].trim();
                               
                            }
                var indx = Math.floor(Math.random()*choices.length); //randomly select a level 
                 var value = ", " + layout_filename + ",|^" +  layout_filename  + ",|^" +  layout_filename + "$|, " + layout_filename + "$";
                    var expression = {'filename': new RegExp(regex)}; // in the LEVEL column in 
                        collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
																nodes.push(results); //push the result where it obtains all of the image node                                                
//												                console.log(results);
												
														})
												    });
            
            },
            
        ], function(err, results) { return_json(res, nodes); });
         
                                                                
    }
    });
}
    
                                                         
    else if(req.query.field=='rules')
	{
            
		var rule = req.query.value;
		var found_rule = false;
		var story_type = "";
		var content_type = "";
        var level = "";
        var context = "";
        var story = "";
		var dice_roll = Math.floor(Math.random()*2+1);
		var dice_roll2 = Math.floor(Math.random()*2+1);
        

		  collection.find({'filename': new RegExp(rule)}).each(function(err, node) {
        
			if(node != null) {
				found_rule = true;
				story_type = "" + node.story_type;
				content_type = "" + node.content_type;
                level = "" + node.level;
                context = "" + node.context;
                story = "" + node.Story;
                
    
                var nodes = [];
                 
                async.parallel([
               
                function(callback) {
                    //Obtain an image from levels 
                        
                        var choices = level.split(",");
                        for(j=0; j<choices.length; j++) {       
                                choices[j] = choices[j].trim();
                               
                            }
                        var indx = Math.floor(Math.random()*choices.length); //randomly select a level 
                        console.log("Story selected"+ " " + choices);
                        var story = Math.floor(choices[indx])+1; // from the current value from choice add 1 
                        
                        var value = [];
                        for(v=0; v<2; v++) {
                            value[v] = story+v;
                            // add leading zeros for story who numbers are 1 and 10 this used because story variable converts the number to a whole number
                            value[v] = (value[v] < 100) ? ( (value[v] >= 10) ? ("0" + value[v]) : ("00" + value[v]) ) : value[v]; 
           
                        }

                    
                        if (value != "999") {
                                value = value;
                            } else {
                                value = "000";
                        }
                    
                        
                        console.log("Level choosen from image" + " " + value[0] + " , " + value[1]);
                        
                        //regualar expression of "or" to match the stories that might 
                        //not have content this matches the next interations

                     //MATCHES FIRST OR SECOND ITERATION 
                      var regex = "(," + value[0] + "|^" + value[0] + ",|^" + value[0]+ "$|^" + value[0] + "$)|(," + value[1] + "|^" + value[1] + ",|^" + value[1]+ "$|^" + value[1] + "$)"; 
                  
                    // MATHCHING THE FIRST ITERATION 
                     //   var regex = ", " + value[0] + ",|^" + value[0]+ ",|^" + value[0]+ "$|, " + value[0] + "$"; //matching
                    
                        var levelOne = value[0];
                        var levelTwo = value[1];
                    
                        //Storing the level being selected
                        levelForContext = levelOne + "," + levelTwo;
 
                        var expression = {'$and': [{'include': 'x'}, {'level': new RegExp(regex)}]}; // in the LEVEL column in spreadsheet match the regular expression variable called regex
                        collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
                                        
															for(k = 0; k < 2 && k < results.length; k++) //choose one from the results
															{
																index = Math.floor(Math.random() * results.length);
																nodes.push(results[index]); //push the result where it obtains all of the image node                                                  
                                                                
																results.splice(index, 1); //remove that one from consideration
															}
															callback();
														})
												    });
                            },
                  function(callback) {
				    //select content from same story column 
						choices = story.split(",");
						for(j=0; j<choices.length; j++) 
                        {
							choices[j] = choices[j].trim();
						}
                
                       
					    var indx = Math.floor(Math.random()*choices.length); //randomly select a level
                        var value = choices[indx];             
                       
            
                      console.log("Same story" + " " + value);
					  
                         var regex = ", " + value + ",|^" + value+ ",|^" + value+ "$|, " + value + "$"; //matching

                        var expression = {'$and': [{'include': 'x'}, {'Story': new RegExp(regex)}]};
						collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
															for(k = 0; k < 2 && k < results.length; k++)
															{
																index = Math.floor(Math.random() * results.length);
																nodes.push(results[index]);
																results.splice(index, 1); //remove that one from consideration
															}
															callback();
														})
													});
					},
                      function(callback) {
				    //select content from same row on the story by using the last digit of #8
						choices = level.split(",");
						for(j=0; j<choices.length; j++) 
                        {
							choices[j] = choices[j].trim();
						}
                
                       
					    var indx = Math.floor(Math.random()*choices.length); //randomly select a level
                        var valueChosen = choices[indx];             
                       
                    
                     
                      var story = valueChosen.toString().split("").map(Number);

                      story.splice(2, 1, "8");
                    
                      var value = story.toString();
                      value = value.replace(/,/g, '');

                      console.log("Supporting context" + " " + value);
					  
                         var regex = ", " + value + ",|^" + value+ ",|^" + value+ "$|, " + value + "$"; //matching

                        var expression = {'$and': [{'include': 'x'}, {'level': new RegExp(regex)}]};
						collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
															for(k = 0; k < 1 && k < results.length; k++)
															{
																index = Math.floor(Math.random() * results.length);
																nodes.push(results[index]);
																results.splice(index, 1); //remove that one from consideration
															}
															callback();
														})
								                    });
					},
               
				], function(err, results) { return_json(res, nodes); });
			}                                                 
		  });
    }
    else if (req.query.field=='story_context')
    {
        //Context_story is a rule set for an image selected that has level that ends in a eigtht 
        // We are storing the previous level and using it's rules to select content
            var save_story = levelForContext;
        
            console.log("Inside in story_context" + " " + save_story);
            async.parallel([
                
                    function(callback) {
                    //Obtain an image from levels 
                        
                        var choices = save_story.split(",");
                        for(j=0; j<choices.length; j++) {       
                                choices[j] = choices[j].trim();
                               
                            }
                        var indx = Math.floor(Math.random()*choices.length); //randomly select a level 
                        console.log("Story selected"+ " " + choices);
                        var story = Math.floor(choices[indx])+1; // from the current value from choice add 1 
                        
                        var value = [];
                        for(v=0; v<2; v++) {
                            value[v] = story+v;
                            // add leading zeros for story who numbers are 1 and 10 this used because story variable converts the number to a whole number
                            value[v] = (value[v] < 100) ? ( (value[v] >= 10) ? ("0" + value[v]) : ("00" + value[v]) ) : value[v]; 
           
                        }

                    
                        if (value != "999") {
                                value = value;
                            } else {
                                value = "000";
                        }
                    
                        
                        console.log("Level choosen from image" + " " + value[0] + " , " + value[1]);
                        
                        //regualar expression of "or" to match the stories that might 
                        //not have content this matches the next interations

                     //MATCHES FIRST OR SECOND ITERATION 
                      var regex = "(," + value[0] + "|^" + value[0] + ",|^" + value[0]+ "$|^" + value[0] + "$)|(," + value[1] + "|^" + value[1] + ",|^" + value[1]+ "$|^" + value[1] + "$)"; 
                  
                    // MATHCHING THE FIRST ITERATION 
                     //   var regex = ", " + value[0] + ",|^" + value[0]+ ",|^" + value[0]+ "$|, " + value[0] + "$"; //matching
                    
                        var levelOne = value[0];
                        var levelTwo = value[1];
                    
                        //Storing the level being selected
                        levelForContext = levelOne + "," + levelTwo;
 
                        var expression = {'$and': [{'include': 'x'}, {'level': new RegExp(regex)}]}; // in the LEVEL column in spreadsheet match the regular expression variable called regex
                        collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
                                        
															for(k = 0; k < 3 && k < results.length; k++) //choose one from the results
															{
																index = Math.floor(Math.random() * results.length);
																nodes.push(results[index]); //push the result where it obtains all of the image node                                                  
                                                                
																results.splice(index, 1); //remove that one from consideration
															}
															callback();
														})
												    });
                            },
               function(callback) {
						//select by using the last digit of #0
                        var regex = "[0-9][0-9](0)";; //matching any digit with a 2 at the end
                        
                        var expression = {'$and': [{'include': 'x'}, {'level': new RegExp(regex)}]}; // in the LEVEL column in spreadsheet match the regular expression variable called regex
                        collection.find(expression, function(err, cursor)
													{
														cursor.toArray(function(e, results) 
														{ 
															for(k = 0; k < 1 && k < results.length; k++) //choose one from the results
															{
                        
																index = Math.floor(Math.random() * results.length);
																nodes.push(results[index]); //push the result where it obtains all of the image node
																results.splice(index, 1); //remove that one from consideration
															}
															callback();
														})
												    });
	                               },
                   
				], function(err, results) { return_json(res, nodes); });
         
			}
    
                                                               
});
                                                            
    
/* serves all the static files */
app.get(/^(.+)$/, function(req, res)
{
	 res.sendFile(root_directory + "/" + req.params[0]);
});

app.listen(1337, function() 
{
	console.log('Server running at http://127.0.0.1:1337/');
});