// CreateView.js August 10
//

var current_story_count = 0;


function random()
{
	return Math.random();
	// return 0.25;
}

function createView(state, contents)
{

	state.properties = getProperties(contents); //fill the properties data structure


	state.candidate_images  = [];
	for (var i = 0; i < state.properties.length && i < 6; i++)
	{
		var prop = state.properties[i];
		state.candidate_images.push(prop);
	}

	// state.tiled_images = state.layout.createTiles(state.candidate_images);
	// var html = createHTML(state);
	// post_layout(html);

	var image_list = [];
	for (var i in state.candidate_images)
		 image_list.push({name: "images/" + state.candidate_images[i].folder + "/" + state.candidate_images[i].image, index: i});

	ImageLoader.init(image_list, imagesLoaded, state)
	ImageLoader.start($('#temp'))
}

function imagesLoaded(ids, data)
{
	var original_candidate_images = state.candidate_images;

	state.candidate_images = []
	for (var i in ids)
	{
		var c = original_candidate_images[ids[i].index];
		c.width = ids[i].width;
		c.height = ids[i].height;
		state.candidate_images.push(c);
	}

	state.tiled_images = state.layout.createTiles(state.candidate_images);
	var html = createHTML(state);
	post_layout(html);
}

function getProperties(nodes)
{
	properties = new Array();

	for (var i = 0; i < nodes.length; i++)
	{
		var n = nodes[i];
		var p = {
				level:						n.level,
				tags: 						n.tagmain + ',' + n.tagmain2 + ',' + n.subcategory,
				color: 						n.color,
				meta:						n.provenance,
				image: 						n.filename,
                context:                    n.context,
				rollover_image:		        n.rollover,
				content:					n.content,
				area:						n.area,
				folder:						n.folder,
				crop:						n.crop,
				texture:					n.texture,
				name: 						n.caption,
				width: 						n.width,
				height:						n.height,
                Story:                      n.Story,
                content_type:               n.content_type,
                keyword:                    n.keyword
        };
				
		// Eliminate duplicates

		for (var j = 0; j < properties.length; j++)
			if (p.image == properties[j].image)
				break;

		if (j == properties.length)
			properties.push(p);
	}

	return properties;
}

function getKeywordProperties()
{
	keywordProperties = new Array();

	for (var i = 0; i < nodes.length; i++)
	{
		var n = nodes[i];
		var p = {
				image: 						n.filename,
                keyword:                    n.keyword
        };
				
		// Eliminate duplicates

		for (var j = 0; j < properties.length; j++)
			if (p.image == properties[j].image)
				break;

		if (j == properties.length)
			properties.push(p);
	}

	return properties;
}

function createTiles(candidate_images)
{
	var croppable_images = new Array();
	var texture_images   = new Array();
	var content_images   = new Array();

	for (var i in candidate_images)
	{
		image = candidate_images[i];
		if (image.texture == 'Y')
			if (image.crop == 'Y')
				croppable_images.push(image);
			else 
				texture_images.push(image);
		else
			content_images.push(image);
	}

	var candidate_images = content_images.concat(texture_images).concat(croppable_images);

	// candidate_images = [candidate_images[0]];

	var tiled_images = createLayout(candidate_images);

	return tiled_images;
}

function popup_info(e, i)
{
	e.parent().find("#" + i).css('visibility', 'visible');
}

function popdown_info(e, i)
{
	e.parent().parent().css('visibility', 'hidden');
}

