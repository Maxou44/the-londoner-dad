function	Loading()
{
	this.wait = 0;
	this.anim = 1;
};

Loading.prototype.afficher = function(id,x,y)
{
	context.fillStyle = "#151515";
	context.fillRect(0,0,1280,720);
	
	if(images["pictures/gui/loadingfond.png"])
	{
		context.drawImage(images["pictures/gui/loadingfond.png"],0,0,1280,720,0,0,1280,720);
	}
	
		
	if(images["pictures/gui/loading.png"])
	{
		context.drawImage(images["pictures/gui/loading.png"],(~~this.anim-1)*300,0,300,169,490,183,300,169);
		
		this.anim += diff_time * 0.25;
	
		if(this.anim >25)
		{
			this.anim = 1
			this.wait++;
		}
	}
	
	var i = 0;
	var compt = 0;
	while(i < images.length)
	{
		if(images[i].load)
		{
			compt++;
		}
	}
	
	if(compt == images.length && this.wait >= 2 )
	{
		global = 2;
	}
};
