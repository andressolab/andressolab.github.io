document.addEventListener('DOMContentLoaded', () => {
    const $testBtn = document.getElementById('header__button-test');

    $testBtn.addEventListener('click', () => {
        const $headerTitle = document.getElementById('header__title');
        $headerTitle.innerHTML = 'HABEMOUS Interacciones';
    });
});