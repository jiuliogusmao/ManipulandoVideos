function controlarVideo() {
 
	var video = document.getElementById("meuVideo");
	var btn = document.getElementById("controle");
 
  	if (video.paused) {
   	 	video.play();
  	  	btn.innerHTML = "Pausar";
  	} else {
  	  	video.pause();
  	  	btn.innerHTML = "Continuar";
 	}
}