const themeSwitch = document.querySelector('.theme-switch__input');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', themeSwitch.checked);
});