//LAYOUT CREATION BY PASSING HTML to Post_layout
function createHTML(state)
{
        
	var images = state.tiled_images;

	// Colors for "images" without content - e.g. empty rects

	var colors = ['grey'];


    current_story_count = current_story_count + 1;

	html = '';

	var img_id = 0;
	for (var i in images)
	{
		var image = images[i];

		var divid = '"div_' + img_id + '"';
		var capid = '"cap_' + img_id + '"';
		var imgid = '"img_' + img_id + '"';
		var infid = '"inf_' + img_id + '"';

		var x    = image.x;
		var y    = image.y;
		var rw   = image.rw;
		var rh   = image.rh
		var iw   = image.rw;
		var ih   = image.rh;

		if (image.empty)
		{
			var b = state.fillers[Math.floor(random()*0.99*state.fillers.length)];
         
    
			var w = rw / b.width;
			var h = rh / b.height;

			var s;
			if (w > h) s = w;
			else s = h;

			var iw = s * b.width;
			var ih = s * b.height;

			html += '<div id=' + divid + ' style="overflow:hidden;position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + rw + 'px;height:' + rh + 'px; background-color:' + colors[img_id] + '">';
			html += '  <img style="width:' + iw + 'px;height:' + ih + 'px;" src="' + b.fname + '"/>'
			html += '</div>';
		}
		else
		{
			var info = ""
			if (image.name.length == 0 && image.meta.length > 0)
				info = image.name
			else if (image.name.length > 0 && image.meta.length == 0)
				info = image.name
			else if (image.name.length > 0 && image.meta.length > 0)
				info = image.name
				//info = image.meta + ', ' + image.name
			
      html += '<div id=' + divid + ' style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + rw + 'px;height:' + rh + 'px)">';
      html += 	'<img id=' + imgid + ' style="width:' + rw + 'px;height:' + rh + 'px" src="images/' + image.folder + "/" + image.image + '", ' + embedAction(image) + ' />';

            // matching key words adding href link for destination. 
            // if could add multiple database to access then create database that has all the possible key words with its corresponding level. 
            // corrisponding level will the execute inside bradbury html with proper link, which then access the express_server
                       
//            keywords.forEach(function(inf) {
//                info = info.split(RegExp("\\b" + inf + "\\b", "i")). join("<a href=#>" +inf + "</a>"); 
//               });
//            var words  = [];
//            var k = state.keywords;
//
//            for (var i= 0; i < k.length; i++) 
//            {
//                var key = k[i];
//                words.push(key.keyword);
//               
//            
//            var userInput = "&image=" + "&time=" + new Date().getTime() + "&image=" + k[i];
////                text = text.replace(new RegExp(i, gi), function(word) {
//           //     info = info.split(RegExp("\\b" + k[i] + "\\b", "i")). join("<a href=http://127.0.0.1:1337/get_content?field=layout" + userInput + "&value=" + k[i] + ">" + k[i] + "</a>"); 
////               });
//            
//           // }
//           
//                words.forEach(function(inf) {
//                console.log(key.filename);
//                info = info.split(RegExp("\\b" + inf + "\\b", "i")). join("<a href=# onclick=return  >" + inf + "</a>"); 
//               });
//            }
        
			if (info != "")
			{
                info;
				html +=   '<div id=' + infid + ' class=info_popup style="font-family:Sans-serif,Arial,Sans;visibility:hidden;top:0px;left:0px;width:100%;height:100%">';
				html += 		'<div style="position:absolute;top:0%;left:0px;width:100%;height:100%;background-color:black;opacity:0.3;z-index:1001"></div>';
				html += 		'<div style="position:absolute;margin:10px;bottom:0px;right:20px;left:20px;background-color:#000000;opacity:0.8;z-index:1002;padding:14px">';
				html +=        '<p style="color:white">' + info + '</p>';
//				html +=       '<button style="visibility:inherit" onclick=' + "'popdown_info($(this))';>Close</button>";
                html += 		'<div id=close style="visibility:inherit;position:absolute;margin:10px;bottom:0px;right:40px;width:100%;height:100%"background-color:#F5EED7;opacity:0.1;z-index:1002;padding:14px" onmouseout=' + "'popdown_info($(this), " + infid + ")'" +'>';
                html += 	'</div>'
				html += 		'</div>'
				html += 	'</div>'
				html +=    '<img style="position:absolute;left:' + (rw-50) + 'px;top:' + (rh-50) + 'px;width:50px;height:50px" onmouseover=' + "'popup_info($(this), " + infid + ")'" + ' src="images/icons/icon.png">';

			}
            
           
           
      html += '</div>';
		}
                            
		img_id ++;
	}

	return html;
}




function embedAction(image)
{
	var choice, hdr, value, typ, context_level, context_var, start_bool;

	content = image.content;
    context_story = image.level;
    start_bool = "false";  

	if (content.length > 0)
	{
		content = content.split(',')
		if (content.length > 1)
			content = content[Math.floor(random() * content.length)].trim();
		else
			content = content[0]

		hdr    = content.substring(0,4);
		choice = content.substring(4);
	}
	else
	{
		hdr = "none";
		choice = "none";
	}


  if (hdr == "####")
    return 'onclick=state.animator.run("' + choice + '")';

    if (hdr == "^^^^")
        current_story_count = 0;
        
   
	if		(hdr == "%%%%") typ = "tags" ,   value = choice;
	else if (hdr == "$$$$") typ = "level",   value = choice;
	else if (hdr == "&&&&") typ = "layout",   value = choice;
	else                    typ = "rules",   value = image.image,   context_story = image.level,   context_var = image.context;
      
    
    return 'onclick="loadUserInfo(event, this.innerHTML, ' + "'" + choice +  
                                                             "', '" + typ + "', '" + value + 
                                                             "', '" + image.Story + "', '" +  current_story_count + "','" +  start_bool + "')" + '"';

                                                       


}