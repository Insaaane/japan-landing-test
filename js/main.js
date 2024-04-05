// Затенение меню при скролле
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
})

// burger-menu
const menuLinks = document.querySelectorAll('.header__link');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const burgerLines = burger.querySelectorAll('.burger__line');

const burgerMenuHandler = () => {
    menu.classList.toggle('header__nav_active');

    burgerLines.forEach(line => {
        line.classList.toggle('active');
    })
}

burger.addEventListener('click', burgerMenuHandler);

if (window.innerWidth <= 768) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', burgerMenuHandler);
    })
}

// scroll

const menuHeight = document.querySelector('.header').offsetHeight;

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function(e) {
        // Предотвращаем стандартное поведение ссылки
        e.preventDefault();
        
        // Получаем целевой элемент по его ID из атрибута href ссылки
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Вычисляем позицию целевого элемента на странице, учитывая высоту меню
            const targetPosition = targetElement.getBoundingClientRect().top - menuHeight;
            
            // Прокручиваем страницу до позиции целевого элемента с плавной анимацией 
            window.scrollTo({
                top: window.scrollY + targetPosition,
                behavior: 'smooth'
            });
        }
    });
});