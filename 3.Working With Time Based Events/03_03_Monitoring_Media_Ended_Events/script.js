var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click",function(e)
{
	var audioPlayer = document.createElement("audio");
	var songName = e.target.getAttribute("data-src");
	audioPlayer.id = "player";
	e.target.id = "playing";//different id to differentiate currently playing song from others.
	audioPlayer.src = songName;
	document.body.appendChild(audioPlayer);
	audioPlayer.play();//play() method to play the song.

	audioPlayer.addEventListener("ended",function()
	{
		audioPlayer.parentNode.removeChild(audioPlayer);
		e.target.id = "";
	})//remove the audio tag when song has completed playing.Also remove the id ("playing") of the corresponding list item.
},false);

/*Issues : 
1. More than one songs can be played simultaneously.
2. A song cannot be paused.*/
