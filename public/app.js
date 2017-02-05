var init = function (user_box, play_box, game_box, score_box) {
	console.log('init called');
	user_box.innerText 	= 'User loaded';
	play_box.innerText 	= 'Play loaded';
	game_box.innerText 	= 'Game loaded';
	score_box.innerText = 'Score loaded';
}

window.onload = function () {
	console.log('window loaded');
	init(
		document.getElementById('user_container'),
		document.getElementById('play_container'),
		document.getElementById('game_container'),
		document.getElementById('score_container'),
	);
}
