
const button = document.getElementById('avatar-navbar');
const closeButton = document.querySelector('.close-button');
const navigationMenu = document.querySelector('.navigation__menu');

button.addEventListener('click', () => {
    navigationMenu.classList.remove('none');
    navigationMenu.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    navigationMenu.classList.add('hide');
});


