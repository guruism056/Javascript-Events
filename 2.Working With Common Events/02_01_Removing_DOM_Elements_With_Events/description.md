* Here we add a function for "click" event on the images. The target element is the "img" element and we need to remove the list item containing the image. Thus the element to be removed is the parent Node of the img element ie. li element.
* __Issue 1__ : When all but one of the images are removed and we finally click on the image this image also disappears according to our code . According to our requirement the last image should remain and information regarding the image should be displayed.
* __Issue 2__ : When we have removed a few images , say 2, and if we click on the whitespace in the unordered list area the whole content of page disappears . The reason is that 
the target is now "ul" and parent of "ul" is "div" which is removed as per the event handler
function