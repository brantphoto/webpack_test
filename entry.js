require("!style!css!./style.css");
document.write(require("./content.js"));
var el = document.getElementById('example');

el.addEventListener('mouseover', function(event) {

  event.stopImmediatePropagation();
  var padding = el.style.padding;

  if (typeof padding === 'string') {
    console.log(padding);
    padding = parseInt(padding, 10) || 25;
  }

  console.log(padding);
  if (padding <= 50) {
    animateTitleGrow(el);
  }

  function animateTitleGrow(element) {

    function frame() {
      padding++;
      element.style.padding = padding + 'px';
      if (padding >= 50) {
        clearInterval(id);
      }
    }

    var id = setInterval(frame, 5);

  }

});

el.addEventListener('mouseleave', function(event) {

  event.stopImmediatePropagation();
  var padding = el.style.padding;

  if (typeof padding === 'string') {
    padding = parseInt(padding, 10) || 60;
  }

  if (padding >= 26) {
    animateTitleShrink(el);
  }

  function animateTitleShrink(element) {

    function frame() {
      padding--;
      element.style.padding = padding + 'px';

      if (padding <= 25) {
        clearInterval(id);
      }
    }

    var id = setInterval(frame, 5);
  }
});



