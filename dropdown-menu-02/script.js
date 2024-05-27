
const notifications = document.querySelector('.notifications');
const dropdown = document.querySelector('.dropdown__wrapper');

notifications.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})


document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isClicked = notifications.contains(event.target);

    if (!isClickInsideDropdown && !isClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    }
});
