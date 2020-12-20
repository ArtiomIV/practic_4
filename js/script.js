let button = document.querySelector('.menu-button');
button.addEventListener('click', showMenu);

function showMenu() {
    document.querySelector('.site-menu').classList.toggle('visible');
    console.log('showMenu');
}