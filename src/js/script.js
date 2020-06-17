'use strict';
window.addEventListener('DOMContentLoaded', () => {
    // slider
        let slideIndex = 1,
        slides = document.querySelectorAll('.slider__img'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

        showSlides(slideIndex);

    function showSlides (n) {
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
    //scroll
    // собираем все якоря; устанавливаем время анимации и количество кадров
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;

    anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function() {
    // считаем на сколько скроллить за 1 такт
    let scrollBy = coordY / framesCount;

    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
    // и дно страницы не достигнуто
    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    // то скроллим на к-во пикселей, которое соответствует одному такту
    window.scrollBy(0, scrollBy);
    } else {
    // иначе добираемся до элемента и выходим из интервала
    window.scrollTo(0, coordY);
    clearInterval(scroller);
    }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
    });
    });
    //modal window
    let modalBtn = document.querySelector('.btn'),
        modalForm = document.querySelector('.contact-form'),
        close = document.querySelector('.close'),
        shadow = document.querySelector('.shad');
    modalBtn.addEventListener('click', () => {
        modalForm.style.opacity = '1';
        modalForm.style.display = 'block';
        shadow.style.display = "block";
    });
    close.addEventListener('click', () => {
        modalForm.style.opacity = '0';
        modalForm.style.display = 'none';
        shadow.style.display = "none";
    });
});