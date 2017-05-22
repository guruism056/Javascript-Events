var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click",function(e)
{
	var songName = e.target.getAttribute("data-src");
	var SongPlaying = document.querySelector("#player");

	if(SongPlaying)
	{
		if(songName === SongPlaying.getAttribute("src"))
		{
			if(SongPlaying.paused)
			{
				SongPlaying.play();
				e.target.id = "playing";
			}
			else
			{
				SongPlaying.pause();
				e.target.id = "paused";
			}
		}
		else
		{
			SongPlaying.src = songName;
			SongPlaying.play();
			if(document.querySelector("#playing"))
			{
				document.querySelector("#playing").id = "";
			}
			else
			{
				document.querySelector("#paused").id = "";

			}
			e.target.id = "playing";
		}
		
	}
	else
	{
		var audioPlayer = document.createElement("audio");
		audioPlayer.id = "player";
		e.target.id = "playing";//different id to differentiate currently playing song from others.
		audioPlayer.src = songName;
		document.body.appendChild(audioPlayer);
		audioPlayer.play();

		audioPlayer.addEventListener("ended",function()
		{
			audioPlayer.parentNode.removeChild(audioPlayer);
			e.target.id = "";
		})
	}
},false);

