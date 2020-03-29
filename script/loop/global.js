function loopGlobal(){

    current_time = new Date().getTime();
    diff_time = (current_time - last_time) * 0.1;
   
	if(global == 1)
	{
		loopLoading();
	}
	
	if(global == 2)
	{
		loopIntro();
	}
	
	if(global == 3)
	{
		loopGame();
		
		if(clavier.get("t"))
		{
			carte.tuto = !carte.tuto;
			clavier.set("t", false);
		}
		
	}
	
	if(global == 4)
	{
		loopEnd();
	}
	
	if(clavier.get("r"))
	{
		resizeAuto = !resizeAuto;
		clavier.set("r", false);
		redimensionnerCanvas();
	}
	
    last_time = current_time;
    window.requestAnimationFrame(loopGlobal);
	
	
}

