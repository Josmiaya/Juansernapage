const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const checkbox = document.querySelector('#toggle-menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('menu-open');
});

checkbox.addEventListener('change', function () {
    if (this.checked) {
        menu.classList.add('menu-open');
    } else {
        menu.classList.remove('menu-open');
    }
});

const menuItems = document.querySelectorAll('.menu p');

menuItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = item.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.menu').classList.remove('show');
    });
});
const menuLinks = document.querySelectorAll('.menu li p');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        checkbox.checked = false;
    });
});
const logo = document.querySelector('.logo');

logo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
