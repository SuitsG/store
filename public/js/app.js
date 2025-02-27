document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.search-icon');
  const menu = document.querySelector('.search-bar');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});


