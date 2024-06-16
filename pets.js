// Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
    
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    
    cycleTestimonials(index); 
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); 
    });
  }, 2000); 
}
cycleTestimonials(0);

