# 01_05 STOPPING EVENT PROPAGATION
- You can stop event propagation using the method __*~stopPropagation()~*__ . For IE < 8 set the property  __*~cancelBubble=true~*__ .
- For the following example when you click on pink only the event handler associated with img element is trigerred and that associated with unordered list is not executed.
---
~~~ html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Events</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <ul id = "grid">
    <li><img src="images/ylw.gif" alt="yellow"></li>
    <li><img src="images/org.gif" alt="orange"></li>
    <li><img src="images/ppl.gif" alt ="purple"></li>
    <li><img src="images/blu.gif" alt="blue"></li>
    <li><img src="images/pnk.gif" alt="pink" id = "pink"></li>
    <li><img src="images/grn.gif" alt="green"></li>
    <li><img src="images/ygr.gif" alt="ygreen"></li>
    <li><img src="images/gry.gif" alt="gray"></li>
    <li><img src="images/red.gif" alt="red"></li>
  </ul>

  <script>
    document.getElementById("grid").addEventListener("click", function(e)
    {
       console.log("clicked inside UL");
    },false);
    document.getElementById("pink").addEventListener("click", function(e)
    {
        e.stopPropagation();
        console.log(e.toElement.alt);
    },false);

  </script>
</body>
</html>
~~~
---