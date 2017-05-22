document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {
  	var myElement = document.createElement("div");
  	myElement.className = "preview";
  	e.target.parentNode.appendChild(myElement);

  	var myImg = document.createElement("img");
  	var imgLoc =  e.target.src;
  	myImg.src = imgLoc.substring(0,imgLoc.length-7) + ".jpg";
  	myElement.appendChild(myImg);
  	//console.log(myElement);

  } // check to see that I clicked on IMG only
}, false); // click event

/*
Here we have created two new DOM elements (div,img) to see a larger version of the image when hovered.
Issue : When we move from image to another we don't get rid of the previous image.
        The images get on top of each other.
*/