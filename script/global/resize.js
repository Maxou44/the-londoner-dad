function redimensionnerCanvas() {

	if(resizeAuto == true)
	{
		var gameWidth = window.innerWidth;
		var gameHeight = window.innerHeight;
			
		var scaleToFitX = (gameWidth-10) / 1280;
		var scaleToFitY = (gameHeight-10) / 720;
	}
	else
	{
		var gameWidth = window.innerWidth;
		var gameHeight = window.innerHeight;
			
		var scaleToFitX = 1;
		var scaleToFitY = 1;
	}

	
	var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
	
	// Canvas
    canvas.style.width = 1280 * optimalRatio + "px";
    canvas.style.height = 720 * optimalRatio + "px";
	canvas.style.marginLeft = (gameWidth-2-(1280* optimalRatio))/2 + "px";
	canvas.style.marginTop = (gameHeight-2-(720* optimalRatio))/2 + "px";	
}