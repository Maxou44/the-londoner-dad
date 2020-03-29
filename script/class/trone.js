function	Trone()
{
    this.tailleX = 90;
    this.tailleY = 100;

    this.posX = 20;
    this.posY = 170;

    this.vitesse =0.6;// 0.6;//0.6;//5; // 1 : Rapide / 10 : Lent
    this.newton = 3;
    this.tempVitesse = 0;
    this.alive = true;

	this.anim = 1;
};

Trone.prototype.move = function()
{
    var	vitesse = this.vitesse * diff_time;

    this.posX += vitesse;
    if (this.posX >= 1260 - this.tailleX)
	{
		endGame(true,carte.id+1);
	}
	for(var i = 0, l = carte.elements.length ; i < l ; i++)
    {
		if (carte.elements[i].show)
		{
			if(this.collision(carte.elements[i].x, carte.elements[i].y, carte.elementsSize[carte.elements[i].type].x, carte.elementsSize[carte.elements[i].type].y) && carte.nameElementsBad.inArray(carte.elements[i].type))
		    {
				if (this.vitesse == 0.1)
					return (0);
				setTimeout("endGame(false,"+carte.id+")", 300)
				this.vitesse = 0.1;
		    }
		}
	}
};

Trone.prototype.collision = function(startX,startY,sizeX,sizeY) {

	if((startX >= this.posX + this.tailleX)    // trop à droite
    || (startX + sizeX <= this.posX)		// trop à gauche
    || (startY >= this.posY + this.tailleY) 
    || (startY + sizeY <= this.posY))

	{
		return false;
	}
	else
	{
		return true;
	}
}


Trone.prototype.gravity = function()
{
   var vitesse = this.newton * diff_time;

	if(((720-carte.barreHauteur)/2)-this.tailleY>this.posY)
            this.posY += vitesse;
    if (this.posY > (720 - carte.barreHauteur) / 2 - this.tailleY)
    	this.posY = (720 - carte.barreHauteur) / 2 - this.tailleY;
};

Trone.prototype.display = function()
{

    if (this.alive)
    {
	context.drawImage(images["pictures/player/bebe108.png"], ~~(this.anim-1)*108, 0, 108, 130, this.posX, this.posY, this.tailleX, this.tailleY);
	this.anim += (this.vitesse / 2) * diff_time;
	this.anim %= 24;
	if (this.anim < 1)
	    this.anim = 1;
    }
    else
    {
	context.drawImage(images["pictures/player/bebe108.png"], ~~(this.anim-1)*108, 0, 108, 130, this.posX, this.posY, this.tailleX, this.tailleY);
    }
};
