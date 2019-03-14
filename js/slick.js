let slickOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true,
    appendDots: $('.pagination'),
    prevArrow: $('.slider-prev-button'),
    nextArrow: $('.slider-next-button')
};

$('.slider').slick(slickOptions);




