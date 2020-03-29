function Mouse() {

	this.posX = -1;
	this.posY = -1;
	
	this.bouton = 0;
	this.clic = false;
	
	this.lock = false;
}

Mouse.prototype.updatePosition = function(event) {
	var el = canvas;
 var ox = -el.offsetLeft,
  oy = -el.offsetTop;
 while(el=el.offsetParent){
    ox += el.scrollLeft - el.offsetLeft;
    oy += el.scrollTop - el.offsetTop;
}
  
	var scaleToFitX = (window.innerWidth-10) / 1280;
	var scaleToFitY = (window.innerHeight-10) / 720;
	
	if(typeof(options)=='undefined')
	{
		var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
	}
	else
	{
		if(options.resized() == 1)
		{
			var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
		}
		else
		{
			var optimalRatio = 1;
		}
	}
	
	this.posX = ~~((event.clientX + ox)/optimalRatio);
	this.posY = ~~((event.clientY + oy)/optimalRatio);

	
	
}

Mouse.prototype.setClic = function(v) {
	
	this.clic = v;
}

Mouse.prototype.setBouton = function(v) {
	
	this.bouton = v;
}

Mouse.prototype.getPositionX = function() {
	return this.posX;
}
Mouse.prototype.getPositionY = function() {
	return this.posY;
}

Mouse.prototype.clicInBox = function(startX,startY,sizeX,sizeY) {
	
	
	if(startX<=this.posX && startY<=this.posY && startX+sizeX>=this.posX && startY+sizeY>=this.posY && souris.click() && souris.touche() == 1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Mouse.prototype.survolBox = function(startX,startY,sizeX,sizeY) {
	
	if(startX<=this.posX && startY<=this.posY && startX+sizeX>=this.posX && startY+sizeY>=this.posY)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Mouse.prototype.click = function(v) {
	if(this.lock == false)
	{
		return this.clic;
	}
	else
	{
		return false;
	}
}
Mouse.prototype.touche = function(v) {
		return this.bouton;
}

Mouse.prototype.clicOn = function() {
	this.setClic(true);
}


Mouse.prototype.clicOff = function() {
	this.setClic(false);
}