function Sounds() {

this.soundplay = new Array();
this.volume = 60;

}

Sounds.prototype.play = function(name,channel) {
	
	if(channel > 1)
	{
		var i =0;
		while(typeof(this.soundplay[i]) != "undefined")
		{
		i++;
		}
	}
	else
	{
		var i = "music";
	}
	
	this.soundplay[i] = new Audio;
	
	if(this.supportOgg())
	{
		this.soundplay[i].src = "sounds/ogg/"+name+".ogg";
	}
	else
	{
		if(this.supportMp3())
		{
			this.soundplay[i].src = "sounds/mp3/"+name+".mp3";
		}
	}
	
	this.soundplay[i].volume = this.volume/100;
	this.soundplay[i].play();
}

Sounds.prototype.supportMp3 = function() {

	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}

Sounds.prototype.supportOgg = function() {

	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/ogg;').replace(/no/, ''));
}