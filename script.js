
const burgerButton = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav__item');

burgerButton.addEventListener('click', toggleMenu);
[...links].forEach((link) => {
  link.addEventListener('click', toggleMenu);
})

function toggleMenu () {
  burgerButton.classList.toggle('active');
  burgerNav.classList.toggle('active');
  body.classList.toggle('lock');
}