document.querySelector('.grid').addEventListener('click', function(e) {
  var removeTarget = e.target.parentNode; //target is image , parent of img ie li element 
  //is to be removed.Hence removeTarget is e.target.parentNode
  removeTarget.parentNode.removeChild(removeTarget);
}, false);

/*issues to be solved : 
Issue 1 : When all but one of the images are removed and we finally click on the image this 
   image also disappears according to our code . According to our requirement the last
   image should remain and information regarding the image should be displayed.
Issue 2 : When we have removed a few images , say 2, and if we click on the whitespace in 
   the unordered list area the whole content of page disappears . The reason is that 
   the target is now "ul" and parent of "ul" is "div" which is removed as per the event handler
   function*/