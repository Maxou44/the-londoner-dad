function	Personnage()
{
    this.vitesse = 3.3;

    this.still = false;
    this.tailleX = 30;
    this.tailleY = 107;
    this.jumpPxMax = 105;
    this.posYtemp = 0;
    this.posX = 20;
    this.posY = 720-40-this.tailleY;
    this.canJump = true;
    this.isJumping = false;
    this.maxJumpSpeed = 3.7;
    this.actualJumpSpeed;
    this.newton = 4;
    this.beginJumpY = 0;
    this.frame = 0;
    this.recule = false;

    this.animationNormale = new Array(2,3,4,5,6,7,8,9,10,11);
    this.animationCorde = new Array(12,13,14);
    this.animationImmobile = new Array(1);
};

Personnage.prototype.collid = function(x, y)
{
    if (x < 0 || x > carte.tailleX - this.tailleX)
	return (0);
    if (y >= carte.tailleY - carte.barreHauteur - this.tailleY || y < (carte.tailleY + carte.barreHauteur) / 2)
    	return (0);
    var i = 0;
    while(i < carte.elements.length)
    {
	if(this.collision(carte.elements[i].x,
			  carte.elements[i].y,
			  carte.elementsSize[carte.elements[i].type].x,
			  carte.elementsSize[carte.elements[i].type].y, x, y))
	{
		if (carte.nameElementsBad.inArray(carte.elements[i].type))
		    return (0);
		if (carte.nameElementsNeutre.inArray(carte.elements[i].type))
		    return (0);
	}
	    i++;
    }
    return (1);
}

Personnage.prototype.collision = function(startX,startY,sizeX,sizeY,X,Y)
{
    	if((startX >= X + this.tailleX)
    || (startX + sizeX <= X)
    || (startY >= Y + this.tailleY)
    || (startY + sizeY < Y ))
    	    return false;
	else
	    return true;
}

Personnage.prototype.gravity = function()
{
    var	vitesse = this.newton * diff_time;
    collid = this.collid(this.posX + 25, this.posY + vitesse + 10);
    if (!collid)
	{
	    this.posY += this.collid(this.posX + 25, this.posY + vitesse + 10 + 1);
	    if (this.newton < 0)
	    	this.newton = 4;
	    this.canJump = true;
	}
    else
	{
	    this.posY += vitesse * collid;
	}
};

Personnage.prototype.fall = function()
{
   player.newton = 3;
}

Personnage.prototype.jump = function()
{
    if (!this.isJumping && (clavier.get("espace") || clavier.get("z") || clavier.get("haut")) && this.canJump)
	{
	    this.beginJumpY = this.posY;
	    this.isJumping = true;
	    this.actualJumpSpeed = this.maxJumpSpeed;
	    this.canJump = false;
	    clavier.set("espace", false);
	}
    if (this.isJumping)
    {
	var vitesse = this.newton * diff_time * this.actualJumpSpeed;

	this.actualJumpSpeed -= diff_time * 0.18;
	if (this.actualJumpSpeed < 1.5)
	    this.actualJumpSpeed = 1.5;
	if (this.posY > this.beginJumpY - this.jumpPxMax)
	    {
		if (this.collid(this.posX + 25, this.posY - vitesse + 15))
		    this.posY -= vitesse;
		else
		    this.isJumping = false;
	    }
	else
	    this.isJumping = false;
    }
};

Personnage.prototype.move = function()
{
    var	move = false;
    var	vitesse = this.vitesse * diff_time;
    if(clavier.get("d") || clavier.get("droite"))
	{
	    this.posX +=  vitesse * this.collid(this.posX + 25 + vitesse, this.posY);
	    move = true;
	    this.recule = false;
	}
    if(clavier.get("q") || clavier.get("gauche"))
	{
	    this.posX -=  vitesse * this.collid(this.posX + 25 - vitesse, this.posY);
	    move = true;
	    this.recule = true;
	}
    if (move == true)
	this.frame += 0.3 * diff_time;
    else if (!this.still)
	this.frame = 0;
    if (!this.still)
	this.jump();
    else
	this.isJumping = false;
    this.frame %= 12;
};


Personnage.prototype.display = function()
{
    if (this.still)
    {
	var pos;
	this.frame += 0.2 * diff_time;
	if (this.frame > 2)
	    this.frame = 2;
	if (!this.recule)
	    pos = 2253 - 75 * (16 + ~~this.frame);
	else
	    pos = 2253 - 75 * (15 - ~~this.frame);
	context.drawImage(images["pictures/player/perso307.png"], pos, 0, 75, 120, this.posX, this.posY, 80, 120);
    }
    else
	{
	    if (!this.recule)
	    {
		var	pos = 2253 - 75 * (30 - ~~this.frame);
		context.drawImage(images["pictures/player/perso307.png"], pos, 0, 75, 120, this.posX, this.posY, 80, 120);
	    }
	    else
	    {
		var	pos = 2256 - 75 * (1 + ~~this.frame);
		context.drawImage(images["pictures/player/perso307.png"], pos, 0, 75, 120, this.posX, this.posY, 80, 120);
	    }
	}
};
