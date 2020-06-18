'use strict';
window.addEventListener('DOMContentLoaded', () => {
    new fullpage('#fullpage', {
        //options here

        autoScrolling:true,
        scrollHorizontally: true,
	    
    });
    //methods
    fullpage_api.setAllowScrolling(true);
    // slider
    function mySlider (imgPath, nextPath, prevPath)  {
        let slideIndex = 1,
        slides = document.querySelectorAll(imgPath),
        prev = document.querySelector(nextPath),
        next = document.querySelector(prevPath);

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
    }

    mySlider('.slider__img', '.prev', '.next');
    mySlider('.slider2__img2', '.prev2', '.next2');
    mySlider('.slider3__img3', '.prev3', '.next3');
    mySlider('.slider4__img4', '.prev4', '.next4');

    

    //portfolio tabs

    'use strict';
    let tab = document.querySelectorAll('.portfolio__wrapper_item'),
        info = document.querySelector('.portfolio__wrapper'),
        tabContent = document.querySelectorAll('.tabContent'),
        sliderWrapper = document.querySelector('.slider__wrapper');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++ ){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('anchor');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('anchor');
            tabContent[b].classList.add('show');
        }
    }

    function anim (c){
        for(let i = 0; i < tab.length; i++){
            tab[i].classList.remove('active');
            tab[c].classList.add('active');
        }
    }
    
    info.addEventListener('click',function(event){
        let target = event.target;
        if(target && target.classList.contains('portfolio__wrapper_item')){
            for (let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    anim(i);
                    break;
                }
            }
        }
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