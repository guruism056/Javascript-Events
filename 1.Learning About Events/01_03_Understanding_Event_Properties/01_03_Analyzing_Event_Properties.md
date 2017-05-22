# 01_03 ANALYZING EVENT PROPERTIES
- Once you register and capture an event you receive an event object back from the browser. The object might look different depending on the browser you are using.
- The data you receive will depend a lot on the type of event requested. But there is also a lot of info that is common to all events.
- Lets look at some of the info we get back from the event object.In the code below we just output the event object in the console.
    ~~~ javascript
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>JavaScript Events</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <ul>
        <li><img src="images/ylw.gif" alt="yellow"></li>
        <li><img src="images/org.gif" alt="orange"></li>
        <li><img src="images/ppl.gif" alt="purple"></li>
        <li><img src="images/blu.gif" alt="blue"></li>
        <li><img src="images/pnk.gif" alt="pink" id = "pink"></li>
        <li><img src="images/grn.gif" alt="green"></li>
        <li><img src="images/ygr.gif" alt="ygreen"></li>
        <li><img src="images/gry.gif" alt="gray"></li>
        <li><img src="images/red.gif" alt="red"></li>
      </ul>
    
      <script>
        document.getElementById("pink").addEventListener("click", function(e)
        {
            console.log(e);
        },false);
      </script>
    </body>
    </html>
    ~~~

- Different Info can be seen in the console as soon as the pink image is clicked.
-  We discuss some important info as follows : 
    1. **Event Info**
         - __*type*__ : The type of the event. "click" in this case.
         - __*defaultPrevented*__ : Whether or not the default behaviour of the event is prevented. Here the value is false.
         - __*timeStamp*__ : Returns the timeStamp when the event was triggered. It returns the number of milliseconds since midnight of January 1, 1970, when the event occured.
    2. **Targeting Info**
        - __*currentTarget*__ : The element to which the event was assigned to.
        - __*target*__ : The element which the event is currently being applied to. ("img#pink" in this case)
        - __*srcElement*__ : The element which actually fired the event.("img#pink" in this case)
        - __*fromElement*__ , __*toElement*__ : These properties are related to mouseover and mouseout events.For mouseover and mouseout events, these properties indicate the elements the mouse is leaving from and moving into, respectively. 
    3. **Coordinate Info**
        - __*screenX*__, __*screenY*__ : Returns the coordinates of the mouse (cursor) relative to the screen when the event fired.
        - __*clientX*__ , __*clientY*__ : Returns the coordinates of the mouse (cursor) relative to the window when the event fired.
        - __*offsetX*__ , __*offsetY*__ : Returns the coordinates of the cursor relative to the element that fired the event. (relative to img#pink in this case).
        - __*pageX*__ , __*pageY*__ : Returns the coordinates of the cursor relative to the HTML document. These are similar to :
            (i) __pageX: window.pageXOffset+e.clientX__
            (ii) __pageY: window.pageYOffset+e.clientY__
        -  __*layerX*__ , __*layerY*__ : Returns the mouse coordinates relative to another positioned event and that has do with CSS positioning.This property takes scrolling of the page into account, and returns a value relative to the whole of the document, unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element. [Click here for more details](https://developer.mozilla.org/en/docs/Web/API/UIEvent/layerX).
    4. **Key/Mouse Info**
        - __*charCode/keyCode*__ : This property is used to detect which character of the keyboard was pressed.Property indicating the Unicode for the key pressed. Use String.fromCharCode(keyCode) to convert code to string.
        - __*altKey*__ , __*ctrlKey*__ , __*shiftKey*__ : Boolean properties that indicate whether the Alt, Ctrl and Shift keys were pressed at time of the event.
        - __*button*__ : An integer indicating which mouse button was pressed or released, 1 = left, 2 = right, 4 = middle. If multiple buttons are pressed, the value is the sum of both buttons, such as 3 (1+2) for left and right.