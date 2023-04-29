const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

burger.addEventListener('click', (e) => {
  if (menu.style.display == 'flex') {
    menu.style.display = 'none';
    enableScroll();
  } else {
    menu.style.display = 'flex';
    disableScroll();
  }
});

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
