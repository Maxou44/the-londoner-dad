function Keyboard() {

	this.touchesEtats = new Array();
	this.touchesListe =  new Array();
	
	this.touchesListe["bas"]=40;
	this.touchesListe["haut"]=38;
	this.touchesListe["gauche"]=37;
	this.touchesListe["droite"]=39;
	this.touchesListe["fin"]=35;
	this.touchesListe["begin"]=36;
	this.touchesListe["back_tab"]=8;
	this.touchesListe["tab"]=9;
	this.touchesListe["sh_tab"]=16;
	this.touchesListe["enter"]=13;
	this.touchesListe["echap"]=27;
	this.touchesListe["espace"]=32;
	this.touchesListe["suppr"]=46;
	this.touchesListe["a"]=65;
	this.touchesListe["b"]=66;
	this.touchesListe["c"]=67;
	this.touchesListe["d"]=68;
	this.touchesListe["e"]=69;
	this.touchesListe["f"]=70;
	this.touchesListe["g"]=71;
	this.touchesListe["h"]=72;
	this.touchesListe["i"]=73;
	this.touchesListe["j"]=74;
	this.touchesListe["k"]=75;
	this.touchesListe["l"]=76;
	this.touchesListe["m"]=77;
	this.touchesListe["n"]=78;
	this.touchesListe["o"]=79;
	this.touchesListe["p"]=80;
	this.touchesListe["q"]=81;
	this.touchesListe["r"]=82;
	this.touchesListe["s"]=83;
	this.touchesListe["t"]=84;
	this.touchesListe["u"]=85;
	this.touchesListe["v"]=86;
	this.touchesListe["w"]=87;
	this.touchesListe["x"]=88;
	this.touchesListe["y"]=89;
	this.touchesListe["z"]=90;
	this.touchesListe["f1"]=112;
	this.touchesListe["f2"]=113;
	this.touchesListe["f3"]=114;
	this.touchesListe["f4"]=115;
	this.touchesListe["f5"]=116;
	this.touchesListe["f6"]=117;
	this.touchesListe["f7"]=118;
	this.touchesListe["f8"]=119;
}

Keyboard.prototype.onkeydown = function(e) {

	for(var i in this.touchesListe)
	{
		if(e.keyCode == this.touchesListe[i]){
			this.set(i,true);
		}
	}
}

Keyboard.prototype.onkeyup = function(e) {

	for(var i in this.touchesListe)
	{
		if(e.keyCode == this.touchesListe[i]){
			this.set(i,false);
		}
	}
}

Keyboard.prototype.set = function(touche,value) {

	this.touchesEtats[touche] = value;
}

Keyboard.prototype.get = function(touche) {
	
	return this.touchesEtats[touche];
}

Keyboard.prototype.unset = function(touche) {

	for(var i in this.touchesListe)
	{
		this.set(i,false);
	}
}
