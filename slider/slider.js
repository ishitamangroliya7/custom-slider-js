$(document).ready(function () {
    const sliderMain = $('#slider-main');
    const slides = $('.slide');
    const slideCount = slides.length;
    const slideWidth = slides.width();
    let slideIndex = 0;
    let intervalId;

    sliderMain.prepend(slides.clone().addClass('clone'));
    sliderMain.append(slides.clone().addClass('clone'));

    function showSlides() {
        slideIndex++;
        sliderMain.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
        sliderMain.css('transition', 'transform 0.5s ease-in-out');

        if (slideIndex >= slideCount * 2) {
            setTimeout(() => {
                sliderMain.css('transition', 'none');
                slideIndex = slideCount;
                sliderMain.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
            }, 500);
        }
    }

    function nextSlide() {
        // clearInterval(intervalId);
        showSlides();
        // startInterval();
    }

    function prevSlide() {
        // clearInterval(intervalId);
        slideIndex--;
        sliderMain.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
        sliderMain.css('transition', 'transform 0.5s ease-in-out');

        if (slideIndex < 0) {
            setTimeout(() => {
                sliderMain.css('transition', 'none');
                slideIndex = slideCount - 1;
                sliderMain.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
            }, 500);
        }
        // startInterval();
    }

    // function startInterval() {
    //     intervalId = setInterval(showSlides, 3000);
    // }

    // startInterval();

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});
