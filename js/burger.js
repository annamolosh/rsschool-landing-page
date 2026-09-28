const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-tablet-menu');
const mobileLinks = document.querySelectorAll('.mobile-tablet-menu-link');


burger.addEventListener('click', () => {

    const isOpen = burger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('menu-open', isOpen);

});


mobileLinks.forEach((link) => {

    link.addEventListener('click', () => {

        burger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');

    });

});


document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        burger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');

    }

});


window.addEventListener('resize', () => {

    if (window.innerWidth > 768) {

        burger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');

    }

});