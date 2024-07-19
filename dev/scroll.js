
var y = window.scrollY;

// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);

// scroll-buffer

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  document.getElementById('scroll-buffer').textContent = scrollPos;
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
