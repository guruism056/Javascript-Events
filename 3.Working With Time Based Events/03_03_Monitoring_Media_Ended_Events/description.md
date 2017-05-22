* An event handler for the event "ended" is added so that when a song ends the audio tag added to the body is removed and also the id ("playing") of the corresponding list item is also removed. 
* __Issues__ : 
1. More than one songs can be played simultaneously.
2. A song cannot be paused.