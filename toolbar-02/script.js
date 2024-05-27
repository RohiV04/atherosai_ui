
const button = document.querySelector('.settings');
const closeButton = document.querySelector('.close');
const quickSettings = document.querySelector('.quick-settings');

button.addEventListener('click', () => {
    quickSettings.classList.remove('none');
    quickSettings.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    quickSettings.classList.add('hide');
});

