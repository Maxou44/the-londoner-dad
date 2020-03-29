function	Carte()
{
	this.barreHauteur = 32; // 1/21eme
	this.tailleX = 1280;
	this.tailleY = 720;

	this.fond = 1;
	
	this.elements = new Array(); // Elements

	this.nameElementsBad = new Array("grillage","piques", "scie", "loup");
	this.nameElementsGood = new Array("int_grillage", "int_piques", "int_scie", "int_loup");
	this.nameElementsNeutre = new Array("case", "caseBig");

	this.animPluie = 1;
	this.elementsSize = new Array();

	this.elementsSize["case"] = new Object;
	this.elementsSize["case"].x = 40;
	this.elementsSize["case"].y = 40;

	this.elementsSize["caseBig"] = new Object;
	this.elementsSize["caseBig"].x = 80;
	this.elementsSize["caseBig"].y = 80;

	this.elementsSize["plaque"] = new Object;
	this.elementsSize["plaque"].x = 170;
	this.elementsSize["plaque"].y = 20;

	this.elementsSize["grillage"] = new Object;
	this.elementsSize["grillage"].x = 97;
	this.elementsSize["grillage"].y = 312;

	this.elementsSize["int_grillage"] = new Object;
	this.elementsSize["int_grillage"].x = 21;
	this.elementsSize["int_grillage"].y = 450;

	this.elementsSize["piques"] = new Object;
	this.elementsSize["piques"].x = 150;
	this.elementsSize["piques"].y = 35;

	this.elementsSize["scie"] = new Object;
	this.elementsSize["scie"].x = 120;
	this.elementsSize["scie"].y = 60;

	this.elementsSize["int_piques"] = new Object;
	this.elementsSize["int_piques"].x = 45;
	this.elementsSize["int_piques"].y = 60;

	this.elementsSize["int_scie"] = new Object;
	this.elementsSize["int_scie"].x = 45;
	this.elementsSize["int_scie"].y = 60;

	this.elementsSize["int_loup"] = new Object;
	this.elementsSize["int_loup"].x = 45;
	this.elementsSize["int_loup"].y = 60;

	this.elementsSize["loup"] = new Object;
	this.elementsSize["loup"].x = 100;
	this.elementsSize["loup"].y = 78;

	this.anim = new Array();
	this.animEtat = new Array();

	this.bougie = new Array();

	this.tuto = true;
};

Carte.prototype.afficherBougie = function(id,x,y)
{
	if(typeof(this.bougie[id]) == "undefined")
	{
		this.bougie[id] = 0;
	}
	else
	{
		this.bougie[id]++;
	}
	if(this.bougie[id] == 95)
	{
		this.bougie[id] = 0;
	}
	context.drawImage(images["pictures/entity/flamme75.png"],75*this.bougie[id],0,75,75,x-5,y-5,12,12);
};

Carte.prototype.getSpriteX = function(id, taille, nbFrames, avance)
{
    var t = taille/nbFrames;
    add = 0.5 * diff_time;
    if (avance)
	add = -0.5 * diff_time;
    if (typeof(this.anim[id]) == "undefined")
    {
	this.anim[id] = 0;
	if (avance)
	    this.anim[id] = nbFrames - 1;
	this.animEtat[id] = true;
	add = 0;
    }
    if (this.elements[id].stat)
	return (t * (~~this.anim[id]));
    if (!avance)
	{
	    if (this.anim[id] < nbFrames - 2 && this.anim[id] >= 0)
		this.anim[id] = this.anim[id] + add;
	}
    else
	{
	    if (this.anim[id] < nbFrames  && this.anim[id] > 0)
		this.anim[id] = this.anim[id] + add;
	}
    if (this.anim[id] > nbFrames + 1)
	this.anim[id] = nbFrames - 1;
    if (this.anim[id] < 0.5)
	this.anim[id] = 0;
    if (this.elements[id].still && this.anim[id] >= nbFrames - 1)
	this.elements[id].stat = true;
    return t*(~~this.anim[id]);
}

