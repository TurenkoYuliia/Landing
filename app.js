const menuShadow = document.querySelector('.nav__menu__hover__block');
const menuButton = document.querySelector('.button__menu__hover');

const menuActive = document.querySelector('.nav__container');

menuButton.addEventListener('click', () => {
    menuActive.classList.add('nav__container__active' , 'block'); 
    menuShadow.classList.add('block');

    document.body.style.overflow = "hidden";
});

menuShadow.addEventListener('click', () => {
    menuActive.classList.add('back')
    
    setTimeout(() => {
        if ( menuActive.classList.add('back') != 'none') {
            menuActive.classList.remove('nav__container__active' , 'block');
            menuShadow.classList.remove('block');
            menuActive.classList.remove('back')

        document.body.style.overflow = "auto";

        }
    }, 280);    
});