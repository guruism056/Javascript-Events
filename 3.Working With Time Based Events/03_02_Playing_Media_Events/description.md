* In the html file we have used a "data-src" attribute which is not a standard attribute. The data element is an HTML5 attribute that allows you to generate your own properties for a tag. So whenever you want to create a new attribute of your own use "data-" then attribute name.
* If you want to dig into code for javascript audio and media (different properties and methods) go through the following link : 
[https://www.w3schools.org/tags/ref_av_dom.asp](https://www.w3schools.org/tags/ref_av_dom.asp)
* In the js file : 
    * audioPlayer.id = "player" : id assigned to the new audio tag
    * e.target.id = "playing" : id assigned to the list item containing the song currently playing.
* __Issues__
1. You can't pause songs.
2. More than one songs can be played in a row.
3. Audio player is not updated once song has completed. ie the audio tag should be removed from the DOM once the song completes
4. The only way to stop the songs is to refresh the page.