//Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive:{
        640 : {
            items: 2,
            startPosition: 1,
        },
        850 : {
            items: 3,
            startPosition: 1,
        },
        1200 : {
            items: 3,
            margin: 30,
        },
    },
});

$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider_btn--next').click(function() {
      owl.trigger('next.owl.carousel');
});

//Nav icon
const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};