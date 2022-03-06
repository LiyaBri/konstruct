//БУРГЕР
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__nav'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');
    //menu_body = document.querySelector('.menu__body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('_active');
        menu.classList.toggle('_menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('_active');
            menu.classList.toggle('_menu-active');
        })
    })
})