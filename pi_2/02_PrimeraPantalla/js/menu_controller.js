function start_game(){
	name = prompt("User name");
	loadpage("./html/game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	alert("Leaving the game!")
	loadpage("https://u1973250.github.io/p_individual/")
	name = "";
}

function options(){
	// TODO: Open options menu
	console.log("Options menu button");
}


