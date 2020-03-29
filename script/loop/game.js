function loopGame(){
	// Ready * Boucle du jeu
	
	carte.drawpluie();
	
    carte.afficherBackground(1);
    
	trone.display();

	carte.afficherPieges();
	
	carte.afficherBackground(2);
	
    player.display(1);
    player.move();
    player.actions();
    player.gravity();
    trone.gravity();
    trone.move();
	
	
	
	// On dessine les bougies
	/*carte.afficherBougie(1,124,59);
	carte.afficherBougie(2,147,65);
	carte.afficherBougie(3,271,64);
	carte.afficherBougie(4,294,59);
	carte.afficherBougie(5,207,157);
	carte.afficherBougie(6,386,198);
	carte.afficherBougie(7,445,198);
	carte.afficherBougie(8,803,119);
	carte.afficherBougie(9,818,122);
	carte.afficherBougie(10,900,122);
	carte.afficherBougie(11,918,118);*/

	carte.afficherBackground(3);
	
}
