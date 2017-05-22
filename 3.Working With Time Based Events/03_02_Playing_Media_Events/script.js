var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click",function(e)
{
	var audioPlayer = document.createElement("audio");
	var songName = e.target.getAttribute("data-src");
	audioPlayer.id = "player";
	e.target.id = "playing";//different id to differentiate currently playing song from others.
	audioPlayer.src = songName;
	document.body.appendChild(audioPlayer);
	audioPlayer.play();

},false);

/*audioPlayer.id = "player" : id assigned to the new audio tag
e.target.id = "playing" : id assigned to the list item containing the song currently playing.*/

/*Issues : 
1. You can't pause songs.
2. More than one songs can be played in a row.
3. Audio player is not updated once song has completed. ie the audio tag should be removed
   from the DOM once the song completes
4. The only way to stop the songs is to refresh the page.
*/