Carte.prototype.afficherPieges = function()
{
	for(var i = 0, l = this.elements.length ; i < l ; i++)
	{
	    var show = false;

		if(this.tuto)
		{
			var name = "_glow";
		}
		else
		{
			var name = "";
		}
	    if(this.elements[i].type == "grillage")
	    {
		    context.drawImage(images["pictures/items/porte125"+name+".png"],this.getSpriteX(i,1875,15, this.elements[i].show),0,125,400,this.elements[i].x, this.elements[i].y, this.elementsSize["grillage"].x, this.elementsSize["grillage"].y);
		show = true;
	    }
	    if(this.elements[i].type == "int_piques")
	    {
		context.drawImage(images["pictures/items/levier89"+name+".png"],this.getSpriteX(i,2759,31, this.elements[i].show),0,89,120,this.elements[i].x, this.elements[i].y, this.elementsSize["int_piques"].x, this.elementsSize["int_piques"].y);
		show = true;
	    }
	    if(this.elements[i].type == "int_loup")
	    {
		context.drawImage(images["pictures/items/levier89"+name+".png"],this.getSpriteX(i,2759,31, this.elements[i].show),0,89,120,this.elements[i].x, this.elements[i].y, this.elementsSize["int_loup"].x, this.elementsSize["int_loup"].y);
		show = true;
	    }
	    if(this.elements[i].type == "int_scie")
	    {
		context.drawImage(images["pictures/items/levier89"+name+".png"],this.getSpriteX(i,2759,31, this.elements[i].show),0,89,120,this.elements[i].x, this.elements[i].y, this.elementsSize["int_scie"].x, this.elementsSize["int_scie"].y);
		show = true;
	    }
	   if(this.elements[i].type == "piques")
		{
		    context.drawImage(images["pictures/items/piques"+name+".png"],this.getSpriteX(i,7875,15, this.elements[i].show),0,525,300,this.elements[i].x, this.elements[i].y, this.elementsSize["piques"].x, this.elementsSize["piques"].y);
			show = true;
		}
	    if (this.elements[i].type == "case")
		{
		    context.drawImage(images["pictures/items/box.png"],0,0,90,90,this.elements[i].x, this.elements[i].y, this.elementsSize["case"].x, this.elementsSize["case"].y);
		    show = true;
		}
		if (this.elements[i].type == "caseBig")
		{
		    context.drawImage(images["pictures/items/box.png"],0,0,90,90,this.elements[i].x, this.elements[i].y, this.elementsSize["caseBig"].x, this.elementsSize["caseBig"].y);
		    show = true;
		}
	    if (this.elements[i].type == "int_grillage")
	       {
		context.drawImage(images["pictures/items/corde20"+name+".png"],this.getSpriteX(i - 1,320,16, this.elements[i].show),0,21,700,this.elements[i].x, this.elements[i].y, this.elementsSize["int_grillage"].x, 700);
		    show = true;
	       }
	    if (this.elements[i].type == "scie")
	       {
		   if (this.elements[i].show)
		       {
			   context.drawImage(images["pictures/items/scie_show.png"],this.getSpriteX(i, 4800, 12, this.elements[i].stat),0,400,200,this.elements[i].x, this.elements[i].y, this.elementsSize["scie"].x, this.elementsSize["scie"].y);
			   if (~~this.anim[i] >= 10)
			       this.anim[i] = 0;
		       }
		   else
		       context.drawImage(images["pictures/items/scie_hide.png"],this.getSpriteX(i, 6400, 16, this.elements[i].stat),0,400,200,this.elements[i].x, this.elements[i].y, this.elementsSize["scie"].x, this.elementsSize["scie"].y);
		    show = true;
	       }
	    if (this.elements[i].type == "loup")
	       {
		   context.drawImage(images["pictures/items/loup200.png"],this.getSpriteX(i, 4200, 21, this.elements[i].show),0,200,156,this.elements[i].x, this.elements[i].y, this.elementsSize["loup"].x, this.elementsSize["loup"].y);
		   show = true;
	       }
	    if(show == false)
	    {
			context.fillStyle = "pink";
			context.fillRect(this.elements[i].x, this.elements[i].y, this.elementsSize[this.elements[i].type].x, this.elementsSize[this.elements[i].type].y);
		}
	}
};

	
Carte.prototype.afficherBackground = function(id)
{
		if(id == 1 || id == 2)
		{
			if(typeof(images["pictures/backgrounds/"+this.fond+"/"+id+".png"]) == "undefined")
			{
				this.fond = 1;
			}
		    context.drawImage(images["pictures/backgrounds/"+this.fond+"/"+id+".png"],0,0,1280,720,0,0,1280,720);
		}
		
		if(id == 3)
		{
			context.drawImage(images["pictures/backgrounds/sol.png"],0,0,1280,720,0,0,1280,720);
		}
		
};
