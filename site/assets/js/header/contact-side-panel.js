document.addEventListener('DOMContentLoaded', () => {
    const $headerBtnContact = document.getElementById('header-btn__contact');
    const $sidePanel = document.getElementById('contact-side-panel__wrapper');
    let transformStyle = null;
    // TODO Add accions for close when esc key is press and when click outside
    $headerBtnContact.addEventListener('click', () => {
        transformStyle = $sidePanel.style.transform;
        if(transformStyle === 'none') {
            $sidePanel.style.transform = 'translate(100%)';
        } else {
            $sidePanel.style.transform = 'none';
        }
    });
});