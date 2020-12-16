document.addEventListener('DOMContentLoaded', () => {
    const $burgerMenuBtn = document.getElementById('burger-menu__btn');
    const $burgerMenuCloseBtn = document.getElementById('burger-menu__close-btn');
    const $burgerMenuMenuWrapper = document.getElementById('burger-menu__menu-wrapper');

    // const $sidePanel = document.getElementById('contact-side-panel__wrapper');
    // let transformStyle = null;
    // TODO Add actions for close when esc key is press and when click outside
    $burgerMenuBtn.addEventListener('click', () => {
        $burgerMenuMenuWrapper.style.display = 'block';
    });

    $burgerMenuCloseBtn.addEventListener('click', () => {
        $burgerMenuMenuWrapper.style.display = 'none';
    });
});