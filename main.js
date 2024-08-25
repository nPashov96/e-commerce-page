const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const backdrop = document.querySelector('.backdrop');


menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active');
    backdrop.classList.add('active');
})

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
})

backdrop.addEventListener('click', () => {
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
})