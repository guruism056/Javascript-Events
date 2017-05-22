* Here we add the ~mouseout~ event to solve the existing issue in the previous code.
* for mouseout event (refer code) this works too : 
~~~ javascript
e.target.addEventListener('mouseout',function(f)
{
myElement.parentNode.removeChild(myElement);
},false);
~~~
* Ignore line 18 of the above code ie. suppose mouseout event has not been removed. Following issue will arise in such a case : 
There is still an issue which can be noticed in the console only.
Whenever a mouseout event is fired an error occurs saying : "Cannot read parentNode property of null"
Another point to be noticed is that these errors increase exponentially.
The reason behind the errors can be explained as follows : 
 (i) When you roll over and roll out for the first time you don't get any error.
 (ii) For the second time you have one mouseover but two mouseout events thus giving a total of 1 errors.
 (iii) For the third time you have one mouseover but three mouseout events thus giving a total of 3 (1 + 2) errors.
 All this weird situation occurs because we haven't deleted the mouseout event. There are a bunch of events in the events queue which are not being processed giving these errors.