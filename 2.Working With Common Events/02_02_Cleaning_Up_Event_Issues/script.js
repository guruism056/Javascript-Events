document.querySelector('.grid').addEventListener('click', function(e) {
	
	if(e.target.tagName === "IMG") //run the function only if image is clicked.solves issue 2.
	{
		var howmany = this.querySelectorAll("li").length;//this refers to document.querySelector('.grid')
		//var howmany = this.children.length;
		if(howmany > 1) //solve issue 1
		{
			var removeTarget = e.target.parentNode; 
  			removeTarget.parentNode.removeChild(removeTarget);
		}
		
	}

}, false);
