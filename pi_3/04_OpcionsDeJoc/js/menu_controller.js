function start_game(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./html/game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	loadpage("https://u1973250.github.io/p_individual/pi_3/04_OpcionsDeJoc/");
	name = "";
}

function options(){
	loadpage("./html/options.html");
}


