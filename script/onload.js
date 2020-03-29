window.onload = function () {	
	
	// On est prêt on créé nos objets
	clavier = new Keyboard();
	souris = new Mouse();
	
	// Gestion de la souris
	canvas.onmousemove = function(e) {
		souris.updatePosition(e);
	}

	// Le context du canvas
    end = false;
	resizeAuto = true;
	
	context = canvas.getContext('2d');
	
	carte = new Carte();
	
	load = new Loading();
	
	player = new Personnage();
	trone = new Trone();
	
	sounds = new Sounds();
	
	carte.charger("1");
	
	imagesListe = new Array(
		"pictures/gui/loadingfond.png",
		"pictures/gui/loading.png",
		"pictures/backgrounds/end.png",
		
		"pictures/items/porte125.png",
		"pictures/items/levier89.png",
		"pictures/items/piques.png",
		"pictures/items/corde20.png",
		
		"pictures/items/porte125_glow.png",
		"pictures/items/levier89_glow.png",
		"pictures/items/piques_glow.png",
		"pictures/items/corde20_glow.png",
		"pictures/items/scie_show.png",
		"pictures/items/scie_hide.png",
		
		"pictures/items/box.png",
		"pictures/items/loup200.png",
		
		"pictures/backgrounds/1/1.png",
		"pictures/backgrounds/1/2.png",
		"pictures/backgrounds/2/1.png",
		"pictures/backgrounds/2/2.png",
		"pictures/backgrounds/3/1.png",
		"pictures/backgrounds/3/2.png",
		"pictures/backgrounds/sol.png",
		"pictures/backgrounds/main.png",
		"pictures/backgrounds/rain.png",
		"pictures/entity/flamme75.png",
		"pictures/player/perso307.png",
		"pictures/player/bebe108.png",
		"pictures/player/bebe416.png"
		);
	
	images = new Array()
	imagesEtat = new Array()
	
	for(var i = 0, l = imagesListe.length ; i < l ; i++)
	{
		images[imagesListe[i]] = new Image;
		images[imagesListe[i]].src = imagesListe[i];	
	}
	
	last_time = new Date().getTime();
	
	window.addEventListener("resize", redimensionnerCanvas, false);
	window.addEventListener("load", redimensionnerCanvas, false);
	
	global = 1;
	
	redimensionnerCanvas();
	
	loopGlobal();
}
