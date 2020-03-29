function loopIntro(){

	context.drawImage(images["pictures/backgrounds/main.png"], 0, 0, 1920, 1080, 0, 0, 1280, 720);
	
	if (clavier.get("enter") || clavier.get("espace") || clavier.get("n"))
	{
	    global = 3;
	}
}