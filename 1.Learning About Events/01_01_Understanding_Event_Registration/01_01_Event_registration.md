# 01_01  UNDERSTANDING EVENT REGISTRATION
* Three ways of event registration :
    1. Using tag attributes
    2. Using Dot Notation
    3. Using addEventHandler() function

 ### 1. Using tag attributes
 -> supported by all browsers (including oldest ones)
  -> not a good option as script is messed up with html.

  ~~~ html
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
        <li><img src="images/pnk.gif" alt="pink" onclick="alert('pushed pink')"></li>
        <li><img src="images/grn.gif" alt="green"></li>
        <li><img src="images/ygr.gif" alt="ygreen"></li>
        <li><img src="images/gry.gif" alt="gray"></li>
        <li><img src="images/red.gif" alt="red"></li>
      </ul>
    </body>
    </html>
~~~
2. ### Using Dot Notation
 ~~~ html
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
        document.getElementById("pink").onclick = function()
        {
            alert("clicked on pink");
        };
      </script>
    </body>
    </html>

3. ### Using addEventListener() Method
    -> takes three arguments : 
        (i) DOM element on which event is to be applied.
    (ii)Event handler function
    (iii) A boolean value (true/false) depending on if event bubbling is to be allowed or not.
-> IE8 and below don't support this method. They provide a similar method "attachEvent()".

~~~ html
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
        document.getElementById("pink").addEventListener("click", function()
        {
            alert("clicked on pink");
        },false);
      </script>
    </body>
    </html>
~~~  
style.css

~~~ css
    body {
      background: #EAE3CB;
    }
    
    ul {
      margin: 0 auto;
      margin-top:50px;
      padding: 0;
      width: 320px;
    }
    
    ul li {
      list-style: none;
      display: inline-block;
    }