'use strict';
window.addEventListener('DOMContentLoaded', () => {
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

});