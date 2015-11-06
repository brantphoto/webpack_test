function init() {
  var el = document.getElementById('example');
  var rightColumn = document.getElementsByClassName('menu-container')[0];

  el.addEventListener('mouseover', function(event) {

    event.stopImmediatePropagation();
    var padding = el.style.padding;

    if (typeof padding === 'string') {
      padding = parseInt(padding, 10) || 25;
    }

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

  var clicker = function(event) {
    el.removeEventListener('click', clicker, false);
    rightColumn.className += ' add-flex';
    var theseTags = rightColumn.getElementsByTagName('h2')
    for (var i = 0; i < theseTags.length; i++) {
      theseTags[i].style.display = 'flex'
    }
  }

  el.addEventListener('click', clicker, false);
}

module.exports = init;
