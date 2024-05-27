
const notification = document.querySelector('.notification');
const button = document.querySelector('.trigger-button');

const toggleNotification = () => {
    notification.classList.remove('none');
    notification.classList.toggle('hide');
}

document.addEventListener("click", (event) => {
    const isClickInsideNotification = notification.contains(event.target);
    const isButtonClicked = button.contains(event.target);

    if (!isClickInsideNotification && !isButtonClicked) {
        notification.classList.add('hide');
    }
});


