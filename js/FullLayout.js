var FullLayout = function()
{
    this.full_Layout;
    this.fullLayout_multiple = "";
    this.fullLayout_all = [];
    this.fullLayout_first = [];
    this.fullLayout_sec = [];
    this.firstLayout;
    this.secLaayout;
 
}

FullLayout.prototype.setLayout = function()
{
    var image = this.full_Layout;

    $('#ping-container').html('<img class="LayoutOne" src="images/DATABASE/' + image + '" width="100%" height="100%">');

    var userInput = "&image=" + "&time=" + new Date().getTime() + "&image=" + image;
    var action = "rules";
    var query_url = "http://127.0.0.1:1337/get_content?field=rules" + userInput + "&value=" + image;
    
    $(".LayoutOne").click(function() {
        loadContent(userInput, action, image);
        
	});

}

FullLayout.prototype.setMultipleLayout = function() 
{
    var image2 = this.secLayout;
    var image = this.firstLayout;
    
    var userInput = "&image=" + "&time=" + new Date().getTime() + "&image=" + image2;
    var action = "rules";
    var query_url = "http://127.0.0.1:1337/get_content?field=rules" + userInput + "&value=" + image2;
    
    $('#ping-container').html('<img class="LayoutOne" src="images/DATABASE/' + image + '" width="100%" height="100%">');
    $('#pong-container').html('<img class="LayoutTwo" src="images/DATABASE/' + image2 + '" width="100%" height="100%">');
    
    $(".LayoutOne").click(function() {
         $('#ping-container').html('<img class="LayoutTwo" src="images/DATABASE/' + image2 + '" width="100%" height="100%">');
         $('#pong-container').html('<img class="LayoutOne" src="images/DATABASE/' + image + '" width="100%" height="100%">');
          
         $(".LayoutTwo").click(function() {
        loadContent(userInput, action, image2);    
    
	});  
	});

}

FullLayout.prototype.multipleLayout = function() 
{

    if(this.fullLayout_first.length > 1)
    {
        this.firstLayout = this.fullLayout_first[Math.floor(random()* this.fullLayout_first.length)].trim();
        
    }
    else 
    {
        this.firstLayout = this.fullLayout_first
    }
    
        if(this.fullLayout_sec.length > 1) 
        {
            this.secLayout = this.fullLayout_sec[Math.floor(random()* this.fullLayout_sec.length)].trim();
   
        }
        else
        {
    
            this.secLayout = this.fullLayout_sec
   
        }
    
    this.setMultipleLayout();

}

FullLayout.prototype.run = function(str) 
{
     $('#pong-container').css("visibility", "hidden")
     $('#ping-container').css("visibility", "visible")
     
    
     
     if(str.indexOf('/') > -1) 
     {
        this.fullLayout_all = str.split('/');
        

             for(i=0; i<this.fullLayout_all.length; i++) 
                {

               this.fullLayout_all[i] = this.fullLayout_all[i].split(':');
               this.fullLayout_first = this.fullLayout_all[0];
                this.fullLayout_sec = this.fullLayout_all[1];
    
                }
            this.multipleLayout();
     }
    else 
    {
        
        this.fullLayout_first = str.split(':');
        
        console.log(this.fullLayout_first);
        
            if (this.fullLayout_first.length > 1) 
            {
                this.full_Layout = this.fullLayout_first[Math.floor(random() * this.fullLayout_first.length)].trim();
            }
            else 
            {
                this.full_Layout = this.fullLayout_first[0];

            }
        
        this.setLayout();
}

}