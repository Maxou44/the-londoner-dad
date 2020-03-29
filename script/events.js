

window.onkeydown = function(e) {
	clavier.onkeydown(e);
};

window.onkeyup = function(e) {
	clavier.onkeyup(e);
};

// Souris (PC)
window.onmousedown = function(e) {
	souris.setBouton(e.which);
	souris.setClic(true);
}
window.onmouseup = function(e) {
	souris.setBouton(e.which);
	souris.setClic(false);
}


// Blocage clic droit (Pour l'editeur)
window.oncontextmenu = function() {return false;}

function endGame(win,id)
{
    carte = new Carte();
    player = new Personnage();
    trone = new Trone();
    sounds = new Sounds();

    carte.charger(id);
    end = true;
};
