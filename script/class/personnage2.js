
Personnage.prototype.actions = function()
{
    if(clavier.get("n") || clavier.get("e") || clavier.get("bas"))
    {
	// Gestion des action de type bouton/levier, etc...
	if (!player.still)
	    {
		for(var i = 0, l = carte.elements.length ; i < l ; i++)
		{
		    if (this.collision(carte.elements[i].x, carte.elements[i].y, carte.elementsSize[carte.elements[i].type].x, carte.elementsSize[carte.elements[i].type].y, this.posX + 25, this.posY)  && carte.nameElementsGood.inArray(carte.elements[i].type))
		    {
		var name = carte.elements[i].type;
			var id = carte.elements[i].id;
			carte.elements[i].show = !carte.elements[i].show;
			for(var i = 0, l = carte.elements.length ; i < l ; i++)
			{
			    if (carte.elements[i].type == name.substr(4) && id == carte.elements[i].id)
			    {
				if (carte.elements[i].still)
				{
				    carte.elements[i].show = false;
				    player.vitesse = 0;
				    player.still = true;
				}
				else
				{
				    carte.elements[i].show = !carte.elements[i].show;
				    clavier.set("n", false);
				    clavier.set("bas", false);
				    clavier.set("e", false);
				}
			    }
			}
		    }
		}
	    }
}
    else
    {
	for(var i = 0, l = carte.elements.length ; i < l ; i++)
	{
	    if (carte.elements[i].still == true)
		{
		    carte.elements[i].stat = false;
		    carte.elements[i].show = true;
		    player.still = false;
		    player.vitesse = 3.5;
		}
	}
    }

}
