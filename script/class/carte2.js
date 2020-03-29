
Carte.prototype.charger = function(id)
{
	var downloaded = new Array();
	
	downloaded[1] = '{\
	"nom":"1","fond":"1","elements":[\
		{"type":"int_piques", "x":"1000", "y":"483", "id":"1gr1"},\
		{"type":"grillage", "x":"365", "y":"32", "id":"1gr2"},\
		{"type":"int_grillage", "x":"465", "y":"30", "id":"1gr2"},\
		{"type":"case", "x":"370", "y":"648", "id":"sol"},\
		{"type":"case", "x":"410", "y":"648", "id":"sol"},\
		{"type":"case", "x":"450", "y":"648", "id":"sol"},\
		{"type":"case", "x":"490", "y":"648", "id":"sol"},\
		{"type":"case", "x":"530", "y":"648", "id":"sol"},\
		{"type":"case", "x":"410", "y":"608", "id":"sol"},\
		{"type":"case", "x":"450", "y":"608", "id":"sol"},\
		{"type":"case", "x":"490", "y":"608", "id":"sol"},\
		{"type":"case", "x":"450", "y":"568", "id":"sol"},\
		{"type":"caseBig", "x":"900", "y":"610", "id":"sol"},\
		{"type":"caseBig", "x":"980", "y":"610", "id":"sol"},\
		{"type":"caseBig", "x":"1060", "y":"610", "id":"sol"},\
		{"type":"caseBig", "x":"980", "y":"530", "id":"sol"},\
		{"type":"piques", "x":"1010", "y":"315", "id":"1gr1"}]}';

		
	downloaded[2] = '{\
	"nom":"2","fond":"2","elements":[\
		{"type":"int_piques", "x":"550", "y":"535", "id":"2gr1"},\
		{"type":"piques", "x":"376", "y":"315", "id":"2gr1"},\
		{"type":"caseBig", "x":"428", "y":"617", "id":"sol"},\
		{"type":"caseBig", "x":"496", "y":"617", "id":"sol"},\
		{"type":"caseBig", "x":"563", "y":"617", "id":"sol"},\
		{"type":"case", "x":"530", "y":"583", "id":"sol"},\
		{"type":"case", "x":"563", "y":"583", "id":"sol"},\
		{"type":"case", "x":"735", "y":"525", "id":"sol"},\
		{"type":"case", "x":"769", "y":"525", "id":"sol"},\
		{"type":"case", "x":"803", "y":"525", "id":"sol"},\
		{"type":"caseBig", "x":"837", "y":"549", "id":"sol"},\
		{"type":"caseBig", "x":"837", "y":"616", "id":"sol"},\
		{"type":"caseBig", "x":"905", "y":"616", "id":"sol"},\
		{"type":"int_grillage", "x":"1030", "y":"0", "id":"2gr2"},\
		{"type":"int_loup", "x":"775", "y":"640", "id":"2gr3"},\
		{"type":"loup", "x":"600", "y":"270", "id":"2gr3"},\
		{"type":"grillage", "x":"1055", "y":"32", "id":"2gr2"}]}';
		
	downloaded[3] = '{\
	"nom":"3","fond":"3","elements":[\
		{"type":"caseBig", "x":"229", "y":"611", "id":"sol"},\
		{"type":"case", "x":"389", "y":"571", "id":"sol"},\
		{"type":"case", "x":"429", "y":"571", "id":"sol"},\
		{"type":"case", "x":"469", "y":"651", "id":"sol"},\
		{"type":"case", "x":"589", "y":"571", "id":"sol"},\
		{"type":"case", "x":"629", "y":"571", "id":"sol"},\
		{"type":"case", "x":"669", "y":"651", "id":"sol"},\
		{"type":"case", "x":"778", "y":"518", "id":"sol"},\
		{"type":"case", "x":"818", "y":"518", "id":"sol"},\
		{"type":"case", "x":"858", "y":"518", "id":"sol"},\
		{"type":"case", "x":"898", "y":"518", "id":"sol"},\
		{"type":"case", "x":"938", "y":"518", "id":"sol"},\
		{"type":"case", "x":"938", "y":"478", "id":"sol"},\
		{"type":"case", "x":"938", "y":"438", "id":"sol"},\
		{"type":"case", "x":"939", "y":"398", "id":"sol"},\
		{"type":"int_scie", "x":"890", "y":"474", "id":"3gr1"},\
		{"type":"scie", "x":"794", "y":"285", "id":"3gr1"},\
		{"type":"int_loup", "x":"1088", "y":"646", "id":"3gr2"},\
		{"type":"loup", "x":"608", "y":"270", "id":"3gr2"}\
		 ]}';

	if(id > 3)
	{
		global = 4;
	}
	else
	{
	

		this.elements = JSON.parse(downloaded[id]).elements;
		this.id = parseInt(id);
		this.fond = parseInt(JSON.parse(downloaded[id]).fond);
		
		for(var i = 0, l = this.elements.length ; i < l ; i++)
		{
			this.elements[i].x = parseInt(this.elements[i].x);
			this.elements[i].y = parseInt(this.elements[i].y);
			this.elements[i].show = true;
			this.elements[i].still = false;
		this.elements[i].stat = false;
			if (this.elements[i].type == "grillage" || this.elements[i].type == "int_grillage")
				this.elements[i].still = true;
		}
		
		
		this.anim = new Array();
		this.animEtat = new Array();
		
		this.bougie = new Array();
		
		this.tuto = false;
	}
};


Carte.prototype.drawpluie = function(id)
{
	context.drawImage(images["pictures/backgrounds/rain.png"], 0, (~~this.animPluie-1)*200, 1280, 200, 0, 100, 1280, 200);
	this.animPluie += diff_time * 0.1;
	
	if(this.animPluie >40)
	{
		this.animPluie = 1
	}
}
