
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'assets/burger-menu.svg' ?
        'assets/close.svg'
        :
        'assets/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation--mobile'
    );
};



