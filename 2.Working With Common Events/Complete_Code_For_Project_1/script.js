document.querySelector('.grid').addEventListener('click', function(e) {
	
	if(e.target.tagName === "IMG") //check to see if I clicked on IMG only.solves issue 2.
	{
		var howmany = this.querySelectorAll("li").length;//this refers to document.querySelector('.grid')
		//var howmany = this.children.length;
		if(howmany > 1) //solve issue 1
		{
			var removeTarget = e.target.parentNode; 
  			removeTarget.parentNode.removeChild(removeTarget);
		}
		else // this is the last image left
		{

			var photoTitle = e.target.alt;
			document.querySelector("#art p").innerHTML = "<p>You have picked : " +  photoTitle + "</p>";
			
		}
	}

}, false);
