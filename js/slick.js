//********************Slider(slick) setup********************

let slickOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'swing',
    speed: 700,
    dots: true,
    appendDots: $('.pagination')
};

$('.slider').slick(slickOptions);




