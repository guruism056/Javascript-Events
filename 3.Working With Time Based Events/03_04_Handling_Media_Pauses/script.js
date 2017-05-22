var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click",function(e)
{
	var songName = e.target.getAttribute("data-src");
	var SongPlaying = document.querySelector("#player");

	if(SongPlaying)
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

/*Functionality added for media pauses.
Issues : 
1.Suppose a song is currently playing and you click on some other song , the current 
song pauses the id "paused" is assigned to the clicked song and the songs which was
previously playing still has id "playing" though it has paused.
2.That is the ids are messed and so are the stylings.*/ 

