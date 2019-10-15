function play(idPlayer, control) {
    var player = document.querySelector('#audioPlayer');
    player.volume=0.3;
	
    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();	
        control.textContent = 'Play';
    }
}

