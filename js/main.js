let slickOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true,

    // prevArrow: '<button type="button" class="slick-prev"></button>',
    // nextArrow: '<button type="button" class="slick-next"></button>'
    appendDots: $('.pagination'),
};

$('.slider').slick(slickOptions);
$(document).ready(function(){console.log('OK')});



