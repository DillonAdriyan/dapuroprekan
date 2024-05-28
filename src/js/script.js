// navbar fixed
window.onscroll = function() {
  const header = document.querySelector('#header');
  const fixedNav = header.offsetTop;
  const klikWa = document.querySelector('#klik-wa');
  const navMenu = document.querySelector('#nav-menu');
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    klikWa.classList.remove('hidden');
    klikWa.classList.add('flex');

  } else {
    header.classList.remove('navbar-fixed');
    klikWa.classList.remove('flex');
    klikWa.classList.add('hidden');
  }
};

// hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
window.addEventListener("click", function(e) {
  if(e.target != hamburger && e.target != navMenu
    && !e.target.classList.contains('hamburger-line')
) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});


