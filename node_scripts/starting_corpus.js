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
	collection.insert({"level":"0.0.2","tags":["shark", "predator", "ocean"],"color":"#1E7032","meta":"","image":"apex.png","image2":"apex2.png","content":"%%%%plankton","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Apex Predators"}, function(err, docs) {});
	collection.insert({"level":"0.0.3","tags":["deep", "currents", "ocean"],"color":"#1E7032","meta":"","image":"dcurrents.png","image2":"dcurrents2.png","content":"%%%%ice","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Deep Currents"}, function(err, docs) {});
	collection.insert({"level":"0.0.4","tags":["ice", "video", "arctic"],"color":"#1E7032","meta":"","image":"ice_video.png","image2":"ice_video.png","content":"####0.0.4","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice Video"}, function(err, docs) {});
	collection.insert({"level":"0.0.5","tags":["ice", "core", "human"],"color":"#1E7032","meta":"","image":"naama.png","image2":"naama.png","content":"naama.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice Core Science"}, function(err, docs) {});
	collection.insert({"level":"0.0.6","tags":["icefree", "arctic", "ocean"],"color":"#1E7032","meta":"","image":"nwpassage.png","image2":"nwpassage2.png","content":"nwpassage.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Northwest Passage"}, function(err, docs) {});
	collection.insert({"level":"0.0.7","tags":["ocean", "acidification", "arctic"],"color":"#1E7032","meta":"","image":"oacid.png","image2":"oacid2.png","content":"oacid.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ocean Acidification"}, function(err, docs) {});
	collection.insert({"level":"0.0.8","tags":["ocean", "temperature", "warm"],"color":"#1E7032","meta":"","image":"otemp.png","image2":"otemp2.png","content":"$$$$1.0","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ocean Temperature"}, function(err, docs) {});
	collection.insert({"level":"0.0.9","tags":["plankton", "ocean", "arctic"],"color":"#1E7032","meta":"","image":"plankton.png","image2":"plankton2.png","content":"####0.0.9","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Plankton"}, function(err, docs) {});
	collection.insert({"level":"1.0.0","tags":["plankton", "ocean", "arctic"],"color":"#1E7032","meta":"","image":"plankton_illustration.png","image2":"plankton_illustration.png","content":"plankton_illustration.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Plankton Anatomy"}, function(err, docs) {});
	collection.insert({"level":"1.0.1","tags":["representativeness", "alaska", "arctic"],"color":"#1E7032","meta":"","image":"representativeness.png","image2":"representativeness.png","content":"representativeness.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Representativeness"}, function(err, docs) {});	
	collection.insert({"level":"1.0.2","tags":["ice", "ocean", "arctic"],"color":"#1E7032","meta":"","image":"sea_ice.png","image2":"sea_ice.png","content":"sea_ice.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Sea Ice"}, function(err, docs) {});
	collection.insert({"level":"1.0.3","tags":["arctic", "ocean", "timelapse"],"color":"#1E7032","meta":"","image":"timelapse.png","image2":"timelapse.png","content":"timelapse.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Time Lapse"}, function(err, docs) {});
	collection.insert({"level":"1.0.4","tags":["japan", "tsunami", "ocean"],"color":"#1E7032","meta":"","image":"japan-512.png","image2":"japan-512.png","content":"####1.0.4","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Japan Tsunami"}, function(err, docs) {});
	collection.insert({"level":"1.0.5","tags":["drained_lakes"],"color":"#1E7032","meta":"","image":"lakes_DL4.png","image2":"lakes_DL4.png","content":"lakes_DL4.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Drained Lakes 1"}, function(err, docs) {});
	collection.insert({"level":"1.0.6","tags":["drained_lakes"],"color":"#1E7032","meta":"","image":"lakes_drLake1.png","image2":"lakes_drLake1.png","content":"lakes_drLake1.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Drained Lakes 2"}, function(err, docs) {});
	collection.insert({"level":"1.0.7","tags":["drained_lakes"],"color":"#1E7032","meta":"","image":"lakes_mp2.png","image2":"lakes_mp2.png","content":"lakes_mp2.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Drained Lakes 3"}, function(err, docs) {});
	collection.insert({"level":"1.0.8","tags":["plankton"],"color":"#1E7032","meta":"","image":"plankton_IMG_0480.jpg","image2":"plankton_IMG_0480.jpg","content":"plankton_IMG_0480.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Plankton 1"}, function(err, docs) {});
	collection.insert({"level":"1.0.9","tags":["plankton"],"color":"#1E7032","meta":"","image":"plankton_IMG_0475.jpg","image2":"plankton_IMG_0475.jpg","content":"plankton_IMG_0475.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Plankton 2"}, function(err, docs) {});
	collection.insert({"level":"1.0.10","tags":["plankton"],"color":"#1E7032","meta":"","image":"plankton_IMG_0452.jpg","image2":"plankton_IMG_0452.jpg","content":"plankton_IMG_0452.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Plankton 3"}, function(err, docs) {});
	collection.insert({"level":"2.0.0","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_2013oct23_Area_C_Wells.jpg","image2":"maps_2013oct23_Area_C_Wells.jpg","content":"maps_2013oct23_Area_C_Wells.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 1"}, function(err, docs) {});
	collection.insert({"level":"2.0.1","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_2013oct23_Area_Wells_DEM.jpg","image2":"maps_2013oct23_Area_Wells_DEM.jpg","content":"maps_2013oct23_Area_Wells_DEM.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map2"}, function(err, docs) {});
	collection.insert({"level":"2.0.2","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_2013oct24_Area_C.jpg","image2":"maps_2013oct24_Area_C.jpg","content":"maps_2013oct24_Area_C.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 3"}, function(err, docs) {});
	collection.insert({"level":"2.0.3","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_MapWaterDk2.jpg","image2":"maps_MapWaterDk2.jpg","content":"maps_MapWaterDk2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 4"}, function(err, docs) {});
	collection.insert({"level":"2.0.4","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_WwaterMapAlaska.jpg","image2":"maps_WwaterMapAlaska.jpg","content":"maps_WwaterMapAlaska.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 5"}, function(err, docs) {});
	collection.insert({"level":"2.0.5","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_hs_pan.jpg","image2":"maps_hs_pan.jpg","content":"maps_hs_pan.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 6"}, function(err, docs) {});
	collection.insert({"level":"2.0.6","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_multiyear_ice_radarsat_200804_lrg.jpg","image2":"maps_multiyear_ice_radarsat_200804_lrg.jpg","content":"maps_multiyear_ice_radarsat_200804_lrg.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 7"}, function(err, docs) {});
	collection.insert({"level":"2.0.7","tags":["maps"],"color":"#1E7032","meta":"","image":"maps_waterM.png","image2":"maps_waterM.png","content":"maps_waterM.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Map 8"}, function(err, docs) {});
	collection.insert({"level":"2.0.8","tags":["graphic","permafrost","carbon"],"color":"#1E7032","meta":"","image":"graphic_2015-01-18.png","image2":"graphic_2015-01-18.png","content":"graphic_2015-01-18.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Permafrost Carbon Graphic"}, function(err, docs) {});
	collection.insert({"level":"3.0.0","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_12.jpg","image2":"soils_12.jpg","content":"soils_12.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 1"}, function(err, docs) {});
	collection.insert({"level":"3.0.1","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1628.jpg","image2":"soils_IMG_1628.jpg","content":"soils_IMG_1628.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 2"}, function(err, docs) {});
	collection.insert({"level":"3.0.2","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1636.jpg","image2":"soils_IMG_1636.jpg","content":"soils_IMG_1636.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 3"}, function(err, docs) {});
	collection.insert({"level":"3.0.3","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1640.jpg","image2":"soils_IMG_1640.jpg","content":"soils_IMG_1640.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 4"}, function(err, docs) {});
	collection.insert({"level":"3.0.4","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1642.jpg","image2":"soils_IMG_1642.jpg","content":"soils_IMG_1642.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 5"}, function(err, docs) {});
	collection.insert({"level":"3.0.5","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1644.jpg","image2":"soils_IMG_1644.jpg","content":"soils_IMG_1644.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 6"}, function(err, docs) {});
	collection.insert({"level":"3.0.6","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_IMG_1646.jpg","image2":"soils_IMG_1646.jpg","content":"soils_IMG_1646.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 7"}, function(err, docs) {});
	collection.insert({"level":"3.0.7","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_P1000493.jpg","image2":"soils_P1000493.jpg","content":"soils_P1000493.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 8"}, function(err, docs) {});
	collection.insert({"level":"3.0.8","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_RV2.jpg","image2":"soils_RV2.jpg","content":"soils_RV2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 9"}, function(err, docs) {});
	collection.insert({"level":"3.0.9","tags":["soil"],"color":"#1E7032","meta":"","image":"soils_microbes.png","image2":"soils_microbes.png","content":"soils_microbes.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Soils 10"}, function(err, docs) {});
	collection.insert({"level":"3.0.10","tags":["visualization"],"color":"#1E7032","meta":"","image":"vis_bGg1.png","image2":"vis_bGg1.png","content":"vis_bGg1.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Visualization 1"}, function(err, docs) {});
	collection.insert({"level":"3.0.11","tags":["visualization"],"color":"#1E7032","meta":"","image":"vis_lidarp.jpg","image2":"vis_lidarp.jpg","content":"vis_lidarp.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Visualization 2"}, function(err, docs) {});
	collection.insert({"level":"4.0.0","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3748.jpg","image2":"barrow_3748.jpg","content":"barrow_3748.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 1"}, function(err, docs) {});
	collection.insert({"level":"4.0.1","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3750.jpg","image2":"barrow_3750.jpg","content":"barrow_3750.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 2"}, function(err, docs) {});
	collection.insert({"level":"4.0.2","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3765.jpg","image2":"barrow_3765.jpg","content":"barrow_3765.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 3"}, function(err, docs) {});
	collection.insert({"level":"4.0.3","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3791.jpg","image2":"barrow_3791.jpg","content":"barrow_3791.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 4"}, function(err, docs) {});
	collection.insert({"level":"4.0.4","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3834.jpg","image2":"barrow_3834.jpg","content":"barrow_3834.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 5"}, function(err, docs) {});
	collection.insert({"level":"4.0.5","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_3996.jpg","image2":"barrow_3996.jpg","content":"barrow_3996.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 6"}, function(err, docs) {});
	collection.insert({"level":"4.0.6","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_4018.jpg","image2":"barrow_4018.jpg","content":"barrow_4018.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 7"}, function(err, docs) {});
	collection.insert({"level":"4.0.7","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_A_rounded_ice.jpg","image2":"barrow_A_rounded_ice.jpg","content":"barrow_A_rounded_ice.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 8"}, function(err, docs) {});
	collection.insert({"level":"4.0.8","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_A_site1.jpg","image2":"barrow_A_site1.jpg","content":"barrow_A_site1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 9"}, function(err, docs) {});
	collection.insert({"level":"4.0.9","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_Alaska150dpi_grayscale.jpg","image2":"barrow_Alaska150dpi_grayscale.jpg","content":"barrow_Alaska150dpi_grayscale.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 10"}, function(err, docs) {});
	collection.insert({"level":"4.0.10","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_BEO_2014_10_05_2223.jpg","image2":"barrow_BEO_2014_10_05_2223.jpg","content":"barrow_BEO_2014_10_05_2223.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 11"}, function(err, docs) {});
	collection.insert({"level":"4.0.11","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_Go-5.jpeg","image2":"barrow_Go-5.jpeg","content":"barrow_Go-5.jpeg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 12"}, function(err, docs) {});
	collection.insert({"level":"4.0.12","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_WC2.jpg","image2":"barrow_WC2.jpg","content":"barrow_WC2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 13"}, function(err, docs) {});
	collection.insert({"level":"4.0.13","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_gr2.jpg","image2":"barrow_gr2.jpg","content":"barrow_gr2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 14"}, function(err, docs) {});
	collection.insert({"level":"4.0.14","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_grar1.jpg","image2":"barrow_grar1.jpg","content":"barrow_grar1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 15"}, function(err, docs) {});
	collection.insert({"level":"4.0.15","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_grar2.jpg","image2":"barrow_grar2.jpg","content":"barrow_grar2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 16"}, function(err, docs) {});
	collection.insert({"level":"4.0.16","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_ice1.jpg","image2":"barrow_ice1.jpg","content":"barrow_ice1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 17"}, function(err, docs) {});
	collection.insert({"level":"4.0.17","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_kite1.png","image2":"barrow_kite1.png","content":"barrow_kite1.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 18"}, function(err, docs) {});
	collection.insert({"level":"4.0.18","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_seaflow1.jpg","image2":"barrow_seaflow1.jpg","content":"barrow_seaflow1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 19"}, function(err, docs) {});
	collection.insert({"level":"4.0.19","tags":["barrow"],"color":"#1E7032","meta":"","image":"barrow_snTr1.jpg","image2":"barrow_snTr1.jpg","content":"barrow_snTr1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Barrow 20"}, function(err, docs) {});
	collection.insert({"level":"5.0.0","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_RM75.jpg","image2":"ice_RM75.jpg","content":"ice_RM75.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 1"}, function(err, docs) {});
	collection.insert({"level":"5.0.1","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_gice1.jpg","image2":"ice_gice1.jpg","content":"ice_gice1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 2"}, function(err, docs) {});
	collection.insert({"level":"5.0.2","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_gice2.jpg","image2":"ice_gice2.jpg","content":"ice_gice2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 3"}, function(err, docs) {});
	collection.insert({"level":"5.0.3","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_i1.jpg","image2":"ice_i1.jpg","content":"ice_i1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 4"}, function(err, docs) {});
	collection.insert({"level":"5.0.4","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_il1.jpg","image2":"ice_il1.jpg","content":"ice_il1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 5"}, function(err, docs) {});
	collection.insert({"level":"5.0.5","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_il2.jpg","image2":"ice_il2.jpg","content":"ice_il2.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 6"}, function(err, docs) {});
	collection.insert({"level":"5.0.6","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_il3.jpg","image2":"ice_il3.jpg","content":"ice_il3.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 7"}, function(err, docs) {});
	collection.insert({"level":"5.0.7","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_im1.jpg","image2":"ice_im1.jpg","content":"ice_im1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 8"}, function(err, docs) {});
	collection.insert({"level":"5.0.8","tags":["ice"],"color":"#1E7032","meta":"","image":"ice_l1.jpg","image2":"ice_l1.jpg","content":"ice_l1.jpg","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Ice 9"}, function(err, docs) {});
	collection.insert({"level":"1.0.11","tags":["soil", "permafrost", "microbes"],"color":"#1E7032","meta":"","image":"permafrost.png","image2":"permafrost.png","content":"permafrost.png","area":0,"h_play":0,"v_play":0,"playcount":"0","name":"Permafrost"}, function(err, docs) {
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
			console.log("[" + node.level + "]:[" + node.tags + "]:[" + node.color + "]:[" + node.content + "]");
		}
	});
	console.log("===================================================================================");
	
	
	//TO CLOSE THE CONNECTION:
	/*
	console.log("Closed connection");
	db.close();
	*/
});